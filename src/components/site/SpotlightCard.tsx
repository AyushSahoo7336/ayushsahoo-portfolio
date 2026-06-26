import { useRef, useState, type ReactNode, type MouseEvent } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  as?: "div" | "button";
  onClick?: () => void;
  style?: React.CSSProperties;
};

export function SpotlightCard({ children, className, as = "div", onClick, style }: Props) {
  const ref = useRef<HTMLDivElement | HTMLButtonElement | null>(null);
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [hover, setHover] = useState(false);

  const onMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const overlay = (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300"
      style={{
        opacity: hover ? 1 : 0,
        background: `radial-gradient(420px circle at ${pos.x}px ${pos.y}px, color-mix(in oklab, var(--primary-accent) 12%, transparent), transparent 55%)`,
      }}
    />
  );

  if (as === "button") {
    return (
      <button
        ref={ref as React.RefObject<HTMLButtonElement>}
        onClick={onClick}
        onMouseMove={onMove}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={`relative ${className ?? ""}`}
        style={style}
      >
        {overlay}
        <span className="relative z-10 block h-full w-full text-left">{children}</span>
      </button>
    );
  }

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      onMouseMove={onMove}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`relative ${className ?? ""}`}
      style={style}
    >
      {overlay}
      <div className="relative z-10 h-full w-full">{children}</div>
    </div>
  );
}
