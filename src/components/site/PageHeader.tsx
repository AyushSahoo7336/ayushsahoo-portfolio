import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function PageHeader({ eyebrow, title, intro }: { eyebrow?: string; title: ReactNode; intro?: ReactNode }) {
  return (
    <div className="mx-auto max-w-3xl px-6 pt-24 pb-12 text-center">
      {eyebrow && (
        <div className="mb-3 text-xs font-medium uppercase tracking-[0.3em]" style={{ color: "var(--primary-accent)" }}>
          {eyebrow}
        </div>
      )}
      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="font-display text-4xl font-bold tracking-tight md:text-6xl"
      >
        {title}
      </motion.h1>
      {intro && <p className="mt-5 text-foreground/55">{intro}</p>}
    </div>
  );
}
