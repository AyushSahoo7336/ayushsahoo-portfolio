import { Download } from "lucide-react";
import { profile } from "@/data/portfolio";

export function DownloadCv() {
  return (
    <a
      href={profile.cvUrl}
      className="fixed bottom-6 right-6 z-40 hidden md:inline-flex items-center gap-2 rounded-full surface-card px-4 py-2 text-sm text-foreground transition-all hover:text-primary hover:scale-105"
    >
      <Download size={16} />
      Download CV
    </a>
  );
}
