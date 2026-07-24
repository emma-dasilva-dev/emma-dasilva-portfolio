"use client";

import LanguageSwitcher from "@/components/ui/LanguageSwitcher/LanguageSwitcher";
import ThemeToggle from "@/components/ui/ThemeToggle/ThemeToggle";

import type {
  Locale,
  NavigationItem,
} from "@/types/portfolio";

import styles from "./MobileMenu.module.css";

interface MobileMenuProps {
  open: boolean;
  locale: Locale;
  navigation: NavigationItem[];
  closeLabel: string;
  navigationLabel: string;
  onClose: () => void;
}

export default function MobileMenu({
  open,
  locale,
  navigation,
  closeLabel,
  navigationLabel,
  onClose,
}: MobileMenuProps) {
  return (
    <div
      id="mobile-navigation"
      className={`${styles.overlay} ${
        open ? styles.open : ""
      }`}
      aria-hidden={!open}
    >
      <button
        type="button"
        className={styles.backdrop}
        onClick={onClose}
        aria-label={closeLabel}
        tabIndex={open ? 0 : -1}
      />

      <div className={styles.panel}>
        <nav
          className={styles.navigation}
          aria-label={navigationLabel}
        >
          {navigation.map((item, index) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={onClose}
              tabIndex={open ? 0 : -1}
              className={styles.link}
            >
              <span className={styles.index}>
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className={styles.label}>
                {item.label[locale]}
              </span>

              <span
                className={styles.arrow}
                aria-hidden="true"
              >
                ↘
              </span>
            </a>
          ))}
        </nav>

        <div className={styles.controls}>
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}