import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Flame, ExternalLink } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Skeleton } from "@/components/ui/skeleton";
import { leetcode } from "@/data/portfolio";

type Stats = { total: number; easy: number; medium: number; hard: number };

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
          animate={{ width: `${pct}%` }}
          transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full"
          style={{
            background: "var(--primary-accent)",
            boxShadow:
              "0 0 12px var(--primary-accent), 0 0 24px color-mix(in oklab, var(--primary-accent) 50%, transparent)",
          }}
        />
      </div>
    </div>
  );
}

export function ProblemSolverSection() {
  const fallback: Stats = {
    total: leetcode.total,
    easy: leetcode.easy,
    medium: leetcode.medium,
    hard: leetcode.hard,
  };
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 6000);
    (async () => {
      try {
        const res = await fetch(
          "https://leetcode-stats-api.herokuapp.com/api/v1/AyushSahoo1",
          { signal: ctrl.signal },
        );
        if (!res.ok) throw new Error("bad status");
        const json = await res.json();
        if (cancelled) return;
        if (typeof json?.totalSolved === "number") {
          setStats({
            total: json.totalSolved,
            easy: json.easySolved ?? 0,
            medium: json.mediumSolved ?? 0,
            hard: json.hardSolved ?? 0,
          });
        } else {
          setStats(fallback);
        }
      } catch {
        if (!cancelled) setStats(fallback);
      } finally {
        clearTimeout(timer);
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
      ctrl.abort();
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const s = stats ?? fallback;

  return (
    <div className="pb-20">
      <PageHeader
        eyebrow="LeetCode"
        title={<>Problem <span style={{ color: "var(--primary-accent)" }}>Solver</span></>}
        intro="Consistently tackling complex data structures and optimizing algorithms for maximum efficiency."
      />
      <section className="mx-auto max-w-6xl px-6">
        <div
          className="interactive-card rounded-3xl bg-[var(--glass-bg)] p-8 backdrop-blur-sm shadow-[var(--glass-shadow)] md:p-12"
          style={{ borderColor: "var(--glass-border)" }}
        >
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-bold leading-tight md:text-4xl">
                Algorithmic <span style={{ color: "var(--primary-accent)" }}>Problem Solver</span>
              </h2>
              <p className="mt-5 max-w-md leading-relaxed text-foreground/65">
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

            <div className="space-y-8">
              <div className="flex items-end gap-4">
                {loading ? (
                  <Skeleton className="h-20 w-40 md:h-24" />
                ) : (
                  <motion.div
                    key={s.total}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="font-display text-7xl font-bold leading-none md:text-8xl"
                    style={{ color: "var(--primary-accent)" }}
                  >
                    {s.total}
                  </motion.div>
                )}
                <div className="pb-2 text-sm uppercase tracking-[0.25em] text-foreground/60">Solved</div>
              </div>

              <div className="space-y-4">
                {loading ? (
                  <>
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                  </>
                ) : (
                  <>
                    <Bar label="Easy" count={s.easy} total={s.total} delay={0.05} />
                    <Bar label="Medium" count={s.medium} total={s.total} delay={0.15} />
                    <Bar label="Hard" count={s.hard} total={s.total} delay={0.25} />
                  </>
                )}
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
