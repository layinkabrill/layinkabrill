import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of use placeholder for SmileBrilL.",
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-20 md:px-8">
      <Link href="/" className="text-sm text-accent hover:underline">
        ← Back to home
      </Link>
      <h1 className="font-display mt-6 text-3xl font-semibold text-zinc-900">
        Terms of Use
      </h1>
      <p className="mt-4 text-zinc-600">
        This is a placeholder terms page. Replace this content with your actual
        terms of service, engagement conditions, and disclaimers before
        launching the site.
      </p>
    </main>
  );
}
