import { PageContainer } from "@/components/layout/PageContainer";
import { Section } from "@/components/layout/Section";
import { AsciiOrb } from "@/components/ui/AsciiOrb";
import { heroContent } from "@/content/hero";
import type { Locale } from "@/types/locale";

import styles from "./Hero.module.css";

interface HeroProps {
  locale: Locale;
}

function PortraitPlaceholder() {
  return (
    <div className={styles.portraitPlaceholder} aria-label="Portrait placeholder">
      <svg viewBox="0 0 160 200" role="img" aria-hidden="true">
        <circle cx="80" cy="64" r="32" />
        <path d="M35 176c5-42 24-64 45-64s40 22 45 64" />
      </svg>
      <span>portrait</span>
    </div>
  );
}

export function Hero({ locale }: HeroProps) {
  const content = heroContent[locale];

  return (
    <Section id="home" className={styles.hero}>
      <PageContainer>
        <div className={styles.heroGrid}>
          <div className={styles.heroInner}>
            <p className={styles.eyebrow}>{content.eyebrow}</p>

            <h1 className={styles.name}>
              <span>{content.greetingPrefix}</span>{" "}
              <span className={styles.personName}>{content.name}</span>
            </h1>

            <p className={styles.positioning}>
              {content.titlePrimary}<br />
              <span>{content.titleSecondary}</span>
            </p>

            <p className={styles.supportingCopy}>{content.supportingCopy}</p>

            <div className={styles.details}>
              <span>{content.location}</span>
              <span>{content.status}</span>
            </div>

            <a className={styles.cta} href="#work">
              {content.cta} <span aria-hidden="true">↓</span>
            </a>
          </div>

          <div className={styles.identityVisuals}>
            <PortraitPlaceholder />
            <div className={styles.orbSlot}>
              <AsciiOrb key={locale} locale={locale} />
            </div>
          </div>
        </div>
      </PageContainer>
    </Section>
  );
}
