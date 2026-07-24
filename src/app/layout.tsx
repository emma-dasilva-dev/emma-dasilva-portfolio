import type {
  Metadata,
} from "next";

import type {
  ReactNode,
} from "react";

import {
  Manrope,
} from "next/font/google";

import {
  LocaleProvider,
} from "@/components/providers/LocaleProvider/LocaleProvider";

import "./globals.css";

const manrope =
  Manrope({
    subsets: [
      "latin",
    ],

    variable:
      "--font-manrope",

    display: "swap",
  });

const themeScript = `
  (() => {
    const storageKey = "emma-portfolio-theme";
    const root = document.documentElement;

    let theme;

    try {
      theme = localStorage.getItem(storageKey);
    } catch {}

    if (
      theme !== "light" &&
      theme !== "dark"
    ) {
      theme = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches
        ? "dark"
        : "light";
    }

    root.dataset.theme = theme;
  })();
`;

export const metadata: Metadata =
  {
    title:
      "Emma Da Silva | Developer",

    description:
      "Portfolio of Emma Da Silva, a front-end developer and emerging software engineer building thoughtful digital products.",
  };

interface RootLayoutProps {
  children:
    ReactNode;
}

export default function RootLayout({
  children,
}: Readonly<RootLayoutProps>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              themeScript,
          }}
        />
      </head>

      <body
        className={
          manrope.variable
        }
      >
        <LocaleProvider>
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}