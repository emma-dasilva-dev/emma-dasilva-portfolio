import { PageContainer } from "@/components/layout/PageContainer";
import { Section } from "@/components/layout/Section";
import { AsciiOrb } from "@/components/ui/AsciiOrb";
import { heroContent } from "@/content/hero";
import type { Locale } from "@/types/locale";

import styles from "./Hero.module.css";

interface HeroProps {
  locale: Locale;
}

export function Hero({ locale }: HeroProps) {
  const content = heroContent[locale];
  const prompt = locale === "en" ? "Tell me about Emma." : "Parle-moi d’Emma.";

  return (
    <Section id="home" className={styles.hero}>
      <PageContainer>
        <div className={styles.conversation}>
          <div className={styles.topbar}>
            <span>Emma / Portfolio</span>
            <span className={styles.topbarStatus}>{locale === "en" ? "Cybersecurity · Computer Engineering" : "Cybersécurité · Génie informatique"}</span>
          </div>

          <div className={`${styles.messageRow} ${styles.visitorRow}`}>
            <div className={styles.avatar}>Y</div>
            <div className={styles.messageBody}>
              <p className={styles.author}>{locale === "en" ? "Visitor" : "Visiteur"}</p>
              <p>{prompt}</p>
            </div>
          </div>

          <div className={`${styles.messageRow} ${styles.emmaRow}`}>
            <div className={`${styles.avatar} ${styles.emmaAvatar}`}>E</div>
            <div className={styles.messageBody}>
              <p className={styles.author}>Emma</p>
              <h1 className={styles.name}>
                <span>{content.greetingPrefix}</span>{" "}<span className={styles.personName}>{content.name}</span>
              </h1>
              <p className={styles.positioning}>{content.titlePrimary}<br /><span>{content.titleSecondary}</span></p>
              <p className={styles.supportingCopy}>{content.supportingCopy}</p>
              <div className={styles.details}><span>{content.location}</span><span>{content.status}</span></div>
            </div>
          </div>

          <div className={styles.orbRow}>
            <div className={styles.orbSlot}><AsciiOrb key={locale} locale={locale} /></div>
          </div>

          <div className={styles.suggestions} aria-label={locale === "en" ? "Portfolio shortcuts" : "Raccourcis du portfolio"}>
            <a href="#work">{locale === "en" ? "Show me her projects" : "Montre-moi ses projets"}</a>
            <a href="#experience">{locale === "en" ? "What experience does she have?" : "Quelle expérience a-t-elle ?"}</a>
            <a href="#stack">{locale === "en" ? "What does she work with?" : "Avec quelles technologies travaille-t-elle ?"}</a>
          </div>
        </div>
      </PageContainer>
    </Section>
  );
}
