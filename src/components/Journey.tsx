import { motion, useReducedMotion } from "framer-motion";
import { journey } from "../data/journey";
import { SectionHeading } from "./SectionHeading";

export function Journey() {
  const reduce = useReducedMotion();

  return (
    <section id="journey" className="relative z-10 mx-auto max-w-6xl px-5 py-24 md:px-8">
      <SectionHeading
        eyebrow="Journey"
        title="A timeline in progress"
        subtitle="Not a highlight reel of awards — just the path I'm actually on."
      />

      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-[19px] top-3 bottom-3 w-px bg-gradient-to-b from-gold/50 via-white/10 to-transparent md:left-1/2" />

        <ol className="space-y-8">
          {journey.map((item, i) => {
            const left = i % 2 === 0;
            return (
              <motion.li
                key={item.title}
                initial={reduce ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: i * 0.06 }}
                className="relative grid items-start gap-4 md:grid-cols-2"
              >
                <div
                  className={`absolute left-[13px] top-5 h-3.5 w-3.5 rounded-full border-2 border-gold bg-ink md:left-1/2 md:-translate-x-1/2 ${
                    reduce ? "" : "animate-float-y"
                  }`}
                />

                <div className={left ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"}>
                  <article className="glass ml-12 rounded-[1.4rem] p-5 md:ml-0">
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-gold/12 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-gold">
                        {item.tag}
                      </span>
                      <span className="font-mono text-[10px] text-muted">{item.year}</span>
                    </div>
                    <h3 className="font-display text-xl italic text-cream">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{item.detail}</p>
                  </article>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
