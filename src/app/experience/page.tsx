import { Card, Timeline } from "antd";
import { experience } from "@/data/experience";
import styles from "./page.module.scss";

export const metadata = {
  title: "Experience — Leanid Hubar",
};

export default function ExperiencePage() {
  return (
    <div className={styles.wrap}>
      <Timeline
        items={experience.map((entry) => ({
          color: "var(--accent)",
          children: (
            <div key={`${entry.company}-${entry.period}`} className={styles.entry}>
              <div className={styles.head}>
                <div className={styles.role}>
                  {entry.role} <span className={`mono ${styles.company}`}>@ {entry.company}</span>
                </div>
                <div className={`mono ${styles.period}`}>{entry.period}</div>
              </div>
              <div className={styles.location}>{entry.location}</div>
              <Card bordered className={styles.context}>
                {entry.context}
              </Card>
              <div className={styles.highlights}>
                {entry.highlights.map((point) => (
                  <div key={point} className={styles.highlightRow}>
                    <span className={`mono ${styles.bullet}`}>▸</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
              <div className={styles.stack}>
                {entry.stack.map((tech) => (
                  <span key={tech} className="aTag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ),
        }))}
      />
    </div>
  );
}
