import { notFound } from "next/navigation";

import { PapalePortfolio } from "@/components/portfolio/PapalePortfolio";
import { isLocale } from "@/lib/i18n";

interface HomePageProps {
  params: Promise<{ lang: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  return <PapalePortfolio locale={lang} />;
}
