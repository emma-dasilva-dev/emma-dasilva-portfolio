import styles from "./EditorialArt.module.css";

export default function EditorialArt() {
  return (
    <div className={styles.artwork} aria-hidden="true">
      <span className={styles.blueBlock} />

      <span className={styles.largeOrbit} />
      <span className={styles.smallOrbit} />

      <span className={styles.dotGrid} />

      <span className={styles.scribbleOval} />

      <span className={styles.cross}>×</span>

      <span className={styles.issue}>
        001
        <br />
        PERSONAL ARCHIVE
      </span>

      <span className={styles.verticalLabel}>
        BUILD / LEARN / CREATE
      </span>

      <span className={styles.titaniumLine} />
    </div>
  );
}