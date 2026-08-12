import { motion, useReducedMotion } from "framer-motion";
import { learningNow } from "../data/skills";
import { SectionHeading } from "./SectionHeading";

export function CurrentlyLearning() {
  const reduce = useReducedMotion();

  return (
    <section className="relative z-10 mx-auto max-w-6xl px-5 py-24 md:px-8">
      <SectionHeading
        eyebrow="Kitchen"
        title="Currently cooking... 👩‍💻"
        subtitle="A playful look at what's on the stove — not a progress report, just the menu."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {learningNow.map((item, i) => (
          <motion.article
            key={item.name}
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="glass rounded-[1.4rem] p-5"
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-base font-medium text-cream">{item.name}</h3>
              <span className="rounded-full border border-gold/20 bg-gold/10 px-2 py-0.5 font-mono text-[10px] text-gold">
                {item.status}
              </span>
            </div>
            <p className="text-sm text-muted">{item.note}</p>
            <div className="mt-4 flex items-end gap-1">
              {[0, 1, 2, 3, 4].map((bar) => (
                <span
                  key={bar}
                  className="w-1.5 rounded-full bg-gold/70"
                  style={{
                    height: 6 + ((bar * 5 + i * 3) % 16),
                    animation: reduce ? undefined : `cook 1.4s ${bar * 0.12 + i * 0.05}s ease-in-out infinite`,
                    opacity: 0.35 + bar * 0.12,
                  }}
                />
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
