import { Contact } from "@/components/Contact";
import { FinalCTA } from "@/components/FinalCTA";
import { SiteFrame } from "@/components/SiteFrame";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a consultation with SmileBrilL by email, phone, or WhatsApp.",
};

export default function ContactPage() {
  return (
    <SiteFrame>
      <Contact />
      <FinalCTA />
    </SiteFrame>
  );
}
