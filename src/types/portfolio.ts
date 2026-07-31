export type Locale = "en" | "fr";

export interface ContactFormPayload {
  email: string;
  subject: string;
  message: string;
  company?: string;
  startedAt: number;
}

export type ContactFieldErrors = Partial<
  Record<"email" | "subject" | "message" | "form", string>
>;
