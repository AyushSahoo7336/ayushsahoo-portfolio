import { PageHeader } from "@/components/site/PageHeader";
import { bio } from "@/data/portfolio";

function AtomOrbit() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[420px]" style={{ perspective: "900px" }}>
      {/* Nucleus glow */}
      <div
        className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl opacity-60"
        style={{ background: "var(--primary-accent)" }}
      />
      <div
        className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-[0_0_30px_currentColor]"
        style={{ background: "var(--primary-accent)", color: "var(--primary-accent)" }}
      />

      {/* Orbits */}
      {[
        { rx: 70, ry: 20, dur: "8s" },
        { rx: 60, ry: 35, dur: "11s" },
        { rx: 0, ry: 0, dur: "14s" }, // placeholder
      ].map((_, i) => {
        const rotations = ["rotateX(75deg) rotateY(0deg)", "rotateX(60deg) rotateY(60deg)", "rotateX(60deg) rotateY(-60deg)"];
        const durs = ["9s", "12s", "15s"];
        return (
          <div
            key={i}
            className="absolute inset-0"
            style={{ transform: rotations[i], transformStyle: "preserve-3d" }}
          >
            <div
              className="absolute inset-[8%] rounded-full border"
              style={{
                borderColor: "color-mix(in oklab, var(--primary-accent) 35%, transparent)",
                boxShadow: "0 0 20px color-mix(in oklab, var(--primary-accent) 25%, transparent) inset",
              }}
            />
            <div
              className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                background: "var(--primary-accent)",
                boxShadow: "0 0 12px var(--primary-accent)",
                animation: `atom-spin-${i} ${durs[i]} linear infinite`,
                transformOrigin: "center",
              }}
            />
          </div>
        );
      })}

      <style>{`
        @keyframes atom-spin-0 { from { transform: translate(-50%, -50%) rotate(0deg) translateX(42%) rotate(0deg); } to { transform: translate(-50%, -50%) rotate(360deg) translateX(42%) rotate(-360deg); } }
        @keyframes atom-spin-1 { from { transform: translate(-50%, -50%) rotate(0deg) translateX(42%) rotate(0deg); } to { transform: translate(-50%, -50%) rotate(-360deg) translateX(42%) rotate(360deg); } }
        @keyframes atom-spin-2 { from { transform: translate(-50%, -50%) rotate(0deg) translateX(42%) rotate(0deg); } to { transform: translate(-50%, -50%) rotate(360deg) translateX(42%) rotate(-360deg); } }
      `}</style>
    </div>
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
