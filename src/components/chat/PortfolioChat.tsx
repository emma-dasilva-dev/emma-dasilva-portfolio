"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { AsciiOrb } from "@/components/ui/AsciiOrb";
import { heroContent } from "@/content/hero";
import { portfolioContent } from "@/content/portfolio";
import { projects } from "@/content/projects";
import type { Locale } from "@/types/locale";

import styles from "./PortfolioChat.module.css";

type Topic = "intro" | "work" | "experience" | "about" | "stack" | "contact";
type ChatItem = { id: string; role: "user" | "bot"; topic: Topic };

interface PortfolioChatProps { locale: Locale; }

const logoUrls: Record<string, string> = {
  JavaScript: "https://cdn.simpleicons.org/javascript",
  TypeScript: "https://cdn.simpleicons.org/typescript",
  C: "https://cdn.simpleicons.org/c",
  HTML: "https://cdn.simpleicons.org/html5",
  CSS: "https://cdn.simpleicons.org/css",
  React: "https://cdn.simpleicons.org/react",
  "Next.js": "https://cdn.simpleicons.org/nextdotjs/FFFFFF",
  Vite: "https://cdn.simpleicons.org/vite",
  "React Router": "https://cdn.simpleicons.org/reactrouter",
  "CSS Modules": "https://cdn.simpleicons.org/cssmodules/FFFFFF",
  "Tailwind CSS": "https://cdn.simpleicons.org/tailwindcss",
  "Node.js": "https://cdn.simpleicons.org/nodedotjs",
  "Express.js": "https://cdn.simpleicons.org/express/FFFFFF",
  "REST APIs": "https://cdn.simpleicons.org/swagger",
  MySQL: "https://cdn.simpleicons.org/mysql",
  Linux: "https://cdn.simpleicons.org/linux",
  Bash: "https://cdn.simpleicons.org/gnubash/FFFFFF",
  SSH: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ssh/ssh-original.svg",
  JWT: "https://cdn.simpleicons.org/jsonwebtokens/FFFFFF",
  bcrypt: "https://cdn.simpleicons.org/letsencrypt",
  Git: "https://cdn.simpleicons.org/git",
  GitHub: "https://cdn.simpleicons.org/github/FFFFFF",
  "VS Code": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
  Postman: "https://cdn.simpleicons.org/postman",
  npm: "https://cdn.simpleicons.org/npm",
  Vercel: "https://cdn.simpleicons.org/vercel/FFFFFF",
  Railway: "https://cdn.simpleicons.org/railway/FFFFFF",
  GCC: "https://cdn.simpleicons.org/gnu/FFFFFF",
  Nano: "https://cdn.simpleicons.org/gnubash/FFFFFF",
};

