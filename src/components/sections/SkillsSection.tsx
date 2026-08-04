import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const SKILLS = [
  {
    icon: "/images/FbkSEzD7mPxcsf5bSrj1Fig98UA.2fa88.svg",
    heading: "Web Design Principles",
    paragraph:
      "Proficiency in the fundamental principles of design, such as layout, color theory, typography, and visual hierarchy.",
  },
  {
    icon: "/images/FbkSEzD7mPxcsf5bSrj1Fig98UA.2fa88.svg",
    heading: "User Interface (UI) Design",
    paragraph:
      "Ability to create visually appealing and intuitive user interfaces that enhance user experience and engagement.",
  },
  {
    icon: "/images/FbkSEzD7mPxcsf5bSrj1Fig98UA.2fa88.svg",
    heading: "User Experience (UX) Design",
    paragraph:
      "Understanding of user behavior and psychology to design seamless and enjoyable user experiences.",
  },
  {
    icon: "/images/FbkSEzD7mPxcsf5bSrj1Fig98UA.2fa88.svg",
    heading: "Wireframing and Prototyping",
    paragraph:
      "Ability to create wireframes and interactive prototypes to visualize and test website layouts and functionality.",
  },
  {
    icon: "/images/FbkSEzD7mPxcsf5bSrj1Fig98UA.2fa88.svg",
    heading: "Mobile-Friendly Optimization",
    paragraph:
      "Knowledge of techniques to optimize websites for mobile, ensuring a smooth user experience on smaller screens.",
  },
  {
    icon: "/images/FbkSEzD7mPxcsf5bSrj1Fig98UA.2fa88.svg",
    heading: "Custom Development",
    paragraph:
      "Proficiency in the fundamental principles of design, such as layout, color theory, typography, and visual hierarchy.",
  },
];

function SkillsCard({
  icon,
  heading,
  paragraph,
}: {
  icon: string;
  heading: string;
  paragraph: string;
}) {
  return (
    <a
      href="/works"
      className="group flex flex-col items-center gap-[30px] rounded-3xl border border-dark-15 bg-dark-06 p-5"
    >
      <div className="relative flex h-[240px] w-full items-center justify-center overflow-hidden rounded-[20px] border border-dark-15 bg-dark-08">
        <Image
          src="/images/7o2k4wOFnN2l2pa5d2su4LRfw30.2fa88.svg"
          alt=""
          fill
          className="object-cover opacity-70"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0) 60%, var(--color-dark-03) 100%)",
          }}
        />
        <Image src={icon} alt="" width={80} height={80} className="relative" />
        <span className="absolute bottom-6 translate-y-2 text-sm font-medium text-grey-70 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          View Projects
        </span>
      </div>
      <div className="flex flex-col items-center gap-3.5 px-2.5 pb-2.5 text-center">
        <h3 className="text-xl font-bold text-white">{heading}</h3>
        <p className="text-base text-grey-50">{paragraph}</p>
      </div>
    </a>
  );
}

export function SkillsSection() {
  return (
    <section className="mx-auto flex w-full max-w-[1160px] flex-col items-center gap-[60px] px-5 sm:px-10">
      <SectionHeading
        heading="My Skills and Expertise"
        paragraph="As a web designer, I possess a diverse set of skills and expertise to bring your web design visions to life"
      />
      <div className="grid w-full grid-cols-1 gap-[30px] sm:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((skill, i) => (
          <Reveal key={skill.heading} y={50} scale={1} delay={(i % 3) * 0.1}>
            <SkillsCard {...skill} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
