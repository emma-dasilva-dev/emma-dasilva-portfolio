"use client";

import {
  HOME_COPY,
  PRINCIPLES,
} from "@/content/home";

import {
  useLocale,
} from "@/components/providers/LocaleProvider/LocaleProvider";

import Reveal from "@/components/ui/Reveal/Reveal";

import SectionLabel from "@/components/ui/SectionLabel/SectionLabel";

import styles from "./HowIThink.module.css";

export default function HowIThink() {
  const {
    locale,
  } =
    useLocale();

  const copy =
    HOME_COPY[
      locale
    ].thinking;

  return (
    <section
      id="thinking"
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
          index="02"
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
            styles.list
          }
        >
          {PRINCIPLES.map(
            (
              principle,
              index,
            ) => (
              <Reveal
                key={
                  principle.id
                }
                delay={
                  index *
                  80
                }
              >
                <article
                  className={
                    styles.row
                  }
                >
                  <span
                    className={
                      styles.number
                    }
                  >
                    {
                      principle.number
                    }
                  </span>

                  <h3
                    className={
                      styles.rowTitle
                    }
                  >
                    {
                      principle
                        .title[
                        locale
                      ]
                    }
                  </h3>

                  <p
                    className={
                      styles.body
                    }
                  >
                    {
                      principle
                        .body[
                        locale
                      ]
                    }
                  </p>
                </article>
              </Reveal>
            ),
          )}
        </div>
      </div>
    </section>
  );
}