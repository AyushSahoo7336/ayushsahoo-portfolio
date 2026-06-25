import { useState } from "react";
import { motion } from "framer-motion";
import { Layout, Server, Smartphone, Gamepad2 } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { bio, skills } from "@/data/portfolio";

const ICONS = { Layout, Server, Smartphone, Gamepad2 } as const;

export function AboutSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="pb-20">
      <PageHeader eyebrow="About Me" title="I'm focused on execution" intro="Less talk, more shipped products." />
      <section className="mx-auto max-w-3xl px-6">
        <h2 className="font-display text-2xl font-semibold">Biography</h2>
        <div className="mt-4 space-y-4 text-foreground/70 leading-relaxed">
          {bio.map((p, i) => (<p key={i}>{p}</p>))}
        </div>
      </section>
      <section className="mx-auto mt-20 max-w-5xl px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold md:text-4xl">My Skills</h2>
          <p className="mt-2 text-foreground/55">Technologies and domains I specialize in — click to explore</p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {skills.map((s, i) => {
            const Icon = ICONS[s.icon as keyof typeof ICONS] ?? Layout;
            const active = open === i;
            return (
              <motion.button
                key={s.title}
                onClick={() => setOpen(active ? null : i)}
                layout
                className="interactive-card rounded-2xl bg-white/[0.02] p-6 text-left backdrop-blur-sm"
                style={active ? { borderColor: "color-mix(in oklab, var(--primary-accent) 60%, transparent)" } : undefined}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="grid h-10 w-10 place-items-center rounded-xl"
                    style={{
                      backgroundColor: "color-mix(in oklab, var(--primary-accent) 15%, transparent)",
                      color: "var(--primary-accent)",
                    }}
                  >
                    <Icon size={18} />
                  </span>
                  <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                </div>
                <p className="mt-4 text-sm text-foreground/60">{s.blurb}</p>
                {active && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-4 flex flex-wrap gap-2"
                  >
                    {s.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-foreground/70"
                      >
                        {t}
                      </span>
                    ))}
                  </motion.div>
                )}
              </motion.button>
            );
          })}
        </div>
      </section>
    </div>
  );
}
