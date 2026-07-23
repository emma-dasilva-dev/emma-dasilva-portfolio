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

export default function ThemeToggle() {
  const [theme, setTheme] =
    useState<Theme>("light");

  useEffect(() => {
    const currentTheme =
      document.documentElement
        .dataset.theme ===
      "dark"
        ? "dark"
        : "light";

    setTheme(currentTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme:
      Theme =
      theme === "light"
        ? "dark"
        : "light";

    document.documentElement
      .dataset.theme =
      nextTheme;

    localStorage.setItem(
      STORAGE_KEY,
      nextTheme,
    );

    setTheme(nextTheme);
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
