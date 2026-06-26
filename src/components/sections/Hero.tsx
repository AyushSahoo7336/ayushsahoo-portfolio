import { motion } from "framer-motion";
import { Sparkles, Code2, Rocket, ChevronDown, Hand } from "lucide-react";
import { profile } from "@/data/portfolio";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function Hero() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-28">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative max-w-2xl"
      >
        <div className="mb-5 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em]" style={{ color: "var(--primary-accent)" }}>
          <Sparkles size={14} />
          {profile.welcome}
        </div>

        <div className="relative">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px]"
            style={{ backgroundColor: "color-mix(in oklab, var(--primary-accent) 20%, transparent)" }}
          />
          <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
            Hi, I'm <span style={{ color: "var(--primary-accent)" }}>{profile.name.split(" ")[0]}</span>
          </h1>
        </div>

        <p className="mt-5 flex items-center gap-2 text-2xl font-light text-foreground/70 md:text-3xl">
          {profile.role}
          <Hand
            className="inline-block animate-[wave_1.6s_ease-in-out_infinite] origin-[70%_70%]"
            style={{ color: "var(--primary-accent)" }}
            size={28}
          />
        </p>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/60">
          {profile.tagline}
        </p>

        {profile.quote && (
          <blockquote
            className="mt-7 border-l-2 pl-4 text-sm italic text-foreground/55"
            style={{ borderColor: "var(--primary-accent)" }}
          >
            “{profile.quote}”
          </blockquote>
        )}

        <div className="mt-8 flex flex-wrap gap-3">
          {profile.stats.map((s, i) => (
            <div
              key={s.label}
              className="interactive-card flex items-center gap-3 rounded-2xl bg-[var(--glass-bg)] px-4 py-3 backdrop-blur-sm"
            >
              <span
                className="grid h-9 w-9 place-items-center rounded-lg"
                style={{
                  backgroundColor: "color-mix(in oklab, var(--primary-accent) 15%, transparent)",
                  color: "var(--primary-accent)",
                }}
              >
                {i === 0 ? <Code2 size={16} /> : <Rocket size={16} />}
              </span>
              <div>
                <div className="font-display text-xl font-bold leading-none">{s.value}</div>
                <div className="mt-1 text-[11px] uppercase tracking-wider text-foreground/50">{s.label}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <button
            onClick={() => scrollTo("projects")}
            className="rounded-full px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90"
            style={{ backgroundColor: "var(--primary-accent)" }}
          >
            View Details
          </button>
          <button
            onClick={() => scrollTo("lets-talk")}
            className="rounded-full border bg-[var(--glass-bg)] px-6 py-3 text-sm font-semibold text-foreground shadow-[var(--glass-shadow)] transition hover:opacity-80"
            style={{ borderColor: "var(--glass-border)" }}
          >
            Let's Talk
          </button>
        </div>
      </motion.div>

      <div className="mt-16 flex flex-col items-center text-[10px] uppercase tracking-[0.3em] text-foreground/40">
        Scroll
        <ChevronDown size={14} className="mt-1 animate-bounce" style={{ color: "var(--primary-accent)" }} />
      </div>
    </section>
  );
}
