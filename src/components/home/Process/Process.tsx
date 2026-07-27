"use client";

import {
  HOME_COPY,
  PROCESS_ITEMS,
} from "@/content/home";

import {
  useLocale,
} from "@/components/providers/LocaleProvider/LocaleProvider";

import Reveal from "@/components/ui/Reveal/Reveal";
import SectionLabel from "@/components/ui/SectionLabel/SectionLabel";

import styles from "./Process.module.css";

export default function Process() {
  const {
    locale,
  } =
    useLocale();

  const copy =
    HOME_COPY[
      locale
    ].process;

  return (
    <section
      id="process"
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
          {PROCESS_ITEMS.map(
            (
              item,
              index,
            ) => (
              <Reveal
                key={
                  item.id
                }
                delay={
                  index *
                  80
                }
              >
                <article
                  className={
                    styles.item
                  }
                >
                  <span
                    className={
                      styles.number
                    }
                  >
                    {
                      item.number
                    }
                  </span>

                  <h3
                    className={
                      styles.itemTitle
                    }
                  >
                    {
                      item
                        .title[
                        locale
                      ]
                    }
                  </h3>

                  <p
                    className={
                      styles.description
                    }
                  >
                    {
                      item
                        .description[
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
