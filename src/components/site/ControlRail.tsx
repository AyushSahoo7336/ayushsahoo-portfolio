import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Focus,
  Wifi,
  Music2,
  Snowflake,
  Moon,
  Sun,
  Palette,
  Globe,
  Check,
  Code2,
  Play,
  Pause,
  Volume2,
  VolumeX,
} from "lucide-react";
import { ACCENTS, useAccent, type AccentName } from "@/context/AccentContext";
import { useEffects } from "@/context/EffectsContext";

type PanelId = "focus" | "wifi" | "music" | "effects" | "theme" | "palette" | "lang" | null;

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

const TRACKS = ["Idea 22 (Slowed)", "Isabella's Lullaby", "Jazz Vibes"];

export function ControlRail() {
  const { accent, setAccent, color } = useAccent();
  const { effect, setEffect, dark, setDark, focus, setFocus } = useEffects();
  const [open, setOpen] = useState<PanelId>(null);
  const [playing, setPlaying] = useState<string | null>(null);
  const [volume, setVolume] = useState(0);
  const [lang, setLang] = useState<"EN" | "FR">("EN");

  const toggle = (id: PanelId) => setOpen((cur) => (cur === id ? null : id));

  return (
    <div className="fixed right-3 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 sm:flex">
      <RailBtn active={focus} label="Focus" onClick={() => setFocus(!focus)} color={color}>
        <Focus size={15} />
      </RailBtn>

      <RailBtn active={open === "wifi"} label="Status" onClick={() => toggle("wifi")} color={color}>
        <Wifi size={15} />
      </RailBtn>
      <Panel show={open === "wifi"} onClose={() => setOpen(null)} title="Status">
        <div className="flex items-center gap-2 text-sm text-foreground/80">
          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: color, boxShadow: `0 0 8px ${color}` }} />
          Online · all systems normal
        </div>
      </Panel>

      <RailBtn active={open === "music"} label="Music" onClick={() => toggle("music")} color={color}>
        <Music2 size={15} />
      </RailBtn>
      <Panel show={open === "music"} onClose={() => setOpen(null)} title="Music Player" icon={<Music2 size={14} />}>
        <div className="mb-4 flex items-center gap-3">
          <button onClick={() => setVolume(volume > 0 ? 0 : 60)} className="text-foreground/70 hover:text-foreground">
            {volume === 0 ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>
          <input
            type="range"
            min={0}
            max={100}
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            className="flex-1 accent-[var(--primary-accent)]"
            style={{ accentColor: color }}
          />
          <span className="w-9 text-right text-xs text-foreground/60">{volume}%</span>
        </div>
        <div className="space-y-1.5">
          {TRACKS.map((t) => {
            const active = playing === t;
            return (
              <button
                key={t}
                onClick={() => setPlaying(active ? null : t)}
                className="flex w-full items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] px-3 py-2.5 text-left transition hover:bg-white/[0.05]"
                style={active ? { borderColor: color, backgroundColor: "color-mix(in oklab, " + color + " 12%, transparent)" } : undefined}
              >
                <span
                  className="grid h-9 w-9 place-items-center rounded-lg"
                  style={{ backgroundColor: "color-mix(in oklab, " + color + " 18%, transparent)", color }}
                >
                  {active ? <Pause size={14} /> : <Play size={14} />}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="truncate text-sm font-medium" style={active ? { color } : undefined}>{t}</div>
                  {active && <div className="text-[10px] uppercase tracking-wider text-foreground/50">Playing</div>}
                </div>
              </button>
            );
          })}
        </div>
      </Panel>

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
                onClick={() => setEffect(o.id)}
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
        <div className="space-y-1">
          {ACCENT_OPTS.map((o) => {
            const active = accent === o.id;
            return (
              <button
                key={o.id}
                onClick={() => setAccent(o.id)}
                className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition hover:bg-white/5"
              >
                <span className="h-3 w-3 rounded-full" style={{ backgroundColor: ACCENTS[o.id] }} />
                <span className="flex-1">{o.label}</span>
                {active && <Check size={14} style={{ color }} />}
              </button>
            );
          })}
        </div>
      </Panel>

      <RailBtn active={open === "lang"} label="Language" onClick={() => toggle("lang")} color={color}>
        <Globe size={15} />
      </RailBtn>
      <Panel show={open === "lang"} onClose={() => setOpen(null)} title="Language">
        <div className="space-y-1">
          {(["EN", "FR"] as const).map((l) => {
            const active = lang === l;
            return (
              <button
                key={l}
                onClick={() => setLang(l)}
                className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition hover:bg-white/5"
              >
                <span className="flex-1">{l === "EN" ? "English" : "Français"}</span>
                {active && <Check size={14} style={{ color }} />}
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
      className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-black/50 text-foreground/70 backdrop-blur-md transition hover:text-foreground"
      style={active ? { color, borderColor: color, boxShadow: `0 0 0 1px ${color}, 0 0 14px -2px ${color}` } : undefined}
    >
      {children}
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
            className="absolute right-12 top-0 z-40 w-72 rounded-2xl border border-white/10 bg-[#0a1020]/95 p-4 shadow-2xl backdrop-blur-xl"
            style={{ borderColor: "color-mix(in oklab, var(--primary-accent) 30%, rgba(255,255,255,0.1))" }}
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
