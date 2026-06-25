import { useEffect, useRef } from "react";

export function MatrixRain() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf = 0;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    const chars = "01ｱｲｳｴｵｶｷｸｹｺABCDEF<>/{}".split("");
    const fontSize = 14;
    let cols = Math.floor(canvas.width / fontSize);
    let drops = Array(cols).fill(1);
    let last = 0;
    const step = (t: number) => {
      if (t - last > 60) {
        last = t;
        ctx.fillStyle = "rgba(4,8,20,0.08)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        const accent = getComputedStyle(document.documentElement).getPropertyValue("--primary-accent") || "#22d3ee";
        ctx.fillStyle = accent.trim();
        ctx.font = `${fontSize}px monospace`;
        cols = Math.floor(canvas.width / fontSize);
        if (drops.length !== cols) drops = Array(cols).fill(1);
        for (let i = 0; i < drops.length; i++) {
          const c = chars[Math.floor(Math.random() * chars.length)];
          ctx.fillText(c, i * fontSize, drops[i] * fontSize);
          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
          drops[i]++;
        }
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);
  return <canvas ref={ref} aria-hidden className="pointer-events-none fixed inset-0 -z-[5] opacity-50" />;
}
