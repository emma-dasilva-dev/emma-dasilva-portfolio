import { PageContainer } from "@/components/layout/PageContainer";
import { Section } from "@/components/layout/Section";
import { projects } from "@/content/projects";
import { workContent } from "@/content/work";
import type { Locale } from "@/types/locale";

import styles from "./Work.module.css";

interface WorkProps { locale: Locale; }
const bandit = projects.find((project) => project.slug === "bandit-redline")!;

export function Work({ locale }: WorkProps) {
  const copy = workContent[locale];
  return (
    <Section id="work" className={styles.section}>
      <PageContainer>
        <div className={styles.thread}>
          <div className={styles.promptRow}>
            <span className={styles.avatar}>Y</span>
            <div><p className={styles.author}>{locale === "en" ? "Visitor" : "Visiteur"}</p><h2>{locale === "en" ? "What have you been working on?" : "Sur quoi as-tu travaillé ?"}</h2></div>
          </div>
          <div className={styles.answerRow}>
            <span className={`${styles.avatar} ${styles.emmaAvatar}`}>E</span>
            <div className={styles.answerBody}>
              <p className={styles.author}>Emma</p>
              <p className={styles.intro}>{copy.intro}</p>
              <article className={styles.project}>
                <p className={styles.projectType}>{bandit.subtitle[locale]}</p>
                <h3>{bandit.title}</h3>
                <p className={styles.summary}>{bandit.summary[locale]}</p>
                <p className={styles.stack}>{bandit.technologies.join(" · ")}</p>
                <div className={styles.links}><a href={bandit.links.journal} target="_blank" rel="noreferrer">{copy.journal} ↗</a></div>
              </article>
            </div>
          </div>
        </div>
      </PageContainer>
    </Section>
  );
}
