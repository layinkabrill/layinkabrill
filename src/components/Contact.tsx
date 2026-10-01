"use client";

import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { budgetRanges, contactInfo } from "@/data/site";
import { Calendar, Mail, MessageCircle, Phone } from "lucide-react";
import { type FormEvent, useState } from "react";

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.727-8.835L1.254 2.25H8.08l4.258 5.848L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  );
}

type FormState = {
  name: string;
  businessName: string;
  email: string;
  website: string;
  businessDoes: string;
  process: string;
  tools: string;
  budget: string;
  message: string;
};

const initial: FormState = {
  name: "",
  businessName: "",
  email: "",
  website: "",
  businessDoes: "",
  process: "",
  tools: "",
  budget: "",
  message: "",
};

export function Contact() {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>(
    {},
  );
  const [status, setStatus] = useState<"idle" | "success">("idle");
  const [submitting, setSubmitting] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function validate() {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Name is required.";
    if (!form.businessName.trim()) next.businessName = "Business name is required.";
    if (!form.email.trim()) next.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Enter a valid email.";
    if (!form.businessDoes.trim())
      next.businessDoes = "Tell me what your business does.";
    if (!form.process.trim())
      next.process = "Share the process you'd like to automate.";
    return next;
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const next = validate();
    if (Object.keys(next).length) {
      setErrors(next);
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    setStatus("success");
    setForm(initial);
  }

  const fieldClass =
    "w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none transition focus:border-accent/50 focus:ring-2 focus:ring-accent/20";

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's Find What We Can Automate"
      description="Share a few details about your business and the process you want to improve. I'll follow up with next steps."
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr]">
        <FadeIn>
          <form
            onSubmit={onSubmit}
            className="glass rounded-2xl border p-5 md:p-7"
            noValidate
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" error={errors.name}>
                <input
                  className={fieldClass}
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  autoComplete="name"
                  required
                />
              </Field>
              <Field label="Business Name" error={errors.businessName}>
                <input
                  className={fieldClass}
                  value={form.businessName}
                  onChange={(e) => update("businessName", e.target.value)}
                  required
                />
              </Field>
              <Field label="Email" error={errors.email}>
                <input
                  type="email"
                  className={fieldClass}
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  autoComplete="email"
                  required
                />
              </Field>
              <Field label="Business Website">
                <input
                  className={fieldClass}
                  value={form.website}
                  onChange={(e) => update("website", e.target.value)}
                  placeholder="https://"
                />
              </Field>
            </div>

            <div className="mt-4 grid gap-4">
              <Field
                label="What does your business do?"
                error={errors.businessDoes}
              >
                <textarea
                  className={`${fieldClass} min-h-[88px] resize-y`}
                  value={form.businessDoes}
                  onChange={(e) => update("businessDoes", e.target.value)}
                  required
                />
              </Field>
              <Field
                label="What process would you like to automate?"
                error={errors.process}
              >
                <textarea
                  className={`${fieldClass} min-h-[88px] resize-y`}
                  value={form.process}
                  onChange={(e) => update("process", e.target.value)}
                  required
                />
              </Field>
              <Field label="Current tools you use">
                <input
                  className={fieldClass}
                  value={form.tools}
                  onChange={(e) => update("tools", e.target.value)}
                  placeholder="CRM, Gmail, Sheets, WhatsApp..."
                />
              </Field>
              <Field label="Budget range">
                <select
                  className={fieldClass}
                  value={form.budget}
                  onChange={(e) => update("budget", e.target.value)}
                >
                  <option value="">Select a range</option>
                  {budgetRanges.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Message">
                <textarea
                  className={`${fieldClass} min-h-[100px] resize-y`}
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                />
              </Field>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button type="submit" size="lg" disabled={submitting}>
                {submitting
                  ? "Sending..."
                  : "Request an Automation Consultation"}
              </Button>
              {status === "success" && (
                <p className="text-sm text-emerald-600" role="status">
                  Thanks — your request is ready. Connect your form backend or
                  email to receive submissions.
                </p>
              )}
            </div>
          </form>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="space-y-4">
            <ContactLink
              icon={Mail}
              label="Email"
              value={contactInfo.email}
              href={`mailto:${contactInfo.email}`}
            />
            <ContactLink
              icon={Phone}
              label="Phone"
              value={contactInfo.phone}
              href={contactInfo.phoneHref}
            />
            <ContactLink
              icon={MessageCircle}
              label="WhatsApp"
              value={contactInfo.phone}
              href={contactInfo.whatsapp}
            />
            <ContactLink
              icon={DiscordIcon}
              label="Discord"
              value={contactInfo.discord}
              href={contactInfo.discordHref}
            />
            <ContactLink
              icon={XIcon}
              label="X / Twitter"
              value={contactInfo.twitter}
              href={contactInfo.twitterHref}
            />
            <ContactLink
              icon={Calendar}
              label="Book a call"
              value={contactInfo.calendlyLabel}
              href={contactInfo.calendly}
              note="Available anytime — message to schedule"
            />
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-zinc-700">
        {label}
      </span>
      {children}
      {error && (
        <span className="mt-1 block text-xs text-accent" role="alert">
          {error}
        </span>
      )}
    </label>
  );
}

function ContactLink({
  icon: Icon,
  label,
  value,
  href,
  note,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href: string;
  note?: string;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className="glass glass-hover block rounded-2xl border p-5"
    >
      <div className="flex items-start gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 text-accent">
          <Icon className="h-5 w-5" />
        </span>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-zinc-900">{label}</p>
          <p className="mt-1 truncate text-sm text-zinc-600">{value}</p>
          {note ? <p className="mt-1 text-xs text-zinc-500">{note}</p> : null}
        </div>
      </div>
    </a>
  );
}
