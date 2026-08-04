"use client";

import { useEffect, useState } from "react";
import MobileMenu from "@/components/layout/MobileMenu/MobileMenu";
import { useLocale } from "@/components/providers/LocaleProvider/LocaleProvider";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher/LanguageSwitcher";
import { HOME_COPY, NAV_ITEMS } from "@/content/home";
import { useActiveSection } from "@/hooks/useActiveSection";
import styles from "./Header.module.css";

const DESKTOP_BREAKPOINT = "(min-width: 901px)";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { locale } = useLocale();
  const copy = HOME_COPY[locale];
  const activeSection = useActiveSection(NAV_ITEMS.map((item) => item.id));

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    const desktopQuery = window.matchMedia(DESKTOP_BREAKPOINT);
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    desktopQuery.addEventListener("change", closeOnDesktop);

    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      desktopQuery.removeEventListener("change", closeOnDesktop);
    };
  }, [menuOpen]);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          <a href="#home" className={styles.brand}>
            EMMA DA SILVA
          </a>

          <nav
            className={styles.navigation}
            aria-label={copy.header.primaryNavigation}
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={activeSection === item.id ? "true" : undefined}
                className={
                  activeSection === item.id ? styles.active : undefined
                }
              >
                {item.label[locale]}
              </a>
            ))}
          </nav>

          <div className={styles.controls}>
            <LanguageSwitcher />
            <button
              type="button"
              className={styles.menuButton}
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
            >
              {menuOpen ? copy.header.close : copy.header.menu}
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        open={menuOpen}
        locale={locale}
        navigation={NAV_ITEMS}
        navigationLabel={copy.header.mobileNavigation}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
}
