import { PageContainer } from "@/components/layout/PageContainer";
import { Section } from "@/components/layout/Section";
import { cybersecurityContent } from "@/content/cybersecurity";
import { banditProgress, projects } from "@/content/projects";
import type { Locale } from "@/types/locale";

import styles from "./Cybersecurity.module.css";

interface CybersecurityProps {
  locale: Locale;
}

const bandit = projects.find((project) => project.slug === "bandit-redline")!;
const banditEvidence = [
  "Linux",
  "SSH",
  "Permissions",
  "Search & filtering",
  "Encoding / decoding",
  "Compression",
  "Command chaining",
];

export function Cybersecurity({ locale }: CybersecurityProps) {
  const copy = cybersecurityContent[locale];

  return (
    <Section id="cybersecurity" className={styles.section}>
      <PageContainer>
        <header className={styles.sectionHeader}>
          <p className={styles.sectionNumber}>{copy.sectionNumber}</p>
          <div className={styles.sectionLead}>
            <h2 className={styles.sectionTitle}>{copy.heading}</h2>
            <p className={styles.sectionIntro}>{copy.intro}</p>
          </div>
        </header>

        <div className={styles.groupIntro}>
          <div>
            <p className={styles.groupIndex}>01 / Evidence</p>
            <h3>{copy.handsOnLabel}</h3>
          </div>
          <p>{copy.handsOnDescription}</p>
        </div>

        <article className={styles.banditFeature}>
          <div className={styles.banditHeader}>
            <div>
              <p className={styles.itemIndex}>01 / OverTheWire</p>
              <h4>{bandit.title}</h4>
            </div>
            <span className={styles.status}>Documented</span>
          </div>

          <div className={styles.banditStory}>
            <p className={styles.itemSummary}>{bandit.summary[locale]}</p>

            <div className={styles.progressBlock} aria-label={`${copy.completedLabel} ${banditProgress.completedThrough}, ${copy.currentLabel} ${banditProgress.currentLevel}`}>
              <div>
                <span>{copy.completedLabel}</span>
                <strong>{banditProgress.completedThrough}</strong>
              </div>
              <div className={styles.progressTrack} aria-hidden="true">
                <span />
              </div>
              <div>
                <span>{copy.currentLabel}</span>
                <strong className={styles.currentLevel}>{banditProgress.currentLevel}</strong>
              </div>
            </div>
          </div>

          <div className={styles.evidenceRow}>
            <div className={styles.evidenceLabel}>
              <span>{copy.evidenceLabel}</span>
              <small>{copy.lastUpdatedLabel} {banditProgress.lastUpdated}</small>
            </div>
            <ul>
              {banditEvidence.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>

          <div className={styles.banditAction}>
            <a href={bandit.links.journal} target="_blank" rel="noreferrer">
              {copy.readJournal} <span aria-hidden="true">↗</span>
            </a>
          </div>
        </article>

        <blockquote className={styles.philosophy}>{copy.philosophy}</blockquote>
      </PageContainer>
    </Section>
  );
}
