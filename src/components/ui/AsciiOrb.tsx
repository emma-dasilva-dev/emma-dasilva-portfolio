"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import styles from "./AsciiOrb.module.css";

interface AsciiOrbProps {
  locale: "en" | "fr";
}

const frames = [
`          .:::.          
      .:::::::::::.      
    .:::::.....:::::.    
   :::::.       .:::::   
  ::::.    ...    .::::  
 :::.    .:::::.    .::: 
 :::    .:::::::.    ::: 
 :::.    .:::::.    .::: 
  ::::.    ...    .::::  
   :::::.       .:::::   
    .:::::.....:::::.    
      .:::::::::::.      
          .:::.          `,
`          .---.          
      .-----------.      
    .----.......----.    
   ----.         .----   
  ---.     ...     .---  
 ---.    .-----.    .--- 
 ---    .-------.    --- 
 ---.    .-----.    .--- 
  ---.     ...     .---  
   ----.         .----   
    .----.......----.    
      .-----------.      
          .---.          `,
`          .+++.          
      .+++++++++++.      
    .+++++.....+++++.    
   +++++.       .+++++   
  ++++.    ...    .++++  
 +++.    .+++++.    .+++ 
 +++    .+++++++.    +++ 
 +++.    .+++++.    .+++ 
  ++++.    ...    .++++  
   +++++.       .+++++   
    .+++++.....+++++.    
      .+++++++++++.      
          .+++.          `,
];

export function AsciiOrb({ locale }: AsciiOrbProps) {
  const [frameIndex, setFrameIndex] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const copy = useMemo(
    () =>
      locale === "fr"
        ? {
            status: "Système prêt",
            play: "Lancer l’intro",
            stop: "Arrêter",
            speech:
              "Bienvenue sur le portfolio d’Emma. Je suis développeuse full-stack junior et je développe mon expertise en cybersécurité. Explore mes projets et mon parcours.",
          }
        : {
            status: "System ready",
            play: "Play intro",
            stop: "Stop",
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
    if (reduceMotion) return;

    intervalRef.current = window.setInterval(() => {
      setFrameIndex((current) => (current + 1) % frames.length);
    }, isSpeaking ? 110 : 360);

    return () => {
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, [isSpeaking]);

  const stopSpeech = () => {
    if (typeof window === "undefined") return;
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  const speak = () => {
    if (!isSupported) return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(copy.speech);
    utterance.lang = locale === "fr" ? "fr-FR" : "en-US";
    utterance.rate = 0.95;
    utterance.pitch = 1;
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className={styles.root}>
      <div className={styles.orbShell} aria-hidden="true">
        <pre className={`${styles.orb} ${isSpeaking ? styles.speaking : ""}`}>{frames[frameIndex]}</pre>
      </div>

      <div className={styles.controls}>
        <span className={styles.status}>
          <span className={styles.dot} aria-hidden="true" />
          {copy.status}
        </span>

        {isSupported ? (
          <button type="button" onClick={isSpeaking ? stopSpeech : speak} className={styles.voiceButton}>
            {isSpeaking ? copy.stop : copy.play}
          </button>
        ) : null}
      </div>
    </div>
  );
}
