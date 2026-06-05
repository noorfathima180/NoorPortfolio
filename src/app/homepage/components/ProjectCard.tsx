"use client";

import React from "react";
import AppImage from "@/components/ui/AppImage";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  tech: string;
  year: string;
  imageSrc: string;
  imageAlt: string;
  href?: string;
  aspectClass?: string;
  style?: React.CSSProperties;
  className?: string;
}

export default function ProjectCard({
  title,
  subtitle,
  tech,
  year,
  imageSrc,
  imageAlt,
  href = "#",
  aspectClass = "aspect-[4/5]",
  style,
  className = "",
}: ProjectCardProps) {
  return (
    <a
      href={href}
      className={`group relative block overflow-hidden card-border-bottom cursor-pointer ${className}`}
      style={style}
      aria-label={`View project: ${title}`}
    >
      {/* Image Container */}
      <div className={`relative w-full overflow-hidden ${aspectClass}`}>
        <AppImage
          src={imageSrc}
          alt={imageAlt}
          fill
          className="img-grayscale object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
          unoptimized
        />

        {/* Dark overlay */}
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            background:
              "linear-gradient(to bottom, rgba(27,14,13,0.1) 0%, rgba(27,14,13,0.6) 100%)",
            opacity: 0.7,
          }}
        />

        {/* QUICK VIEW Badge */}
        <div className="neon-badge absolute top-4 right-4 z-10">
          QUICK VIEW
        </div>

        {/* Year badge */}
        <div
          className="absolute top-4 left-4 z-10 font-mono text-[10px] tracking-[0.15em] uppercase px-2 py-1"
          style={{
            backgroundColor: "rgba(27,14,13,0.7)",
            color: "rgba(227,226,222,0.6)",
            fontFamily: "JetBrains Mono, monospace",
            backdropFilter: "blur(4px)",
          }}
        >
          {year}
        </div>
      </div>

      {/* Card Info */}
      <div
        className="pt-5 pb-6 relative"
        style={{ borderBottom: "1px solid rgba(27,14,13,0.1)" }}
      >
        {/* Animated bottom border on hover */}
        <div
          className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
          style={{
            backgroundColor: "#C72A09",
            transitionTimingFunction: "cubic-bezier(0.165, 0.84, 0.44, 1)",
          }}
        />

        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <h3
              className="font-display uppercase mb-1 truncate"
              style={{
                fontFamily: "Clash Grotesk, Arial Black, sans-serif",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                fontSize: "clamp(1rem, 1.4vw, 1.25rem)",
                color: "#1B0E0D",
              }}
            >
              {title}
            </h3>
            <p
              className="font-mono text-[11px] tracking-[0.08em] uppercase"
              style={{
                color: "rgba(27,14,13,0.45)",
                fontFamily: "JetBrains Mono, monospace",
              }}
            >
              {subtitle}
            </p>
          </div>

          {/* Arrow */}
          <div
            className="flex-shrink-0 w-8 h-8 flex items-center justify-center transition-all duration-300 group-hover:translate-x-1"
            style={{
              border: "1px solid rgba(27,14,13,0.2)",
              color: "#1B0E0D",
            }}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-3 flex items-center gap-2 flex-wrap">
          {tech.split(" / ").map((t) => (
            <span
              key={t}
              className="font-mono text-[10px] tracking-[0.1em] uppercase px-2 py-0.5"
              style={{
                backgroundColor: "rgba(27,14,13,0.06)",
                color: "rgba(27,14,13,0.5)",
                fontFamily: "JetBrains Mono, monospace",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}