import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import AboutSection from "./components/AboutSection";

export const metadata: Metadata = {
  title: "Noor Fathima — Full Stack Developer & Cloud Enthusiast",
  description:
    "MCA candidate and Full Stack Developer specializing in MERN stack, Python/Flask microservices, Docker, and ML-powered applications. Based in Kerala, India.",
  openGraph: {
    title: "Noor Fathima — Full Stack Developer",
    description:
      "Building scalable full-stack systems with microservices, event-driven architecture, and cloud technologies.",
    images: [{ url: "/assets/images/app_logo.png", width: 1200, height: 630 }],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Noor Fathima",
  jobTitle: "Full Stack Developer",
  description:
    "MCA candidate with expertise in Full Stack Web Development using MERN stack, Python/Flask, Docker, and ML applications.",
  email: "noorfathima7890123@gmail.com",
  telephone: "+91 9496795822",
  address: { "@type": "PostalAddress", addressRegion: "Kerala", addressCountry: "India" },
  knowsAbout: [
    "React.js", "Node.js", "Python", "Flask", "MongoDB", "MySQL",
    "Docker", "Microservices", "REST APIs", "RabbitMQ", "JWT", "Machine Learning"
  ],
};

export default function Homepage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Header />

      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
      </main>

      <Footer />
    </>
  );
}