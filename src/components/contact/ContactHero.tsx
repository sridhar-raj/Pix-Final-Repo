import { Reveal } from "@/components/ui/Reveal";
import { InfoCard } from "./InfoCard";
import { ContactForm } from "./ContactForm";
import { ContactInfoCards } from "./ContactInfoCards";

export function ContactHero() {
  return (
    <section className="mx-auto flex w-full max-w-[1160px] flex-col items-center gap-16 px-5 pt-[180px] sm:px-10">
      <div className="flex flex-col items-center gap-4 text-center">
        <Reveal>
          <h1 className="text-[32px] font-bold leading-[1.2] text-white sm:text-[44px] md:text-[54px]">
            I&rsquo;d <span className="text-[#d85040]">Love to hear</span> from
            you.
          </h1>
        </Reveal>
        <Reveal y={20} delay={0.1}>
          <p className="max-w-xl text-base text-grey-50 sm:text-lg">
            Ready to connect and collaborate, drop me a line and let&rsquo;s
            turn ideas into reality!
          </p>
        </Reveal>
      </div>

      <div className="flex w-full flex-col gap-10">
        <div className="flex w-full flex-col gap-6 lg:flex-row">
          <Reveal y={30} scale={1} className="w-full lg:w-[360px] lg:shrink-0">
            <InfoCard />
          </Reveal>
          <Reveal y={30} scale={1} delay={0.1} className="flex w-full flex-1">
            <ContactForm />
          </Reveal>
        </div>

        <Reveal y={30} scale={1} delay={0.15} className="w-full">
          <ContactInfoCards />
        </Reveal>
      </div>
    </section>
  );
}
