import Link from "next/link";

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
              <Link href={`/${locale}/work/${stay.slug}`}>
                {copy.viewCaseStudy} <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className={styles.stayEvidence} aria-label={copy.architectureLabel}>
            <div className={styles.evidenceHeader}>
              <span>{copy.architectureLabel}</span>
              <span>{copy.rolesLabel}</span>
            </div>

            <div className={styles.architecture}>
              <div className={styles.systemNode}>React Client</div>
              <span className={styles.flowArrow}>↓</span>
              <div className={styles.systemNode}>REST API</div>
              <span className={styles.flowArrow}>↓</span>
              <div className={styles.systemNode}>Express</div>
              <span className={styles.flowArrow}>↓</span>
              <div className={styles.systemNode}>MySQL</div>
              <div className={styles.authNode}>JWT / Auth</div>
            </div>

            <div className={styles.roles}>
              <span>User</span>
              <span>Employee</span>
              <span>Admin</span>
            </div>
          </div>
        </article>
      </PageContainer>
    </Section>
  );
}
