import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { PortfolioGallery } from "@/components/PortfolioGallery";
import { Button } from "@/components/ui/Button";
import { projects } from "@/data/projects";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Apps, websites, and AI automations by SmileBrilL — mobile products, business sites, and n8n, Make.com, and Zapier workflows.",
};

export default function PortfolioPage() {
  const automationCount = projects.filter(
    (p) => p.category === "Automation",
  ).length;
  const websiteCount = projects.filter((p) => p.category === "Website").length;
  const appCount = projects.filter((p) => p.category === "App").length;

  const stats = [
    { value: projects.length, label: "Projects" },
    { value: appCount, label: "Apps" },
    { value: websiteCount, label: "Websites" },
    { value: automationCount, label: "Automations" },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-[4.25rem]">
        <section className="relative">
          <div className="mx-auto w-full max-w-6xl px-5 pt-14 pb-10 md:px-8 md:pt-20 md:pb-14">
            <Link
              href="/"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-zinc-500 hover:text-zinc-900"
            >
              <ArrowLeft
                className="h-4 w-4 transition-transform group-hover:-translate-x-0.5"
                aria-hidden
              />
              Back to home
            </Link>
            <p className="mt-8 mb-3 text-xs font-semibold tracking-[0.22em] text-accent uppercase">
              Portfolio
            </p>
            <h1 className="font-display max-w-3xl text-4xl leading-tight font-semibold tracking-tight text-zinc-900 md:text-5xl lg:text-6xl">
              Apps, websites &amp; automations I&apos;ve built.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-600 md:text-lg">
              Mobile apps for property, food, retail, delivery, and shipping,
              websites for real businesses, and automations built in n8n,
              Make.com, and Zapier. Click any screenshot to see it full size.
            </p>

            <dl className="mt-10 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass rounded-2xl border px-4 py-4 text-center md:px-5"
                >
                  <dt className="text-xs font-medium tracking-[0.14em] text-zinc-500 uppercase">
                    {stat.label}
                  </dt>
                  <dd className="font-display mt-1 text-3xl font-semibold text-zinc-900">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="relative pb-20 md:pb-28">
          <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
            <PortfolioGallery />

            <div className="glass mt-16 flex flex-col items-center gap-5 rounded-[1.75rem] border px-6 py-10 text-center md:flex-row md:justify-between md:px-10 md:text-left">
              <div>
                <p className="font-display text-2xl font-semibold text-zinc-900">
                  Have a similar project in mind?
                </p>
                <p className="mt-1.5 text-sm text-zinc-600">
                  Tell me what you want to build or automate and I&apos;ll
                  follow up with next steps.
                </p>
              </div>
              <Button href="/#contact" size="lg" className="group shrink-0">
                Book a Free Consultation
                <ArrowUpRight
                  className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden
                />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
