import Link from "next/link";

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
        <div className={styles.sectionHeader}>
          <p className={styles.sectionNumber}>{copy.sectionNumber}</p>
          <div>
            <h2 className={styles.sectionTitle}>{copy.heading}</h2>
            <p className={styles.sectionIntro}>{copy.intro}</p>
          </div>
        </div>

        <div className={styles.projects}>
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

          <article className={`${styles.project} ${styles.banditProject}`}>
            <div className={styles.banditEvidence}>
              <div className={styles.evidenceHeader}>
                <span>{copy.progressLabel}</span>
                <span>{banditProgress.lastUpdated}</span>
              </div>

              <div className={styles.progressNumbers}>
                <div>
                  <span className={styles.metaLabel}>{copy.completedLabel}</span>
                  <strong>{banditProgress.completedThrough}</strong>
                </div>
                <span className={styles.progressArrow}>→</span>
                <div>
                  <span className={styles.metaLabel}>{copy.currentLabel}</span>
                  <strong className={styles.currentLevel}>{banditProgress.currentLevel}</strong>
                </div>
              </div>

              <div className={styles.progressTrack} aria-hidden="true">
                <span className={styles.progressCompleted} />
                <span className={styles.progressCurrent} />
              </div>

              <div className={styles.commandBlock}>
                <span className={styles.metaLabel}>{copy.commandsLabel}</span>
                <div className={styles.commands}>
                  <span>ssh</span>
                  <span>find</span>
                  <span>grep</span>
                  <span>base64</span>
                  <span>tar</span>
                  <span>xxd</span>
                </div>
              </div>
            </div>

            <div className={styles.projectCopy}>
              <p className={styles.projectIndex}>02 / {bandit.subtitle[locale]}</p>
              <h3 className={styles.projectTitle}>{bandit.title}</h3>
              <p className={styles.projectSummary}>{bandit.summary[locale]}</p>

              <ul className={styles.techList} aria-label="Technologies">
                {bandit.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>

              <div className={styles.callout}>
                <p className={styles.calloutLabel}>{copy.banditChangeLabel}</p>
                <p>{copy.banditChange}</p>
              </div>

              <div className={styles.actions}>
                <a href={bandit.links.journal} target="_blank" rel="noreferrer">
                  {copy.readJournal} <span aria-hidden="true">↗</span>
                </a>
                <Link href={`/${locale}/work/${bandit.slug}`}>
                  {copy.viewCaseStudy} <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </article>
        </div>
      </PageContainer>
    </Section>
  );
}
