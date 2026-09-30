"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";
import StackLogo from "./StackLogo";

// Mobile (1 column): alternate by index. sm+ (2 columns): checkerboard.
// Full class names are written out so Tailwind can see them.
function accentClass(index: number) {
  const mobile = index % 2 === 0 ? "bg-blue/40" : "bg-lavender/45";
  const desktop =
    (index + Math.floor(index / 2)) % 2 === 0 ? "sm:bg-blue/40" : "sm:bg-lavender/45";
  return `${mobile} ${desktop}`;
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
      fill="none"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 44, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.25 }}
      transition={{ duration: 0.6, delay: (index % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className="group relative"
    >
      <Link href={`/projects/${project.slug}`} className="block" aria-label={`Open ${project.title}`}>
        <div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl">
          <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-ink/25 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          {project.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            />
          ) : (
            <div className="h-full w-full bg-ink/5" />
          )}
        </div>

        <div
          className={`relative -mt-4 rounded-b-2xl rounded-tr-2xl px-6 pb-6 pt-8 shadow-[0_10px_24px_rgba(40,50,74,0.06)] transition-shadow duration-300 group-hover:shadow-[0_20px_40px_rgba(40,50,74,0.16)] ${accentClass(index)}`}
        >
          <div className="flex items-center gap-2">
            <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-ink/45">
              {project.tags[0]}
            </span>
          </div>
          <h3 className="mt-1 font-serif text-2xl text-ink sm:text-3xl">{project.title}</h3>
          <div className="mt-3 flex items-center gap-3">
            {project.stack.map((item) => (
              <StackLogo key={item} name={item} />
            ))}
          </div>
          <p className="mt-3 font-sans text-sm leading-relaxed text-ink/70">{project.description}</p>

          <div className="mt-4 flex items-center justify-between font-sans text-xs text-ink/50">
            <span>{project.year}</span>
            <span className="font-semibold text-ink/70">{project.role}</span>
          </div>

          <span className="group/link mt-4 inline-flex w-full items-center gap-1.5 border-t border-ink/10 pt-4 font-sans text-xs font-semibold uppercase tracking-wide text-ink/70 transition-colors group-hover:text-ink">
            View Project
            <ArrowIcon />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
