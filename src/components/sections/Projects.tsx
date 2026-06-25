import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

type Project = {
  title: string;
  stack: string[];
  summary: string;
  github: string;
  demo: string;
};

const PROJECTS: Project[] = [
  {
    title: "StockFlow",
    stack: ["React", "Node", "WebSocket", "Redis"],
    summary: "Real-time WebSocket synchronization of multi-market order books with sub-100ms latency.",
    github: "#",
    demo: "#",
  },
  {
    title: "VidMeet",
    stack: ["WebRTC", "Socket.IO", "Next.js", "TURN"],
    summary: "Peer-to-peer video conferencing with adaptive bitrate and SFU fallback for 12+ participants.",
    github: "#",
    demo: "#",
  },
  {
    title: "GitVerse",
    stack: ["TypeScript", "GraphQL", "D3", "Postgres"],
    summary: "Interactive 3D visualization of git history and contributor graphs across monorepos.",
    github: "#",
    demo: "#",
  },
];

function Card({ p }: { p: Project }) {
  return (
    <div className="h-72 [perspective:1000px] group">
      <motion.div
        className="relative h-full w-full"
        style={{ transformStyle: "preserve-3d" }}
        whileHover={{ rotateY: 180 }}
        transition={{ duration: 0.6 }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col justify-between"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div>
            <h3 className="text-2xl font-bold -tracking-tight text-white">{p.title}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {p.stack.map((s) => (
              <span
                key={s}
                className="border border-white/10 text-[10px] uppercase font-mono px-2 py-1 rounded-full text-gray-300"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
        {/* Back */}
        <div
          className="absolute inset-0 bg-white/5 border rounded-xl p-6 flex flex-col justify-between"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            borderColor: "var(--primary-accent)",
          }}
        >
          <p className="text-sm text-gray-300 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
            {p.summary}
          </p>
          <div className="flex gap-2">
            <a
              href={p.github}
              className="flex items-center gap-2 text-xs font-mono uppercase border border-white/10 px-3 py-2 rounded-full hover:border-white/40 transition"
            >
              <Github size={14} /> GitHub
            </a>
            <a
              href={p.demo}
              className="flex items-center gap-2 text-xs font-mono uppercase px-3 py-2 rounded-full text-black font-semibold"
              style={{ backgroundColor: "var(--primary-accent)" }}
            >
              <ExternalLink size={14} /> Live Demo
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="text-3xl md:text-5xl font-bold -tracking-tight">Projects</h2>
      <p className="mt-3 text-gray-500 font-mono text-xs uppercase tracking-widest">Hover to flip</p>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {PROJECTS.map((p) => (
          <Card key={p.title} p={p} />
        ))}
      </div>
    </section>
  );
}
