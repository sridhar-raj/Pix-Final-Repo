import Image from "next/image";
import { NumberCounter } from "@/components/ui/NumberCounter";

const STATS = [
  { end: 60, label: "Completed Projects" },
  { end: 20, label: "Happy Customers" },
  { end: 12, label: "Years of Experience" },
  { end: 14, label: "Recognition Received" },
];

export function HeroStats() {
  return (
    <div className="grid w-full grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
      {STATS.map((stat) => (
        <div
          key={stat.label}
          className="flex flex-col items-center gap-2.5 rounded-b-[20px] bg-dark-08 px-4 py-5 text-center sm:px-6 sm:py-5"
        >
          <div className="flex items-center gap-0.5">
            <span
              className="text-4xl font-extrabold text-grey-80 sm:text-5xl"
              style={{ fontFamily: "var(--font-inter-tight)" }}
            >
              <NumberCounter end={stat.end} />
            </span>
            <Image
              src="/images/Ud9m1e4QKPVQcchDChre4X7yZhs.2fa88.svg"
              alt=""
              width={24}
              height={24}
            />
          </div>
          <p className="text-sm font-medium text-grey-40 sm:text-base">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
