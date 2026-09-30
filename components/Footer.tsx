"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const socials = [
  { label: "GitHub", href: "https://github.com/yourusername" },
  { label: "LinkedIn", href: "https://linkedin.com/in/yourusername" },
];

function useJakartaClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Jakarta",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
    const tick = () => setTime(formatter.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return time;
}

export default function Footer() {
  const time = useJakartaClock();

  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-navy px-6 pb-20 pt-32 text-shell sm:pb-28 sm:pt-40"
    >
      <div
        aria-hidden
        className="fade-from-shell pointer-events-none absolute inset-x-0 top-0 h-56 sm:h-72"
      />
      <div
        aria-hidden
        className="blob-a animate-blob pointer-events-none absolute -left-16 top-16 h-72 w-72 rounded-full opacity-30 blur-[100px]"
      />
      <div
        aria-hidden
        className="blob-d animate-blob-alt pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full opacity-25 blur-[100px]"
      />
      <div
        aria-hidden
        className="blob-g animate-blob-slow pointer-events-none absolute left-1/3 top-1/2 h-64 w-64 rounded-full opacity-20 blur-[110px]"
      />

      <div className="relative mx-auto flex max-w-content flex-col gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-lg text-center"
        >
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-shell/50">
            Have a project in mind?
          </p>
          <h2 className="mt-3 font-serif text-5xl italic leading-tight sm:text-6xl lg:text-7xl">
            Let&apos;s work{" "}
            <span className="bg-gradient-to-r from-shell via-mist to-blue bg-clip-text text-transparent">
              together
            </span>
            !
          </h2>
          <p className="mt-4 font-sans text-sm text-shell/60 sm:text-base">
            Open to internships, collabs, and interesting problems worth
            solving.
          </p>
          <p className="mt-6 font-sans text-xs text-shell/50">
            My local time:{" "}
            <span className="tabular-nums font-semibold text-shell/85">
              {time || "—"}
            </span>{" "}
            GMT+7
          </p>

          <div className="my-8 h-px w-full bg-gradient-to-r from-shell/20 via-shell/5 to-transparent" />

          <a
            href="mailto:hello@example.com"
            className="glass glow-ring inline-flex rounded-full px-6 py-3 font-sans text-sm text-shell/90 transition-colors hover:bg-shell/15 hover:text-shell"
          >
            hello@example.com
          </a>
        </motion.div>

        <div className="flex flex-col-reverse items-center gap-6 border-t border-shell/10 pt-8 sm:flex-row sm:justify-between">
          <p className="font-sans text-xs text-shell/50">
            {new Date().getFullYear()} © Kathleen Klavinka Kurniawan
          </p>
          <div className="flex items-center gap-6">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="font-sans text-xs font-semibold uppercase tracking-wide text-shell/80 transition-colors hover:text-shell"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
