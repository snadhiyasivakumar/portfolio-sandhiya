import { motion, useReducedMotion } from "framer-motion";

type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export function SectionHeading({ eyebrow, title, subtitle }: Props) {
  const reduce = useReducedMotion();

  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <motion.p
        initial={reduce ? false : { opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        className="mb-3 font-mono text-[11px] uppercase tracking-[0.28em] text-gold"
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        initial={reduce ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ delay: 0.05 }}
        className="font-display text-3xl font-medium tracking-tight text-cream sm:text-4xl md:text-[2.7rem]"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-sm leading-relaxed text-muted sm:text-base"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
