export type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  repo?: string;
};

// Placeholder entries — replace with your real projects and investigations.
// Each card renders title, description, tags, and optional links.
export const projects: Project[] = [
  {
    title: "Project title goes here",
    description:
      "One or two sentences on what this project is, the problem it solves, and why it's interesting. Replace this placeholder with a real write-up.",
    tags: [".NET", "Azure"],
    link: "#",
    repo: "#",
  },
  {
    title: "Another project",
    description:
      "Short description of scope, your role, and the outcome. Link to a live demo and/or the source repo below.",
    tags: ["React", "TypeScript"],
    link: "#",
    repo: "#",
  },
  {
    title: "An investigation or deep dive",
    description:
      "Investigations don't need to be full projects — a focused write-up on a bug you chased, a performance issue you diagnosed, or a technology you evaluated works well here too.",
    tags: ["Kafka", "Kubernetes"],
    repo: "#",
  },
];
