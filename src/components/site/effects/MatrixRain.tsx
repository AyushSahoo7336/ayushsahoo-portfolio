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
      if (t - last > 120) {
        last = t;
        const isLight = document.documentElement.classList.contains("light");
        ctx.fillStyle = isLight ? "rgba(248,250,252,0.10)" : "rgba(4,8,20,0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        if (isLight) {
          ctx.fillStyle = "#94a3b8";
        } else {
          const accent = getComputedStyle(document.documentElement).getPropertyValue("--primary-accent") || "#22d3ee";
          ctx.fillStyle = accent.trim();
        }
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
  return <canvas ref={ref} aria-hidden className="pointer-events-none fixed inset-0 -z-10" />;
}
