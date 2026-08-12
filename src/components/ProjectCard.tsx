import { useRef, useState, type MouseEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import type { Project } from "../data/projects";
import { GitHubIcon } from "./Icons";

export function ProjectCard({ project }: { project: Project }) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [spot, setSpot] = useState({ x: 50, y: 30 });
  const [hovered, setHovered] = useState(false);

  const onMove = (e: MouseEvent) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    setTilt({ x: (py - 0.5) * -6, y: (px - 0.5) * 8 });
    setSpot({ x: px * 100, y: py * 100 });
  };

  return (
    <motion.article
      ref={ref}
      layout
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setTilt({ x: 0, y: 0 });
      }}
      animate={{ rotateX: tilt.x, rotateY: tilt.y, y: hovered ? -6 : 0 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      style={{ transformStyle: "preserve-3d" }}
      className="glass group relative overflow-hidden rounded-[1.6rem]"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(420px circle at ${spot.x}% ${spot.y}%, rgba(196,167,125,0.14), transparent 45%)`,
        }}
      />

      <div className="relative aspect-[16/10] overflow-hidden bg-ink-2">
        {project.image ? (
          <img
            src={project.image}
            alt=""
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-ink-3 via-ink-2 to-[#1b1820]">
            <span className="font-display text-4xl italic text-gold/40">
              {project.title.slice(0, 1)}
            </span>
          </div>
        )}
        {project.featured && (
          <span className="absolute left-3 top-3 rounded-full border border-gold/30 bg-ink/60 px-2.5 py-1 font-mono text-[10px] text-gold backdrop-blur">
            featured
          </span>
        )}
      </div>

      <div className="relative p-5">
        <div className="mb-2 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/8 bg-white/4 px-2 py-0.5 font-mono text-[10px] text-muted"
            >
              {tech}
            </span>
          ))}
        </div>
        <h3 className="font-display text-xl italic text-cream">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>

        <div className="mt-4 flex items-center gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-xs text-cream transition hover:border-gold/40 hover:bg-white/5"
            >
              <GitHubIcon size={13} />
              GitHub
            </a>
          )}
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-xs text-cream transition hover:border-gold/40 hover:bg-white/5"
            >
              <ExternalLink size={13} />
              Live
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
