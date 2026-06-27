import { PageHeader } from "@/components/site/PageHeader";
import { bio } from "@/data/portfolio";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function NetworkSphere() {
  const [hovered, setHovered] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const dpr = window.devicePixelRatio || 1;
    let width = container.clientWidth;
    let height = container.clientHeight;

    const setSize = () => {
      width = container.clientWidth;
      height = container.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
    };
    setSize();

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.scale(dpr, dpr);

    const meridians = 12;
    const parallels = 6;
    const meridianSteps = 48;
    const parallelSteps = 64;
    const radius = Math.min(width, height) * 0.38;
    const perspective = 800;
    let rotY = 0;
    const rotX = 0.3;

    const project = (theta: number, phi: number) => {
      let x = Math.sin(phi) * Math.cos(theta);
      let y = Math.sin(phi) * Math.sin(theta);
      let z = Math.cos(phi);

      const cy = Math.cos(rotY), sy = Math.sin(rotY);
      const x1 = x * cy + z * sy;
      const z1 = -x * sy + z * cy;
      x = x1; z = z1;

      const cx = Math.cos(rotX), sx = Math.sin(rotX);
      const y2 = y * cx - z * sx;
      const z2 = y * sx + z * cx;
      y = y2; z = z2;

      const scale = perspective / (perspective + z * radius * 2.5);
      return {
        x: width / 2 + x * radius * scale,
        y: height / 2 + y * radius * scale,
        z,
      };
    };

    let raf = 0;
    const draw = () => {
      rotY += 0.003;
      ctx.clearRect(0, 0, width, height);

      const accent = getComputedStyle(document.documentElement)
        .getPropertyValue("--primary-accent")
        .trim() || "#22d3ee";

      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.shadowColor = accent;
      ctx.shadowBlur = hovered ? 18 : 10;
      ctx.strokeStyle = accent;

      // Meridians (longitude)
      for (let m = 0; m < meridians; m++) {
        const theta = (m / meridians) * Math.PI * 2;
        for (let s = 0; s < meridianSteps; s++) {
          const phi1 = (s / meridianSteps) * Math.PI;
          const phi2 = ((s + 1) / meridianSteps) * Math.PI;
          const p1 = project(theta, phi1);
          const p2 = project(theta, phi2);
          const midZ = (p1.z + p2.z) / 2;
          const alpha = 0.1 + ((midZ + 1) / 2) * (hovered ? 0.45 : 0.3);
          ctx.globalAlpha = alpha;
          ctx.lineWidth = hovered ? 1.6 : 1.0;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }

      // Parallels (latitude)
      for (let p = 1; p <= parallels; p++) {
        const phi = (p / (parallels + 1)) * Math.PI;
        for (let s = 0; s < parallelSteps; s++) {
          const theta1 = (s / parallelSteps) * Math.PI * 2;
          const theta2 = ((s + 1) / parallelSteps) * Math.PI * 2;
          const p1 = project(theta1, phi);
          const p2 = project(theta2, phi);
          const midZ = (p1.z + p2.z) / 2;
          const alpha = 0.1 + ((midZ + 1) / 2) * (hovered ? 0.45 : 0.3);
          ctx.globalAlpha = alpha;
          ctx.lineWidth = hovered ? 1.6 : 1.0;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }

      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);

    const onResize = () => {
      setSize();
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, [hovered]);

  return (
    <motion.div
      ref={containerRef}
      className="relative mx-auto aspect-square w-full max-w-[420px]"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      animate={{ scale: hovered ? 1.04 : 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 14 }}
    >
      {/* Soft ambient glow behind the sphere */}
      <div
        className="pointer-events-none absolute inset-0 rounded-full blur-3xl opacity-40"
        style={{
          background: "radial-gradient(circle, var(--primary-accent) 0%, transparent 70%)",
          transform: "scale(0.85)",
        }}
      />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
      />
    </motion.div>
  );
}

export function AboutSection() {
  return (
    <div className="pb-20">
      <PageHeader
        title={<>About <span style={{ color: "var(--primary-accent)" }}>Me</span></>}
        intro="I'm a software developer focused on execution. Less talk, more shipped products."
      />
      <section className="mx-auto max-w-6xl px-6">
        <div
          className="interactive-card rounded-3xl bg-[var(--glass-bg)] p-8 backdrop-blur-sm md:p-12 shadow-[var(--glass-shadow)]"
          style={{ borderColor: "var(--glass-border)" }}
        >
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-bold">Biography</h2>
              <div className="mt-6 space-y-5 text-foreground/70 leading-relaxed">
                {bio.map((p, i) => (<p key={i}>{p}</p>))}
              </div>
            </div>
            <div className="flex items-center justify-center">
              <NetworkSphere />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
