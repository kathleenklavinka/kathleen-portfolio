import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "All Projects | Kathleen Klavinka Kurniawan",
  description: "Every project by Kathleen Klavinka Kurniawan.",
};

export default function AllProjects() {
  return (
    <main className="relative z-10 min-h-screen overflow-x-hidden bg-shell">
      <Navbar />
      <section className="px-6 pb-24 pt-36">
        <div className="mx-auto max-w-content">
          <Link
            href="/#work"
            className="mb-8 inline-flex items-center gap-1.5 font-sans text-xs font-semibold uppercase tracking-wide text-navy/70 transition-colors hover:text-navy"
          >
            <span aria-hidden>←</span> Back
          </Link>
          <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.25em] text-navy/60">
            Archive
          </p>
          <h1 className="font-serif text-4xl text-ink sm:text-6xl">
            All <span className="italic text-navy">Projects</span>
          </h1>
          <span className="accent-rule mb-16 mt-4" />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2">
            {projects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
