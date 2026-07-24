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

import styles from "./SelectedWork.module.css";

export default function SelectedWork() {
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

        <div
          className={
            styles.introduction
          }
        >
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

          <Reveal
            delay={80}
          >
            <p
              className={
                styles.intro
              }
            >
              {
                copy.intro
              }
            </p>
          </Reveal>
        </div>

        <div
          className={
            styles.grid
          }
        >
          {PROJECTS.map(
            (
              project,
              index,
            ) => (
              <Reveal
                key={
                  project.id
                }
                delay={
                  index *
                  90
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
                    copy.projectAction
                  }
                  priority={
                    index ===
                    0
                  }
                />
              </Reveal>
            ),
          )}
        </div>
      </div>
    </section>
  );
}