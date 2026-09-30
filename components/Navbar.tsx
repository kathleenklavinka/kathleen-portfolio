"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#work", label: "Work" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-5 z-50 flex justify-center px-6"
    >
      <nav
        className={`glow-ring flex items-center gap-1 rounded-full border backdrop-blur-2xl backdrop-saturate-150 transition-all duration-500 ${
          scrolled
            ? "border-white/60 bg-white/50 px-2 py-2 shadow-[0_8px_32px_rgba(38,51,47,0.22)]"
            : "border-white/40 bg-white/30 px-2 py-2 shadow-[0_4px_24px_rgba(38,51,47,0.12)]"
        }`}
      >
        <Link
          href="/"
          className="mr-2 rounded-full bg-gradient-to-br from-navy to-periwinkle px-4 py-2 font-serif text-sm text-shell"
        >
          K.
        </Link>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group relative rounded-full px-4 py-2 font-sans text-sm text-ink transition-colors duration-300 hover:text-navy"
          >
            {link.label}
            <span className="absolute inset-x-4 -bottom-0.5 h-px origin-left scale-x-0 bg-navy transition-transform duration-300 group-hover:scale-x-100" />
          </Link>
        ))}
        <Link
          href="/#contact"
          className="ml-1 rounded-full border border-navy/25 px-4 py-2 font-sans text-sm text-navy transition-colors duration-300 hover:bg-navy hover:text-shell"
        >
          Resume
        </Link>
      </nav>
    </motion.header>
  );
}
