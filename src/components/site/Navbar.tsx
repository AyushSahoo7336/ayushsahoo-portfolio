import { useEffect, useState, useRef } from "react";
import {
  Menu, X, ChevronDown, ExternalLink, Download,
  Snowflake, Code2, Moon, Sun, Palette, Check,
} from "lucide-react";
import { navSections } from "@/data/portfolio";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { useAccent, ACCENTS, type AccentName } from "@/context/AccentContext";
import { useEffects, type EffectName } from "@/context/EffectsContext";

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
  const [resumeOpen, setResumeOpen] = useState(false);
  const [mobileResumeOpen, setMobileResumeOpen] = useState(false);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const { accent, setAccent, color } = useAccent();
  const { effect, setEffect, dark, setDark } = useEffects();

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
        <div className="flex items-center justify-between gap-8">
          <button
            onClick={() => scrollToId("home")}
            className="font-display text-lg font-bold tracking-[0.25em]"
            style={{ color: "var(--primary-accent)" }}
          >
            AS
          </button>
          <div className="hidden items-center gap-7 lg:flex">
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
            <div
              className="relative"
              onMouseEnter={() => {
                if (resumeTimer.current) clearTimeout(resumeTimer.current);
                setResumeOpen(true);
              }}
              onMouseLeave={() => {
                if (resumeTimer.current) clearTimeout(resumeTimer.current);
                resumeTimer.current = setTimeout(() => setResumeOpen(false), 220);
              }}
            >
              <DropdownMenu open={resumeOpen} onOpenChange={setResumeOpen} modal={false}>
                <DropdownMenuTrigger asChild>
                  <button className="inline-flex items-center gap-1 text-sm text-[var(--primary-accent)] outline-none transition-opacity duration-200 hover:opacity-80">
                    Resume
                    <ChevronDown
                      size={14}
                      className="transition-transform duration-200"
                      style={{ transform: resumeOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                    />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  sideOffset={12}
                  className="min-w-[11rem] rounded-xl border bg-[var(--glass-bg)] p-1.5 text-foreground shadow-lg backdrop-blur-md"
                  style={{ borderColor: "var(--glass-border)" }}
                  onCloseAutoFocus={(e) => e.preventDefault()}
                  onMouseEnter={() => {
                    if (resumeTimer.current) clearTimeout(resumeTimer.current);
                    setResumeOpen(true);
                  }}
                  onMouseLeave={() => {
                    if (resumeTimer.current) clearTimeout(resumeTimer.current);
                    resumeTimer.current = setTimeout(() => setResumeOpen(false), 220);
                  }}
                >
                  <DropdownMenuItem asChild>
                    <a
                      href="https://drive.google.com/file/d/1unLQHD289tEXqHv154Eg_ktyrlhCunIh/view?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex cursor-pointer items-center gap-2 rounded-lg px-2.5 py-2 text-sm outline-none transition-colors hover:bg-[var(--primary-accent)]/10 hover:text-[var(--primary-accent)] focus:bg-[var(--primary-accent)]/10 focus:text-[var(--primary-accent)]"
                    >
                      <ExternalLink size={14} />
                      View Resume
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a
                      href="/AyushSahoo_Resume.pdf"
                      download="AyushSahoo_Resume.pdf"
                      className="flex cursor-pointer items-center gap-2 rounded-lg px-2.5 py-2 text-sm outline-none transition-colors hover:bg-[var(--primary-accent)]/10 hover:text-[var(--primary-accent)] focus:bg-[var(--primary-accent)]/10 focus:text-[var(--primary-accent)]"
                    >
                      <Download size={14} />
                      Download Resume
                    </a>
                  </DropdownMenuItem>

                </DropdownMenuContent>
              </DropdownMenu>
            </div>

          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex rounded-md p-2 text-foreground/80 lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
        {open && (
          <div className="mt-3 grid gap-2 border-t border-border pt-3 lg:hidden max-h-[75vh] overflow-y-auto overscroll-contain pr-1">
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
            <div className="grid gap-1 pt-1">
              <button
                onClick={() => setMobileResumeOpen((v) => !v)}
                className="flex items-center justify-between rounded-md px-2 py-1.5 text-left text-sm text-foreground/80 hover:bg-foreground/5"
              >
                <span className="font-medium text-[var(--primary-accent)]">Resume</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform ${mobileResumeOpen ? "rotate-180" : ""}`}
                />
              </button>
              {mobileResumeOpen && (
                <>
                  <a
                    href="https://drive.google.com/file/d/1nAU2IbYEyhkAl3Dr3px8dQhMeJDrfwog/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-md px-4 py-1.5 text-sm text-foreground/80 hover:bg-foreground/5 hover:text-[var(--primary-accent)]"
                    onClick={() => setOpen(false)}
                  >
                    <ExternalLink size={14} />
                    View Resume
                  </a>
                  <a
                    href="https://drive.google.com/uc?export=download&id=1nAU2IbYEyhkAl3Dr3px8dQhMeJDrfwog"
                    className="flex items-center gap-2 rounded-md px-4 py-1.5 text-sm text-foreground/80 hover:bg-foreground/5 hover:text-[var(--primary-accent)]"
                    onClick={() => setOpen(false)}
                  >
                    <Download size={14} />
                    Download Resume
                  </a>
                </>
              )}
            </div>

            {/* Preferences */}
            <div className="mt-2 border-t border-border pt-3">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                Preferences
              </p>

              {/* Effects */}
              <div className="mb-4">
                <p className="mb-2 text-xs text-muted-foreground">Effects</p>
                <div className="flex flex-row gap-2">
                  {[
                    { id: "none" as EffectName, label: "Stars", icon: <Snowflake size={14} /> },
                    { id: "flakes" as EffectName, label: "Flakes", icon: <Snowflake size={14} /> },
                    { id: "matrix" as EffectName, label: "Matrix", icon: <Code2 size={14} /> },
                  ].map((o) => {
                    const isActive = effect === o.id;
                    return (
                      <button
                        key={o.id}
                        onClick={() => setEffect(o.id)}
                        className={`flex flex-1 items-center justify-center gap-1.5 rounded-lg border px-2 py-2.5 text-xs transition ${
                          isActive
                            ? "border-transparent text-white"
                            : "border-[var(--glass-border)] text-foreground/70 hover:bg-white/5"
                        }`}
                        style={isActive ? { backgroundColor: color } : undefined}
                      >
                        {o.icon}
                        {o.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Theme */}
              <div className="mb-4">
                <p className="mb-2 text-xs text-muted-foreground">Theme</p>
                <button
                  onClick={() => setDark(!dark)}
                  className="flex w-full items-center gap-2 rounded-lg border border-[var(--glass-border)] px-3 py-2.5 text-xs text-foreground/70 transition hover:bg-white/5"
                >
                  {dark ? <Moon size={14} /> : <Sun size={14} />}
                  <span>{dark ? "Dark Mode" : "Light Mode"}</span>
                </button>
              </div>

              {/* Accent */}
              <div>
                <p className="mb-2 text-xs text-muted-foreground">Accent</p>
                <div className="flex flex-row flex-wrap gap-2">
                  {([
                    { id: "cyan" as AccentName, label: "Sea" },
                    { id: "forest" as AccentName, label: "Forest" },
                    { id: "ember" as AccentName, label: "Ember" },
                    { id: "violet" as AccentName, label: "Violet" },
                    { id: "rose" as AccentName, label: "Rose" },
                    { id: "sun" as AccentName, label: "Sun" },
                    { id: "sky" as AccentName, label: "Sky" },
                    { id: "magenta" as AccentName, label: "Magenta" },
                  ]).map((o) => {
                    const isActive = accent === o.id;
                    return (
                      <button
                        key={o.id}
                        onClick={() => setAccent(o.id)}
                        aria-label={o.label}
                        className="grid h-10 w-10 place-items-center rounded-full border transition hover:scale-110"
                        style={{
                          backgroundColor: isActive
                            ? ACCENTS[o.id]
                            : `color-mix(in oklab, ${ACCENTS[o.id]} 18%, transparent)`,
                          borderColor: isActive ? ACCENTS[o.id] : "var(--glass-border)",
                          boxShadow: isActive ? `0 0 12px -2px ${ACCENTS[o.id]}` : undefined,
                        }}
                      >
                        {isActive && <Check size={12} className="text-white" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
