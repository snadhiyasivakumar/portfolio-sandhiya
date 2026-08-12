import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useIsMobile } from "../hooks/useIsMobile";

export function CursorFollowers() {
  const reduce = useReducedMotion();
  const isMobile = useIsMobile();
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (reduce || isMobile) return;

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [reduce, isMobile]);

  if (reduce || isMobile) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-30 hidden md:block" aria-hidden>
      <motion.div
        className="absolute h-3 w-3 rounded-full bg-gold/40 blur-[1px]"
        animate={{
          x: pos.x - 6,
          y: pos.y - 6,
          opacity: visible ? 0.7 : 0,
        }}
        transition={{ type: "spring", stiffness: 180, damping: 22, mass: 0.4 }}
      />
      <motion.div
        className="absolute h-8 w-8 rounded-full border border-gold/20"
        animate={{
          x: pos.x - 16,
          y: pos.y - 16,
          opacity: visible ? 0.45 : 0,
        }}
        transition={{ type: "spring", stiffness: 80, damping: 18, mass: 0.7 }}
      />
    </div>
  );
}
