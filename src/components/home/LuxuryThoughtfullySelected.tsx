import Image from "next/image";

export default function LuxuryThoughtfullySelected() {
  return (
    <section
      id="luxury-selected"
      className="relative w-full overflow-hidden"
      aria-labelledby="luxury-selected-heading"
    >
      {/* Full-bleed banner image with 1440/700 aspect ratio matching PDF */}
      <div
        className="fade-in relative w-full"
        style={{ aspectRatio: "1440 / 700" }}
      >
        <Image
          src="/HomeAssets/luxury_thoughtfully_selected.jpg"
          alt="Luxury, thoughtfully selected — curated luxury gifts from House of Zelliny"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority={false}
        />
        {/* Subtle dark tint + bottom gradient shading matching PDF pattern_p0_17 */}
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />

        {/*
          Text placement: positioned at bottom-center matching PDF (y=3785 vs image bottom 3729)
          Font: Jost font-light, tracking-[0.02em], text-white
        */}
        <div className="absolute inset-x-0 bottom-8 sm:bottom-12 lg:bottom-16 flex flex-col items-center justify-end text-center px-6 pointer-events-none">
          <h2
            id="luxury-selected-heading"
            className="fade-up font-[var(--font-jost)] font-light tracking-[0.02em] text-white
                       text-[28px] sm:text-[36px] lg:text-[42px] xl:text-[44px] leading-tight"
          >
            Luxury, thoughtfully selected
          </h2>
        </div>
      </div>
    </section>
  );
}
