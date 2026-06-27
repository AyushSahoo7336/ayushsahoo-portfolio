import { GraduationCap } from "lucide-react";
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
    <div className="bg-[var(--primary-accent)] pb-20">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-12 text-center">
        <div className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-[#040814]/70">
          EDUCATION
        </div>
        <h1 className="font-display text-4xl font-bold tracking-tight text-[#040814] md:text-6xl">
          Academic Background
        </h1>
        <p className="mt-5 text-[#040814]/55">
          The foundation that shapes my expertise.
        </p>
      </div>

      <section className="mx-auto max-w-5xl px-6">
        <Reveal>
          <article className="interactive-card flex flex-col gap-6 rounded-2xl border border-[#040814]/15 bg-[#040814]/8 p-6 backdrop-blur-sm md:p-8">
            <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#040814]/15 bg-[#040814]/8">
                  <GraduationCap size={24} className="text-[#040814]" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-[#040814] md:text-3xl">
                    {edu.title}
                  </h3>
                  <p className="mt-1 text-[#040814]/70">{edu.org}</p>
                  <p className="mt-1 font-mono text-xs uppercase tracking-wider text-[#040814]/50">
                    {edu.date}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 lg:justify-end">
                <span className="inline-flex items-center rounded-full border border-[#040814]/15 bg-[#040814]/10 px-3 py-1 text-xs font-medium text-[#040814]">
                  CGPA: 8.26/10.0
                </span>
                <span className="inline-flex items-center rounded-full border border-[#040814]/15 bg-[#040814]/10 px-3 py-1 text-xs font-medium text-[#040814]">
                  4th Year
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {coursework.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#040814]/10 bg-[#040814]/5 px-3 py-1 text-xs text-[#040814]/80"
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
