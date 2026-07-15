import { ReactNode } from "react";
import styles from "./Card.module.scss";

type CardProps = {
  title: string;
  meta?: string;
  description?: string;
  tags?: string[];
  children?: ReactNode;
};

export default function Card({ title, meta, description, tags, children }: CardProps) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      {meta && <p className={styles.meta}>{meta}</p>}
      {description && <p className={styles.description}>{description}</p>}
      {tags && tags.length > 0 && (
        <div>
          {tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      )}
      {children}
    </div>
  );
}
