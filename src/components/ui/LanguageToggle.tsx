"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import type { Locale } from "../../i18n/config";
import styles from "./LanguageToggle.module.css";

type LanguageToggleProps = {
  locale: Locale;
};

export default function LanguageToggle({ locale }: LanguageToggleProps) {
  const pathname = usePathname();
  const nextLocale: Locale = locale === "en" ? "fr" : "en";

  const segments = pathname.split("/");
  if (segments.length > 1) {
    segments[1] = nextLocale;
  }

  const href = segments.join("/") || `/${nextLocale}`;

  return (
    <Link
      className={styles.link}
      href={href}
      hrefLang={nextLocale}
      aria-label={`Switch language to ${nextLocale === "fr" ? "French" : "English"}`}
    >
      {nextLocale.toUpperCase()}
    </Link>
  );
}
