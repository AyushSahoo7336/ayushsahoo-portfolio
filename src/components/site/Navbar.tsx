import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-4 z-40 mx-auto w-full max-w-6xl px-4">
      <nav className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="font-display text-lg font-bold tracking-[0.25em]"
            style={{ color: "var(--primary-accent)" }}
          >
            {profile.shortName}
          </Link>
          <div className="hidden items-center gap-7 md:flex">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm text-foreground/70 transition-colors hover:text-foreground"
                activeProps={{ style: { color: "var(--primary-accent)" } }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            className="rounded-md p-2 text-foreground/80 md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
        {open && (
          <div className="mt-3 grid gap-2 border-t border-white/10 pt-3 md:hidden">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-1.5 text-sm text-foreground/80 hover:bg-white/5"
                activeProps={{ style: { color: "var(--primary-accent)" } }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
