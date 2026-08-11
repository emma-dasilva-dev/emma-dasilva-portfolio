import type { HomeContent } from "../../../types/content";

import ExternalLink from "../../ui/ExternalLink";

import styles from "./Contact.module.css";

type ContactProps = {
  content: HomeContent["contact"];
};

export default function Contact({ content }: ContactProps) {
  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="page-shell">
        <p className="section-label">{content.sectionLabel}</p>

        <h2 className={styles.heading}>{content.heading}</h2>

        <p className={styles.lineOne}>{content.lineOne}</p>
        <p className={styles.lineTwo}>{content.lineTwo}</p>

        <div className={styles.actions}>
          <a
            className={styles.primary}
            href="mailto:emma.dasilva.dev@gmail.com"
          >
            <span>{content.getInTouch}</span>
            <span className={styles.mailArrow} aria-hidden="true">
              →
            </span>
          </a>

          <div className={styles.secondary}>
            <ExternalLink href="https://github.com/emma-dasilva-dev">
              {content.github}
            </ExternalLink>
            <ExternalLink href="https://www.linkedin.com/in/emmadasilvadev">
              {content.linkedin}
            </ExternalLink>
          </div>
        </div>
      </div>
    </section>
  );
}
