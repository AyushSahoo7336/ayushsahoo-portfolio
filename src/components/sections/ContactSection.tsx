import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Github,
  Linkedin,
  Mail,
  Code2,
  ArrowUpRight,
  Copy,
  Check,
} from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { contacts } from "@/data/portfolio";

const ICONS = { Phone, Github, Linkedin, Mail, Code2 } as const;

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyPhone = async (number: string) => {
    try {
      await navigator.clipboard.writeText(number);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // fallback ignored
    }
  };

  return (
    <div className="pb-20">
      <PageHeader
        eyebrow="Get in Touch"
        title={<>Let&apos;s <span style={{ color: "var(--primary-accent)" }}>connect</span></>}
        intro="Feel free to reach out through any of these platforms."
      />
      <section className="mx-auto grid max-w-5xl grid-cols-1 gap-4 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3">
        {contacts.map((c, i) => {
          const Icon = ICONS[c.icon as keyof typeof ICONS] ?? Mail;
          const isPhone = c.platform === "Phone Number";

          if (isPhone) {
            return (
              <motion.button
                key={c.platform}
                onClick={() => copyPhone(c.handle)}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="interactive-card group relative flex w-full cursor-pointer items-center gap-4 rounded-2xl bg-[var(--glass-bg)] p-5 text-left backdrop-blur-sm transition hover:-translate-y-1"
              >
                <span
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-xl"
                  style={{
                    backgroundColor:
                      "color-mix(in oklab, var(--primary-accent) 15%, transparent)",
                    color: "var(--primary-accent)",
                  }}
                >
                  <Icon size={18} />
                </span>
                <div className="flex-1">
                  <div className="font-display text-base font-semibold">
                    {c.platform}
                  </div>
                  <div className="text-xs text-foreground/55">{c.handle}</div>
                </div>
                <span className="relative h-4 w-4">
                  <AnimatePresence mode="wait">
                    {copied ? (
                      <motion.span
                        key="check"
                        initial={{ opacity: 0, scale: 0.6 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.6 }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <Check
                          size={16}
                          className="text-emerald-400"
                        />
                      </motion.span>
                    ) : (
                      <motion.span
                        key="copy"
                        initial={{ opacity: 0, scale: 0.6 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.6 }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <Copy
                          size={16}
                          className="text-foreground/40 transition group-hover:text-foreground"
                        />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </span>
              </motion.button>
            );
          }

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
                  backgroundColor:
                    "color-mix(in oklab, var(--primary-accent) 15%, transparent)",
                  color: "var(--primary-accent)",
                }}
              >
                <Icon size={18} />
              </span>
              <div className="flex-1">
                <div className="font-display text-base font-semibold">
                  {c.platform}
                </div>
                <div className="text-xs text-foreground/55">{c.handle}</div>
              </div>
              <ArrowUpRight
                size={16}
                className="text-foreground/40 transition group-hover:text-foreground"
              />
            </motion.a>
          );
        })}
      </section>
    </div>
  );
}
