"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import styles from "./AsciiOrb.module.css";

interface AsciiOrbProps {
  locale: "en" | "fr";
}

const WIDTH = 31;
const HEIGHT = 17;
const CHARACTERS = [" ", ".", ":", "*", "+", "#", "%", "@"];

function createOrbFrame(time: number, speaking: boolean) {
  const rows: string[] = [];
  const pulse = speaking
    ? Math.sin(time * 0.018) * 0.08 + Math.sin(time * 0.043) * 0.045
    : Math.sin(time * 0.0035) * 0.025;

  for (let y = 0; y < HEIGHT; y += 1) {
    let row = "";

    for (let x = 0; x < WIDTH; x += 1) {
      const nx = (x - (WIDTH - 1) / 2) / ((WIDTH - 1) / 2);
      const ny = (y - (HEIGHT - 1) / 2) / ((HEIGHT - 1) / 2);
      const angle = Math.atan2(ny, nx);
      const wobble =
        Math.sin(angle * 3 + time * 0.0028) * (speaking ? 0.055 : 0.02) +
        Math.cos(angle * 5 - time * 0.0021) * (speaking ? 0.035 : 0.012);
      const radius = Math.sqrt(nx * nx + ny * ny);
      const edge = 0.78 + pulse + wobble;
      const shellDistance = Math.abs(radius - edge);

      if (shellDistance < 0.065) {
        const shimmer =
          (Math.sin(angle * 4 + time * 0.006) +
            Math.cos(angle * 7 - time * 0.004) +
            2) /
          4;
        const characterIndex = Math.min(
          CHARACTERS.length - 1,
          2 + Math.floor(shimmer * (CHARACTERS.length - 3)),
        );
        row += CHARACTERS[characterIndex];
      } else if (radius < edge - 0.07) {
        const field =
          (Math.sin(nx * 7 + time * 0.004) +
            Math.cos(ny * 8 - time * 0.0035) +
            Math.sin((nx + ny) * 5 + time * 0.0025)) /
          3;
        const threshold = speaking ? 0.56 : 0.72;

        if (field > threshold) {
          row += speaking ? ":" : ".";
        } else {
          row += " ";
        }
      } else {
        row += " ";
      }
    }

    rows.push(row.replace(/\s+$/, ""));
  }

  return rows.join("\n");
}

export function AsciiOrb({ locale }: AsciiOrbProps) {
  const [frame, setFrame] = useState(() => createOrbFrame(0, false));
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const animationFrameRef = useRef<number | null>(null);

  const copy = useMemo(
    () =>
      locale === "fr"
        ? {
            play: "Écouter l’intro",
            stop: "Arrêter",
            speech:
              "Bienvenue sur le portfolio d’Emma. Je suis développeuse full-stack junior et je développe mon expertise en cybersécurité. Découvre mes projets et mon parcours.",
          }
        : {
            play: "Hear intro",
            stop: "Stop voice",
            speech:
              "Welcome to Emma's portfolio. I'm a junior full-stack software engineer building my expertise in cybersecurity. Explore my projects and journey.",
          },
    [locale],
  );

  useEffect(() => {
    setIsSupported(typeof window !== "undefined" && "speechSynthesis" in window);
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      setFrame(createOrbFrame(0, false));
      return;
    }

    const animate = (time: number) => {
      setFrame(createOrbFrame(time, isSpeaking));
      animationFrameRef.current = window.requestAnimationFrame(animate);
    };

    animationFrameRef.current = window.requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
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
    utterance.rate = 0.92;
    utterance.pitch = 1;
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className={styles.root}>
      <pre className={`${styles.orb} ${isSpeaking ? styles.speaking : ""}`} aria-hidden="true">
        {frame}
      </pre>

      {isSupported ? (
        <button type="button" onClick={isSpeaking ? stopSpeech : speak} className={styles.voiceButton}>
          <span aria-hidden="true">{isSpeaking ? "■" : "◉"}</span>
          {isSpeaking ? copy.stop : copy.play}
        </button>
      ) : null}
    </div>
  );
}
