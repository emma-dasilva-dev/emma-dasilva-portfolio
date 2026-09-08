import { notFound } from "next/navigation";

import { Cybersecurity } from "@/components/sections/Cybersecurity";
import { Hero } from "@/components/sections/Hero";
import { Work } from "@/components/sections/Work";
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
      <Work locale={lang} />
      <Cybersecurity locale={lang} />
    </main>
  );
}
