import { notFound } from "next/navigation";
import type { ReactNode } from "react";

import { getDictionary } from "@/content/dictionaries";
import { isLocale } from "@/lib/i18n";

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
    <>
      <a className="skip-link" href="#main-content">
        {dictionary.skipToContent}
      </a>
      {children}
    </>
  );
}
