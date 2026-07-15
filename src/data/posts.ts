export type Post = {
  slug: string;
  title: string;
  date: string; // ISO date
  excerpt: string;
  tags: string[];
};

// Placeholder entries — replace with your real posts.
// Add a new object here for each write-up; wire up individual post pages
// under src/app/blog/[slug]/page.tsx when you're ready for full post content.
export const posts: Post[] = [
  {
    slug: "hello-world",
    title: "Hello, world",
    date: "2026-07-15",
    excerpt:
      "First post placeholder. Replace this with a real write-up — a technical deep dive, a retrospective on a project, or notes from an investigation.",
    tags: ["meta"],
  },
];
