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
      const animationFrame =
        window.requestAnimationFrame(
          () => {
            setVisible(
              true,
            );
          },
        );

      return () => {
        window.cancelAnimationFrame(
          animationFrame,
        );
      };
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
          threshold: 0.12,

          rootMargin:
            "0px 0px -6% 0px",
        },
      );

    observer.observe(
      element,
    );

    return () => {
      observer.disconnect();
    };
  }, []);

  const inlineStyle = {
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
      style={
        inlineStyle
      }
    >
      {children}
    </div>
  );
}
