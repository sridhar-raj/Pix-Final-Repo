import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const WORKS = [
  {
    slug: "lander",
    name: "Lander",
    description:
      "Lander is a sleek, dark blue-themed landing page template designed for agencies. It combines modern aesthetics with high functionality to showcase your brand's services and drive conversions effectively.",
    year: "2024",
    category: "Agency",
    cover: "/images/PsUgS0AQsVudVJ6UHjylMZRKA3o.2fa88.png",
  },
  {
    slug: "sap",
    name: "SAP",
    description:
      "SAP - The ideal template for crafting a sleek and efficient SaaS landing page, meeting all your SaaS needs effortlessly.",
    year: "2024",
    category: "SAAS",
    cover: "/images/GXbgbwT3ZYRws3ov23MM5q2HZsc.2fa88.png",
  },
  {
    slug: "waitlisty",
    name: "Waitlisty",
    description:
      "Waitlisty - The ideal template for crafting a sleek and efficient waitlist landing page, meeting all your waitlist needs effortlessly.",
    year: "2024",
    category: "Waitlist",
    cover: "/images/X8BJMQcA8RBAkvn52BqshzwyGw.2fa88.png",
  },
];

export function WorkSection() {
  return (
    <section className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-20 px-5 sm:px-10">
      <SectionHeading
        heading="My Creative Portfolios"
        paragraph="Explore a showcase of my diverse projects and creations"
      />
      <div className="flex w-full flex-col gap-6">
        {WORKS.map((work, i) => (
          <Reveal key={work.slug} y={40} scale={1} delay={i * 0.08}>
            <a
              href={`/works/${work.slug}`}
              className="group flex flex-col gap-6 rounded-2xl border border-dark-15 bg-dark-06 p-6 sm:flex-row sm:items-center sm:p-8"
            >
              <div className="relative aspect-video w-full overflow-hidden rounded-xl sm:w-[360px] sm:shrink-0">
                <Image
                  src={work.cover}
                  alt={work.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3">
                <div className="flex items-center gap-3 text-sm text-grey-50">
                  <span className="rounded-full border border-dark-15 px-3 py-1 text-grey-70">
                    {work.category}
                  </span>
                  <span>{work.year}</span>
                </div>
                <h3 className="text-2xl font-bold text-white">{work.name}</h3>
                <p className="text-base text-grey-50">{work.description}</p>
              </div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0 self-end text-grey-50 transition-colors group-hover:text-white sm:self-center">
                <path d="M6 18L18 6M18 6H9M18 6V15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </Reveal>
        ))}
      </div>
      <a
        href="/works"
        className="rounded-[10px] bg-dark-08 border border-dark-06 px-6 py-3.5 text-base font-medium text-white transition-colors hover:bg-dark-15"
      >
        View All Works
      </a>
    </section>
  );
}
