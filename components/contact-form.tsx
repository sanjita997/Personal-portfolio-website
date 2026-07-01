"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { contactSchema, type ContactFormData } from "@/lib/contact-schema";

const services = [
  "AI Marketing Strategy",
  "AI Automation Consulting",
  "AI Content Creation",
  "Digital Marketing Consulting",
  "AI Tool Integration",
  "Business Growth Strategy"
];

const recipientEmail = "info@sanjitamhrzn.com";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  async function onSubmit(values: ContactFormData) {
    setStatus("idle");

    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values)
    }).catch(() => null);

    const response = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        _subject: `New consultation request from ${values.fullName}`,
        _template: "table",
        _captcha: "false",
        name: values.fullName,
        email: values.email,
        phone: values.phone,
        service: values.service,
        message: values.message || "No message provided"
      })
    });

    if (!response.ok) {
      setStatus("error");
      return;
    }

    reset();
    setStatus("success");
  }

  return (
    <form className="form-card" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="fullName">Full Name</label>
          <input id="fullName" {...register("fullName")} />
          {errors.fullName ? <span className="error">{errors.fullName.message}</span> : null}
        </div>
        <div className="field">
          <label htmlFor="email">Email Address</label>
          <input id="email" type="email" {...register("email")} />
          {errors.email ? <span className="error">{errors.email.message}</span> : null}
        </div>
        <div className="field">
          <label htmlFor="phone">Phone Number</label>
          <input id="phone" {...register("phone")} />
          {errors.phone ? <span className="error">{errors.phone.message}</span> : null}
        </div>
        <div className="field">
          <label htmlFor="service">Service Interested In</label>
          <select id="service" defaultValue="" {...register("service")}>
            <option value="" disabled>
              Select service
            </option>
            {services.map((service) => (
              <option key={service}>{service}</option>
            ))}
          </select>
          {errors.service ? <span className="error">{errors.service.message}</span> : null}
        </div>
        <div className="field full">
          <label htmlFor="message">Message optional</label>
          <textarea id="message" {...register("message")} />
          {errors.message ? <span className="error">{errors.message.message}</span> : null}
        </div>
      </div>
      <div className="button-row" style={{ marginTop: 20 }}>
        <button className="btn gold" type="submit" disabled={isSubmitting}>
          <Send size={18} /> {isSubmitting ? "Submitting..." : "Submit Form"}
        </button>
        {status === "success" ? <span className="success">Thank you. Your inquiry has been sent.</span> : null}
        {status === "error" ? <span className="error">Email delivery failed. Please email info@sanjitamhrzn.com directly.</span> : null}
      </div>
    </form>
  );
}
