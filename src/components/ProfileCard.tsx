import { useEffect, useRef, useState, type MouseEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { site } from "../data/site";
import { useIsMobile } from "../hooks/useIsMobile";

// Replace /public/sandhiya.png with Sandhiya's preferred profile photo.
// Keep the filename sandhiya.png (or update this import to match).
import profilePhoto from "../../public/sandhiya.png";

const stickers = [
  { label: "</>", x: "-12%", y: "12%", delay: "0s" },
  { label: "☕", x: "88%", y: "8%", delay: "0.4s" },
  { label: "Java", x: "-8%", y: "62%", delay: "0.8s" },
  { label: "Python", x: "86%", y: "70%", delay: "1.1s" },
  { label: "DSA", x: "72%", y: "88%", delay: "0.2s" },
];

export function ProfileCard() {
  const wrap = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const isMobile = useIsMobile();
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [bye, setBye] = useState(false);
  const [imgOk, setImgOk] = useState(true);
  const [coffee, setCoffee] = useState<"compiling" | "survived">("compiling");

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => {
      setCoffee((c) => (c === "compiling" ? "survived" : "compiling"));
    }, 3200);
    return () => window.clearInterval(id);
  }, [reduce]);

  const onMove = (e: MouseEvent) => {
    if (reduce || isMobile || !wrap.current) return;
    const rect = wrap.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    setTilt({
      ry: (px - 0.5) * 14,
      rx: (0.5 - py) * 10,
      x: (px - 0.5) * 10,
      y: (py - 0.5) * 8,
    });
  };

  const onEnter = () => {
    setHovered(true);
    setBye(false);
  };

  const onLeave = () => {
    setHovered(false);
    setBye(true);
    setTilt({ rx: 0, ry: 0, x: 0, y: 0 });
    window.setTimeout(() => setBye(false), 1200);
  };

  return (
    <div className="relative mx-auto w-full max-w-[380px] sm:max-w-[420px]">
      <div className="absolute -inset-6 rounded-[2.4rem] bg-gradient-to-br from-gold/20 via-blush/10 to-peri/20 blur-2xl" />

      {stickers.map((s) => (
        <motion.span
          key={s.label}
          className="absolute z-20 hidden rounded-full border border-white/10 bg-[#16161e]/80 px-2.5 py-1 font-mono text-[11px] text-gold-soft shadow-lg backdrop-blur sm:inline-flex"
          style={{ left: s.x, top: s.y, animationDelay: s.delay }}
          animate={reduce ? undefined : { y: [0, -8, 0] }}
          transition={{ duration: 5.4, repeat: Infinity, delay: parseFloat(s.delay) }}
        >
          {s.label}
        </motion.span>
      ))}

      <motion.div
        className="absolute -left-3 top-10 z-20 hidden sm:block"
        animate={reduce ? undefined : { y: [0, -8, 0], rotate: [-6, 4, -6] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <CoffeeCup state={coffee} />
      </motion.div>

      <motion.div
        ref={wrap}
        onMouseMove={onMove}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        animate={{ rotateX: tilt.rx, rotateY: tilt.ry }}
        transition={{ type: "spring", stiffness: 180, damping: 16, mass: 0.4 }}
        style={{ transformStyle: "preserve-3d", perspective: 900 }}
        className="relative"
      >
        <div className="photo-ring absolute -inset-[2px] rounded-[2rem] opacity-80 blur-[0.5px]" />
        <div
          className={`absolute -inset-[2px] rounded-[2rem] opacity-70 ${
            reduce ? "" : "animate-spin-slow"
          } photo-ring`}
          style={{ maskImage: "linear-gradient(#000, transparent 70%)" }}
        />

        <div className="glass relative overflow-hidden rounded-[1.9rem] p-2.5">
          <div className="relative overflow-hidden rounded-[1.45rem] bg-ink-2">
            {imgOk ? (
              <motion.img
                src={profilePhoto}
                alt="Portrait of Sandhiya S"
                onError={() => setImgOk(false)}
                animate={{ x: tilt.x, y: tilt.y, scale: hovered ? 1.045 : 1 }}
                transition={{ type: "spring", stiffness: 140, damping: 18 }}
                className="aspect-[4/5] w-full object-cover object-[50%_18%]"
              />
            ) : (
              <div className="flex aspect-[4/5] w-full items-center justify-center bg-gradient-to-br from-ink-3 to-ink">
                <span className="font-display text-7xl italic text-gold/70">S.</span>
              </div>
            )}

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-white/5" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/10 to-transparent" />
          </div>

          <div className="flex items-center justify-between px-3 py-3">
            <div>
              <p className="font-display text-lg italic text-cream">{site.name}</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                CSE · 2nd year
              </p>
            </div>
            <span className="rounded-full border border-gold/25 bg-gold/10 px-2.5 py-1 font-mono text-[10px] text-gold">
              online
            </span>
          </div>
        </div>

        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.95 }}
              className="absolute -right-2 top-8 z-30 rounded-2xl border border-white/10 bg-[#16161e]/90 px-3 py-1.5 text-sm shadow-xl backdrop-blur"
            >
              Hi 👀
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {bye && !hovered && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="absolute -right-2 top-8 z-30 rounded-2xl border border-white/10 bg-[#16161e]/90 px-3 py-1.5 text-sm shadow-xl backdrop-blur"
            >
              Okay bye 😭
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

function CoffeeCup({ state }: { state: "compiling" | "survived" }) {
  return (
    <div className="glass rounded-2xl px-2.5 py-2">
      <div className="relative mx-auto h-8 w-7">
        <div className="absolute left-1/2 top-0 flex -translate-x-1/2 gap-0.5">
          <span className="h-2 w-0.5 rounded-full bg-gold/50" style={{ animation: "steam 1.6s ease-in-out infinite" }} />
          <span className="h-2 w-0.5 rounded-full bg-gold/40" style={{ animation: "steam 1.6s ease-in-out 0.25s infinite" }} />
          <span className="h-2 w-0.5 rounded-full bg-gold/50" style={{ animation: "steam 1.6s ease-in-out 0.5s infinite" }} />
        </div>
        <div className="absolute bottom-0 left-1/2 h-5 w-5 -translate-x-1/2 rounded-b-md rounded-t-sm bg-gold/80" />
        <div className="absolute bottom-1.5 right-0 h-2.5 w-2 rounded-full border-2 border-gold/80" />
      </div>
      <p className="mt-1 text-center font-mono text-[9px] text-gold-soft">
        {state === "compiling" ? "☕ compiling..." : "✓ survived"}
      </p>
    </div>
  );
}
