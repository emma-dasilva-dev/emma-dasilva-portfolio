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
const bandit = projects.find((project) => project.slug === "bandit-redline")!;

export function Work({ locale }: WorkProps) {
  const copy = workContent[locale];

  return (
    <Section id="work" className={styles.section}>
      <PageContainer>
        <header className={styles.sectionHeader}>
          <h2>{copy.heading}</h2>
          <p>{copy.intro}</p>
        </header>

        <div className={styles.projects}>
          <article className={styles.project}>
            <p className={styles.projectType}>{stay.subtitle[locale]}</p>
            <h3>{stay.title}</h3>
            <p className={styles.summary}>{stay.summary[locale]}</p>
            <p className={styles.stack}>{stay.technologies.join(" · ")}</p>
            <div className={styles.links}>
              <a href={stay.links.live} target="_blank" rel="noreferrer">{copy.liveSite} ↗</a>
              <a href={stay.links.github} target="_blank" rel="noreferrer">{copy.github} ↗</a>
            </div>
          </article>

          <article className={styles.project}>
            <p className={styles.projectType}>{bandit.subtitle[locale]}</p>
            <h3>{bandit.title}</h3>
            <p className={styles.summary}>{bandit.summary[locale]}</p>
            <p className={styles.stack}>{bandit.technologies.join(" · ")}</p>
            <div className={styles.links}>
              <a href={bandit.links.journal} target="_blank" rel="noreferrer">{copy.journal} ↗</a>
            </div>
          </article>
        </div>
      </PageContainer>
    </Section>
  );
}
