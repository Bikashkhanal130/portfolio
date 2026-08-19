import { focusAreas } from "@/lib/data";
import { focusIconMap } from "@/lib/icons";
import Reveal from "./Reveal";

export default function FocusAreas() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            What I Do
          </p>
          <h2 className="mt-3 max-w-2xl text-2xl font-semibold tracking-tight sm:text-3xl">
            Four areas where I consistently deliver value.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {focusAreas.map((area, i) => {
            const Icon = focusIconMap[area.icon];
            return (
              <Reveal key={area.title} delay={i * 0.08}>
                <div className="group h-full rounded-2xl border border-border-subtle bg-surface p-6 transition-colors hover:border-accent/50">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent transition-transform group-hover:scale-110">
                    {Icon && <Icon size={20} />}
                  </div>
                  <h3 className="mt-5 text-base font-semibold">{area.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {area.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
