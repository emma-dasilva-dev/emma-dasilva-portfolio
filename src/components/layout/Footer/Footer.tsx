import type { HomeContent } from "../../../types/content";
import type { Locale } from "../../../i18n/config";

import ExternalLink from "../../ui/ExternalLink";

import styles from "./Footer.module.css";

type FooterProps = {
  locale: Locale;
  content: HomeContent["footer"];
};

export default function Footer({ content }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.links}>
          <ExternalLink href="https://github.com/emma-dasilva-dev">
            {content.github}
          </ExternalLink>
          <ExternalLink href="https://www.linkedin.com/in/emmadasilvadev">
            {content.linkedin}
          </ExternalLink>
          <a className={styles.email} href="mailto:emma.dasilva.dev@gmail.com">
            {content.email}
          </a>
        </div>

        <p className={styles.copyright}>{content.copyright}</p>
      </div>
    </footer>
  );
}
