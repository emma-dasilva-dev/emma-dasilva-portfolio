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

const systemFlow = [
  { index: "01", label: "React Client", detail: "Interface" },
  { index: "02", label: "REST API", detail: "Requests" },
  { index: "03", label: "Express", detail: "Business logic" },
  { index: "04", label: "MySQL", detail: "Data" },
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
          <div className={styles.projectTopline}>
            <p className={styles.projectIndex}>01 / {stay.subtitle[locale]}</p>
            <span className={styles.projectYear}>2026</span>
          </div>

          <div className={styles.projectHeadingRow}>
            <h3 className={styles.projectTitle}>{stay.title}</h3>
            <ul className={styles.techList} aria-label="Technologies">
              {stay.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </div>

          <div className={styles.projectStory}>
            <p className={styles.projectSummary}>{stay.summary[locale]}</p>
            <div className={styles.callout}>
              <p className={styles.calloutLabel}>{copy.challengeLabel}</p>
              <p>{copy.stayChallenge}</p>
            </div>
          </div>

          <div className={styles.systemCanvas} aria-label={copy.architectureLabel}>
            <div className={styles.canvasHeader}>
              <span>{copy.architectureLabel}</span>
              <span>Frontend → API → Backend → Data</span>
            </div>

            <div className={styles.flowGrid}>
              {systemFlow.map((node, index) => (
                <div key={node.label} className={styles.flowStage}>
                  <div className={styles.stageIndex}>{node.index}</div>
                  <div className={styles.stageContent}>
                    <span className={styles.stageLabel}>{node.label}</span>
                    <span className={styles.stageDetail}>{node.detail}</span>
                  </div>
                  {index < systemFlow.length - 1 && (
                    <span className={styles.connector} aria-hidden="true">→</span>
                  )}
                </div>
              ))}
            </div>

            <div className={styles.systemFooter}>
              <div className={styles.authStrip}>
                <span>JWT / Auth</span>
                <small>Protected access across user roles</small>
              </div>
              <div className={styles.roles}>
                <span>User</span>
                <span>Employee</span>
                <span>Admin</span>
              </div>
            </div>
          </div>

          <div className={styles.projectActions}>
            <a href={stay.links.live} target="_blank" rel="noreferrer">
              {copy.liveSite} <span aria-hidden="true">↗</span>
            </a>
            <a href={stay.links.github} target="_blank" rel="noreferrer">
              {copy.github} <span aria-hidden="true">↗</span>
            </a>
          </div>
        </article>
      </PageContainer>
    </Section>
  );
}
