"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  HOME_COPY,
  NAV_ITEMS,
} from "@/content/home";

import {
  useLocale,
} from "@/components/providers/LocaleProvider/LocaleProvider";

import {
  useActiveSection,
} from "@/hooks/useActiveSection";

import LanguageSwitcher from "@/components/ui/LanguageSwitcher/LanguageSwitcher";

import ThemeToggle from "@/components/ui/ThemeToggle/ThemeToggle";

import styles from "./Header.module.css";

const SECTION_IDS =
  NAV_ITEMS.map(
    (
      item,
    ) =>
      item.id,
  );

export default function Header() {
  const [
    menuOpen,
    setMenuOpen,
  ] =
    useState(false);

  const {
    locale,
  } =
    useLocale();

  const copy =
    HOME_COPY[
      locale
    ];

  const activeSection =
    useActiveSection(
      SECTION_IDS,
      "",
    );

  useEffect(() => {
    document.body
      .classList
      .toggle(
        "menu-open",
        menuOpen,
      );

    return () => {
      document.body
        .classList
        .remove(
          "menu-open",
        );
    };
  }, [
    menuOpen,
  ]);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const handleKeyDown =
      (
        event:
          KeyboardEvent,
      ) => {
        if (
          event.key ===
          "Escape"
        ) {
          setMenuOpen(
            false,
          );
        }
      };

    const handleResize =
      () => {
        if (
          window.innerWidth >
          900
        ) {
          setMenuOpen(
            false,
          );
        }
      };

    window.addEventListener(
      "keydown",
      handleKeyDown,
    );

    window.addEventListener(
      "resize",
      handleResize,
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown,
      );

      window.removeEventListener(
        "resize",
        handleResize,
      );
    };
  }, [
    menuOpen,
  ]);

  const closeMenu =
    () => {
      setMenuOpen(
        false,
      );
    };

  return (
    <header
      className={
        styles.header
      }
    >
      <div
        className={
          styles.bar
        }
      >
        <a
          href="#home"
          className={
            styles.brand
          }
          onClick={
            closeMenu
          }
        >
          EMMA DA SILVA
        </a>

        <nav
          className={
            styles.desktopNavigation
          }
          aria-label={
            copy.header
              .primaryNavigation
          }
        >
          {NAV_ITEMS.map(
            (
              item,
            ) => {
              const active =
                activeSection ===
                item.id;

              return (
                <a
                  key={
                    item.id
                  }
                  href={`#${item.id}`}
                  className={`${styles.navLink} ${
                    active
                      ? styles.navLinkActive
                      : ""
                  }`}
                  aria-current={
                    active
                      ? "location"
                      : undefined
                  }
                >
                  {
                    item
                      .label[
                      locale
                    ]
                  }
                </a>
              );
            },
          )}
        </nav>

        <div
          className={
            styles.desktopControls
          }
        >
          <LanguageSwitcher />

          <ThemeToggle />
        </div>

        <button
          type="button"
          className={
            styles.mobileMenuButton
          }
          onClick={() =>
            setMenuOpen(
              (
                current,
              ) =>
                !current,
            )
          }
          aria-expanded={
            menuOpen
          }
          aria-controls="mobile-navigation"
        >
          {menuOpen
            ? copy.header
                .close
            : copy.header
                .menu}
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`${styles.mobilePanel} ${
          menuOpen
            ? styles.mobilePanelOpen
            : ""
        }`}
        aria-hidden={
          !menuOpen
        }
      >
        <button
          type="button"
          className={
            styles.mobileBackdrop
          }
          onClick={
            closeMenu
          }
          aria-label={
            copy.header
              .closeNavigation
          }
          tabIndex={
            menuOpen
              ? 0
              : -1
          }
        />

        <div
          className={
            styles.mobileSheet
          }
        >
          <nav
            className={
              styles.mobileNavigation
            }
            aria-label={
              copy.header
                .mobileNavigation
            }
          >
            {NAV_ITEMS.map(
              (
                item,
                index,
              ) => (
                <a
                  key={
                    item.id
                  }
                  href={`#${item.id}`}
                  onClick={
                    closeMenu
                  }
                  tabIndex={
                    menuOpen
                      ? 0
                      : -1
                  }
                >
                  <span
                    className={
                      styles.mobileIndex
                    }
                  >
                    {String(
                      index +
                        1,
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

                  <span
                    aria-hidden="true"
                  >
                    ↘
                  </span>
                </a>
              ),
            )}
          </nav>

          <div
            className={
              styles.mobileControls
            }
          >
            <LanguageSwitcher />

            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}