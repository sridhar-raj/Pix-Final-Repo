import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

const CARDS = [
  {
    heading: "Custom Designs",
    helper: "Tailored websites meticulously crafted to reflect your brand.",
  },
  {
    heading: "Fast Performance",
    helper: "Optimized for lightning-fast speed to enhance user experience.",
  },
  {
    heading: "SEO Friendly",
    helper: "Designed to improve SEO and increase visibility effortlessly.",
  },
];

function SeeHowCard({ heading, helper }: { heading: string; helper: string }) {
  return (
    <div className="relative flex-1 overflow-hidden rounded-2xl bg-dark-08 p-6 sm:p-[30px]">
      <div
        className="absolute right-0 top-0 h-[80px] w-[80px] rounded-full opacity-60 blur-2xl"
        style={{ background: "radial-gradient(circle, #d85040 0%, transparent 70%)" }}
      />
      <div className="relative flex flex-col gap-5">
        <div
          className="flex w-fit items-center justify-center rounded-xl p-2.5 shadow-[inset_0_2px_2px_0_rgba(255,255,255,0.25)]"
          style={{
            background: "linear-gradient(153deg, #e0776a 0%, #d85040 100%)",
          }}
        >
          <Image
            src="/images/WJr8NywyQRUL716ZAeHxmeLQWY.2fa88.svg"
            alt=""
            width={26}
            height={26}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <h3 className="text-xl font-extrabold text-white">{heading}</h3>
          <p className="text-base font-medium text-grey-50">{helper}</p>
        </div>
      </div>
    </div>
  );
}

export function SeeHowSection() {
  return (
    <section className="mx-auto flex w-full max-w-[1104px] flex-col items-center gap-8 px-5 pb-10 sm:px-10">
      <div className="flex w-full items-center gap-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-dark-15" />
        <Reveal delay={0.1}>
          <h2 className="whitespace-nowrap text-base font-bold text-white sm:text-lg">
            See How We Can Help Your Brand
          </h2>
        </Reveal>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-dark-15" />
      </div>

      <Reveal y={50} scale={1} className="w-full" duration={0.5} delay={0.2}>
        <div className="relative w-full overflow-hidden rounded-2xl">
          <Image
            src="/images/qFCZhQfEdxrGU8gfru6cqXdovTo.2fa88.png"
            alt="Product showcase preview"
            width={1104}
            height={579}
            className="h-auto w-full object-cover"
          />
          <button
            type="button"
            aria-label="Play video"
            className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 transition-transform hover:scale-105"
          >
            <svg width="20" height="24" viewBox="0 0 20 24" fill="none">
              <path d="M0 0L20 12L0 24V0Z" fill="#070708" />
            </svg>
          </button>
        </div>
      </Reveal>

      <div className="flex w-full flex-col gap-5 sm:flex-row">
        {CARDS.map((card, i) => (
          <Reveal key={card.heading} y={50} scale={1} delay={0.1 + i * 0.05} className="flex flex-1">
            <SeeHowCard {...card} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
