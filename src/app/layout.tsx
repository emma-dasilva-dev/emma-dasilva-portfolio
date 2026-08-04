import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { LocaleProvider } from "@/components/providers/LocaleProvider/LocaleProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Emma Da Silva | Junior Full Stack Developer",
  description: "Portfolio of Emma Da Silva, a junior full stack developer exploring web applications, systems programming, Linux, and cybersecurity.",
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, colorScheme: "dark", themeColor: "#000000" };

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <html lang="en"><body><LocaleProvider>{children}</LocaleProvider></body></html>;
}
