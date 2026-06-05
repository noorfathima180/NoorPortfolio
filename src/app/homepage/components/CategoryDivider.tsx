"use client";

import React, { useEffect, useRef } from "react";

export default function CategoryDivider() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const lines = ref.current?.querySelectorAll(".line-expand");
            lines?.forEach((line) => line.classList.add("line-expand"));
            const text = ref.current?.querySelector(".divider-text");
            text?.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.4 }
    );

    if (ref?.current) observer?.observe(ref?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      id="projects"
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "#E3E2DE" }}
    >
      {/* Top border */}
      <div
        className="w-full h-px"
        style={{ backgroundColor: "#D9D9D9" }}
      />

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
        {/* Massive "PROJECTS" text */}
        <h2
          className="font-display divider-text scroll-reveal is-visible"
          style={{
            fontFamily: "Clash Grotesk, Arial Black, sans-serif",
            fontWeight: 700,
            letterSpacing: "-0.04em",
            lineHeight: "0.85",
            fontSize: "clamp(3rem, 12vw, 12rem)",
            color: "#1B0E0D",
          }}
        >
          PROJECTS
        </h2>

        {/* Right: Season + count */}
        <div className="hidden md:flex flex-col items-end gap-1 flex-shrink-0">
          <p
            className="font-mono text-[10px] tracking-[0.2em] uppercase"
            style={{
              color: "rgba(27,14,13,0.35)",
              fontFamily: "JetBrains Mono, monospace",
            }}
          >
            SEASON_04
          </p>
          <p
            className="font-mono text-[10px] tracking-[0.2em] uppercase"
            style={{
              color: "#C72A09",
              fontFamily: "JetBrains Mono, monospace",
            }}
          >
            03 WORKS
          </p>
        </div>
      </div>

      {/* Bottom border */}
      <div
        className="w-full h-px"
        style={{ backgroundColor: "#D9D9D9" }}
      />
    </div>
  );
}