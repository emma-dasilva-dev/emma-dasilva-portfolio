import { PageContainer } from "@/components/layout/PageContainer";
import { Section } from "@/components/layout/Section";
import { portfolioContent } from "@/content/portfolio";
import type { Locale } from "@/types/locale";

import styles from "./PortfolioSections.module.css";

interface PortfolioSectionProps {
  locale: Locale;
}

export function Experience({ locale }: PortfolioSectionProps) {
  const content = portfolioContent[locale].experience;

  return (
    <Section id="experience" className={styles.section}>
      <PageContainer>
        <div className={styles.sectionHeader}>
          <h2>{content.heading}</h2>
          <p>{content.intro}</p>
        </div>

        <div className={styles.experienceGrid}>
          {content.items.map((item) => (
            <article key={`${item.period}-${item.title}`} className={styles.experienceItem}>
              <p className={styles.period}>{item.period}</p>
              <h3>{item.title}</h3>
              <p className={styles.role}>{item.role}</p>
              <p className={styles.description}>{item.description}</p>
              {item.link ? (
                <a href={item.link.href} target="_blank" rel="noreferrer">
                  {item.link.label} ↗
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </PageContainer>
    </Section>
  );
}

export function About({ locale }: PortfolioSectionProps) {
  const content = portfolioContent[locale].about;

  return (
    <Section id="about" className={styles.section}>
      <PageContainer>
        <div className={styles.aboutGrid}>
          <h2>{content.heading}</h2>
          <div className={styles.aboutCopy}>
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <blockquote>{content.quote}</blockquote>
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
                <span>{link.label}</span>
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
