"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const nameWords = ["Kathleen", "Klavinka"];

const wordVariants = {
  hidden: { opacity: 0, y: 40, rotate: 2 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { duration: 0.7, delay: 0.15 + i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 40, damping: 20 });
  const springY = useSpring(my, { stiffness: 40, damping: 20 });
  const nearX = useTransform(springX, (v) => v * 1);
  const nearY = useTransform(springY, (v) => v * 1);
  const farX = useTransform(springX, (v) => v * -0.6);
  const farY = useTransform(springY, (v) => v * -0.6);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;
    mx.set(relX * 40);
    my.set(relY * 40);
  };

  return (
    <section
      id="top"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden px-6 pb-12 pt-40 sm:pt-48"
    >
      <motion.div style={{ x: nearX, y: nearY }} className="contents">
        <div
          aria-hidden
          className="blob-a animate-blob pointer-events-none absolute -left-24 -top-16 h-[26rem] w-[26rem] rounded-full opacity-60 blur-[110px]"
        />
        <div
          aria-hidden
          className="blob-e animate-blob-alt pointer-events-none absolute bottom-0 right-1/4 h-72 w-72 rounded-full opacity-70 blur-[90px]"
        />
        <div
          aria-hidden
          className="blob-h animate-blob pointer-events-none absolute left-1/2 top-16 h-56 w-56 rounded-full opacity-45 blur-[90px]"
        />
      </motion.div>
      <motion.div style={{ x: farX, y: farY }} className="contents">
        <div
          aria-hidden
          className="blob-c animate-blob pointer-events-none absolute left-1/3 top-40 h-80 w-80 rounded-full opacity-50 blur-[100px]"
        />
        <div
          aria-hidden
          className="blob-d animate-blob-slow pointer-events-none absolute right-10 top-24 h-64 w-64 rounded-full opacity-40 blur-[100px]"
        />
        <div
          aria-hidden
          className="blob-f animate-blob-slow pointer-events-none absolute -bottom-24 left-10 h-72 w-72 rounded-full opacity-45 blur-[110px]"
        />
      </motion.div>
      <div className="relative mx-auto max-w-content">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-sans text-sm tracking-wide text-navy/70"
        >
          Jakarta, Indonesia
        </motion.p>

        <h1 className="mt-4 overflow-hidden font-serif text-7xl leading-[1.05] text-ink sm:text-8xl lg:text-9xl">
          <span className="block">
            {nameWords.map((word, i) => (
              <motion.span
                key={word}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={wordVariants}
                className="mr-4 inline-block"
              >
                {word}
              </motion.span>
            ))}
          </span>
          <motion.span
            custom={2}
            initial="hidden"
            animate="visible"
            variants={wordVariants}
            className="block bg-gradient-to-r from-navy via-periwinkle to-navy bg-[length:200%_auto] bg-clip-text italic text-transparent [animation:shimmer_6s_linear_infinite]"
          >
            Kurniawan.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 max-w-xl font-sans text-base text-ink/70"
        >
          Informatics student building at the intersection of{" "}
          <span className="text-ink">AI</span>,{" "}
          <span className="text-ink">Machine Learning</span>, and{" "}
          <span className="text-ink">Web Development</span>, with a design
          eye that keeps things usable, not just functional.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 font-sans text-sm font-medium text-shell transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(57,81,118,0.3)]"
          >
            See my work
            <svg
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-shell/40 px-6 py-3 font-sans text-sm font-medium text-ink backdrop-blur-sm transition-colors duration-300 hover:border-navy/40 hover:text-navy"
          >
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
