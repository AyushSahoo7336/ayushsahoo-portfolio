import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Layout, Server, Smartphone, Gamepad2, ArrowRight } from "lucide-react";
import { skills } from "@/data/portfolio";

const ICONS = { Layout, Server, Smartphone, Gamepad2 } as const;

export function WhatICreate() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="text-center">
        <h2 className="font-display text-4xl font-bold md:text-5xl">What I Create</h2>
        <p className="mt-3 text-foreground/55">Bringing ideas to life through code and creativity</p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((s, i) => {
          const Icon = ICONS[s.icon as keyof typeof ICONS] ?? Layout;
          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <Link
                to="/about"
                className="group block h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition hover:-translate-y-1 hover:border-white/20"
              >
                <span
                  className="mb-5 grid h-11 w-11 place-items-center rounded-xl transition group-hover:scale-110"
                  style={{
                    backgroundColor: "color-mix(in oklab, var(--primary-accent) 15%, transparent)",
                    color: "var(--primary-accent)",
                  }}
                >
                  <Icon size={20} />
                </span>
                <div className="font-display text-lg font-semibold">{s.title.split(" ")[0]}</div>
                <div className="mt-1 text-sm text-foreground/55">{s.short}</div>
              </Link>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-10 text-center">
        <Link
          to="/about"
          className="inline-flex items-center gap-2 text-sm font-medium transition hover:gap-3"
          style={{ color: "var(--primary-accent)" }}
        >
          About Me <ArrowRight size={14} />
        </Link>
      </div>
    </section>
  );
}
