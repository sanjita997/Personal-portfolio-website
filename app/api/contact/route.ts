import { promises as fs } from "fs";
import path from "path";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact-schema";

const contactRecipient = process.env.CONTACT_TO ?? "info@sanjitamhrzn.com";

function formatSubmissionText(submission: Record<string, unknown>) {
  return Object.entries(submission)
    .filter(([, value]) => value !== undefined && value !== "")
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");
}

async function sendViaSmtp(submission: Record<string, unknown>) {
  if (
    !process.env.SMTP_HOST ||
    !process.env.SMTP_USER ||
    !process.env.SMTP_PASS ||
    process.env.SMTP_PASS === "replace_with_gmail_app_password" ||
    process.env.SMTP_PASS === "your_gmail_app_password"
  ) {
    return { sent: false, method: "smtp", detail: "SMTP is not configured." };
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  await transporter.sendMail({
    from: process.env.CONTACT_FROM ?? process.env.SMTP_USER,
    to: contactRecipient,
    replyTo: String(submission.email),
    subject: `New consultation request from ${submission.fullName}`,
    text: formatSubmissionText(submission)
  });

  return { sent: true, method: "smtp", detail: "Email sent by SMTP." };
}

async function sendViaFormSubmit(submission: Record<string, unknown>) {
  if (process.env.ENABLE_FORMSUBMIT_FALLBACK !== "true") {
    return {
      sent: false,
      method: "formsubmit",
      detail: "FormSubmit fallback is disabled. Configure Gmail SMTP for reliable email delivery."
    };
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 12000);

  try {
    const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(contactRecipient)}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        _subject: `New consultation request from ${submission.fullName}`,
        _template: "table",
        _captcha: "false",
        name: submission.fullName,
        email: submission.email,
        phone: submission.phone,
        service: submission.service,
        message: submission.message || "No message provided",
        submittedAt: submission.createdAt
      }),
      signal: controller.signal
    });

    const result = await response.json().catch(() => null);

    return {
      sent: response.ok,
      method: "formsubmit",
      detail: result?.message ?? result?.success ?? `FormSubmit returned HTTP ${response.status}.`
    };
  } finally {
    clearTimeout(timeout);
  }
}

export async function POST(request: Request) {
  const payload = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid contact request" }, { status: 400 });
  }

  const submission = {
    ...parsed.data,
    createdAt: new Date().toISOString()
  };

  const dataDir = path.join(process.cwd(), ".data");
  await fs.mkdir(dataDir, { recursive: true });
  await fs.appendFile(path.join(dataDir, "contact-submissions.jsonl"), `${JSON.stringify(submission)}\n`);

  if (process.env.API_EMAIL_DELIVERY !== "true") {
    return NextResponse.json({ ok: true, delivery: { sent: false, method: "local-backup" } });
  }

  try {
    const smtpResult = await sendViaSmtp(submission);
    const delivery = smtpResult.sent ? smtpResult : await sendViaFormSubmit(submission);

    if (!delivery.sent) {
      return NextResponse.json({ error: "Email delivery failed", delivery }, { status: 502 });
    }

    return NextResponse.json({ ok: true, delivery });
  } catch (error) {
    console.error("Contact form email delivery failed", error);
    return NextResponse.json({ error: "Email delivery failed" }, { status: 502 });
  }
}
