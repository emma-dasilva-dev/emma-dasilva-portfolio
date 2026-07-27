"use client";

import {
  CONTACT_LINKS,
  HOME_COPY,
} from "@/content/home";

import {
  useLocale,
} from "@/components/providers/LocaleProvider/LocaleProvider";

import Reveal from "@/components/ui/Reveal/Reveal";
import SectionLabel from "@/components/ui/SectionLabel/SectionLabel";

import styles from "./Contact.module.css";

export default function Contact() {
  const {
    locale,
  } =
    useLocale();

  const copy =
    HOME_COPY[
      locale
    ].contact;

  return (
    <section
      id="contact"
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
                styles.description
              }
            >
              {
                copy.description
              }
            </p>
          </Reveal>
        </div>

        <div
          className={
            styles.links
          }
        >
          {CONTACT_LINKS.map(
            (
              link,
              index,
            ) => (
              <Reveal
                key={
                  link.id
                }
                delay={
                  index *
                  70
                }
              >
                <a
                  href={
                    link.href
                  }
                  target={
                    link.external
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    link.external
                      ? "noreferrer"
                      : undefined
                  }
                  className={
                    styles.link
                  }
                >
                  <span
                    className={
                      styles.linkLabel
                    }
                  >
                    {
                      link
                        .label[
                        locale
                      ]
                    }
                  </span>

                  <span
                    className={
                      styles.linkValue
                    }
                  >
                    {
                      link.value
                    }
                  </span>
                </a>
              </Reveal>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
