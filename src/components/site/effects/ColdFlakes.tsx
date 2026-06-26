import { useEffect, useState } from "react";
import { useThemeMode } from "@/hooks/use-theme-mode";

type Flake = { left: number; delay: number; dur: number; size: number; opacity: number };

export function ColdFlakes() {
  const [flakes, setFlakes] = useState<Flake[]>([]);
  const mode = useThemeMode();
  const isLight = mode === "light";
  useEffect(() => {
    setFlakes(
      Array.from({ length: 80 }).map(() => ({
        left: Math.random() * 100,
        delay: Math.random() * 8,
        dur: 6 + Math.random() * 8,
        size: 2 + Math.random() * 4,
        opacity: 0.3 + Math.random() * 0.6,
      })),
    );
  }, []);
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {flakes.map((f, i) => (
        <span
          key={i}
          className="absolute top-[-10%] rounded-full"
          style={{
            left: `${f.left}%`,
            width: f.size,
            height: f.size,
            backgroundColor: isLight ? "#94a3b8" : "#ffffff",
            opacity: isLight ? f.opacity * 0.5 : f.opacity,
            animation: `fall ${f.dur}s linear ${f.delay}s infinite`,
          }}
        />
      ))}
      <style>{`@keyframes fall { to { transform: translateY(110vh); } }`}</style>
    </div>
  );
}
