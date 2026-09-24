import type { HomeContent } from "../../../types/content";
import type { Locale } from "../../../i18n/config";
import TerminalPrompt from "../../terminal/TerminalPrompt";

import styles from "./Hero.module.css";

type HeroProps = {
  locale: Locale;
  content: HomeContent["hero"];
};

export default function Hero({ locale, content }: HeroProps) {
  const [firstName, ...rest] = content.name.split(" ");

  return (
    <section id="home" className={styles.hero}>
      <div className={`page-shell ${styles.inner}`}>
        <p className={styles.path}>
          emma@portfolio:~ / home
        </p>

        <p className={styles.sectionLabel}>{content.sectionLabel}</p>

        <div className={styles.grid}>
          <div className={styles.identity}>
            <h1 className={styles.name}>
              <span>{firstName}</span>
              <span>{rest.join(" ")}</span>
            </h1>

            <p className={styles.description}>{content.description}</p>
          </div>

          <div className={styles.roleBlock}>
            <p className={styles.role}>{content.role}</p>
          </div>
        </div>

        <div className={styles.bottom}>
          <TerminalPrompt locale={locale} />

          <a className={styles.scroll} href="#work">
            <span>{content.scroll}</span>
            <span className={styles.scrollLine} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
