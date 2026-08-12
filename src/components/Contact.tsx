import { Mail } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "../data/site";
import { GitHubIcon, LinkedInIcon } from "./Icons";
import { MagneticButton } from "./MagneticButton";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  const reduce = useReducedMotion();

  return (
    <section id="contact" className="relative z-10 mx-auto max-w-6xl px-5 py-24 md:px-8">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something."
        subtitle="Whether it's an internship chat, a project idea, or just a hello — inbox is open."
      />

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass relative mx-auto max-w-2xl overflow-hidden rounded-[2rem] px-6 py-10 text-center md:px-12"
      >
        <div className="pointer-events-none absolute -left-10 top-0 h-32 w-32 rounded-full bg-blush/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-8 bottom-0 h-32 w-32 rounded-full bg-gold/15 blur-3xl" />

        <p className="mx-auto max-w-md text-sm leading-relaxed text-cream/75">
          I&apos;m a second-year CSE student who likes thoughtful conversations about
          software, learning, and making useful things.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <MagneticButton href={`mailto:${site.email}`}>
            <Mail size={16} />
            Email
          </MagneticButton>
          <MagneticButton href={site.linkedin} variant="ghost" external>
            <LinkedInIcon size={16} />
            LinkedIn
          </MagneticButton>
          <MagneticButton href={site.github} variant="ghost" external>
            <GitHubIcon size={16} />
            GitHub
          </MagneticButton>
        </div>

        <p className="mt-8 font-mono text-[11px] text-muted">
          No bugs were harmed in sending this message. 🐛
        </p>
      </motion.div>
    </section>
  );
}
