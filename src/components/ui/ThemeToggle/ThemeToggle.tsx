"use client";

import {
  useLocale,
} from "@/components/providers/LocaleProvider/LocaleProvider";

import {
  useTheme,
} from "@/components/providers/ThemeProvider/ThemeProvider";

import styles from "./ThemeToggle.module.css";

export default function ThemeToggle() {
  const {
    locale,
  } =
    useLocale();

  const {
    theme,
    toggleTheme,
  } =
    useTheme();

  const targetLabel =
    theme === "light"
      ? locale === "fr"
        ? "SOMBRE"
        : "DARK"
      : locale === "fr"
        ? "CLAIR"
        : "LIGHT";

  const accessibleLabel =
    theme === "light"
      ? locale === "fr"
        ? "Activer le thème sombre"
        : "Switch to dark theme"
      : locale === "fr"
        ? "Activer le thème clair"
        : "Switch to light theme";

  return (
    <button
      type="button"
      className={
        styles.toggle
      }
      onClick={
        toggleTheme
      }
      aria-label={
        accessibleLabel
      }
    >
      {targetLabel}
    </button>
  );
}
