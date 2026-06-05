"use client";

import React, { useEffect, useRef } from "react";

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    period: "2025 – 2027",
    institution: "LEAD College (Autonomous), Palakkad",
    university: "University of Calicut",
    icon: "🎓",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    period: "2022 – 2025",
    institution: "Mangalam College of Engineering, Ettumanoor",
    university: "Kerala, India",
    icon: "📚",
  },
];

const certifications = [
  {
    title: "React.js Development",
    issuer: "Srishti Innovative",
    year: "2025",
    status: "Completed",
    color: "text-violet-400 bg-violet-500/10 border-violet-500/20",
  },
  {
    title: "Flutter / Android App Development",
    issuer: "Srishti Innovative",
    year: "2025",
    status: "Completed",
    color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
  },
  {
    title: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services",
    year: "2025",
    status: "In Progress",
    color: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  },
];

const languages = [
  { lang: "Malayalam", level: "Native", pct: 100, color: "bg-violet-500" },
  { lang: "English", level: "Professional", pct: 85, color: "bg-indigo-500" },
  { lang: "Hindi", level: "Basic", pct: 40, color: "bg-cyan-500" },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".about-reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("about-reveal-visible"), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-24 bg-[#0a0a0f]"
      aria-label="About Noor Fathima"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d15] to-[#0a0a0f]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="text-violet-400 text-sm font-mono tracking-widest uppercase mb-3">Background</p>
          <h2 className="text-white font-bold text-4xl md:text-5xl mb-4" style={{ letterSpacing: "-0.03em" }}>
            About Me
          </h2>
          <p className="text-white/40 text-base max-w-2xl mx-auto leading-relaxed">
            Results-driven MCA candidate with solid expertise in Full Stack Web Development.
            Experienced in microservices, secure REST APIs, event-driven systems, and ML-powered applications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Education */}
          <div className="about-reveal rounded-2xl border border-white/8 bg-white/3 p-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 text-sm">🎓</span>
              <h3 className="text-white font-semibold text-lg">Education</h3>
            </div>
            <div className="space-y-5">
              {education.map((edu, i) => (
                <div key={i} className="relative pl-5 border-l border-violet-500/20">
                  <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-violet-500/40 border border-violet-500" />
                  <div className="flex items-start justify-between gap-2 flex-wrap">
                    <h4 className="text-white font-semibold text-sm leading-snug">{edu.degree}</h4>
                    <span className="text-violet-400/70 text-xs font-mono shrink-0">{edu.period}</span>
                  </div>
                  <p className="text-white/50 text-xs mt-1">{edu.institution}</p>
                  <p className="text-white/30 text-xs">{edu.university}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="about-reveal rounded-2xl border border-white/8 bg-white/3 p-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-sm">🏆</span>
              <h3 className="text-white font-semibold text-lg">Certifications</h3>
            </div>
            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <div key={i} className={`flex items-center justify-between gap-4 p-4 rounded-xl border ${cert.color}`}>
                  <div>
                    <p className="text-white font-medium text-sm">{cert.title}</p>
                    <p className="text-white/40 text-xs mt-0.5">{cert.issuer} · {cert.year}</p>
                  </div>
                  <span className={`text-xs font-mono px-2 py-0.5 rounded-full border ${cert.color} shrink-0`}>
                    {cert.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="about-reveal rounded-2xl border border-white/8 bg-white/3 p-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-sm">🌐</span>
              <h3 className="text-white font-semibold text-lg">Languages</h3>
            </div>
            <div className="space-y-5">
              {languages.map((lang, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-white text-sm font-medium">{lang.lang}</span>
                    <span className="text-white/40 text-xs font-mono">{lang.level}</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/8 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${lang.color} transition-all duration-1000`}
                      style={{ width: `${lang.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary */}
          <div className="about-reveal rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-500/10 to-violet-500/5 p-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 text-sm">✨</span>
              <h3 className="text-white font-semibold text-lg">Quick Facts</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "4+", label: "Projects Built" },
                { num: "MCA", label: "Degree 2025–27" },
                { num: "MERN", label: "Primary Stack" },
                { num: "Docker", label: "DevOps Tool" },
                { num: "3+", label: "Certifications" },
                { num: "Kerala", label: "Based In" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-3 rounded-xl bg-white/5">
                  <p className="text-white font-bold text-xl" style={{ letterSpacing: "-0.03em" }}>{stat.num}</p>
                  <p className="text-white/40 text-xs mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
