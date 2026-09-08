import { PageContainer } from "@/components/layout/PageContainer";
import { Section } from "@/components/layout/Section";
import { heroContent } from "@/content/hero";
import type { Locale } from "@/types/locale";

import styles from "./Hero.module.css";

interface HeroProps {
  locale: Locale;
}

export function Hero({ locale }: HeroProps) {
  const content = heroContent[locale];

  return (
    <Section id="home" className={styles.hero}>
      <PageContainer className={styles.container}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>{content.eyebrow}</p>

          <div className={styles.introduction}>
            <h1 className={styles.name}>
              <span>{content.greetingPrefix}</span>{" "}
              <span className={styles.personName}>{content.name}</span>
            </h1>
            <p className={styles.positioning}>
              <span className={styles.primaryTitle}>{content.titlePrimary}</span>
              <span className={styles.secondaryTitle}>{content.titleSecondary}</span>
            </p>
          </div>

          <p className={styles.supportingCopy}>{content.supportingCopy}</p>

          <a className={styles.cta} href="#work">
            <span>{content.cta}</span>
            <span className={styles.ctaArrow} aria-hidden="true">
              ↓
            </span>
          </a>
        </div>

        <aside className={styles.metaRail} aria-label={locale === "en" ? "Introduction details" : "Détails de présentation"}>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>{content.locationLabel}</span>
            <span className={styles.metaValue}>{content.location}</span>
          </div>

          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>{content.statusLabel}</span>
            <span className={styles.metaValue}>{content.status}</span>
          </div>

          <div className={styles.sectionMarker} aria-hidden="true">
            <span className={styles.markerLine} />
            <span>{content.sectionMarker}</span>
          </div>
        </aside>
      </PageContainer>
    </Section>
  );
}
