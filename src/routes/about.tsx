import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Code2, Server, Smartphone, Gamepad2 } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { bio, skills } from "@/data/portfolio";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Portfolio" },
      { name: "description", content: "Background, skills, and what I build." },
      { property: "og:title", content: "About — Portfolio" },
      { property: "og:description", content: "Background, skills, and what I build." },
    ],
  }),
  component: AboutPage,
});

const iconMap: Record<string, typeof Code2> = {
  Layout: Code2,
  Server,
  Smartphone,
  Gamepad2,
};

function AboutPage() {
  return (
    <PageLayout eyebrow="About" title="About Me" intro="Less talk, more shipped products.">
      <div className="mx-auto max-w-3xl space-y-4 text-muted-foreground leading-relaxed">
        <h2 className="font-display text-2xl font-semibold text-foreground">Biography</h2>
        {bio.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <div className="mt-20">
        <div className="mb-10 text-center">
          <h2 className="font-display text-3xl font-bold">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Technologies and domains I specialize in
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((s, i) => {
            const Icon = iconMap[s.icon] ?? Code2;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="surface-card rounded-2xl p-6"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Icon size={22} />
                </div>
                <h3 className="font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.blurb}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-surface/50 px-3 py-1 text-xs text-foreground/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </PageLayout>
  );
}
