import { useEffect, useState } from "react";

type Star = { x: number; y: number; size: number; opacity: number; delay: number };

export function Starfield() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const next: Star[] = Array.from({ length: 140 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 1.6 + 0.4,
      opacity: Math.random() * 0.6 + 0.2,
      delay: Math.random() * 6,
    }));
    setStars(next);
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(6,182,212,0.08), transparent 55%), radial-gradient(ellipse at bottom, rgba(2,8,23,1), #040814)",
        }}
      />
      {stars.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            opacity: s.opacity,
            animation: `twinkle 4s ease-in-out ${s.delay}s infinite`,
          }}
        />
      ))}
      <span
        className="absolute h-3 w-3 rounded-full"
        style={{
          left: "1.5rem",
          top: "50%",
          backgroundColor: "var(--primary-accent)",
          boxShadow: "0 0 24px 6px color-mix(in oklab, var(--primary-accent) 60%, transparent)",
        }}
      />
    </div>
  );
}
