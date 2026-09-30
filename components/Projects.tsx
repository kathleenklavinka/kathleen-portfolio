"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projects, HOME_PROJECT_COUNT } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const shown = projects.slice(0, HOME_PROJECT_COUNT);

  return (
    <section id="work" className="relative overflow-hidden px-6 py-24">
      <div className="relative mx-auto max-w-content">
        <div className="mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{ duration: 0.5 }}
              className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.25em] text-navy/60"
            >
              Selected Work
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-4xl text-ink sm:text-5xl"
            >
              Curated <span className="italic text-navy">Projects</span>
            </motion.h2>
            <span className="accent-rule mt-4" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2">
          {shown.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.8 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 flex justify-center"
        >
            <Link
              href="/projects"
              className="group/more inline-flex shrink-0 items-center gap-1 rounded-full border border-navy/25 px-3.5 py-1.5 font-sans text-xs text-navy transition-colors duration-300 hover:bg-navy hover:text-shell"
            >
              More
              <svg
                viewBox="0 0 24 24"
                className="h-3 w-3 transition-transform duration-300 group-hover/more:translate-x-0.5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
        </motion.div>
      </div>
    </section>
  );
}
