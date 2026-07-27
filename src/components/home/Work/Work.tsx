"use client";

import {
  HOME_COPY,
} from "@/content/home";

import {
  PROJECTS,
} from "@/content/projects";

import {
  useLocale,
} from "@/components/providers/LocaleProvider/LocaleProvider";

import ProjectCard from "@/components/projects/ProjectCard/ProjectCard";
import Reveal from "@/components/ui/Reveal/Reveal";
import SectionLabel from "@/components/ui/SectionLabel/SectionLabel";

import styles from "./Work.module.css";

export default function Work() {
  const {
    locale,
  } =
    useLocale();

  const copy =
    HOME_COPY[
      locale
    ].work;

  return (
    <section
      id="work"
      className={
        styles.section
      }
    >
      <div
        className={
          styles.inner
        }
      >
        <SectionLabel
          index="01"
          label={
            copy.label
          }
        />

        <Reveal>
          <h2
            className={
              styles.title
            }
          >
            {
              copy.title
            }
          </h2>
        </Reveal>

        <div
          className={
            styles.grid
          }
        >
          {PROJECTS.map(
            (
              project,
              index,
            ) => {
              const featured =
                index === 2;

              return (
                <Reveal
                  key={
                    project.id
                  }
                  className={
                    featured
                      ? styles.wide
                      : ""
                  }
                  delay={
                    index *
                    80
                  }
                >
                  <ProjectCard
                    project={
                      project
                    }
                    locale={
                      locale
                    }
                    actionLabel={
                      copy.visitProject
                    }
                    featured={
                      featured
                    }
                  />
                </Reveal>
              );
            },
          )}
        </div>
      </div>
    </section>
  );
}
