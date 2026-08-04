import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";

const TESTIMONIALS = [
  {
    image: "/images/1BcKzcKVcwgUujLjCHSnAoxB8Pw.2fa88.png",
    name: "Michael Smith",
    position: "Founder of Klothink",
    paragraph:
      "Pragadesh is a web design genius! He captured my brand perfectly and created a website that truly represents who I am. I highly recommend him!",
  },
  {
    image: "/images/ADvgzlq4G0L0M8RC4JwDFraxlqg.2fa88.png",
    name: "Sarah Thompson",
    position: "Founder & CEO",
    paragraph:
      "Pragadesh is an incredibly talented web designer. His attention to detail and creative flair are unmatched. He took my website from ordinary to extraordinary.",
  },
  {
    image: "/images/JQZXhh18HrLYlba3AIp3eP6Zmo.2fa88.png",
    name: "John Anderson",
    position: "Entrepreneur",
    paragraph:
      "I am thrilled with the website that Pragadesh designed for my business. His ability to translate my vision into a visually stunning and user-friendly website was impressive.",
  },
  {
    image: "/images/8myD8z5hJhxYDpZ9bxWhkwOsSW4.2fa88.png",
    name: "Emily Roberts",
    position: "Small Business Owner",
    paragraph:
      "Working with Pragadesh was a game-changer for my online business. His web design skills are exceptional, and he brought my ideas to life in ways I couldn't have imagined.",
  },
];

function Stars() {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="#d85040">
          <path d="M8 0l2.163 5.279L16 5.528l-4.5 3.6L13.056 15 8 11.5 2.944 15l1.556-5.872L0 5.528l5.837-.249L8 0z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({
  image,
  name,
  position,
  paragraph,
}: {
  image: string;
  name: string;
  position: string;
  paragraph: string;
}) {
  return (
    <div className="flex w-[380px] shrink-0 flex-col gap-5 rounded-2xl border border-dark-15 bg-dark-06 p-6">
      <Stars />
      <p className="text-base text-grey-70">{paragraph}</p>
      <div className="flex items-center gap-3">
        <Image
          src={image}
          alt={name}
          width={44}
          height={44}
          className="rounded-full object-cover"
        />
        <div className="flex flex-col">
          <span className="text-base font-bold text-white">{name}</span>
          <span className="text-sm text-grey-50">{position}</span>
        </div>
      </div>
    </div>
  );
}

function TestimonialRow({ reverse }: { reverse?: boolean }) {
  const items = [...TESTIMONIALS, ...TESTIMONIALS];
  return (
    <div className="w-full overflow-hidden">
      <div className={`flex w-max gap-5 ${reverse ? "animate-marquee-right" : "animate-marquee-left"}`}>
        {items.map((t, i) => (
          <TestimonialCard key={`${t.name}-${i}`} {...t} />
        ))}
      </div>
    </div>
  );
}

export function TestimonialSection() {
  return (
    <section className="flex w-full flex-col items-center gap-[60px]">
      <SectionHeading
        heading="Happy & Satisfied Faces"
        paragraph="Here's what some of my satisfied clients have to say about my work"
      />
      <div className="flex w-full flex-col gap-5">
        <TestimonialRow />
        <TestimonialRow reverse />
      </div>
    </section>
  );
}
