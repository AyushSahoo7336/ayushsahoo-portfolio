import { motion } from "framer-motion";
import { Flame, ExternalLink } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { leetcode } from "@/data/portfolio";

function Bar({ label, count, total, delay }: { label: string; count: number; total: number; delay: number }) {
  const pct = Math.min(100, Math.round((count / total) * 100));
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-xs">
        <span className="font-mono uppercase tracking-wider text-foreground/60">{label}</span>
        <span className="font-mono text-foreground/80">{count}</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-foreground/10">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full"
          style={{
            background: "var(--primary-accent)",
            boxShadow: "0 0 12px var(--primary-accent), 0 0 24px color-mix(in oklab, var(--primary-accent) 50%, transparent)",
          }}
        />
      </div>
    </div>
  );
}

export function ProblemSolverSection() {
  return (
    <div className="pb-20">
      <PageHeader
        eyebrow="LeetCode"
        title={<>Problem <span style={{ color: "var(--primary-accent)" }}>Solver</span></>}
        intro="Consistently tackling complex data structures and optimizing algorithms for maximum efficiency."
      />
      <section className="mx-auto max-w-6xl px-6">
        <div
          className="interactive-card rounded-3xl bg-[var(--glass-bg)] p-8 backdrop-blur-sm md:p-12 shadow-[var(--glass-shadow)]"
          style={{ borderColor: "var(--glass-border)" }}
        >
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* Left */}
            <div>
              <h2 className="font-display text-3xl font-bold leading-tight md:text-4xl">
                Algorithmic <span style={{ color: "var(--primary-accent)" }}>Problem Solver</span>
              </h2>
              <p className="mt-5 max-w-md text-foreground/65 leading-relaxed">
                Hundreds of problems shipped across arrays, graphs, DP and heaps — turning brute force into
                logarithmic wins one commit at a time.
              </p>
              <a
                href={leetcode.profile}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-wider transition hover:bg-foreground/5"
                style={{ borderColor: "var(--glass-border)", color: "var(--primary-accent)" }}
              >
                View Profile <ExternalLink size={12} />
              </a>
            </div>

            {/* Right */}
            <div className="space-y-8">
              <div className="flex items-end gap-4">
                <div
                  className="font-display text-7xl font-bold leading-none md:text-8xl"
                  style={{ color: "var(--primary-accent)" }}
                >
                  {leetcode.total}
                </div>
                <div className="pb-2 text-sm uppercase tracking-[0.25em] text-foreground/60">Solved</div>
              </div>

              <div className="space-y-4">
                <Bar label="Easy" count={leetcode.easy} total={leetcode.total} delay={0.05} />
                <Bar label="Medium" count={leetcode.medium} total={leetcode.total} delay={0.15} />
                <Bar label="Hard" count={leetcode.hard} total={leetcode.total} delay={0.25} />
              </div>

              <div
                className="inline-flex items-center gap-3 rounded-full border px-4 py-2"
                style={{
                  borderColor: "color-mix(in oklab, var(--primary-accent) 40%, transparent)",
                  background: "color-mix(in oklab, var(--primary-accent) 8%, transparent)",
                }}
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span
                    className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
                    style={{ background: "var(--primary-accent)" }}
                  />
                  <span
                    className="relative inline-flex h-2.5 w-2.5 rounded-full"
                    style={{ background: "var(--primary-accent)" }}
                  />
                </span>
                <Flame size={14} style={{ color: "var(--primary-accent)" }} />
                <span className="text-sm font-medium">
                  <span style={{ color: "var(--primary-accent)" }}>{leetcode.streak}-Day</span>{" "}
                  <span className="text-foreground/70">Max Streak</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
