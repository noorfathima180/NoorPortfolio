"use client";

import React, { useState } from "react";
import AppLogo from "@/components/ui/AppLogo";


const footerCols = [
  {
    heading: "WORK",
    links: [
      { label: "Weather App", href: "#" },
      { label: "Blood Bank System", href: "#" },
      { label: "Car Rental", href: "#" },
      { label: "Portfolio", href: "#" },
    ],
  },
  {
    heading: "STACK",
    links: [
      { label: "MongoDB", href: "#" },
      { label: "Express.js", href: "#" },
      { label: "React", href: "#" },
      { label: "Node.js", href: "#" },
    ],
  },
  {
    heading: "CONNECT",
    links: [
      { label: "GitHub", href: "#" },
      { label: "LinkedIn", href: "#" },
      { label: "Twitter / X", href: "#" },
      { label: "Dribbble", href: "#" },
    ],
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <footer
      id="contact"
      className="relative overflow-hidden"
      style={{ backgroundColor: "#1B0E0D" }}
    >
      {/* Ghost Text Background */}
      <div
        className="absolute bottom-0 left-0 right-0 flex items-end justify-center overflow-hidden pointer-events-none select-none"
        style={{ bottom: "-0.1em" }}
      >
        <span className="ghost-text" style={{ color: "#2A1A19", opacity: 0.6 }}>
          NOOR
        </span>
      </div>

      {/* Top Border */}
      <div
        className="w-full h-px"
        style={{ backgroundColor: "rgba(227,226,222,0.1)" }}
      />

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 pt-16 pb-12 relative z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Col 1: Brand + Newsletter */}
          <div className="lg:col-span-1">
            {/* Brand */}
            <div className="flex items-center gap-2 mb-6">
              <AppLogo size={28} className="opacity-70" />
              <span
                className="font-display text-[#E3E2DE] text-lg tracking-tightest"
                style={{
                  fontFamily: "Clash Grotesk, Arial Black, sans-serif",
                  fontWeight: 700,
                  letterSpacing: "-0.04em",
                }}
              >
                NOOR
              </span>
            </div>

            <p
              className="font-mono text-[11px] tracking-[0.12em] uppercase mb-8 leading-relaxed"
              style={{
                color: "rgba(227,226,222,0.4)",
                fontFamily: "JetBrains Mono, monospace",
              }}
            >
              MCA / UI DEV
              <br />
              SYSTEM BUILDER
              <br />
              SEASON 04
            </p>

            {/* Newsletter */}
            <div>
              <p
                className="font-display text-[#E3E2DE] text-xs tracking-[0.15em] uppercase mb-4 font-bold"
                style={{
                  fontFamily: "Clash Grotesk, Arial Black, sans-serif",
                  fontWeight: 700,
                }}
              >
                DISPATCH
              </p>
              {submitted ? (
                <p
                  className="font-mono text-[11px] tracking-[0.1em]"
                  style={{ color: "#31EF07", fontFamily: "JetBrains Mono, monospace" }}
                >
                  RECEIVED. THANK YOU.
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="flex items-end gap-3">
                  <div className="flex-1">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="YOUR_EMAIL"
                      className="newsletter-input"
                      required
                      aria-label="Email address for newsletter"
                    />
                  </div>
                  <button
                    type="submit"
                    className="font-mono text-[10px] tracking-[0.12em] uppercase px-3 py-2 transition-all duration-300 hover:scale-105 active:scale-95"
                    style={{
                      backgroundColor: "#31EF07",
                      color: "#1B0E0D",
                      fontFamily: "JetBrains Mono, monospace",
                      fontWeight: 500,
                    }}
                    aria-label="Subscribe to newsletter"
                  >
                    SEND
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Cols 2-4: Links */}
          {footerCols.map((col) => (
            <div key={col.heading}>
              <h3
                className="font-display text-[#E3E2DE] text-xs tracking-[0.15em] uppercase mb-6 font-bold"
                style={{
                  fontFamily: "Clash Grotesk, Arial Black, sans-serif",
                  fontWeight: 700,
                }}
              >
                {col.heading}
              </h3>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="nav-link font-mono text-[12px] tracking-[0.05em] transition-colors duration-300"
                      style={{
                        color: "rgba(227,226,222,0.5)",
                        fontFamily: "JetBrains Mono, monospace",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "#E3E2DE";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color =
                          "rgba(227,226,222,0.5)";
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(227,226,222,0.08)" }}
        >
          <p
            className="font-mono text-[10px] tracking-[0.15em] uppercase"
            style={{
              color: "rgba(227,226,222,0.25)",
              fontFamily: "JetBrains Mono, monospace",
            }}
          >
            © 2025 NOOR. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-6">
            {["PRIVACY", "TERMS", "COOKIES"].map((item) => (
              <a
                key={item}
                href="#"
                className="font-mono text-[10px] tracking-[0.12em] uppercase transition-colors duration-300"
                style={{
                  color: "rgba(227,226,222,0.25)",
                  fontFamily: "JetBrains Mono, monospace",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color =
                    "rgba(227,226,222,0.6)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color =
                    "rgba(227,226,222,0.25)";
                }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}