export function PortfolioChat({ locale }: PortfolioChatProps) {
  const hero = heroContent[locale];
  const content = portfolioContent[locale];
  const bandit = projects.find((project) => project.slug === "bandit-redline")!;
  const [messages, setMessages] = useState<ChatItem[]>([{ id: "welcome", role: "bot", topic: "intro" }]);
  const [thinking, setThinking] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  const copy = useMemo(() => locale === "en" ? {
    bot: "Bot E",
    subtitle: "Emma's portfolio assistant",
    welcome: "Hi. I’m Bot E. I can walk you through Emma’s background, work, experience and technical stack.",
    helper: "Choose a question below.",
    questions: {
      work: "What projects has Emma worked on?",
      experience: "What experience does Emma have?",
      about: "Tell me about Emma’s journey.",
      stack: "What technologies does Emma use?",
      contact: "How can I contact Emma?",
    },
    labels: { work: "Projects", experience: "Experience", about: "About", stack: "Stack", contact: "Contact" },
    projectIntro: "Here’s the cybersecurity project Emma currently features in her portfolio.",
    experienceIntro: "Her experience so far moves from independent learning to structured training and professional development work.",
    aboutIntro: "Her path into technology started outside a traditional technical background.",
    stackIntro: "These are technologies and tools Emma has actually used.",
    contactIntro: "You can reach Emma through any of these channels.",
    thinking: "Bot E is thinking",
    journal: "Open project",
  } : {
    bot: "Bot E",
    subtitle: "Assistant du portfolio d’Emma",
    welcome: "Salut. Je suis Bot E. Je peux te présenter le parcours, les projets, l’expérience et les compétences techniques d’Emma.",
    helper: "Choisis une question ci-dessous.",
    questions: {
      work: "Sur quels projets Emma a-t-elle travaillé ?",
      experience: "Quelle expérience Emma a-t-elle ?",
      about: "Parle-moi du parcours d’Emma.",
      stack: "Quelles technologies Emma utilise-t-elle ?",
      contact: "Comment contacter Emma ?",
    },
    labels: { work: "Projets", experience: "Expérience", about: "À propos", stack: "Stack", contact: "Contact" },
    projectIntro: "Voici le projet cybersécurité actuellement présenté dans son portfolio.",
    experienceIntro: "Son parcours évolue de l’apprentissage autonome vers la formation structurée puis le travail en environnement professionnel.",
    aboutIntro: "Son entrée dans la technologie ne vient pas d’un parcours technique traditionnel.",
    stackIntro: "Voici les technologies et outils qu’Emma a réellement utilisés.",
    contactIntro: "Tu peux contacter Emma via ces différents canaux.",
    thinking: "Bot E réfléchit",
    journal: "Ouvrir le projet",
  }, [locale]);

  const topics: Topic[] = ["work", "experience", "about", "stack", "contact"];

  const ask = (topic: Topic) => {
    if (topic === "intro" || thinking) return;
    const token = Date.now().toString();
    setMessages((current) => [...current, { id: `u-${token}`, role: "user", topic }]);
    setThinking(true);
    window.setTimeout(() => {
      setMessages((current) => [...current, { id: `b-${token}`, role: "bot", topic }]);
      setThinking(false);
    }, 420);
  };

  useEffect(() => {
    const mapHash = () => {
      const hash = window.location.hash.replace("#", "");
      const mapped: Record<string, Topic> = { work: "work", experience: "experience", about: "about", stack: "stack", contact: "contact" };
      if (mapped[hash]) ask(mapped[hash]);
    };
    window.addEventListener("hashchange", mapHash);
    return () => window.removeEventListener("hashchange", mapHash);
  });

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" }); }, [messages, thinking]);

  const renderBotContent = (topic: Topic) => {
    if (topic === "intro") return (
      <>
        <p>{copy.welcome}</p>
        <div className={styles.introIdentity}>
          <h1>{hero.titlePrimary}</h1>
          <p>{hero.supportingCopy}</p>
          <div className={styles.meta}><span>{hero.location}</span><span>{hero.status}</span></div>
        </div>
        <div className={styles.orb}><AsciiOrb locale={locale} /></div>
        <p className={styles.helper}>{copy.helper}</p>
      </>
    );

    if (topic === "work") return (
      <>
        <p>{copy.projectIntro}</p>
        <article className={styles.projectCard}>
          <span>{bandit.subtitle[locale]}</span>
          <h2>{bandit.title}</h2>
          <p>{bandit.summary[locale]}</p>
          <small>{bandit.technologies.join(" · ")}</small>
          <a href={bandit.links.journal} target="_blank" rel="noreferrer">{copy.journal} ↗</a>
        </article>
      </>
    );

    if (topic === "experience") return (
      <>
        <p>{copy.experienceIntro}</p>
        <div className={styles.timeline}>
          {content.experience.items.map((item) => (
            <article key={`${item.period}-${item.title}`} className={styles.timelineItem}>
              <span className={styles.period}>{item.period}</span>
              <div><h2>{item.title}</h2><p className={styles.role}>{item.role}</p><p>{item.description}</p>{item.link ? <a href={item.link.href} target="_blank" rel="noreferrer">{item.link.label} ↗</a> : null}</div>
            </article>
          ))}
        </div>
      </>
    );

    if (topic === "about") return (
      <>
        <p>{copy.aboutIntro}</p>
        <div className={styles.aboutCopy}>{content.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        <blockquote>{content.about.quote}</blockquote>
      </>
    );

    if (topic === "stack") return (
      <>
        <p>{copy.stackIntro}</p>
        <div className={styles.stack}>
          {content.stack.groups.map((group) => (
            <section key={group.label} className={styles.stackGroup}>
              <h2>{group.label}</h2>
              <div className={styles.techGrid}>{group.items.map((item) => <div key={item} className={styles.tech}><span className={styles.logo} style={{ backgroundImage: `url(${logoUrls[item]})` }} aria-hidden="true"/><span>{item}</span></div>)}</div>
            </section>
          ))}
        </div>
      </>
    );

    return (
      <>
        <p>{copy.contactIntro}</p>
        <div className={styles.contactCard}>
          <h2>{content.contact.heading}</h2>
          <p>{content.contact.copy}</p>
          <div className={styles.contactLinks}>{content.contact.links.map((link) => <a key={link.label} href={link.href} target={link.href.startsWith("mailto:") ? undefined : "_blank"} rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}>{link.label}<span>↗</span></a>)}</div>
          <small>{content.contact.location}</small>
        </div>
      </>
    );
  };

  return (
    <main id="main-content" className={styles.shell}>
      <div className={styles.chatHeader}>
        <div className={styles.botMark}>E</div>
        <div><strong>{copy.bot}</strong><span>{copy.subtitle}</span></div>
      </div>

      <div className={styles.thread}>
        {messages.map((message) => message.role === "user" ? (
          <div key={message.id} className={styles.userMessage}><p>{copy.questions[message.topic as keyof typeof copy.questions]}</p></div>
        ) : (
          <section key={message.id} id={message.topic === "intro" ? "home" : message.topic} className={styles.botMessage}>
            <div className={styles.botAvatar}>E</div>
            <div className={styles.botBody}><strong className={styles.botName}>{copy.bot}</strong>{renderBotContent(message.topic)}</div>
          </section>
        ))}
        {thinking ? <div className={styles.botMessage}><div className={styles.botAvatar}>E</div><div className={styles.thinking}><span>{copy.thinking}</span><i/><i/><i/></div></div> : null}
        <div ref={endRef} />
      </div>

      <div className={styles.composerDock}>
        <div className={styles.suggestions}>{topics.map((topic) => <button key={topic} type="button" onClick={() => ask(topic)} disabled={thinking}>{copy.questions[topic as keyof typeof copy.questions]}</button>)}</div>
        <div className={styles.composer}><span>{locale === "en" ? "Ask Bot E about Emma" : "Demander à Bot E à propos d’Emma"}</span><button type="button" aria-label={locale === "en" ? "Choose a question above" : "Choisis une question ci-dessus"}>↑</button></div>
      </div>
    </main>
  );
}
