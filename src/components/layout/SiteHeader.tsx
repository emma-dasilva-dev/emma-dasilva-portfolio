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
  const [activeSection, setActiveSection] = useState("home");
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const closeMenu = (restoreFocus = false) => {
    setIsOpen(false);
    if (restoreFocus) requestAnimationFrame(() => menuButtonRef.current?.focus());
  };

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") { closeMenu(true); return; }
      if (event.key !== "Tab" || !menuRef.current) return;
      const focusable = Array.from(menuRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'));
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    const sections = navigationItems.map((item) => document.getElementById(item.id)).filter((section): section is HTMLElement => Boolean(section));
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveSection(visible[0].target.id);
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: [0, 0.1, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const localeHref = (targetLocale: Locale) => `/${targetLocale}`;
  const status = locale === "en"
    ? [["Focus", "Cybersecurity"], ["Study", "Computer Engineering"], ["Learning", "Networking"], ["System", "Linux"], ["Status", "Building"]]
    : [["Focus", "Cybersécurité"], ["Études", "Génie informatique"], ["Apprentissage", "Réseaux"], ["Système", "Linux"], ["Statut", "En progression"]];

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link className={styles.identity} href={`/${locale}#home`} onClick={() => closeMenu()}>Emma Da Silva</Link>

        <nav className={styles.desktopNav} aria-label={locale === "en" ? "Primary navigation" : "Navigation principale"}>
          <ul className={styles.navList}>
            {navigationItems.map((item) => (
              <li key={item.id}>
                <Link className={`${styles.navLink} ${activeSection === item.id ? styles.navLinkActive : ""}`} href={`/${locale}${item.href}`} aria-current={activeSection === item.id ? "location" : undefined}>
                  {item.label[locale]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.systemStatus} aria-label={locale === "en" ? "Current technical focus" : "Orientation technique actuelle"}>
          <p>{locale === "en" ? "System status" : "État du système"}</p>
          <dl>
            {status.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
          </dl>
        </div>

        <div className={styles.desktopLanguages} aria-label={languageLabel}>
          <a className={locale === "en" ? styles.languageActive : styles.languageLink} href={localeHref("en")} hrefLang="en">EN</a>
          <span className={styles.languageDivider} aria-hidden="true">/</span>
          <a className={locale === "fr" ? styles.languageActive : styles.languageLink} href={localeHref("fr")} hrefLang="fr">FR</a>
        </div>

        <button ref={menuButtonRef} className={styles.menuButton} type="button" aria-expanded={isOpen} aria-controls="mobile-navigation" onClick={() => setIsOpen((open) => !open)}>
          <span>{isOpen ? closeMenuLabel : menuLabel}</span>
        </button>
      </div>

      {isOpen ? (
        <div ref={menuRef} id="mobile-navigation" className={styles.mobilePanel}>
          <nav className={`container ${styles.mobileNav}`} aria-label={locale === "en" ? "Mobile navigation" : "Navigation mobile"}>
            <ul className={styles.mobileList}>
              {navigationItems.map((item) => <li key={item.id}><Link className={styles.mobileLink} href={`/${locale}${item.href}`} onClick={() => closeMenu()}>{item.label[locale]}</Link></li>)}
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
