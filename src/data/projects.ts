export type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  repo?: string;
};

// Each card renders title, description, tags, and optional links.
export const projects: Project[] = [
  {
    title: "Air Control (2017)",
    description:
      "A browser game where you play an air traffic controller: click a plane and draw its flight path to one of four runways while avoiding collisions, as difficulty ramps up. A web take on the mobile game Air Control 2, written in modular ES2015 classes on HTML5 Canvas with Web Audio API sound and full-screen mode, bundled with Webpack and Babel. Best played on desktop with a mouse.",
    tags: ["JavaScript (ES2015)", "HTML5 Canvas", "Web Audio API", "Webpack", "Babel", "jQuery", "Lodash"],
    link: "https://hubarleanid.github.io/LeonidH.github.io/",
    repo: "https://github.com/hubarleanid/LeonidH.github.io",
  },
];
