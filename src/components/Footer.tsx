import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "../data/site";

export function Footer() {
  const [clicks, setClicks] = useState(0);
  const found = clicks >= 5;

  return (
    <footer className="relative z-10 border-t border-white/6 px-5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="font-display text-lg italic text-cream/80">{site.logo}</p>
        <p className="text-xs text-muted">
          © {new Date().getFullYear()} {site.name}. Built with curiosity and a suspicious amount of coffee.
        </p>
        <button
          type="button"
          onClick={() => setClicks((c) => c + 1)}
          className="font-mono text-sm text-muted/70 transition hover:text-gold"
          aria-label="Tiny easter egg"
        >
          :)
        </button>
      </div>

      <AnimatePresence>
        {found && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-4 text-center font-mono text-xs text-gold"
          >
            Okay okay... you found it 😂
          </motion.p>
        )}
      </AnimatePresence>
    </footer>
  );
}
