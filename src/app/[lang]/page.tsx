import { notFound } from "next/navigation";

import { getDictionary } from "@/content/dictionaries";
import { banditProgress } from "@/content/projects";
import { isLocale } from "@/lib/i18n";

interface HomePageProps {
  params: Promise<{ lang: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const dictionary = getDictionary(lang);

  return (
    <main id="main-content" className="foundation">
      <div className="container">
        <p className="foundation__label">{dictionary.foundationLabel}</p>
        <h1 className="foundation__title">{dictionary.foundationTitle}</h1>
        <p className="foundation__copy">{dictionary.foundationCopy}</p>
        <div className="foundation__meta">
          <span>Next.js 16.3.3</span>
          <span>React 19.2</span>
          <span>Locale: {lang.toUpperCase()}</span>
          <span>
            Bandit: {banditProgress.completedThrough} → {banditProgress.currentLevel}
          </span>
        </div>
      </div>
    </main>
  );
}
