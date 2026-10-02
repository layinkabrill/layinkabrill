import { contactInfo, navLinks, services, siteConfig } from "@/data/site";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-2 md:px-8 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Link href="/" className="inline-flex items-center gap-3">
            <Image
              src="/logo.jpg"
              alt="SmileBrilL logo"
              width={36}
              height={36}
              className="h-9 w-9 rounded-full border border-accent/50 object-cover"
            />
            <span className="font-display text-lg font-semibold text-white">
              Smile<span className="text-accent">BrilL</span>
            </span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-zinc-400">
            {siteConfig.tagline}. I build websites, apps, and intelligent
            automation for businesses in any niche.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-zinc-500 uppercase">
            Navigation
          </p>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-zinc-400 transition hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-zinc-500 uppercase">
            Services
          </p>
          <ul className="mt-4 space-y-2">
            {services
              .filter((service) =>
                [
                  "website-development",
                  "app-development",
                  "workflow-automation",
                  "ai-customer-support",
                  "lead-management",
                  "ai-agents",
                ].includes(service.id),
              )
              .map((service) => (
              <li key={service.id}>
                <Link
                  href="/services"
                  className="text-sm text-zinc-400 transition hover:text-white"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-zinc-500 uppercase">
            Contact
          </p>
          <ul className="mt-4 space-y-2 text-sm text-zinc-400">
            <li>
              <a
                href={`mailto:${contactInfo.email}`}
                className="hover:text-white"
              >
                {contactInfo.email}
              </a>
            </li>
            <li>
              <a href={contactInfo.phoneHref} className="hover:text-white">
                {contactInfo.phone}
              </a>
            </li>
            <li>
              <a
                href={contactInfo.whatsapp}
                className="hover:text-white"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href={contactInfo.twitterHref}
                className="hover:text-white"
                target="_blank"
                rel="noreferrer"
              >
                {contactInfo.twitter}
              </a>
            </li>
            <li>
              <a
                href={contactInfo.calendly}
                className="hover:text-white"
                target="_blank"
                rel="noreferrer"
              >
                Book a call — {contactInfo.calendlyLabel}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-zinc-800">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-6 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between md:px-8">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="/privacy" className="hover:text-zinc-300">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-zinc-300">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
