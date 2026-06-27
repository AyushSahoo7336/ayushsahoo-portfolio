import { PageHeader } from "@/components/site/PageHeader";
import { bio } from "@/data/portfolio";
import { motion } from "framer-motion";
import { useState } from "react";

function NetworkSphere() {
  const [hovered, setHovered] = useState(false);

  // Golden spiral distribution for evenly spaced points on a sphere
  const nodeCount = 40;
  const nodes = Array.from({ length: nodeCount }, (_, i) => {
    const phi = Math.acos(1 - (2 * (i + 0.5)) / nodeCount);
    const theta = Math.PI * (1 + Math.sqrt(5)) * i;
    return { phi, theta, id: i };
  });

  const radius = 42; // % of container
  const perspective = 800;

  const project = (phi: number, theta: number, rotY: number, rotX: number) => {
    // 3D rotation
    let x = Math.sin(phi) * Math.cos(theta);
    let y = Math.sin(phi) * Math.sin(theta);
    let z = Math.cos(phi);

    // rotate around Y
    const cy = Math.cos(rotY), sy = Math.sin(rotY);
    const x1 = x * cy + z * sy;
    const z1 = -x * sy + z * cy;
    x = x1; z = z1;

    // rotate around X
    const cx = Math.cos(rotX), sx = Math.sin(rotX);
    const y2 = y * cx - z * sx;
    const z2 = y * sx + z * cx;
    y = y2; z = z2;

    const scale = perspective / (perspective + z * radius * 2);
    return {
      x: 50 + x * radius * scale,
      y: 50 + y * radius * scale,
      scale,
      z,
    };
  };

  // Pre-calculate connections (nearest neighbors)
  const connections: { a: number; b: number }[] = [];
  for (let i = 0; i < nodeCount; i++) {
    for (let j = i + 1; j < nodeCount; j++) {
      const dx = nodes[i].phi - nodes[j].phi;
      const dy = nodes[i].theta - nodes[j].theta;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 1.2) connections.push({ a: i, b: j });
    }
  }

  return (
    <motion.div
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

      {/* Rotating 3D sphere assembly */}
      <motion.div
        className="absolute inset-0"
        style={{ perspective: `${perspective}px`, transformStyle: "preserve-3d" }}
        animate={{ rotateY: [0, 360] }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      >
        <SphereLayer nodes={nodes} connections={connections} radius={radius} perspective={perspective} hovered={hovered} />
      </motion.div>
    </motion.div>
  );
}

function SphereLayer({
  nodes,
  connections,
  radius,
  perspective,
  hovered,
}: {
  nodes: { phi: number; theta: number; id: number }[];
  connections: { a: number; b: number }[];
  radius: number;
  perspective: number;
  hovered: boolean;
}) {
  // Use a slow counter-rotating inner layer for depth
  return (
    <div className="absolute inset-0" style={{ transformStyle: "preserve-3d" }}>
      {/* Lines rendered as SVG for crispness */}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {connections.map((c, idx) => {
          const a = projectStatic(nodes[c.a].phi, nodes[c.a].theta, radius, perspective);
          const b = projectStatic(nodes[c.b].phi, nodes[c.b].theta, radius, perspective);
          const opacity = 0.15 + ((a.z + b.z + 2) / 4) * 0.25;
          return (
            <line
              key={`l-${idx}`}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke="var(--primary-accent)"
              strokeWidth={0.15}
              strokeOpacity={hovered ? Math.min(opacity * 1.8, 0.55) : opacity}
              style={{ transition: "stroke-opacity 0.4s ease" }}
            />
          );
        })}
      </svg>

      {/* Dots */}
      {nodes.map((n) => {
        const p = projectStatic(n.phi, n.theta, radius, perspective);
        const size = 1.2 + p.scale * 1.4;
        const opacity = 0.4 + ((p.z + 1) / 2) * 0.6;
        return (
          <div
            key={n.id}
            className="absolute rounded-full"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${size}px`,
              height: `${size}px`,
              background: "var(--primary-accent)",
              transform: "translate(-50%, -50%)",
              opacity: hovered ? Math.min(opacity * 1.5, 1) : opacity,
              boxShadow: `0 0 ${size * 3}px ${size}px color-mix(in oklab, var(--primary-accent) ${hovered ? 60 : 35}%, transparent)`,
              transition: "opacity 0.4s ease, box-shadow 0.4s ease",
            }}
          />
        );
      })}
    </div>
  );
}

function projectStatic(phi: number, theta: number, radius: number, perspective: number) {
  const rotY = 0;
  const rotX = 0.3;
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

  const scale = perspective / (perspective + z * radius * 2);
  return {
    x: 50 + x * radius * scale,
    y: 50 + y * radius * scale,
    scale,
    z,
  };
}


export function AboutSection() {
  return (
    <div className="pb-20">
      <PageHeader
        title={<>About <span style={{ color: "var(--primary-accent)" }}>Me</span></>}
        intro="I'm a software developer focused on execution. Less talk, more shipped products."
      />
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
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
