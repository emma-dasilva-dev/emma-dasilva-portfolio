import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";

import { isLocale, locales } from "../../i18n/config";

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

export const metadata: Metadata = {
  title: "Emma Da Silva | Junior Developer",
  description:
    "Curiosity brought me into tech, but building is what keeps me here.",
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

type RootLayoutProps = {
  children: React.ReactNode;
  params: Promise<{
    lang: string;
  }>;
};

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  return (
    <html
      lang={lang}
      className={`${spaceGrotesk.variable} ${ibmPlexMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
