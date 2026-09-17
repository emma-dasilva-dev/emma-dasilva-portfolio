import { notFound } from "next/navigation";

import { LayeredPortfolio } from "@/components/portfolio/LayeredPortfolio";
import { isLocale } from "@/lib/i18n";

interface HomePageProps {
  params: Promise<{ lang: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  return <LayeredPortfolio locale={lang} />;
}
