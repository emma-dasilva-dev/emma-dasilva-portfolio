"use client";
import { useLocale } from "@/components/providers/LocaleProvider/LocaleProvider";
import styles from "./LanguageSwitcher.module.css";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();
  const next = locale === "en" ? "fr" : "en";
  return <button type="button" className={styles.button} onClick={() => setLocale(next)} aria-label={`Switch to ${next.toUpperCase()}`}>{next.toUpperCase()}</button>;
}
