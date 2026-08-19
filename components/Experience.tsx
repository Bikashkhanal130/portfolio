import { experience } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="border-y border-border-subtle bg-surface-alt py-20 sm:py-24">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="Experience across fintech operations, digital support, and product development."
          />
        </Reveal>

        <div className="relative mt-14 space-y-12 border-l-2 border-border-subtle pl-8 sm:pl-10">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.1} className="relative">
              <span className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-2 border-accent bg-background sm:-left-[49px]" />

              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h3 className="text-lg font-semibold">{job.company}</h3>
                  <p className="text-sm text-accent">{job.role}</p>
                </div>
                <span className="rounded-full border border-border-subtle px-3 py-1 text-xs text-muted">
                  {job.time}
                </span>
              </div>

              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
