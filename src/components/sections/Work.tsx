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
        <div className={styles.sectionHeader}>
          <p className={styles.sectionNumber}>{copy.sectionNumber}</p>
          <div>
            <h2 className={styles.sectionTitle}>{copy.heading}</h2>
            <p className={styles.sectionIntro}>{copy.intro}</p>
          </div>
        </div>

        <article className={styles.project}>
          <div className={styles.projectCopy}>
            <p className={styles.projectIndex}>01 / {stay.subtitle[locale]}</p>
            <h3 className={styles.projectTitle}>{stay.title}</h3>
            <p className={styles.projectSummary}>{stay.summary[locale]}</p>

            <ul className={styles.techList} aria-label="Technologies">
              {stay.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>

            <div className={styles.callout}>
              <p className={styles.calloutLabel}>{copy.challengeLabel}</p>
              <p>{copy.stayChallenge}</p>
            </div>

            <div className={styles.actions}>
              <a href={stay.links.live} target="_blank" rel="noreferrer">
                {copy.liveSite} <span aria-hidden="true">↗</span>
              </a>
              <a href={stay.links.github} target="_blank" rel="noreferrer">
                {copy.github} <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className={styles.stayEvidence} aria-label={copy.architectureLabel}>
            <div className={styles.evidenceHeader}>
              <span>{copy.architectureLabel}</span>
              <span>{copy.rolesLabel}</span>
            </div>

            <div className={styles.architecture}>
              <div className={styles.flowRail} aria-hidden="true" />
              {systemFlow.map((node, index) => (
                <div key={node.label} className={styles.flowStage}>
                  <div className={styles.stageMarker}>{node.index}</div>
                  <div className={styles.systemNode}>
                    <span className={styles.nodeLabel}>{node.label}</span>
                    <span className={styles.nodeDetail}>{node.detail}</span>
                  </div>
                  {index < systemFlow.length - 1 && (
                    <span className={styles.flowConnector} aria-hidden="true">→</span>
                  )}
                </div>
              ))}

              <div className={styles.authLayer}>
                <span className={styles.authLabel}>JWT / AUTH</span>
                <span className={styles.authLine} aria-hidden="true" />
                <span className={styles.authDetail}>Access control across protected flows</span>
              </div>
            </div>

            <div className={styles.roles}>
              <span><small>01</small>User</span>
              <span><small>02</small>Employee</span>
              <span><small>03</small>Admin</span>
            </div>
          </div>
        </article>
      </PageContainer>
    </Section>
  );
}
