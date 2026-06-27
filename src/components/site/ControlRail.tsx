import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Snowflake, Moon, Sun, Palette, Check, Code2 } from "lucide-react";
import { ACCENTS, useAccent, type AccentName } from "@/context/AccentContext";
import { useEffects } from "@/context/EffectsContext";

type PanelId = "effects" | "palette" | null;

const ACCENT_OPTS: { id: AccentName; label: string }[] = [
  { id: "cyan", label: "Sea" },
  { id: "forest", label: "Forest" },
  { id: "ember", label: "Ember" },
  { id: "violet", label: "Violet" },
  { id: "rose", label: "Rose" },
  { id: "sun", label: "Sun" },
  { id: "sky", label: "Sky" },
  { id: "magenta", label: "Magenta" },
];

export function ControlRail() {
  const { accent, setAccent, color } = useAccent();
  const { effect, setEffect, dark, setDark } = useEffects();
  const [open, setOpen] = useState<PanelId>(null);

  const toggle = (id: PanelId) => setOpen((cur) => (cur === id ? null : id));

  return (
    <div className="fixed right-3 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 sm:flex">
      <RailBtn active={open === "effects" || effect !== "none"} label="Effects" onClick={() => toggle("effects")} color={color}>
        <Snowflake size={15} />
      </RailBtn>
      <Panel show={open === "effects"} onClose={() => setOpen(null)} title="Background Effects">
        <div className="space-y-1.5">
          {[
            { id: "none" as const, label: "Stars Only", icon: <Snowflake size={14} /> },
            { id: "flakes" as const, label: "Cold Flakes", icon: <Snowflake size={14} /> },
            { id: "matrix" as const, label: "Matrix Rain", icon: <Code2 size={14} /> },
          ].map((o) => {
            const active = effect === o.id;
            return (
              <button
                key={o.id}
                onClick={() => { setEffect(o.id); setOpen(null); }}
                className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition hover:bg-white/5"
                style={active ? { color } : undefined}
              >
                <span style={{ color }}>{o.icon}</span>
                <span className="flex-1">{o.label}</span>
                {active && <Check size={14} style={{ color }} />}
              </button>
            );
          })}
        </div>
      </Panel>

      <RailBtn active={!dark} label="Theme mode" onClick={() => setDark(!dark)} color={color}>
        {dark ? <Moon size={15} /> : <Sun size={15} />}
      </RailBtn>

      <RailBtn active={open === "palette"} label="Accent" onClick={() => toggle("palette")} color={color}>
        <Palette size={15} />
      </RailBtn>
      <Panel show={open === "palette"} onClose={() => setOpen(null)} title="Custom Theme">
        <div className="mb-3 flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2">
          <span className="h-3 w-3 rounded-full" style={{ backgroundColor: color }} />
          <span className="text-sm">{ACCENT_OPTS.find((a) => a.id === accent)?.label ?? "Custom"}</span>
        </div>
        <div className="mb-1 text-[10px] uppercase tracking-wider text-foreground/45">Select Theme</div>
        <div className="grid grid-cols-4 gap-2">
          {ACCENT_OPTS.map((o) => {
            const active = accent === o.id;
            return (
              <button
                key={o.id}
                onClick={() => setAccent(o.id)}
                aria-label={o.label}
                title={o.label}
                className="relative grid h-10 w-full place-items-center rounded-lg border border-white/10 transition hover:scale-105"
                style={{
                  backgroundColor: "color-mix(in oklab, " + ACCENTS[o.id] + " 18%, transparent)",
                  borderColor: active ? ACCENTS[o.id] : undefined,
                  boxShadow: active ? `0 0 0 1px ${ACCENTS[o.id]}, 0 0 12px -2px ${ACCENTS[o.id]}` : undefined,
                }}
              >
                <span className="h-4 w-4 rounded-full" style={{ backgroundColor: ACCENTS[o.id] }} />
                {active && (
                  <Check size={10} className="absolute right-1 top-1" style={{ color: ACCENTS[o.id] }} />
                )}
              </button>
            );
          })}
        </div>
      </Panel>
    </div>
  );
}

function RailBtn({
  active,
  onClick,
  label,
  color,
  children,
}: {
  active?: boolean;
  onClick: () => void;
  label: string;
  color: string;
  children: ReactNode;
}) {
  return (
    <button
      aria-label={label}
      onClick={onClick}
      className="group relative grid h-9 w-9 place-items-center rounded-full border bg-[var(--glass-bg)] text-foreground/70 backdrop-blur-md shadow-[var(--glass-shadow)] transition-all duration-300 hover:scale-110 hover:border-transparent hover:text-white hover:shadow-[0_0_18px_-2px_var(--primary-accent)]"
      style={
        active
          ? { color: "#fff", borderColor: "transparent", backgroundColor: color, boxShadow: `0 0 18px -2px ${color}` }
          : ({ borderColor: "var(--glass-border)" } as React.CSSProperties)
      }
      onMouseEnter={(e) => {
        if (!active) (e.currentTarget as HTMLButtonElement).style.backgroundColor = color;
      }}
      onMouseLeave={(e) => {
        if (!active) (e.currentTarget as HTMLButtonElement).style.backgroundColor = "";
      }}
    >
      {children}
      <span
        className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-md border px-3 py-1.5 text-xs text-foreground opacity-0 shadow-[var(--glass-shadow)] backdrop-blur-md transition-opacity duration-200 group-hover:opacity-100"
        style={{ backgroundColor: "var(--glass-bg)", borderColor: "var(--glass-border)" }}
      >
        {label}
      </span>
    </button>
  );
}

function Panel({
  show,
  onClose,
  title,
  icon,
  children,
}: {
  show: boolean;
  onClose: () => void;
  title: string;
  icon?: ReactNode;
  children: ReactNode;
}) {
  return (
    <AnimatePresence>
      {show && (
        <>
          <div className="fixed inset-0 z-30" onClick={onClose} aria-hidden />
          <motion.div
            initial={{ opacity: 0, x: 12, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 12, scale: 0.96 }}
            transition={{ duration: 0.18 }}
            className="absolute right-12 top-0 z-40 w-72 rounded-2xl border bg-card p-4 shadow-[0_12px_40px_rgba(0,0,0,0.12)] backdrop-blur-xl"
            style={{ borderColor: "color-mix(in oklab, var(--primary-accent) 30%, var(--glass-border))" }}
          >
            <div className="mb-3 flex items-center gap-2 text-sm font-semibold" style={{ color: "var(--primary-accent)" }}>
              {icon}
              {title}
            </div>
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
