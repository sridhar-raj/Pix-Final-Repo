"use client";

import { usePathname } from "next/navigation";
import { Grain } from "@/components/ui/Grain";
import { NavItem } from "./NavItem";

const NAV_ITEMS = [
  {
    href: "/",
    label: "Home",
    icon: "/images/pgiYilUjCzZlGL8wWxsAR3rpzL8.2fa88.svg",
    activeIcon: "/images/lmTnmcYy3Z8nwZYgNSeneCLfytk.2fa88.svg",
  },
  {
    href: "/about",
    label: "About",
    icon: "/images/M9H259rXfmGqXWh5SJMWK0DZLHM.2fa88.svg",
    activeIcon: "/images/78ofjx9HDkcoL3Czhx9GKmWqmQ4.2fa88.svg",
  },
  {
    href: "/works",
    label: "Works",
    icon: "/images/w9Isi83VQl9nM8gVKlPaDCblIvo.2fa88.svg",
    activeIcon: "/images/5JIdyHQaWcKvzziAtdnDXuTPt7g.2fa88.svg",
  },
  {
    href: "/blog",
    label: "Blogs",
    icon: "/images/pgiYilUjCzZlGL8wWxsAR3rpzL8.2fa88.svg",
    activeIcon: "/images/lmTnmcYy3Z8nwZYgNSeneCLfytk.2fa88.svg",
  },
  {
    href: "/contact",
    label: "Contact",
    icon: "/images/JZyVF2E4wvNdf3721vZwTUUs8ok.2fa88.svg",
    activeIcon: "/images/vY5TWkPDmenMpLfH1B9cANiVtrA.2fa88.svg",
  },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-10 flex justify-center pt-4 sm:pt-[30px]">
      <nav className="max-w-[90%] overflow-x-auto rounded-2xl sm:max-w-none sm:overflow-visible">
        <div className="relative flex items-center gap-2.5 overflow-hidden rounded-2xl border border-dark-15 bg-dark-08 p-1.5">
          <Grain opacity={0.15} />
          {NAV_ITEMS.map((item) => (
            <NavItem
              key={item.href}
              href={item.href}
              label={item.label}
              icon={item.icon}
              activeIcon={item.activeIcon}
              active={pathname === item.href}
            />
          ))}
        </div>
      </nav>
    </header>
  );
}
