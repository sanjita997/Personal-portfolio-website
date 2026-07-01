import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { expertise } from "@/data/site";

export const metadata: Metadata = {
  title: "About Sanjita Maharjan",
  description: "Meet Sanjita Maharjan, AI Marketing Expert & Consultant behind TechVerse Sanjita."
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">About</span>
          <h1>Sanjita Maharjan</h1>
          <p className="lead">AI Marketing Expert & Consultant. Where creativity meets Artificial Intelligence.</p>
        </div>
      </section>

      <section className="section compact">
        <div className="container two-col">
          <SectionHeading
            eyebrow="My story"
            title="Marketing strategy shaped for the AI era"
            text="Sanjita helps brands move from curiosity about AI to confident implementation, combining creative marketing judgment with practical automation and digital growth systems."
          />
          <div className="panel">
            <h3>Consulting philosophy</h3>
            <p>
              The best AI systems are clear, human-centered, and useful. Every recommendation is designed around real
              workflows, business goals, and the audience a brand wants to serve.
            </p>
            <ul className="panel-list">
              {["Adopt AI with clarity", "Improve productivity", "Increase revenue", "Modernize operations"].map((item) => (
                <li key={item}>
                  <CheckCircle2 size={18} /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section compact">
        <div className="container">
          <SectionHeading eyebrow="Core expertise" title="A strategic blend of AI, marketing, and business growth" />
          <div className="feature-grid">
            {expertise.map((item) => {
              const Icon = item.icon;
              return (
                <article className="card" key={item.title}>
                  <div className="icon-box">
                    <Icon size={22} />
                  </div>
                  <h3>{item.title}</h3>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Timeline" title="Professional journey" />
          <div className="timeline">
            {[
              ["Education", "Built a foundation in business, marketing, research, and digital communication."],
              ["Experience", "Supported brands with marketing strategy, campaign planning, automation, and AI adoption."],
              ["Projects", "Created content systems, lead workflows, SEO plans, and AI-assisted business processes."],
              ["Achievements", "Positioned TechVerse Sanjita as a premium AI marketing consultancy for modern businesses."]
            ].map(([label, text]) => (
              <article className="timeline-item" key={label}>
                <strong className="gold-text">{label}</strong>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
