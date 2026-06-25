import { Download } from "lucide-react";
import { profile } from "@/data/portfolio";

export function DownloadCv() {
  return (
    <a
      href={profile.cvUrl}
      download
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-4 py-2.5 text-xs font-medium text-foreground backdrop-blur-md transition hover:border-white/20"
    >
      <Download size={14} />
      Download CV
    </a>
  );
}
