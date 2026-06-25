import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { experiences } from "@/data/portfolio";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Portfolio" },
      { name: "description", content: "Professional journey and roles." },
      { property: "og:title", content: "Experience — Portfolio" },
      { property: "og:description", content: "Professional journey and roles." },
    ],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  return (
    <PageLayout
      eyebrow="Career"
      title="Work Experience"
      intro="My professional journey and the teams I've worked with."
    >
      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-border md:left-1/2" />
        <div className="space-y-8">
          {experiences.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-12"
            >
              <div
                className={`absolute left-2 top-2 h-4 w-4 rounded-full border-2 border-primary bg-background md:left-1/2 md:-translate-x-1/2`}
              />
              <div
                className={`surface-card rounded-2xl p-5 ${
                  i % 2 === 0 ? "md:col-start-1 md:text-right" : "md:col-start-2"
                }`}
              >
                <div className="mb-2 inline-flex items-center gap-2 text-xs text-primary">
                  <Briefcase size={12} /> {e.date}
                </div>
                <h3 className="font-display text-lg font-semibold">{e.title}</h3>
                <p className="text-sm text-muted-foreground">{e.org}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
