import { PageContainer } from "@/components/layout/PageContainer";
import { Section } from "@/components/layout/Section";
import { cybersecurityContent, linuxPractice, studyingAreas } from "@/content/cybersecurity";
import { banditProgress, projects } from "@/content/projects";
import type { Locale } from "@/types/locale";

import styles from "./Cybersecurity.module.css";

interface CybersecurityProps {
  locale: Locale;
}

const bandit = projects.find((project) => project.slug === "bandit-redline")!;
const banditEvidence = ["Linux", "Permissions", "SSH", "Search & filtering", "Encoding / decoding", "Compression", "Command chaining"];

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

            <div className={styles.progressBlock}>
              <div>
                <span>{copy.completedLabel}</span>
                <strong>{banditProgress.completedThrough}</strong>
              </div>
              <span className={styles.progressArrow} aria-hidden="true">→</span>
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

        <article className={styles.linuxRow}>
          <div className={styles.linuxTitle}>
            <p className={styles.itemIndex}>02 / Local Practice</p>
            <h4>{linuxPractice.title}</h4>
          </div>
          <p className={styles.itemSummary}>{linuxPractice.description[locale]}</p>
          <ul className={styles.linuxEvidence}>
            {linuxPractice.evidence?.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <span className={styles.status}>Ongoing</span>
        </article>

        <div className={styles.studySection}>
          <div className={styles.groupIntro}>
            <div>
              <p className={styles.groupIndex}>02 / Direction</p>
              <h3>{copy.studyingLabel}</h3>
            </div>
            <p>{copy.studyingDescription}</p>
          </div>

          <div className={styles.studyGrid}>
            {studyingAreas.map((area, index) => (
              <article key={area.title} className={styles.studyItem}>
                <span className={styles.studyIndex}>0{index + 1}</span>
                <h4>{area.title}</h4>
                <p>{area.description[locale]}</p>
              </article>
            ))}
          </div>
        </div>

        <blockquote className={styles.philosophy}>{copy.philosophy}</blockquote>
      </PageContainer>
    </Section>
  );
}
