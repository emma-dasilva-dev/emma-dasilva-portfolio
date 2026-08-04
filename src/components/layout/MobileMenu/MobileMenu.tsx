"use client";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher/LanguageSwitcher";
import type { Locale,NavigationItem } from "@/types/portfolio";
import styles from "./MobileMenu.module.css";
interface Props{open:boolean;locale:Locale;navigation:readonly NavigationItem[];navigationLabel:string;onClose:()=>void}
export default function MobileMenu({open,locale,navigation,navigationLabel,onClose}:Props){return <div id="mobile-navigation" className={`${styles.menu} ${open?styles.open:""}`} aria-hidden={!open}><nav className={styles.navigation} aria-label={navigationLabel}>{navigation.map(item=><a key={item.id} href={`#${item.id}`} className={styles.link} onClick={onClose} tabIndex={open?0:-1}>{item.label[locale]}</a>)}</nav><div className={styles.controls}><LanguageSwitcher/></div></div>}
