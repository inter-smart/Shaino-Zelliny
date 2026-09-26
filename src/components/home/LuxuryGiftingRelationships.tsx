"use client";

import Image from "next/image";
import { useState } from "react";

type Panel = {
  id: string;
  heading: string;
  subLabel: string;
  src: string;
};

const panels: Panel[] = [
  {
    id: "client-appreciation",
    heading: "Client Appreciation",
    subLabel: "Discover More",
    src: "/HomeAssets/luxury_gifting_for_relationships/luxury_gifting_for_relationships_1.jpg",
  },
  {
    id: "bespoke-curation",
    heading: "Bespoke Curation",
    subLabel: "Discover More",
    src: "/HomeAssets/luxury_gifting_for_relationships/luxury_gifting_for_relationships_2.jpg",
  },
  {
    id: "signature-packaging",
    heading: "Signature Packaging",
    subLabel: "Discover More",
    src: "/HomeAssets/luxury_gifting_for_relationships/luxury_gifting_for_relationships_3.jpg",
  },
  {
    id: "executive-concierge",
    heading: "Executive Concierge",
    subLabel: "Discover More",
    src: "/HomeAssets/luxury_gifting_for_relationships/luxury_gifting_for_relationships_4.jpg",
  },
];

export default function LuxuryGiftingRelationships() {
  const [hoveredPanel, setHoveredPanel] = useState<string | null>(null);

  return (
    <section
      id="luxury-gifting-relationships"
      className="pt-14 sm:pt-16 lg:pt-20 pb-8 sm:pb-10 lg:pb-12 px-6 lg:px-10 max-w-[1440px] mx-auto"
      aria-labelledby="relationships-heading"
    >
      {/* Section overline + heading */}
      <div className="text-center mb-10 sm:mb-12 lg:mb-14">
        <p
          className="fade-up font-[var(--font-jost)] font-normal tracking-[0.25em] uppercase mb-3 text-[11px] sm:text-[12px]"
          style={{ color: "#9A9A9A" }}
        >
          Zelliny for Business
        </p>
        <h2
          id="relationships-heading"
          className="fade-up delay-100 font-[var(--font-jost)] font-light tracking-[0.02em] text-[#0A0A0A] text-[28px] sm:text-[36px] lg:text-[42px] xl:text-[44px] leading-tight"
        >
          Luxury gifting for<br />
          <span>relationships that matter most</span>
        </h2>
      </div>

      {/* 
        Desktop: 4 interactive panels with smooth flex accordion:
        - Panel 1 ("Client Appreciation") expanded by default at rest
        - Panels 2-4 expand on hover with siblings shrinking smoothly
        - Captions on panels 2-4 appear only on hover (fade/slide in)
        - Panel 1 caption is always visible by default
      */}
      <div
        className="hidden lg:flex h-[520px] xl:h-[580px] w-full overflow-hidden gap-0 rounded-none isolate"
        role="region"
        aria-label="Luxury gifting panels"
        onMouseLeave={() => setHoveredPanel(null)}
      >
        {panels.map((panel) => {
          // Panel 1 is expanded by default when nothing is hovered, or when hovered
          const isExpanded = hoveredPanel
            ? hoveredPanel === panel.id
            : panel.id === "client-appreciation";

          // Panel 1 caption is always visible at rest or when hovered;
          // Panels 2-4 captions only appear when that specific panel is hovered/expanded
          const isCaptionVisible =
            panel.id === "client-appreciation"
              ? !hoveredPanel || hoveredPanel === "client-appreciation"
              : hoveredPanel === panel.id;

          return (
            <div
              key={panel.id}
              id={`panel-${panel.id}`}
              tabIndex={0}
              role="region"
              aria-label={panel.heading}
              aria-expanded={isExpanded}
              onMouseEnter={() => setHoveredPanel(panel.id)}
              onFocus={() => setHoveredPanel(panel.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setHoveredPanel(panel.id);
                }
              }}
              className="group relative h-full overflow-hidden cursor-pointer transition-[flex] duration-500 ease-out isolate focus:outline-none focus-visible:ring-1 focus-visible:ring-white"
              style={{
                flex: isExpanded ? "2.4 1 0%" : "0.85 1 0%",
              }}
            >
              {/* Constrained background image */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <Image
                  src={panel.src}
                  alt={panel.heading}
                  fill
                  sizes="(max-width: 1280px) 50vw, 35vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>

              {/* Gradient scrim for caption legibility */}
              <div
                className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${
                  isExpanded
                    ? "bg-gradient-to-t from-black/80 via-black/35 to-black/10 opacity-100"
                    : "bg-black/25 opacity-100"
                }`}
              />

              {/* 
                Caption: bold title line + underlined "Discover More" link positioned bottom-left.
                Panel 1 is always visible at rest; panels 2-4 smoothly reveal on hover.
              */}
              <div
                className={`absolute inset-x-0 bottom-0 p-6 xl:p-8 flex flex-col justify-end items-start transition-all duration-400 ease-out pointer-events-auto ${
                  isCaptionVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-3 pointer-events-none"
                }`}
              >
                <h3 className="font-[var(--font-jost)] font-normal text-white text-[22px] sm:text-[24px] xl:text-[28px] leading-tight tracking-wide mb-2.5">
                  {panel.heading}
                </h3>

                <a
                  href="#corporate-gifting"
                  className="inline-block font-[var(--font-jost)] font-normal tracking-[0.16em] text-[11px] text-white uppercase border-b border-white pb-[2px] opacity-100 hover:opacity-80 transition-opacity"
                  style={{ color: "#ffffff", borderColor: "#ffffff", borderBottomWidth: "1px", borderBottomStyle: "solid", opacity: 1 }}
                >
                  {panel.subLabel}
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile: 4 cleanly contained cards with title + Discover More */}
      <div className="flex flex-col sm:grid sm:grid-cols-2 lg:hidden gap-4">
        {panels.map((panel) => (
          <div
            key={`mob-${panel.id}`}
            id={`mobile-panel-${panel.id}`}
            className="group relative overflow-hidden aspect-[4/3] sm:aspect-[4/5] bg-[#F5F5F5] isolate"
          >
            {/* Constrained image */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <Image
                src={panel.src}
                alt={panel.heading}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.04]"
              />
            </div>

            {/* Gradient scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent opacity-90" />

            {/* Caption on mobile */}
            <div className="absolute inset-x-0 bottom-0 p-5 flex flex-col justify-end items-start">
              <h3 className="font-[var(--font-jost)] font-normal text-white text-[20px] leading-tight mb-2">
                {panel.heading}
              </h3>
              <a
                href="#corporate-gifting"
                className="inline-block font-[var(--font-jost)] font-normal tracking-[0.16em] text-[10px] text-white uppercase border-b border-white pb-[2px] opacity-100"
                style={{ color: "#ffffff", borderColor: "#ffffff", borderBottomWidth: "1px", borderBottomStyle: "solid", opacity: 1 }}
              >
                {panel.subLabel}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* 
        Solid black rectangular button with white uppercase letter-spaced text, centered below
      */}
      <div className="mt-12 sm:mt-14 lg:mt-16 text-center">
        <a
          href="#corporate-gifting"
          id="explore-corporate-gifting-cta"
          className="inline-block bg-[#0A0A0A] text-white px-8 py-3.5 font-[var(--font-jost)] font-normal text-[11px] sm:text-[12px] tracking-[0.2em] uppercase hover:bg-neutral-800 transition-colors duration-200 shadow-sm"
          style={{ color: "#ffffff", backgroundColor: "#0A0A0A" }}
        >
          Explore Corporate Gifting
        </a>
      </div>
    </section>
  );
}
