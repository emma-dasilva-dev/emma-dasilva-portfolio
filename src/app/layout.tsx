import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Emma Da Silva | Junior Full Stack Developer",
  description:
    "Portfolio of Emma Da Silva, a junior full stack developer based in Cotonou, Benin.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
