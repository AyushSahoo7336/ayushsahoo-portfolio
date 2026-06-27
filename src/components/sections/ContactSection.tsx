import { motion } from "framer-motion";
import { MessageCircle, Github, Linkedin, Mail, Code2, ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { contacts } from "@/data/portfolio";

const ICONS = { MessageCircle, Github, Linkedin, Mail, Code2 } as const;

export function ContactSection() {
  return (
    <div className="pb-20">
      <PageHeader
        eyebrow="Get in Touch"
        title={<>Let&apos;s <span style={{ color: "var(--primary-accent)" }}>connect</span></>}
        intro="Feel free to reach out through any of these platforms."
      />
      <section className="mx-auto grid max-w-5xl gap-4 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {contacts.map((c, i) => {
          const Icon = ICONS[c.icon as keyof typeof ICONS] ?? Mail;
          return (
            <motion.a
              key={c.platform}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="interactive-card group flex items-center gap-4 rounded-2xl bg-[var(--glass-bg)] p-5 backdrop-blur-sm transition hover:-translate-y-1"
            >
              <span
                className="grid h-11 w-11 place-items-center rounded-xl"
                style={{
                  backgroundColor: "color-mix(in oklab, var(--primary-accent) 15%, transparent)",
                  color: "var(--primary-accent)",
                }}
              >
                <Icon size={18} />
              </span>
              <div className="flex-1">
                <div className="font-display text-base font-semibold">{c.platform}</div>
                <div className="text-xs text-foreground/55">{c.handle}</div>
              </div>
              <ArrowUpRight size={16} className="text-foreground/40 transition group-hover:text-foreground" />
            </motion.a>
          );
        })}
      </section>
    </div>
  );
}
