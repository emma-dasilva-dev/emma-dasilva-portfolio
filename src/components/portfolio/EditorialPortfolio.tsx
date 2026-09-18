"use client";

import { useEffect, useRef } from "react";
import type { Locale } from "@/types/locale";
import styles from "./EditorialPortfolio.module.css";

const content = {
  en: {
    nav: ["story", "what i do", "work", "cybersecurity", "lab"],
    role: "SOFTWARE DEVELOPER × CYBERSECURITY",
    intro: "I build thoughtful web experiences and keep digging beneath the interface — into systems, networks and security.",
    scroll: "SCROLL TO EXPLORE",
    storyLabel: "01 / STORY",
    storyTitle: "I build for the web. I explore what’s underneath.",
    story: "Development taught me how ideas become interfaces and systems. Cybersecurity made me curious about everything beneath them: how systems communicate, where they fail, and how they can be protected. I’m building both sides of that foundation.",
    doLabel: "02 / WHAT I DO",
    services: [
      ["WEB DEVELOPMENT", "Modern, responsive websites built around clear information and real user needs."],
      ["SOFTWARE DEVELOPMENT", "Practical software projects that strengthen how I think, structure and solve problems."],
      ["CYBERSECURITY & SYSTEMS", "Growing deeper in Linux, networking, web security and the systems behind software."]
    ],
    workLabel: "03 / SELECTED WORK",
    workTitle: "Selected work is being curated.",
    workBody: "Only work I deliberately choose will live here. No filler projects, no invented case studies.",
    cyberLabel: "04 / CYBERSECURITY",
    cyberTitle: "BUILD THE SURFACE.\nUNDERSTAND THE SYSTEM.",
    cyberBody: "My direction is toward the intersection of software and security: knowing how things are built, then understanding how they behave, break and can be secured.",
    cyberTags: ["LINUX", "NETWORKING", "WEB SECURITY", "BASH", "SSH"],
    labLabel: "05 / LAB",
    labTitle: "The unfinished, experimental side.",
    labBody: "Small technical experiments, C, Linux practice, security learning and whatever I’m currently trying to understand. The lab is allowed to be messy. That’s the point.",
    contactLabel: "06 / CONTACT",
    contactTitle: "LET’S BUILD\nSOMETHING WORTH\nREMEMBERING.",
    contactBody: "Projects, opportunities, collaborations or conversations about technology.",
    email: "EMAIL ME"
  },
  fr: {
    nav: ["histoire", "ce que je fais", "travail", "cybersécurité", "lab"],
    role: "DÉVELOPPEMENT LOGICIEL × CYBERSÉCURITÉ",
    intro: "Je construis des expériences web réfléchies tout en explorant ce qu’il y a sous l’interface — systèmes, réseaux et sécurité.",
    scroll: "DÉFILER POUR EXPLORER",
    storyLabel: "01 / HISTOIRE",
    storyTitle: "Je construis pour le web. J’explore ce qu’il y a dessous.",
    story: "Le développement m’a appris comment une idée devient une interface puis un système. La cybersécurité m’a poussée à comprendre ce qui se passe en dessous : comment les systèmes communiquent, où ils échouent et comment les protéger. Je construis ces deux fondations.",
    doLabel: "02 / CE QUE JE FAIS",
    services: [
      ["DÉVELOPPEMENT WEB", "Des sites modernes et responsives pensés autour d’informations claires et de vrais besoins."],
      ["DÉVELOPPEMENT LOGICIEL", "Des projets logiciels pratiques qui renforcent ma manière de réfléchir, structurer et résoudre."],
      ["CYBERSÉCURITÉ & SYSTÈMES", "J’approfondis Linux, les réseaux, la sécurité web et les systèmes derrière les logiciels."]
    ],
    workLabel: "03 / TRAVAIL SÉLECTIONNÉ",
    workTitle: "Mes travaux sont en cours de sélection.",
    workBody: "Seuls les projets que je choisis volontairement seront ici. Aucun projet de remplissage, aucune étude de cas inventée.",
    cyberLabel: "04 / CYBERSÉCURITÉ",
    cyberTitle: "CONSTRUIRE LA SURFACE.\nCOMPRENDRE LE SYSTÈME.",
    cyberBody: "Ma direction se trouve à l’intersection du logiciel et de la sécurité : savoir comment les choses sont construites, puis comprendre comment elles fonctionnent, échouent et peuvent être sécurisées.",
    cyberTags: ["LINUX", "RÉSEAUX", "SÉCURITÉ WEB", "BASH", "SSH"],
    labLabel: "05 / LAB",
    labTitle: "Le côté expérimental, encore en construction.",
    labBody: "Petites expériences techniques, C, pratique Linux, apprentissage en sécurité et tout ce que j’essaie actuellement de comprendre. Le lab a le droit d’être imparfait. C’est son rôle.",
    contactLabel: "06 / CONTACT",
    contactTitle: "CONSTRUISONS\nQUELQUE CHOSE\nDE MÉMORABLE.",
    contactBody: "Projets, opportunités, collaborations ou conversations autour de la technologie.",
    email: "M’ÉCRIRE"
  }
} as const;

