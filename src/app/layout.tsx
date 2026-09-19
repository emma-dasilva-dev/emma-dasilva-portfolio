import { IBM_Plex_Mono, Instrument_Sans, Oswald } from "next/font/google";
import type { ReactNode } from "react";
import type { Viewport } from "next";

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

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["300"],
  variable: "--font-hero-condensed",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#090817",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${instrumentSans.variable} ${ibmPlexMono.variable} ${oswald.variable}`}>
      <body>{children}</body>
    </html>
  );
}
