"use client";

import React, { useEffect, useRef } from "react";
import AppImage from "@/components/ui/AppImage";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (headlineRef.current) {
        headlineRef.current.classList.add("reveal-active");
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden flex flex-col"
      style={{
        minHeight: "100vh",
        backgroundColor: "#1B0E0D"
      }}
      aria-label="Hero section">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <AppImage
          src="/hero_bg_industrial.png"
          alt="High-contrast grayscale, dark editorial industrial style photography, abstract architectural or industrial elements, deep shadows, full-screen background"
          fill
          priority
          className="img-grayscale object-cover w-full h-full"
          style={{ opacity: 0.6 }}
          unoptimized />
        
        {/* Dark gradient over image */}
        <div
          className="absolute inset-0"
          style={{
            background:
            "linear-gradient(to bottom, rgba(27,14,13,0.5) 0%, rgba(27,14,13,0.3) 40%, rgba(27,14,13,0.85) 100%)"
          }} />
        
      </div>

      {/* Ambient Orbs */}
      <div
        className="absolute top-1/4 right-1/4 rounded-full pointer-events-none orb-drift"
        style={{
          width: "40vw",
          height: "40vw",
          background: "radial-gradient(circle, rgba(199,42,9,0.06) 0%, transparent 70%)",
          filter: "blur(60px)"
        }} />
      
      <div
        className="absolute bottom-1/3 left-1/5 rounded-full pointer-events-none"
        style={{
          width: "30vw",
          height: "30vw",
          background: "radial-gradient(circle, rgba(49,239,7,0.03) 0%, transparent 70%)",
          filter: "blur(80px)",
          animationDelay: "4s"
        }} />
      

      {/* Scan Line */}
      <div
        className="absolute left-0 right-0 h-px pointer-events-none z-10 scan-line"
        style={{
          background:
          "linear-gradient(to right, transparent, rgba(227,226,222,0.08), transparent)",
          top: "0%"
        }} />
      

      {/* Content — bottom-aligned */}
      <div className="relative z-20 flex flex-col justify-end flex-1 px-6 lg:px-12 pb-12 pt-28">
        <div className="max-w-[1600px] mx-auto w-full">
          {/* Headline */}
          <div ref={headlineRef} className="mb-8 overflow-hidden">
            {/* Line 1: NOOR */}
            <div className="overflow-hidden">
              <h1
                className="font-display block"
                style={{
                  fontFamily: "Clash Grotesk, Arial Black, sans-serif",
                  fontWeight: 700,
                  letterSpacing: "-0.04em",
                  lineHeight: "0.82",
                  fontSize: "clamp(4rem, 13.5vw, 14rem)",
                  color: "#E3E2DE",
                  opacity: 0.92
                }}>
                
                <span className="char-reveal" style={{ transitionDelay: "0.05s" }}>
                  N
                </span>
                <span className="char-reveal" style={{ transitionDelay: "0.12s" }}>
                  O
                </span>
                <span className="char-reveal" style={{ transitionDelay: "0.19s" }}>
                  O
                </span>
                <span className="char-reveal" style={{ transitionDelay: "0.26s" }}>
                  R
                </span>
              </h1>
            </div>

            {/* Line 2: FATHIMA — indented */}
            <div className="overflow-hidden" style={{ paddingLeft: "clamp(2rem, 20vw, 22rem)" }}>
              <h1
                className="font-display block"
                style={{
                  fontFamily: "Clash Grotesk, Arial Black, sans-serif",
                  fontWeight: 700,
                  letterSpacing: "-0.04em",
                  lineHeight: "0.82",
                  fontSize: "clamp(3.5rem, 13.5vw, 14rem)",
                  color: "#E3E2DE",
                  opacity: 0.92
                }}>
                
                <span className="char-reveal" style={{ transitionDelay: "0.3s" }}>
                  F
                </span>
                <span className="char-reveal" style={{ transitionDelay: "0.36s" }}>
                  A
                </span>
                <span className="char-reveal" style={{ transitionDelay: "0.42s" }}>
                  T
                </span>
                <span className="char-reveal" style={{ transitionDelay: "0.48s" }}>
                  H
                </span>
                <span className="char-reveal" style={{ transitionDelay: "0.54s" }}>
                  I
                </span>
                <span className="char-reveal" style={{ transitionDelay: "0.60s" }}>
                  M
                </span>
                <span className="char-reveal" style={{ transitionDelay: "0.66s" }}>
                  A
                </span>
              </h1>
            </div>
          </div>

          {/* Bottom bar — thin border top */}
          <div
            className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pt-6"
            style={{ borderTop: "1px solid rgba(227,226,222,0.2)" }}>
            
            {/* Left: Metadata */}
            <div className="fade-up fade-up-delay-3">
              <p
                className="font-mono text-[11px] tracking-[0.2em] uppercase"
                style={{
                  color: "rgba(227,226,222,0.5)",
                  fontFamily: "JetBrains Mono, monospace",
                  lineHeight: "1.8"
                }}>
                
                MCA / UI DEV / SYSTEM BUILDER
                <br />
                <span style={{ color: "rgba(227,226,222,0.3)" }}>
                  SEASON_04 — 2025
                </span>
              </p>
            </div>

            {/* Center: Season label */}
            <div className="fade-up fade-up-delay-3 hidden md:block">
              <p
                className="font-mono text-[10px] tracking-[0.25em] uppercase"
                style={{
                  color: "rgba(227,226,222,0.25)",
                  fontFamily: "JetBrains Mono, monospace"
                }}>
                
                PORTFOLIO_2025
              </p>
            </div>

            {/* Right: CTA */}
            <div className="fade-up fade-up-delay-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.15em] uppercase px-6 py-3 transition-all duration-300"
                style={{
                  backgroundColor: "#C72A09",
                  color: "#E3E2DE",
                  fontFamily: "JetBrains Mono, monospace",
                  fontWeight: 500
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.backgroundColor = "#31EF07";
                  el.style.color = "#1B0E0D";
                  el.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.backgroundColor = "#C72A09";
                  el.style.color = "#E3E2DE";
                  el.style.transform = "scale(1)";
                }}>
                
                VIEW WORK
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="transition-transform duration-300 group-hover:translate-x-1">
                  
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div
        className="relative z-20 w-full h-px"
        style={{ backgroundColor: "rgba(227,226,222,0.15)" }} />
      
    </section>);

}