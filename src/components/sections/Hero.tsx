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
      <PageContainer>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>{content.eyebrow}</p>

          <h1 className={styles.name}>
            <span>{content.greetingPrefix}</span>{" "}
            <span className={styles.personName}>{content.name}</span>
          </h1>

          <p className={styles.positioning}>
            <span>{content.titlePrimary}</span>{" "}
            <span className={styles.secondaryTitle}>{content.titleSecondary}</span>
          </p>

          <p className={styles.supportingCopy}>{content.supportingCopy}</p>

          <div className={styles.heroFooter}>
            <div className={styles.metaRow}>
              <span>{content.location}</span>
              <span>{content.status}</span>
            </div>

            <a className={styles.cta} href="#work">
              {content.cta} <span aria-hidden="true">↘</span>
            </a>
          </div>
        </div>
      </PageContainer>
    </Section>
  );
}
