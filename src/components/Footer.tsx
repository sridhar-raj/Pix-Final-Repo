import Image from "next/image";
import { Grain } from "@/components/ui/Grain";

const NAV_LINKS = [
  { label: "About Me", href: "/about" },
  { label: "My Works", href: "/works" },
  { label: "Blogs", href: "/blog" },
];

const SOCIAL_LINKS = [
  { label: "X.com", href: "https://twitter.com/Praha37v" },
  { label: "Instagram", href: "https://www.instagram.com/praha37v/" },
  { label: "Youtube", href: "https://www.youtube.com/" },
  { label: "Dribbble", href: "https://dribbble.com/produce_ui" },
];

const SOCIAL_ICONS = [
  {
    href: "https://twitter.com/Praha37v",
    label: "X",
    path: "M18.9 1.2h3.3l-7.2 8.2 8.5 11.4h-6.6l-5.2-6.8-5.9 6.8H2.4l7.7-8.8L1.9 1.2h6.8l4.7 6.2 5.5-6.2Zm-1.1 17.6h1.8L6.2 3.1H4.3l13.5 15.7Z",
  },
  {
    href: "https://www.instagram.com/praha37v/",
    label: "Instagram",
    path: "M12 2c2.7 0 3.05.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.21.6 1.76 1.15.5.5.9 1.1 1.15 1.76.25.64.42 1.37.47 2.43C21.99 8.95 22 9.3 22 12s-.01 3.05-.06 4.12c-.05 1.06-.22 1.79-.47 2.43-.26.66-.6 1.21-1.15 1.76-.5.5-1.1.9-1.76 1.15-.64.25-1.37.42-2.43.47C15.05 21.99 14.7 22 12 22s-3.05-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47-.66-.26-1.21-.6-1.76-1.15-.5-.5-.9-1.1-1.15-1.76-.25-.64-.42-1.37-.47-2.43C2.01 15.05 2 14.7 2 12s.01-3.05.06-4.12c.05-1.06.22-1.79.47-2.43.26-.66.6-1.21 1.15-1.76.5-.5 1.1-.9 1.76-1.15.64-.25 1.37-.42 2.43-.47C8.95 2.01 9.3 2 12 2Zm0 3.5A6.5 6.5 0 1 0 12 18.5 6.5 6.5 0 0 0 12 5.5Zm0 10.7a4.2 4.2 0 1 1 0-8.4 4.2 4.2 0 0 1 0 8.4Zm6.7-10.9a1.5 1.5 0 1 1-3.05 0 1.5 1.5 0 0 1 3.05 0Z",
  },
  {
    href: "https://www.linkedin.com/company/produce-ui.com/",
    label: "LinkedIn",
    path: "M6.94 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM3.2 8.75h3.5v12H3.2v-12Zm6.14 0h3.35v1.64h.05c.47-.88 1.6-1.8 3.3-1.8 3.53 0 4.18 2.32 4.18 5.35v6.81h-3.5v-6.04c0-1.44-.03-3.3-2.01-3.3-2.02 0-2.33 1.58-2.33 3.2v6.14H9.34v-12Z",
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-dark-15 bg-dark-06">
      <Grain opacity={0.08} />
      <div className="relative mx-auto flex w-full max-w-[1280px] flex-col gap-16 px-5 py-16 sm:px-10">
        <div className="flex flex-col items-start gap-4">
          <Image
            src="/images/zDThx45CYIQqWLiDmaqZrdEV7Y.2fa88.png"
            alt="Pix"
            width={120}
            height={32}
          />
        </div>

        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="flex items-center gap-4">
            <Image
              src="/images/bJMx2YqYURaXr1MHVUWuYgtpFs.2fa88.png"
              alt="Pragadeshwaran"
              width={80}
              height={80}
              className="rounded-2xl object-cover"
            />
            <div className="flex flex-col gap-1">
              <span className="text-xl font-bold text-white">Pragadeshwaran</span>
              <span className="text-base text-grey-50">Designer &amp; Developer</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-16">
            <div className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-base text-grey-50 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-grey-50 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 border-t border-dark-15 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <a
            href="/contact"
            className="text-xl font-bold text-white transition-colors hover:text-[#d85040] sm:text-2xl"
          >
            Have an idea?
          </a>
          <div className="flex items-center gap-3">
            {SOCIAL_ICONS.map((icon) => (
              <a
                key={icon.label}
                href={icon.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={icon.label}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-dark-15 text-grey-50 transition-colors hover:border-white/30 hover:text-white"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d={icon.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-dark-15 pt-8 text-sm text-grey-50 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2024 PrahaCusick. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="/terms" className="transition-colors hover:text-white">
              Terms &amp; Conditions
            </a>
            <a href="/privacy" className="transition-colors hover:text-white">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
