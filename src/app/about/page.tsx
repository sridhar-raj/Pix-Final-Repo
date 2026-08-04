import type { Metadata } from "next";
import { Navbar } from "@/components/nav/Navbar";
import { Footer } from "@/components/Footer";
import { AboutHero } from "@/components/about/AboutHero";
import { MyStorySection } from "@/components/about/MyStorySection";
import { TimelineSection } from "@/components/about/TimelineSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About Me | Pix",
  description:
    "Learn more about the person behind the pixels. Discover my journey, skills, and passion for creating captivating digital experiences.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col gap-24 pb-24 sm:gap-32 sm:pb-32">
        <AboutHero />
        <MyStorySection />
        <TimelineSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
