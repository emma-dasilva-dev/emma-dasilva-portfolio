import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getProjects } from "../../../../i18n/dictionaries";
import { isLocale, locales } from "../../../../i18n/config";
import {
  findProject,
  isProjectSlug,
  projectSlugs,
} from "../../../../lib/projects";
import ExternalLink from "../../../../components/ui/ExternalLink";

import styles from "./page.module.css";

type CaseStudyPageProps = {
  params: Promise<{
    lang: string;
    slug: string;
  }>;
};

export function generateStaticParams() {
  return locales.flatMap((lang) =>
    projectSlugs.map((slug) => ({
      lang,
      slug,
    }))
  );
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { lang, slug } = await params;

  if (!isLocale(lang) || !isProjectSlug(slug)) {
    return {};
  }

  const projects = await getProjects(lang);
  const project = findProject(projects, slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.shortTitle} | Emma Da Silva`,
    description: project.description,
  };
}

export default async function CaseStudyPage({
  params,
}: CaseStudyPageProps) {
  const { lang, slug } = await params;

  if (!isLocale(lang) || !isProjectSlug(slug)) {
    notFound();
  }

  const projects = await getProjects(lang);
  const project = findProject(projects, slug);

  if (!project) {
    notFound();
  }

  const isFrench = lang === "fr";

  return (
    <main id="main-content" className={styles.caseStudy}>
      <div className="page-shell">
        <div className={styles.breadcrumb}>
          <Link href={`/${lang}#work`}>
            {isFrench ? "← Retour aux projets" : "← Back to work"}
          </Link>
          <span>~/work/{project.slug}</span>
        </div>

        <header className={styles.hero}>
          <p className={styles.eyebrow}>
            {project.number} / {project.eyebrow}
          </p>

          <h1>{project.title}</h1>
          <p className={styles.description}>{project.description}</p>

          <dl className={styles.meta}>
            {project.role ? (
              <div>
                <dt>{isFrench ? "Rôle" : "Role"}</dt>
                <dd>{project.role}</dd>
              </div>
            ) : null}

            {project.focus ? (
              <div>
                <dt>Focus</dt>
                <dd>{project.focus}</dd>
              </div>
            ) : null}

            {project.progress ? (
              <div>
                <dt>{isFrench ? "Progression" : "Progress"}</dt>
                <dd>{project.progress}</dd>
              </div>
            ) : null}

            {project.languages ? (
              <div>
                <dt>{isFrench ? "Langues" : "Languages"}</dt>
                <dd>{project.languages}</dd>
              </div>
            ) : null}

            <div>
              <dt>{isFrench ? "Statut" : "Status"}</dt>
              <dd>{project.status}</dd>
            </div>

            <div>
              <dt>{isFrench ? "Année" : "Year"}</dt>
              <dd>{project.year}</dd>
            </div>
          </dl>

          <div className={styles.links}>
            <ExternalLink href={project.liveUrl} primary>
              {project.liveLabel}
            </ExternalLink>
            <ExternalLink href={project.sourceUrl}>
              {project.sourceLabel}
            </ExternalLink>
          </div>
        </header>

        <div className={styles.sections}>
          {project.sections.map((section) => (
            <section key={section.label} className={styles.section}>
              <p className={styles.sectionLabel}>{section.label}</p>

              <div className={styles.sectionBody}>
                <h2>{section.title}</h2>

                {section.body ? <p>{section.body}</p> : null}

                {section.items ? (
                  <ul>
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}

                {section.architecture ? (
                  <div
                    className={styles.architecture}
                    aria-label={isFrench ? "Architecture du système" : "System architecture"}
                  >
                    {section.architecture.map((node, index) => (
                      <div key={node} className={styles.archNode}>
                        <span>{node}</span>
                        {index < section.architecture!.length - 1 ? (
                          <span className={styles.connector} aria-hidden="true">
                            →
                          </span>
                        ) : null}
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            </section>
          ))}
        </div>

        <div className={styles.next}>
          <Link href={`/${lang}#work`}>
            {isFrench ? "Retour aux projets" : "Back to selected work"} →
          </Link>
        </div>
      </div>
    </main>
  );
}
