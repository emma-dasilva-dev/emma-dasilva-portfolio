"use client";

import { useLocale } from "@/components/providers/LocaleProvider/LocaleProvider";
import styles from "./LanguageSwitcher.module.css";

const TARGET_LABEL = { en: "FR", fr: "EN" } as const;

const ACCESSIBLE_LABEL = {
  en: "Passer en français",
  fr: "Switch to English",
} as const;

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();
  const nextLocale = locale === "en" ? "fr" : "en";

  return (
    <button
      type="button"
      className={styles.switcher}
      onClick={() => setLocale(nextLocale)}
      aria-label={ACCESSIBLE_LABEL[locale]}
    >
      {TARGET_LABEL[locale]}
    </button>
  );
}
