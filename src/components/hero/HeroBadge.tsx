export function HeroBadge() {
  return (
    <div className="relative flex items-center gap-2.5 overflow-hidden rounded-full border border-dark-15 bg-dark-03 py-2 pl-2 pr-5">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-dark-08">
        <span className="text-xl" role="img" aria-label="waving hand">
          👋
        </span>
      </div>
      <p className="text-sm font-medium text-white sm:text-base">
        Praha Cusick Welcome&rsquo;s You!
      </p>
    </div>
  );
}
