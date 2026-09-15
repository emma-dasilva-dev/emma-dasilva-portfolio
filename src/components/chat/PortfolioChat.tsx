"use client";

import { useEffect, useState } from "react";

import { heroContent } from "@/content/hero";
import { portfolioContent } from "@/content/portfolio";
import { projects } from "@/content/projects";
import type { Locale } from "@/types/locale";

import styles from "./PortfolioChat.module.css";

interface PortfolioChatProps { locale: Locale; }

const logoUrls: Record<string, string> = {
  JavaScript: "https://cdn.simpleicons.org/javascript", TypeScript: "https://cdn.simpleicons.org/typescript", C: "https://cdn.simpleicons.org/c", HTML: "https://cdn.simpleicons.org/html5", CSS: "https://cdn.simpleicons.org/css", React: "https://cdn.simpleicons.org/react", "Next.js": "https://cdn.simpleicons.org/nextdotjs/FFFFFF", Vite: "https://cdn.simpleicons.org/vite", "React Router": "https://cdn.simpleicons.org/reactrouter", "CSS Modules": "https://cdn.simpleicons.org/cssmodules/FFFFFF", "Tailwind CSS": "https://cdn.simpleicons.org/tailwindcss", "Node.js": "https://cdn.simpleicons.org/nodedotjs", "Express.js": "https://cdn.simpleicons.org/express/FFFFFF", "REST APIs": "https://cdn.simpleicons.org/swagger", MySQL: "https://cdn.simpleicons.org/mysql", Linux: "https://cdn.simpleicons.org/linux", Bash: "https://cdn.simpleicons.org/gnubash/FFFFFF", SSH: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ssh/ssh-original.svg", JWT: "https://cdn.simpleicons.org/jsonwebtokens/FFFFFF", bcrypt: "https://cdn.simpleicons.org/letsencrypt", Git: "https://cdn.simpleicons.org/git", GitHub: "https://cdn.simpleicons.org/github/FFFFFF", "VS Code": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg", Postman: "https://cdn.simpleicons.org/postman", npm: "https://cdn.simpleicons.org/npm", Vercel: "https://cdn.simpleicons.org/vercel/FFFFFF", Railway: "https://cdn.simpleicons.org/railway/FFFFFF", GCC: "https://cdn.simpleicons.org/gnu/FFFFFF", Nano: "https://cdn.simpleicons.org/gnubash/FFFFFF",
};

