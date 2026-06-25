const ITEMS = [
  { date: "2024 — Present", role: "Software Developer", org: "Independent", note: "Real-time systems, WebRTC pipelines, dev tooling." },
  { date: "2023 — 2024", role: "Frontend Engineer", org: "Freelance", note: "React, TanStack, design systems." },
  { date: "2022 — 2023", role: "Full-Stack Intern", org: "Startup", note: "MERN stack, Socket.IO, REST APIs." },
];

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="text-3xl md:text-5xl font-bold -tracking-tight">Experience</h2>
      <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
        {ITEMS.map((it) => (
          <div key={it.date} className="grid md:grid-cols-[180px_1fr] gap-4 py-6">
            <div className="font-mono text-xs uppercase tracking-widest text-gray-500">{it.date}</div>
            <div>
              <div className="text-lg font-semibold text-white">
                {it.role} <span className="text-gray-500">— {it.org}</span>
              </div>
              <p className="mt-1 text-gray-400 text-sm" style={{ fontFamily: "var(--font-body)" }}>
                {it.note}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
