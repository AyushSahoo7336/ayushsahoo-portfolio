import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  ArrowRight,
} from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { contacts } from "@/data/portfolio";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Portfolio" },
      { name: "description", content: "Reach out via any platform." },
      { property: "og:title", content: "Contact — Portfolio" },
      { property: "og:description", content: "Reach out via any platform." },
    ],
  }),
  component: ContactPage,
});

const iconMap: Record<string, typeof Mail> = {
  MessageCircle,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
};

function ContactPage() {
  return (
    <PageLayout
      eyebrow="Connect"
      title="Get in Touch"
      intro="Let's connect! Feel free to reach out through any of these platforms."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {contacts.map((c, i) => {
          const Icon = iconMap[c.icon] ?? Mail;
          return (
            <motion.a
              key={c.platform}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="surface-card group flex items-center gap-4 rounded-2xl p-5 transition-all hover:-translate-y-1 hover:border-primary/50"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <Icon size={20} />
              </div>
              <div className="flex-1">
                <div className="font-display text-base font-semibold">{c.platform}</div>
                <div className="text-xs text-muted-foreground">{c.handle}</div>
              </div>
              <ArrowRight
                size={18}
                className="text-muted-foreground transition group-hover:translate-x-1 group-hover:text-primary"
              />
            </motion.a>
          );
        })}
      </div>
    </PageLayout>
  );
}