export function PortfolioChat({ locale }: PortfolioChatProps) {
  const hero = heroContent[locale];
  const content = portfolioContent[locale];
  const bandit = projects.find((project) => project.slug === "bandit-redline")!;
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setReady(true), 650);
    return () => window.clearTimeout(timer);
  }, []);

  const t = locale === "en" ? {
    boot: "INITIALIZING PRIVATE LAB ENVIRONMENT", granted: "LIMITED ACCESS GRANTED", lab: "EMMA / CYBER LAB", state: "LAB ACTIVE", updated: "UPDATED · SEP 2026",
    eyebrow: "OPERATOR PROFILE", title: "Cybersecurity student lab.", intro: "A working record of what I am learning, testing and documenting while studying cybersecurity and computer engineering.",
    focus: "CURRENT FOCUS", focusItems: ["Linux security", "Networking", "Web security"],
    experiments: "EXPERIMENT LOGS", experimentNote: "Recorded work from hands-on security practice.", objective: "OBJECTIVE", environment: "ENVIRONMENT", observations: "OBSERVATIONS", outcome: "OUTCOME", open: "OPEN LAB NOTES",
    objectiveText: "Work through progressively constrained Linux security challenges and document the reasoning used to reach each solution.", environmentText: "Remote Linux environment · SSH · shell utilities", observationText: "Permissions, file discovery, text processing, SSH access and command-line investigation recur throughout the exercises.", outcomeText: "Ongoing. Notes are maintained as the lab progresses.",
    experience: "FIELD LOG", experienceNote: "Training and professional environments that shaped the current lab work.",
    about: "OPERATOR NOTES", aboutNote: "Short context on the person maintaining this environment.",
    capabilities: "CAPABILITIES / ACTIVE TOOLS", capabilitiesNote: "Technologies and tools I have used and can return to in practical work.",
    access: "ACCESS", accessNote: "External channels. The lab itself remains read-only to visitors.", status: "STATUS", inProgress: "IN PROGRESS",
  } : {
    boot: "INITIALISATION DE L’ENVIRONNEMENT PRIVÉ", granted: "ACCÈS LIMITÉ AUTORISÉ", lab: "EMMA / CYBER LAB", state: "LAB ACTIF", updated: "MIS À JOUR · SEPT 2026",
    eyebrow: "PROFIL OPÉRATEUR", title: "Laboratoire étudiant en cybersécurité.", intro: "Un espace de travail qui documente ce que j’apprends, teste et analyse pendant ma formation en cybersécurité et génie informatique.",
    focus: "FOCUS ACTUEL", focusItems: ["Sécurité Linux", "Réseaux", "Sécurité web"],
    experiments: "JOURNAL D’EXPÉRIENCES", experimentNote: "Travaux documentés issus de ma pratique de la sécurité.", objective: "OBJECTIF", environment: "ENVIRONNEMENT", observations: "OBSERVATIONS", outcome: "RÉSULTAT", open: "OUVRIR LES NOTES",
    objectiveText: "Résoudre des défis Linux progressivement plus contraints et documenter le raisonnement utilisé pour chaque solution.", environmentText: "Environnement Linux distant · SSH · outils shell", observationText: "Permissions, recherche de fichiers, traitement de texte, accès SSH et investigation en ligne de commande reviennent régulièrement.", outcomeText: "En cours. Les notes évoluent avec le laboratoire.",
    experience: "JOURNAL DE TERRAIN", experienceNote: "Formations et environnements professionnels qui structurent mon travail actuel.",
    about: "NOTES OPÉRATEUR", aboutNote: "Contexte concis sur la personne qui maintient cet environnement.",
    capabilities: "CAPACITÉS / OUTILS ACTIFS", capabilitiesNote: "Technologies et outils déjà utilisés dans des travaux pratiques.",
    access: "ACCÈS", accessNote: "Canaux externes. Le laboratoire reste en lecture seule pour les visiteurs.", status: "STATUT", inProgress: "EN COURS",
  };

  return (
    <main id="main-content" className={`${styles.lab} ${ready ? styles.ready : ""}`}>
      <div className={styles.boot} aria-hidden={ready}><span>{ready ? t.granted : t.boot}</span><i /></div>
      <div className={styles.workspace}>
        <header id="home" className={styles.labHeader}>
          <div><span className={styles.labId}>{t.lab}</span><span className={styles.access}>READ ONLY / VISITOR</span></div>
          <div className={styles.labState}><span><i />{t.state}</span><span>{t.updated}</span></div>
        </header>

        <section className={styles.heroPanel}>
          <div className={styles.heroCopy}><p className={styles.kicker}>{t.eyebrow}</p><h1>{t.title}</h1><p>{t.intro}</p><div className={styles.identityLine}><span>{hero.location}</span><span>{hero.titlePrimary}</span></div></div>
          <aside className={styles.focusPanel}><div className={styles.panelLabel}><span>{t.focus}</span><span className={styles.liveDot} /></div>{t.focusItems.map((item, index) => <div className={styles.focusItem} key={item}><span>0{index + 1}</span><strong>{item}</strong><small>{t.inProgress}</small></div>)}</aside>
        </section>

        <section id="work" className={styles.labSection}>
          <SectionHead code="01" title={t.experiments} note={t.experimentNote} />
          <article className={styles.experiment}>
            <div className={styles.experimentTop}><div><span className={styles.record}>EXP-001</span><h2>{bandit.title}</h2><p>{bandit.subtitle[locale]}</p></div><span className={styles.progress}>{t.inProgress}</span></div>
            <div className={styles.logGrid}><Log label={t.objective} text={t.objectiveText}/><Log label={t.environment} text={t.environmentText}/><Log label={t.observations} text={t.observationText}/><Log label={t.outcome} text={t.outcomeText}/></div>
            <div className={styles.experimentFooter}><span>{bandit.technologies.join(" / ")}</span><a href={bandit.links.journal} target="_blank" rel="noreferrer">{t.open} ↗</a></div>
          </article>
        </section>

        <section id="experience" className={styles.labSection}><SectionHead code="02" title={t.experience} note={t.experienceNote}/><div className={styles.fieldLog}>{content.experience.items.map((item) => <article key={`${item.period}-${item.title}`}><time>{item.period}</time><div><h2>{item.title}</h2><strong>{item.role}</strong><p>{item.description}</p>{item.link ? <a href={item.link.href} target="_blank" rel="noreferrer">{item.link.label} ↗</a> : null}</div></article>)}</div></section>

        <section id="about" className={styles.labSection}><SectionHead code="03" title={t.about} note={t.aboutNote}/><div className={styles.operator}><div>{content.about.paragraphs.map((p) => <p key={p}>{p}</p>)}</div><blockquote>{content.about.quote}</blockquote></div></section>

        <section id="stack" className={styles.labSection}><SectionHead code="04" title={t.capabilities} note={t.capabilitiesNote}/><div className={styles.capabilities}>{content.stack.groups.map((group) => <section key={group.label}><h2>{group.label}</h2><div>{group.items.map((item) => <span className={styles.tool} key={item}><i style={{backgroundImage:`url(${logoUrls[item]})`}}/><b>{item}</b></span>)}</div></section>)}</div></section>

        <section id="contact" className={`${styles.labSection} ${styles.accessSection}`}><SectionHead code="05" title={t.access} note={t.accessNote}/><div className={styles.accessGrid}><div><span>{t.status}</span><strong>{hero.status}</strong><small>{content.contact.location}</small></div><nav>{content.contact.links.map((link) => <a key={link.label} href={link.href} target={link.href.startsWith("mailto:") ? undefined : "_blank"} rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}><span>{link.label}</span><span>↗</span></a>)}</nav></div></section>
      </div>
    </main>
  );
}

function SectionHead({code,title,note}:{code:string;title:string;note:string}) { return <header className={styles.sectionHead}><span>{code}</span><div><h2>{title}</h2><p>{note}</p></div></header>; }
function Log({label,text}:{label:string;text:string}) { return <div className={styles.log}><span>{label}</span><p>{text}</p></div>; }
