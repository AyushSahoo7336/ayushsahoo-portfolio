import { createContext, useContext, useState, type ReactNode } from "react";

export type EffectName = "none" | "flakes" | "matrix";

type Ctx = {
  effect: EffectName;
  setEffect: (e: EffectName) => void;
  dark: boolean;
  setDark: (d: boolean) => void;
  focus: boolean;
  setFocus: (f: boolean) => void;
};

const EffectsContext = createContext<Ctx | null>(null);

export function EffectsProvider({ children }: { children: ReactNode }) {
  const [effect, setEffect] = useState<EffectName>("none");
  const [dark, setDark] = useState(true);
  const [focus, setFocus] = useState(false);
  return (
    <EffectsContext.Provider value={{ effect, setEffect, dark, setDark, focus, setFocus }}>
      {children}
    </EffectsContext.Provider>
  );
}

export function useEffects() {
  const ctx = useContext(EffectsContext);
  if (!ctx) throw new Error("useEffects must be used within EffectsProvider");
  return ctx;
}
