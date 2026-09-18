"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import type { Locale } from "@/types/locale";
import styles from "./PapalePortfolio.module.css";
import heroStyles from "./PapaleHero.module.css";
import { WebGLHeroGradient } from "./WebGLHeroGradient";

const copy = {
  en: {
    nav:["WORK","ABOUT","PLAYGROUND","CONTACT"],
    role:["SOFTWARE DEVELOPER","& CYBERSECURITY STUDENT","BASED IN COTONOU"],
    place:"BASED IN COTONOU",
    aboutTitle:["A LITTLE","ABOUT ME"],
    about:"I build for the web, but I’m increasingly interested in what happens beneath it. Development taught me how ideas become interfaces and software. Cybersecurity is teaching me to look deeper into Linux, networks, systems and web security. I want to become the kind of engineer who understands both sides.",
    expertise:"EXPERTISES",
    skills:["WEB DEVELOPMENT","SOFTWARE DEVELOPMENT","LINUX & SYSTEMS","NETWORKING","WEB SECURITY","UI / UX"],
    work:"SELECTED WORK",
    workNote:"A deliberately curated selection. Only work I choose to stand behind belongs here.",
    lab:"MY DIGITAL PLAYGROUND",
    labNote:"Experiments, C, Linux, security practice and the technical things I build while learning.",
    contact:["INTERESTED IN","WORKING TOGETHER?"],
    email:"DROP ME AN EMAIL!",
    scroll:"SCROLL"
  },
  fr: {
    nav:["TRAVAIL","À PROPOS","PLAYGROUND","CONTACT"],
    role:["DÉVELOPPEUSE LOGICIEL","& ÉTUDIANTE EN CYBERSÉCURITÉ","BASÉE À COTONOU"],
    place:"BASÉE À COTONOU",
    aboutTitle:["UN PEU","SUR MOI"],
    about:"Je construis pour le web, mais je m’intéresse de plus en plus à ce qui se passe en dessous. Le développement m’a appris comment une idée devient une interface et un logiciel. La cybersécurité m’apprend à aller plus loin dans Linux, les réseaux, les systèmes et la sécurité web. Je veux devenir une ingénieure capable de comprendre les deux côtés.",
    expertise:"EXPERTISES",
    skills:["DÉVELOPPEMENT WEB","DÉVELOPPEMENT LOGICIEL","LINUX & SYSTÈMES","RÉSEAUX","SÉCURITÉ WEB","UI / UX"],
    work:"TRAVAUX SÉLECTIONNÉS",
    workNote:"Une sélection volontairement exigeante. Seuls les travaux que je choisis d’assumer pleinement seront ici.",
    lab:"MON PLAYGROUND DIGITAL",
    labNote:"Expériences, C, Linux, pratique en sécurité et tout ce que je construis pendant mon apprentissage.",
    contact:["ENVIE DE","TRAVAILLER ENSEMBLE ?"],
    email:"ENVOYEZ-MOI UN EMAIL !",
    scroll:"DÉFILER"
  }
} as const;

