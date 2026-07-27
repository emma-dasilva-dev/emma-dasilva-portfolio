"use client";

import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
} from "react";

import type {
  Theme,
} from "@/types/portfolio";

interface ThemeContextValue {
  theme: Theme;

  setTheme: (
    theme: Theme,
  ) => void;

  toggleTheme: () => void;
}

const ThemeContext =
  createContext<ThemeContextValue | null>(
    null,
  );

const STORAGE_KEY =
  "emma-portfolio-theme";

const THEME_CHANGE_EVENT =
  "emma-portfolio-theme-change";

const THEME_COLORS: Record<
  Theme,
  string
> = {
  light: "#FFFFFF",
  dark: "#000000",
};

function getCurrentTheme(): Theme {
  if (
    typeof window ===
    "undefined"
  ) {
    return "light";
  }

  const documentTheme =
    document
      .documentElement
      .dataset
      .theme;

  if (
    documentTheme ===
      "light" ||
    documentTheme ===
      "dark"
  ) {
    return documentTheme;
  }

  try {
    const storedTheme =
      window.localStorage.getItem(
        STORAGE_KEY,
      );

    if (
      storedTheme ===
        "light" ||
      storedTheme ===
        "dark"
    ) {
      return storedTheme;
    }
  } catch {
    // Local storage may be unavailable.
  }

  return window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches
    ? "dark"
    : "light";
}

function getServerTheme(): Theme {
  return "light";
}

function subscribeToTheme(
  callback: () => void,
) {
  if (
    typeof window ===
    "undefined"
  ) {
    return () => {};
  }

  const mediaQuery =
    window.matchMedia(
      "(prefers-color-scheme: dark)",
    );

  const handleStorage =
    (
      event:
        StorageEvent,
    ) => {
      if (
        event.key ===
        STORAGE_KEY
      ) {
        callback();
      }
    };

  const handleSystemThemeChange =
    () => {
      let hasSavedTheme =
        false;

      try {
        hasSavedTheme =
          window.localStorage.getItem(
            STORAGE_KEY,
          ) !== null;
      } catch {
        hasSavedTheme =
          false;
      }

      if (
        !hasSavedTheme
      ) {
        callback();
      }
    };

  window.addEventListener(
    THEME_CHANGE_EVENT,
    callback,
  );

  window.addEventListener(
    "storage",
    handleStorage,
  );

  mediaQuery.addEventListener(
    "change",
    handleSystemThemeChange,
  );

  return () => {
    window.removeEventListener(
      THEME_CHANGE_EVENT,
      callback,
    );

    window.removeEventListener(
      "storage",
      handleStorage,
    );

    mediaQuery.removeEventListener(
      "change",
      handleSystemThemeChange,
    );
  };
}

function applyTheme(
  theme: Theme,
) {
  const root =
    document.documentElement;

  root.dataset.theme =
    theme;

  root.style.colorScheme =
    theme;

  const themeMeta =
    document.querySelector(
      'meta[name="theme-color"]',
    );

  themeMeta?.setAttribute(
    "content",
    THEME_COLORS[
      theme
    ],
  );
}

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({
  children,
}: ThemeProviderProps) {
  const theme =
    useSyncExternalStore(
      subscribeToTheme,
      getCurrentTheme,
      getServerTheme,
    );

  const setTheme =
    useCallback(
      (
        nextTheme:
          Theme,
      ) => {
        applyTheme(
          nextTheme,
        );

        try {
          window.localStorage.setItem(
            STORAGE_KEY,
            nextTheme,
          );
        } catch {
          // Local storage may be unavailable.
        }

        window.dispatchEvent(
          new Event(
            THEME_CHANGE_EVENT,
          ),
        );
      },
      [],
    );

  const toggleTheme =
    useCallback(
      () => {
        setTheme(
          theme === "light"
            ? "dark"
            : "light",
        );
      },
      [
        setTheme,
        theme,
      ],
    );

  const value =
    useMemo(
      () => ({
        theme,
        setTheme,
        toggleTheme,
      }),
      [
        theme,
        setTheme,
        toggleTheme,
      ],
    );

  return (
    <ThemeContext.Provider
      value={value}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context =
    useContext(
      ThemeContext,
    );

  if (!context) {
    throw new Error(
      "useTheme must be used inside ThemeProvider.",
    );
  }

  return context;
}
