"use client";

import { useEffect, useState } from "react";

export function Typewriter({
  words,
  className = "",
}: {
  words: string[];
  className?: string;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 1800);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <span className={`relative inline-block ${className}`}>
      {words[index]}
      <span className="ml-0.5 inline-block h-[1em] w-[2px] animate-pulse bg-current align-middle" />
    </span>
  );
}
