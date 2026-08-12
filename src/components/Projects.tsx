import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { projectFilters, projects, type ProjectFilter } from "../data/projects";
import { site } from "../data/site";
import { cn } from "../lib/cn";
import { MagneticButton } from "./MagneticButton";
import { ProjectCard } from "./ProjectCard";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  const [filter, setFilter] = useState<ProjectFilter>("All");
  const reduce = useReducedMotion();

  const visible = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <section id="projects" className="relative z-10 mx-auto max-w-6xl px-5 py-24 md:px-8">
      <SectionHeading
        eyebrow="Projects"
        title="Things I've been making"
        subtitle="A living shelf. New work gets added here as it ships — no filler, no invented case studies."
      />

      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {projectFilters.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setFilter(item)}
            className={cn(
              "rounded-full px-4 py-1.5 text-sm transition",
              filter === item
                ? "bg-gold text-ink"
                : "border border-white/10 bg-white/4 text-muted hover:text-cream",
            )}
          >
            {item}
          </button>
        ))}
      </div>

      {visible.length > 0 ? (
        <motion.div layout className="grid gap-5 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <EmptyProjects filter={filter} />
      )}
    </section>
  );
}

function EmptyProjects({ filter }: { filter: ProjectFilter }) {
  return (
    <div className="glass mx-auto max-w-xl rounded-[1.8rem] px-6 py-12 text-center">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-2xl">
        🧪
      </div>
      <h3 className="font-display text-2xl italic text-cream">
        {filter === "All" ? "The lab is warming up" : `No ${filter} projects yet`}
      </h3>
      <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-muted">
        {filter === "All"
          ? "First projects will land here soon. Until then, the honest version: I'm learning in public and building the shelf as I go."
          : "Nothing in this filter yet — try All, or come back after the next experiment."}
      </p>
      <div className="mt-6 flex justify-center">
        <MagneticButton href={site.github} variant="soft" external>
          Peek at GitHub instead
        </MagneticButton>
      </div>
    </div>
  );
}
