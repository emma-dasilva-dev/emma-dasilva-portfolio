import { notFound } from "next/navigation";

import { getDictionary } from "@/content/dictionaries";
import { getProjectBySlug, projects } from "@/content/projects";
import { isLocale } from "@/lib/i18n";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

interface ProjectPageProps {
  params: Promise<{ lang: string; slug: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { lang, slug } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const dictionary = getDictionary(lang);

  return (
    <main id="main-content" className="foundation">
      <div className="container">
        <p className="foundation__label">{dictionary.caseStudyLabel}</p>
        <h1 className="foundation__title">{project.title}</h1>
        <p className="foundation__copy">{project.subtitle[lang]}</p>
        <p className="foundation__copy">{dictionary.caseStudyCopy}</p>
        <div className="foundation__meta">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
      </div>
    </main>
  );
}
