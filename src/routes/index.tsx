import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProblemSolverSection } from "@/components/sections/ProblemSolverSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { LetsTalkSection } from "@/components/sections/LetsTalkSection";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Portfolio — Software Developer" },
      { name: "description", content: "Welcome to my world. I craft digital experiences across web, mobile, and games." },
      { property: "og:title", content: "Portfolio — Software Developer" },
      { property: "og:description", content: "Welcome to my world. I craft digital experiences across web, mobile, and games." },
    ],
  }),
});

function Section({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24">
      {children}
    </section>
  );
}

function HomePage() {
  return (
    <>
      <Section id="home">
        <Hero />
      </Section>
      <Marquee />
      <Section id="about"><AboutSection /></Section>
      <Section id="skills"><SkillsSection /></Section>
      <Section id="education"><EducationSection /></Section>
      <Section id="leetcode"><ProblemSolverSection /></Section>
      <Section id="projects"><ProjectsSection /></Section>
      <Section id="contact"><ContactSection /></Section>
      <Section id="lets-talk"><LetsTalkSection /></Section>
    </>
  );
}
