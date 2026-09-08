import { notFound } from "next/navigation";

import { Hero } from "@/components/sections/Hero";
import { isLocale } from "@/lib/i18n";

interface HomePageProps {
  params: Promise<{ lang: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  return (
    <main id="main-content">
      <Hero locale={lang} />
      <div id="work" aria-hidden="true" />
    </main>
  );
}
