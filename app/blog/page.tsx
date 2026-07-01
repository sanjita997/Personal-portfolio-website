import type { Metadata } from "next";
import { Search } from "lucide-react";
import { BlogCard } from "@/components/blog-card";
import { SectionHeading } from "@/components/section-heading";
import { posts } from "@/data/site";

export const metadata: Metadata = {
  title: "AI Marketing Blog",
  description: "Insights on AI marketing, automation, business growth, technology, and digital marketing."
};

export default function BlogPage() {
  const categories = ["Artificial Intelligence", "AI Marketing", "Automation", "Business Growth", "Technology", "Digital Marketing"];

  return (
    <>
      <section className="page-hero compact-heading">
        <div className="container">
          <span className="eyebrow">Blog</span>
          <h1>Insights for AI-powered business growth</h1>
          <p className="lead">Modern thinking on Artificial Intelligence, automation, marketing, and digital strategy.</p>
        </div>
      </section>

      <section className="section compact">
        <div className="container blog-grid">
          <div>
            <SectionHeading eyebrow="Featured articles" title="Practical guides and strategic perspectives" />
            <div className="blog-list">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
          <aside className="panel">
            <div className="field">
              <label htmlFor="search">Search articles</label>
              <div style={{ position: "relative" }}>
                <Search size={18} style={{ position: "absolute", left: 14, top: 15, color: "var(--gold-2)" }} />
                <input id="search" placeholder="Search AI marketing" style={{ paddingLeft: 42 }} />
              </div>
            </div>
            <h3 style={{ marginTop: 28 }}>Categories</h3>
            <div className="footer-links" style={{ marginTop: 18 }}>
              {categories.map((category) => (
                <span className="btn ghost" key={category}>
                  {category}
                </span>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