export function EditorialPortfolio({ locale }: { locale: Locale }) {
  const c = content[locale];
  const objectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const object = objectRef.current;
    if (!object || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const move = (event: PointerEvent) => {
      const x = (event.clientX / window.innerWidth - .5) * 2;
      const y = (event.clientY / window.innerHeight - .5) * 2;
      object.style.setProperty("--rx", `${-y * 10}deg`);
      object.style.setProperty("--ry", `${x * 16}deg`);
      object.style.setProperty("--tx", `${x * 16}px`);
      object.style.setProperty("--ty", `${y * 12}px`);
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, []);

  return <main className={styles.page}>
    <header className={styles.header}>
      <a className={styles.mark} href="#home">ED<span>●</span></a>
      <nav>{c.nav.map((label, i) => <a key={label} href={`#${["story","services","work","cyber","lab"][i]}`}>{label}</a>)}</nav>
      <a className={styles.lang} href={`/${locale === "en" ? "fr" : "en"}`}>{locale === "en" ? "FR" : "EN"}</a>
    </header>

    <section className={styles.hero} id="home">
      <div className={styles.heroMeta}><span>PORTFOLIO / 2026</span><span>COTONOU, BENIN</span></div>
      <div className={styles.heroName} aria-label="Emma DaSilva">
        <span>EMMA</span>
        <span>DASILVA</span>
      </div>
      <div className={styles.heroBottom}>
        <p className={styles.role}>{c.role}</p>
        <p className={styles.intro}>{c.intro}</p>
      </div>
      <div className={styles.artWrap} aria-hidden="true">
        <div className={styles.art} ref={objectRef}>
          <div className={styles.ringA}/><div className={styles.ringB}/><div className={styles.ringC}/>
          <div className={styles.glassCore}><i/><i/><i/></div>
          <div className={styles.orbitDot}/>
        </div>
      </div>
      <a href="#story" className={styles.scroll}>{c.scroll}<span>↓</span></a>
    </section>

    <section className={styles.story} id="story">
      <SectionHead label={c.storyLabel} side="DEVELOPMENT ↔ SECURITY" />
      <div className={styles.storyGrid}>
        <h2>{c.storyTitle}</h2>
        <div><p>{c.story}</p><div className={styles.axis}><span>BUILD</span><i/><span>UNDERSTAND</span><i/><span>SECURE</span></div></div>
      </div>
    </section>

    <section className={styles.services} id="services">
      <SectionHead label={c.doLabel} side="CAPABILITIES / DIRECTION" />
      <div className={styles.serviceList}>{c.services.map((service, index) => <article key={service[0]}><span>0{index + 1}</span><h3>{service[0]}</h3><p>{service[1]}</p><b>↗</b></article>)}</div>
    </section>

    <section className={styles.work} id="work">
      <SectionHead label={c.workLabel} side="CURATED / NOT CROWDED" />
      <div className={styles.workStage}>
        <div className={styles.workGhost}>WORK</div>
        <div className={styles.workCard}><span>COMING / CURATING</span><h2>{c.workTitle}</h2><p>{c.workBody}</p></div>
      </div>
    </section>

    <section className={styles.cyber} id="cyber">
      <SectionHead label={c.cyberLabel} side="SYSTEMS / NETWORKS / SECURITY" />
      <div className={styles.cyberGrid}>
        <div className={styles.wireframe} aria-hidden="true"><div/><div/><div/><span>01</span><span>02</span><span>03</span></div>
        <div className={styles.cyberCopy}><h2>{c.cyberTitle.split("\n").map(line => <span key={line}>{line}</span>)}</h2><p>{c.cyberBody}</p><div className={styles.tags}>{c.cyberTags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
      </div>
    </section>

    <section className={styles.lab} id="lab">
      <SectionHead label={c.labLabel} side="EXPERIMENT / LEARN / BREAK / REPEAT" />
      <div className={styles.labGrid}><h2>{c.labTitle}</h2><p>{c.labBody}</p><div className={styles.labIndex}><span>01 / C</span><span>02 / LINUX</span><span>03 / SECURITY</span><span>04 / EXPERIMENTS</span></div></div>
    </section>

    <footer className={styles.contact} id="contact">
      <div className={styles.contactTop}><span>{c.contactLabel}</span><span>AVAILABLE / 2026</span></div>
      <h2>{c.contactTitle.split("\n").map(line => <span key={line}>{line}</span>)}</h2>
      <p>{c.contactBody}</p>
      <div className={styles.links}><a href="mailto:emma.dasilva.dev@gmail.com">{c.email} ↗</a><a href="https://github.com/emma-dasilva-dev" target="_blank" rel="noreferrer">GITHUB ↗</a><a href="https://www.linkedin.com/in/emmadasilvadev" target="_blank" rel="noreferrer">LINKEDIN ↗</a></div>
      <div className={styles.foot}><span>EMMA DASILVA</span><span>SOFTWARE DEVELOPMENT × CYBERSECURITY</span><a href="#home">BACK TO TOP ↑</a></div>
    </footer>
  </main>;
}

function SectionHead({ label, side }: { label: string; side: string }) {
  return <div className={styles.sectionHead}><span>{label}</span><span>{side}</span></div>;
}
