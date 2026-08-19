import { about, education } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="border-y border-border-subtle bg-surface-alt py-20 sm:py-24">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="Digital-first problem solver with business and technical awareness."
          />
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal delay={0.1} className="space-y-5 text-base leading-relaxed text-muted">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}

            <div className="!mt-8 rounded-2xl border border-border-subtle bg-surface p-6">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-accent">
                Education
              </h3>
              <div className="mt-4 space-y-4">
                {education.map((ed) => (
                  <div key={ed.school} className="flex items-baseline justify-between gap-4 text-sm">
                    <div>
                      <p className="font-medium text-foreground/90">{ed.degree}</p>
                      <p className="text-muted">{ed.school}</p>
                    </div>
                    <span className="shrink-0 text-muted">{ed.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="rounded-2xl border border-border-subtle bg-surface p-8">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-accent">
                Core Strengths
              </h3>
              <ul className="mt-5 space-y-3 text-sm text-foreground/90">
                {about.strengths.map((s) => (
                  <li key={s} className="flex gap-3">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
