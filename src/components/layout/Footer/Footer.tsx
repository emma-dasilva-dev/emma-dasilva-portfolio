"use client";
import {useLocale} from "@/components/providers/LocaleProvider/LocaleProvider";import {HOME_COPY} from "@/content/home";import styles from "./Footer.module.css";export default function Footer(){const{locale}=useLocale();return <footer className={styles.footer}><p>{HOME_COPY[locale].footer.message}</p><span>EMMA DA SILVA © {new Date().getFullYear()}</span></footer>}
