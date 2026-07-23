"use client";

import {
  useLocale,
} from "@/components/providers/LocaleProvider/LocaleProvider";

import styles from "./Footer.module.css";

export default function Footer() {
  const {
    locale,
  } = useLocale();

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
            styles.statement
          }
        >
          {locale === "en"
            ? "If it's not exceptional, it's not finished."
            : "Si ce n'est pas exceptionnel, ce n'est pas terminé."}
        </p>

        <div
          className={
            styles.links
          }
        >
          <a
            href="https://github.com/emma-dasilva-dev"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/emmadasilvadev"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
