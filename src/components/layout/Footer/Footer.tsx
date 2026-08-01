"use client";
import { COPY } from "@/content";
import { useLocale } from "@/components/providers/LocaleProvider/LocaleProvider";
import styles from "./Footer.module.css";
export default function Footer(){ const {locale}=useLocale(); const c=COPY[locale].footer; return <footer className={styles.footer}><p>{c.statement}</p><div><span>EMMA DA SILVA · {new Date().getFullYear()}</span><a href="#home">{c.backToTop} ↑</a></div></footer>; }
