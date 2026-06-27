import { GraduationCap } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { education } from "@/data/portfolio";

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
        eyebrow="Education"
        title="Education"
        intro="The foundation that shapes my expertise."
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
                  4th Year
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
    </div>
  );
}
