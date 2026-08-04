import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const MILESTONES = [
  {
    year: "2016",
    date: "March 2016",
    title: "The Beginning",
    description:
      "Joined the exciting world of web design, diving into HTML, CSS, and JavaScript. Experimented with creating personal projects and exploring various design trends. Started building a solid foundation for the journey ahead.",
  },
  {
    year: "2017",
    date: "September 2017",
    title: "First Few Freelance Projects",
    description:
      "Took the leap into freelancing, securing the first few projects. Delivered responsive and visually appealing websites for local clients. Learned the importance of client communication and project management.",
  },
  {
    year: "2019",
    date: "April 2019",
    title: "Diving Deep in Figma",
    description:
      "Enrolled in advanced web design courses to enhance technical skills. Embraced UX/UI principles, responsive design, and explored the latest design tools. Participated in design communities to stay updated on industry trends.",
  },
  {
    year: "2023",
    date: "January 2023",
    title: "Starting a New Business",
    description:
      "Embarking on a new business venture dedicated to aiding Figma enthusiasts, our goal is to create pre-designed templates that fellow designers can easily replicate and incorporate into their projects. By providing ready-to-use designs, our mission is to streamline the creative process, saving valuable time for Figma designers and empowering them with efficient solutions.",
  },
  {
    year: "2016",
    date: "06 October 2023",
    title: "Successful Launch",
    description:
      "Celebrating the victorious launch of Produce UI at produce-ui.com—an endeavor fueled by dedication and creativity. Our platform thrives as a fertile ground for seamless design experiences, offering innovative solutions in the realm of user interfaces.",
  },
  {
    year: "Now",
    date: null,
    title: "Crafting Framer Templates",
    description:
      "Now we're passionately engaged in crafting Framer templates. Explore our curated collection.",
  },
];

export function TimelineSection() {
  return (
    <section className="mx-auto flex w-full max-w-[1160px] flex-col items-center gap-[60px] px-5 sm:px-10">
      <SectionHeading
        heading="Milestones of My Career"
        paragraph="Embarking on a journey marked by milestones, my career has been a dynamic tapestry of challenges embraced, skills honed, and successes celebrated"
      />

      <div className="relative flex w-full flex-col gap-10">
        <div className="absolute left-1/2 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-dark-15 to-transparent lg:block" />

        {MILESTONES.map((milestone, i) => (
          <div key={`${milestone.title}-${i}`} className="relative flex flex-col items-center gap-6">
            <span className="z-10 rounded-lg bg-dark-08 px-6 py-2.5 text-lg font-bold text-white">
              {milestone.year}
            </span>
            <Reveal
              y={0}
              scale={1}
              className={`w-full ${i % 2 === 0 ? "lg:pr-[52%]" : "lg:pl-[52%]"}`}
            >
              <div className="flex flex-col gap-3 rounded-2xl bg-dark-08 p-8 sm:p-10">
                <h3 className="text-2xl font-bold text-white">{milestone.title}</h3>
                <p className="text-base text-grey-50 sm:text-lg">{milestone.description}</p>
                {milestone.date && (
                  <span className="text-sm text-grey-40">{milestone.date}</span>
                )}
              </div>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}
