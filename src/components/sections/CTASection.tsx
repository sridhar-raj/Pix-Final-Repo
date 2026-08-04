"use client";

import { useState, type FormEvent } from "react";
import { Grain } from "@/components/ui/Grain";
import { Reveal } from "@/components/ui/Reveal";

const FEATURES = ["Customizable Layouts", "Ongoing support", "Fast delivery"];

function CheckPointer({ text }: { text: string }) {
  return (
    <span className="flex items-center gap-2 text-sm font-bold text-white sm:text-base">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="9" fill="#d85040" fillOpacity="0.2" />
        <path d="M5.5 9.5L7.5 11.5L12.5 6.5" stroke="#d85040" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {text}
    </span>
  );
}

export function CTASection() {
  const [status, setStatus] = useState<"idle" | "success">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("success");
  }

  return (
    <section className="mx-auto flex w-full max-w-[1160px] px-5 sm:px-10">
      <Reveal y={40} scale={1} className="relative w-full overflow-hidden rounded-3xl border border-dark-15 bg-dark-08 px-6 py-14 text-center sm:px-16 sm:py-20">
        <Grain opacity={0.1} />
        <div className="relative flex flex-col items-center gap-6">
          <h2 className="max-w-xl text-[28px] font-bold leading-[1.2] text-white sm:text-[38px] md:text-[44px]">
            Stay Updated with Us
          </h2>
          <p className="max-w-md text-base text-grey-50 sm:text-lg">
            Be a part of our community and stay updated with exclusive news.
          </p>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {FEATURES.map((feature) => (
              <CheckPointer key={feature} text={feature} />
            ))}
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="w-full flex-1 rounded-[10px] border border-dark-15 bg-dark-03 px-5 py-3.5 text-base text-white placeholder:text-grey-50 focus:border-[#d85040] focus:outline-none"
            />
            <button
              type="submit"
              className="shrink-0 rounded-[10px] bg-[#d85040] px-6 py-3.5 text-base font-medium text-white transition-colors hover:bg-[#c2452f]"
            >
              {status === "success" ? "Thank you" : "Join Newsletter"}
            </button>
          </form>
          <p className="text-sm text-grey-50">No spam, just genuine updates!</p>
        </div>
      </Reveal>
    </section>
  );
}
