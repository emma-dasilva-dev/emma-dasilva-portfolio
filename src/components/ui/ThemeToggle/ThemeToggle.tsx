"use client";

import {
  useEffect,
  useState,
} from "react";

import styles from "./ThemeToggle.module.css";

type Theme =
  | "light"
  | "dark";

const STORAGE_KEY =
  "emma-portfolio-theme";

function getCurrentTheme(): Theme {
  return document
    .documentElement
    .dataset
    .theme === "dark"
      ? "dark"
      : "light";
}

export default function ThemeToggle() {
  const [
    theme,
    setTheme,
  ] =
    useState<Theme>(
      "light",
    );

  useEffect(() => {
    setTheme(
      getCurrentTheme(),
    );
  }, []);

  const toggleTheme =
    () => {
      const nextTheme:
        Theme =
        theme ===
        "light"
          ? "dark"
          : "light";

      document
        .documentElement
        .dataset
        .theme =
        nextTheme;

      try {
        localStorage.setItem(
          STORAGE_KEY,
          nextTheme,
        );
      } catch {
        // Local storage may be unavailable.
      }

      setTheme(
        nextTheme,
      );
    };

  return (
    <button
      type="button"
      className={
        styles.toggle
      }
      data-theme={theme}
      onClick={
        toggleTheme
      }
      aria-label={
        theme === "light"
          ? "Switch to dark mode"
          : "Switch to light mode"
      }
    >
      <span
        className={
          styles.track
        }
        aria-hidden="true"
      >
        <span
          className={
            styles.knob
          }
        />
      </span>
    </button>
  );
}