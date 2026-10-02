import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import type { ReactNode } from "react";

export function SiteFrame({
  children,
  flush = false,
}: {
  children: ReactNode;
  flush?: boolean;
}) {
  return (
    <>
      <Navbar />
      <main className={flush ? undefined : "pt-16 md:pt-[4.25rem]"}>{children}</main>
      <Footer />
    </>
  );
}
