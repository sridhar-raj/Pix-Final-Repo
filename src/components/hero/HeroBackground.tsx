import Image from "next/image";

/**
 * Recreates Framer's animated "BG - Hero" layer: a faint grid-square pattern
 * fading to the page background, topped with a soft ambient glow. The source
 * uses a stack of absolutely-positioned line nodes cycling variants; here
 * that's approximated with a single static grid image plus a bottom
 * fade-to-background gradient for equivalent visual output.
 */
export function HeroBackground() {
  return (
    <div className="absolute inset-x-0 top-0 -z-10 h-[780px] overflow-hidden bg-dark-08 sm:h-[900px]">
      <Image
        src="/images/7o2k4wOFnN2l2pa5d2su4LRfw30.2fa88.svg"
        alt=""
        fill
        priority
        className="object-cover object-top opacity-60"
      />
      <div
        className="absolute left-1/2 top-[-200px] h-[665px] w-[665px] -translate-x-1/2 rounded-full opacity-80"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(98,98,115,0.8) 0%, rgba(98,98,115,0) 100%)",
          filter: "blur(140px)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(7,7,8,0) 42%, var(--color-dark-03) 100%)",
        }}
      />
    </div>
  );
}
