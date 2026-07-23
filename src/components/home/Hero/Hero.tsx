import Image from "next/image";

import EditorialArt from "@/components/art/EditorialArt/EditorialArt";

import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <EditorialArt />

      <div className={styles.container}>
        <div className={styles.copy}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />
            <span>PORTFOLIO</span>
            <span className={styles.dot}>•</span>
            <span>2026</span>
          </div>

          <div className={styles.statement}>
            <h1>
              All that I can be
              <br />
              is me.
            </h1>

            <div className={styles.signatureWrap}>
              <p className={styles.signature}>all of me.</p>

              <span className={styles.annotation}>
                no other version
              </span>
            </div>
          </div>

          <div className={styles.footer}>
            <div className={styles.identity}>
  <p className={styles.role}>
    Developer based in
    <br />
    Cotonou, Benin.
  </p>
</div>

            <a href="#work" className={styles.explore}>
              <span>Explore my work</span>
              <span className={styles.arrow} aria-hidden="true">
                ↘
              </span>
            </a>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.titaniumFrame} />

          <div className={styles.imageFrame}>
            <Image
              src="/images/portrait/emma-portrait.jpg"
              alt="Portrait of Emma DA SILVA"
              fill
              preload
              sizes="
                (max-width: 820px) 88vw,
                (max-width: 1200px) 48vw,
                42vw
              "
              className={styles.portrait}
            />
          </div>

          <div className={styles.photoCaption}>
            <span>EMMA</span>
            <span>01 / 01</span>
          </div>

          <div className={styles.blueSticker}>
            <span>DEVELOPER</span>
            <span>COTONOU / BENIN</span>
          </div>

          <div className={styles.silverTag}>
            BUILDING
            <br />
            WITH INTENTION
          </div>
        </div>
      </div>
    </section>
  );
}