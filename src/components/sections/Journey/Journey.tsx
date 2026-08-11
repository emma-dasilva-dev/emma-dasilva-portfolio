import type { HomeContent } from "../../../types/content";

import styles from "./Journey.module.css";

type JourneyProps = {
  content: HomeContent["journey"];
};

export default function Journey({ content }: JourneyProps) {
  return (
    <section id="journey" className="section">
      <div className="page-shell">
        <p className="section-label">{content.sectionLabel}</p>

        <div className={styles.headingRow}>
          <h2 className="section-heading">{content.heading}</h2>
          <p className={styles.intro}>{content.intro}</p>
        </div>

        <ol className={styles.timeline}>
          {content.items.map((item, index) => (
            <li
              key={`${item.date}-${item.title}`}
              className={`${styles.item} ${
                item.kind === "self" ? styles.self : ""
              }`}
            >
              <div className={styles.index}>
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className={styles.date}>{item.date}</div>

              <div className={styles.content}>
                <h3>{item.title}</h3>
                {item.subtitle ? <p className={styles.subtitle}>{item.subtitle}</p> : null}
                {item.description ? (
                  <p className={styles.description}>{item.description}</p>
                ) : null}

                {item.stack?.length ? (
                  <p className={styles.stack}>{item.stack.join(" · ")}</p>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
