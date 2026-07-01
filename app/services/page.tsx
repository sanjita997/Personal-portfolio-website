import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { services } from "@/data/site";

export const metadata: Metadata = {
  title: "AI Marketing Services",
  description: "AI marketing strategy, automation consulting, content creation, tool integration, and business growth services."
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero compact-heading">
        <div className="container">
          <span className="eyebrow">Services</span>
          <h1>AI marketing services for future-ready businesses</h1>
          <p className="lead">
            From strategy to implementation, TechVerse Sanjita helps teams use AI with focus, confidence, and measurable
            growth intent.
          </p>
        </div>
      </section>

      <section className="section compact">
        <div className="container">
          <div className="card-grid">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container two-col">
          <SectionHeading eyebrow="Process" title="A clear path from discovery to growth" />
          <div className="panel">
            <ul className="panel-list">
              {["Discovery", "Strategy", "Implementation", "Optimization", "Growth"].map((step) => (
                <li key={step}>
                  <CheckCircle2 size={18} /> {step}
                </li>
              ))}
            </ul>
            <Link className="btn gold" href="/contact" style={{ marginTop: 24 }}>
              Start Consultation <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
