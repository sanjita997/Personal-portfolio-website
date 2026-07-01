import Link from "next/link";
import type { posts } from "@/data/site";

type Post = (typeof posts)[number];

export function BlogCard({ post }: { post: Post }) {
  return (
    <article className="card">
      <p className="blog-meta">
        {post.category} / {post.readTime}
      </p>
      <h3>{post.title}</h3>
      <p>{post.excerpt}</p>
      <Link className="link" href={`/blog/${post.slug}`}>
        Read article
      </Link>
    </article>
  );
}
