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
          <div>
            <h2>{copy.heading}</h2>
            <p>{copy.intro}</p>
          </div>
        </header>

        <article className={styles.entry}>
          <div className={styles.entryHeader}>
            <div>
              <p className={styles.kicker}>01 · OverTheWire</p>
              <h3>{bandit.title}</h3>
            </div>
            <span className={styles.status}>Documented</span>
          </div>

          <div className={styles.entryBody}>
            <p className={styles.summary}>{bandit.summary[locale]}</p>

            <div className={styles.progress} aria-label={`${copy.completedLabel} ${banditProgress.completedThrough}, ${copy.currentLabel} ${banditProgress.currentLevel}`}>
              <span>{banditProgress.completedThrough}</span>
              <div className={styles.progressLine} aria-hidden="true" />
              <span className={styles.current}>{banditProgress.currentLevel}</span>
            </div>
          </div>

          <div className={styles.evidenceRow}>
            <span className={styles.evidenceLabel}>{copy.evidenceLabel}</span>
            <ul>
              {banditEvidence.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className={styles.entryFooter}>
            <span className={styles.updated}>{copy.lastUpdatedLabel} {banditProgress.lastUpdated}</span>
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
