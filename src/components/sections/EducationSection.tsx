import { PageHeader } from "@/components/site/PageHeader";
import { Timeline } from "./Timeline";
import { education } from "@/data/portfolio";

export function EducationSection() {
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
