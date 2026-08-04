"use client";

import { useLocale } from "@/components/providers/LocaleProvider/LocaleProvider";
import Reveal from "@/components/ui/Reveal/Reveal";
import { HOME_COPY } from "@/content/home";
import styles from "./Hero.module.css";

export default function Hero() {
  const { locale } = useLocale();
  const copy = HOME_COPY[locale].hero;

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.inner}>
        <Reveal>
          <p className={styles.prefix}>{copy.prefix}</p>
        </Reveal>

        <Reveal delay={80}>
          <h1 className={styles.name}>{copy.name}</h1>
        </Reveal>

        <Reveal delay={160}>
          <p className={styles.role}>{copy.role}</p>
        </Reveal>
      </div>
    </section>
  );
}
