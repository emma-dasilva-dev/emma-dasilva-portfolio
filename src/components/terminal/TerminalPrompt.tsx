"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

import type { Locale } from "../../i18n/config";

import styles from "./TerminalPrompt.module.css";

type TerminalPromptProps = {
  locale: Locale;
};

const HELP =
  "help · work · about · journey · stack · contact · open stay · open bandit · theme dark|light · lang en|fr · clear";

export default function TerminalPrompt({ locale }: TerminalPromptProps) {
  const [value, setValue] = useState("");
  const [output, setOutput] = useState("");
  const [introDone, setIntroDone] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    const command = "whoami";
    let index = 0;

    const timer = window.setInterval(() => {
      index += 1;
      setValue(command.slice(0, index));

      if (index >= command.length) {
        window.clearInterval(timer);
        window.setTimeout(() => {
          setValue("");
          setIntroDone(true);
        }, 450);
      }
    }, 85);

    return () => window.clearInterval(timer);
  }, []);

  const goToSection = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    router.push(`/${locale}#${id}`);
  };

  const runCommand = (rawCommand: string) => {
    const command = rawCommand.trim().toLowerCase();

    if (!command) {
      return;
    }

    if (["work", "about", "journey", "stack", "contact"].includes(command)) {
      goToSection(command);
      setOutput(`→ ${command}`);
      return;
    }

    if (command === "help") {
      setOutput(HELP);
      return;
    }

    if (command === "clear") {
      setOutput("");
      return;
    }

    if (command === "open stay") {
      router.push(`/${locale}/work/stay`);
      return;
    }

    if (command === "open bandit") {
      router.push(`/${locale}/work/bandit-learning-journal`);
      return;
    }

    if (command === "theme dark" || command === "theme light") {
      const theme = command.endsWith("light") ? "light" : "dark";
      document.documentElement.dataset.theme = theme;
      localStorage.setItem("portfolio-theme", theme);
      setOutput(`theme → ${theme}`);
      return;
    }

    if (command === "lang en" || command === "lang fr") {
      const nextLocale = command.endsWith("fr") ? "fr" : "en";
      router.push(`/${nextLocale}`);
      return;
    }

    if (command === "whoami") {
      setOutput("Emma Da Silva · Junior Developer");
      return;
    }

    setOutput(`command not found: ${command}. try "help".`);
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    runCommand(value);
    setValue("");
  };

  return (
    <div className={styles.terminal}>
      <form className={styles.form} onSubmit={submit}>
        <label className="sr-only" htmlFor="portfolio-terminal">
          Portfolio terminal command
        </label>

        <span className={styles.prefix}>
          emma@portfolio:~<span className={styles.dollar}>$</span>
        </span>

        <input
          id="portfolio-terminal"
          ref={inputRef}
          className={styles.input}
          value={value}
          onChange={(event) => {
            if (introDone) {
              setValue(event.target.value);
            }
          }}
          onFocus={() => setIntroDone(true)}
          autoComplete="off"
          spellCheck={false}
          aria-describedby="terminal-output"
        />

        <span className={styles.cursor} aria-hidden="true" />
      </form>

      <p
        id="terminal-output"
        className={styles.output}
        aria-live="polite"
      >
        {output || "\u00A0"}
      </p>

      {introDone ? (
        <div className={styles.suggestions} aria-label="Terminal shortcuts">
          {["help", "work", "about", "contact"].map((command) => (
            <button
              key={command}
              type="button"
              onClick={() => {
                runCommand(command);
                setValue("");
                inputRef.current?.focus();
              }}
            >
              {command}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
