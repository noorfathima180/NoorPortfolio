"use client";

import React, { useEffect, useRef } from "react";

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const timer = setTimeout(() => {
      el.classList.add("hero-loaded");
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={heroRef}
      className="hero-section relative min-h-screen flex flex-col justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-[#0a0a0f]">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-violet-600/10 blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-indigo-500/8 blur-[100px] animate-pulse-slow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-0 w-[300px] h-[300px] rounded-full bg-purple-600/6 blur-[80px] animate-pulse-slow" style={{ animationDelay: "4s" }} />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 hero-grid-bg opacity-20" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-16">
        <div className="hero-content">
          {/* Badge */}
          <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
            Open to opportunities · Kerala, India
          </div>

          {/* Name */}
          <h1 className="hero-title text-white font-bold leading-none mb-4">
            <span className="block text-white/90">Noor</span>
            <span className="block gradient-text">Fathima</span>
          </h1>

          {/* Role */}
          <p className="hero-subtitle text-lg md:text-xl text-white/50 font-medium mb-3">
            Software Developer &nbsp;·&nbsp; Full Stack &nbsp;·&nbsp; Cloud Enthusiast
          </p>

          {/* Description */}
          <p className="hero-desc text-white/40 text-base md:text-lg leading-relaxed max-w-2xl mb-10">
            MCA candidate building scalable full-stack systems with the MERN stack,
            Python/Flask microservices, Docker, and ML-powered apps. Passionate about
            clean architecture and beautiful interfaces.
          </p>

          {/* CTA Row */}
          <div className="hero-cta flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="px-7 py-3 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/25"
            >
              View Projects
            </a>
            <a
              href="mailto:noorfathima7890123@gmail.com"
              className="px-7 py-3 rounded-full border border-white/15 hover:border-violet-500/50 text-white/70 hover:text-white font-semibold text-sm transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>

          {/* Contact info row */}
          <div className="hero-meta mt-10 flex flex-wrap items-center gap-6 text-white/30 text-sm">
            <a href="tel:+919496795822" className="flex items-center gap-2 hover:text-violet-400 transition-colors duration-300">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
              </svg>
              +91 9496795822
            </a>
            <a href="mailto:noorfathima7890123@gmail.com" className="flex items-center gap-2 hover:text-violet-400 transition-colors duration-300">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
              </svg>
              noorfathima7890123@gmail.com
            </a>
            <span className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              Kerala, India
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20">
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent animate-scroll-line" />
      </div>
    </section>
  );
}