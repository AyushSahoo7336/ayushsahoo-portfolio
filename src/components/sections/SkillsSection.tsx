import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout, Server, Brain, Cpu, ArrowUpRight, X, type LucideIcon } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { skillCategories, type Proficiency } from "@/data/portfolio";

const iconMap: Record<string, LucideIcon> = { Layout, Server, Brain, Cpu };

const levelStyle: Record<Proficiency, string> = {
  Expert: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  Advanced: "bg-purple-500/15 text-purple-400 border-purple-500/30",
  Intermediate: "bg-amber-500/15 text-amber-500 border-amber-500/30",
};

export function SkillsSection() {
  const [openId, setOpenId] = useState<string | null>(null);
  const active = skillCategories.find((c) => c.id === openId) ?? null;

  return (
    <div className="pb-20">
      <PageHeader
        eyebrow="My Skills"
        title={<>Tech I <span style={{ color: "var(--primary-accent)" }}>work with</span></>}
        intro="Click a category to explore the stack."
      />
      <section className="mx-auto grid max-w-5xl grid-cols-1 gap-5 px-6 md:grid-cols-2">
        {skillCategories.map((cat) => {
          const Icon = iconMap[cat.icon] ?? Layout;
          return (
            <button
              key={cat.id}
              onClick={() => setOpenId(cat.id)}
              className="interactive-card group relative overflow-hidden rounded-3xl bg-[var(--glass-bg)] p-7 text-left backdrop-blur-sm shadow-[var(--glass-shadow)]"
              style={{ borderColor: "var(--glass-border)" }}
            >
              <div className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br ${cat.accent} opacity-30 blur-2xl transition-opacity group-hover:opacity-60`} />
              <div className="relative z-10 flex h-full flex-col gap-4">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border"
                  style={{
                    borderColor: "color-mix(in oklab, var(--primary-accent) 40%, transparent)",
                    color: "var(--primary-accent)",
                    background: "color-mix(in oklab, var(--primary-accent) 8%, transparent)",
                  }}
                >
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-foreground">{cat.title}</h3>
                  <p className="mt-2 text-sm text-foreground/65">{cat.blurb}</p>
                </div>
                <div className="mt-auto flex items-center justify-between pt-4">
                  <span className="font-mono text-xs uppercase tracking-wider text-foreground/50">
                    {cat.items.length} technologies
                  </span>
                  <span
                    className="inline-flex items-center gap-1 text-xs font-medium uppercase tracking-wider transition-transform group-hover:translate-x-1"
                    style={{ color: "var(--primary-accent)" }}
                  >
                    Click to explore <ArrowUpRight size={12} />
                  </span>
                </div>
              </div>
            </button>
          );
        })}
      </section>

      <Dialog open={openId !== null} onOpenChange={(o) => !o && setOpenId(null)}>
        <DialogContent
          className="max-h-[85vh] overflow-y-auto border bg-[var(--glass-bg)] backdrop-blur-xl sm:max-w-2xl"
          style={{ borderColor: "var(--glass-border)" }}
        >
          <AnimatePresence mode="wait">
            {active && (
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <DialogTitle className="font-display text-3xl font-bold text-foreground">
                  {active.title}
                </DialogTitle>
                <DialogDescription className="mt-1 text-foreground/65">{active.blurb}</DialogDescription>

                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {active.items.map((item) => (
                    <div
                      key={item.name}
                      className="rounded-2xl border bg-[var(--glass-bg)] p-4 backdrop-blur-sm"
                      style={{ borderColor: "var(--glass-border)" }}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-medium text-foreground">{item.name}</span>
                        <span
                          className={`rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${levelStyle[item.level]}`}
                        >
                          {item.level}
                        </span>
                      </div>
                      <p className="mt-2 text-xs leading-relaxed text-foreground/65">{item.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <button
            onClick={() => setOpenId(null)}
            className="absolute right-4 top-4 rounded-full p-1.5 text-foreground/60 hover:bg-foreground/5 hover:text-foreground"
            aria-label="Close"
          >
            <X size={16} />
          </button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
