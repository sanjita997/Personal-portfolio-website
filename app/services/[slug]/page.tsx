import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { FAQ } from "@/components/faq";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/data/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return {};
  }

  return {
    title: service.title,
    description: service.summary
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="icon-box">
            <Icon size={24} />
          </div>
          <span className="eyebrow">Service</span>
          <h1>{service.title}</h1>
          <p className="lead">{service.summary}</p>
          <div className="button-row" style={{ marginTop: 26 }}>
            <Link className="btn gold" href="/contact">
              Book Consultation <ArrowRight size={18} />
            </Link>
            <Link className="btn ghost" href="/services">
              All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="section compact">
        <div className="container two-col">
          <SectionHeading eyebrow="Overview" title="Designed for practical business impact" text={service.overview} />
          <div className="panel">
            <h3>Benefits</h3>
            <ul className="panel-list">
              {service.benefits.map((benefit) => (
                <li key={benefit}>
                  <CheckCircle2 size={18} /> {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section compact">
        <div className="container">
          <SectionHeading eyebrow="Challenges solved" title="Common bottlenecks this service improves" />
          <div className="card-grid">
            {service.challenges.map((challenge) => (
              <article className="card" key={challenge}>
                <h3>{challenge}</h3>
                <p>Turn this obstacle into a focused workflow, campaign, or operating improvement.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section compact">
        <div className="container two-col">
          <SectionHeading eyebrow="Process" title="From first insight to optimized growth" />
          <div className="timeline">
            {["Discovery", "Strategy", "Implementation", "Optimization", "Growth"].map((step, index) => (
              <article className="timeline-item" key={step}>
                <strong className="gold-text">Step {index + 1}</strong>
                <p>{step}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="FAQs" title="Questions before getting started" />
          <FAQ />
        </div>
      </section>
    </>
  );
}
