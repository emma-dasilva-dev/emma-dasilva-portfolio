import { PageContainer } from "@/components/layout/PageContainer";
import { Section } from "@/components/layout/Section";
import { banditProgress, projects } from "@/content/projects";
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
          <p className={styles.sectionNumber}>{copy.sectionNumber}</p>
          <div>
            <h2>{copy.heading}</h2>
            <p>{copy.intro}</p>
          </div>
        </header>

        <div className={styles.projects}>
          <article className={styles.project}>
            <div className={styles.projectIndex}>01</div>
            <div className={styles.projectContent}>
              <p className={styles.projectType}>{stay.subtitle[locale]}</p>
              <h3>{stay.title}</h3>
              <p className={styles.summary}>{stay.summary[locale]}</p>
              <p className={styles.stack}>{stay.technologies.join(" · ")}</p>
              <div className={styles.links}>
                <a href={stay.links.live} target="_blank" rel="noreferrer">{copy.liveSite} ↗</a>
                <a href={stay.links.github} target="_blank" rel="noreferrer">{copy.github} ↗</a>
              </div>
            </div>
          </article>

          <article className={styles.project}>
            <div className={styles.projectIndex}>02</div>
            <div className={styles.projectContent}>
              <p className={styles.projectType}>{bandit.subtitle[locale]}</p>
              <h3>{bandit.title}</h3>
              <p className={styles.summary}>{bandit.summary[locale]}</p>
              <div className={styles.banditMeta}>
                <span>{copy.progressLabel}</span>
                <strong>{banditProgress.completedThrough} → {banditProgress.currentLevel}</strong>
              </div>
              <p className={styles.stack}>{bandit.technologies.join(" · ")}</p>
              <div className={styles.links}>
                <a href={bandit.links.journal} target="_blank" rel="noreferrer">{copy.journal} ↗</a>
              </div>
            </div>
          </article>
        </div>
      </PageContainer>
    </Section>
  );
}
