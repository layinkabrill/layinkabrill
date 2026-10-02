import { ProblemSection } from "@/components/ProblemSection";
import { Qualification } from "@/components/Qualification";
import { Services } from "@/components/Services";
import { SiteFrame } from "@/components/SiteFrame";
import { Tools } from "@/components/Tools";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Website development, app development, and AI automation for businesses in any niche.",
};

export default function ServicesPage() {
  return (
    <SiteFrame>
      <ProblemSection />
      <Services />
      <Tools />
      <Qualification />
    </SiteFrame>
  );
}
