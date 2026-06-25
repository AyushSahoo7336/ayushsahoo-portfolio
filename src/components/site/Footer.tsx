import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="mx-auto mt-24 max-w-6xl px-6 py-10 text-center text-xs text-foreground/40">
      © {new Date().getFullYear()} {profile.name} · Built with care.
    </footer>
  );
}
