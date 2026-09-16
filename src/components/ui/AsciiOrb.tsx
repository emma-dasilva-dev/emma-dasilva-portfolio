"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./AsciiOrb.module.css";

interface AsciiOrbProps { locale: "en" | "fr"; }
interface Point3D { x: number; y: number; z: number; }
type OrbState = "idle" | "speaking" | "complete";

const CANVAS_SIZE = 480;
const POINT_COUNT = 150;
const CONNECTION_DISTANCE = 58;
const FEMALE_VOICE_HINTS = ["jenny", "aria", "denise", "hortense", "amelie", "audrey", "zira", "ava", "serena", "samantha", "victoria", "karen", "moira", "tessa", "susan", "female"];

function createSpherePoints(count: number): Point3D[] {
  const points: Point3D[] = [];
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));
  for (let index = 0; index < count; index += 1) {
    const y = 1 - (index / (count - 1)) * 2;
    const radius = Math.sqrt(1 - y * y);
    const theta = goldenAngle * index;
    points.push({ x: Math.cos(theta) * radius, y, z: Math.sin(theta) * radius });
  }
  return points;
}

const spherePoints = createSpherePoints(POINT_COUNT);

function pickPreferredVoice(locale: "en" | "fr"): Promise<SpeechSynthesisVoice | null> {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return Promise.resolve(null);

  const synth = window.speechSynthesis;
  const getPreferredVoiceFromList = (voices: SpeechSynthesisVoice[]) => {
    const prefix = locale === "fr" ? "fr" : "en";
    const localized = voices.filter((voice) => voice.lang.toLowerCase().startsWith(prefix));
    return localized.find((voice) => FEMALE_VOICE_HINTS.some((hint) => voice.name.toLowerCase().includes(hint))) ?? localized[0] ?? null;
  };

  const existingVoices = synth.getVoices();
  if (existingVoices.length > 0) return Promise.resolve(getPreferredVoiceFromList(existingVoices));

  return new Promise((resolve) => {
    const handleVoicesChanged = () => {
      synth.removeEventListener("voiceschanged", handleVoicesChanged);
      resolve(getPreferredVoiceFromList(synth.getVoices()));
    };

    synth.addEventListener("voiceschanged", handleVoicesChanged, { once: true });
    window.setTimeout(() => {
      synth.removeEventListener("voiceschanged", handleVoicesChanged);
      resolve(getPreferredVoiceFromList(synth.getVoices()));
    }, 300);
  });
}

