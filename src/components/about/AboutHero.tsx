import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Grain } from "@/components/ui/Grain";
import { Typewriter } from "@/components/ui/Typewriter";

const SOCIALS = [
  { href: "https://twitter.com/Praha37v", label: "X" },
  { href: "https://www.instagram.com/praha37v/", label: "Instagram" },
  { href: "https://www.linkedin.com/company/produce-ui.com/", label: "LinkedIn" },
];

const SOCIAL_ICONS: Record<string, string> = {
  X: "M18.9 1.2h3.3l-7.2 8.2 8.5 11.4h-6.6l-5.2-6.8-5.9 6.8H2.4l7.7-8.8L1.9 1.2h6.8l4.7 6.2 5.5-6.2Zm-1.1 17.6h1.8L6.2 3.1H4.3l13.5 15.7Z",
  Instagram:
    "M12 2c2.7 0 3.05.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.21.6 1.76 1.15.5.5.9 1.1 1.15 1.76.25.64.42 1.37.47 2.43C21.99 8.95 22 9.3 22 12s-.01 3.05-.06 4.12c-.05 1.06-.22 1.79-.47 2.43-.26.66-.6 1.21-1.15 1.76-.5.5-1.1.9-1.76 1.15-.64.25-1.37.42-2.43.47C15.05 21.99 14.7 22 12 22s-3.05-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47-.66-.26-1.21-.6-1.76-1.15-.5-.5-.9-1.1-1.15-1.76-.25-.64-.42-1.37-.47-2.43C2.01 15.05 2 14.7 2 12s.01-3.05.06-4.12c.05-1.06.22-1.79.47-2.43.26-.66.6-1.21 1.15-1.76.5-.5 1.1-.9 1.76-1.15.64-.25 1.37-.42 2.43-.47C8.95 2.01 9.3 2 12 2Zm0 3.5A6.5 6.5 0 1 0 12 18.5 6.5 6.5 0 0 0 12 5.5Zm0 10.7a4.2 4.2 0 1 1 0-8.4 4.2 4.2 0 0 1 0 8.4Zm6.7-10.9a1.5 1.5 0 1 1-3.05 0 1.5 1.5 0 0 1 3.05 0Z",
  LinkedIn:
    "M6.94 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM3.2 8.75h3.5v12H3.2v-12Zm6.14 0h3.35v1.64h.05c.47-.88 1.6-1.8 3.3-1.8 3.53 0 4.18 2.32 4.18 5.35v6.81h-3.5v-6.04c0-1.44-.03-3.3-2.01-3.3-2.02 0-2.33 1.58-2.33 3.2v6.14H9.34v-12Z",
};

export function AboutHero() {
  return (
    <section className="relative overflow-hidden pb-10 pt-[180px]">
      <div className="mx-auto flex w-full max-w-[1305px] flex-col gap-8 px-5 sm:px-10 lg:flex-row lg:items-start lg:gap-[30px]">
        <Reveal y={0} scale={0.95} className="w-full overflow-hidden rounded-[20px] bg-[#e58a7f] lg:w-[42%]">
          <div className="relative aspect-[4/5] w-full">
            <Image
              src="/images/3mtpLZAPJwjC6GvRx6DFNKglGZc.2fa88.png"
              alt="Pragadeswaran"
              fill
              className="object-cover"
              priority
            />
          </div>
        </Reveal>

        <div className="flex w-full flex-1 flex-col gap-8">
          <Reveal y={20} scale={1} className="flex flex-col gap-4">
            <div className="flex w-fit items-center gap-2.5 rounded-full border border-dark-15 bg-dark-03 py-2 pl-2 pr-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-dark-08">
                <span className="text-lg">👋</span>
              </div>
              <p className="text-sm font-medium text-white sm:text-base">
                Hi, Welcome to My Portfolio
              </p>
            </div>

            <p className="text-lg font-medium text-grey-70 sm:text-xl">
              <Typewriter words={["Designing", "Coding", "Templating"]} />
            </p>

            <h1 className="text-[36px] font-bold leading-[1.1] text-white sm:text-[48px] md:text-[58px]">
              Pragadeswaran
            </h1>
          </Reveal>

          <Reveal y={20} scale={1} delay={0.1} className="relative overflow-hidden rounded-[20px] border border-dark-15 bg-dark-06 p-6 sm:p-10">
            <Grain opacity={0.1} />
            <div className="relative flex flex-col gap-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <h2 className="text-2xl font-bold text-white">About Me</h2>
                <div className="flex items-center gap-3">
                  {SOCIALS.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-dark-15 text-grey-50 transition-colors hover:border-white/30 hover:text-white"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d={SOCIAL_ICONS[social.label]} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
              <p className="text-base leading-relaxed text-grey-50 sm:text-lg">
                I am a skilled web designer with a passion for creating
                visually stunning and user-friendly websites. With a keen eye
                for detail and a commitment to excellence, I specialize in
                crafting online experiences that leave a lasting impression.
                From concept to launch, I collaborate closely with clients to
                bring their visions to life and ensure their digital presence
                stands out from the crowd. With my expertise and dedication, I
                am here to help you elevate your online presence and make a
                powerful impact in the digital landscape.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
