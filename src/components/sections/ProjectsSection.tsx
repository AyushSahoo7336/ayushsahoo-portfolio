import { useState } from "react";
import { Github, ExternalLink, ArrowUpRight, ChevronRight } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { projects } from "@/data/portfolio";

type Project = (typeof projects)[number];

export function ProjectsSection() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <div className="pb-20">
      <PageHeader
        eyebrow="My Projects"
        title={<>Things I&apos;ve <span style={{ color: "var(--primary-accent)" }}>built</span></>}
        intro="Click any project to see the full breakdown."
      />
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 md:grid-cols-3">
        {projects.map((p) => (
          <button
            key={p.title}
            onClick={() => setActive(p)}
            className="interactive-card group flex flex-col overflow-hidden rounded-3xl bg-[var(--glass-bg)] text-left backdrop-blur-sm shadow-[var(--glass-shadow)]"
            style={{ borderColor: "var(--glass-border)" }}
          >
            <div className={`relative aspect-video overflow-hidden bg-gradient-to-br ${p.accent}`}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div
                className="absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-50 blur-3xl transition-opacity group-hover:opacity-80"
                style={{ background: "var(--primary-accent)" }}
              />
              <span
                className="absolute left-4 top-4 inline-flex items-center rounded-full border bg-black/30 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] backdrop-blur-sm"
                style={{
                  borderColor: "color-mix(in oklab, var(--primary-accent) 40%, transparent)",
                  color: "var(--primary-accent)",
                }}
              >
                {p.category}
              </span>
            </div>
            <div className="flex flex-1 flex-col gap-4 p-6">
              <h3 className="font-display text-2xl font-bold tracking-tight text-foreground">
                {p.title}
              </h3>
              <span
                className="mt-auto inline-flex w-fit items-center gap-1.5 rounded-full border px-3.5 py-2 text-xs font-medium transition-transform group-hover:translate-x-1"
                style={{
                  borderColor: "color-mix(in oklab, var(--primary-accent) 40%, transparent)",
                  color: "var(--primary-accent)",
                }}
              >
                View Details <ArrowUpRight size={13} />
              </span>
            </div>
          </button>
        ))}
      </section>

      <Dialog open={active !== null} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent
          className="sleek-scrollbar max-h-[90vh] overflow-y-auto border bg-[var(--glass-bg)] p-0 backdrop-blur-xl shadow-[0_0_40px_color-mix(in_oklab,var(--primary-accent)_10%,transparent)] sm:max-w-2xl"
          style={{ borderColor: "color-mix(in oklab, var(--primary-accent) 20%, transparent)" }}
        >
          {active && (
            <>
              <div className="relative h-[250px] w-full overflow-hidden rounded-t-xl bg-muted/30">
                {active.image ? (
                  <img
                    src={active.image}
                    alt={active.title}
                    className="h-full w-full object-cover object-top"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-muted-foreground">
                    <span className="text-sm font-medium">Project Screenshot</span>
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-4 p-6">
                <DialogTitle className="font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                  {active.title}
                </DialogTitle>
                {active.tech && (
                  <div className="flex flex-wrap gap-2">
                    {active.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider"
                        style={{
                          borderColor: "color-mix(in oklab, var(--primary-accent) 20%, transparent)",
                          backgroundColor: "color-mix(in oklab, var(--primary-accent) 10%, transparent)",
                          color: "var(--primary-accent)",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                  {active.blurb}
                </p>
                {active.highlights.length > 0 && (
                  <ul className="space-y-2 text-sm text-muted-foreground/90">
                    {active.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2">
                        <ChevronRight
                          size={16}
                          className="mt-0.5 shrink-0"
                          style={{ color: "var(--primary-accent)" }}
                        />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="flex flex-wrap gap-3 pt-2">
                  {active.github && (
                    <a
                      href={active.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-foreground/5"
                      style={{ borderColor: "var(--glass-border)" }}
                    >
                      <Github size={15} /> GitHub
                    </a>
                  )}
                  {active.demo && (
                    <a
                      href={active.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-black"
                      style={{ backgroundColor: "var(--primary-accent)" }}
                    >
                      <ExternalLink size={15} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
