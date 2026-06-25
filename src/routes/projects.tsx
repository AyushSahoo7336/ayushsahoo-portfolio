import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { projects, projectCategories } from "@/data/portfolio";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Portfolio" },
      { name: "description", content: "A selection of work across web, mobile, desktop, and more." },
      { property: "og:title", content: "Projects — Portfolio" },
      { property: "og:description", content: "A selection of work across web, mobile, desktop, and more." },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const [filter, setFilter] = useState<(typeof projectCategories)[number]>("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <PageLayout
      eyebrow="Work"
      title="My Projects"
      intro="A collection of work across different platforms and technologies."
    >
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {projectCategories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`rounded-full px-4 py-1.5 text-sm transition-all ${
              filter === c
                ? "bg-primary text-primary-foreground"
                : "surface-card text-muted-foreground hover:text-foreground"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            className="surface-card group overflow-hidden rounded-2xl"
          >
            <div className={`relative aspect-video bg-gradient-to-br ${p.accent}`}>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-4xl font-bold text-foreground/30">
                  {p.title.charAt(0)}
                </span>
              </div>
              <div className="absolute right-3 top-3 rounded-full bg-background/70 px-2 py-0.5 text-[10px] uppercase tracking-wider text-foreground/80 backdrop-blur">
                {p.category}
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-display text-lg font-semibold">{p.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{p.blurb}</p>
              <div className="mt-4 flex gap-3 text-sm">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-muted-foreground transition hover:text-primary"
                  >
                    <Github size={14} /> GitHub
                  </a>
                )}
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-muted-foreground transition hover:text-primary"
                  >
                    <ExternalLink size={14} /> Live
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </PageLayout>
  );
}
