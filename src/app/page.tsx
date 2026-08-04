import { Navbar } from "@/components/nav/Navbar";
import { Hero } from "@/components/hero/Hero";
import { SeeHowSection } from "@/components/sections/SeeHowSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { PartnershipSection } from "@/components/sections/PartnershipSection";
import { PerformanceSection } from "@/components/sections/PerformanceSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { VersusSection } from "@/components/sections/VersusSection";
import { InsightSection } from "@/components/sections/InsightSection";
import { ToolsSection } from "@/components/sections/ToolsSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col gap-24 pb-24 sm:gap-32 sm:pb-32">
        <Hero />
        <SeeHowSection />
        <SkillsSection />
        <PartnershipSection />
        <PerformanceSection />
        <PricingSection />
        <VersusSection />
        <InsightSection />
        <ToolsSection />
        <WorkSection />
        <TestimonialSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
