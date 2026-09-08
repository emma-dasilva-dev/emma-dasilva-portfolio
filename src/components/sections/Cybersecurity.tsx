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
          <div className={styles.headingBlock}>
            <h2 className={styles.sectionTitle}>{copy.heading}</h2>
            <p className={styles.sectionIntro}>{copy.intro}</p>
          </div>
        </header>

        <div className={styles.securityGrid}>
          <section className={styles.handsOn} aria-labelledby="hands-on-heading">
            <div className={styles.groupHeader}>
              <div>
                <p className={styles.groupSignal}>01 / Evidence</p>
                <h3 id="hands-on-heading">{copy.handsOnLabel}</h3>
              </div>
              <p>{copy.handsOnDescription}</p>
            </div>

            <article className={styles.bandit}>
              <div className={styles.itemHeader}>
                <div>
                  <p className={styles.itemIndex}>01 / OverTheWire</p>
                  <h4>{bandit.title}</h4>
                </div>
                <span className={styles.evidenceState}>Documented</span>
              </div>

              <p className={styles.itemSummary}>{bandit.summary[locale]}</p>

              <div className={styles.progressPanel}>
                <div className={styles.progressMeta}>
                  <span>{copy.progressLabel}</span>
                  <span>{copy.lastUpdatedLabel} {banditProgress.lastUpdated}</span>
                </div>
                <div className={styles.progressValues}>
                  <div>
                    <span>{copy.completedLabel}</span>
                    <strong>{banditProgress.completedThrough}</strong>
                  </div>
                  <span className={styles.progressArrow} aria-hidden="true">→</span>
                  <div>
                    <span>{copy.currentLabel}</span>
                    <strong>{banditProgress.currentLevel}</strong>
                  </div>
                </div>
              </div>

              <div className={styles.evidenceBlock}>
                <p>{copy.evidenceLabel}</p>
                <ul>
                  {banditEvidence.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>

              <div className={styles.actions}>
                <a href={bandit.links.journal} target="_blank" rel="noreferrer">
                  {copy.readJournal} <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>

            <article className={styles.linuxPractice}>
              <div className={styles.itemHeader}>
                <div>
                  <p className={styles.itemIndex}>02 / Local Practice</p>
                  <h4>{linuxPractice.title}</h4>
                </div>
                <span className={styles.evidenceState}>Ongoing</span>
              </div>
              <p className={styles.itemSummary}>{linuxPractice.description[locale]}</p>
              <ul className={styles.compactEvidence}>
                {linuxPractice.evidence?.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          </section>

          <section className={styles.studying} aria-labelledby="studying-heading">
            <div className={styles.groupHeader}>
              <div>
                <p className={styles.groupSignal}>02 / Direction</p>
                <h3 id="studying-heading">{copy.studyingLabel}</h3>
              </div>
              <p>{copy.studyingDescription}</p>
            </div>

            <div className={styles.studyList}>
              {studyingAreas.map((area, index) => (
                <article key={area.title} className={styles.studyItem}>
                  <span className={styles.studyIndex}>0{index + 1}</span>
                  <div>
                    <h4>{area.title}</h4>
                    <p>{area.description[locale]}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>

        <blockquote className={styles.philosophy}>{copy.philosophy}</blockquote>
      </PageContainer>
    </Section>
  );
}
