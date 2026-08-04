"use client";

import Image from "next/image";
import { useLocale } from "@/components/providers/LocaleProvider/LocaleProvider";
import Reveal from "@/components/ui/Reveal/Reveal";
import { HOME_COPY } from "@/content/home";
import styles from "./Who.module.css";

export default function Who() {
  const { locale } = useLocale();
  const copy = HOME_COPY[locale].who;

  return (
    <section id="who" className="section">
      <div className={`shell ${styles.grid}`}>
        <div className={styles.portrait}>
          <Reveal>
            <div className={styles.frame}>
              <Image
                src="/images/portrait/emma-portrait.jpg"
                alt={copy.portraitAlt}
                fill
                sizes="(max-width: 768px) 92vw, 34vw"
              />
            </div>
          </Reveal>
        </div>

        <div>
          <Reveal>
            <h2 className="sectionHeading">{copy.label}</h2>
          </Reveal>

          <div className={styles.copy}>
            {copy.paragraphs.map((paragraph, index) => (
              <Reveal key={paragraph} delay={80 + index * 80}>
                <p>{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
