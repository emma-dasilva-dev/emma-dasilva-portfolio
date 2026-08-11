import { notFound } from "next/navigation";

import { isLocale } from "../../i18n/config";

type HomePageProps = {
  params: Promise<{
    lang: string;
  }>;
};

export default async function HomePage({ params }: HomePageProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  return (
    <main>
      <h1>Emma Da Silva</h1>
      <p>Junior Developer</p>
    </main>
  );
}
