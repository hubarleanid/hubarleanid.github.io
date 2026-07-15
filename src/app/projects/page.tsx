import { Card } from "antd";
import { projects } from "@/data/projects";
import styles from "./page.module.scss";

export const metadata = {
  title: "Projects — Leanid Hubar",
};

export default function ProjectsPage() {
  return (
    <div className={styles.wrap}>
      <p className={`mono ${styles.note}`}>{"// placeholder entries — swap in real projects"}</p>
      <div className={styles.grid}>
        {projects.map((project) => (
          <Card key={project.title} bordered className={styles.card}>
            <div className={styles.title}>{project.title}</div>
            <div className={styles.description}>{project.description}</div>
            <div>
              {project.tags.map((tag) => (
                <span key={tag} className="aTag">
                  {tag}
                </span>
              ))}
            </div>
            <div className={`mono ${styles.links}`}>
              {project.link && (
                <a href={project.link} target="_blank" rel="noreferrer">
                  live →
                </a>
              )}
              {project.repo && (
                <a href={project.repo} target="_blank" rel="noreferrer">
                  source →
                </a>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
