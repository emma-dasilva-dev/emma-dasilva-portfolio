import styles from "./SectionLabel.module.css";

interface SectionLabelProps {
  index: string;
  label: string;
}

export default function SectionLabel({
  index,
  label,
}: SectionLabelProps) {
  return (
    <div
      className={
        styles.label
      }
    >
      <span
        className={
          styles.index
        }
      >
        {index}
      </span>

      <span
        className={
          styles.text
        }
      >
        {label}
      </span>

      <span
        className={
          styles.line
        }
        aria-hidden="true"
      />
    </div>
  );
}
