import { FadeIn } from "@/components/ui/FadeIn";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const paths = [
  {
    number: "01",
    title: "Services",
    href: "/services",
    text: "Websites, apps, and automation for any niche.",
  },
  {
    number: "02",
    title: "Process",
    href: "/process",
    text: "How a project moves from the first call to a live system.",
  },
  {
    number: "03",
    title: "About",
    href: "/about",
    text: "Background, client notes, and how I work.",
  },
] as const;

export function HomePaths() {
  return (
    <section className="relative py-8 md:py-12">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {paths.map((path, index) => (
            <FadeIn key={path.href} delay={index * 0.05}>
              <Link
                href={path.href}
                className="glass group flex h-full flex-col rounded-[1.5rem] border p-6 transition hover:-translate-y-0.5 hover:border-accent/40 md:p-7"
              >
                <span className="font-mono text-xs font-semibold tracking-[0.18em] text-accent">
                  {path.number}
                </span>
                <span className="font-display mt-4 flex items-center justify-between text-2xl font-semibold text-zinc-950">
                  {path.title}
                  <ArrowUpRight className="h-5 w-5 text-zinc-400 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
                </span>
                <span className="mt-2 text-sm leading-relaxed text-zinc-600">
                  {path.text}
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
