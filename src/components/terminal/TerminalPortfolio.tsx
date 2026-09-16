"use client";

/* eslint-disable @next/next/no-img-element */

import { useEffect, useMemo, useRef, useState } from "react";
import { portfolioContent } from "@/content/portfolio";
import type { Locale } from "@/types/locale";
import styles from "./TerminalPortfolio.module.css";

type Command = "about" | "experience" | "stack" | "projects" | "contact" | "github" | "help" | "clear";
type Entry = { command: string; output?: React.ReactNode };

const githubUrl = "https://github.com/emma-dasilva-dev";
const banditUrl = "https://overthewire.org";
const journalUrl = "https://github.com/emma-dasilva-dev/bandit-redline-journal";

const logos: Record<string, string> = {
  C: "https://cdn.simpleicons.org/c/A8B9CC", JavaScript: "https://cdn.simpleicons.org/javascript/F7DF1E", TypeScript: "https://cdn.simpleicons.org/typescript/3178C6", HTML: "https://cdn.simpleicons.org/html5/E34F26", CSS: "https://cdn.simpleicons.org/css/663399",
  Linux: "https://cdn.simpleicons.org/linux/FCC624", Bash: "https://cdn.simpleicons.org/gnubash/FFFFFF", SSH: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ssh/ssh-original.svg",
  React: "https://cdn.simpleicons.org/react/61DAFB", "Next.js": "https://cdn.simpleicons.org/nextdotjs/FFFFFF", Vite: "https://cdn.simpleicons.org/vite/646CFF", "React Router": "https://cdn.simpleicons.org/reactrouter/CA4245", "CSS Modules": "https://cdn.simpleicons.org/cssmodules/FFFFFF", "Tailwind CSS": "https://cdn.simpleicons.org/tailwindcss/06B6D4",
  "Node.js": "https://cdn.simpleicons.org/nodedotjs/5FA04E", "Express.js": "https://cdn.simpleicons.org/express/FFFFFF", "REST APIs": "https://cdn.simpleicons.org/swagger/85EA2D", MySQL: "https://cdn.simpleicons.org/mysql/4479A1", JWT: "https://cdn.simpleicons.org/jsonwebtokens/FFFFFF", bcrypt: "https://cdn.simpleicons.org/letsencrypt/003A70",
  Git: "https://cdn.simpleicons.org/git/F05032", GitHub: "https://cdn.simpleicons.org/github/FFFFFF", "VS Code": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg", Postman: "https://cdn.simpleicons.org/postman/FF6C37", npm: "https://cdn.simpleicons.org/npm/CB3837", Vercel: "https://cdn.simpleicons.org/vercel/FFFFFF", Railway: "https://cdn.simpleicons.org/railway/FFFFFF", GCC: "https://cdn.simpleicons.org/gnu/FFFFFF", Nano: "https://cdn.simpleicons.org/gnubash/FFFFFF"
};

