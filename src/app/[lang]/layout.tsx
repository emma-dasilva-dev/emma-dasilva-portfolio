import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";

import { getHomeContent } from "../../i18n/dictionaries";
import { isLocale, locales } from "../../i18n/config";
import Header from "../../components/layout/Header/Header";
import Footer from "../../components/layout/Footer/Footer";

import "../../styles/globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-ibm-plex-mono",
});

const themeScript = `
(() => {
  try {
    const saved = localStorage.getItem("portfolio-theme");
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = saved === "light" || saved === "dark"
      ? saved
      : systemDark ? "dark" : "light";
    document.documentElement.dataset.theme = theme;
  } catch {
    document.documentElement.dataset.theme = "dark";
  }
})();
`;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

type LayoutProps = {
  children: ReactNode;
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({
  params,
}: LayoutProps): Promise<Metadata> {
  const { lang } = await params;

  if (!isLocale(lang)) {
    return {};
  }

  const isFrench = lang === "fr";

  return {
    title: isFrench
      ? "Emma Da Silva | Développeuse junior"
      : "Emma Da Silva | Junior Developer",
    description: isFrench
      ? "Portfolio d’Emma Da Silva : projets, parcours, stack technique et apprentissage en développement logiciel."
      : "Portfolio of Emma Da Silva: selected projects, technical stack, software development journey, and learning.",
    authors: [{ name: "Emma Da Silva" }],
    creator: "Emma Da Silva",
    icons: {
      icon: "/favicon.svg",
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const content = await getHomeContent(lang);

  return (
    <html
      lang={lang}
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${ibmPlexMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a className="skip-link" href="#main-content">
          {lang === "fr" ? "Aller au contenu" : "Skip to content"}
        </a>

        <Header locale={lang} navigation={content.navigation} />

        {children}

        <Footer locale={lang} content={content.footer} />
      </body>
    </html>
  );
}
