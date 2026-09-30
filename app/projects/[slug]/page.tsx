import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StackLogo from "@/components/StackLogo";
import { accentFor, getProject, projects } from "@/data/projects";

const accentBg: Record<string, string> = {
  blue: "bg-blue/40",
  lavender: "bg-lavender/45",
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProject(params.slug);
  return {
    title: project
      ? `${project.title} | Kathleen Klavinka Kurniawan`
      : "Project | Kathleen Klavinka Kurniawan",
    description: project?.description,
  };
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const accent = accentFor(index);
  const next = projects[(index + 1) % projects.length];

  const meta = [
    { label: "Year", value: project.year },
    { label: "Role", value: project.role },
  ];

  return (
    <main className="relative z-10 min-h-screen overflow-x-hidden bg-shell">
      <Navbar />

      <article className="px-6 pb-24 pt-36">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/projects"
            className="mb-8 inline-flex items-center gap-1.5 font-sans text-xs font-semibold uppercase tracking-wide text-navy/70 transition-colors hover:text-navy"
          >
            <span aria-hidden>←</span> All projects
          </Link>

          <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.25em] text-navy/60">
            {project.tags.join("  ·  ")}
          </p>
          <h1 className="font-serif text-4xl text-ink sm:text-6xl">{project.title}</h1>
          <span className="accent-rule mt-4" />

          <div className="mt-6 flex items-center gap-3">
            {project.stack.map((item) => (
              <StackLogo key={item} name={item} />
            ))}
          </div>

          <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-2xl">
            {project.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
            ) : (
              <div className={`h-full w-full ${accentBg[accent]}`} />
            )}
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-6 border-y border-ink/10 py-6 sm:grid-cols-2">
            {meta.map((m) => (
              <div key={m.label}>
                <dt className="font-sans text-[10px] uppercase tracking-[0.2em] text-ink/45">
                  {m.label}
                </dt>
                <dd className="mt-1 font-sans text-sm font-semibold text-ink/80">{m.value}</dd>
              </div>
            ))}
          </dl>

          <section className="mt-12">
            <h2 className="font-serif text-2xl text-ink sm:text-3xl">
              <span className="italic text-navy">Overview</span>
            </h2>
            {project.overview.split("\n\n").map((para) => (
              <p key={para} className="mt-4 font-sans text-base leading-relaxed text-ink/75">
                {para}
              </p>
            ))}
          </section>

          {project.highlights && project.highlights.length > 0 && (
            <section className="mt-12">
              <h2 className="font-serif text-2xl text-ink sm:text-3xl">
                <span className="italic text-navy">Highlights</span>
              </h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.highlights.map((h) => (
                  <li
                    key={h}
                    className={`rounded-full px-4 py-2 font-sans text-sm text-ink/80 ${accentBg[accent]}`}
                  >
                    {h}
                  </li>
                ))}
              </ul>
            </section>
          )}


          {project.gallery && project.gallery.length > 0 && (
            <section className="mt-12 grid gap-4 sm:grid-cols-2">
              {project.gallery.map((src) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={src} src={src} alt="" className="w-full rounded-2xl object-cover" />
              ))}
            </section>
          )}

          {project.outcome && (
            <section className="mt-12">
              <h2 className="font-serif text-2xl text-ink sm:text-3xl">
                <span className="italic text-navy">Outcome</span>
              </h2>
              <p className="mt-4 font-sans text-base leading-relaxed text-ink/75">{project.outcome}</p>
            </section>
          )}

          <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-ink/10 pt-8">
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-navy px-5 py-2.5 font-sans text-xs font-semibold uppercase tracking-wide text-shell transition-colors hover:bg-ink"
              >
                Visit project ↗
              </a>
            ) : (
              <span />
            )}
            {next.slug !== project.slug && (
              <Link
                href={`/projects/${next.slug}`}
                aria-label={`Next project: ${next.title}`}
                className="font-sans text-xs font-semibold uppercase tracking-wide text-navy/80 transition-colors hover:text-navy"
              >
                Next →
              </Link>
            )}
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
