"use client";

import Image from "next/image";

import {
  type PointerEvent,
  useRef,
} from "react";

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

  const portraitRef =
    useRef<HTMLDivElement>(
      null,
    );

  const handlePointerMove =
    (
      event:
        PointerEvent<HTMLDivElement>,
    ) => {
      const element =
        portraitRef.current;

      if (!element) {
        return;
      }

      const rect =
        element
          .getBoundingClientRect();

      const x =
        (
          event.clientX -
          rect.left
        ) /
          rect.width -
        0.5;

      const y =
        (
          event.clientY -
          rect.top
        ) /
          rect.height -
        0.5;

      element.style.setProperty(
        "--portrait-x",
        `${x * 10}px`,
      );

      element.style.setProperty(
        "--portrait-y",
        `${y * 10}px`,
      );
    };

  const resetPortrait =
    () => {
      const element =
        portraitRef.current;

      if (!element) {
        return;
      }

      element.style.setProperty(
        "--portrait-x",
        "0px",
      );

      element.style.setProperty(
        "--portrait-y",
        "0px",
      );
    };

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
            styles.copy
          }
        >
          <Reveal>
            <p
              className={
                styles.eyebrow
              }
            >
              {
                copy.eyebrow
              }
            </p>
          </Reveal>

          <div
            className={
              styles.mainCopy
            }
          >
            <Reveal
              delay={80}
            >
              <p
                className={
                  styles.name
                }
              >
                {
                  copy.name
                }
              </p>
            </Reveal>

            <Reveal
              delay={130}
            >
              <h1
                className={
                  styles.title
                }
              >
                <span>
                  {
                    copy.headlineLead
                  }
                </span>

                <strong>
                  {
                    copy.headlineStrong
                  }
                </strong>
              </h1>
            </Reveal>

            <Reveal
              delay={190}
            >
              <p
                className={
                  styles.supporting
                }
              >
                {
                  copy.supporting
                }
              </p>
            </Reveal>
          </div>

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

                <span
                  aria-hidden="true"
                >
                  ↘
                </span>
              </a>

              <a
                href="#stories"
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
            <span
              className={
                styles.outerOrbit
              }
              aria-hidden="true"
            />

            <span
              className={
                styles.innerOrbit
              }
              aria-hidden="true"
            />

            <div
              ref={
                portraitRef
              }
              className={
                styles.portraitFrame
              }
              onPointerMove={
                handlePointerMove
              }
              onPointerLeave={
                resetPortrait
              }
            >
              <div
                className={
                  styles.portraitInner
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
                    (max-width: 700px) 78vw,
                    (max-width: 1100px) 42vw,
                    430px
                  "
                  className={
                    styles.portrait
                  }
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}