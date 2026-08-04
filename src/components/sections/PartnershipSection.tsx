import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { OrangeButton } from "@/components/ui/OrangeButton";

const LOGO_ROWS: string[][] = [
  ["qtTakQoXQe5Qe2Jf7a6D7Olgamc", "GLHacY1aGSDxGfiVtTL4hTlH6iw", "H9UW1p8sfmq9BC0RmWzZpIxooo", "kkRVbw9UKxz7SR1PoQoJblrDTw"],
  ["ZMDT2XkcCPBYT8HoAFYNtdzQI", "ySK0qREM7EIJ5LG7aGwOatD9w", "1Xn8SbbuEH9cq1EwaOERsfuozI", "2J3tprwPTEl54cUhstRPHqZcnc"],
  ["LSNUyzCLL86GwHzvzEgQrS63MeQ", "wFb1ogFrKPW5XO24parik3k2GE", "5o9wjrJo27gB7i6K06xFU7t9BA", "PIFWf7bhMv1MMMUya24NI7bWo"],
];

function LogoRow({ ids, reverse }: { ids: string[]; reverse?: boolean }) {
  const items = [...ids, ...ids];
  return (
    <div className="w-full overflow-hidden">
      <div
        className={`flex w-max gap-5 ${
          reverse ? "animate-marquee-right" : "animate-marquee-left"
        }`}
      >
        {items.map((id, i) => (
          <div
            key={`${id}-${i}`}
            className="flex h-[60px] w-[160px] shrink-0 items-center justify-center rounded-xl border border-dark-15 bg-dark-08 px-6"
          >
            <Image
              src={`/images/${id}.2fa88.svg`}
              alt=""
              width={100}
              height={28}
              className="h-auto max-h-6 w-auto opacity-70"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function PartnershipSection() {
  return (
    <section className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-10 px-5 sm:px-10 lg:flex-row lg:items-center lg:gap-[50px]">
      <Reveal y={0} scale={1} className="flex w-full flex-1 flex-col items-start gap-10">
        <div className="flex flex-col gap-4">
          <h2 className="text-[28px] font-bold leading-[1.2] text-white sm:text-[38px] md:text-[48px]">
            Partnership with <span className="text-[#d85040]">50+</span> companies
          </h2>
          <p className="text-base text-grey-50 sm:text-lg">
            Partnered with over 50 companies globally, driving innovative
            solutions and seamless collaborations for mutual growth and
            success.
          </p>
        </div>
        <OrangeButton href="/contact">Let&rsquo;s Work Together</OrangeButton>
      </Reveal>

      <Reveal y={0} scale={1} delay={0.1} className="flex w-full flex-1 flex-col gap-4 overflow-hidden">
        <LogoRow ids={LOGO_ROWS[0]} />
        <LogoRow ids={LOGO_ROWS[1]} reverse />
        <LogoRow ids={LOGO_ROWS[2]} />
      </Reveal>
    </section>
  );
}
