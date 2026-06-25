import { PageHeader } from "@/components/site/PageHeader";
import { Timeline } from "./Timeline";
import { experiences } from "@/data/portfolio";

export function ExperienceSection() {
  return (
    <div className="pb-20">
      <PageHeader
        eyebrow="Work Experience"
        title="My professional journey"
        intro="A timeline of roles, teams, and the products I helped ship."
      />
      <Timeline items={experiences} />
    </div>
  );
}
