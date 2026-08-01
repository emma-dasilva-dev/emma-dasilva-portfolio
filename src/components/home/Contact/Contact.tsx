"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

import { COPY } from "@/content";
import { useLocale } from "@/components/providers/LocaleProvider/LocaleProvider";

import styles from "./Contact.module.css";

type SubmitState = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const { locale } = useLocale();
  const c = COPY[locale].contact;

  const started = useRef(0);

  useEffect(() => {
    started.current = performance.now();
  }, []);

  const [state, setState] = useState<SubmitState>("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setState("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const body = {
      email: String(formData.get("email") ?? ""),
      subject: String(formData.get("subject") ?? ""),
      message: String(formData.get("message") ?? ""),
      company: String(formData.get("company") ?? ""),
      startedAt: started.current,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error();
      }

      setState("success");
      form.reset();

      started.current = performance.now();
    } catch {
      setState("error");
    }
  }

  return (
    <section id="contact" className="section">
      <div className={`shell ${styles.grid}`}>
        <div>
          <p className="eyebrow">{c.eyebrow}</p>

          <p className={styles.intro}>{c.introduction}</p>

          <div className={styles.links}>
            <span>{c.findMe}</span>

            <a
              href="https://github.com/emma-dasilva-dev"
              target="_blank"
              rel="noreferrer"
            >
              GITHUB ↗
            </a>

            <a
              href="https://www.linkedin.com/in/emmadasilvadev/"
              target="_blank"
              rel="noreferrer"
            >
              LINKEDIN ↗
            </a>

            <a href="mailto:emma.dasilva.dev@gmail.com">
              EMAIL ↗
            </a>
          </div>
        </div>

        <form onSubmit={submit} className={styles.form}>
          <input
            className={styles.honeypot}
            name="company"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          <label>
            {c.fields.email}
            <input
              name="email"
              type="email"
              required
            />
          </label>

          <label>
            {c.fields.subject}
            <input
              name="subject"
              required
              minLength={3}
              maxLength={120}
            />
          </label>

          <label>
            {c.fields.message}
            <textarea
              name="message"
              rows={6}
              required
              minLength={10}
              maxLength={2000}
            />
          </label>

          <button disabled={state === "sending"}>
            {state === "sending" ? c.submitting : c.submit}
          </button>

          <p aria-live="polite">
            {state === "success"
              ? c.success
              : state === "error"
                ? c.error
                : ""}
          </p>
        </form>
      </div>
    </section>
  );
}