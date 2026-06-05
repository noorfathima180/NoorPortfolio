"use client";

import React, { useEffect, useRef } from "react";

const projects = [
  {
    id: "A",
    title: "Secure Health API",
    subtitle: "Microservices & Security Platform",
    description:
      "Architected a microservices-based healthcare backend using Docker Compose, isolating API gateway, authentication, database, and monitoring services. Implemented secure authentication with JWT, RBAC, TLS encryption, and AES-256 data protection.",
    tech: ["Flask", "MySQL", "Docker", "JWT", "AES-256", "TLS"],
    year: "2025",
    category: "Backend · Security",
    color: "from-violet-500/10 to-violet-500/5",
    border: "border-violet-500/20",
    tagColor: "bg-violet-500/20 text-violet-300",
    badgeColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    highlight: "Microservices Architecture",
    points: [
      "Docker Compose isolating API gateway, auth, database, monitoring",
      "JWT + RBAC authentication with role-based access control",
      "AES-256 data protection & TLS encryption for sensitive health records",
      "Versioned REST APIs with structured documentation",
    ],
  },
  {
    id: "B",
    title: "Smart E-Commerce Platform",
    subtitle: "Event-Driven Microservices",
    description:
      "Developed 4 decoupled microservices (Inventory, Cart, Payment, Discount) with independent REST APIs. Integrated RabbitMQ for async event-driven processing. Built a responsive React + Tailwind CSS frontend.",
    tech: ["React", "Flask", "MySQL", "RabbitMQ", "Docker", "Tailwind CSS"],
    year: "2025",
    category: "Full Stack · Event-Driven",
    color: "from-indigo-500/10 to-indigo-500/5",
    border: "border-indigo-500/20",
    tagColor: "bg-indigo-500/20 text-indigo-300",
    badgeColor: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
    highlight: "Event-Driven",
    points: [
      "4 decoupled microservices with independent databases",
      "RabbitMQ for async event-driven processing",
      "Containerized with Docker Compose for streamlined deployment",
      "React + Tailwind CSS frontend with end-to-end purchase workflows",
    ],
  },
  {
    id: "C",
    title: "Movie Recommendation System",
    subtitle: "ML-Powered Recommendations",
    description:
      "Built a content-based recommendation engine using Scikit-learn pipelines for feature extraction and cosine similarity scoring on large movie datasets. Generated personalized recommendations with measurable accuracy improvements.",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn"],
    year: "2024",
    category: "Machine Learning",
    color: "from-emerald-500/10 to-emerald-500/5",
    border: "border-emerald-500/20",
    tagColor: "bg-emerald-500/20 text-emerald-300",
    badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    highlight: "ML Pipeline",
    points: [
      "Scikit-learn pipelines for feature extraction",
      "Cosine similarity scoring on large movie datasets",
      "Personalized recommendations based on user preferences",
      "Data preprocessing for measurable accuracy improvements",
    ],
  },
  {
    id: "D",
    title: "Weather Forecasting App",
    subtitle: "Real-Time Weather Web App",
    description:
      "Developed a full-stack responsive web app delivering real-time weather data via REST API. Dynamically rendered temperature, humidity, and conditions. Designed a user-friendly city-search interface with dynamic DOM updates.",
    tech: ["Python", "HTML", "CSS", "JavaScript", "REST API"],
    year: "2024",
    category: "Full Stack · Web App",
    color: "from-cyan-500/10 to-cyan-500/5",
    border: "border-cyan-500/20",
    tagColor: "bg-cyan-500/20 text-cyan-300",
    badgeColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    highlight: "Real-Time Data",
    points: [
      "Real-time weather data via REST API integration",
      "Dynamic rendering of temperature, humidity, conditions",
      "City-search interface with dynamic DOM updates",
      "Robust API error handling for seamless UX",
    ],
  },
];

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".project-card").forEach((el, i) => {
              setTimeout(() => el.classList.add("project-card-visible"), i * 120);
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative py-24 bg-[#0d0d15]"
      aria-label="Projects"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] to-[#0d0d15]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <p className="text-violet-400 text-sm font-mono tracking-widest uppercase mb-3">What I Built</p>
          <h2
            className="text-white font-bold text-4xl md:text-5xl mb-4"
            style={{ letterSpacing: "-0.03em" }}
          >
            Projects
          </h2>
          <p className="text-white/40 text-base max-w-xl mx-auto">
            Real-world systems built with modern stacks — from microservices to ML pipelines.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`project-card group relative rounded-2xl border ${project.border} bg-gradient-to-br ${project.color} p-7 transition-all duration-500 hover:scale-[1.02] hover:border-violet-500/40 cursor-default`}
            >
              {/* Top Row */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-xs font-mono px-2 py-0.5 rounded border ${project.badgeColor}`}>
                      {project.highlight}
                    </span>
                    <span className="text-white/25 text-xs font-mono">{project.year}</span>
                  </div>
                  <h3 className="text-white font-bold text-xl leading-tight mt-2">
                    {project.title}
                  </h3>
                  <p className="text-white/40 text-sm mt-0.5">{project.subtitle}</p>
                </div>
                <span className="shrink-0 w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-white/30 group-hover:border-violet-500/40 group-hover:text-violet-400 transition-all duration-300">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M7 7h10v10"/>
                  </svg>
                </span>
              </div>

              {/* Description */}
              <p className="text-white/50 text-sm leading-relaxed mb-5">
                {project.description}
              </p>

              {/* Bullet Points */}
              <ul className="mb-5 space-y-1.5">
                {project.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-white/40 text-xs">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-violet-500/60 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className={`px-2.5 py-1 rounded-full text-xs font-medium ${project.tagColor}`}
                  >
                    {t}
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
