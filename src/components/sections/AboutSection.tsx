import { PageHeader } from "@/components/site/PageHeader";
import { bio } from "@/data/portfolio";
import { motion } from "framer-motion";
import { useState } from "react";

function AtomOrbit() {
  const [hovered, setHovered] = useState(false);
  const speedFactor = hovered ? 0.5 : 1;

  const rings = [
    { rot: "rotateX(75deg) rotateY(0deg)", dur: 18, dotDur: 9 },
    { rot: "rotateX(60deg) rotateY(60deg)", dur: 24, dotDur: 12 },
    { rot: "rotateX(60deg) rotateY(-60deg)", dur: 30, dotDur: 15 },
  ];

  return (
    <motion.div
      className="relative mx-auto aspect-square w-full max-w-[420px]"
      style={{ perspective: "900px" }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      animate={{ scale: hovered ? 1.04 : 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 14 }}
    >
      {/* Nucleus glow — pulsing */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl"
        style={{ background: "var(--primary-accent)", width: 96, height: 96 }}
        animate={{ opacity: hovered ? [0.7, 1, 0.7] : [0.45, 0.7, 0.45], scale: [1, 1.15, 1] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ background: "var(--primary-accent)", color: "var(--primary-accent)" }}
        animate={{
          boxShadow: [
            "0 0 16px var(--primary-accent)",
            "0 0 36px var(--primary-accent)",
            "0 0 16px var(--primary-accent)",
          ],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Orbital rings — continuous rotation */}
      {rings.map((r, i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          style={{ transform: r.rot, transformStyle: "preserve-3d" }}
          animate={{ rotate: 360 }}
          transition={{ duration: r.dur * speedFactor, repeat: Infinity, ease: "linear" }}
        >
          <div
            className="absolute inset-[8%] rounded-full border transition-all duration-300"
            style={{
              borderColor: `color-mix(in oklab, var(--primary-accent) ${hovered ? 55 : 35}%, transparent)`,
              boxShadow: `0 0 ${hovered ? 30 : 20}px color-mix(in oklab, var(--primary-accent) ${hovered ? 40 : 25}%, transparent) inset`,
            }}
          />
          <div
            className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background: "var(--primary-accent)",
              boxShadow: "0 0 12px var(--primary-accent)",
              animation: `atom-spin-${i} ${r.dotDur * speedFactor}s linear infinite`,
              transformOrigin: "center",
            }}
          />
        </motion.div>
      ))}

      <style>{`
        @keyframes atom-spin-0 { from { transform: translate(-50%, -50%) rotate(0deg) translateX(42%) rotate(0deg); } to { transform: translate(-50%, -50%) rotate(360deg) translateX(42%) rotate(-360deg); } }
        @keyframes atom-spin-1 { from { transform: translate(-50%, -50%) rotate(0deg) translateX(42%) rotate(0deg); } to { transform: translate(-50%, -50%) rotate(-360deg) translateX(42%) rotate(360deg); } }
        @keyframes atom-spin-2 { from { transform: translate(-50%, -50%) rotate(0deg) translateX(42%) rotate(0deg); } to { transform: translate(-50%, -50%) rotate(360deg) translateX(42%) rotate(-360deg); } }
      `}</style>
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
              <AtomOrbit />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
