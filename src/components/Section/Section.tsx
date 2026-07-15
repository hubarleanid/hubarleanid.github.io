import { ReactNode } from "react";
import styles from "./Section.module.scss";

type SectionProps = {
  eyebrow?: string;
  title?: string;
  children: ReactNode;
};

export default function Section({ eyebrow, title, children }: SectionProps) {
  return (
    <section className={`container ${styles.section}`}>
      {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
      {title && <h2 className={styles.title}>{title}</h2>}
      {children}
    </section>
  );
}
