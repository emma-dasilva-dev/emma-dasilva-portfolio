import { PageContainer } from "@/components/layout/PageContainer";
import { Section } from "@/components/layout/Section";
import { portfolioContent } from "@/content/portfolio";
import type { Locale } from "@/types/locale";

import styles from "./PortfolioSections.module.css";

interface PortfolioSectionProps {
  locale: Locale;
}

function ContactIcon({ label }: { label: string }) {
  const commonProps = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": true,
  } as const;

  if (label === "GitHub") {
    return <svg {...commonProps}><path d="M12 .7a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.1c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.18 0 0 1-.32 3.3 1.23A11.5 11.5 0 0 1 12 6.82c1.02 0 2.05.14 3.01.4 2.29-1.55 3.29-1.23 3.29-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.81 1.1.81 2.22v2.98c0 .32.22.7.82.58A12 12 0 0 0 12 .7Z" /></svg>;
  }

  if (label === "LinkedIn") {
    return <svg {...commonProps}><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.98h3.42v1.57h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.32 7.41a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.1 20.45H3.54V8.98H7.1v11.47Z" /></svg>;
  }

  if (label === "Instagram") {
    return <svg {...commonProps}><path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6Zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" /></svg>;
  }

  return <svg {...commonProps} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="1" /><path d="m4 7 8 6 8-6" /></svg>;
}

export function Profile({ locale }: PortfolioSectionProps) {
  const experience = portfolioContent[locale].experience;
  const about = portfolioContent[locale].about;

  return (
    <Section id="experience" className={styles.section}>
      <PageContainer>
        <div className={styles.profileGrid}>
          <div className={styles.experienceColumn}>
            <div className={styles.columnHeading}>
              <h2>{experience.heading}</h2>
              <p>{experience.intro}</p>
            </div>

            <div className={styles.experienceList}>
              {experience.items.map((item) => (
                <article key={`${item.period}-${item.title}`} className={styles.experienceItem}>
                  <p className={styles.period}>{item.period}</p>
                  <div className={styles.experienceBody}>
                    <h3>{item.title}</h3>
                    <p className={styles.role}>{item.role}</p>
                    <p className={styles.description}>{item.description}</p>
                    {item.link ? (
                      <a href={item.link.href} target="_blank" rel="noreferrer">
                        {item.link.label} ↗
                      </a>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div id="about" className={styles.aboutColumn}>
            <div className={styles.columnHeading}>
              <h2>{about.heading}</h2>
            </div>

            <div className={styles.aboutCopy}>
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <blockquote>{about.quote}</blockquote>
          </div>
        </div>
      </PageContainer>
    </Section>
  );
}

export function Stack({ locale }: PortfolioSectionProps) {
  const content = portfolioContent[locale].stack;

  return (
    <Section id="stack" className={styles.section}>
      <PageContainer>
        <div className={styles.sectionHeader}>
          <h2>{content.heading}</h2>
          <p>{content.intro}</p>
        </div>

        <div className={styles.stackList}>
          {content.groups.map((group) => (
            <div key={group.label} className={styles.stackRow}>
              <h3>{group.label}</h3>
              <p>{group.items.join(" · ")}</p>
            </div>
          ))}
        </div>
      </PageContainer>
    </Section>
  );
}

export function Contact({ locale }: PortfolioSectionProps) {
  const content = portfolioContent[locale].contact;

  return (
    <Section id="contact" className={`${styles.section} ${styles.contactSection}`}>
      <PageContainer>
        <div className={styles.contactGrid}>
          <div>
            <h2>{content.heading}</h2>
            <p>{content.copy}</p>
          </div>

          <div className={styles.contactLinks}>
            {content.links.map((link) => (
              <a key={link.label} href={link.href} target={link.href.startsWith("mailto:") ? undefined : "_blank"} rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}>
                <span className={styles.contactLinkLabel}><ContactIcon label={link.label} /><span>{link.label}</span></span>
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>

        <footer className={styles.footer}>
          <span>Emma Da Silva</span>
          <span>Software Engineering × Cybersecurity</span>
          <span>{content.location}</span>
        </footer>
      </PageContainer>
    </Section>
  );
}
