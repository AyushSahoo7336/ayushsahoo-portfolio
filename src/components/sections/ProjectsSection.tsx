import { PageHeader } from "@/components/site/PageHeader";
import { FlipCard } from "@/components/site/FlipCard";
import { projects } from "@/data/portfolio";

export function ProjectsSection() {
  return (
    <div className="pb-20">
      <PageHeader
        eyebrow="My Projects"
        title={<>Things I've <span style={{ color: "var(--primary-accent)" }}>built</span></>}
        intro="Hover any card to flip and see the details."
      />
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 md:grid-cols-3">
        {projects.map((p) => (
          <FlipCard key={p.title} project={p} />
        ))}
      </section>
    </div>
  );
}
