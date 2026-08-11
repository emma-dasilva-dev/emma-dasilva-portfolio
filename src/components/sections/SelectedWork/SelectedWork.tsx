import Link from "next/link";

import type { Locale } from "../../../i18n/config";
import type { HomeContent, ProjectCaseStudy } from "../../../types/content";
import ArrowUpRight from "../../ui/ArrowUpRight";

import styles from "./SelectedWork.module.css";

type SelectedWorkProps = {
  locale: Locale;
  content: HomeContent["work"];
  projects: ProjectCaseStudy[];
};

export default function SelectedWork({
  locale,
  content,
  projects,
}: SelectedWorkProps) {
  return (
    <section id="work" className="section">
      <div className="page-shell">
        <p className="section-label">{content.sectionLabel}</p>

        <div className={styles.headingRow}>
          <h2 className="section-heading">{content.heading}</h2>
          <p className={styles.intro}>{content.intro}</p>
        </div>

        <div className={styles.projects}>
          {projects.map((project) => (
            <article key={project.slug} className={styles.project}>
              <div className={styles.top}>
                <p className={styles.number}>{project.number}</p>
                <p className={styles.eyebrow}>{project.eyebrow}</p>
              </div>

              <h3 className={styles.title}>{project.shortTitle}</h3>
              <p className={styles.description}>{project.description}</p>

              <dl className={styles.meta}>
                {project.role ? (
                  <div>
                    <dt>{content.roleLabel}</dt>
                    <dd>{project.role}</dd>
                  </div>
                ) : null}

                {project.stack?.length ? (
                  <div>
                    <dt>{content.stackLabel}</dt>
                    <dd>{project.stack.join(" · ")}</dd>
                  </div>
                ) : null}

                {project.focus ? (
                  <div>
                    <dt>Focus</dt>
                    <dd>{project.focus}</dd>
                  </div>
                ) : null}

                <div>
                  <dt>{content.statusLabel}</dt>
                  <dd>{project.status}</dd>
                </div>

                <div>
                  <dt>{content.yearLabel}</dt>
                  <dd>{project.year}</dd>
                </div>
              </dl>

              <Link
                className={styles.caseStudy}
                href={`/${locale}/work/${project.slug}`}
              >
                <span>{content.viewCaseStudy}</span>
                <ArrowUpRight className={styles.arrow} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
