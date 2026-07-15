import Section from "@/components/Section/Section";
import { profile, skillGroups } from "@/data/profile";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
      <section className={`container ${styles.hero}`}>
        <h1 className={styles.title}>{profile.name}</h1>
        <p className={styles.subtitle}>{profile.title}</p>
        <p className={styles.summary}>{profile.summary}</p>
        <div className={styles.actions}>
          <a href={`mailto:${profile.email}`} className={styles.buttonPrimary}>
            Get in touch
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className={styles.button}>
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className={styles.button}>
            GitHub
          </a>
        </div>
      </section>

      <Section eyebrow="Toolbox" title="Skills">
        {skillGroups.map((group) => (
          <div key={group.label} className={styles.skillGroup}>
            <p className={styles.skillLabel}>{group.label}</p>
            <div className={styles.skills}>
              {group.items.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </Section>

      <Section eyebrow="Background" title="Education & languages">
        {profile.education.map((edu) => (
          <p key={edu.degree}>
            <strong>{edu.degree}</strong> — {edu.school}, {edu.year}
          </p>
        ))}
        <p>
          {profile.languages.map((lang) => `${lang.name} (${lang.level})`).join(" · ")}
        </p>
      </Section>
    </>
  );
}
