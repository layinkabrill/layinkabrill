import { About } from "@/components/About";
import { FAQ } from "@/components/FAQ";
import { SiteFrame } from "@/components/SiteFrame";
import { WhyWorkWithMe } from "@/components/WhyWorkWithMe";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "About SmileBrilL — websites, apps, and AI automation, plus notes from people who have worked together.",
};

export default function AboutPage() {
  return (
    <SiteFrame>
      <About />
      <WhyWorkWithMe />
      <FAQ />
    </SiteFrame>
  );
}
