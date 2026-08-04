import { Reveal } from "@/components/ui/Reveal";
import { StatCard } from "@/components/ui/StatCard";

const STATS = [
  { end: 80, label: "Happy Customers" },
  { end: 200, label: "Successful Projects" },
  { end: 50, label: "Company Partnerships" },
  { end: 5, label: "Years of Experience" },
];

const FEATURES = [
  "Customizable Layouts",
  "Responsive Design",
  "Image Galleries",
  "Video Embeds",
  "Project Showcases",
];

export function PerformanceSection() {
  return (
    <section className="mx-auto flex w-full max-w-[1272px] flex-col items-center gap-10 px-5 sm:px-10 lg:flex-row lg:gap-20">
      <Reveal y={0} scale={1} className="grid w-full flex-1 grid-cols-2 gap-5">
        {STATS.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </Reveal>

      <Reveal y={0} scale={1} delay={0.1} className="flex w-full flex-1 flex-col items-start gap-6">
        <div className="flex flex-col gap-4">
          <h2 className="text-[28px] font-bold leading-[1.2] text-white sm:text-[38px] md:text-[44px]">
            Performance Insights and Analytics Overview
          </h2>
          <p className="text-base text-grey-50 sm:text-lg">
            Gain actionable insights and a comprehensive analytics overview to
            track performance, optimize strategies, and drive growth.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-3">
          {FEATURES.map((feature) => (
            <span key={feature} className="flex items-center gap-2 text-base font-bold text-white">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="10" fill="#d85040" fillOpacity="0.15" />
                <path d="M6 10.5L8.5 13L14 7" stroke="#d85040" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {feature}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
