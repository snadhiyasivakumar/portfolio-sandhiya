import { useRef, useState, type MouseEvent, type ReactNode, type RefObject } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "../lib/cn";

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "ghost" | "soft";
  external?: boolean;
};

export function MagneticButton({
  children,
  href,
  onClick,
  className,
  variant = "primary",
  external,
}: Props) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const reduce = useReducedMotion();
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);

  const onMove = (e: MouseEvent) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setOffset({ x: x * 0.22, y: y * 0.22 });
  };

  const reset = () => setOffset({ x: 0, y: 0 });

  const spawnRipple = (e: MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const id = Date.now();
    setRipples((prev) => [
      ...prev,
      { id, x: e.clientX - rect.left, y: e.clientY - rect.top },
    ]);
    window.setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 600);
  };

  const styles = {
    primary:
      "bg-gold text-ink hover:bg-gold-soft shadow-[0_10px_30px_rgba(196,167,125,0.22)]",
    ghost:
      "bg-transparent text-cream border border-white/15 hover:border-gold/40 hover:bg-white/5",
    soft: "bg-white/6 text-cream border border-white/10 hover:bg-white/10",
  }[variant];

  const shared = cn(
    "relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-5 py-2.5 text-sm font-medium tracking-wide transition-colors",
    styles,
    className,
  );

  const inner = (
    <>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {ripples.map((r) => (
        <span
          key={r.id}
          className="pointer-events-none absolute h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/30"
          style={{
            left: r.x,
            top: r.y,
            animation: "ripple 0.6s ease-out forwards",
          }}
        />
      ))}
    </>
  );

  if (href) {
    return (
      <motion.a
        ref={ref as RefObject<HTMLAnchorElement>}
        href={href}
        onClick={spawnRipple}
        onMouseMove={onMove}
        onMouseLeave={reset}
        animate={{ x: offset.x, y: offset.y }}
        transition={{ type: "spring", stiffness: 260, damping: 18, mass: 0.4 }}
        className={shared}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer noopener" : undefined}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.button
        ref={ref as RefObject<HTMLButtonElement>}
      type="button"
      onClick={(e) => {
        spawnRipple(e);
        onClick?.();
      }}
      onMouseMove={onMove}
      onMouseLeave={reset}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 260, damping: 18, mass: 0.4 }}
      className={shared}
    >
      {inner}
    </motion.button>
  );
}
