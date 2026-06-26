import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layout,
  Server,
  Database,
  Terminal,
  Network,
  Boxes,
  PieChart,
  Cable,
  RadioTower,
  Cloud,
  ShieldCheck,
  ServerCog,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { SpotlightCard } from "@/components/site/SpotlightCard";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { skillCategories } from "@/data/portfolio";

const categoryIconMap: Record<string, LucideIcon> = {
  Layout,
  Server,
  Database,
  Terminal,
};

const itemIconMap: Record<string, LucideIcon> = {
  Network,
  Boxes,
  PieChart,
  Cable,
  RadioTower,
  Cloud,
  ShieldCheck,
  Database,
  ServerCog,
};

export function SkillsSection() {
  const [openId, setOpenId] = useState<string | null>(null);
  const active = skillCategories.find((c) => c.id === openId) ?? null;

  return (
    <div className="pb-20">
      <PageHeader
        eyebrow="MY SKILLS"
        title={<>Tech I <span style={{ color: "var(--primary-accent)" }}>work with</span></>}
        intro="Click a category to explore the stack."
      />
      <section className="mx-auto grid max-w-5xl grid-cols-1 gap-5 px-6 md:grid-cols-2">
        {skillCategories.map((cat, index) => {
          const Icon = categoryIconMap[cat.icon] ?? Layout;
          return (
            <Reveal key={cat.id} delay={index * 0.15}>
              <SpotlightCard
                as="button"
                onClick={() => setOpenId(cat.id)}
                className="interactive-card group h-full w-full overflow-hidden rounded-3xl border bg-[var(--glass-bg)] p-7 backdrop-blur-sm shadow-[var(--glass-shadow)]"
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
              </SpotlightCard>
            </Reveal>
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
                  {active.items.map((item, i) => {
                    const LucideItemIcon =
                      item.iconType === "lucide" ? itemIconMap[item.icon] : null;
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                        className="flex items-center gap-4 rounded-xl border border-foreground/10 bg-foreground/[0.04] p-4 backdrop-blur-sm transition-colors hover:border-[var(--primary-accent)]/40 hover:bg-foreground/[0.06]"
                      >
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-foreground/[0.04]">
                          {item.iconType === "devicon" ? (
                            <img
                              src={item.icon}
                              alt={item.name}
                              className={`h-8 w-8 object-contain ${item.invertOnDark ? "dark:invert" : ""}`}
                              loading="lazy"
                            />
                          ) : LucideItemIcon ? (
                            <LucideItemIcon size={24} style={{ color: "var(--primary-accent)" }} />
                          ) : null}
                        </div>
                        <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                          <span className="font-display text-sm font-bold text-foreground">{item.name}</span>
                          <span className="text-xs leading-relaxed text-foreground/60">{item.description}</span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </div>
  );
}
