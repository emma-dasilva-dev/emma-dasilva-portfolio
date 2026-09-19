import type { Metadata } from "next";
import { Barlow_Condensed, Geist_Mono } from "next/font/google";
import "./globals.css";

const display = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["200", "300", "400"],
});

const mono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Emma Dasilva — Software Developer & Cybersecurity Student",
  description:
    "Portfolio of Emma Dasilva, a software developer and cybersecurity student based in Cotonou.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
