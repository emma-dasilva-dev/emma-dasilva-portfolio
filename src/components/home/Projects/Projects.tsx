"use client";

import { projects } from "@/content/projects";
import { useLocale } from "@/components/providers/LocaleProvider/LocaleProvider";

import styles from "./Projects.module.css";

export default function Projects() {
  const { locale } = useLocale();

  return (
    <section id="projects" className="section">
      <div className={`shell ${styles.wrapper}`}>
        <p className="eyebrow">
          {locale === "en" ? "SELECTED WORK" : "PROJETS SÉLECTIONNÉS"}
        </p>

        <div className={styles.list}>
          {projects.map((project) => (
            <article key={project.id} className={styles.project}>
              <span className={styles.number}>{project.number}</span>

              <div className={styles.content}>
                <p className={styles.category}>
                  {project.category[locale]}
                </p>

                <h2>{project.title[locale]}</h2>

                <p className={styles.description}>
                  {project.description[locale]}
                </p>

                {project.context && (
                  <p className={styles.context}>
                    {project.context[locale]}
                  </p>
                )}

                <ul className={styles.tech}>
                  {project.technologies.map((tech: string) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>

                {project.link ? (
                  <a
                    href={project.link.href}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.link}
                  >
                    {project.link.label[locale]}
                  </a>
                ) : (
                  <span className={styles.status}>
                    {locale === "en"
                      ? "IN DEVELOPMENT"
                      : "EN DÉVELOPPEMENT"}
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}