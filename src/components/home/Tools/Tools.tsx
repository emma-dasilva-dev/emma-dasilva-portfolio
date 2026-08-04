"use client";

import { useLocale } from "@/components/providers/LocaleProvider/LocaleProvider";
import Reveal from "@/components/ui/Reveal/Reveal";
import { HOME_COPY, TOOL_GROUPS } from "@/content/home";
import styles from "./Tools.module.css";

export default function Tools() {
  const { locale } = useLocale();
  const copy = HOME_COPY[locale].tools;

  return (
    <section id="tools" className="section">
      <div className="shell">
        <div className={styles.header}>
          <Reveal>
            <h2 className="sectionHeading">{copy.label}</h2>
          </Reveal>

          <Reveal delay={80}>
            <p className="sectionIntro">{copy.introduction}</p>
          </Reveal>
        </div>

        <div className={styles.rows}>
          {TOOL_GROUPS.map((group, index) => (
            <Reveal key={group.id} delay={index * 60}>
              <article className={styles.row}>
                <h3>{group.title[locale]}</h3>
                <p>{group.technologies.join(" / ")}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
