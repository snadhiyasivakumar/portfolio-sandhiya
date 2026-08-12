import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "../data/site";
import { GitHubIcon } from "./Icons";
import { MagneticButton } from "./MagneticButton";
import { SectionHeading } from "./SectionHeading";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  updated_at: string;
  fork: boolean;
};

type GhState =
  | { status: "loading" }
  | { status: "ready"; repos: Repo[] }
  | { status: "error" };

export function GitHubSection() {
  const [state, setState] = useState<GhState>({ status: "loading" });
  const reduce = useReducedMotion();

  useEffect(() => {
    const controller = new AbortController();

    fetch(`https://api.github.com/users/${site.githubUser}/repos?sort=updated&per_page=6`, {
      signal: controller.signal,
    })
      .then((res) => {
        if (!res.ok) throw new Error("GitHub unavailable");
        return res.json() as Promise<Repo[]>;
      })
      .then((repos) => {
        setState({
          status: "ready",
          repos: repos.filter((r) => !r.fork).slice(0, 4),
        });
      })
      .catch(() => {
        if (!controller.signal.aborted) setState({ status: "error" });
      });

    return () => controller.abort();
  }, []);

  return (
    <section className="relative z-10 mx-auto max-w-6xl px-5 py-24 md:px-8">
      <SectionHeading
        eyebrow="GitHub"
        title="Building one repository at a time."
        subtitle="Live from GitHub when the network cooperates. If it doesn't, the door still works."
      />

      <div className="glass mx-auto max-w-3xl rounded-[1.8rem] p-6 md:p-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
              <GitHubIcon size={20} />
            </span>
            <div>
              <p className="font-medium text-cream">@{site.githubUser}</p>
              <p className="font-mono text-xs text-muted">public work only</p>
            </div>
          </div>
          <MagneticButton href={site.github} variant="primary" external>
            Visit GitHub →
          </MagneticButton>
        </div>

        <div className="mt-6">
          {state.status === "loading" && (
            <p className="font-mono text-xs text-muted">Asking GitHub nicely...</p>
          )}

          {state.status === "error" && (
            <p className="text-sm text-muted">
              Couldn&apos;t load repositories right now. The profile link still works.
            </p>
          )}

          {state.status === "ready" && state.repos.length === 0 && (
            <p className="text-sm text-muted">No public repositories to list yet.</p>
          )}

          {state.status === "ready" && state.repos.length > 0 && (
            <ul className="grid gap-3 sm:grid-cols-2">
              {state.repos.map((repo, i) => (
                <motion.li
                  key={repo.id}
                  initial={reduce ? false : { opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="block rounded-2xl border border-white/8 bg-white/3 p-4 transition hover:border-gold/30 hover:bg-white/6"
                  >
                    <p className="font-medium text-cream">{repo.name}</p>
                    <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted">
                      {repo.description ?? "No description yet."}
                    </p>
                    {repo.language && (
                      <p className="mt-3 font-mono text-[10px] uppercase tracking-wider text-gold">
                        {repo.language}
                      </p>
                    )}
                  </a>
                </motion.li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
