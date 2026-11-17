"use client";

import { useEffect, useState } from "react";

/** Links to the sections of the home page; the one being read is marked. */
export default function SectionNav({ label, links }: { label: string; links: { id: string; label: string }[] }) {
  const [current, setCurrent] = useState<string | null>(null);

  useEffect(() => {
    const sections = links.map((l) => document.getElementById(l.id)).filter((el) => el !== null);
    // A section counts as current while it crosses a line a third of the way down the screen.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setCurrent(entry.target.id);
          else setCurrent((id) => (id === entry.target.id ? null : id));
        }
      },
      { rootMargin: "-34% 0px -65% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [links]);

  return (
    <nav className="site-nav" aria-label={label}>
      {links.map((l) => (
        <a key={l.id} href={`#${l.id}`} aria-current={current === l.id ? "location" : undefined}>
          {l.label}
        </a>
      ))}
    </nav>
  );
}
