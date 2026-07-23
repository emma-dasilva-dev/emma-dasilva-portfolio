"use client";

import Link from "next/link";

import {
  useState,
} from "react";

import {
  useLocale,
} from "@/components/providers/LocaleProvider/LocaleProvider";

import LanguageSwitcher from "@/components/ui/LanguageSwitcher/LanguageSwitcher";

import ThemeToggle from "@/components/ui/ThemeToggle/ThemeToggle";

import styles from "./Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] =
    useState(false);

  const {
    locale,
  } = useLocale();

  const labels =
    locale === "en"
      ? {
          work: "WORK",
          story: "STORY",
          lab: "LAB",
          now: "NOW",
          menu: "MENU",
          close: "CLOSE",
        }
      : {
          work: "PROJETS",
          story: "PARCOURS",
          lab: "LAB",
          now: "ACTUEL",
          menu: "MENU",
          close: "FERMER",
        };

  const navigation = [
    {
      label:
        labels.work,
      href: "#work",
    },
    {
      label:
        labels.story,
      href: "#story",
    },
    {
      label:
        labels.lab,
      href: "#lab",
    },
    {
      label:
        labels.now,
      href: "#now",
    },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
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
        <Link
          href="/"
          className={
            styles.brand
          }
          onClick={
            closeMenu
          }
        >
          EMMA DA SILVA
        </Link>

        <nav
          className={
            styles.desktopNavigation
          }
          aria-label="Primary navigation"
        >
          {navigation.map(
            (item) => (
              <a
                key={
                  item.href
                }
                href={
                  item.href
                }
                className={
                  styles.navLink
                }
              >
                {
                  item.label
                }
              </a>
            ),
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
        >
          {menuOpen
            ? labels.close
            : labels.menu}
        </button>
      </div>

      <div
        className={`${styles.mobilePanel} ${
          menuOpen
            ? styles.mobilePanelOpen
            : ""
        }`}
      >
        <nav
          className={
            styles.mobileNavigation
          }
        >
          {navigation.map(
            (item) => (
              <a
                key={
                  item.href
                }
                href={
                  item.href
                }
                onClick={
                  closeMenu
                }
              >
                {
                  item.label
                }
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
    </header>
  );
}
