import { Discovery } from "@/components/Discovery";
import { HowItWorks } from "@/components/HowItWorks";
import { SiteFrame } from "@/components/SiteFrame";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Process",
  description:
    "How a SmileBrilL project moves from the first conversation to a live website, app, or automation.",
};

export default function ProcessPage() {
  return (
    <SiteFrame>
      <HowItWorks />
      <Discovery />
    </SiteFrame>
  );
}
