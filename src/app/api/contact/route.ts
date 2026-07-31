import { NextResponse } from "next/server";
import { Resend } from "resend";

import {
  escapeHtml,
  hasContactErrors,
  normalizeContactPayload,
  validateContactPayload,
} from "@/lib/contact-validation";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const payload = normalizeContactPayload(body);

    if (!payload) {
      return NextResponse.json(
        { ok: false, error: "invalid_request" },
        { status: 400 },
      );
    }

    const validationErrors = validateContactPayload(payload);

    if (hasContactErrors(validationErrors)) {
      return NextResponse.json(
        {
          ok: false,
          error: "validation_failed",
          fields: validationErrors,
        },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;

    if (!apiKey || !toEmail || !fromEmail) {
      console.error("Contact email environment variables are missing.");

      return NextResponse.json(
        { ok: false, error: "service_unavailable" },
        { status: 503 },
      );
    }

    const resend = new Resend(apiKey);
    const safeEmail = escapeHtml(payload.email);
    const safeSubject = escapeHtml(payload.subject);
    const safeMessage = escapeHtml(payload.message).replaceAll("\n", "<br />");

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: payload.email,
      subject: `Portfolio contact: ${payload.subject}`,
      text: [
        `From: ${payload.email}`,
        `Subject: ${payload.subject}`,
        "",
        payload.message,
      ].join("\n"),
      html: `
        <h2>New portfolio message</h2>
        <p><strong>From:</strong> ${safeEmail}</p>
        <p><strong>Subject:</strong> ${safeSubject}</p>
        <hr />
        <p>${safeMessage}</p>
      `,
    });

    if (error) {
      console.error("Resend rejected the contact email.", error);

      return NextResponse.json(
        { ok: false, error: "email_failed" },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Unexpected contact route error.", error);

    return NextResponse.json(
      { ok: false, error: "internal_error" },
      { status: 500 },
    );
  }
}
