"use client";

import { Button } from "@/components/ui/Button";
import { navLinks, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function isActive(href: string, pathname: string) {
  if (href === "/portfolio") {
    return pathname === "/portfolio" || pathname.startsWith("/work");
  }
  return pathname === href;
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 bg-accent transition-shadow duration-300",
        scrolled || open ? "shadow-[0_10px_32px_rgba(0,0,0,0.18)]" : "",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-[4.25rem] md:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="SmileBrilL home">
          <Image
            src="/logo.jpg"
            alt="SmileBrilL logo"
            width={40}
            height={40}
            className="h-9 w-9 rounded-full border border-black/20 object-cover md:h-10 md:w-10"
            priority
          />
          <span className="font-display text-lg font-semibold tracking-tight text-black">
            Smile<span className="text-black">BrilL</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const active = isActive(link.href, pathname);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-black/10 hover:text-black",
                  active ? "bg-black/15 text-black" : "text-black/80",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button
            href="/contact"
            size="md"
            className="border-0 bg-black text-white shadow-none hover:bg-zinc-900 hover:shadow-none"
          >
            Book a Free Consultation
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-black/25 text-black lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "border-t border-black/15 bg-accent lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4">
          <p className="mb-2 text-xs tracking-[0.18em] text-black/60 uppercase">
            {siteConfig.tagline}
          </p>
          {navLinks.map((link) => {
            const active = isActive(link.href, pathname);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-lg px-3 py-3 text-base font-medium text-black hover:bg-black/10",
                  active && "bg-black/15",
                )}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          <Button
            href="/contact"
            className="mt-3 w-full border-0 bg-black text-white shadow-none hover:bg-zinc-900 hover:shadow-none"
            onClick={() => setOpen(false)}
          >
            Book a Free Consultation
          </Button>
        </div>
      </div>
    </header>
  );
}
