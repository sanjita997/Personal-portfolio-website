import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Share2 } from "lucide-react";
import { BlogCard } from "@/components/blog-card";
import { posts } from "@/data/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.excerpt
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const related = posts.filter((item) => item.slug !== post.slug).slice(0, 2);

  return (
    <>
      <article>
        <section className="page-hero">
          <div className="container">
            <p className="blog-meta">
              {post.category} / {post.readTime}
            </p>
            <h1>{post.title}</h1>
            <p className="lead">{post.excerpt}</p>
            <div className="button-row" style={{ marginTop: 24 }}>
              <button className="btn ghost" type="button">
                <Share2 size={18} /> Share
              </button>
              <Link className="btn gold" href="/contact">
                Work with Sanjita
              </Link>
            </div>
          </div>
        </section>
        <section className="section compact">
          <div className="container two-col" style={{ alignItems: "start" }}>
            <div className="panel">
              {post.body.map((paragraph) => (
                <p key={paragraph} style={{ marginBottom: 18 }}>
                  {paragraph}
                </p>
              ))}
            </div>
            <aside className="panel">
              <h3>Author</h3>
              <p>
                Sanjita Maharjan is an AI Marketing Expert & Consultant helping businesses modernize growth through AI,
                automation, and digital strategy.
              </p>
            </aside>
          </div>
        </section>
      </article>

      <section className="section">
        <div className="container">
          <span className="eyebrow">Related articles</span>
          <div className="card-grid" style={{ marginTop: 22 }}>
            {related.map((item) => (
              <BlogCard key={item.slug} post={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
