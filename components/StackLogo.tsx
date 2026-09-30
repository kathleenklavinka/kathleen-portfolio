import {
  siTypescript,
  siReact,
  siNodedotjs,
  siPython,
  siFigma,
  siNextdotjs,
  type SimpleIcon,
} from "simple-icons";

// Real brand logos come from the `simple-icons` package (brand-accurate SVG
// paths + official brand colors), so nothing is fetched at runtime.
// To add a tech: import its `siXxx` above and map a short key here.
// Browse names at https://simpleicons.org
const icons: Record<string, SimpleIcon> = {
  TS: siTypescript,
  React: siReact,
  Next: siNextdotjs,
  Node: siNodedotjs,
  Py: siPython,
  Figma: siFigma,
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
