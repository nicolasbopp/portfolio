"use client";

import { useEffect, useRef } from "react";

/**
 * The name in the hero. Each letter reacts to the pointer through the typeface's
 * variable axes: letters near the cursor get lighter and sharper, then settle back.
 * On load a single ripple runs through the name, so touch screens see it move too
 * (skipped when the visitor prefers reduced motion; the pointer response stays, as it only answers their own input).
 */
export default function HeroName({ id, name }: { id: string; name: string }) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const letters = Array.from(root.querySelectorAll<HTMLElement>("[data-letter]"));
    let frame = 0;
    let point: { x: number; y: number } | null = null;

    const apply = () => {
      frame = 0;
      // Reach scales with the letter size, so the effect feels the same on every screen.
      const reach = parseFloat(getComputedStyle(root).fontSize) * 1.15;
      for (const el of letters) {
        let p = 0;
        if (point) {
          const r = el.getBoundingClientRect();
          const d = Math.hypot(point.x - (r.left + r.width / 2), point.y - (r.top + r.height / 2));
          const t = Math.max(0, 1 - d / reach);
          p = t * t * (3 - 2 * t); // smoothstep
        }
        el.style.setProperty("--p", p.toFixed(3));
      }
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(apply);
    };
    const onMove = (e: PointerEvent) => {
      point = { x: e.clientX, y: e.clientY };
      schedule();
    };
    const onLeave = () => {
      point = null;
      schedule();
    };

    // Listen on the whole yellow field so the letters respond before the cursor touches them.
    const field = root.closest<HTMLElement>(".hero-field") ?? root;
    field.addEventListener("pointermove", onMove);
    field.addEventListener("pointerleave", onLeave);
    return () => {
      field.removeEventListener("pointermove", onMove);
      field.removeEventListener("pointerleave", onLeave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  let index = 0;
  return (
    <h1 id={id} ref={ref} className="hero-name" aria-label={name}>
      {name.split(" ").map((word) => (
        <span className="hero-word" key={word} aria-hidden="true">
          {Array.from(word).map((ch) => {
            const i = index++;
            return (
              <span data-letter key={i} style={{ animationDelay: `${180 + i * 55}ms` }}>
                {ch}
              </span>
            );
          })}
        </span>
      ))}
    </h1>
  );
}
