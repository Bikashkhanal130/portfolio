"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projectCategories, projects } from "@/lib/data";
import { getStackIcon } from "@/lib/icons";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Projects() {
  const [category, setCategory] = useState<(typeof projectCategories)[number]>("All");

  const visible =
    category === "All" ? projects : projects.filter((p) => p.category === category);

  return (
    <section id="projects" className="py-20 sm:py-24">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            title="Featured work across commerce, systems, and digital product development."
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-8 flex flex-wrap gap-2">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                category === cat
                  ? "border-accent bg-accent-soft text-accent"
                  : "border-border-subtle text-muted hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        <motion.div
          layout
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {visible.map((project, i) => (
            <motion.article
              layout
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="relative flex flex-col rounded-2xl border border-border-subtle bg-surface p-6 transition-colors hover:border-accent/50"
            >
              {project.featured && (
                <span className="absolute right-5 top-5 rounded-full bg-accent-soft px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-accent">
                  Featured
                </span>
              )}

              <span className="inline-block w-fit rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
                {project.tag}
              </span>
              <h3 className="mt-4 text-base font-semibold">{project.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => {
                  const Icon = getStackIcon(tech);
                  return (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1.5 rounded-md border border-border-subtle px-2 py-1 text-xs text-muted"
                    >
                      {Icon && <Icon size={12} />}
                      {tech}
                    </span>
                  );
                })}
              </div>

              <div className="mt-5 flex gap-4 text-sm font-medium">
                <a
                  href={project.codeHref}
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent hover:underline"
                >
                  Code
                </a>
                {project.liveHref && (
                  <a
                    href={project.liveHref}
                    target="_blank"
                    rel="noreferrer"
                    className="text-accent hover:underline"
                  >
                    Live
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
