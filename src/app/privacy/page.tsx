import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy placeholder for SmileBrilL.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-20 md:px-8">
      <Link href="/" className="text-sm text-accent hover:underline">
        ← Back to home
      </Link>
      <h1 className="font-display mt-6 text-3xl font-semibold text-zinc-900">
        Privacy Policy
      </h1>
      <p className="mt-4 text-zinc-600">
        This is a placeholder privacy policy page. Replace this content with your
        actual privacy practices before launch — including what data you collect
        via the contact form, how long you keep it, and how visitors can request
        deletion.
      </p>
    </main>
  );
}
