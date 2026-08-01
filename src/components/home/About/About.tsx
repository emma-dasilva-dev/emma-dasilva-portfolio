"use client";
import Image from "next/image";
import { COPY } from "@/content";
import { useLocale } from "@/components/providers/LocaleProvider/LocaleProvider";
import styles from "./About.module.css";
export default function About(){ const {locale}=useLocale(); const c=COPY[locale].about; return <section id="about" className="section sectionAlt"><div className={`shell ${styles.grid}`}><div><p className="eyebrow">{c.eyebrow}</p><div className={styles.copy}>{c.paragraphs.map(p=><p key={p}>{p}</p>)}</div></div><div className={styles.image}><Image src="/images/portrait/emma-portrait.jpg" alt={c.portraitAlt} fill sizes="(max-width: 700px) 100vw, 44vw" priority={false}/></div></div></section>; }
