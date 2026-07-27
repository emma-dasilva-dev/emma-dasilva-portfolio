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
  navigationLabel: string;
  onClose: () => void;
}

export default function MobileMenu({
  open,
  locale,
  navigation,
  navigationLabel,
  onClose,
}: MobileMenuProps) {
  return (
    <div
      id="mobile-navigation"
      className={`${styles.menu} ${
        open
          ? styles.open
          : ""
      }`}
      aria-hidden={
        !open
      }
    >
      <nav
        className={
          styles.navigation
        }
        aria-label={
          navigationLabel
        }
      >
        {navigation.map(
          (
            item,
            index,
          ) => (
            <a
              key={
                item.id
              }
              href={`#${item.id}`}
              className={
                styles.link
              }
              onClick={
                onClose
              }
              tabIndex={
                open
                  ? 0
                  : -1
              }
            >
              <span
                className={
                  styles.index
                }
              >
                {String(
                  index + 1,
                ).padStart(
                  2,
                  "0",
                )}
              </span>

              <span>
                {
                  item
                    .label[
                    locale
                  ]
                }
              </span>
            </a>
          ),
        )}
      </nav>

      <div
        className={
          styles.controls
        }
      >
        <LanguageSwitcher />

        <ThemeToggle />
      </div>
    </div>
  );
}
