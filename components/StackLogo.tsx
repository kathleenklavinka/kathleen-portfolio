import {
  siTypescript,
  siReact,
  siNodedotjs,
  siPython,
  siFigma,
  siNextdotjs,
  siPrisma,
  siPostgresql,
  siFlutter,
  siDart,
  type SimpleIcon,
} from "simple-icons";

const icons: Record<string, SimpleIcon> = {
  TS: siTypescript,
  React: siReact,
  Next: siNextdotjs,
  Node: siNodedotjs,
  Py: siPython,
  Figma: siFigma,
  Prisma: siPrisma,
  Postgres: siPostgresql,
  Flutter: siFlutter,
  Dart: siDart,
};

export default function StackLogo({ name }: { name: string }) {
  const icon = icons[name];
  if (!icon) return null;

  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label={icon.title}
      className="h-5 w-5"
      fill={`#${icon.hex}`}
    >
      <title>{icon.title}</title>
      <path d={icon.path} />
    </svg>
  );
}
