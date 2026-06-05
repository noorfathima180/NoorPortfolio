"use client";

import React, { useEffect, useRef } from "react";

const skillCategories = [
  {
    icon: "🎨",
    title: "Frontend",
    skills: ["React.js", "HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Responsive Design"],
    color: "from-violet-500/20 to-violet-500/5",
    border: "border-violet-500/20",
    accent: "bg-violet-500/20 text-violet-300",
  },
  {
    icon: "⚙️",
    title: "Backend",
    skills: ["Node.js", "Express.js", "Python", "Flask", "REST APIs", "Microservices"],
    color: "from-indigo-500/20 to-indigo-500/5",
    border: "border-indigo-500/20",
    accent: "bg-indigo-500/20 text-indigo-300",
  },
  {
    icon: "🗄️",
    title: "Databases",
    skills: ["MongoDB", "MySQL", "SQL"],
    color: "from-blue-500/20 to-blue-500/5",
    border: "border-blue-500/20",
    accent: "bg-blue-500/20 text-blue-300",
  },
  {
    icon: "☁️",
    title: "Cloud & DevOps",
    skills: ["Docker", "Docker Compose", "AWS Fundamentals", "CI/CD", "Git", "GitHub"],
    color: "from-cyan-500/20 to-cyan-500/5",
    border: "border-cyan-500/20",
    accent: "bg-cyan-500/20 text-cyan-300",
  },
  {
    icon: "🔐",
    title: "Security & Messaging",
    skills: ["RabbitMQ", "JWT", "OAuth 2.0", "RBAC", "AES-256", "TLS"],
    color: "from-emerald-500/20 to-emerald-500/5",
    border: "border-emerald-500/20",
    accent: "bg-emerald-500/20 text-emerald-300",
  },
  {
    icon: "🧠",
    title: "Languages & Core",
    skills: ["Python", "JavaScript", "SQL", "Full Stack Dev", "Agile", "Version Control"],
    color: "from-pink-500/20 to-pink-500/5",
    border: "border-pink-500/20",
    accent: "bg-pink-500/20 text-pink-300",
  },
];

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".skill-card").forEach((el, i) => {
              setTimeout(() => el.classList.add("skill-card-visible"), i * 80);
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
      id="skills"
      className="relative py-24 bg-[#0a0a0f]"
      aria-label="Technical Skills"
    >
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0d0d15] to-[#0a0a0f]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <p className="text-violet-400 text-sm font-mono tracking-widest uppercase mb-3">What I Know</p>
          <h2 className="text-white font-bold text-4xl md:text-5xl mb-4" style={{ letterSpacing: "-0.03em" }}>
            Technical Skills
          </h2>
          <p className="text-white/40 text-base max-w-xl mx-auto">
            A full-stack skill set spanning frontend, backend, cloud, and security.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className={`skill-card group relative rounded-2xl border ${cat.border} bg-gradient-to-br ${cat.color} p-6 backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:border-violet-500/40`}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="text-white font-semibold text-base">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 rounded-full text-xs font-medium ${cat.accent}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
