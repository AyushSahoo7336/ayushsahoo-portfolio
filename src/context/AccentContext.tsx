import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export const ACCENTS = {
  forest: "#22c55e",
  cyan: "#06b6d4",
  ember: "#f97316",
} as const;

export type AccentName = keyof typeof ACCENTS;

type Ctx = { accent: AccentName; color: string; setAccent: (a: AccentName) => void };

const AccentContext = createContext<Ctx | null>(null);

export function AccentProvider({ children }: { children: ReactNode }) {
  const [accent, setAccent] = useState<AccentName>("cyan");

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.style.setProperty("--primary-accent", ACCENTS[accent]);
    }
  }, [accent]);

  return (
    <AccentContext.Provider value={{ accent, color: ACCENTS[accent], setAccent }}>
      {children}
    </AccentContext.Provider>
  );
}

export function useAccent() {
  const ctx = useContext(AccentContext);
  if (!ctx) throw new Error("useAccent must be used within AccentProvider");
  return ctx;
}
