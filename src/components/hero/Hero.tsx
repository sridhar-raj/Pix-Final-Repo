import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { OrangeButton } from "@/components/ui/OrangeButton";
import { HeroBackground } from "./HeroBackground";
import { HeroBadge } from "./HeroBadge";
import { SkillsTicker } from "./SkillsTicker";
import { HeroStats } from "./HeroStats";

export function Hero() {
  return (
    <section className="relative flex flex-col items-center overflow-hidden pt-[150px]">
      <HeroBackground />

      <div className="flex w-full flex-col items-center gap-10 px-5">
        <div className="flex w-full flex-col items-center gap-6">
          <Reveal y={20} scale={0.9} duration={0.4}>
            <HeroBadge />
          </Reveal>

          <div className="relative flex w-full max-w-[1540px] flex-col items-center">
            <Image
              src="/images/zYk3exszpWCYNZaRMCbtenPy9FM.2fa88.svg"
              alt=""
              width={136}
              height={136}
              className="pointer-events-none absolute right-[6%] top-[-59px] hidden opacity-90 lg:block"
            />
            <Image
              src="/images/u2E310e6K9pTM2StS4QaSwwYaDw.2fa88.svg"
              alt=""
              width={88}
              height={88}
              className="pointer-events-none absolute left-[8%] top-[4px] hidden opacity-90 lg:block"
            />

            <div className="relative flex w-full max-w-4xl flex-col items-center gap-4">
              <Image
                src="/images/E79jWbBAYY9wSIiDXCftFgT1s.2fa88.svg"
                alt=""
                width={33}
                height={35}
                className="pointer-events-none absolute left-[8%] top-0 hidden opacity-90 sm:block"
              />

              <Reveal y={30} scale={0.8} delay={0.1}>
                <h1 className="text-center text-[32px] font-bold leading-[1.2] text-white sm:text-[38px] md:text-[48px]">
                  Revitalize Your Digital Impact through Boundless Creativity
                </h1>
              </Reveal>

              <Reveal y={30} scale={0.8} delay={0.2}>
                <p className="max-w-2xl text-center text-base leading-relaxed text-grey-50 sm:text-lg">
                  I am a passionate and experienced web designer, dedicated to
                  creating visually stunning and highly functional websites.
                  Explore my portfolio to see the power of effective design in
                  action
                </p>
              </Reveal>
            </div>
          </div>
        </div>

        <Reveal y={30} scale={0.8} delay={0.3}>
          <div className="relative">
            <Image
              src="/images/3ijo0C4TQidf9ARBYIm5tTUZlAw.2fa88.svg"
              alt=""
              width={120}
              height={121}
              className="pointer-events-none absolute -left-[110px] -top-6 hidden opacity-90 lg:block"
            />
            <OrangeButton href="https://cal.com" newTab>
              Book a call
            </OrangeButton>
          </div>
        </Reveal>

        <Reveal y={0} scale={1} delay={0.4} className="w-full max-w-[1440px]">
          <div className="flex w-full flex-col items-center gap-0">
            <SkillsTicker />
            <div className="w-full px-0 sm:px-10 lg:px-20">
              <HeroStats />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
