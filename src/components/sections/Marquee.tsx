import { motion } from "framer-motion";

const ITEMS = ["DEVELOPER", "FRONTEND", "BACKEND", "MERN", "WEBRTC", "SOCKET.IO"];

export function Marquee() {
  const row = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];
  return (
    <div className="border-y border-white/10 py-6 overflow-hidden">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: [0, -1000] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        {row.map((t, i) => (
          <span
            key={i}
            className="font-mono text-sm uppercase tracking-[0.3em] text-gray-500 flex items-center gap-12"
          >
            {t} <span style={{ color: "var(--primary-accent)" }}>◆</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
