import Link from "next/link";

import styles from "./Header.module.css";

const navigationItems = [
  { label: "WORK", href: "#work" },
  { label: "STORY", href: "#story" },
  { label: "LAB", href: "#lab" },
  { label: "NOW", href: "#now" },
] as const;

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.brand}>
        EMMA DA SILVA
      </Link>

      <nav className={styles.navigation} aria-label="Primary navigation">
        {navigationItems.map((item) => (
          <a key={item.label} href={item.href} className={styles.navLink}>
            {item.label}
          </a>
        ))}

        <button
          type="button"
          className={styles.language}
          aria-label="Change language"
        >
          EN / FR
        </button>
      </nav>

      <button
        type="button"
        className={styles.mobileMenu}
        aria-label="Open navigation menu"
      >
        MENU
      </button>
    </header>
  );
}