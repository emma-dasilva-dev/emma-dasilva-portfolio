import type { HomeContent } from "../../../types/content";

import styles from "./Stack.module.css";

type StackProps = {
  content: HomeContent["stack"];
};

export default function Stack({ content }: StackProps) {
  return (
    <section id="stack" className="section">
      <div className="page-shell">
        <p className="section-label">{content.sectionLabel}</p>

        <div className={styles.headingRow}>
          <h2 className="section-heading">{content.heading}</h2>
          <p className={styles.description}>{content.description}</p>
        </div>

        <div className={styles.groups}>
          {content.groups.map((group) => (
            <div key={group.label} className={styles.group}>
              <h3>{group.label}</h3>
              <p>{group.technologies.join(" · ")}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
