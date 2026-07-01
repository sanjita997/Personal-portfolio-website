import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { BlogCard } from "@/components/blog-card";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { caseStudies, posts, services } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-content">
          <Image className="hero-logo" src="/techverse-logo.jpeg" width={665} height={176} alt="TechVerse Sanjita" priority />
          <span className="eyebrow">AI Marketing Expert & Consultant</span>
          <h1>
            Transforming Businesses Through <span className="gold-text">AI-Powered Marketing</span>
          </h1>
          <p className="lead">
            TechVerse Sanjita helps businesses leverage Artificial Intelligence, automation, and innovative marketing
            strategies to accelerate growth and stay ahead of the competition.
          </p>
          <div className="button-row">
            <Link className="btn gold" href="/contact">
              Book a Consultation <ArrowRight size={18} />
            </Link>
            <Link className="btn ghost" href="/services">
              Explore Services
            </Link>
          </div>
          <div className="hero-stats" aria-label="Business highlights">
            {[
              ["25+", "Projects Completed"],
              ["18+", "Happy Clients"],
              ["40+", "Campaigns Managed"]
            ].map(([value, label]) => (
              <div className="stat" key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <SectionHeading
            eyebrow="About"
            title="Meet Sanjita Maharjan"
            text="AI Marketing Expert & Consultant passionate about helping brands embrace the power of Artificial Intelligence and modern digital strategies."
          />
          <div className="panel">
            <h3>Where creativity meets Artificial Intelligence.</h3>
            <p>
              Sanjita brings together marketing strategy, AI workflows, automation, and brand thinking to help ambitious
              businesses modernize how they grow.
            </p>
            <Link className="btn gold" href="/about">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="section compact">
        <div className="container">
          <SectionHeading
            eyebrow="Services"
            title="Premium AI marketing systems for modern growth"
            text="Strategy, automation, content, implementation, and consulting built around practical business outcomes."
          />
          <div className="card-grid">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Why work with me" title="Focused expertise with measurable execution" center />
          <div className="stats-grid">
            {[
              ["25+", "Projects Completed"],
              ["18+", "Happy Clients"],
              ["4+", "Years of Experience"],
              ["40+", "Marketing Campaigns Managed"]
            ].map(([value, label]) => (
              <div className="stat" key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section compact">
        <div className="container">
          <SectionHeading eyebrow="Case studies" title="AI-enabled improvements across real business workflows" />
          <div className="case-grid">
            {caseStudies.map((study) => (
              <article className="card" key={study.industry}>
                <p className="blog-meta">{study.industry}</p>
                <h3>{study.problem}</h3>
                <ul className="panel-list">
                  <li>
                    <CheckCircle2 size={18} /> {study.solution}
                  </li>
                  <li>
                    <CheckCircle2 size={18} /> {study.results}
                  </li>
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Insights" title="Featured AI marketing thinking" />
          <div className="card-grid">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container two-col">
          <div>
            <span className="eyebrow">Next step</span>
            <h2>Ready to Future-Proof Your Business?</h2>
          </div>
          <div>
            <p className="lead" style={{ marginBottom: 22 }}>
              Start with a focused consultation and discover where AI can create the most leverage in your marketing.
            </p>
            <Link className="btn gold" href="/contact">
              Book Consultation <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
