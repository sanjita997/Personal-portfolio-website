import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CalendarCheck, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";
import { contact } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a free consultation with TechVerse Sanjita for AI marketing, automation, and business growth consulting."
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero contact-hero">
        <div className="container contact-hero-grid">
          <div>
            <span className="eyebrow">Contact</span>
            <h1>Book your free AI marketing consultation</h1>
            <p className="lead">
              Tell Sanjita about your goals, bottlenecks, and current marketing systems. You will get a focused next-step
              conversation.
            </p>
          </div>
          <div className="contact-visual" aria-hidden="true">
            <Image
              src="/ai-consultation-visual.svg"
              width={960}
              height={720}
              alt=""
              priority
            />
          </div>
        </div>
      </section>

      <section className="section compact">
        <div className="container blog-grid">
          <aside className="panel">
            <SectionHeading eyebrow="Details" title="Start the conversation" />
            <ul className="panel-list">
              <li>
                <Mail size={18} /> <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
              <li>
                <Phone size={18} /> <a href={`tel:${contact.phone.replaceAll(" ", "")}`}>{contact.phone}</a>
              </li>
              <li>
                <MapPin size={18} /> {contact.location}
              </li>
            </ul>
            <div className="panel" style={{ marginTop: 24 }}>
              <CalendarCheck size={26} color="var(--gold-2)" />
              <h3 style={{ marginTop: 14 }}>Book Your Free Consultation</h3>
              <p>Schedule a focused conversation about where AI can create the strongest marketing advantage.</p>
              <Link className="btn gold" href={`mailto:${contact.email}?subject=Free Consultation Request`}>
                Schedule Consultation
              </Link>
            </div>
          </aside>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
