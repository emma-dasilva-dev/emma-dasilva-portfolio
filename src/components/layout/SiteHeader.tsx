"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { navigationItems } from "@/content/navigation";
import type { Locale } from "@/types/locale";

import styles from "./SiteHeader.module.css";

interface SiteHeaderProps {
  locale: Locale;
  menuLabel: string;
  closeMenuLabel: string;
  languageLabel: string;
}

export function SiteHeader({ locale, menuLabel, closeMenuLabel, languageLabel }: SiteHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const closeMenu = (restoreFocus = false) => {
    setIsOpen(false);
    if (restoreFocus) {
      requestAnimationFrame(() => menuButtonRef.current?.focus());
    }
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu(true);
        return;
      }

      if (event.key !== "Tab" || !menuRef.current) return;

      const focusable = Array.from(
        menuRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      );

      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const localeHref = (targetLocale: Locale) => `/${targetLocale}`;

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link className={styles.identity} href={`/${locale}#home`} onClick={() => closeMenu()}>
          Emma Da Silva
        </Link>

        <nav className={styles.desktopNav} aria-label={locale === "en" ? "Primary navigation" : "Navigation principale"}>
          <ul className={styles.navList}>
            {navigationItems.map((item) => (
              <li key={item.id}>
                <Link className={styles.navLink} href={`/${locale}${item.href}`}>
                  {item.label[locale]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.desktopLanguages} aria-label={languageLabel}>
          <a className={locale === "en" ? styles.languageActive : styles.languageLink} href={localeHref("en")} hrefLang="en">EN</a>
          <span className={styles.languageDivider} aria-hidden="true">/</span>
          <a className={locale === "fr" ? styles.languageActive : styles.languageLink} href={localeHref("fr")} hrefLang="fr">FR</a>
        </div>

        <button
          ref={menuButtonRef}
          className={styles.menuButton}
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span>{isOpen ? closeMenuLabel : menuLabel}</span>
        </button>
      </div>

      {isOpen ? (
        <div ref={menuRef} id="mobile-navigation" className={styles.mobilePanel}>
          <nav className={`container ${styles.mobileNav}`} aria-label={locale === "en" ? "Mobile navigation" : "Navigation mobile"}>
            <ul className={styles.mobileList}>
              {navigationItems.map((item) => (
                <li key={item.id}>
                  <Link className={styles.mobileLink} href={`/${locale}${item.href}`} onClick={() => closeMenu()}>
                    {item.label[locale]}
                  </Link>
                </li>
              ))}
            </ul>

            <div className={styles.mobileLanguages} aria-label={languageLabel}>
              <span className={styles.mobileLanguageLabel}>{languageLabel}</span>
              <div className={styles.mobileLanguageLinks}>
                <a className={locale === "en" ? styles.languageActive : styles.languageLink} href={localeHref("en")} hrefLang="en">EN</a>
                <span className={styles.languageDivider} aria-hidden="true">/</span>
                <a className={locale === "fr" ? styles.languageActive : styles.languageLink} href={localeHref("fr")} hrefLang="fr">FR</a>
              </div>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
