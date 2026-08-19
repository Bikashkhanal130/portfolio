"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/data";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector<HTMLElement>(l.href))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled
          ? "border-border-subtle bg-background/85 backdrop-blur"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <a href="#top" className="text-lg font-semibold tracking-tight">
          Bikash <span className="text-accent">Khanal</span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm text-muted">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative py-1 transition-colors hover:text-foreground ${
                active === link.href ? "text-foreground" : ""
              }`}
            >
              {link.label}
              {active === link.href && (
                <span className="absolute -bottom-[1px] left-0 h-[2px] w-full rounded-full bg-accent" />
              )}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href={profile.cvFile}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-[#06140d] hover:opacity-90 transition-opacity"
          >
            Download CV
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border-subtle text-foreground"
        >
          <span className="sr-only">Menu</span>
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border-subtle bg-surface">
          <div className="container flex flex-col gap-4 py-5 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-muted hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-4 pt-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="text-muted hover:text-foreground transition-colors"
              >
                GitHub
              </a>
              <a
                href={profile.cvFile}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-accent px-4 py-2 font-medium text-[#06140d]"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
