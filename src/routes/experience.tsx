import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/site/PageHeader";
import { experiences } from "@/data/portfolio";

export const Route = createFileRoute("/experience")({
  component: ExperiencePage,
  head: () => ({
    meta: [
      { title: "Experience — Portfolio" },
      { name: "description", content: "My professional journey and the companies I've worked with." },
      { property: "og:title", content: "Experience" },
      { property: "og:description", content: "My professional journey and the companies I've worked with." },
    ],
  }),
});

function ExperiencePage() {
  return (
    <div className="pb-20">
      <PageHeader
        eyebrow="Work Experience"
        title="My professional journey"
        intro="A timeline of roles, teams, and the products I helped ship."
      />
      <Timeline items={experiences} />
    </div>
  );
}

export function Timeline({ items }: { items: { title: string; org: string; date: string }[] }) {
  return (
    <section className="mx-auto max-w-3xl px-6">
      <div className="relative border-l border-white/10 pl-8">
        {items.map((it, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="relative mb-10 last:mb-0"
          >
            <span
              className="absolute -left-[37px] top-1.5 h-3 w-3 rounded-full ring-4 ring-background"
              style={{ backgroundColor: "var(--primary-accent)" }}
            />
            <div className="text-xs uppercase tracking-wider text-foreground/45">{it.date}</div>
            <h3 className="mt-1 font-display text-xl font-semibold">{it.title}</h3>
            <div className="mt-1 text-sm text-foreground/60">{it.org}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
