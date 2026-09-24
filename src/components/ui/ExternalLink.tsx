import type { ReactNode } from "react";

import ArrowUpRight from "./ArrowUpRight";
import styles from "./ExternalLink.module.css";

type ExternalLinkProps = {
  href: string;
  children: ReactNode;
  primary?: boolean;
};

export default function ExternalLink({
  href,
  children,
  primary = false,
}: ExternalLinkProps) {
  return (
    <a
      className={`${styles.link} ${primary ? styles.primary : ""}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>{children}</span>
      <ArrowUpRight className={styles.icon} />
    </a>
  );
}
