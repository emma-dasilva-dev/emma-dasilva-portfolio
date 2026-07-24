"use client";

import {
  CONTACT_LINKS,
  HOME_COPY,
} from "@/content/home";

import {
  useLocale,
} from "@/components/providers/LocaleProvider/LocaleProvider";

import styles from "./Footer.module.css";

export default function Footer() {
  const {
    locale,
  } =
    useLocale();

  const copy =
    HOME_COPY[
      locale
    ].footer;

  const year =
    new Date()
      .getFullYear();

  return (
    <footer
      className={
        styles.footer
      }
    >
      <div
        className={
          styles.inner
        }
      >
        <p
          className={
            styles.name
          }
        >
          EMMA DA SILVA
        </p>

        <p
          className={
            styles.motto
          }
        >
          {
            copy.motto
          }
        </p>

        <div
          className={
            styles.links
          }
        >
          {CONTACT_LINKS.map(
            (
              link,
            ) => (
              <a
                key={
                  link.id
                }
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
              >
                {
                  link
                    .label[
                    locale
                  ]
                }
              </a>
            ),
          )}
        </div>

        <p
          className={
            styles.copyright
          }
        >
          © {year}
        </p>
      </div>
    </footer>
  );
}