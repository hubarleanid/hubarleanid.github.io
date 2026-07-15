import Section from "@/components/Section/Section";
import { experience } from "@/data/experience";
import styles from "./page.module.scss";

export const metadata = {
  title: "Experience — Leanid Hubar",
};

export default function ExperiencePage() {
  return (
    <Section eyebrow="Career" title="Experience">
      {experience.map((entry) => (
        <div key={`${entry.company}-${entry.period}`} className={styles.entry}>
          <h3 className={styles.role}>
            {entry.role} · {entry.company}
          </h3>
          <p className={styles.meta}>
            {entry.location} · {entry.period}
          </p>
          <p className={styles.context}>{entry.context}</p>
          <ul className={styles.highlights}>
            {entry.highlights.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <div>
            {entry.stack.map((tech) => (
              <span key={tech} className="tag">
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </Section>
  );
}
