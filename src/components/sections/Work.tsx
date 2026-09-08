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

const projectDetails = [
  { label: "Frontend", value: "React" },
  { label: "Backend", value: "Node.js · Express" },
  { label: "Data", value: "MySQL" },
  { label: "Access", value: "JWT · Role-based" },
];

export function Work({ locale }: WorkProps) {
  const copy = workContent[locale];

  return (
    <Section id="work" className={styles.section}>
      <PageContainer>
        <header className={styles.sectionHeader}>
          <p className={styles.sectionNumber}>{copy.sectionNumber}</p>
          <div className={styles.sectionLead}>
            <h2 className={styles.sectionTitle}>{copy.heading}</h2>
            <p className={styles.sectionIntro}>{copy.intro}</p>
          </div>
        </header>

        <article className={styles.project}>
          <div className={styles.projectMeta}>
            <span>01</span>
            <span>{stay.subtitle[locale]}</span>
            <span>2026</span>
          </div>

          <div className={styles.projectMain}>
            <h3 className={styles.projectTitle}>{stay.title}</h3>
            <p className={styles.projectSummary}>{stay.summary[locale]}</p>
          </div>

          <div className={styles.projectDetails}>
            {projectDetails.map((detail) => (
              <div key={detail.label} className={styles.detailItem}>
                <span>{detail.label}</span>
                <strong>{detail.value}</strong>
              </div>
            ))}
          </div>

          <div className={styles.projectFooter}>
            <div className={styles.challenge}>
              <span>{copy.challengeLabel}</span>
              <p>{copy.stayChallenge}</p>
            </div>

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
