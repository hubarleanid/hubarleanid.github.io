import { Card } from "antd";
import { posts } from "@/data/posts";
import styles from "./page.module.scss";

export const metadata = {
  title: "Blog — Leanid Hubar",
};

export default function BlogPage() {
  return (
    <div className={styles.wrap}>
      <p className={`mono ${styles.note}`}>
        {"// notes on things I've built, bugs I've chased, or tech I've evaluated"}
      </p>
      {posts.map((post) => (
        <Card key={post.slug} bordered className={styles.card}>
          <div className={styles.head}>
            <div className={styles.title}>{post.title}</div>
            <div className={`mono ${styles.date}`}>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
          </div>
          <div className={styles.excerpt}>{post.excerpt}</div>
          <div>
            {post.tags.map((tag) => (
              <span key={tag} className="aTag">
                {tag}
              </span>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
}
