"use client";

import {
  useLocale,
} from "@/components/providers/LocaleProvider/LocaleProvider";

import styles from "./LanguageSwitcher.module.css";

export default function LanguageSwitcher() {
  const {
    locale,
    setLocale,
  } = useLocale();

  return (
    <div
      className={
        styles.switcher
      }
      aria-label="Language"
    >
      <button
        type="button"
        className={
          locale === "en"
            ? styles.active
            : styles.option
        }
        onClick={() =>
          setLocale("en")
        }
        aria-pressed={
          locale === "en"
        }
      >
        EN
      </button>

      <button
        type="button"
        className={
          locale === "fr"
            ? styles.active
            : styles.option
        }
        onClick={() =>
          setLocale("fr")
        }
        aria-pressed={
          locale === "fr"
        }
      >
        FR
      </button>
    </div>
  );
}