export function AsciiOrb({ locale }: AsciiOrbProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const speakingRef = useRef(false);
  const completeTimerRef = useRef<number | null>(null);
  const [orbState, setOrbState] = useState<OrbState>("idle");

  const copy = useMemo(() => locale === "fr" ? {
    play: "Écouter l’accueil", stop: "Arrêter", idle: "PRÊT", speaking: "EN COURS", complete: "TERMINÉ",
    speech: "Bienvenue sur le portfolio d’Emma. Je suis Emma, étudiante en cybersécurité et génie informatique. Je développe mes compétences en systèmes, réseaux, Linux, sécurité et développement logiciel. Découvre mon parcours, mes projets et les technologies avec lesquelles je travaille.",
  } : {
    play: "Hear welcome", stop: "Stop", idle: "IDLE", speaking: "SPEAKING", complete: "COMPLETE",
    speech: "Welcome to Emma's portfolio. I'm Emma, a cybersecurity and computer engineering student building strong foundations in systems, networks, Linux, security and software development. Explore my work, experience and the technologies I use.",
  }, [locale]);

  useEffect(() => () => {
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    if (completeTimerRef.current !== null) window.clearTimeout(completeTimerRef.current);
  }, [locale]);

  useEffect(() => { speakingRef.current = orbState === "speaking"; }, [orbState]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let disposed = false;

    const draw = (time: number) => {
      if (disposed) return;
      const speaking = speakingRef.current;
      const centerX = CANVAS_SIZE / 2;
      const centerY = CANVAS_SIZE / 2;
      const pulse = speaking ? 1 + Math.sin(time * 0.014) * 0.045 + Math.sin(time * 0.029) * 0.018 : 1 + Math.sin(time * 0.0018) * 0.012;
      const radius = 155 * pulse;
      const rotationY = reduced ? 0.5 : time * (speaking ? 0.00035 : 0.00012);
      const rotationX = reduced ? -0.14 : -0.14 + Math.sin(time * 0.0005) * 0.07;
      context.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

      const projected = spherePoints.map((point, index) => {
        const cosY = Math.cos(rotationY); const sinY = Math.sin(rotationY);
        const x1 = point.x * cosY - point.z * sinY; const z1 = point.x * sinY + point.z * cosY;
        const cosX = Math.cos(rotationX); const sinX = Math.sin(rotationX);
        const y2 = point.y * cosX - z1 * sinX; const z2 = point.y * sinX + z1 * cosX;
        const distortion = speaking ? 1 + Math.sin(time * 0.018 + index * 0.57) * 0.04 : 1;
        const perspective = 1 + z2 * 0.15;
        return { x: centerX + x1 * radius * distortion * perspective, y: centerY + y2 * radius * distortion * perspective, z: z2 };
      });

      for (let first = 0; first < projected.length; first += 1) {
        for (let second = first + 1; second < projected.length; second += 1) {
          const a = projected[first]; const b = projected[second];
          const dx = a.x - b.x; const dy = a.y - b.y; const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance > CONNECTION_DISTANCE || Math.abs(a.z - b.z) > 0.4) continue;
          const depth = Math.max(0.12, ((a.z + b.z) / 2 + 1) / 2);
          const alpha = (1 - distance / CONNECTION_DISTANCE) * depth * (speaking ? 0.22 : 0.12);
          context.beginPath(); context.moveTo(a.x, a.y); context.lineTo(b.x, b.y);
          context.strokeStyle = `rgba(0,149,166,${alpha})`; context.lineWidth = 0.7; context.stroke();
        }
      }

      projected.forEach((point, index) => {
        const depth = (point.z + 1) / 2;
        const flicker = speaking ? 0.82 + Math.sin(time * 0.025 + index) * 0.18 : 1;
        const size = 1.15 + depth * 2.1 + (speaking ? 0.35 : 0);
        const alpha = Math.max(0.28, (0.34 + depth * 0.66) * flicker);
        context.beginPath(); context.arc(point.x, point.y, size, 0, Math.PI * 2);
        context.fillStyle = `rgba(0,225,225,${alpha})`; context.fill();
      });

      const glow = context.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius * 1.25);
      glow.addColorStop(0, `rgba(0,225,225,${speaking ? 0.07 : 0.035})`);
      glow.addColorStop(0.58, `rgba(0,149,166,${speaking ? 0.035 : 0.018})`);
      glow.addColorStop(1, "rgba(0,0,0,0)"); context.fillStyle = glow; context.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
      if (!reduced) animationRef.current = window.requestAnimationFrame(draw);
    };

    draw(0);
    return () => { disposed = true; if (animationRef.current !== null) window.cancelAnimationFrame(animationRef.current); };
  }, []);

  const finish = () => {
    speakingRef.current = false; setOrbState("complete");
    completeTimerRef.current = window.setTimeout(() => setOrbState("idle"), 1800);
  };
  const stopSpeech = () => {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel(); speakingRef.current = false; setOrbState("idle");
  };
  const speak = async () => {
    if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) return;
    if (completeTimerRef.current !== null) window.clearTimeout(completeTimerRef.current);
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(copy.speech);
    utterance.lang = locale === "fr" ? "fr-FR" : "en-US"; utterance.rate = 0.93; utterance.pitch = 1.08;
    const voice = await pickPreferredVoice(locale);
    if (voice) utterance.voice = voice;
    utterance.onstart = () => { speakingRef.current = true; setOrbState("speaking"); };
    utterance.onend = finish;
    utterance.onerror = () => { speakingRef.current = false; setOrbState("idle"); };
    window.speechSynthesis.speak(utterance);
  };

  return <div className={styles.root}>
    <div className={styles.canvasWrap}>
      <canvas ref={canvasRef} width={CANVAS_SIZE} height={CANVAS_SIZE} className={`${styles.orbCanvas} ${orbState === "speaking" ? styles.speaking : ""}`} aria-hidden="true" />
      <span className={`${styles.state} ${orbState === "speaking" ? styles.stateActive : ""}`}>{copy[orbState]}</span>
    </div>
    <button type="button" onClick={orbState === "speaking" ? stopSpeech : speak} className={styles.voiceButton}>
      <span className={styles.voiceIcon} aria-hidden="true">{orbState === "speaking" ? "■" : "◌"}</span>{orbState === "speaking" ? copy.stop : copy.play}
    </button>
  </div>;
}
