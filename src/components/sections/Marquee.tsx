import { marqueeWords } from "@/data/portfolio";

export function Marquee() {
  const row = [...marqueeWords, ...marqueeWords, ...marqueeWords];
  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-white/[0.02] py-5">
      <div className="flex w-max gap-10 whitespace-nowrap animate-[marquee_45s_linear_infinite]">
        {row.map((w, i) => (
          <span
            key={i}
            className="flex items-center gap-10 font-display text-xl font-semibold uppercase tracking-[0.18em] text-foreground/70"
          >
            {w}
            <span style={{ color: "var(--primary-accent)" }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
