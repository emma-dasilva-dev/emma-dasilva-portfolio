import type {
  Locale,
  Project,
} from "@/types/portfolio";

import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  project: Project;
  locale: Locale;
  actionLabel: string;
  featured?: boolean;
}

export default function ProjectCard({
  project,
  locale,
  actionLabel,
  featured = false,
}: ProjectCardProps) {
  return (
    <a
      href={
        project.liveUrl
      }
      target="_blank"
      rel="noreferrer"
      className={`${styles.card} ${
        featured
          ? styles.featured
          : ""
      }`}
      aria-label={`${actionLabel}: ${project.title}`}
    >
      <div
        className={
          styles.top
        }
      >
        <span
          className={
            styles.number
          }
        >
          {
            project.number
          }
        </span>

        <span
          className={
            styles.year
          }
        >
          {
            project.year
          }
        </span>
      </div>

      <div
        className={
          styles.main
        }
      >
        <p
          className={
            styles.category
          }
        >
          {
            project
              .category[
              locale
            ]
          }
        </p>

        <h3
          className={
            styles.title
          }
        >
          {
            project.title
          }
        </h3>

        <p
          className={
            styles.description
          }
        >
          {
            project
              .description[
              locale
            ]
          }
        </p>
      </div>

      <div
        className={
          styles.footer
        }
      >
        <ul
          className={
            styles.technologies
          }
          aria-label="Technologies"
        >
          {project
            .technologies
            .map(
              (
                technology,
              ) => (
                <li
                  key={
                    technology
                  }
                >
                  {
                    technology
                  }
                </li>
              ),
            )}
        </ul>

        <span
          className={
            styles.action
          }
        >
          {
            actionLabel
          }
        </span>
      </div>
    </a>
  );
}
