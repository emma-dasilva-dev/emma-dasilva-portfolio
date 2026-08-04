"use client";

import { useLocale } from "@/components/providers/LocaleProvider/LocaleProvider";
import Reveal from "@/components/ui/Reveal/Reveal";
import { CONTACT_LINKS, HOME_COPY } from "@/content/home";
import styles from "./Contact.module.css";

export default function Contact() {
  const { locale } = useLocale();
  const copy = HOME_COPY[locale].contact;

  return (
    <section id="contact" className="section">
      <div className={`shell ${styles.grid}`}>
        <div>
          <Reveal>
            <h2 className="sectionHeading">{copy.label}</h2>
          </Reveal>

          <Reveal delay={80}>
            <p className={`${styles.introduction} sectionIntro`}>
              {copy.introduction}
            </p>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className={styles.links}>
            <span>{copy.findMe}</span>

            {CONTACT_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
              >
                <strong>{link.label[locale]}</strong>
                <span>{link.value}</span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
