"use client";

import { motion } from "framer-motion";

type SkillGroup = {
  title: string;
  description: string;
  bg: string;
  rotate: string;
};

const skillGroups: SkillGroup[] = [
  {
    title: "Front-End Development",
    description:
      "Building responsive, production-ready interfaces with TypeScript, Next.js, and React.js on clean HTML/CSS foundations, from coursework to team products like Inventix.",
    bg: "bg-blue",
    rotate: "-rotate-2",
  },
  {
    title: "Machine Learning & AI",
    description:
      "Comfortable moving from raw data to a working model: Python with Scikit-learn and TensorFlow/Keras for training, plus structured data analysis along the way.",
    bg: "bg-lavender",
    rotate: "rotate-2",
  },
  {
    title: "Design & Visual Tools",
    description:
      "Comfortable across the Adobe suite (Photoshop, Illustrator, and After Effects) for feed design, motion graphics, and visual assets.",
    bg: "bg-mist",
    rotate: "-rotate-1",
  },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-navy px-6 pb-52 pt-24 text-shell sm:pb-64">
      <div
        aria-hidden
        className="blob-f animate-blob pointer-events-none absolute -left-32 top-16 h-96 w-96 rounded-full opacity-30 blur-[100px]"
      />
      <div
        aria-hidden
        className="blob-b animate-blob-alt pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full opacity-30 blur-[100px]"
      />
      <div
        aria-hidden
        className="blob-h animate-blob-slow pointer-events-none absolute left-1/3 bottom-10 h-64 w-64 rounded-full opacity-25 blur-[100px]"
      />
      <div
        aria-hidden
        className="blob-c animate-blob pointer-events-none absolute right-1/4 top-10 h-56 w-56 rounded-full opacity-25 blur-[90px]"
      />
      <div className="relative mx-auto flex max-w-content flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.25em] text-shell/50"
        >
          What I Work With
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-4xl italic sm:text-5xl"
        >
          Hard Skills
        </motion.h2>
        <span className="accent-rule mt-4" />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-2xl font-sans text-sm leading-relaxed text-shell/70 sm:text-base"
        >
          From coursework to team projects, I work across machine learning,
          front-end development, and visual design, pairing technical
          depth with steady collaboration.
        </motion.p>

        <div className="mt-14 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, rotate: 0 }}
              className={`relative w-full rounded-sm p-7 font-sans shadow-[0_14px_28px_rgba(0,0,0,0.25)] transition-transform duration-300 ${group.bg} ${group.rotate}`}
            >
              <span className="tape absolute -top-3 left-1/2 z-10 -translate-x-1/2 rotate-1" />
              <h3 className="font-sans text-base font-bold uppercase tracking-wide text-ink sm:text-lg">
                {group.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-ink/80">
                {group.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div
        aria-hidden
        className="fade-to-shell pointer-events-none absolute inset-x-0 bottom-0 h-56 sm:h-72"
      />
    </section>
  );
}
