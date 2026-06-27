import { Award, GraduationCap } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
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

const coursework = [
  "Data Structures & Algorithms",
  "Object-Oriented Programming",
  "DBMS",
  "Operating Systems",
  "Computer Networks",
];

export function EducationSection() {
  const edu = education[0];
  return (
    <div className="pb-20">
      <PageHeader
        eyebrow="Education & Certifications"
        title="Education"
        intro="The diplomas and certifications that shape my expertise."
      />

      <section className="mx-auto max-w-5xl px-6">
        <Reveal>
          <article
            className="interactive-card flex flex-col gap-6 rounded-2xl border bg-[var(--glass-bg)] p-6 backdrop-blur-sm md:p-8"
            style={{ borderColor: "var(--glass-border)" }}
          >
            <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex items-start gap-4">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border"
                  style={{
                    borderColor: "var(--glass-border)",
                    backgroundColor: "var(--glass-bg)",
                  }}
                >
                  <GraduationCap
                    size={24}
                    style={{ color: "var(--primary-accent)" }}
                  />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-foreground md:text-3xl">
                    {edu.title}
                  </h3>
                  <p className="mt-1 text-foreground/70">{edu.org}</p>
                  <p className="mt-1 font-mono text-xs uppercase tracking-wider text-foreground/50">
                    {edu.date}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 lg:justify-end">
                <span className="inline-flex items-center rounded-full border border-[var(--primary-accent)]/20 bg-[var(--primary-accent)]/10 px-3 py-1 text-xs font-medium text-[var(--primary-accent)]">
                  CGPA: 8.26/10.0
                </span>
                <span className="inline-flex items-center rounded-full border border-[var(--primary-accent)]/20 bg-[var(--primary-accent)]/10 px-3 py-1 text-xs font-medium text-[var(--primary-accent)]">
                  3rd Year
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {coursework.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border bg-[var(--primary-accent)]/5 px-3 py-1 text-xs text-foreground/80"
                  style={{ borderColor: "color-mix(in oklab, var(--primary-accent) 15%, transparent)" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        </Reveal>
      </section>

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
