"use client";
import { COPY, JOURNEY } from "@/content";
import { useLocale } from "@/components/providers/LocaleProvider/LocaleProvider";
import styles from "./Journey.module.css";
export default function Journey(){ const {locale}=useLocale(); const c=COPY[locale].journey; return <section id="journey" className="section"><div className="shell"><header className={styles.header}><p className="eyebrow">{c.eyebrow}</p><p>{c.introduction}</p></header><div>{JOURNEY.map(s=><article key={s.number} className={styles.step}><span>{s.number}</span><h2>{s.title[locale]}</h2><p>{s.description[locale]}</p></article>)}</div></div></section>; }
