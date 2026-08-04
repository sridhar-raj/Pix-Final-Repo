import Image from "next/image";
import { NumberCounter } from "@/components/ui/NumberCounter";

export function StatCard({ end, label }: { end: number; label: string }) {
  return (
    <div className="relative flex flex-col items-center overflow-hidden rounded-2xl border border-dark-15 bg-gradient-to-b from-dark-06 to-transparent px-6 pb-11 pt-8 text-center">
      <Image
        src="/images/7o2k4wOFnN2l2pa5d2su4LRfw30.2fa88.svg"
        alt=""
        fill
        className="absolute -top-8 left-1/2 -z-10 -translate-x-1/2 object-cover opacity-30"
      />
      <span
        className="text-5xl font-extrabold text-grey-80"
        style={{ fontFamily: "var(--font-inter-tight)" }}
      >
        <NumberCounter end={end} />
        <span className="text-[#d85040]">+</span>
      </span>
      <p className="mt-2 text-base font-medium text-grey-50">{label}</p>
    </div>
  );
}