export function TerminalPortfolio({ locale }: { locale: Locale }) {
  const content = portfolioContent[locale];
  const inputRef = useRef<HTMLInputElement>(null);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<Entry[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const commands = useMemo(() => ["about", "experience", "stack", "projects", "contact", "github", "help", "clear"], []);

  const copy = locale === "en" ? {
    welcome: "Welcome to my interactive portfolio.", hint: "Type 'help' or select a command below.", role: "Cybersecurity & Computer Engineering student", focus: "systems | security | software engineering", available: "available commands:", unknown: "command not found", tip: "commands can be typed or selected. use ↑ / ↓ for history.", stackIntro: "tools and technologies currently in use:", githubIntro: "My GitHub contains my repositories, experiments and ongoing development work.", githubLink: "view GitHub profile", botTitle: "Bot E",
    bot: { welcome: "Hi, I'm Bot E. I can help you navigate Emma's portfolio.", about: "Here's a little about Emma.", experience: "Her experience and training so far.", stack: "These are the tools currently in her stack.", projects: "Here's what she's been working on.", contact: "Here are the best ways to reach Emma.", github: "You can explore her GitHub from here.", help: "These are the commands I can help you with.", clear: "Clean slate. Type a command whenever you're ready.", unknown: "Not quite. Try 'help' to see the available commands." },
    labels: { about: "about me", experience: "experience & training", stack: "tools in active use", projects: "project work", contact: "contact information", github: "view GitHub profile", help: "show commands", clear: "clear terminal" }
  } : {
    welcome: "Bienvenue dans mon portfolio interactif.", hint: "Tapez 'help' ou sélectionnez une commande ci-dessous.", role: "Étudiante en cybersécurité & génie informatique", focus: "systèmes | sécurité | génie logiciel", available: "commandes disponibles :", unknown: "commande introuvable", tip: "les commandes peuvent être saisies ou sélectionnées. utilisez ↑ / ↓ pour l’historique.", stackIntro: "outils et technologies actuellement utilisés :", githubIntro: "Mon GitHub contient mes dépôts, mes expérimentations et mes travaux de développement en cours.", githubLink: "voir mon profil GitHub", botTitle: "Bot E",
    bot: { welcome: "Salut, je suis Bot E. Je peux t'aider à explorer le portfolio d'Emma.", about: "Voici quelques informations sur Emma.", experience: "Voici son expérience et sa formation jusqu'ici.", stack: "Voici les outils qu'elle utilise actuellement.", projects: "Voici ce sur quoi elle a travaillé.", contact: "Voici les meilleurs moyens de contacter Emma.", github: "Tu peux explorer son GitHub depuis ici.", help: "Voici les commandes que je peux t'aider à utiliser.", clear: "Terminal nettoyé. Tape une commande quand tu veux.", unknown: "Pas tout à fait. Essaie 'help' pour voir les commandes disponibles." },
    labels: { about: "à propos", experience: "expérience & formation", stack: "outils utilisés", projects: "projet", contact: "coordonnées", github: "voir mon profil GitHub", help: "afficher les commandes", clear: "effacer le terminal" }
  };

  const [botTarget, setBotTarget] = useState(copy.bot.welcome);
  const [botText, setBotText] = useState("");
  const [botSpeaking, setBotSpeaking] = useState(true);

  useEffect(() => {
    setBotTarget(copy.bot.welcome);
  }, [locale]);

  useEffect(() => {
    setBotText("");
    setBotSpeaking(true);
    let index = 0;
    const timer = window.setInterval(() => {
      index += 1;
      setBotText(botTarget.slice(0, index));
      if (index >= botTarget.length) {
        window.clearInterval(timer);
        window.setTimeout(() => setBotSpeaking(false), 350);
      }
    }, 24);
    return () => window.clearInterval(timer);
  }, [botTarget]);

  function outputFor(command: Command): React.ReactNode {
    if (command === "help") return <CommandList commands={commands} labels={copy.labels} onRun={runCommand} />;
    if (command === "about") return <div className={styles.textOutput}>{content.about.paragraphs.map(p => <p key={p}>{p}</p>)}</div>;
    if (command === "experience") return <div className={styles.timeline}>{content.experience.items.map(item => <div key={item.period + item.title}><span>{item.period}</span><section><strong>{item.title}</strong><em>{item.role}</em><p>{item.description}</p></section></div>)}</div>;
    if (command === "stack") { const stackItems = Array.from(new Set(content.stack.groups.flatMap(group => group.items))); return <div className={styles.stackOutput}><p>{copy.stackIntro}</p><div className={styles.stackGrid}>{stackItems.map(item => <span className={styles.logoTile} key={item} title={item} aria-label={item}><img src={logos[item]} alt={item} /></span>)}</div></div>; }
    if (command === "projects") return <div className={styles.projectOutput}><strong>Bandit Redline Journal</strong><p>{locale === "en" ? "A practical cybersecurity journal documenting my progress through OverTheWire Bandit, with Linux, Bash, SSH and command-line problem solving." : "Un journal pratique de cybersécurité documentant ma progression sur OverTheWire Bandit, avec Linux, Bash, SSH et la résolution de problèmes en ligne de commande."}</p><div><a href={journalUrl} target="_blank" rel="noreferrer">journal ↗</a><a href={banditUrl} target="_blank" rel="noreferrer">OverTheWire ↗</a></div></div>;
    if (command === "contact") return <div className={styles.links}>{content.contact.links.map(link => <a key={link.label} href={link.href} target={link.href.startsWith("mailto:") ? undefined : "_blank"} rel="noreferrer">{link.label}<span>↗</span></a>)}</div>;
    if (command === "github") return <div className={styles.projectOutput}><p>{copy.githubIntro}</p><div><a href={githubUrl} target="_blank" rel="noreferrer">{copy.githubLink} ↗</a></div></div>;
    return null;
  }

  function runCommand(raw: string) {
    const command = raw.trim().toLowerCase();
    if (!command) return;
    if (command === "clear") {
      setHistory([]); setInput(""); setHistoryIndex(-1); setBotTarget(copy.bot.clear); return;
    }
    const valid = commands.includes(command);
    setBotTarget(valid ? copy.bot[command as keyof typeof copy.bot] : copy.bot.unknown);
    setHistory(prev => [...prev, { command, output: valid ? outputFor(command as Command) : <p className={styles.error}>{`bash: ${command}: ${copy.unknown}. type 'help'.`}</p> }]);
    setInput(""); setHistoryIndex(-1);
    requestAnimationFrame(() => document.querySelector(`.${styles.terminalBody}`)?.scrollTo({ top: 99999, behavior: "smooth" }));
  }

  function navigateHistory(direction: number) {
    const commandHistory = history.map(x => x.command);
    if (!commandHistory.length) return;
    const next = historyIndex < 0 ? commandHistory.length - 1 : Math.max(0, Math.min(commandHistory.length - 1, historyIndex + direction));
    setHistoryIndex(next); setInput(commandHistory[next]);
  }

  const languageSwitchStyle: React.CSSProperties = { display: "flex", alignItems: "center", gap: 3, padding: 3, border: "1px solid rgba(232,121,249,.55)", borderRadius: 8, background: "rgba(13,9,18,.72)", color: "#eee", textDecoration: "none", fontSize: 11, justifySelf: "end" };
  const languagePillStyle: React.CSSProperties = { display: "grid", placeItems: "center", minWidth: 30, height: 24, padding: "0 6px", borderRadius: 6 };
  const activeLanguageStyle: React.CSSProperties = { ...languagePillStyle, background: "#e879f9", color: "#160d19", fontWeight: 700 };

  return <main className={styles.desktop} onClick={() => inputRef.current?.focus()}>
    <div className={styles.menuBar}><div><span className={styles.apple}>●</span><strong>Terminal</strong><span>Shell</span><span>Edit</span><span>View</span><span>Window</span><span>Help</span></div><div><span>⌁</span><span>◉</span><span>{locale === "en" ? "EN" : "FR"}</span></div></div>
    <div className={styles.desktopIcons} aria-hidden="true"><span>▣<small>Development</small></span><span>▣<small>Cybersecurity</small></span><span>▤<small>notes.txt</small></span></div>
    <section className={styles.terminalWindow} aria-label="Ubuntu terminal portfolio">
      <header className={styles.terminalHeader}>
        <div className={styles.lights}><i/><i/><i/></div>
        <span>emma@portfolio: ~</span>
        <a href={`/${locale === "en" ? "fr" : "en"}`} aria-label={locale === "en" ? "Passer en français" : "Switch to English"} style={languageSwitchStyle} onClick={e => e.stopPropagation()}>
          <span style={locale === "en" ? activeLanguageStyle : languagePillStyle}>EN</span><span style={locale === "fr" ? activeLanguageStyle : languagePillStyle}>FR</span>
        </a>
      </header>
      <div className={styles.terminalBody}>
        <div className={styles.boot}><div className={styles.hero}><div><p><Prompt/> welcome</p><pre className={styles.ascii}>EMMA DA SILVA</pre><h1>{copy.role}</h1><div className={styles.rule}/><p><strong>{copy.welcome}</strong><br/>{copy.hint}</p><dl><dt>user</dt><dd>emma</dd><dt>host</dt><dd>portfolio</dd><dt>os</dt><dd>ubuntu</dd><dt>location</dt><dd>cotonou, benin</dd><dt>focus</dt><dd>{copy.focus}</dd></dl></div><div className={styles.botE} aria-label={copy.botTitle}><div className={styles.botBubble} aria-live="polite"><strong>{copy.botTitle}</strong><p>{botText}<span aria-hidden="true">{botSpeaking ? "▌" : ""}</span></p></div><div className={styles.botOrb} aria-hidden="true" style={botSpeaking ? { transform: "scale(1.025)", filter: "brightness(1.16)" } : undefined}><i/><i/></div><span className={styles.botShadow}/></div></div>
          <div className={styles.helpGrid}><div><p className={styles.sectionLabel}>{copy.available}</p><CommandList commands={commands} labels={copy.labels} onRun={runCommand}/></div><aside><strong>tip</strong><p>{copy.tip}</p></aside></div>
        </div>
        {history.map((entry, index) => <div className={styles.entry} key={`${entry.command}-${index}`}><p><Prompt/> {entry.command}</p>{entry.output}</div>)}
        <form className={styles.promptLine} onSubmit={e => { e.preventDefault(); runCommand(input); }}><Prompt/><input ref={inputRef} value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => { if (e.key === "ArrowUp") { e.preventDefault(); navigateHistory(-1); } if (e.key === "ArrowDown") { e.preventDefault(); navigateHistory(1); } }} aria-label="Terminal command" autoCapitalize="none" autoComplete="off" spellCheck={false}/></form>
      </div>
    </section>
    <nav className={styles.dock} aria-label="Desktop dock"><span>◉</span><span>⌘</span><span className={styles.dockActive}>›_</span><span>◈</span><span>◆</span></nav>
  </main>;
}

function Prompt() { return <><strong className={styles.user}>emma@portfolio</strong><span className={styles.path}>:~$</span></>; }
function CommandList({ commands, labels, onRun }: { commands: string[]; labels: Record<string,string>; onRun: (command:string)=>void }) { return <div className={styles.commandList}>{commands.map(command => <button key={command} onClick={e => { e.stopPropagation(); onRun(command); }}><strong>{command}</strong><span>{labels[command]}</span></button>)}</div>; }
