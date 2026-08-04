import Image from "next/image";

const SOCIALS = [
  { name: "Twitter", followers: "5k+ Followers", href: "https://twitter.com/Praha37v" },
  { name: "Instagram", followers: "2k+ Followers", href: "https://www.instagram.com/praha37v/" },
  { name: "Linkedin", followers: "500+ Followers", href: "https://www.linkedin.com/company/produce-ui.com/" },
];

const SOCIAL_ICONS: Record<string, string> = {
  Twitter:
    "M18.9 1.2h3.3l-7.2 8.2 8.5 11.4h-6.6l-5.2-6.8-5.9 6.8H2.4l7.7-8.8L1.9 1.2h6.8l4.7 6.2 5.5-6.2Zm-1.1 17.6h1.8L6.2 3.1H4.3l13.5 15.7Z",
  Instagram:
    "M12 2c2.7 0 3.05.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.21.6 1.76 1.15.5.5.9 1.1 1.15 1.76.25.64.42 1.37.47 2.43C21.99 8.95 22 9.3 22 12s-.01 3.05-.06 4.12c-.05 1.06-.22 1.79-.47 2.43-.26.66-.6 1.21-1.15 1.76-.5.5-1.1.9-1.76 1.15-.64.25-1.37.42-2.43.47C15.05 21.99 14.7 22 12 22s-3.05-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47-.66-.26-1.21-.6-1.76-1.15-.5-.5-.9-1.1-1.15-1.76-.25-.64-.42-1.37-.47-2.43C2.01 15.05 2 14.7 2 12s.01-3.05.06-4.12c.05-1.06.22-1.79.47-2.43.26-.66.6-1.21 1.15-1.76.5-.5 1.1-.9 1.76-1.15.64-.25 1.37-.42 2.43-.47C8.95 2.01 9.3 2 12 2Zm0 3.5A6.5 6.5 0 1 0 12 18.5 6.5 6.5 0 0 0 12 5.5Zm0 10.7a4.2 4.2 0 1 1 0-8.4 4.2 4.2 0 0 1 0 8.4Zm6.7-10.9a1.5 1.5 0 1 1-3.05 0 1.5 1.5 0 0 1 3.05 0Z",
  Linkedin:
    "M6.94 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM3.2 8.75h3.5v12H3.2v-12Zm6.14 0h3.35v1.64h.05c.47-.88 1.6-1.8 3.3-1.8 3.53 0 4.18 2.32 4.18 5.35v6.81h-3.5v-6.04c0-1.44-.03-3.3-2.01-3.3-2.02 0-2.33 1.58-2.33 3.2v6.14H9.34v-12Z",
};

export function InfoCard() {
  return (
    <div className="flex w-full flex-col gap-5">
      <div className="relative overflow-hidden rounded-2xl border border-dark-15 bg-dark-08 p-6">
        <div className="flex items-center gap-4">
          <div className="relative h-[124px] w-[113px] shrink-0 overflow-hidden rounded-xl border border-dark-15 bg-dark-08">
            <Image
              src="/images/gnfsCgA3E5QeTp9mhZSbBsMi6k.2fa88.png"
              alt="Pragadeswaran"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-1 flex-col gap-3">
            <span className="flex w-fit items-center gap-2 rounded-full border border-dark-15 bg-dark-03 px-3 py-1.5 text-sm font-medium text-white">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              Available To Work
            </span>
            <div className="flex items-center justify-between gap-2 rounded-[10px] border border-dark-15 bg-dark-08 px-4 py-3">
              <span className="text-sm font-medium text-grey-50">
                Working Hours ( IST )
              </span>
              <span className="text-base font-medium text-white">8pm to 6am</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {SOCIALS.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-2xl border border-dark-15 bg-dark-06 p-4 transition-colors hover:bg-dark-08"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-dark-08 text-white">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d={SOCIAL_ICONS[social.name]} />
              </svg>
            </span>
            <div className="flex flex-col">
              <span className="text-base font-bold text-white">{social.name}</span>
              <span className="text-sm text-grey-50">{social.followers}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
