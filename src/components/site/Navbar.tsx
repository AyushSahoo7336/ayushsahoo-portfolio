import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navSections, profile } from "@/data/portfolio";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const lenis = typeof window !== "undefined" ? window.__lenis : undefined;
  if (lenis) {
    lenis.scrollTo(el, { offset: -80 });
  } else {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>(navSections[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const vis = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (vis[0]) setActive(vis[0].target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );
    navSections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
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
            {profile.shortName}
          </button>
          <div className="hidden items-center gap-7 md:flex">
            {navSections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollToId(s.id)}
                className="text-sm transition-colors"
                style={{
                  color: active === s.id ? "var(--primary-accent)" : "rgba(255,255,255,0.65)",
                }}
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
          <div className="mt-3 grid gap-2 border-t border-white/10 pt-3 md:hidden">
            {navSections.map((s) => (
              <button
                key={s.id}
                onClick={() => {
                  scrollToId(s.id);
                  setOpen(false);
                }}
                className="rounded-md px-2 py-1.5 text-left text-sm text-foreground/80 hover:bg-white/5"
                style={active === s.id ? { color: "var(--primary-accent)" } : undefined}
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
