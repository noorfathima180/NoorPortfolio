"use client";

import React, { useState, useEffect, useCallback } from "react";
import AppLogo from "@/components/ui/AppLogo";
import Icon from "@/components/ui/AppIcon";
import Link from "next/link";

const navLinks = [
  { label: "PROJECTS", href: "#projects" },
  { label: "EDITORIAL", href: "#manifesto" },
  { label: "ABOUT", href: "#about" },
  { label: "CONTACT", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Main Navbar */}
      <nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{ mixBlendMode: "difference" }}
        aria-label="Main navigation"
      >
        <div
          className={`w-full transition-all duration-500 ${
            scrolled ? "py-3" : "py-5"
          }`}
        >
          <div className="max-w-[1600px] mx-auto px-6 lg:px-12 flex items-center justify-between">
            {/* Left: Logo + Brand */}
            <div className="flex items-center gap-3">
              <AppLogo
                size={28}
                className="opacity-90"
                onClick={() =>
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }
              />
              <Link
                href="/homepage"
                className="font-display text-[#E3E2DE] text-xl tracking-tightest font-bold hover:text-[#31EF07] transition-colors duration-300"
                style={{
                  fontFamily: "Clash Grotesk, Arial Black, sans-serif",
                  fontWeight: 700,
                  letterSpacing: "-0.04em",
                }}
              >
                NOOR
              </Link>
            </div>

            {/* Center: Nav Links (desktop) */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks?.map((link) => (
                <a
                  key={link?.label}
                  href={link?.href}
                  className="nav-link font-mono text-[#E3E2DE] text-[11px] tracking-[0.15em] uppercase font-medium hover:text-[#31EF07] transition-colors duration-300"
                  style={{ fontFamily: "JetBrains Mono, monospace" }}
                >
                  {link?.label}
                </a>
              ))}
            </div>

            {/* Right: Icons (desktop) */}
            <div className="hidden md:flex items-center gap-5">
              <button
                className="text-[#E3E2DE] hover:text-[#31EF07] transition-colors duration-300"
                aria-label="Search"
              >
                <Icon name="MagnifyingGlassIcon" size={18} variant="outline" className="text-[#E3E2DE]" />
              </button>
              <button
                className="text-[#E3E2DE] hover:text-[#31EF07] transition-colors duration-300"
                aria-label="Cart"
              >
                <Icon name="ShoppingBagIcon" size={18} variant="outline" className="text-[#E3E2DE]" />
              </button>
            </div>

            {/* Mobile: Hamburger */}
            <button
              className="md:hidden text-[#E3E2DE] hover:text-[#31EF07] transition-colors duration-300 w-11 h-11 flex items-center justify-center"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <Icon name="XMarkIcon" size={22} variant="outline" className="text-[#E3E2DE]" />
              ) : (
                <Icon name="Bars3Icon" size={22} variant="outline" className="text-[#E3E2DE]" />
              )}
            </button>
          </div>
        </div>
      </nav>
      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu ${menuOpen ? "open" : ""}`}
        style={{ mixBlendMode: "normal" }}
        aria-hidden={!menuOpen}
      >
        {/* Close button */}
        <button
          className="absolute top-6 right-6 text-[#E3E2DE] hover:text-[#31EF07] transition-colors duration-300 w-11 h-11 flex items-center justify-center"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <Icon name="XMarkIcon" size={24} variant="outline" className="text-[#E3E2DE]" />
        </button>

        {/* Brand in menu */}
        <div className="mb-8">
          <span
            className="font-display text-[#E3E2DE] text-4xl tracking-tightest"
            style={{
              fontFamily: "Clash Grotesk, Arial Black, sans-serif",
              fontWeight: 700,
              letterSpacing: "-0.04em",
            }}
          >
            NOOR
          </span>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col items-center gap-6">
          {navLinks?.map((link, i) => (
            <a
              key={link?.label}
              href={link?.href}
              onClick={handleLinkClick}
              className="font-display text-[#E3E2DE] text-3xl tracking-tightest hover:text-[#31EF07] transition-colors duration-300"
              style={{
                fontFamily: "Clash Grotesk, Arial Black, sans-serif",
                fontWeight: 700,
                letterSpacing: "-0.04em",
                transitionDelay: `${i * 0.05}s`,
              }}
            >
              {link?.label}
            </a>
          ))}
        </nav>

        {/* Bottom mono text */}
        <p
          className="absolute bottom-8 font-mono text-[#E3E2DE] text-[10px] tracking-[0.2em] uppercase opacity-40"
          style={{ fontFamily: "JetBrains Mono, monospace" }}
        >
          SEASON_04 / MCA / UI DEV
        </p>
      </div>
    </>
  );
}