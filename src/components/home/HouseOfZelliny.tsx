export default function HouseOfZelliny() {
  return (
    <section
      id="house-of-zelliny"
      className="pt-6 sm:pt-8 lg:pt-10 pb-8 sm:pb-10 lg:pb-12 bg-white"
      aria-labelledby="house-heading"
    >
      {/* 
        1. Separate text block on plain background above the video (matches PDF layout).
        Uniform single-color text using Jost font-normal with solid #9A9A9A color styling.
      */}
      <div className="text-center px-6 mb-8 sm:mb-10 lg:mb-12">
        <p
          className="fade-up font-[var(--font-jost)] font-normal tracking-[0.25em] uppercase mb-3 text-[11px] sm:text-[12px]"
          style={{ color: "#9A9A9A" }}
        >
          House of Zelliny
        </p>
        <h2
          id="house-heading"
          className="fade-up delay-100 font-[var(--font-jost)] font-light tracking-[0.02em] text-[#0A0A0A] text-[28px] sm:text-[36px] lg:text-[42px] xl:text-[44px] leading-tight"
        >
          One house for every occasion
        </h2>
      </div>

      {/* 
        2. Video block below text as a separate non-overlaid block (aspect ratio 1440/618 matching PDF)
      */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div
          className="fade-scale delay-150 relative w-full overflow-hidden bg-[#0A0A0A]"
          style={{ aspectRatio: "1440 / 618" }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            aria-label="House of Zelliny - One house for every occasion video"
          >
            <source src="/HomeAssets/one-house.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
