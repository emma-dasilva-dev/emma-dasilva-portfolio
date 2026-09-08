import { PageContainer } from "@/components/layout/PageContainer";
import { Section } from "@/components/layout/Section";
import { projects } from "@/content/projects";
import { workContent } from "@/content/work";
import type { Locale } from "@/types/locale";

import styles from "./Work.module.css";

interface WorkProps {
  locale: Locale;
}

const stay = projects.find((project) => project.slug === "stay")!;

export function Work({ locale }: WorkProps) {
  const copy = workContent[locale];

  return (
    <Section id="work" className={styles.section}>
      <PageContainer>
        <header className={styles.sectionHeader}>
          <p className={styles.sectionNumber}>{copy.sectionNumber}</p>
          <div>
            <h2>{copy.heading}</h2>
            <p>{copy.intro}</p>
          </div>
        </header>

        <article className={styles.project}>
          <div className={styles.projectHeader}>
            <div>
              <p className={styles.projectKicker}>01 · {stay.subtitle[locale]}</p>
              <h3>{stay.title}</h3>
            </div>
            <span className={styles.projectYear}>2026</span>
          </div>

          <div className={styles.projectBody}>
            <p className={styles.projectSummary}>{stay.summary[locale]}</p>

            <ul className={styles.techList} aria-label="Technologies">
              {stay.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </div>

          <div className={styles.projectFooter}>
            <p className={styles.challenge}>{copy.stayChallenge}</p>

            <div className={styles.projectActions}>
              <a href={stay.links.live} target="_blank" rel="noreferrer">
                {copy.liveSite} <span aria-hidden="true">↗</span>
              </a>
              <a href={stay.links.github} target="_blank" rel="noreferrer">
                {copy.github} <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </article>
      </PageContainer>
    </Section>
  );
}
