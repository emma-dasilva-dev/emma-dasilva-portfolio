"use client";

import { useEffect, useRef } from "react";
import type { Locale } from "@/types/locale";
import styles from "./LayeredPortfolio.module.css";

const copy = {
  en: {
    nav: ["work", "direction", "story", "contact"],
    eyebrow: "SOFTWARE DEVELOPMENT × CYBERSECURITY",
    titleA: "I build for the web.",
    titleB: "I explore what's underneath.",
    intro: "I design and develop modern web experiences for businesses while building deeper expertise in systems, Linux, networking and security.",
    explore: "explore my work",
    available: "available for selected projects & opportunities",
    layerLabels: ["INTERFACE", "APPLICATION", "SYSTEMS", "SECURITY"],
    workKicker: "01 / WHAT I BUILD",
    workTitle: "Useful digital experiences, not decoration.",
    workBody: "I build clear, responsive websites that help people understand a business, find what they need and take action without digging through scattered information.",
    capabilities: ["web design & development", "responsive experiences", "business information architecture", "WhatsApp & contact flows", "deployment"],
    directionKicker: "02 / WHAT'S UNDERNEATH",
    directionTitle: "Building is only half the question.",
    directionBody: "The more I learn to build, the more I want to understand the systems beneath the interface: how they communicate, where they fail, and how they can be secured.",
    security: ["Linux", "Networking", "Web Security", "Systems"],
    storyKicker: "03 / DIRECTION",
    storyTitle: "Development gave me the surface. Security made me look deeper.",
    storyBody: "My direction is not a choice between development and cybersecurity. I want strong foundations in both: the ability to build useful software and the technical depth to understand what is happening underneath it.",
    contactKicker: "04 / CONTACT",
    contactTitle: "Have something worth building?",
    contactBody: "For projects, opportunities, collaborations or a conversation about technology.",
    email: "email me",
  },
  fr: {
    nav: ["travail", "direction", "histoire", "contact"],
    eyebrow: "DÉVELOPPEMENT LOGICIEL × CYBERSÉCURITÉ",
    titleA: "Je construis pour le web.",
    titleB: "J'explore ce qu'il y a dessous.",
    intro: "Je conçois et développe des expériences web modernes pour les entreprises tout en approfondissant mes compétences en systèmes, Linux, réseaux et sécurité.",
    explore: "explorer mon travail",
    available: "disponible pour certains projets & opportunités",
    layerLabels: ["INTERFACE", "APPLICATION", "SYSTÈMES", "SÉCURITÉ"],
    workKicker: "01 / CE QUE JE CONSTRUIS",
    workTitle: "Des expériences numériques utiles, pas de la décoration.",
    workBody: "Je construis des sites clairs et responsives qui aident les clients à comprendre une entreprise, trouver l'information dont ils ont besoin et passer à l'action sans fouiller des informations dispersées.",
    capabilities: ["design & développement web", "expériences responsives", "architecture de l'information", "WhatsApp & parcours de contact", "déploiement"],
    directionKicker: "02 / SOUS L'INTERFACE",
    directionTitle: "Construire n'est que la moitié de la question.",
    directionBody: "Plus j'apprends à construire, plus je veux comprendre les systèmes derrière l'interface : comment ils communiquent, où ils échouent et comment les sécuriser.",
    security: ["Linux", "Réseaux", "Sécurité Web", "Systèmes"],
    storyKicker: "03 / DIRECTION",
    storyTitle: "Le développement m'a donné la surface. La sécurité m'a poussée à regarder plus loin.",
    storyBody: "Ma direction n'est pas un choix entre développement et cybersécurité. Je veux de solides bases dans les deux : savoir construire des logiciels utiles et avoir la profondeur technique pour comprendre ce qui se passe en dessous.",
    contactKicker: "04 / CONTACT",
    contactTitle: "Quelque chose d'utile à construire ?",
    contactBody: "Pour un projet, une opportunité, une collaboration ou simplement parler technologie.",
    email: "m'écrire",
  },
} as const;

