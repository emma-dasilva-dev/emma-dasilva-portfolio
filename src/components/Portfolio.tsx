"use client";

import Image from "next/image";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

const stack = [
  { name: "HTML5", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { name: "CSS3", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "MySQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  { name: "C", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" },
  { name: "Linux", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
  { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
];

export default function Portfolio() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let lenis: Lenis | null = null;
    let frame = 0;

    if (!reducedMotion) {
      lenis = new Lenis({ duration: 1.05, smoothWheel: true });
      const raf = (time: number) => {
        lenis?.raf(time);
        frame = requestAnimationFrame(raf);
      };
      frame = requestAnimationFrame(raf);
      lenis.on("scroll", ScrollTrigger.update);
    }

    const context = gsap.context(() => {
      if (reducedMotion) return;

      gsap.timeline({ defaults: { ease: "power3.out" } })
        .from(".nav-shell", { y: -18, opacity: 0, duration: 0.7 })
        .from(".eyebrow", { y: 16, opacity: 0, duration: 0.55 }, "-=0.25")
        .from(".hero-line", { yPercent: 110, opacity: 0, stagger: 0.12, duration: 0.9 }, "-=0.15")
        .from(".hero-intro, .hero-actions, .hero-note", { y: 20, opacity: 0, stagger: 0.1, duration: 0.65 }, "-=0.45");

      gsap.utils.toArray<HTMLElement>(".reveal").forEach((element) => {
        gsap.from(element, {
          y: 34,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: element, start: "top 88%" },
        });
      });

      gsap.from(".stack-icon", {
        y: 18,
        opacity: 0,
        stagger: 0.05,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: { trigger: ".stack-grid", start: "top 88%" },
      });

      gsap.to(".project-card", {
        y: -20,
        ease: "none",
        scrollTrigger: {
          trigger: ".project-card",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.from(".contact-inner", {
        y: 32,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: ".contact", start: "top 86%" },
      });
    });

    return () => {
      context.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      lenis?.destroy();
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <main>
      <header className="nav-shell">
        <a className="logo" href="#top">EMMA DASILVA</a>
        <nav aria-label="Primary navigation">
          <a href="#about">ABOUT</a>
          <a href="#work">WORK</a>
          <a href="#stack">STACK</a>
          <a href="#contact">CONTACT</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">SOFTWARE DEVELOPMENT × CYBERSECURITY</p>
          <h1>
            <span className="hero-line-wrap"><span className="hero-line">I build useful software</span></span>
            <span className="hero-line-wrap"><span className="hero-line hero-line-muted">and learn how to secure it.</span></span>
          </h1>
          <p className="hero-intro">
            I’m Emma, a software developer and cybersecurity student based in Cotonou.
            I’m interested in building clean digital products and understanding the systems behind them.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#work">VIEW MY WORK</a>
            <a className="button secondary" href="#contact">CONTACT ME</a>
          </div>
        </div>

        <div className="hero-note">
          <span>BASED IN</span>
          <strong>COTONOU, BENIN</strong>
        </div>
      </section>

      <section className="section" id="about">
        <div className="section-heading reveal">
          <p>ABOUT</p>
          <h2>Building and understanding.</h2>
        </div>
        <div className="about-copy reveal">
          <p>
            I started programming because I wanted to understand how the digital things I used every day were actually built.
            What began with websites gradually became an interest in software, systems, Linux, networks and security.
          </p>
          <p>
            Today, I’m developing my skills across both software development and cybersecurity.
            I want to understand technology from both sides: how to build it and how to protect it.
          </p>
        </div>
      </section>

      <section className="section" id="work">
        <div className="section-heading reveal">
          <p>FEATURED WORK</p>
          <h2>Bandit Redline</h2>
        </div>

        <article className="project-card reveal">
          <div className="project-copy">
            <div className="project-meta">
              <span>CYBERSECURITY</span>
              <span>2026</span>
            </div>
            <p>
              A cybersecurity learning project documenting my progress through OverTheWire Bandit while developing
              practical skills in Linux, SSH, permissions, file handling and command-line problem solving.
            </p>
          </div>

          <div className="project-stack">
            <span>LINUX</span>
            <span>BASH</span>
            <span>SSH</span>
          </div>

          <a
            href="https://emma-dasilva-dev.github.io/bandit-redline-journal/"
            target="_blank"
            rel="noreferrer"
          >
            VIEW PROJECT ↗
          </a>
        </article>
      </section>

      <section className="section" id="stack">
        <div className="section-heading reveal">
          <p>STACK</p>
          <h2>Tools I build with.</h2>
        </div>

        <div className="stack-grid" aria-label="Technology stack">
          {stack.map((item) => (
            <div className="stack-icon" key={item.name} title={item.name}>
              <Image src={item.src} alt={item.name} width={52} height={52} />
            </div>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-inner">
          <div className="contact-copy">
            <p className="contact-label">CONTACT</p>
            <h2>Let’s build something worth showing.</h2>
            <p>
              Open to opportunities, collaborations and conversations around software, security and useful digital products.
            </p>
          </div>

          <div className="contact-links">
            <a href="mailto:emma.dasilva.dev@gmail.com">EMAIL ↗</a>
            <a href="https://github.com/emma-dasilva-dev" target="_blank" rel="noreferrer">GITHUB ↗</a>
            <a href="https://www.linkedin.com/in/emmadasilvadev/" target="_blank" rel="noreferrer">LINKEDIN ↗</a>
            <a href="https://www.instagram.com/emmadev.bj" target="_blank" rel="noreferrer">INSTAGRAM ↗</a>
          </div>
        </div>
      </section>

      <footer>
        <span>EMMA DASILVA</span>
        <span>COTONOU</span>
        <span>2026</span>
      </footer>
    </main>
  );
}
