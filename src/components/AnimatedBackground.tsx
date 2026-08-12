import { useReducedMotion } from "framer-motion";

export function AnimatedBackground() {
  const reduce = useReducedMotion();

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[#0b0b10]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(196,167,125,0.08),_transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,_rgba(154,168,199,0.07),_transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,_rgba(212,165,165,0.06),_transparent_40%)]" />

      <div
        className={`absolute -left-24 top-[-8%] h-[420px] w-[420px] rounded-full bg-[#c4a77d]/18 blur-[110px] ${
          reduce ? "" : "animate-blob-a"
        }`}
      />
      <div
        className={`absolute right-[-8%] top-[8%] h-[380px] w-[380px] rounded-full bg-[#9aa8c7]/16 blur-[120px] ${
          reduce ? "" : "animate-blob-b"
        }`}
      />
      <div
        className={`absolute bottom-[8%] left-[28%] h-[340px] w-[340px] rounded-full bg-[#d4a5a5]/12 blur-[120px] ${
          reduce ? "" : "animate-blob-c"
        }`}
      />

      {!reduce && <Particles />}
      <div className="grid-overlay" />
      <div className="noise" />
    </div>
  );
}

function Particles() {
  const dots = [
    { l: "12%", t: "22%", d: "0s" },
    { l: "28%", t: "68%", d: "1.2s" },
    { l: "48%", t: "16%", d: "0.4s" },
    { l: "63%", t: "42%", d: "1.8s" },
    { l: "78%", t: "18%", d: "0.8s" },
    { l: "84%", t: "72%", d: "2.1s" },
    { l: "18%", t: "84%", d: "1.5s" },
    { l: "54%", t: "78%", d: "0.6s" },
    { l: "36%", t: "36%", d: "2.4s" },
    { l: "70%", t: "58%", d: "1.1s" },
  ];

  return (
    <>
      {dots.map((dot) => (
        <span
          key={`${dot.l}-${dot.t}`}
          className="absolute h-1 w-1 rounded-full bg-gold-soft/50"
          style={{
            left: dot.l,
            top: dot.t,
            animation: `float-y 7s ease-in-out ${dot.d} infinite`,
          }}
        />
      ))}
    </>
  );
}
