import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

const OTHERS = [
  "Experienced team delivering standard solutions.",
  "Offers standard, template-based designs.",
  "Limited post-launch support and updates.",
  "Basic performance with average loading times.",
  "Basic SEO practices implemented.",
];

const OURS = [
  "Highly skilled specialists delivering customized solutions.",
  "Offers innovative, bespoke website designs.",
  "Comprehensive post-launch support and updates.",
  "Optimal performance with fast loading times.",
  "Advanced SEO tactics for enhanced online visibility.",
];

export function VersusSection() {
  return (
    <section className="mx-auto flex w-full max-w-[1140px] flex-col items-center gap-10 px-5 sm:px-10 sm:gap-[60px]">
      <div className="flex flex-col items-center gap-3.5 px-0 text-center sm:px-[150px]">
        <Reveal>
          <h2 className="text-[28px] font-bold leading-[1.2] text-white sm:text-[38px] md:text-[44px]">
            Choosing Us Over Others
          </h2>
        </Reveal>
        <Reveal y={20} delay={0.1}>
          <p className="max-w-lg text-base text-grey-50 sm:text-lg">
            See why We stand out with superior service, innovation, and
            client satisfaction benchmarks.
          </p>
        </Reveal>
      </div>

      <div className="relative flex w-full flex-col overflow-hidden rounded-b-2xl sm:flex-row">
        <div className="pointer-events-none absolute left-1/2 top-0 z-10 h-8 w-8 -translate-x-1/2 sm:h-[72px] sm:w-[72px]">
          <Image
            src="/images/NEfJ6gb8UAbgu3cjCgNnpCyL00.2fa88.svg"
            alt="vs"
            fill
          />
        </div>
        <div className="hidden w-px bg-gradient-to-b from-black to-[#d85040] sm:absolute sm:inset-y-0 sm:left-1/2 sm:block" />

        <div className="flex flex-1 flex-col items-center gap-5 bg-gradient-to-b from-dark-08/0 to-dark-08 px-5 pb-8 pt-8">
          <h3 className="text-lg font-medium text-grey-50">Other Agencies</h3>
          <div className="flex w-full flex-col gap-4">
            {OTHERS.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <Image
                  src="/images/zQ01E9agjm8R21RVAkXxILB8Ji0.2fa88.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="mt-0.5 shrink-0 opacity-60"
                />
                <p className="text-base text-grey-50">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 flex-col items-center gap-5 bg-gradient-to-b from-dark-08/0 to-dark-08 px-5 pb-8 pt-8">
          <Image
            src="/images/G0zXNre40VhX9Xb22t8n7Z5PmZs.2fa88.png"
            alt="Pix"
            width={184}
            height={50}
          />
          <div className="flex w-full flex-col gap-4">
            {OURS.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <Image
                  src="/images/7rBjXak3RIT1P8nksVqFKlnGNNQ.2fa88.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="mt-0.5 shrink-0"
                />
                <p className="text-base font-medium text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
