"use client";

import Image from "next/image";
import { useState } from "react";

import styles from "./Portrait.module.css";

type PortraitProps = {
  alt: string;
};

export default function Portrait({ alt }: PortraitProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={styles.fallback} role="img" aria-label={alt}>
        <span className={styles.initials}>ED</span>
        <span className={styles.note}>
          Add public/images/portrait/emma-portrait.jpg
        </span>
      </div>
    );
  }

  return (
    <div className={styles.frame}>
      <Image
        src="/images/portrait/emma-portrait.jpg"
        alt={alt}
        fill
        sizes="(max-width: 760px) calc(100vw - 40px), 36vw"
        className={styles.image}
        onError={() => setFailed(true)}
      />
    </div>
  );
}
