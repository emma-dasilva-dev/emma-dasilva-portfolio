import type { Metadata } from "next";
import type { ReactNode } from "react";
import { LocaleProvider } from "@/components/providers/LocaleProvider/LocaleProvider";
import "./globals.css";
export const metadata:Metadata={title:"Emma Da Silva | Junior Full Stack Developer",description:"Portfolio of Emma Da Silva, a junior full stack developer exploring web applications, systems, Linux, and cybersecurity."};
export default function RootLayout({children}:{children:ReactNode}){return <html lang="en"><body><a className="skipLink" href="#main-content">Skip to content</a><LocaleProvider>{children}</LocaleProvider></body></html>}
