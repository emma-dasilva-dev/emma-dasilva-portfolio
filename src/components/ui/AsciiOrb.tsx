"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import styles from "./AsciiOrb.module.css";

interface AsciiOrbProps {
  locale: "en" | "fr";
}

interface Point3D {
  x: number;
  y: number;
  z: number;
}

const POINT_COUNT = 132;
const CONNECTION_DISTANCE = 46;

const FEMALE_VOICE_HINTS: Record<"en" | "fr", string[]> = {
  en: [
    "samantha",
    "ava",
    "victoria",
    "serena",
    "karen",
    "moira",
    "tessa",
    "zira",
    "aria",
    "jenny",
    "susan",
    "female",
  ],
  fr: [
    "amelie",
    "audrey",
    "aurelie",
    "hortense",
    "marie",
    "virginie",
    "julie",
    "celine",
    "lea",
    "denise",
    "female",
  ],
};

function createSpherePoints(count: number): Point3D[] {
  const points: Point3D[] = [];
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));

  for (let index = 0; index < count; index += 1) {
    const y = 1 - (index / (count - 1)) * 2;
    const radius = Math.sqrt(1 - y * y);
    const theta = goldenAngle * index;

    points.push({
      x: Math.cos(theta) * radius,
      y,
      z: Math.sin(theta) * radius,
    });
  }

  return points;
}

const spherePoints = createSpherePoints(POINT_COUNT);

function pickPreferredVoice(locale: "en" | "fr") {
  const voices = window.speechSynthesis.getVoices();
  const localePrefix = locale === "fr" ? "fr" : "en";
  const localizedVoices = voices.filter((voice) =>
    voice.lang.toLowerCase().startsWith(localePrefix),
  );

  const preferredHints = FEMALE_VOICE_HINTS[locale];

  return (
    localizedVoices.find((voice) =>
      preferredHints.some((hint) => voice.name.toLowerCase().includes(hint)),
    ) ??
    localizedVoices.find((voice) => voice.default) ??
    localizedVoices[0] ??
    null
  );
}

export function AsciiOrb({ locale }: AsciiOrbProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isSupported, setIsSupported] = useState(false);

  const copy = useMemo(
    () =>
      locale === "fr"
        ? {
            play: "Écouter l’accueil",
            stop: "Arrêter",
            speech:
              "Bienvenue sur le portfolio d’Emma. Je suis Emma, développeuse full-stack junior, et je développe mon expertise en cybersécurité. Découvre mes projets, mon parcours et les technologies avec lesquelles je travaille.",
          }
        : {
            play: "Hear welcome",
            stop: "Stop",
            speech:
              "Welcome to Emma's portfolio. I'm Emma, a junior full-stack software engineer building my expertise in cybersecurity. Explore my projects, experience, and the technologies I work with.",
          },
    [locale],
  );

  useEffect(() => {
    setIsSupported(typeof window !== "undefined" && "speechSynthesis" in window);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const devicePixelRatio = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      canvas.width = Math.max(1, Math.floor(bounds.width * devicePixelRatio));
      canvas.height = Math.max(1, Math.floor(bounds.height * devicePixelRatio));
      context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    };

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    resize();

    const draw = (time: number) => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const centerX = width / 2;
      const centerY = height / 2;
      const baseRadius = Math.min(width, height) * 0.34;
      const speechPulse = isSpeaking
        ? 1 + Math.sin(time * 0.013) * 0.045 + Math.sin(time * 0.031) * 0.018
        : 1 + Math.sin(time * 0.0018) * 0.012;
      const radius = baseRadius * speechPulse;
      const rotationY = reducedMotion ? 0.55 : time * (isSpeaking ? 0.00034 : 0.00012);
      const rotationX = reducedMotion ? -0.16 : -0.16 + Math.sin(time * 0.00055) * 0.08;

      context.clearRect(0, 0, width, height);

      const projected = spherePoints.map((point, index) => {
        const cosY = Math.cos(rotationY);
        const sinY = Math.sin(rotationY);
        const x1 = point.x * cosY - point.z * sinY;
        const z1 = point.x * sinY + point.z * cosY;

        const cosX = Math.cos(rotationX);
        const sinX = Math.sin(rotationX);
        const y2 = point.y * cosX - z1 * sinX;
        const z2 = point.y * sinX + z1 * cosX;

        const distortion = isSpeaking
          ? 1 + Math.sin(time * 0.018 + index * 0.62) * 0.035
          : 1;
        const perspective = 1 + z2 * 0.14;

        return {
          x: centerX + x1 * radius * distortion * perspective,
          y: centerY + y2 * radius * distortion * perspective,
          z: z2,
        };
      });

      for (let first = 0; first < projected.length; first += 1) {
        const a = projected[first];

        for (let second = first + 1; second < projected.length; second += 1) {
          const b = projected[second];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance > CONNECTION_DISTANCE) continue;
          if (Math.abs(a.z - b.z) > 0.42) continue;

          const depth = Math.max(0.12, ((a.z + b.z) / 2 + 1) / 2);
          const alpha = (1 - distance / CONNECTION_DISTANCE) * depth * (isSpeaking ? 0.19 : 0.1);

          context.beginPath();
          context.moveTo(a.x, a.y);
          context.lineTo(b.x, b.y);
          context.strokeStyle = `rgba(0, 149, 166, ${alpha})`;
          context.lineWidth = 0.55;
          context.stroke();
        }
      }

      projected.forEach((point, index) => {
        const depth = (point.z + 1) / 2;
        const flicker = isSpeaking ? 0.8 + Math.sin(time * 0.025 + index) * 0.2 : 1;
        const size = 0.8 + depth * 1.7 + (isSpeaking ? 0.25 : 0);
        const alpha = Math.max(0.22, (0.28 + depth * 0.72) * flicker);

        context.beginPath();
        context.arc(point.x, point.y, size, 0, Math.PI * 2);
        context.fillStyle = `rgba(0, 225, 225, ${alpha})`;
        context.fill();
      });

      const glow = context.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        radius * 1.15,
      );
      glow.addColorStop(0, `rgba(0, 225, 225, ${isSpeaking ? 0.055 : 0.025})`);
      glow.addColorStop(0.55, `rgba(0, 149, 166, ${isSpeaking ? 0.025 : 0.012})`);
      glow.addColorStop(1, "rgba(0, 0, 0, 0)");
      context.fillStyle = glow;
      context.fillRect(0, 0, width, height);

      if (!reducedMotion) {
        animationRef.current = window.requestAnimationFrame(draw);
      }
    };

    draw(0);

    if (!reducedMotion) {
      animationRef.current = window.requestAnimationFrame(draw);
    }

    return () => {
      observer.disconnect();
      if (animationRef.current !== null) {
        window.cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isSpeaking]);

  const stopSpeech = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  const speak = () => {
    if (!isSupported) return;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(copy.speech);
    utterance.lang = locale === "fr" ? "fr-FR" : "en-US";
    utterance.rate = 0.93;
    utterance.pitch = 1.08;

    const preferredVoice = pickPreferredVoice(locale);
    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className={styles.root}>
      <canvas
        ref={canvasRef}
        className={`${styles.orbCanvas} ${isSpeaking ? styles.speaking : ""}`}
        aria-hidden="true"
      />

      {isSupported ? (
        <button type="button" onClick={isSpeaking ? stopSpeech : speak} className={styles.voiceButton}>
          <span className={styles.voiceIcon} aria-hidden="true">{isSpeaking ? "■" : "◌"}</span>
          {isSpeaking ? copy.stop : copy.play}
        </button>
      ) : null}
    </div>
  );
}
