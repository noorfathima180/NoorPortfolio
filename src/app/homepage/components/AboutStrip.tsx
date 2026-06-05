"use client";

import React, { useEffect, useRef } from "react";

const stats = [
  { num: "03", label: "PROJECTS SHIPPED" },
  { num: "MCA", label: "DEGREE IN PROGRESS" },
  { num: "UI DEV", label: "PRIMARY STACK" },
  { num: "2025", label: "SEASON ACTIVE" },
];

export default function AboutStrip() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".scroll-reveal").forEach((el) => {
              el.classList.add("is-visible");
            });
          }
        });
      },
      { threshold: 0.2 }
    );
    if (ref?.current) observer?.observe(ref?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="about"
      className="relative w-full py-20 overflow-hidden"
      style={{ backgroundColor: "#1B0E0D" }}
      aria-label="About NOOR"
    >
      {/* Ambient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(199,42,9,0.05) 0%, transparent 60%)",
        }}
      />
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Top row */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-16">
          <div className="scroll-reveal">
            <p
              className="font-mono text-[10px] tracking-[0.25em] uppercase mb-4"
              style={{
                color: "rgba(227,226,222,0.3)",
                fontFamily: "JetBrains Mono, monospace",
              }}
            >
              — ABOUT
            </p>
            <h2
              className="font-display"
              style={{
                fontFamily: "Clash Grotesk, Arial Black, sans-serif",
                fontWeight: 700,
                letterSpacing: "-0.04em",
                lineHeight: "0.85",
                fontSize: "clamp(2.5rem, 6vw, 6rem)",
                color: "#E3E2DE",
              }}
            >
              BUILDING AT THE
              <br />
              <span style={{ color: "#C72A09" }}>INTERSECTION</span>
            </h2>
          </div>

          <div
            className="scroll-reveal max-w-md"
            style={{ transitionDelay: "0.2s" }}
          >
            <p
              className="font-mono text-[13px] leading-relaxed"
              style={{
                color: "rgba(227,226,222,0.45)",
                fontFamily: "JetBrains Mono, monospace",
              }}
            >
              A developer who treats every codebase as a design problem. Trained
              in computer applications, obsessed with the gap between what
              technology can do and what it actually does.
            </p>
          </div>
        </div>

        {/* Stats grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-0 stagger-children"
          style={{ borderTop: "1px solid rgba(227,226,222,0.08)" }}
        >
          {stats?.map((stat, i) => (
            <div
              key={stat?.label}
              className="scroll-reveal py-8 px-6 flex flex-col gap-2"
              style={{
                borderRight:
                  i < stats?.length - 1
                    ? "1px solid rgba(227,226,222,0.08)"
                    : "none",
                transitionDelay: `${i * 0.1}s`,
              }}
            >
              <span
                className="font-display"
                style={{
                  fontFamily: "Clash Grotesk, Arial Black, sans-serif",
                  fontWeight: 700,
                  letterSpacing: "-0.04em",
                  fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                  color: "#E3E2DE",
                }}
              >
                {stat?.num}
              </span>
              <span
                className="font-mono text-[10px] tracking-[0.15em] uppercase"
                style={{
                  color: "rgba(227,226,222,0.3)",
                  fontFamily: "JetBrains Mono, monospace",
                }}
              >
                {stat?.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}