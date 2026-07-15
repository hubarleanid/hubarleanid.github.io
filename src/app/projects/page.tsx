import Section from "@/components/Section/Section";
import Card from "@/components/Card/Card";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects — Leanid Hubar",
};

export default function ProjectsPage() {
  return (
    <Section eyebrow="Work" title="Projects & investigations">
      <p>
        A running list of things I&apos;ve built or dug into outside of client work. Edit{" "}
        <code>src/data/projects.ts</code> to replace these placeholders with the real thing.
      </p>
      {projects.map((project) => (
        <Card
          key={project.title}
          title={project.title}
          description={project.description}
          tags={project.tags}
        >
          <div>
            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer">
                Live →
              </a>
            )}{" "}
            {project.repo && (
              <a href={project.repo} target="_blank" rel="noreferrer">
                Source →
              </a>
            )}
          </div>
        </Card>
      ))}
    </Section>
  );
}
