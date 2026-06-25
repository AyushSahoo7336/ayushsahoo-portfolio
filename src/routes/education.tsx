import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { education } from "@/data/portfolio";

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { title: "Education — Portfolio" },
      { name: "description", content: "Academic background and certifications." },
      { property: "og:title", content: "Education — Portfolio" },
      { property: "og:description", content: "Academic background and certifications." },
    ],
  }),
  component: EducationPage,
});

function EducationPage() {
  return (
    <PageLayout
      eyebrow="Learning"
      title="Education & Certifications"
      intro="My academic background and credentials."
    >
      <div className="mx-auto grid max-w-3xl gap-5">
        {education.map((e, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="surface-card flex items-start gap-4 rounded-2xl p-6"
          >
            <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
              <GraduationCap size={22} />
            </div>
            <div className="flex-1">
              <div className="text-xs text-primary">{e.date}</div>
              <h3 className="font-display text-lg font-semibold">{e.title}</h3>
              <p className="text-sm text-muted-foreground">{e.org}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </PageLayout>
  );
}
