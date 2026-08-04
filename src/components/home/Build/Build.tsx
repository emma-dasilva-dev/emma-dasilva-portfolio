"use client";

import { useLocale } from "@/components/providers/LocaleProvider/LocaleProvider";
import Reveal from "@/components/ui/Reveal/Reveal";
import { HOME_COPY } from "@/content/home";
import { PROJECTS } from "@/content/projects";
import styles from "./Build.module.css";

export default function Build() {
  const { locale } = useLocale();
  const copy = HOME_COPY[locale].build;

  return (
    <section id="build" className="section">
      <div className="shell">
        <div className={styles.header}>
          <Reveal>
            <h2 className="sectionHeading">{copy.label}</h2>
          </Reveal>

          <Reveal delay={80}>
            <p className="sectionIntro">{copy.introduction}</p>
          </Reveal>
        </div>

        <div className={styles.list}>
          {PROJECTS.map((project, index) => (
            <Reveal key={project.id} delay={index * 60}>
              <article className={styles.project}>
                <div>
                  <p className={styles.category}>
                    {project.category[locale]}
                  </p>
                  <h3>{project.title}</h3>
                </div>

                <div className={styles.details}>
                  <p>{project.description[locale]}</p>
                  <p>{project.context[locale]}</p>

                  <ul aria-label="Technologies">
                    {project.technologies.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>

                  {project.liveUrl && project.action ? (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
                      {project.action[locale]} ↗
                    </a>
                  ) : (
                    <span>{project.status?.[locale]}</span>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
