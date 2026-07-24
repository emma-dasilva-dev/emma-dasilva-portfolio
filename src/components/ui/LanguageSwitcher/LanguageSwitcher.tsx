"use client";

import {
  useLocale,
} from "@/components/providers/LocaleProvider/LocaleProvider";

import styles from "./LanguageSwitcher.module.css";

export default function LanguageSwitcher() {
  const {
    locale,
    setLocale,
  } =
    useLocale();

  return (
    <div
      className={
        styles.switcher
      }
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        className={`${styles.option} ${
          locale === "en"
            ? styles.active
            : ""
        }`}
        onClick={() =>
          setLocale("en")
        }
        aria-pressed={
          locale === "en"
        }
        aria-label="English"
      >
        EN
      </button>

      <button
        type="button"
        className={`${styles.option} ${
          locale === "fr"
            ? styles.active
            : ""
        }`}
        onClick={() =>
          setLocale("fr")
        }
        aria-pressed={
          locale === "fr"
        }
        aria-label="Français"
      >
        FR
      </button>
    </div>
  );
}