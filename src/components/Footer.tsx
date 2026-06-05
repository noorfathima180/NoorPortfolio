"use client";

import React, { useState } from "react";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("noorfathima7890123@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-[#0a0a0f]"
    >
      {/* Gradient top border */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-600/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-10">

        {/* Main CTA block */}
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-mono tracking-widest uppercase mb-4">Let's Work Together</p>
          <h2
            className="text-white font-bold text-4xl md:text-5xl mb-5"
            style={{ letterSpacing: "-0.03em" }}
          >
            Get In Touch
          </h2>
          <p className="text-white/40 text-base max-w-lg mx-auto mb-8">
            I'm currently open to full-time roles, internships, and freelance projects.
            Feel free to reach out!
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:noorfathima7890123@gmail.com"
              className="px-8 py-3.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/30"
            >
              Send Email
            </a>
            <button
              onClick={handleCopyEmail}
              className="px-8 py-3.5 rounded-full border border-white/15 hover:border-violet-500/50 text-white/60 hover:text-white font-semibold text-sm transition-all duration-300 flex items-center gap-2"
            >
              {copied ? (
                <>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  Copied!
                </>
              ) : (
                <>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
                  </svg>
                  Copy Email
                </>
              )}
            </button>
          </div>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {[
            {
              icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
                </svg>
              ),
              label: "Phone",
              value: "+91 9496795822",
              href: "tel:+919496795822",
            },
            {
              icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
              ),
              label: "Email",
              value: "noorfathima7890123@gmail.com",
              href: "mailto:noorfathima7890123@gmail.com",
            },
            {
              icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
              ),
              label: "Location",
              value: "Kerala, India",
              href: null,
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-5 rounded-2xl border border-white/8 bg-white/3 hover:border-violet-500/30 transition-colors duration-300"
            >
              <span className="w-10 h-10 rounded-xl bg-violet-500/15 flex items-center justify-center text-violet-400 shrink-0">
                {item.icon}
              </span>
              <div className="min-w-0">
                <p className="text-white/30 text-xs font-mono uppercase tracking-widest mb-0.5">{item.label}</p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-white text-sm font-medium hover:text-violet-400 transition-colors duration-300 truncate block"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-white text-sm font-medium">{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-sm font-medium">
            © 2025 Noor Fathima. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white/30 text-xs font-mono">Available for opportunities</span>
          </div>
        </div>
      </div>
    </footer>
  );
}