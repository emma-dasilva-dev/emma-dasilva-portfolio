"use client";

import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type Locale =
  | "en"
  | "fr";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (
    locale: Locale,
  ) => void;
};

const LocaleContext =
  createContext<LocaleContextValue | null>(
    null,
  );

const STORAGE_KEY =
  "emma-portfolio-language";

type LocaleProviderProps = {
  children: ReactNode;
};

export function LocaleProvider({
  children,
}: LocaleProviderProps) {
  const [locale, setLocale] =
    useState<Locale>("en");

  const [initialized, setInitialized] =
    useState(false);

  useEffect(() => {
    try {
      const storedLocale =
        localStorage.getItem(
          STORAGE_KEY,
        );

      if (
        storedLocale === "en" ||
        storedLocale === "fr"
      ) {
        setLocale(storedLocale);
      }
    } finally {
      setInitialized(true);
    }
  }, []);

  useEffect(() => {
    if (!initialized) {
      return;
    }

    document.documentElement.lang =
      locale;

    localStorage.setItem(
      STORAGE_KEY,
      locale,
    );
  }, [
    initialized,
    locale,
  ]);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
    }),
    [locale],
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
    useContext(LocaleContext);

  if (!context) {
    throw new Error(
      "useLocale must be used inside LocaleProvider",
    );
  }

  return context;
}
