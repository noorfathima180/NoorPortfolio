"use client";

import React, { useEffect, useRef } from "react";

export default function ManifestoSection() {
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
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    const revealEls = sectionRef?.current?.querySelectorAll(".scroll-reveal");
    revealEls?.forEach((el) => observer?.observe(el));

    return () => observer?.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="manifesto"
      className="relative w-full py-24 lg:py-32"
      style={{ backgroundColor: "#E3E2DE" }}
      aria-labelledby="manifesto-heading"
    >
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        {/* 12-col asymmetric grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left col 1–3: Label */}
          <div className="lg:col-span-3 scroll-reveal">
            <div className="flex flex-col gap-4 lg:sticky lg:top-32">
              <p
                id="manifesto-heading"
                className="font-mono text-[10px] tracking-[0.25em] uppercase"
                style={{
                  color: "rgba(27,14,13,0.4)",
                  fontFamily: "JetBrains Mono, monospace",
                }}
              >
                — MANIFESTO
              </p>
              <div
                className="w-8 h-px"
                style={{ backgroundColor: "#C72A09" }}
              />
              <p
                className="font-mono text-[11px] tracking-[0.12em] uppercase leading-loose"
                style={{
                  color: "rgba(27,14,13,0.35)",
                  fontFamily: "JetBrains Mono, monospace",
                }}
              >
                SEASON_04
                <br />
                2025
                <br />
                NOOR FATHIMA
              </p>
            </div>
          </div>

          {/* Right col 4–12: Editorial paragraph */}
          <div className="lg:col-span-9 scroll-reveal" style={{ transitionDelay: "0.15s" }}>
            <p
              className="font-display uppercase leading-tight"
              style={{
                fontFamily: "Clash Grotesk, Arial Black, sans-serif",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                fontSize: "clamp(1.5rem, 3.2vw, 3rem)",
                lineHeight: "1.1",
                color: "#1B0E0D",
                textIndent: "clamp(1.5rem, 3rem, 4rem)",
              }}
            >
              I BUILD{" "}
              <span style={{ color: "#61220F" }}>SYSTEMS</span> THAT THINK,{" "}
              <span style={{ color: "#61220F" }}>INTERFACES</span> THAT FEEL,
              AND{" "}
              <span style={{ color: "#C72A09" }}>CODE</span> THAT ENDURES. EVERY
              PROJECT IS AN ACT OF{" "}
              <span style={{ color: "#61220F" }}>PRECISION</span> — ENGINEERED
              WITH THE SAME RIGOR AS A COUTURE SEAM. THE{" "}
              <span style={{ color: "#C72A09" }}>UI DEV</span> IS MY
              MATERIAL. ARCHITECTURE IS MY{" "}
              <span style={{ color: "#61220F" }}>CRAFT</span>.
            </p>

            {/* Sub-manifesto */}
            <div
              className="mt-12 pt-8"
              style={{ borderTop: "1px solid rgba(27,14,13,0.12)" }}
            >
              <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                {[
                  { num: "01", label: "SYSTEMS", desc: "End-to-end architecture with zero compromise on performance." },
                  { num: "02", label: "INTERFACES", desc: "User-facing design that communicates intent before a click." },
                  { num: "03", label: "SCALE", desc: "Code written for the 10,000th user, not just the first." },
                ]?.map((item) => (
                  <div key={item?.num} className="flex-1 scroll-reveal stagger-children">
                    <p
                      className="font-mono text-[10px] tracking-[0.2em] mb-2"
                      style={{
                        color: "#C72A09",
                        fontFamily: "JetBrains Mono, monospace",
                      }}
                    >
                      {item?.num}
                    </p>
                    <h3
                      className="font-display text-sm tracking-[0.1em] mb-2"
                      style={{
                        fontFamily: "Clash Grotesk, Arial Black, sans-serif",
                        fontWeight: 700,
                        color: "#1B0E0D",
                      }}
                    >
                      {item?.label}
                    </h3>
                    <p
                      className="font-mono text-[12px] leading-relaxed"
                      style={{
                        color: "rgba(27,14,13,0.5)",
                        fontFamily: "JetBrains Mono, monospace",
                      }}
                    >
                      {item?.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}