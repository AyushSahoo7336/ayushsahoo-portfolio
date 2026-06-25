import { marqueeWords } from "@/data/portfolio";

export function Marquee() {
  const items = [...marqueeWords, ...marqueeWords, ...marqueeWords, ...marqueeWords];
  return (
    <div className="relative overflow-hidden border-y border-border py-6">
      <div className="flex whitespace-nowrap animate-marquee">
        {items.map((w, i) => (
          <span
            key={i}
            className="mx-8 font-display text-3xl md:text-5xl font-bold tracking-wider text-muted-foreground/40"
          >
            {w}
            <span className="ml-8 text-primary">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
