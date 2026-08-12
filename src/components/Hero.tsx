import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { site } from "../data/site";
import { GooeyDecorations } from "./GooeyDecorations";
import { GitHubIcon, LinkedInIcon } from "./Icons";
import { MagneticButton } from "./MagneticButton";
import { ProfileCard } from "./ProfileCard";
import { Typewriter } from "./Typewriter";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center gap-12 px-5 pb-16 pt-28 md:flex-row md:items-center md:gap-10 md:px-8 lg:gap-16"
    >
      <GooeyDecorations />
      <div className="relative z-10 w-full max-w-xl md:flex-1">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-cream/90 backdrop-blur"
        >
          <span aria-hidden>👋</span>
          <span>{site.badge}</span>
        </motion.div>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="font-display text-5xl font-medium leading-[0.95] tracking-tight text-cream sm:text-6xl lg:text-7xl"
        >
          Sandhiya
          <span className="italic text-gold"> S</span>
        </motion.h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-sm text-muted sm:text-base"
        >
          {site.supporting}
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.16 }}
          className="mt-3"
        >
          <Typewriter words={site.roles} />
        </motion.div>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 max-w-md text-[15px] leading-relaxed text-cream/75"
        >
          {site.intro}
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.26 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <MagneticButton href="#projects">
            View My Work
            <ArrowDownRight size={16} />
          </MagneticButton>
          <MagneticButton href={site.github} variant="ghost" external>
            <GitHubIcon size={16} />
            GitHub
          </MagneticButton>
          <MagneticButton href={site.linkedin} variant="ghost" external>
            <LinkedInIcon size={16} />
            LinkedIn
          </MagneticButton>
        </motion.div>
      </div>

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.18, duration: 0.7 }}
        className="relative z-10 w-full md:flex-1"
      >
        <ProfileCard />
      </motion.div>
    </section>
  );
}
