import { Download } from "lucide-react";
import { profile } from "@/data/portfolio";

export function DownloadCv() {
  return (
    <a
      href={profile.cvUrl}
      download
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full border bg-[var(--glass-bg)] px-4 py-2.5 text-xs font-medium text-foreground backdrop-blur-md shadow-[var(--glass-shadow)] transition hover:opacity-90"
      style={{ borderColor: "var(--glass-border)" }}
    >
      <Download size={14} />
      Download CV
    </a>
  );
}
