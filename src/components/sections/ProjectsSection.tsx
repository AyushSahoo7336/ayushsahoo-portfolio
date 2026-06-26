import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { TiltCard } from "@/components/site/TiltCard";
import { projects } from "@/data/portfolio";

type Project = (typeof projects)[number];

function ProjectCard({ project, feature = false }: { project: Project; feature?: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <TiltCard className="h-full w-full">
      <motion.article
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        className={`interactive-card group relative h-full w-full overflow-hidden rounded-3xl bg-[var(--glass-bg)] ${
          feature ? "min-h-[420px]" : "min-h-[340px]"
        }`}
        style={{ borderColor: "var(--glass-border)" }}
      >
        {/* Image placeholder: dark sleek gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.accent}`}
          style={{ transform: "translateZ(0)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
        <div
          className="absolute -right-20 -top-20 h-72 w-72 rounded-full blur-3xl opacity-60"
          style={{ background: "var(--primary-accent)" }}
        />

        {/* Always-visible content */}
        <div className="relative z-10 flex h-full flex-col justify-between p-7 md:p-9" style={{ transform: "translateZ(40px)" }}>
          <div
            className="inline-flex w-fit items-center rounded-full border px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] backdrop-blur-sm"
            style={{
              borderColor: "color-mix(in oklab, var(--primary-accent) 40%, transparent)",
              color: "var(--primary-accent)",
              background: "rgba(0,0,0,0.25)",
            }}
          >
            {project.category}
          </div>

          <div>
            <h3
              className={`font-display font-bold tracking-tight text-white drop-shadow-lg ${
                feature ? "text-5xl md:text-7xl" : "text-3xl md:text-4xl"
              }`}
            >
              {project.title}
            </h3>

            {/* Hover reveal */}
            <AnimatePresence>
              {hovered && (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-4 space-y-4"
                >
                  <p className={`max-w-2xl text-white/80 ${feature ? "text-base" : "text-sm"}`}>
                    {project.blurb}
                  </p>
                  {project.tech && (
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-white/20 bg-white/5 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-white/85 backdrop-blur-sm"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-xs font-medium text-white backdrop-blur-md hover:bg-white/20"
                      >
                        <Github size={13} /> GitHub
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-semibold text-black"
                        style={{ backgroundColor: "var(--primary-accent)" }}
                      >
                        <ExternalLink size={13} /> Live Demo
                      </a>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.article>
    </TiltCard>
  );
}

export function ProjectsSection() {
  const [feature, ...rest] = projects;

  return (
    <div className="pb-20">
      <PageHeader
        eyebrow="My Projects"
        title={<>Things I've <span style={{ color: "var(--primary-accent)" }}>built</span></>}
        intro="A collection of work across different platforms and technologies."
      />
      <section className="mx-auto max-w-6xl space-y-5 px-6">
        {feature && <ProjectCard project={feature} feature />}
        <div className="grid gap-5 md:grid-cols-2">
          {rest.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
