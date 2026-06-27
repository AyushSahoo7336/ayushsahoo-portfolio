import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";

export function LetsTalkSection() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    (e.currentTarget as HTMLFormElement).reset();
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <div className="pb-20">
      <PageHeader
        eyebrow="Let's Talk"
        title={<>Have a <span style={{ color: "var(--primary-accent)" }}>project in mind?</span></>}
        intro="Want to collaborate, or just say hi? Drop me a message and I'll get back to you soon."
      />
      <section className="mx-auto max-w-2xl px-6">
        <form
          onSubmit={onSubmit}
          className="space-y-4 rounded-2xl border bg-[var(--glass-bg)] p-6 backdrop-blur-sm shadow-[var(--glass-shadow)] md:p-8"
          style={{ borderColor: "var(--glass-border)" }}
        >
          <Field label="Your Name" name="name" type="text" placeholder="Jane Doe" required />
          <Field label="Your Email" name="email" type="email" placeholder="jane@example.com" required />
          <div>
            <label className="mb-1.5 block text-xs uppercase tracking-wider text-foreground/55">Your Message</label>
            <textarea
              name="message"
              rows={5}
              required
              placeholder="Tell me about your project..."
              className="w-full rounded-xl border bg-[var(--glass-bg)] px-4 py-3 text-sm outline-none transition focus:border-[color:var(--primary-accent)]"
              style={{ borderColor: "var(--glass-border)" }}
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90"
            style={{ backgroundColor: "var(--primary-accent)" }}
          >
            <Send size={14} /> Send Message
          </button>
          {sent && (
            <p className="text-sm" style={{ color: "var(--primary-accent)" }}>
              Thanks — your message is on its way.
            </p>
          )}
        </form>
      </section>
    </div>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="mb-1.5 block text-xs uppercase tracking-wider text-foreground/55">{label}</label>
      <input
        {...props}
        className="w-full rounded-xl border bg-[var(--glass-bg)] px-4 py-3 text-sm outline-none transition focus:border-[color:var(--primary-accent)]"
        style={{ borderColor: "var(--glass-border)" }}
      />
    </div>
  );
}
