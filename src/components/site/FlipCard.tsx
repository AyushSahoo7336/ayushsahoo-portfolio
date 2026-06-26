import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import type { projects } from "@/data/portfolio";

type Project = (typeof projects)[number];

export function FlipCard({ project }: { project: Project }) {
  return (
    <div className="group h-[420px] w-full" style={{ perspective: 1000 }}>
      <motion.div
        className="relative h-full w-full"
        style={{ transformStyle: "preserve-3d" }}
        whileHover={{ rotateY: 180 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 overflow-hidden rounded-3xl [backface-visibility:hidden]"
          style={{ borderColor: "var(--glass-border)" }}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${project.accent}`} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
          <div
            className="absolute -right-20 -top-20 h-72 w-72 rounded-full opacity-60 blur-3xl"
            style={{ background: "var(--primary-accent)" }}
          />
          <div className="relative z-10 flex h-full flex-col justify-between p-7">
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
              <h3 className="font-display text-4xl font-bold tracking-tight text-white drop-shadow-lg md:text-5xl">
                {project.title}
              </h3>
              <p className="mt-3 text-xs uppercase tracking-[0.25em] text-white/60">Hover to explore →</p>
            </div>
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 flex flex-col gap-4 overflow-hidden rounded-3xl border bg-[var(--glass-bg)] p-6 backdrop-blur-xl [backface-visibility:hidden] [transform:rotateY(180deg)]"
          style={{ borderColor: "var(--glass-border)" }}
        >
          <div
            className="inline-flex w-fit items-center rounded-full border px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em]"
            style={{
              borderColor: "color-mix(in oklab, var(--primary-accent) 40%, transparent)",
              color: "var(--primary-accent)",
            }}
          >
            {project.category}
          </div>
          <h3 className="font-display text-2xl font-bold tracking-tight text-foreground">{project.title}</h3>
          <p className="text-sm leading-relaxed text-foreground/70">{project.blurb}</p>
          {project.tech && (
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-foreground/80"
                  style={{ borderColor: "var(--glass-border)" }}
                >
                  {t}
                </span>
              ))}
            </div>
          )}
          <div className="mt-auto flex flex-wrap gap-2 pt-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-xs font-medium text-foreground/80 hover:bg-foreground/5"
                style={{ borderColor: "var(--glass-border)" }}
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
        </div>
      </motion.div>
    </div>
  );
}
