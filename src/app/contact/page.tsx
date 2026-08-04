import type { Metadata } from "next";
import { Navbar } from "@/components/nav/Navbar";
import { Footer } from "@/components/Footer";
import { ContactHero } from "@/components/contact/ContactHero";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Contact | Pix",
  description:
    "Ready to connect and collaborate, drop me a line and let's turn ideas into reality!",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col gap-24 pb-24 sm:gap-32 sm:pb-32">
        <ContactHero />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
