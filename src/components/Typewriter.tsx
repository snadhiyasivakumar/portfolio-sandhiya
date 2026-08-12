import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

type Props = {
  words: readonly string[];
};

export function Typewriter({ words }: Props) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduce) {
      setText(words[0] ?? "");
      return;
    }

    const current = words[index % words.length];
    const speed = deleting ? 38 : 72;
    const pause = deleting && text === "" ? 280 : !deleting && text === current ? 1400 : speed;

    const timer = window.setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setDeleting(true);
      } else {
        const next = current.slice(0, Math.max(0, text.length - 1));
        setText(next);
        if (next === "") {
          setDeleting(false);
          setIndex((i) => (i + 1) % words.length);
        }
      }
    }, pause);

    return () => window.clearTimeout(timer);
  }, [text, deleting, index, words, reduce]);

  return (
    <span className="inline-flex min-h-[1.4em] items-center font-mono text-sm text-gold-soft sm:text-[15px]">
      <span>{reduce ? words[0] : text}</span>
      <span className="caret" />
    </span>
  );
}
