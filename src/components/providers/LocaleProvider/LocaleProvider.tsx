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
  Locale,
} from "@/types/portfolio";

interface LocaleContextValue {
  locale: Locale;

  setLocale: (
    locale: Locale,
  ) => void;
}

const LocaleContext =
  createContext<LocaleContextValue | null>(
    null,
  );

const STORAGE_KEY =
  "emma-portfolio-language";

const LOCALE_CHANGE_EVENT =
  "emma-portfolio-locale-change";

function getStoredLocale(): Locale {
  if (
    typeof window ===
    "undefined"
  ) {
    return "en";
  }

  try {
    const storedLocale =
      window.localStorage.getItem(
        STORAGE_KEY,
      );

    return storedLocale ===
      "fr"
      ? "fr"
      : "en";
  } catch {
    return "en";
  }
}

function getServerLocale(): Locale {
  return "en";
}

function subscribeToLocale(
  callback: () => void,
) {
  if (
    typeof window ===
    "undefined"
  ) {
    return () => {};
  }

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

  window.addEventListener(
    LOCALE_CHANGE_EVENT,
    callback,
  );

  window.addEventListener(
    "storage",
    handleStorage,
  );

  return () => {
    window.removeEventListener(
      LOCALE_CHANGE_EVENT,
      callback,
    );

    window.removeEventListener(
      "storage",
      handleStorage,
    );
  };
}

interface LocaleProviderProps {
  children: ReactNode;
}

export function LocaleProvider({
  children,
}: LocaleProviderProps) {
  const locale =
    useSyncExternalStore(
      subscribeToLocale,
      getStoredLocale,
      getServerLocale,
    );

  const setLocale =
    useCallback(
      (
        nextLocale:
          Locale,
      ) => {
        document
          .documentElement
          .lang =
          nextLocale;

        try {
          window.localStorage.setItem(
            STORAGE_KEY,
            nextLocale,
          );
        } catch {
          // Local storage may be unavailable.
        }

        window.dispatchEvent(
          new Event(
            LOCALE_CHANGE_EVENT,
          ),
        );
      },
      [],
    );

  const value =
    useMemo(
      () => ({
        locale,
        setLocale,
      }),
      [
        locale,
        setLocale,
      ],
    );

  return (
    <LocaleContext.Provider
      value={value}
    >
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context =
    useContext(
      LocaleContext,
    );

  if (!context) {
    throw new Error(
      "useLocale must be used inside LocaleProvider.",
    );
  }

  return context;
}
