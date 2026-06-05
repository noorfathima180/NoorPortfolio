import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "./components/HeroSection";
import ManifestoSection from "./components/ManifestoSection";
import CategoryDivider from "./components/CategoryDivider";
import ProjectGrid from "./components/ProjectGrid";
import AboutStrip from "./components/AboutStrip";

export const metadata: Metadata = {
  title: "NOOR — UI Dev & System Builder",
  description:
    "NOOR is a UI Dev and system builder crafting high-performance digital experiences with editorial precision and engineering rigor.",
  openGraph: {
    title: "NOOR — Season 04",
    description:
      "UI Dev crafting systems that think and interfaces that feel.",
    images: [{ url: "/assets/images/app_logo.png", width: 1200, height: 630 }],
  },
};

/**
 * Structured data for SEO
 */
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "NOOR Fathima",
  jobTitle: "UI Dev & System Builder",
  description:
    "A developer building at the intersection of engineering precision and editorial design.",
  url: "https://noor.dev",
  sameAs: ["https://github.com/noor", "https://linkedin.com/in/noor"],
};

export default function Homepage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Noise Overlay — fixed, full-screen */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Navigation */}
      <Header />

      {/* Main Content */}
      <main id="main-content">
        {/* 1. Hero — Cinematic dark + massive split typography */}
        <HeroSection />

        {/* 2. Manifesto — 12-col editorial paragraph */}
        <ManifestoSection />

        {/* 3. Category Divider — Full-width "PROJECTS" brutalist text */}
        <CategoryDivider />

        {/* 4. Project Grid — Asymmetric 7+5 + full-width */}
        <ProjectGrid />

        {/* 5. About Strip — Dark section with stats */}
        <AboutStrip />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}