import { useEffect, useState } from "react";

export function useThemeMode(): "light" | "dark" {
  const [mode, setMode] = useState<"light" | "dark">("dark");
  useEffect(() => {
    const read = () =>
      setMode(document.documentElement.classList.contains("light") ? "light" : "dark");
    read();
    const obs = new MutationObserver(read);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);
  return mode;
}
