import Section from "@/components/Section/Section";
import Card from "@/components/Card/Card";
import { posts } from "@/data/posts";

export const metadata = {
  title: "Blog — Leanid Hubar",
};

export default function BlogPage() {
  return (
    <Section eyebrow="Notes" title="Blog">
      <p>
        Write-ups on things I&apos;ve built, bugs I&apos;ve chased, or technology I&apos;ve evaluated. Add entries to{" "}
        <code>src/data/posts.ts</code> and give each one a page under{" "}
        <code>src/app/blog/[slug]/page.tsx</code> when you&apos;re ready to publish full content.
      </p>
      {posts.map((post) => (
        <Card
          key={post.slug}
          title={post.title}
          meta={new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
          description={post.excerpt}
          tags={post.tags}
        />
      ))}
    </Section>
  );
}
