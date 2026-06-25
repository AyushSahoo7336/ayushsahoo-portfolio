import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { projectCategories, projects } from "@/data/portfolio";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
  head: () => ({
    meta: [
      { title: "Projects — Portfolio" },
      { name: "description", content: "A collection of my work across different platforms and technologies." },
      { property: "og:title", content: "Projects" },
      { property: "og:description", content: "A collection of my work across different platforms and technologies." },
    ],
  }),
});

function ProjectsPage() {
  const [filter, setFilter] = useState<(typeof projectCategories)[number]>("All");
  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="pb-20">
      <PageHeader
        eyebrow="My Projects"
        title="Things I've built"
        intro="A collection of work across different platforms and technologies."
      />

      <div className="mx-auto mb-10 flex max-w-3xl flex-wrap justify-center gap-2 px-6">
        {projectCategories.map((c) => {
          const active = filter === c;
          return (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className="rounded-full border px-4 py-1.5 text-xs font-medium uppercase tracking-wider transition"
              style={{
                borderColor: active ? "var(--primary-accent)" : "rgba(255,255,255,0.1)",
                color: active ? "var(--primary-accent)" : "rgba(255,255,255,0.6)",
                backgroundColor: active ? "color-mix(in oklab, var(--primary-accent) 10%, transparent)" : "transparent",
              }}
            >
              {c}
            </button>
          );
        })}
      </div>

      <section className="mx-auto grid max-w-6xl gap-5 px-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((p) => (
            <motion.article
              key={p.title}
              layout
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm transition hover:-translate-y-1 hover:border-white/20"
            >
              <div className={`relative h-40 bg-gradient-to-br ${p.accent}`}>
                <div className="absolute inset-0 grid place-items-center font-display text-2xl font-bold text-white/90">
                  {p.title}
                </div>
              </div>
              <div className="p-5">
                <div className="mb-1 text-[10px] uppercase tracking-wider" style={{ color: "var(--primary-accent)" }}>
                  {p.category}
                </div>
                <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-foreground/60">{p.blurb}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-xs hover:bg-white/5"
                    >
                      <Github size={12} /> GitHub
                    </a>
                  )}
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-black"
                      style={{ backgroundColor: "var(--primary-accent)" }}
                    >
                      <ExternalLink size={12} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </section>
    </div>
  );
}
