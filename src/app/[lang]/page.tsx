import { notFound } from "next/navigation";

import { getHomeContent, getProjects } from "../../i18n/dictionaries";
import { isLocale } from "../../i18n/config";
import Hero from "../../components/sections/Hero/Hero";
import SelectedWork from "../../components/sections/SelectedWork/SelectedWork";
import About from "../../components/sections/About/About";
import Journey from "../../components/sections/Journey/Journey";
import Stack from "../../components/sections/Stack/Stack";
import Contact from "../../components/sections/Contact/Contact";

type HomePageProps = {
  params: Promise<{ lang: string }>;
};

export default async function HomePage({ params }: HomePageProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const [content, projects] = await Promise.all([
    getHomeContent(lang),
    getProjects(lang),
  ]);

  return (
    <main id="main-content">
      <Hero locale={lang} content={content.hero} />
      <SelectedWork locale={lang} content={content.work} projects={projects} />
      <About content={content.about} />
      <Journey content={content.journey} />
      <Stack content={content.stack} />
      <Contact content={content.contact} />
    </main>
  );
}
