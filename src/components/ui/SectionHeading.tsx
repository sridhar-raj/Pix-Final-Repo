import { Reveal } from "@/components/ui/Reveal";

export function SectionHeading({
  heading,
  paragraph,
}: {
  heading: string;
  paragraph: string;
}) {
  return (
    <div className="flex w-full flex-col items-center gap-4 px-5 text-center sm:px-10 md:px-[300px]">
      <Reveal>
        <h2 className="text-[28px] font-bold leading-[1.2] text-white sm:text-[38px] md:text-[48px]">
          {heading}
        </h2>
      </Reveal>
      <Reveal y={20} delay={0.1}>
        <p className="max-w-2xl text-base text-grey-50 sm:text-lg">
          {paragraph}
        </p>
      </Reveal>
    </div>
  );
}
