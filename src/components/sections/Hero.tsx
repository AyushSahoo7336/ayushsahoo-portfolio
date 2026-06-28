import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Code2, Rocket, ChevronDown, Hand, Mail, Github, Linkedin, ExternalLink } from "lucide-react";
import { profile } from "@/data/portfolio";
import profileAsset from "@/assets/photohd.png.asset.json";


function Typewriter({ phrases }: { phrases: string[] }) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[i % phrases.length];
    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), 1500);
      return () => clearTimeout(t);
    }
    if (deleting && text === "") {
      setDeleting(false);
      setI((v) => (v + 1) % phrases.length);
      return;
    }
    const t = setTimeout(
      () => setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1)),
      deleting ? 40 : 80,
    );
    return () => clearTimeout(t);
  }, [text, deleting, i, phrases]);

  return <>{text}</>;
}

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function Hero() {
  return (
    <section className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-4 pt-24 pb-0 sm:px-6">
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-8 lg:gap-12">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative order-2 w-full md:order-1 md:w-[60%]"
      >
        <div className="mb-5 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em]" style={{ color: "var(--primary-accent)" }}>
          <Sparkles size={14} />
          {profile.welcome}
        </div>

        <div className="relative">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px]"
            style={{ backgroundColor: "color-mix(in oklab, var(--primary-accent) 20%, transparent)" }}
          />
          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:whitespace-nowrap md:text-7xl">
            Hi, I'm <span style={{ color: "var(--primary-accent)" }}>{profile.name}</span>
          </h1>
        </div>


        <div className="mt-5 flex min-h-[2.5rem] items-center gap-2 text-2xl font-light text-foreground/70 md:min-h-[2.75rem] md:text-3xl">
          <span
            className="inline-block min-w-[16ch] md:min-w-[20ch]"
            style={{ color: "var(--primary-accent)" }}
          >
            <Typewriter
              phrases={[
                "Software Developer",
                "Full-Stack Developer",
                "Real-Time Systems Builder",
                "Problem Solver",
              ]}
            />
            <span className="caret-blink ml-0.5 inline-block">|</span>
          </span>
          <Hand
            className="inline-block animate-[wave_1.6s_ease-in-out_infinite] origin-[70%_70%]"
            style={{ color: "var(--primary-accent)" }}
            size={28}
          />
        </div>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/60">
          {profile.tagline}
        </p>

        {profile.quote && (
          <blockquote
            className="mt-7 border-l-2 pl-4 text-sm italic text-foreground/55"
            style={{ borderColor: "var(--primary-accent)" }}
          >
            “{profile.quote}”
          </blockquote>
        )}

        <div className="mt-8 flex flex-wrap gap-3">
          {profile.stats.map((s, i) => (
            <div
              key={s.label}
              className="interactive-card flex items-center gap-3 rounded-2xl bg-[var(--glass-bg)] px-4 py-3 backdrop-blur-sm"
            >
              <span
                className="grid h-9 w-9 place-items-center rounded-lg"
                style={{
                  backgroundColor: "color-mix(in oklab, var(--primary-accent) 15%, transparent)",
                  color: "var(--primary-accent)",
                }}
              >
                {i === 0 ? <Code2 size={16} /> : <Rocket size={16} />}
              </span>
              <div>
                <div className="font-display text-xl font-bold leading-none">{s.value}</div>
                <div className="mt-1 text-[11px] uppercase tracking-wider text-foreground/50">{s.label}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <button
            onClick={() => scrollTo("projects")}
            className="rounded-full px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90"
            style={{ backgroundColor: "var(--primary-accent)" }}
          >
            View Details
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="rounded-full border bg-[var(--glass-bg)] px-6 py-3 text-sm font-semibold text-foreground shadow-[var(--glass-shadow)] transition hover:bg-[var(--primary-accent)] hover:text-black"
            style={{ borderColor: "var(--glass-border)" }}
          >
            Let's Talk
          </button>
        </div>

        <div className="mt-8 flex flex-row flex-wrap items-center gap-4">
          <a
            href="mailto:ayush733695@gmail.com"
            aria-label="Email"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition-all duration-300 hover:scale-105 hover:border-[color:var(--primary-accent)] hover:text-[color:var(--primary-accent)]"
          >
            <Mail size={18} />
          </a>
          <a
            href="https://github.com/AyushSahoo7336"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition-all duration-300 hover:scale-105 hover:border-[color:var(--primary-accent)] hover:text-[color:var(--primary-accent)]"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/in/ayush-sahoo-63515b186"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition-all duration-300 hover:scale-105 hover:border-[color:var(--primary-accent)] hover:text-[color:var(--primary-accent)]"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://leetcode.com/AyushSahoo1"
            target="_blank"
            rel="noreferrer"
            aria-label="LeetCode"
            className="inline-flex h-11 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 text-sm font-medium text-muted-foreground transition-all duration-300 hover:scale-105 hover:border-[color:var(--primary-accent)] hover:text-[color:var(--primary-accent)]"
          >
            <Code2 size={16} />
            LeetCode
            <ExternalLink size={14} />
          </a>
        </div>
      </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative order-1 flex w-full items-center justify-center md:order-2 md:w-[40%] md:items-end md:justify-end"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-[42%] -z-10 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[90px] opacity-80 md:h-[420px] md:w-[420px] md:blur-[110px]"
            style={{ background: "radial-gradient(circle at 50% 40%, color-mix(in oklab, var(--primary-accent) 70%, transparent), transparent 65%)" }}
          />
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full max-w-[260px] sm:max-w-xs md:max-w-[350px]"
          >
            <img
              src={profileAsset.url}
              alt={`${profile.name} portrait`}
              className="h-auto w-full max-w-[350px] object-contain object-bottom"
              style={{ WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)', maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)' }}
            />
          </motion.div>
        </motion.div>

      </div>

      <div className="mt-16 flex flex-col items-center text-[10px] uppercase tracking-[0.3em] text-foreground/40">
        Scroll
        <ChevronDown size={14} className="mt-1 animate-bounce" style={{ color: "var(--primary-accent)" }} />
      </div>
    </section>

  );
}
