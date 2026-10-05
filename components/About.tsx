"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

function TiltPhoto() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: 4 }}
      whileInView={{ opacity: 1, y: 0, rotate: -2 }}
      viewport={{ once: false, amount: 0.3 }}
      whileHover={{ rotate: 0, y: -8 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="group relative mx-auto w-56 shrink-0 sm:w-64 md:mx-0 md:w-72 lg:-left-8 lg:w-80 xl:-left-10"
    >
      <div
        aria-hidden
        className="absolute inset-0 translate-x-3 translate-y-3 rotate-3 rounded-sm bg-lavender/80 transition-transform duration-500 group-hover:translate-x-5 group-hover:translate-y-5 group-hover:rotate-6"
      />
      <div
        aria-hidden
        className="absolute inset-0 -translate-x-2 translate-y-2 -rotate-3 rounded-sm bg-blue/70 transition-transform duration-500 group-hover:-translate-x-4 group-hover:-rotate-6"
      />

      {/* tape */}
      <span className="tape absolute -top-3 left-1/2 z-20 -translate-x-1/2 rotate-2" />

      {/* polaroid */}
      <div className="relative z-10 rounded-sm bg-shell p-3 pb-12 shadow-[0_20px_40px_rgba(0,0,0,0.35)] transition-shadow duration-500 group-hover:shadow-[0_0_45px_rgba(144,177,207,0.55)]">
        <div className="aspect-[4/5] w-full overflow-hidden bg-mist">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/me.png"
            alt="Kathleen Klavinka Kurniawan"
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-navy px-6 pb-32 pt-24 text-shell sm:pb-36">
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

      <div className="relative mx-auto grid max-w-content items-center gap-10 md:grid-cols-[auto_1fr] md:gap-14">
        <TiltPhoto />

        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{ duration: 0.5 }}
            className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.25em] text-shell/50"
          >
            About Me
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-4xl italic sm:text-5xl"
          >
            Hi, I&apos;m Kathleen.
          </motion.h2>
          <span className="accent-rule mt-4" />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 space-y-4 font-sans text-sm leading-relaxed text-shell/75 sm:text-base"
          >
            <p>
              I&apos;m an Informatics student based in Jakarta, working across
              machine learning, front-end development, and visual design. I
              like taking an idea from raw data or a rough sketch all the way
              to something that actually works.
            </p>
            <p>
              On the front-end side, I build responsive interfaces with{" "}
              <span className="text-shell">TypeScript, Next.js, and React.js</span>,
              from coursework to team products like Inventix. On the machine
              learning side, I work in{" "}
              <span className="text-shell">Python</span> with{" "}
              <span className="text-shell">Scikit-learn and TensorFlow/Keras</span>,
              moving from data analysis to training a working model.
            </p>
            <p>
              I also design with the Adobe suite (
              <span className="text-shell">
                Photoshop, Illustrator, and After Effects
              </span>
              ) for feed design, motion graphics, and visual assets, which
              keeps everything I build usable, not just functional.
            </p>
          </motion.div>
        </div>
      </div>

      <div
        aria-hidden
        className="fade-to-shell pointer-events-none absolute inset-x-0 bottom-0 h-40 sm:h-48"
      />
    </section>
  );
}