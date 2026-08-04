"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { OrangeButton } from "@/components/ui/OrangeButton";

const FAQS = [
  {
    question: "Can you work with clients remotely?",
    answer:
      "Absolutely! I have experience working with clients from all around the world. Through effective communication channels such as email, video calls, and project management tools, I ensure seamless collaboration regardless of geographical location.",
  },
  {
    question: "How long does it typically take to complete a web design project?",
    answer:
      "The timeline for each project varies depending on its scope and complexity. Factors such as the number of pages, functionalities required, and client feedback process can impact the timeline. Upon discussing your project requirements, I will provide you with a realistic timeline and keep you updated throughout the process.",
  },
  {
    question: "Do you offer website maintenance services?",
    answer:
      "Yes, I offer website maintenance services to ensure your website remains up to date, secure, and optimized. From content updates and bug fixes to performance optimization and security enhancements, I can provide ongoing support to keep your website running smoothly.",
  },
  {
    question: "Can you optimize my website for search engines?",
    answer:
      "Certainly! I incorporate search engine optimization (SEO) best practices into my web design process. This includes using relevant keywords, optimizing meta tags, creating search engine-friendly URLs, and ensuring your website has a solid foundation for better search engine visibility. However, please note that ongoing SEO efforts require specialized expertise and may require a dedicated SEO professional.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer:
      "Absolutely! Mobile responsiveness is a top priority in today's digital landscape. I design and develop websites that are fully responsive and adapt seamlessly to various devices and screen sizes. Your website will provide an optimal user experience whether accessed from desktops, smartphones, or tablets.",
  },
];

function FAQItem({
  question,
  answer,
  open,
  onToggle,
}: {
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="w-full rounded-2xl border border-dark-15 bg-dark-06">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="text-base font-bold text-white sm:text-lg">{question}</span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-dark-08 text-white transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 0V14M0 7H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <div
        className="grid transition-all duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-base text-grey-50">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="mx-auto flex w-full max-w-[800px] flex-col items-center gap-10 px-5 sm:px-10">
      <SectionHeading
        heading="Frequently Asked Question"
        paragraph="If your question isn't addressed here, feel free to reach out—I'm always ready to provide further assistance"
      />
      <div className="flex w-full flex-col gap-4">
        {FAQS.map((faq, i) => (
          <FAQItem
            key={faq.question}
            question={faq.question}
            answer={faq.answer}
            open={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
          />
        ))}
      </div>
      <OrangeButton href="/contact">Ask a Question</OrangeButton>
    </section>
  );
}
