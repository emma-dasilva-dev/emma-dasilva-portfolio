"use client";

import Image from "next/image";
import {
  type FormEvent,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

import { COPY, NAVIGATION } from "@/content/site";
import type {
  ContactFieldErrors,
  ContactFormPayload,
  Locale,
} from "@/types/portfolio";

import styles from "./Portfolio.module.css";

const STORAGE_KEY = "emma-portfolio-locale";
const INTRO_KEY = "emma-portfolio-intro-seen";

export default function Portfolio() {
  const [locale, setLocale] = useState<Locale>("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const [introVisible, setIntroVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const copy = COPY[locale];

  useEffect(() => {
    const storedLocale = window.localStorage.getItem(STORAGE_KEY);
    const localeTimer = window.setTimeout(() => {
      if (storedLocale === "en" || storedLocale === "fr") {
        setLocale(storedLocale);
      }
    }, 0);

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!reduceMotion && !window.sessionStorage.getItem(INTRO_KEY)) {
      const showTimer = window.setTimeout(() => setIntroVisible(true), 0);
      const hideTimer = window.setTimeout(() => {
        window.sessionStorage.setItem(INTRO_KEY, "true");
        setIntroVisible(false);
      }, 2200);

      return () => {
        window.clearTimeout(localeTimer);
        window.clearTimeout(showTimer);
        window.clearTimeout(hideTimer);
      };
    }

    return () => {
      window.clearTimeout(localeTimer);
    };
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    window.localStorage.setItem(STORAGE_KEY, locale);
  }, [locale]);

  useEffect(() => {
    const sectionIds = ["home", ...NAVIGATION.map((item) => item.id)];
    const observers = sectionIds.map((id) => {
      const element = document.getElementById(id);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-35% 0px -55% 0px", threshold: 0 },
      );

      observer.observe(element);
      return observer;
    });

    return () => observers.forEach((observer) => observer?.disconnect());
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    const handleResize = () => {
      if (window.innerWidth > 860) setMenuOpen(false);
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen]);

  const switchLanguage = () => {
    setLocale((current) => (current === "en" ? "fr" : "en"));
  };

  return (
    <>
      {introVisible ? (
        <div className={styles.intro} aria-hidden="true">
          <div className={styles.introInner}>
            <p>EMMA DA SILVA</p>
            <span />
            <small>{copy.hero.role}</small>
          </div>
        </div>
      ) : null}

      <header className={styles.header}>
        <div className={styles.headerInner}>
          <a
            className={styles.brand}
            href="#home"
            onClick={() => setMenuOpen(false)}
          >
            EMMA DA SILVA
          </a>

          <nav className={styles.desktopNav} aria-label={copy.header.navigation}>
            {NAVIGATION.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={activeSection === item.id ? styles.activeNav : ""}
              >
                {item[locale]}
              </a>
            ))}
          </nav>

          <div className={styles.headerControls}>
            <button
              type="button"
              className={styles.languageButton}
              onClick={switchLanguage}
              aria-label={
                locale === "en"
                  ? "Afficher le site en français"
                  : "Show the site in English"
              }
            >
              {locale === "en" ? "FR" : "EN"}
            </button>

            <button
              type="button"
              className={styles.menuButton}
              onClick={() => setMenuOpen((current) => !current)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {menuOpen ? copy.header.close : copy.header.menu}
            </button>
          </div>
        </div>
      </header>

      {menuOpen ? (
        <div id="mobile-menu" className={styles.mobileMenu}>
          <nav aria-label={copy.header.navigation}>
            {NAVIGATION.map((item, index) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMenuOpen(false)}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item[locale]}
              </a>
            ))}
          </nav>
        </div>
      ) : null}

      <main>
        <section id="home" className={styles.hero}>
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <p className={styles.eyebrow}>{copy.hero.eyebrow}</p>
              <h1>{copy.hero.name}</h1>

              <div className={styles.heroRole}>
                <span />
                <p>{copy.hero.role}</p>
              </div>

              <p className={styles.heroIntro}>{copy.hero.intro}</p>
            </div>

            <div className={styles.heroBottom}>
              <span>{copy.hero.location}</span>
              <a href="#projects">
                {copy.hero.explore}
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </section>

        <Reveal>
          <section id="projects" className={styles.section}>
            <SectionHeader
              eyebrow={copy.projects.eyebrow}
              title={copy.projects.title}
              intro={copy.projects.intro}
            />

            <div className={styles.projectList}>
              {copy.projects.items.map((project) => (
                <article key={project.number} className={styles.project}>
                  <div className={styles.projectNumber}>{project.number}</div>

                  <div className={styles.projectBody}>
                    <div className={styles.projectTop}>
                      <div>
                        <p className={styles.projectCategory}>
                          {project.category}
                        </p>
                        <h3>{project.title}</h3>
                      </div>

                      <span className={styles.projectStatus}>
                        {project.status === "live"
                          ? copy.projects.live
                          : copy.projects.development}
                      </span>
                    </div>

                    <p className={styles.projectDescription}>
                      {project.description}
                    </p>
                    <p className={styles.projectDetail}>{project.detail}</p>

                    <div className={styles.projectMeta}>
                      <ul>
                        {project.technologies.map((technology) => (
                          <li key={technology}>{technology}</li>
                        ))}
                      </ul>

                      {project.href ? (
                        <a href={project.href} target="_blank" rel="noreferrer">
                          {copy.projects.view}
                          <span aria-hidden="true">↗</span>
                        </a>
                      ) : (
                        <span>{copy.projects.development}</span>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section id="about" className={styles.section}>
            <div className={styles.aboutGrid}>
              <div>
                <SectionHeader
                  eyebrow={copy.about.eyebrow}
                  title={copy.about.title}
                />

                <div className={styles.aboutText}>
                  {copy.about.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <figure className={styles.portrait}>
                <Image
                  src="/images/portrait/emma-portrait.jpg"
                  alt={copy.about.portraitAlt}
                  width={900}
                  height={1125}
                  sizes="(max-width: 760px) 100vw, 38vw"
                />
              </figure>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section id="stack" className={styles.section}>
            <SectionHeader
              eyebrow={copy.stack.eyebrow}
              title={copy.stack.title}
            />

            <div className={styles.stackList}>
              {copy.stack.groups.map((group) => (
                <div key={group.title} className={styles.stackRow}>
                  <h3>{group.title}</h3>
                  <p>{group.items.join(" · ")}</p>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section id="journey" className={styles.section}>
            <SectionHeader
              eyebrow={copy.journey.eyebrow}
              title={copy.journey.title}
              intro={copy.journey.intro}
            />

            <div className={styles.journeyList}>
              {copy.journey.steps.map((step) => (
                <article key={step.number} className={styles.journeyStep}>
                  <span>{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section id="contact" className={styles.section}>
            <div className={styles.contactGrid}>
              <div>
                <SectionHeader
                  eyebrow={copy.contact.eyebrow}
                  title={copy.contact.title}
                  intro={copy.contact.intro}
                />

                <div className={styles.contactLinks}>
                  <a href="mailto:emma.dasilva.dev@gmail.com">
                    emma.dasilva.dev@gmail.com
                  </a>
                  <a
                    href="https://github.com/emma-dasilva-dev"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub ↗
                  </a>
                  <a
                    href="https://www.linkedin.com/in/emmadasilvadev/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn ↗
                  </a>
                </div>
              </div>

              <ContactForm locale={locale} />
            </div>
          </section>
        </Reveal>
      </main>

      <footer className={styles.footer}>
        <p>{copy.footer.statement}</p>
        <a href="#home">{copy.footer.top} ↑</a>
        <span>© {new Date().getFullYear()} Emma Da Silva</span>
      </footer>
    </>
  );
}

function Reveal({ children }: { children: ReactNode }) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      const timer = window.setTimeout(() => setVisible(true), 0);
      return () => window.clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={elementRef}
      className={`${styles.reveal} ${visible ? styles.revealVisible : ""}`}
    >
      {children}
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <header className={styles.sectionHeader}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2>{title}</h2>
      {intro ? <p className={styles.sectionIntro}>{intro}</p> : null}
    </header>
  );
}

function ContactForm({ locale }: { locale: Locale }) {
  const copy = COPY[locale].contact;
  const [values, setValues] = useState({
    email: "",
    subject: "",
    message: "",
    company: "",
  });
  const [startedAt, setStartedAt] = useState<number | null>(null);
  const [errors, setErrors] = useState<ContactFieldErrors>({});
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const getError = (code?: string) => {
    if (code === "invalid_email") return copy.emailInvalid;
    if (code === "invalid_subject") return copy.subjectInvalid;
    if (code === "invalid_message") return copy.messageInvalid;
    return copy.error;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const payload: ContactFormPayload = {
      ...values,
      startedAt: startedAt ?? Date.now(),
    };

    setStatus("submitting");
    setErrors({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as {
        ok?: boolean;
        fields?: ContactFieldErrors;
      };

      if (!response.ok || !result.ok) {
        setErrors(result.fields ?? { form: "request_failed" });
        setStatus("error");
        return;
      }

      setValues({ email: "", subject: "", message: "", company: "" });
      setStartedAt(null);
      setStatus("success");
    } catch {
      setErrors({ form: "network_error" });
      setStatus("error");
    }
  };

  const updateField = (
    field: "email" | "subject" | "message" | "company",
    value: string,
  ) => {
    if (startedAt === null && field !== "company") setStartedAt(Date.now());

    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({
      ...current,
      [field]: undefined,
      form: undefined,
    }));

    if (status !== "idle") setStatus("idle");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          value={values.company}
          onChange={(event) => updateField("company", event.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <label>
        <span>{copy.email}</span>
        <input
          type="email"
          value={values.email}
          onChange={(event) => updateField("email", event.target.value)}
          aria-invalid={Boolean(errors.email)}
          required
        />
        {errors.email ? <small>{getError(errors.email)}</small> : null}
      </label>

      <label>
        <span>{copy.subject}</span>
        <input
          value={values.subject}
          onChange={(event) => updateField("subject", event.target.value)}
          aria-invalid={Boolean(errors.subject)}
          required
        />
        {errors.subject ? <small>{getError(errors.subject)}</small> : null}
      </label>

      <label>
        <span>{copy.message}</span>
        <textarea
          rows={6}
          value={values.message}
          onChange={(event) => updateField("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
          required
        />
        {errors.message ? <small>{getError(errors.message)}</small> : null}
      </label>

      <div className={styles.formBottom}>
        <button type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? copy.submitting : copy.submit}
        </button>

        <p aria-live="polite">
          {status === "success"
            ? copy.success
            : status === "error"
              ? copy.error
              : ""}
        </p>
      </div>
    </form>
  );
}
