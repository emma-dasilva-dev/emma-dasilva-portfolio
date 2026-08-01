"use client";
import { COPY, NAVIGATION } from "@/content";
import { useLocale } from "@/components/providers/LocaleProvider/LocaleProvider";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher/LanguageSwitcher";
import styles from "./MobileMenu.module.css";

export default function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { locale } = useLocale();
  const copy = COPY[locale].header;
  return <div className={`${styles.menu} ${open ? styles.open : ""}`} aria-hidden={!open}>
    <div className={styles.top}><span>{copy.brand}</span><button type="button" onClick={onClose}>{copy.close}</button></div>
    <nav aria-label={copy.mobileNavigationLabel}>{NAVIGATION.map((item, index) => <a key={item.id} href={`#${item.id}`} onClick={onClose}><span>{String(index+1).padStart(2,"0")}</span>{item.label[locale]}</a>)}</nav>
    <div className={styles.footer}><LanguageSwitcher/></div>
  </div>;
}
