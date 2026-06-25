import type { ReactNode } from "react";
import { motion } from "framer-motion";

export function PageLayout({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <main className="mx-auto max-w-6xl px-6 pt-32 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        {eyebrow && (
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            {eyebrow}
          </div>
        )}
        <h1 className="font-display text-4xl md:text-6xl font-bold">
          <span className="text-gradient">{title}</span>
        </h1>
        {intro && (
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{intro}</p>
        )}
      </motion.div>
      {children}
    </main>
  );
}
