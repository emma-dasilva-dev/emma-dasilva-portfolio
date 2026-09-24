"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";

import type { Locale } from "../../../i18n/config";
import type { NavigationItem } from "../../../types/content";
import { useActiveSection } from "../../../hooks/useActiveSection";
import LanguageToggle from "../../ui/LanguageToggle";
import ThemeToggle from "../../ui/ThemeToggle";

import styles from "./Header.module.css";

type HeaderProps = {
  locale: Locale;
  navigation: {
    menu: string;
    close: string;
    ariaLabel: string;
    items: NavigationItem[];
  };
};

export default function Header({ locale, navigation }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const homePath = `/${locale}`;
  const isHome = pathname === homePath;

  const sectionIds = useMemo(
    () => navigation.items.map((item) => item.id),
    [navigation.items]
  );

  const activeSection = useActiveSection(isHome ? sectionIds : []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  const sectionHref = (id: string) => `/${locale}#${id}`;

  return (
    <header className={`${styles.header} ${open ? styles.open : ""}`}>
      <div className={styles.topRow}>
        <Link
          className={styles.brand}
          href={`/${locale}`}
          onClick={() => setOpen(false)}
        >
          <span>emma@portfolio:~</span>
          <span className={styles.prompt}>$</span>
        </Link>

        <div className={styles.controls}>
          <button
            type="button"
            className={styles.menuButton}
            onClick={() => setOpen((current) => !current)}
            aria-expanded={open}
            aria-controls="site-navigation"
          >
            {open ? navigation.close : navigation.menu}
          </button>

          <LanguageToggle locale={locale} />
          <ThemeToggle />
        </div>
      </div>

      <div className={styles.reveal}>
        <div className={styles.revealInner}>
          <nav
            id="site-navigation"
            className={styles.navigation}
            aria-label={navigation.ariaLabel}
          >
            {navigation.items.map((item) => {
              const active =
                isHome && activeSection === item.id;

              return (
                <Link
                  key={item.id}
                  href={sectionHref(item.id)}
                  className={`${styles.navigationItem} ${
                    active ? styles.active : ""
                  }`}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "location" : undefined}
                >
                  <span className={styles.number}>{item.number}</span>
                  <span className={styles.label}>{item.label}</span>
                  <span className={styles.path}>~{item.path}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
