import { ACCENTS, useAccent, type AccentName } from "@/context/AccentContext";

const ORDER: AccentName[] = ["forest", "cyan", "ember"];

export function AccentSwitcher() {
  const { accent, setAccent } = useAccent();
  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2 p-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl">
      {ORDER.map((name) => (
        <button
          key={name}
          aria-label={`${name} accent`}
          onClick={() => setAccent(name)}
          className={`h-6 w-6 rounded-full transition-transform hover:scale-110 ${
            accent === name ? "ring-2 ring-white/70 ring-offset-2 ring-offset-[#0a0a0a]" : ""
          }`}
          style={{ backgroundColor: ACCENTS[name] }}
        />
      ))}
    </div>
  );
}
