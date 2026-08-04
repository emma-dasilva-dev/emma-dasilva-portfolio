"use client";

import { useLocale } from "@/components/providers/LocaleProvider/LocaleProvider";
import Reveal from "@/components/ui/Reveal/Reveal";
import { HOME_COPY, PRINCIPLES } from "@/content/home";
import styles from "./Think.module.css";

export default function Think() {
  const { locale } = useLocale();
  const copy = HOME_COPY[locale].think;

  return (
    <section id="think" className="section">
      <div className="shell">
        <div className={styles.header}>
          <Reveal>
            <h2 className="sectionHeading">{copy.label}</h2>
          </Reveal>

          <Reveal delay={80}>
            <p className="sectionIntro">{copy.introduction}</p>
          </Reveal>
        </div>

        <div className={styles.grid}>
          {PRINCIPLES.map((principle, index) => (
            <Reveal key={principle.id} delay={index * 60}>
              <article>
                <h3>{principle.title[locale]}</h3>
                <p>{principle.description[locale]}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
