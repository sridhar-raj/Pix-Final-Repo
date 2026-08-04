"use client";

import Link from "next/link";

export function OrangeButton({
  href,
  children,
  newTab = false,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  newTab?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
      className={`group relative isolate flex items-center overflow-hidden rounded-[10px] bg-[#d85040] px-6 py-3.5 text-base font-medium text-white shadow-[inset_4px_4px_18px_0px_rgba(255,255,255,0.28),0_0.5px_2.4px_-0.8px_rgba(216,80,64,0.5),0_1.8px_9.2px_-1.7px_rgba(216,80,64,0.5),0_8px_40px_-2.5px_rgba(216,80,64,0.5)] ${className}`}
    >
      <span
        className="pointer-events-none absolute -left-[100px] top-1/2 h-[100px] w-[100px] -translate-y-1/2 rounded-full opacity-0 blur-2xl transition-all duration-500 ease-out group-hover:left-[calc(100%+100px)] group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(255,255,255,0.2) 0%, rgba(0,0,0,0) 100%)",
        }}
      />
      <span className="relative">{children}</span>
      <span className="ml-0 w-0 shrink-0 overflow-hidden transition-all duration-300 ease-out group-hover:ml-2 group-hover:w-3.5">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 12L12 2M12 2H4M12 2V10"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </Link>
  );
}
