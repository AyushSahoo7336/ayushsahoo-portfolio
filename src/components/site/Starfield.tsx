import { useEffect, useState } from "react";
import { useThemeMode } from "@/hooks/use-theme-mode";

type Star = { x: number; y: number; size: number; opacity: number; delay: number };

export function Starfield() {
  const [stars, setStars] = useState<Star[]>([]);
  const mode = useThemeMode();
  const isLight = mode === "light";

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
          background: isLight
            ? "radial-gradient(ellipse at top, rgba(6,182,212,0.05), transparent 55%), radial-gradient(ellipse at bottom, rgba(226,232,240,1), var(--background))"
            : "radial-gradient(ellipse at top, rgba(6,182,212,0.08), transparent 55%), radial-gradient(ellipse at bottom, rgba(2,8,23,1), var(--background))",
        }}
      />
      {stars.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            backgroundColor: isLight ? "#94a3b8" : "#ffffff",
            opacity: isLight ? s.opacity * 0.4 : s.opacity,
            animation: `twinkle 4s ease-in-out ${s.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
