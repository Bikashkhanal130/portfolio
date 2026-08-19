"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { heroStats, profile, roles } from "@/lib/data";
import CountUp from "./CountUp";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="top" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(var(--border-subtle) 1px, transparent 1px), linear-gradient(90deg, var(--border-subtle) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute -top-40 right-[-10%] h-96 w-96 rounded-full bg-accent/20 blur-[120px]"
        animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute top-40 left-[-10%] h-80 w-80 rounded-full bg-accent-2/20 blur-[120px]"
        animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.1, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        aria-hidden
      />

      <div className="container relative grid gap-14 py-20 md:grid-cols-[1.15fr_0.85fr] md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-soft px-4 py-1.5 text-xs font-medium text-accent">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Available for development, internships &amp; junior tech roles
          </div>

          <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Building secure digital experiences for fintech, commerce, and
            modern businesses.
          </h1>

          <div className="mt-4 flex h-8 items-center text-lg font-medium text-muted sm:text-xl">
            <span className="mr-2">I&apos;m a</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[roleIndex]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="text-accent"
              >
                {roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
            I&apos;m {profile.name}, a digital payments and technical support
            professional with hands-on experience in payment operations,
            banking systems, transaction support, and full-stack development.
            I turn business needs into reliable digital solutions.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-[#06140d] hover:opacity-90 transition-opacity"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-border-subtle px-6 py-3 text-sm font-medium text-foreground hover:border-accent hover:text-accent transition-colors"
            >
              Let&apos;s Connect
            </a>
          </div>

          <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {heroStats.map((stat, i) => (
              <motion.li
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              >
                <p className="text-2xl font-semibold text-accent">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-1 text-sm text-muted">{stat.label}</p>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <div className="rounded-2xl border border-border-subtle bg-surface p-8 shadow-2xl shadow-black/40">
            <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-accent/50 shadow-lg shadow-accent/10">
              <Image
                src={profile.photo}
                alt={profile.name}
                fill
                sizes="80px"
                className="object-cover"
                priority
              />
            </div>

            <p className="mt-6 text-xs font-medium uppercase tracking-widest text-muted">
              Profile Snapshot
            </p>
            <ul className="mt-4 space-y-3 text-sm text-foreground/90">
              <li>Based in {profile.location}</li>
              <li>Payment systems &amp; technical support specialist</li>
              <li>Full-stack developer for digital commerce &amp; business tools</li>
              <li>Focused on secure transactions, reliability, and UX</li>
            </ul>

            <div className="mt-8 rounded-xl border border-accent/30 bg-accent-soft px-4 py-3 text-sm text-accent">
              Available for web &amp; full-stack development, internships,
              junior tech roles, and fintech opportunities
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
