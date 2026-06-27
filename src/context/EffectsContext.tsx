import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

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
  const [effect, setEffect] = useState<EffectName>("matrix");
  const [dark, setDark] = useState(true);
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
    }
  }, [dark]);

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
