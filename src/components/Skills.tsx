import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { skills, type Skill, type SkillHover } from "../data/skills";
import { SectionHeading } from "./SectionHeading";
import { cn } from "../lib/cn";

const categories = ["Languages", "Web", "Core Concepts"] as const;

export function Skills() {
  return (
    <section id="skills" className="relative z-10 mx-auto max-w-6xl px-5 py-24 md:px-8">
      <SectionHeading
        eyebrow="Tech stack"
        title="Things I like building with"
        subtitle="No fake percentages. Just the tools I'm actually learning and using."
      />

      <div className="space-y-10">
        {categories.map((category) => {
          const group = skills.filter((s) => s.category === category);
          if (!group.length) return null;
          return (
            <div key={category}>
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
                {category}
              </p>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {group.map((skill, i) => (
                  <SkillCard key={skill.name} skill={skill} index={i} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const [hover, setHover] = useState(false);
  const reduce = useReducedMotion();

  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.05 }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="glass group relative overflow-hidden rounded-[1.4rem] p-5"
    >
      <div className="pointer-events-none absolute -right-8 -top-10 h-28 w-28 rounded-full bg-gold/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-medium text-cream">{skill.name}</h3>
          <p className="mt-1 text-sm text-muted">{skill.blurb}</p>
        </div>
        <HoverMark type={skill.hover} active={hover} />
      </div>
    </motion.article>
  );
}

function HoverMark({ type, active }: { type: SkillHover; active: boolean }) {
  return (
    <div
      className={cn(
        "relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5",
        active && "border-gold/30",
      )}
    >
      {type === "coffee" && <CoffeeMark active={active} />}
      {type === "snake" && <SnakeMark active={active} />}
      {type === "nodes" && <NodesMark active={active} />}
      {type === "browser" && <BrowserMark active={active} />}
      {type === "compile" && <CompileMark active={active} />}
      {type === "layers" && <LayersMark active={active} />}
    </div>
  );
}

function CoffeeMark({ active }: { active: boolean }) {
  return (
    <div className="relative">
      {active && (
        <div className="absolute -top-2 left-1/2 flex -translate-x-1/2 gap-0.5">
          <i className="block h-2 w-0.5 rounded-full bg-gold/70" style={{ animation: "steam 1.2s ease-in-out infinite" }} />
          <i className="block h-2 w-0.5 rounded-full bg-gold/50" style={{ animation: "steam 1.2s 0.2s ease-in-out infinite" }} />
        </div>
      )}
      <span className="text-lg">☕</span>
    </div>
  );
}

function SnakeMark({ active }: { active: boolean }) {
  return (
    <span
      className="text-lg"
      style={active ? { animation: "snake 0.55s ease-in-out infinite" } : undefined}
    >
      🐍
    </span>
  );
}

function NodesMark({ active }: { active: boolean }) {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
      <line x1="6" y1="8" x2="20" y2="10" stroke="#c4a77d" strokeOpacity="0.55" />
      <line x1="7" y1="18" x2="19" y2="12" stroke="#9aa8c7" strokeOpacity="0.55" />
      <circle cx="6" cy="8" r="2.2" fill="#c4a77d" style={active ? { animation: "node-pulse 0.9s ease-in-out infinite" } : undefined} />
      <circle cx="20" cy="10" r="2.2" fill="#d4a5a5" style={active ? { animation: "node-pulse 0.9s 0.15s ease-in-out infinite" } : undefined} />
      <circle cx="7" cy="18" r="2.2" fill="#9aa8c7" style={active ? { animation: "node-pulse 0.9s 0.3s ease-in-out infinite" } : undefined} />
    </svg>
  );
}

function BrowserMark({ active }: { active: boolean }) {
  return (
    <div className={cn("h-7 w-8 overflow-hidden rounded-[5px] border border-white/20", active && "border-gold/40")}>
      <div className="flex h-2 items-center gap-0.5 bg-white/10 px-1">
        <span className="h-1 w-1 rounded-full bg-blush" />
        <span className="h-1 w-1 rounded-full bg-gold" />
        <span className="h-1 w-1 rounded-full bg-peri" />
      </div>
      <div className="p-1">
        <div className={cn("h-1 rounded-full bg-white/15", active && "bg-gold/40")} />
        <div className="mt-1 h-1 w-2/3 rounded-full bg-white/10" />
      </div>
    </div>
  );
}

function CompileMark({ active }: { active: boolean }) {
  return (
    <span className={cn("font-mono text-xs text-gold", active && "tracking-wider")}>C</span>
  );
}

function LayersMark({ active }: { active: boolean }) {
  return (
    <div className="relative h-6 w-6">
      <span className={cn("absolute inset-x-1 top-1 h-3 rounded-[4px] border border-gold/50", active && "translate-y-[-2px]")} />
      <span className="absolute inset-x-0.5 top-2.5 h-3 rounded-[4px] border border-blush/50" />
      <span className={cn("absolute inset-x-0 top-4 h-3 rounded-[4px] border border-peri/50", active && "translate-y-[2px]")} />
    </div>
  );
}
