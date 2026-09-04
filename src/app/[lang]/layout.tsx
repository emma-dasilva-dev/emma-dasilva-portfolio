import { IBM_Plex_Mono, Instrument_Sans } from "next/font/google";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

import { getDictionary } from "@/content/dictionaries";
import { isLocale } from "@/lib/i18n";
import { locales } from "@/types/locale";
import "@/styles/globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

interface LocaleLayoutProps {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const dictionary = getDictionary(lang);

  return (
    <html lang={lang} className={`${instrumentSans.variable} ${ibmPlexMono.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">
          {dictionary.skipToContent}
        </a>
        {children}
      </body>
    </html>
  );
}
