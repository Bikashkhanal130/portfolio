import { certifications, education } from "@/lib/data";
import { certProviderIconMap } from "@/lib/icons";
import { FaGraduationCap } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 sm:py-24">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Certifications & Education"
            title="Professional learning aligned with IT support, digital marketing, and digital business."
          />
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {certifications.map((cert, i) => {
            const Icon = certProviderIconMap[cert.provider] ?? certProviderIconMap.default;
            return (
              <Reveal key={cert.title} delay={i * 0.08}>
                <div className="flex h-full gap-4 rounded-2xl border border-border-subtle bg-surface p-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold leading-snug">{cert.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.16} className="mt-6">
          <div className="flex h-full gap-4 rounded-2xl border border-dashed border-accent/30 bg-accent-soft/40 p-6">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
              <FaGraduationCap size={20} />
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-snug">
                {education[0].degree} — In Progress
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Currently pursuing at {education[0].school} ({education[0].time}), building a
                formal foundation in computer science alongside hands-on industry experience.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
