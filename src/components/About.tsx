import { motion, useReducedMotion } from "framer-motion";
import { site } from "../data/site";
import { SectionHeading } from "./SectionHeading";

export function About() {
  const reduce = useReducedMotion();

  return (
    <section id="about" className="relative z-10 mx-auto max-w-6xl px-5 py-24 md:px-8">
      <SectionHeading
        eyebrow="About"
        title="A little about me"
        subtitle="Serious about the craft. Soft around the edges."
      />

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        className="glass relative overflow-hidden rounded-[2rem] p-6 md:p-10"
      >
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold/10 blur-3xl" />
        <div className="grid items-center gap-10 md:grid-cols-[1.4fr_0.8fr]">
          <div>
            <p className="text-[15px] leading-relaxed text-cream/80 md:text-base">
              {site.about}
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-cream/70">
              Right now I&apos;m deepening my fundamentals and collecting the kind of
              practice that only comes from building, breaking, and building again.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {site.interests.map((item, i) => (
                <motion.li
                  key={item}
                  initial={reduce ? false : { opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/4 px-4 py-3 text-sm text-cream/85"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>

          <DeveloperDoodle />
        </div>
      </motion.div>
    </section>
  );
}

function DeveloperDoodle() {
  const reduce = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-[260px]">
      <motion.div
        animate={reduce ? undefined : { y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative rounded-[1.6rem] border border-white/10 bg-ink-2/80 p-5"
      >
        <div className="mb-3 flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-blush/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-gold/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-peri/70" />
        </div>
        <div className="space-y-2 font-mono text-[11px] leading-relaxed text-gold-soft/90">
          <p>
            <span className="text-peri">class</span> Sandhiya {"{"}
          </p>
          <p className="pl-3">
            <span className="text-blush">mood</span> = <span className="text-cream">&quot;curious&quot;</span>;
          </p>
          <p className="pl-3">
            <span className="text-blush">fuel</span> = <span className="text-cream">&quot;coffee&quot;</span>;
          </p>
          <p className="pl-3">
            <span className="text-peri">learn</span>() {"{"}
          </p>
          <p className="pl-6 text-muted">return keepGoing;</p>
          <p className="pl-3">{"}"}</p>
          <p>{"}"}</p>
        </div>
        <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/8">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-gold to-blush"
            animate={reduce ? { width: "62%" } : { width: ["28%", "72%", "48%", "68%"] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <p className="mt-2 font-mono text-[10px] text-muted">compiling personality...</p>
      </motion.div>
    </div>
  );
}
