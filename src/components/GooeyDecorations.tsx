import { motion, useReducedMotion } from "framer-motion";

export function GooeyDecorations() {
  const reduce = useReducedMotion();

  if (reduce) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <motion.div
        className="absolute left-[8%] top-[18%] h-24 w-24 rounded-full bg-gold/10 blur-2xl"
        animate={{ y: [0, -18, 0], x: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[12%] top-[30%] h-16 w-16 rounded-full bg-blush/15 blur-xl"
        animate={{ y: [0, 14, 0], x: [0, -8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[16%] left-[40%] h-20 w-20 rounded-full bg-peri/10 blur-2xl"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
