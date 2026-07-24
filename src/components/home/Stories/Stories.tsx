"use client";

import {
  HOME_COPY,
  STORIES,
} from "@/content/home";

import {
  useLocale,
} from "@/components/providers/LocaleProvider/LocaleProvider";

import Reveal from "@/components/ui/Reveal/Reveal";

import SectionLabel from "@/components/ui/SectionLabel/SectionLabel";

import styles from "./Stories.module.css";

export default function Stories() {
  const {
    locale,
  } =
    useLocale();

  const copy =
    HOME_COPY[
      locale
    ].stories;

  return (
    <section
      id="stories"
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
          index="03"
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
            styles.stories
          }
        >
          {STORIES.map(
            (
              story,
              index,
            ) => (
              <Reveal
                key={
                  story.id
                }
                delay={
                  index *
                  80
                }
                className={
                  index %
                    2 ===
                  1
                    ? styles.offset
                    : ""
                }
              >
                <article
                  className={
                    styles.story
                  }
                >
                  <div
                    className={
                      styles.storyMeta
                    }
                  >
                    <span>
                      {
                        story.number
                      }
                    </span>

                    <span>
                      {
                        story
                          .eyebrow[
                          locale
                        ]
                      }
                    </span>
                  </div>

                  <h3
                    className={
                      styles.storyTitle
                    }
                  >
                    {
                      story
                        .title[
                        locale
                      ]
                    }
                  </h3>

                  <p
                    className={
                      styles.storyBody
                    }
                  >
                    {
                      story
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