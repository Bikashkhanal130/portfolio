"use client";

import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
} from "react-icons/fa";
import { profile } from "@/lib/data";
import Reveal from "./Reveal";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      setErrorMessage(
        "The contact form isn't configured yet. Add your EmailJS keys to .env.local (see README)."
      );
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      await emailjs.sendForm(
        serviceId,
        templateId,
        event.currentTarget,
        publicKey
      );
      setStatus("success");
      event.currentTarget.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong sending your message. Please try again or email me directly.");
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Contact
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            Open to fintech, banking systems, technical support, and
            full-stack opportunities.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
            Send a message directly using the form, or reach out through any
            of the channels below.
          </p>

          <div className="mt-8 space-y-4 text-sm">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 text-foreground/90 hover:text-accent transition-colors"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-soft text-accent">
                <FaEnvelope size={14} />
              </span>
              {profile.email}
            </a>
            <a
              href={profile.phoneHref}
              className="flex items-center gap-3 text-foreground/90 hover:text-accent transition-colors"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-soft text-accent">
                <FaPhoneAlt size={14} />
              </span>
              {profile.phone}
            </a>
            <div className="flex items-center gap-3 text-muted">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-soft text-accent">
                <FaMapMarkerAlt size={14} />
              </span>
              {profile.address}
            </div>
            <div className="flex gap-3 pt-2">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border-subtle text-foreground/90 hover:border-accent hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={15} />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border-subtle text-foreground/90 hover:border-accent hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={15} />
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-border-subtle bg-surface p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label htmlFor="name" className="text-sm font-medium text-foreground/90">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-2 w-full rounded-lg border border-border-subtle bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-accent"
                  placeholder="Your name"
                />
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="email" className="text-sm font-medium text-foreground/90">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-2 w-full rounded-lg border border-border-subtle bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-accent"
                  placeholder="you@example.com"
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="subject" className="text-sm font-medium text-foreground/90">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  className="mt-2 w-full rounded-lg border border-border-subtle bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-accent"
                  placeholder="What's this about?"
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground/90">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="mt-2 w-full resize-none rounded-lg border border-border-subtle bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-accent"
                  placeholder="Tell me a bit about the opportunity or what you have in mind..."
                />
              </div>
            </div>

            <motion.button
              type="submit"
              disabled={status === "sending"}
              whileTap={{ scale: 0.97 }}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-[#06140d] transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              <FaPaperPlane size={13} />
              {status === "sending" ? "Sending..." : "Send Message"}
            </motion.button>

            {status === "success" && (
              <motion.p
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-sm text-accent"
              >
                Thanks for reaching out — I&apos;ll get back to you soon.
              </motion.p>
            )}
            {status === "error" && (
              <p className="mt-4 text-sm text-red-400">{errorMessage}</p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
