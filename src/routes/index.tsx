import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Server, Smartphone, Gamepad2, Sparkles } from "lucide-react";
import { profile, skills } from "@/data/portfolio";
import { Marquee } from "@/components/site/Marquee";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${profile.name} — ${profile.role}` },
      { name: "description", content: profile.tagline },
      { property: "og:title", content: `${profile.name} — ${profile.role}` },
      { property: "og:description", content: profile.tagline },
    ],
  }),
  component: Home,
});

const iconMap: Record<string, typeof Code2> = {
  Layout: Code2,
  Server,
  Smartphone,
  Gamepad2,
};

function Home() {
  return (
    <>
      <section className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pt-28">
        <div
          className="absolute left-1/2 top-1/3 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70"
          style={{ background: "var(--gradient-hero)" }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 text-sm font-medium uppercase tracking-[0.3em] text-primary"
        >
          <Sparkles size={16} /> {profile.welcome}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 font-display text-6xl md:text-8xl font-bold leading-[1.05]"
        >
          Hi, I'm <span className="text-gradient">{profile.name}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-6 font-display text-3xl md:text-4xl text-foreground/80"
        >
          {profile.role}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-6 max-w-2xl text-muted-foreground leading-relaxed"
        >
          {profile.tagline}
        </motion.p>

        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-8 max-w-2xl border-l-2 border-primary pl-4 italic text-foreground/70"
        >
          “{profile.quote}”
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          {profile.stats.map((s) => (
            <div key={s.label} className="surface-card rounded-xl px-5 py-3">
              <div className="font-display text-2xl font-bold text-primary">{s.value}</div>
              <div className="text-xs text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:scale-105 glow"
          >
            View Projects <ArrowRight size={16} />
          </Link>
          <Link
            to="/lets-talk"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-transparent px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-surface-hover"
          >
            Let's Talk
          </Link>
        </motion.div>

        <div className="mt-20 mb-6 flex justify-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
          <span className="animate-float">Scroll ↓</span>
        </div>
      </section>

      <Marquee />

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            What I <span className="text-gradient">Create</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            Bringing ideas to life through code and creativity
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((s) => {
            const Icon = iconMap[s.icon] ?? Code2;
            return (
              <Link
                key={s.title}
                to="/about"
                className="group surface-card rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-primary/50"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
                  <Icon size={20} />
                </div>
                <div className="font-display text-lg font-semibold">{s.title.split(" ")[0]}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.short}</div>
              </Link>
            );
          })}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/about"
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all"
          >
            About Me <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
