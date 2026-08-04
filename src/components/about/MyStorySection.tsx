import { Reveal } from "@/components/ui/Reveal";
import { StatCard } from "@/components/ui/StatCard";

const STATS = [
  { end: 80, label: "Happy Customers" },
  { end: 200, label: "Successful Projects" },
  { end: 50, label: "Company Partnerships" },
  { end: 5, label: "Years of Experience" },
];

export function MyStorySection() {
  return (
    <section className="mx-auto flex w-full max-w-[1280px] flex-col gap-10 px-5 sm:px-10 lg:flex-row lg:gap-20">
      <Reveal y={0} scale={1} className="flex w-full flex-1 flex-col gap-6">
        <h2 className="text-[28px] font-bold leading-[1.2] text-white sm:text-[38px] md:text-[44px]">
          My Story
        </h2>
        <p className="text-base leading-relaxed text-grey-50 sm:text-lg">
          At Pix, we craft innovative solutions 🚀 that make portfolios shine.
          Specializing in web 💻, app 📱, and graphic design 🎨, we bring your
          unique ideas to life with precision. Our skilled team of designers
          and developers 👨‍💻 collaborates closely with clients, ensuring
          every project not only meets but exceeds expectations 📈.
        </p>
        <p className="text-base leading-relaxed text-grey-50 sm:text-lg">
          We don&rsquo;t just create visuals—we solve problems 🛠️. Our focus
          is on strategic, impactful designs 💥 that deliver real, measurable
          results. With a commitment to quality and creativity 🧠, we
          transform your ideas into visually captivating masterpieces,
          reflecting your vision with exceptional quality 🏆.
        </p>
      </Reveal>

      <Reveal y={0} scale={1} delay={0.1} className="grid w-full flex-1 grid-cols-2 gap-5">
        {STATS.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </Reveal>
    </section>
  );
}
