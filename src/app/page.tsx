import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Discovery } from "@/components/Discovery";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Navbar } from "@/components/Navbar";
import { Portfolio } from "@/components/Portfolio";
import { ProblemSection } from "@/components/ProblemSection";
import { Qualification } from "@/components/Qualification";
import { Services } from "@/components/Services";
import { Tools } from "@/components/Tools";
import { WhyWorkWithMe } from "@/components/WhyWorkWithMe";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <Services />
        <HowItWorks />
        <Portfolio />
        <Tools />
        <WhyWorkWithMe />
        <About />
        <Discovery />
        <Qualification />
        <Contact />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
