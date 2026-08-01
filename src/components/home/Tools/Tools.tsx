"use client";
import { COPY, TOOLS } from "@/content";
import { useLocale } from "@/components/providers/LocaleProvider/LocaleProvider";
import styles from "./Tools.module.css";
export default function Tools(){ const {locale}=useLocale(); const c=COPY[locale].tools; return <section id="tools" className="section sectionAlt"><div className="shell"><header className={styles.header}><p className="eyebrow">{c.eyebrow}</p><p>{c.introduction}</p></header><div className={styles.rows}>{TOOLS.map(g=><div key={g.title.en} className={styles.row}><h2>{g.title[locale]}</h2><p>{g.technologies.join(" · ")}</p></div>)}</div></div></section>; }
