import { Award } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { Timeline } from "./Timeline";
import { education } from "@/data/portfolio";

const certifications = [
  {
    title: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    date: "2025",
  },
  {
    title: "Meta Frontend Developer",
    issuer: "Meta · Coursera",
    date: "2024",
  },
  {
    title: "Google Cloud Associate",
    issuer: "Google Cloud",
    date: "2024",
  },
];

export function EducationSection() {
  return (
    <div className="pb-20">
      <PageHeader
        eyebrow="Education & Certifications"
        title="Education"
        intro="The diplomas and certifications that shape my expertise."
      />
      <Timeline items={education} />

      <section className="mx-auto mt-20 max-w-6xl px-6">
        <Reveal>
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <div
                className="mb-2 text-xs font-medium uppercase tracking-[0.3em]"
                style={{ color: "var(--primary-accent)" }}
              >
                Credentials
              </div>
              <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
                Certifications
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {certifications.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.15}>
              <article
                className="interactive-card group flex h-full flex-col overflow-hidden rounded-2xl border bg-[var(--glass-bg)] backdrop-blur-sm shadow-[var(--glass-shadow)]"
                style={{ borderColor: "var(--glass-border)" }}
              >
                <div className="relative aspect-video w-full overflow-hidden bg-muted/20">
                  <div className="absolute inset-0 flex items-center justify-center text-foreground/30">
                    <Award size={40} />
                  </div>
                  <div
                    className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-30 blur-2xl transition-opacity group-hover:opacity-60"
                    style={{ background: "var(--primary-accent)" }}
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2 p-5">
                  <h3 className="font-display text-lg font-bold text-foreground">{c.title}</h3>
                  <p className="text-sm text-foreground/70">{c.issuer}</p>
                  <p className="mt-auto pt-2 font-mono text-xs uppercase tracking-wider text-foreground/50">
                    {c.date}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
