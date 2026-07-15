import { Button, Card } from "antd";
import { profile, skillGroups } from "@/data/profile";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <p className={`mono ${styles.kicker}`}>$ whoami --verbose</p>
        <h1 className={styles.title}>{profile.name}</h1>
        <p className={`mono ${styles.subtitle}`}>
          {profile.title.split("/")[0].trim()} <span className={styles.accent}>/</span>{" "}
          {profile.title.split("/")[1]?.trim()}
        </p>
        <p className={styles.summary}>{profile.summary}</p>
        <div className={styles.actions}>
          <Button type="primary" href={`mailto:${profile.email}`}>
            Get in touch
          </Button>
          <Button href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn ↗
          </Button>
          <Button href={profile.github} target="_blank" rel="noreferrer">
            GitHub ↗
          </Button>
        </div>
      </section>

      <div className={styles.tabPanel}>
        <div className={styles.skillGrid}>
          {skillGroups.map((group, i) => (
            <Card key={group.label} bordered className={styles.skillCard}>
              <div className={styles.skillHead}>
                <span className={styles.skillNum}>{String(i + 1).padStart(2, "0")}</span>
                <span className={styles.skillLabel}>{group.label}</span>
              </div>
              <div>
                {group.items.map((item) => (
                  <span key={item} className="aTag">
                    {item}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <Card bordered className={styles.metaCard}>
          <div>
            <p className={`mono ${styles.metaLabel}`}>EDUCATION</p>
            <div className={styles.metaBody}>
              {profile.education.map((edu) => (
                <div key={edu.degree}>
                  {edu.degree} — {edu.school}, {edu.year}
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className={`mono ${styles.metaLabel}`}>LANGUAGES</p>
            <div className={styles.metaBody}>
              {profile.languages.map((lang) => (
                <div key={lang.name}>
                  {lang.name} — {lang.level}
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
