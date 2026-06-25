const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
];

function smoothScroll(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  e.preventDefault();
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Navbar() {
  return (
    <nav className="sticky top-0 z-40 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 h-14 flex items-center justify-between">
        <a href="#home" onClick={(e) => smoothScroll(e, "#home")} className="font-mono text-sm tracking-widest text-white">
          AYUSH
        </a>
        <div className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => smoothScroll(e, l.href)}
              className="text-sm text-gray-400 hover:text-white transition-colors"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          onClick={(e) => smoothScroll(e, "#contact")}
          className="text-xs font-mono uppercase tracking-wider px-4 py-2 rounded-full text-black font-semibold transition-transform hover:scale-105"
          style={{ backgroundColor: "var(--primary-accent)" }}
        >
          Let's Talk
        </a>
      </div>
    </nav>
  );
}
