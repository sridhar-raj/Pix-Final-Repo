import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const TOOLS = [
  {
    image: "/images/OkBKDrqon3Bb68s6kPwyucgQiWM.2fa88.svg",
    name: "Figma",
    paragraph:
      "My dynamic design playground, fostering collaboration to ideate, prototype, and craft stunning UI.",
    link: "https://figma.com",
  },
  {
    image: "/images/ShqxFytbeYkhONPUSapiYdP123Q.2fa88.svg",
    name: "Framer",
    paragraph:
      "Framer is the interactive canvas where ideas transform into real website through dynamic design.",
    link: "https://framer.com",
  },
  {
    image: "/images/xIjO8kNM8oq1qxl3vbLceaVC9V4.2fa88.svg",
    name: "Webflow",
    paragraph:
      "A digital atelier where visions take shape, creating compelling and responsive websites with ease.",
    link: "https://webflow.com",
  },
  {
    image: "/images/T71G0PZIEJOSPjIOpOIJWRcGbc.2fa88.svg",
    name: "Shopify",
    paragraph:
      "My creative workshop for sculpting seamless and visually captivating e-commerce experiences.",
    link: "https://shopify.com",
  },
  {
    image: "/images/qsLnUgE4UonfDyvF7yeGYnHwl9M.2fa88.svg",
    name: "Notion",
    paragraph:
      "The organized realm for collaborative design, enhancing productivity with clean and effective interfaces.",
    link: "https://notion.so",
  },
  {
    image: "/images/MjwhxRxhWHM8YpIG5CsCsJgHS2g.2fa88.svg",
    name: "Spotify",
    paragraph:
      "Designing UI that harmonize with the joy of music discovery and deliver an immersive listening experience.",
    link: "https://spotify.com",
  },
];

export function ToolsSection() {
  return (
    <section className="mx-auto flex w-full max-w-[1160px] flex-col items-center gap-[60px] px-5 sm:px-10">
      <SectionHeading
        heading="Tools I Use with Ease"
        paragraph="I have gained proficiency in a diverse array of tools, equipping me to craft robust and innovative solutions"
      />
      <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {TOOLS.map((tool, i) => (
          <Reveal key={tool.name} y={40} scale={1} delay={(i % 3) * 0.08}>
            <a
              href={tool.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-full flex-col gap-[30px] rounded-2xl border border-dark-15 bg-dark-06 p-10 transition-colors hover:bg-dark-08"
            >
              <Image src={tool.image} alt="" width={48} height={48} />
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold text-white">{tool.name}</h3>
                <p className="text-base text-grey-50">{tool.paragraph}</p>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
