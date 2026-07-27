"use client";

import {
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
            styles.message
          }
        >
          {
            copy.message
          }
        </p>

        <p
          className={
            styles.year
          }
        >
          {year}
        </p>
      </div>
    </footer>
  );
}
