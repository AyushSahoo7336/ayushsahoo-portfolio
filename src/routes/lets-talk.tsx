import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";
import { PageLayout } from "@/components/site/PageLayout";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/lets-talk")({
  head: () => ({
    meta: [
      { title: "Let's Talk — Portfolio" },
      { name: "description", content: "Send me a message — I'll get back to you soon." },
      { property: "og:title", content: "Let's Talk — Portfolio" },
      { property: "og:description", content: "Send me a message — I'll get back to you soon." },
    ],
  }),
  component: LetsTalkPage,
});

function LetsTalkPage() {
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Message sent!", { description: "I'll get back to you soon." });
      (e.target as HTMLFormElement).reset();
    }, 800);
  }

  return (
    <PageLayout
      eyebrow="Say Hi"
      title="Let's Talk"
      intro="Have a project in mind? Want to collaborate? Drop me a message."
    >
      <Toaster />
      <form
        onSubmit={handleSubmit}
        className="mx-auto max-w-2xl surface-card rounded-2xl p-8 space-y-5"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Your Name" name="name" required />
          <Field label="Your Email" name="email" type="email" required />
        </div>
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Your Message
          </label>
          <textarea
            name="message"
            required
            rows={6}
            className="w-full rounded-xl border border-border bg-background/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
            placeholder="Tell me about your project..."
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:scale-[1.01] disabled:opacity-60"
        >
          <Send size={16} />
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </PageLayout>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-border bg-background/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
        placeholder={label}
      />
    </div>
  );
}
