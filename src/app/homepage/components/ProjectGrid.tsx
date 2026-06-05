"use client";

import React, { useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";

const projects = [
{
  id: "A",
  title: "WEATHER STATION",
  subtitle: "WEATHER_API",
  tech: "REACT / NODE / OPENWEATHER",
  year: "2024",
  imageSrc:
  "https://images.unsplash.com/photo-1653030724280-079898bcdc83",
  imageAlt:
  "Dramatic stormy sky with dark clouds and atmospheric lighting, high contrast monochrome",
  href: "#",
  colSpan: "lg:col-span-7",
  aspectClass: "aspect-[4/5]",
  marginTop: "0px"
},
{
  id: "B",
  title: "BLOOD BANK SYSTEM",
  subtitle: "BLOOD_SYSTEM",
  tech: "UI DEV / REST_API / JWT",
  year: "2024",
  imageSrc:
  "https://img.rocket.new/generatedImages/rocket_gen_img_18d2a7f21-1766490540654.png",
  imageAlt:
  "Clinical laboratory environment with dark walls and dramatic directional lighting, grayscale medical setting",
  href: "#",
  colSpan: "lg:col-span-5",
  aspectClass: "aspect-[4/5]",
  marginTop: "128px"
},
{
  id: "C",
  title: "CAR RENTAL PLATFORM",
  subtitle: "RENTAL_SYSTEM",
  tech: "NEXT.JS / MONGO / STRIPE",
  year: "2025",
  imageSrc:
  "https://images.unsplash.com/photo-1709777506046-bb6db9097a6b",
  imageAlt:
  "Sleek modern automobile in dark shadowy environment, deep blacks and high contrast, moody atmospheric car photography",
  href: "#",
  colSpan: "lg:col-span-12",
  aspectClass: "aspect-[16/7]",
  marginTop: "0px"
}];


export default function ProjectGrid() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    const revealEls = sectionRef.current?.querySelectorAll(".scroll-reveal");
    revealEls?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const [cardA, cardB, cardC] = projects;

  return (
    <section
      ref={sectionRef}
      className="relative w-full"
      style={{ backgroundColor: "#E3E2DE", paddingBottom: "6rem" }}
      aria-label="Project portfolio grid">
      
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 pt-16">
        {/* Row 1: Asymmetric 7+5 */}
        {/* Bento audit:
             Row 1: [Card A lg:col-span-7] + [Card B lg:col-span-5] = 12/12 ✓
             Row 2: [Card C lg:col-span-12] = 12/12 ✓
          */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-6 lg:mb-8">
          {/* Card A — 7 cols */}
          <div
            className={`${cardA.colSpan} scroll-reveal`}
            style={{ transitionDelay: "0.05s" }}>
            
            <ProjectCard
              title={cardA.title}
              subtitle={cardA.subtitle}
              tech={cardA.tech}
              year={cardA.year}
              imageSrc={cardA.imageSrc}
              imageAlt={cardA.imageAlt}
              href={cardA.href}
              aspectClass={cardA.aspectClass} />
            
          </div>

          {/* Card B — 5 cols, offset down */}
          <div
            className={`${cardB.colSpan} scroll-reveal`}
            style={{
              transitionDelay: "0.2s",
              marginTop: cardB.marginTop
            }}>
            
            <ProjectCard
              title={cardB.title}
              subtitle={cardB.subtitle}
              tech={cardB.tech}
              year={cardB.year}
              imageSrc={cardB.imageSrc}
              imageAlt={cardB.imageAlt}
              href={cardB.href}
              aspectClass={cardB.aspectClass} />
            
          </div>
        </div>

        {/* Row 2: Full-width Card C */}
        <div
          className={`${cardC.colSpan} scroll-reveal`}
          style={{ transitionDelay: "0.35s" }}>
          
          <ProjectCard
            title={cardC.title}
            subtitle={cardC.subtitle}
            tech={cardC.tech}
            year={cardC.year}
            imageSrc={cardC.imageSrc}
            imageAlt={cardC.imageAlt}
            href={cardC.href}
            aspectClass={cardC.aspectClass} />
          
        </div>

        {/* View All CTA */}
        <div className="mt-16 flex items-center justify-between scroll-reveal" style={{ transitionDelay: "0.5s" }}>
          <div
            className="flex-1 h-px"
            style={{ backgroundColor: "rgba(27,14,13,0.12)" }} />
          
          <a
            href="#"
            className="group mx-8 font-mono text-[11px] tracking-[0.2em] uppercase flex items-center gap-3 transition-colors duration-300"
            style={{
              color: "rgba(27,14,13,0.5)",
              fontFamily: "JetBrains Mono, monospace"
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = "#C72A09";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = "rgba(27,14,13,0.5)";
            }}>
            
            VIEW ARCHIVE
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="transition-transform duration-300 group-hover:translate-x-1">
              
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <div
            className="flex-1 h-px"
            style={{ backgroundColor: "rgba(27,14,13,0.12)" }} />
          
        </div>
      </div>
    </section>);

}