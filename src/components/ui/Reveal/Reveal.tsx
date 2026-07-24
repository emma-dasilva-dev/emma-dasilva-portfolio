"use client";

import {
  type CSSProperties,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

import styles from "./Reveal.module.css";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function Reveal({
  children,
  className = "",
  delay = 0,
}: RevealProps) {
  const elementRef =
    useRef<HTMLDivElement>(
      null,
    );

  const [
    visible,
    setVisible,
  ] =
    useState(false);

  useEffect(() => {
    const element =
      elementRef.current;

    if (!element) {
      return;
    }

    const reducedMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

    if (
      reducedMotion ||
      !(
        "IntersectionObserver" in
        window
      )
    ) {
      setVisible(true);
      return;
    }

    const observer =
      new IntersectionObserver(
        (
          entries,
        ) => {
          const entry =
            entries[0];

          if (
            entry.isIntersecting
          ) {
            setVisible(
              true,
            );

            observer.disconnect();
          }
        },
        {
          threshold: 0.14,

          rootMargin:
            "0px 0px -8% 0px",
        },
      );

    observer.observe(
      element,
    );

    return () => {
      observer.disconnect();
    };
  }, []);

  const style = {
    "--reveal-delay":
      `${delay}ms`,
  } as CSSProperties;

  return (
    <div
      ref={elementRef}
      className={`${styles.reveal} ${
        visible
          ? styles.visible
          : ""
      } ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}