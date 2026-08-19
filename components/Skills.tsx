import { skills } from "@/lib/data";
import { getSkillIcon } from "@/lib/icons";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="border-y border-border-subtle bg-surface-alt py-20 sm:py-24">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="Strong technical fundamentals combined with fintech, support, and digital business knowledge."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {skills.map((group, i) => (
            <Reveal key={group.group} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-border-subtle bg-surface p-6">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-accent">
                  {group.group}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => {
                    const Icon = getSkillIcon(item);
                    return (
                      <span
                        key={item}
                        className="inline-flex items-center gap-2 rounded-md border border-border-subtle px-3 py-1.5 text-sm text-foreground/90"
                      >
                        {Icon && <Icon size={13} className="text-accent" />}
                        {item}
                      </span>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
