"use client";

const items = [
  "MACHINE LEARNING",
  "WEB DEVELOPMENT",
  "RESEARCH WRITING",
];

export default function Marquee() {
  const line = items.join("   ✦   ") + "   ✦   ";
  return (
    <div className="group relative overflow-hidden border-y border-navy/15 bg-gradient-to-r from-navy via-[#2f4463] to-navy py-3">
      <div className="flex w-max animate-marquee whitespace-nowrap [animation-play-state:running] group-hover:[animation-play-state:paused]">
        <span className="pr-4 font-serif text-lg italic text-shell/90">
          {line.repeat(4)}
        </span>
        <span className="pr-4 font-serif text-lg italic text-shell/90">
          {line.repeat(4)}
        </span>
      </div>
    </div>
  );
}
