"use client";

import Link from "next/link";
import Image from "next/image";

export function NavItem({
  href,
  label,
  icon,
  activeIcon,
  active,
}: {
  href: string;
  label: string;
  icon: string;
  activeIcon: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group relative flex shrink-0 items-center justify-center gap-1.5 rounded-xl px-3.5 py-3.5 transition-colors duration-300 ${
        active ? "bg-dark-03 opacity-100" : "opacity-60 hover:opacity-100"
      }`}
    >
      <span className="relative h-6 w-6 shrink-0">
        <Image
          src={active ? activeIcon : icon}
          alt=""
          fill
          className="object-contain"
        />
      </span>
      <span
        className={`whitespace-nowrap text-sm font-medium sm:text-base ${
          active ? "text-white" : "text-grey-50"
        }`}
      >
        {label}
      </span>
    </Link>
  );
}
