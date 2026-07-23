"use client";

import {
  useLocale,
} from "@/components/providers/LocaleProvider/LocaleProvider";

import styles from "./HomeSections.module.css";

export default function HomeSections() {
  const {
    locale,
  } = useLocale();

  const content =
    locale === "en"
      ? {
          workLabel:
            "SELECTED WORK",

          workTitle:
            "Things I have built.",

          projects: [
            {
              title:
                "STAY",

              description:
                "A full-stack hospitality and reservation platform for premium stays in Benin.",

              technology:
                "React / Node.js / MySQL",
            },

            {
              title:
                "ByteRush",

              description:
                "An educational C project that turned learning into something tangible.",

              technology:
                "C / Terminal",
            },

            {
              title:
                "Bandit Redline Journal",

              description:
                "A visual record of my cybersecurity learning and problem-solving process.",

              technology:
                "Web / Cybersecurity",
            },
          ],

          storyLabel:
            "BEHIND THE WORK",

          storyTitle:
            "I did not begin with a plan to become a developer.",

          storyBody:
            "Technology entered my life through curiosity. What changed everything was realizing that I could take something I had just learned and turn it into something real. Since then, I have kept building.",

          labLabel:
            "LAB",

          labTitle:
            "Where unfinished ideas are allowed to exist.",

          labBody:
            "Experiments, technical explorations and things I am learning before they become polished work.",

          nowLabel:
            "RIGHT NOW",

          nowTitle:
            "Learning. Building. Refining.",

          nowBody:
            "My focus is simple: become technically stronger without losing the attention to detail that makes the work mine.",
        }
      : {
          workLabel:
            "PROJETS SÉLECTIONNÉS",

          workTitle:
            "Ce que j'ai construit.",

          projects: [
            {
              title:
                "STAY",

              description:
                "Une plateforme full-stack de découverte et de réservation d'hébergements premium au Bénin.",

              technology:
                "React / Node.js / MySQL",
            },

            {
              title:
                "ByteRush",

              description:
                "Un projet éducatif en C qui a transformé mon apprentissage en quelque chose de concret.",

              technology:
                "C / Terminal",
            },

            {
              title:
                "Bandit Redline Journal",

              description:
                "Une trace visuelle de mon apprentissage de la cybersécurité et de ma manière de résoudre les problèmes.",

              technology:
                "Web / Cybersécurité",
            },
          ],

          storyLabel:
            "DERRIÈRE LE TRAVAIL",

          storyTitle:
            "Je n'avais pas prévu de devenir développeuse.",

          storyBody:
            "La technologie est entrée dans ma vie par curiosité. Tout a changé lorsque j'ai compris que je pouvais transformer ce que je venais d'apprendre en quelque chose de réel. Depuis, je continue à construire.",

          labLabel:
            "LAB",

          labTitle:
            "L'endroit où les idées inachevées ont le droit d'exister.",

          labBody:
            "Des expériences, explorations techniques et apprentissages avant qu'ils ne deviennent des projets aboutis.",

          nowLabel:
            "EN CE MOMENT",

          nowTitle:
            "Apprendre. Construire. Affiner.",

          nowBody:
            "Mon objectif est simple : devenir techniquement plus forte sans perdre l'attention au détail qui rend mon travail personnel.",
        };

  return (
    <>
      <section
        id="work"
        className={
          styles.work
        }
      >
        <div
          className={
            styles.sectionInner
          }
        >
          <p
            className={
              styles.label
            }
          >
            {
              content.workLabel
            }
          </p>

          <h2
            className={
              styles.heading
            }
          >
            {
              content.workTitle
            }
          </h2>

          <div
            className={
              styles.projectList
            }
          >
            {content.projects.map(
              (
                project,
              ) => (
                <article
                  key={
                    project.title
                  }
                  className={
                    styles.project
                  }
                >
                  <h3>
                    {
                      project.title
                    }
                  </h3>

                  <p
                    className={
                      styles.projectDescription
                    }
                  >
                    {
                      project.description
                    }
                  </p>

                  <p
                    className={
                      styles.technology
                    }
                  >
                    {
                      project.technology
                    }
                  </p>
                </article>
              ),
            )}
          </div>
        </div>
      </section>

      <section
        id="story"
        className={
          styles.story
        }
      >
        <div
          className={
            styles.sectionInner
          }
        >
          <p
            className={
              styles.label
            }
          >
            {
              content.storyLabel
            }
          </p>

          <div
            className={
              styles.storyGrid
            }
          >
            <h2
              className={
                styles.storyHeading
              }
            >
              {
                content.storyTitle
              }
            </h2>

            <p
              className={
                styles.bodyCopy
              }
            >
              {
                content.storyBody
              }
            </p>
          </div>
        </div>
      </section>

      <section
        className={
          styles.splitSection
        }
      >
        <article
          id="lab"
          className={
            styles.splitPanel
          }
        >
          <p
            className={
              styles.label
            }
          >
            {
              content.labLabel
            }
          </p>

          <h2>
            {
              content.labTitle
            }
          </h2>

          <p>
            {
              content.labBody
            }
          </p>
        </article>

        <article
          id="now"
          className={
            styles.splitPanel
          }
        >
          <p
            className={
              styles.label
            }
          >
            {
              content.nowLabel
            }
          </p>

          <h2>
            {
              content.nowTitle
            }
          </h2>

          <p>
            {
              content.nowBody
            }
          </p>
        </article>
      </section>
    </>
  );
}
