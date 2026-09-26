export default function HeroBanner() {
  return (
    <section
      id="hero-banner"
      className="relative w-full overflow-hidden bg-[#0A0A0A]"
      style={{ aspectRatio: "1440 / 810" }}
      aria-label="Hero banner"
    >
      {/* Full-bleed background video — autoplay muted loop */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      >
        <source src="/HomeAssets/hero-banner.mp4" type="video/mp4" />
      </video>

      {/* Subtle dark scrim */}
      <div className="absolute inset-0 bg-black/30" aria-hidden="true" />

      {/* 
        Overlay text — positioned in lower third (approx. 65-70% space above, 30-35% below)
        matching design-reference/homepage.pdf
      */}
      <div className="absolute inset-x-0 bottom-[14%] sm:bottom-[16%] lg:bottom-[18%] z-10 flex flex-col items-center justify-center text-center px-4 pointer-events-none">
        {/* Headline — single line, clamp scales with viewport */}
        <h1
          className="
            font-[var(--font-jost)] font-light text-white uppercase leading-none
            tracking-[0.18em] whitespace-nowrap
            text-[clamp(20px,5vw,78px)]
            animate-hero-title
          "
        >
          HOUSE OF ZELLINY
        </h1>

        {/* Subline */}
        <p
          className="
            font-[var(--font-jost)] font-light tracking-[0.28em] text-white/80 uppercase mt-4
            text-[clamp(9px,1vw,14px)] whitespace-nowrap
            animate-hero-subline
          "
        >
          A gift to remember
        </p>
      </div>
    </section>
  );
}
