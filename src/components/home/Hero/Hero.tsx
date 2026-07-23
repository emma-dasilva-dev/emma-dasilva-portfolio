"use client";

import Image from "next/image";

import {
  useLocale,
} from "@/components/providers/LocaleProvider/LocaleProvider";

import styles from "./Hero.module.css";

export default function Hero() {
  const {
    locale,
  } = useLocale();

  const content =
    locale === "en"
      ? {
          eyebrow:
            "PORTFOLIO / 2026",

          lineOne:
            "All that I can be",

          lineTwo:
            "is me.",

          finalLine:
            "All of me.",

          explore:
            "Explore my work",
        }
      : {
          eyebrow:
            "PORTFOLIO / 2026",

          lineOne:
            "Tout ce que je peux être,",

          lineTwo:
            "c'est moi.",

          finalLine:
            "Pleinement moi.",

          explore:
            "Découvrir mes projets",
        };

  return (
    <section
      className={
        styles.hero
      }
    >
      <div
        className={
          styles.grid
        }
        aria-hidden="true"
      />

      <div
        className={
          styles.content
        }
      >
        <div
          className={
            styles.copy
          }
        >
          <p
            className={
              styles.eyebrow
            }
          >
            {
              content.eyebrow
            }
          </p>

          <div>
            <h1
              className={
                styles.title
              }
            >
              <span>
                {
                  content.lineOne
                }
              </span>

              <span>
                {
                  content.lineTwo
                }
              </span>
            </h1>

            <p
              className={
                styles.finalLine
              }
            >
              {
                content.finalLine
              }
            </p>
          </div>

          <a
            href="#work"
            className={
              styles.explore
            }
          >
            <span>
              {
                content.explore
              }
            </span>

            <span
              aria-hidden="true"
            >
              ↓
            </span>
          </a>
        </div>

        <div
          className={
            styles.portraitArea
          }
        >
          <div
            className={
              styles.portraitFrame
            }
          >
            <Image
              src="/images/portrait/emma-portrait.jpg"
              alt="Portrait of Emma DA SILVA"
              fill
              priority
              sizes="
                (max-width: 700px) 88vw,
                (max-width: 1100px) 48vw,
                440px
              "
              className={
                styles.portrait
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
