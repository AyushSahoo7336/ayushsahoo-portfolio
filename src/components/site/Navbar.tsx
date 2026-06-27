import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, ExternalLink, Download } from "lucide-react";
import { navSections } from "@/data/portfolio";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

function scrollToId(id: string) {
  const lenis = typeof window !== "undefined" ? window.__lenis : undefined;
  if (id === "home") {
    if (lenis) lenis.scrollTo(0);
    else window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const el = document.getElementById(id);
  if (!el) return;
  if (lenis) lenis.scrollTo(el, { offset: 80 });
  else el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>(navSections[0].id);

  useEffect(() => {
    const ids = navSections.map((s) => s.id);
    const onScroll = () => {
      const probe = 100; // just below sticky navbar
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top - probe <= 0) current = id;
      }
      // bottom of page → last section
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        current = ids[ids.length - 1];
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);


  return (
    <header className="sticky top-4 z-40 mx-auto w-full max-w-6xl px-4">
      <nav className="rounded-2xl border bg-background/80 px-5 py-3 backdrop-blur-md shadow-[var(--glass-shadow)]" style={{ borderColor: "var(--glass-border)" }}>
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToId("home")}
            className="font-display text-lg font-bold tracking-[0.25em]"
            style={{ color: "var(--primary-accent)" }}
          >
            AS
          </button>
          <div className="hidden items-center gap-7 md:flex">
            {navSections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollToId(s.id)}
                className={`text-sm transition-colors ${
                  active === s.id
                    ? "text-[var(--primary-accent)]"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {s.label}
              </button>
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
          <div className="mt-3 grid gap-2 border-t border-border pt-3 md:hidden">
            {navSections.map((s) => (
              <button
                key={s.id}
                onClick={() => {
                  scrollToId(s.id);
                  setOpen(false);
                }}
                className={`rounded-md px-2 py-1.5 text-left text-sm hover:bg-foreground/5 ${
                  active === s.id
                    ? "text-[var(--primary-accent)]"
                    : "text-foreground/80"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