export function LayeredPortfolio({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const move = (event: PointerEvent) => {
      const x = (event.clientX / innerWidth - 0.5) * 2;
      const y = (event.clientY / innerHeight - 0.5) * 2;
      scene.style.setProperty("--rx", `${-y * 7}deg`);
      scene.style.setProperty("--ry", `${x * 10}deg`);
      scene.style.setProperty("--mx", `${x * 10}px`);
      scene.style.setProperty("--my", `${y * 8}px`);
    };
    addEventListener("pointermove", move, { passive: true });
    return () => removeEventListener("pointermove", move);
  }, []);

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <a href="#top" className={styles.brand}>EMMA DASILVA<span>●</span></a>
        <nav>{c.nav.map((item, i) => <a key={item} href={`#${["work", "direction", "story", "contact"][i]}`}>{item}</a>)}</nav>
        <a className={styles.lang} href={`/${locale === "en" ? "fr" : "en"}`}>{locale === "en" ? "FR" : "EN"}</a>
      </header>

      <section id="top" className={styles.hero}>
        <div className={styles.heroGrid} aria-hidden="true" />
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}><span>01</span>{c.eyebrow}</p>
          <h1><span>{c.titleA}</span><strong>{c.titleB}</strong></h1>
          <p className={styles.intro}>{c.intro}</p>
          <div className={styles.heroActions}>
            <a href="#work">{c.explore}<span>↘</span></a>
            <p><i />{c.available}</p>
          </div>
        </div>

        <div className={styles.sceneWrap} aria-hidden="true">
          <div ref={sceneRef} className={styles.scene}>
            <div className={`${styles.layer} ${styles.layerOne}`}><span>01</span><b>{c.layerLabels[0]}</b><div className={styles.mockNav}/><div className={styles.mockHero}/><div className={styles.mockLines}/></div>
            <div className={`${styles.layer} ${styles.layerTwo}`}><span>02</span><b>{c.layerLabels[1]}</b><div className={styles.codeLines}>GET /<br/>POST /contact<br/>200 OK</div></div>
            <div className={`${styles.layer} ${styles.layerThree}`}><span>03</span><b>{c.layerLabels[2]}</b><div className={styles.nodes}><i/><i/><i/><i/><i/></div></div>
            <div className={`${styles.layer} ${styles.layerFour}`}><span>04</span><b>{c.layerLabels[3]}</b><div className={styles.scan}/></div>
          </div>
          <p className={styles.sceneCaption}>MOVE TO INSPECT / 04 LAYERS</p>
        </div>
        <div className={styles.scrollMark}>SCROLL <span>↓</span></div>
      </section>

      <section id="work" className={styles.section}>
        <div className={styles.sectionMeta}><span>{c.workKicker}</span><span>WEB / BUSINESS / EXPERIENCE</span></div>
        <div className={styles.split}><h2>{c.workTitle}</h2><div><p className={styles.body}>{c.workBody}</p><div className={styles.capabilities}>{c.capabilities.map((x, i) => <div key={x}><span>0{i + 1}</span><strong>{x}</strong></div>)}</div></div></div>
      </section>

      <section id="direction" className={`${styles.section} ${styles.darkSection}`}>
        <div className={styles.sectionMeta}><span>{c.directionKicker}</span><span>BUILD → UNDERSTAND → SECURE</span></div>
        <div className={styles.directionGrid}>
          <div className={styles.systemVisual} aria-hidden="true"><div className={styles.core}>SYSTEM<span>●</span></div>{c.security.map((x, i) => <div key={x} className={styles[`orbit${i + 1}` as keyof typeof styles]}>{x}</div>)}</div>
          <div><h2>{c.directionTitle}</h2><p className={styles.body}>{c.directionBody}</p><div className={styles.securityList}>{c.security.map((x, i) => <span key={x}><small>0{i + 1}</small>{x}</span>)}</div></div>
        </div>
      </section>

      <section id="story" className={styles.section}>
        <div className={styles.sectionMeta}><span>{c.storyKicker}</span><span>SOFTWARE ↔ SECURITY</span></div>
        <div className={styles.story}><h2>{c.storyTitle}</h2><p className={styles.body}>{c.storyBody}</p><div className={styles.path}><span>BUILD</span><i/><span>UNDERSTAND</span><i/><span>SECURE</span></div></div>
      </section>

      <footer id="contact" className={styles.footer}>
        <p className={styles.eyebrow}><span>04</span>{c.contactKicker}</p>
        <h2>{c.contactTitle}</h2>
        <p>{c.contactBody}</p>
        <div className={styles.footerLinks}><a href="mailto:emma.dasilva.dev@gmail.com">{c.email} ↗</a><a href="https://github.com/emma-dasilva-dev" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/emmadasilvadev" target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
        <div className={styles.footerBottom}><span>EMMA DASILVA / 2026</span><span>SOFTWARE DEVELOPMENT × CYBERSECURITY</span></div>
      </footer>
    </main>
  );
}
