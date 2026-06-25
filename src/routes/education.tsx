import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Timeline } from "./experience";
import { education } from "@/data/portfolio";

export const Route = createFileRoute("/education")({
  component: EducationPage,
  head: () => ({
    meta: [
      { title: "Education — Portfolio" },
      { name: "description", content: "Academic background and professional certifications." },
      { property: "og:title", content: "Education" },
      { property: "og:description", content: "Academic background and professional certifications." },
    ],
  }),
});

function EducationPage() {
  return (
    <div className="pb-20">
      <PageHeader
        eyebrow="Education & Certifications"
        title="My academic background"
        intro="The diplomas and certifications that shape my expertise."
      />
      <Timeline items={education} />
    </div>
  );
}
