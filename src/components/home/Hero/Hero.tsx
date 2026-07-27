"use client";

import Image from "next/image";

import {
  HOME_COPY,
} from "@/content/home";

import {
  useLocale,
} from "@/components/providers/LocaleProvider/LocaleProvider";

import Reveal from "@/components/ui/Reveal/Reveal";

import styles from "./Hero.module.css";

export default function Hero() {
  const {
    locale,
  } =
    useLocale();

  const copy =
    HOME_COPY[
      locale
    ].hero;

  return (
    <section
      id="home"
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
          styles.inner
        }
      >
        <div
          className={
            styles.content
          }
        >
          <Reveal>
            <p
              className={
                styles.name
              }
            >
              EMMA DA SILVA
            </p>
          </Reveal>

          <Reveal
            delay={70}
          >
            <h1
              className={
                styles.role
              }
            >
              {
                copy.role
              }
            </h1>
          </Reveal>

          <Reveal
            delay={130}
          >
            <p
              className={
                styles.description
              }
            >
              {
                copy.description
              }
            </p>
          </Reveal>

          <Reveal
            delay={190}
          >
            <p
              className={
                styles.focusLine
              }
            >
              {
                copy.focusLine
              }
            </p>
          </Reveal>

          <Reveal
            delay={240}
          >
            <div
              className={
                styles.actions
              }
            >
              <a
                href="#work"
                className={
                  styles.primaryAction
                }
              >
                {
                  copy.primaryAction
                }
              </a>

              <a
                href="#contact"
                className={
                  styles.secondaryAction
                }
              >
                {
                  copy.secondaryAction
                }
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal
          className={
            styles.portraitReveal
          }
          delay={150}
        >
          <div
            className={
              styles.portraitStage
            }
          >
            <div
              className={
                styles.accentBlock
              }
              aria-hidden="true"
            />

            <div
              className={
                styles.portraitFrame
              }
            >
              <Image
                src="/images/portrait/emma-portrait.jpg"
                alt={
                  copy.portraitAlt
                }
                fill
                priority
                sizes="
                  (max-width: 700px) calc(100vw - 2.5rem),
                  (max-width: 1100px) 42vw,
                  430px
                "
                className={
                  styles.portrait
                }
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
