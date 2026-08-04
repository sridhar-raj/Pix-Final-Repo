"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const FEATURES = [
  "Enjoy limitless design requests.",
  "One request at a time",
  "Average 48 hours delivery",
  "Unlimited brands",
  "Easy credit-card payments",
  "Pause or cancel anytime",
];

const PLANS = [
  { name: "Basic Plan", monthly: 1995, yearly: 19150, popular: false },
  { name: "Standard Plan", monthly: 3995, yearly: 38350, popular: true },
  { name: "Pro Plan", monthly: 5995, yearly: 57550, popular: false },
];

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0">
      <circle cx="10" cy="10" r="10" fill="#d85040" fillOpacity="0.15" />
      <path
        d="M6 10.5L8.5 13L14 7"
        stroke="#d85040"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlanCard({
  name,
  price,
  popular,
}: {
  name: string;
  price: number;
  popular: boolean;
}) {
  return (
    <div
      className={`flex flex-1 flex-col gap-6 rounded-2xl border p-8 ${
        popular ? "border-[#d85040] bg-dark-08" : "border-dark-15 bg-dark-06"
      }`}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-white">{name}</h3>
        {popular && (
          <span className="rounded-full bg-[#d85040] px-3 py-1 text-xs font-bold text-white">
            Popular
          </span>
        )}
      </div>
      <div className="flex items-end gap-1">
        <span className="text-lg font-bold text-white">$</span>
        <span
          className="text-5xl font-extrabold text-white"
          style={{ fontFamily: "var(--font-inter-tight)" }}
        >
          {price.toLocaleString()}
        </span>
        <span className="pb-1 text-base text-grey-50">/per month</span>
      </div>
      <p className="text-sm text-grey-50">Pause or cancel anytime.</p>
      <a
        href="/contact"
        className={`w-full rounded-[10px] py-3.5 text-center text-base font-medium transition-colors ${
          popular
            ? "bg-[#d85040] text-white hover:bg-[#c2452f]"
            : "border border-dark-15 text-white hover:bg-dark-08"
        }`}
      >
        Get Started
      </a>
      <div className="flex flex-col gap-3 border-t border-dark-15 pt-6">
        <p className="text-sm font-semibold text-grey-70">What&rsquo;s Included</p>
        {FEATURES.map((feature) => (
          <div key={feature} className="flex items-center gap-2.5 text-sm text-grey-50">
            <CheckIcon />
            {feature}
          </div>
        ))}
      </div>
    </div>
  );
}

export function PricingSection() {
  const [yearly, setYearly] = useState(false);

  return (
    <section className="mx-auto flex w-full max-w-[1160px] flex-col items-center gap-10 px-5 sm:px-10">
      <SectionHeading
        heading="Transparent Pricing Options"
        paragraph="Explore our competitive pricing plans designed to meet diverse business needs and budgets."
      />

      <div className="flex items-center gap-1 rounded-full border border-dark-15 bg-dark-08 p-1">
        {(["Monthly", "Yearly"] as const).map((label) => {
          const isYearly = label === "Yearly";
          const active = yearly === isYearly;
          return (
            <button
              key={label}
              type="button"
              onClick={() => setYearly(isYearly)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                active ? "bg-dark-03 text-white" : "text-grey-50"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      <Reveal y={50} scale={1} className="flex w-full flex-col gap-6 lg:flex-row">
        {PLANS.map((plan) => (
          <PlanCard
            key={plan.name}
            name={plan.name}
            price={yearly ? plan.yearly : plan.monthly}
            popular={plan.popular}
          />
        ))}
      </Reveal>
    </section>
  );
}
