import type {
  ContactFieldErrors,
  ContactFormPayload,
} from "@/types/portfolio";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const CONTACT_LIMITS = {
  email: 254,
  subjectMin: 3,
  subjectMax: 120,
  messageMin: 20,
  messageMax: 3000,
  minimumCompletionTimeMs: 1500,
} as const;

export function normalizeContactPayload(
  value: unknown,
): ContactFormPayload | null {
  if (!value || typeof value !== "object") {
    return null;
  }

  const payload = value as Record<string, unknown>;

  return {
    email: typeof payload.email === "string" ? payload.email.trim() : "",
    subject:
      typeof payload.subject === "string" ? payload.subject.trim() : "",
    message:
      typeof payload.message === "string" ? payload.message.trim() : "",
    company:
      typeof payload.company === "string" ? payload.company.trim() : "",
    startedAt:
      typeof payload.startedAt === "number" ? payload.startedAt : 0,
  };
}

export function validateContactPayload(
  payload: ContactFormPayload,
): ContactFieldErrors {
  const errors: ContactFieldErrors = {};

  if (
    !EMAIL_PATTERN.test(payload.email) ||
    payload.email.length > CONTACT_LIMITS.email
  ) {
    errors.email = "invalid_email";
  }

  if (
    payload.subject.length < CONTACT_LIMITS.subjectMin ||
    payload.subject.length > CONTACT_LIMITS.subjectMax
  ) {
    errors.subject = "invalid_subject";
  }

  if (
    payload.message.length < CONTACT_LIMITS.messageMin ||
    payload.message.length > CONTACT_LIMITS.messageMax
  ) {
    errors.message = "invalid_message";
  }

  if (payload.company) {
    errors.form = "spam_detected";
  }

  if (
    !Number.isFinite(payload.startedAt) ||
    Date.now() - payload.startedAt < CONTACT_LIMITS.minimumCompletionTimeMs
  ) {
    errors.form = "submission_too_fast";
  }

  return errors;
}

export function hasContactErrors(errors: ContactFieldErrors): boolean {
  return Object.keys(errors).length > 0;
}

export function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
