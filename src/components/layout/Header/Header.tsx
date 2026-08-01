"use client";
import { useState } from "react";
import { COPY, NAVIGATION } from "@/content";
import { useLocale } from "@/components/providers/LocaleProvider/LocaleProvider";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher/LanguageSwitcher";
import MobileMenu from "../MobileMenu/MobileMenu";
import styles from "./Header.module.css";

export default function Header() {
  const { locale } = useLocale();
  const [open, setOpen] = useState(false);
  const copy = COPY[locale].header;
  return <>
    <header className={styles.header}>
      <a className={styles.brand} href="#home">{copy.brand}</a>
      <nav className={styles.nav} aria-label={copy.navigationLabel}>{NAVIGATION.map(item => <a key={item.id} href={`#${item.id}`}>{item.label[locale]}</a>)}</nav>
      <div className={styles.controls}><LanguageSwitcher/><button className={styles.menuButton} type="button" onClick={() => setOpen(true)}>{copy.menu}</button></div>
    </header>
    <MobileMenu open={open} onClose={() => setOpen(false)} />
  </>;
}
