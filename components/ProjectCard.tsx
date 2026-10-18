"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";
import StackLogo from "./StackLogo";

function isLavender(index: number, desktop: boolean) {
  return desktop
    ? (index + Math.floor(index / 2)) % 2 !== 0
    : index % 2 !== 0;
}

function accentClass(index: number) {
  const mobile = isLavender(index, false) ? "bg-lavender/45" : "bg-blue/40";
  const desktop = isLavender(index, true) ? "sm:bg-lavender/45" : "sm:bg-blue/40";
  return `${mobile} ${desktop}`;
}

function buttonClass(index: number) {
  const mobile = isLavender(index, false)
    ? "bg-[#5b4a85] text-shell"
    : "bg-navy text-shell";
  const desktop = isLavender(index, true)
    ? "sm:bg-[#5b4a85] sm:text-shell"
    : "sm:bg-navy sm:text-shell";
  return `${mobile} ${desktop} group-hover:bg-ink sm:group-hover:bg-ink`;
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
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
      className="group relative h-full"
    >
      <Link
        href={`/projects/${project.slug}`}
        className="flex h-full flex-col"
        aria-label={`Open ${project.title}`}
      >
        <div className="relative aspect-[4/3] shrink-0 overflow-hidden rounded-t-2xl">
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
          className={`relative -mt-4 flex flex-1 flex-col rounded-b-2xl rounded-tr-2xl px-6 pb-6 pt-8 shadow-[0_10px_24px_rgba(40,50,74,0.06)] transition-shadow duration-300 group-hover:shadow-[0_20px_40px_rgba(40,50,74,0.16)] ${accentClass(index)}`}
        >
          <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-ink/45">
            {project.tags[0]}
          </span>
          <h3 className="mt-1 font-serif text-2xl text-ink sm:text-3xl">{project.title}</h3>
          <div className="mt-3 flex items-center gap-3">
            {project.stack.map((item) => (
              <StackLogo key={item} name={item} />
            ))}
          </div>
          <p className="mt-3 font-sans text-sm leading-relaxed text-ink/70">{project.description}</p>

          <div className="mt-auto flex items-center justify-between pt-4 font-sans text-xs text-ink/50">
            <span>{project.year}</span>
            <span className="font-semibold text-ink/70">{project.role}</span>
          </div>

          <div className="mt-4 border-t border-ink/10 pt-4">
            <span
              className={`group/btn inline-flex items-center gap-1.5 rounded-full px-4 py-2 font-sans text-xs font-semibold uppercase tracking-wide transition-colors ${buttonClass(index)}`}
            >
              Details
              <ArrowIcon />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}