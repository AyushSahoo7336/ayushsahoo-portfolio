import { useState } from "react";
import { Focus, Wifi, Music2, Snowflake, Moon, Palette, Globe } from "lucide-react";
import { ACCENTS, useAccent, type AccentName } from "@/context/AccentContext";

const ACCENT_ORDER: AccentName[] = ["cyan", "forest", "ember"];

export function ControlRail() {
  const { accent, setAccent, color } = useAccent();
  const [openPalette, setOpenPalette] = useState(false);
  const [focus, setFocus] = useState(false);
  const [sound, setSound] = useState(false);
  const [music, setMusic] = useState(false);
  const [snow, setSnow] = useState(false);
  const [dark, setDark] = useState(true);

  const Btn = ({
    active,
    onClick,
    label,
    children,
  }: {
    active?: boolean;
    onClick: () => void;
    label: string;
    children: React.ReactNode;
  }) => (
    <button
      aria-label={label}
      onClick={onClick}
      className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-black/40 text-foreground/70 backdrop-blur-md transition hover:text-foreground"
      style={active ? { color, borderColor: color, boxShadow: `0 0 0 1px ${color}` } : undefined}
    >
      {children}
    </button>
  );

  return (
    <div className="fixed right-3 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-2 sm:flex">
      <Btn active={focus} onClick={() => setFocus((v) => !v)} label="Focus mode">
        <Focus size={15} />
      </Btn>
      <Btn active={sound} onClick={() => setSound((v) => !v)} label="Sound effects">
        <Wifi size={15} />
      </Btn>
      <Btn active={music} onClick={() => setMusic((v) => !v)} label="Music">
        <Music2 size={15} />
      </Btn>
      <Btn active={snow} onClick={() => setSnow((v) => !v)} label="Snow effect">
        <Snowflake size={15} />
      </Btn>
      <Btn active={dark} onClick={() => setDark((v) => !v)} label="Theme">
        <Moon size={15} />
      </Btn>
      <div className="relative">
        <Btn active={openPalette} onClick={() => setOpenPalette((v) => !v)} label="Accent">
          <Palette size={15} />
        </Btn>
        {openPalette && (
          <div className="absolute right-11 top-0 flex gap-2 rounded-full border border-white/10 bg-black/70 p-2 backdrop-blur-md">
            {ACCENT_ORDER.map((name) => (
              <button
                key={name}
                aria-label={`${name} accent`}
                onClick={() => {
                  setAccent(name);
                  setOpenPalette(false);
                }}
                className="h-5 w-5 rounded-full transition hover:scale-110"
                style={{
                  backgroundColor: ACCENTS[name],
                  outline: accent === name ? "2px solid white" : "none",
                  outlineOffset: "2px",
                }}
              />
            ))}
          </div>
        )}
      </div>
      <Btn onClick={() => {}} label="Language">
        <Globe size={15} />
      </Btn>
    </div>
  );
}
