"use client";

import { useEffect, useRef, useState } from "react";

/**
 * The page header. On the home page it starts on the yellow hero field and switches to
 * the regular page colours once the hero has scrolled out from under it.
 */
export default function HeaderShell({ overHero, children }: { overHero: boolean; children: React.ReactNode }) {
  const ref = useRef<HTMLElement>(null);
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    if (!overHero) return;
    const hero = document.getElementById("hero-field");
    const header = ref.current;
    if (!hero || !header) return;
    const update = () => setPastHero(hero.getBoundingClientRect().bottom <= header.offsetHeight);
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [overHero]);

  return (
    <header ref={ref} className="site-header" data-tone={overHero && !pastHero ? "marker" : undefined}>
      {children}
    </header>
  );
}