export function PapalePortfolio({locale}:{locale:Locale}) {
  const c=copy[locale];
  const root=useRef<HTMLElement>(null);
  const sculpture=useRef<HTMLDivElement>(null);

  useEffect(()=>{
    const el=root.current;
    if(!el) return;
    const reduced=matchMedia("(prefers-reduced-motion: reduce)").matches;
    const reveals=[...el.querySelectorAll<HTMLElement>("[data-reveal]")];
    const io=new IntersectionObserver(entries=>entries.forEach(entry=>{
      if(entry.isIntersecting){(entry.target as HTMLElement).dataset.visible="true";io.unobserve(entry.target)}
    }),{threshold:.16});
    reveals.forEach(x=>io.observe(x));
    if(reduced) return ()=>io.disconnect();

    const onMove=(e:PointerEvent)=>{
      const x=(e.clientX/innerWidth-.5)*2,y=(e.clientY/innerHeight-.5)*2;
      sculpture.current?.style.setProperty("--mx",String(x));
      sculpture.current?.style.setProperty("--my",String(y));
    };
    addEventListener("pointermove",onMove,{passive:true});

    if (reduced) {
      return()=>{io.disconnect();removeEventListener("pointermove",onMove)};
    }

    gsap.registerPlugin(ScrollTrigger);
    const hero=el.querySelector<HTMLElement>("[data-hero]");
    const heading=el.querySelector<HTMLElement>("[data-hero-heading]");
    const info=el.querySelector<HTMLElement>("[data-hero-info]");
    const scrollIndicator=el.querySelector<HTMLElement>("[data-hero-scroll]");
    const nav=el.querySelector<HTMLElement>("header");
    const lenis=new Lenis({
      easing:value=>Math.min(1,1.001-Math.pow(2,-10*value)),
      lerp:.08,
      smoothWheel:true,
    });
    let frame=0;
    const raf=(time:number)=>{lenis.raf(time);frame=requestAnimationFrame(raf)};
    frame=requestAnimationFrame(raf);
    lenis.on("scroll",ScrollTrigger.update);

    const context=gsap.context(()=>{
      if(!hero||!heading) return;
      const mobile=innerWidth<=800;
      gsap.to(heading,{x:mobile?"12%":"87%",scale:mobile?1.7:4.2,transformOrigin:"50% 50%",ease:"none",scrollTrigger:{anticipatePin:1,end:"+=80%",pin:true,scrub:.3,start:"top top",trigger:hero}});
      if(info) gsap.to(info,{x:20,y:20,opacity:0,scrollTrigger:{end:"+=40",scrub:true,start:"top top",trigger:hero}});
      if(scrollIndicator) gsap.to(scrollIndicator,{x:-20,y:20,opacity:0,scrollTrigger:{end:"+=40",scrub:true,start:"top top",trigger:hero}});
      if(nav) ScrollTrigger.create({onUpdate:trigger=>{gsap.to(nav,{duration:.25,overwrite:true,yPercent:trigger.direction===1&&trigger.scroll()>40?-100:0})}});
    },el);

    return()=>{context.revert();lenis.destroy();cancelAnimationFrame(frame);io.disconnect();removeEventListener("pointermove",onMove)};
  },[]);

  return <main ref={root} className={`${styles.page} ${heroStyles.page}`} id="main-content">
    <div className={heroStyles.grain} aria-hidden="true" />
    <header className={`${styles.nav} ${heroStyles.nav}`}>
      <a href="#home" className={styles.logo}>ED</a>
      <nav>{c.nav.map((n,i)=><a key={n} href={`#${["work","about","playground","contact"][i]}`}>{n}</a>)}</nav>
      <a className={styles.lang} href={`/${locale==="en"?"fr":"en"}`}>{locale==="en"?"FR":"EN"}</a>
    </header>

    <section className={`${styles.hero} ${heroStyles.hero}`} id="home" data-hero>
      <div className={`${styles.name} ${heroStyles.name}`} data-hero-heading aria-label="Emma Dasilva"><WebGLHeroGradient ariaLabel="Emma Dasilva" /></div>
      <div className={`${styles.heroInfo} ${heroStyles.heroInfo}`} data-hero-info><span>↘</span><p>{c.role.map(line=><span key={line}>{line}</span>)}</p></div>
      <a className={`${styles.scroll} ${heroStyles.scroll}`} data-hero-scroll href="#about"><i>↓</i>{c.scroll}</a>
    </section>

    <section className={styles.about} id="about">
      <div className={styles.aboutCopy} data-reveal>
        <h2>{c.aboutTitle.map(x=><span key={x}>{x}</span>)}</h2>
        <p>{c.about}</p>
      </div>
      <div className={styles.sculpture} ref={sculpture} aria-hidden="true">
        <div className={styles.pedestal}><i/><i/><i/></div>
        <div className={styles.hand}>
          <b className={styles.palm}/>
          <i className={styles.finger1}/><i className={styles.finger2}/><i className={styles.finger3}/><i className={styles.finger4}/><i className={styles.thumb}/>
        </div>
        <div className={styles.textRing}><span>BUILD • LEARN • UNDERSTAND • SECURE • BUILD • LEARN •</span></div>
      </div>
    </section>

    <section className={styles.expertise}>
      <p className={styles.kicker}>{c.expertise}</p>
      <div className={styles.skillList}>{c.skills.map((s,i)=><div data-reveal key={s}><small>0{i+1}</small><span>{s}</span></div>)}</div>
    </section>

    <section className={styles.work} id="work">
      <div className={styles.workHead} data-reveal><h2>{c.work}</h2><p>{c.workNote}</p></div>
      <div className={styles.placeholder}>
        <span>01</span><div>CURATING</div><span>2026</span>
      </div>
    </section>

    <section className={styles.playground} id="playground">
      <div className={styles.playTitle} data-reveal><span>MY</span><span>DIGITAL</span><span>PLAYGROUND</span></div>
      <div className={styles.star} aria-hidden="true">✦</div>
      <p>{c.labNote}</p>
      <div className={styles.labGrid}><article>C</article><article>LINUX</article><article>SECURITY</article><article>EXPERIMENTS</article></div>
    </section>

    <footer className={styles.contact} id="contact">
      <div className={styles.contactTitle}>{c.contact.map(x=><span key={x}>{x}</span>)}</div>
      <a href="mailto:emma.dasilva.dev@gmail.com">{c.email}</a>
      <div className={styles.socials}><a href="https://github.com/emma-dasilva-dev" target="_blank" rel="noreferrer">GITHUB</a><a href="https://www.linkedin.com/in/emmadasilvadev" target="_blank" rel="noreferrer">LINKEDIN</a><a href="https://www.instagram.com/emmadev.bj" target="_blank" rel="noreferrer">INSTAGRAM</a></div>
      <div className={styles.coords}>EMMA DASILVA / COTONOU / 2026</div>
    </footer>
  </main>
}
