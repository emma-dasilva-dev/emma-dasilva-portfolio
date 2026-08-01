"use client";
import { COPY } from "@/content";
import { useLocale } from "@/components/providers/LocaleProvider/LocaleProvider";
import styles from "./Hero.module.css";
export default function Hero(){ const {locale}=useLocale(); const c=COPY[locale].hero; return <section id="home" className={styles.hero}><div><p>{c.prefix}</p><h1>{c.name}</h1><span>{c.role}</span></div></section>; }
