import type {
  Metadata,
  Viewport,
} from "next";

import type {
  ReactNode,
} from "react";

import {
  LocaleProvider,
} from "@/components/providers/LocaleProvider/LocaleProvider";

import {
  ThemeProvider,
} from "@/components/providers/ThemeProvider/ThemeProvider";

import "./globals.css";

const themeScript = `
  (() => {
    const storageKey = "emma-portfolio-theme";
    const root = document.documentElement;

    let theme = null;

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
    root.style.colorScheme = theme;

    const themeMeta = document.querySelector(
      'meta[name="theme-color"]'
    );

    if (themeMeta) {
      themeMeta.setAttribute(
        "content",
        theme === "dark"
          ? "#000000"
          : "#FFFFFF"
      );
    }
  })();
`;

export const metadata: Metadata = {
  title: {
    default:
      "Emma Da Silva | Full-Stack Developer",

    template:
      "%s | Emma Da Silva",
  },

  description:
    "Portfolio of Emma Da Silva, a full-stack developer and software engineer building complete, high-performance web applications.",

  authors: [
    {
      name:
        "Emma Da Silva",
    },
  ],
};

export const viewport: Viewport = {
  width:
    "device-width",

  initialScale: 1,

  colorScheme:
    "light dark",
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
        <meta
          name="theme-color"
          content="#FFFFFF"
        />

        <script
          dangerouslySetInnerHTML={{
            __html:
              themeScript,
          }}
        />
      </head>

      <body>
        <ThemeProvider>
          <LocaleProvider>
            {children}
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
