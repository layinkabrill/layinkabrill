import { FinalCTA } from "@/components/FinalCTA";
import { Hero } from "@/components/Hero";
import { HomePaths } from "@/components/HomePaths";
import { Portfolio } from "@/components/Portfolio";
import { SiteFrame } from "@/components/SiteFrame";

export default function Home() {
  return (
    <SiteFrame flush>
      <Hero />
      <Portfolio />
      <HomePaths />
      <FinalCTA />
    </SiteFrame>
  );
}
