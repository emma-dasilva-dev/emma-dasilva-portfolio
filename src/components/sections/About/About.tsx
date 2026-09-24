import type { HomeContent } from "../../../types/content";
import Portrait from "../../ui/Portrait";

import styles from "./About.module.css";

type AboutProps = {
  content: HomeContent["about"];
};

export default function About({ content }: AboutProps) {
  return (
    <section id="about" className="section">
      <div className={`page-shell ${styles.grid}`}>
        <div className={styles.copy}>
          <p className="section-label">{content.sectionLabel}</p>
          <h2 className="section-heading">{content.heading}</h2>

          <div className={styles.paragraphs}>
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <dl className={styles.details}>
            <div>
              <dt>{content.currentlyLabel}</dt>
              <dd>{content.currently.join(" · ")}</dd>
            </div>
            <div>
              <dt>{content.basedLabel}</dt>
              <dd>{content.based}</dd>
            </div>
            <div>
              <dt>{content.languagesLabel}</dt>
              <dd>{content.languages}</dd>
            </div>
          </dl>
        </div>

        <div className={styles.portrait}>
          <span className={styles.marker} aria-hidden="true">
            03.1
          </span>
          <Portrait alt={content.portraitAlt} />
        </div>
      </div>
    </section>
  );
}
