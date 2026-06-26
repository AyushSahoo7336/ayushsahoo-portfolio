import { motion } from "framer-motion";

export function Timeline({ items }: { items: { title: string; org: string; date: string; extra?: string }[] }) {
  return (
    <section className="mx-auto max-w-3xl px-6">
      <div className="relative border-l border-white/10 pl-8">
        {items.map((it, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="relative mb-10 last:mb-0"
          >
            <span
              className="absolute -left-[37px] top-1.5 h-3 w-3 rounded-full ring-4 ring-background"
              style={{ backgroundColor: "var(--primary-accent)" }}
            />
            <div className="text-xs uppercase tracking-wider text-foreground/45">{it.date}</div>
            <h3 className="mt-1 font-display text-xl font-semibold">{it.title}</h3>
            <div className="mt-1 text-sm text-foreground/60">{it.org}</div>
            {it.extra && (
              <div className="mt-1 text-xs font-medium" style={{ color: "var(--primary-accent)" }}>
                {it.extra}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
