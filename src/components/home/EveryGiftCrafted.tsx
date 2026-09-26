import Image from "next/image";

const craftItems = [
  {
    id: "ribbon-wrapping",
    label: "Ribbon Wrapping",
    description: "Custom ribbon wrapping with your branding",
    src: "/HomeAssets/every_gift_crafted/ribbon_wrapping.jpg",
  },
  {
    id: "embossing",
    label: "Embossing",
    description: "Embossed logo with your company name",
    src: "/HomeAssets/every_gift_crafted/embossing.jpg",
  },
  {
    id: "engraving",
    label: "Engraving",
    description: "Personalized engraving and bespoke finishing",
    src: "/HomeAssets/every_gift_crafted/engraving.jpg",
  },
];

export default function EveryGiftCrafted() {
  return (
    <section
      id="every-gift-crafted"
      className="pt-6 sm:pt-8 lg:pt-10 pb-14 sm:pb-16 lg:pb-20 px-6 lg:px-10 max-w-[1440px] mx-auto"
      aria-labelledby="crafted-heading"
    >
      {/* Section label + heading */}
      <div className="text-center mb-8 sm:mb-10 lg:mb-12">
        <p
          className="fade-up font-[var(--font-jost)] font-normal tracking-[0.25em] uppercase mb-3 text-[11px] sm:text-[12px]"
          style={{ color: "#9A9A9A" }}
        >
          Signature Packaging
        </p>
        <h2
          id="crafted-heading"
          className="fade-up delay-100 font-[var(--font-jost)] font-light tracking-[0.02em] text-[#0A0A0A]
                     text-[28px] sm:text-[36px] lg:text-[42px] xl:text-[44px] leading-tight"
        >
          Every gift, crafted with intention
        </h2>
      </div>

      {/* 
        3-column grid matching design-reference/homepage.pdf:
        - Image extends full height of the card
        - Caption overlaid inside the bottom with subtle dark gradient
        - Clean solid white labels with proper word spacing
      */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {craftItems.map((item, i) => (
          <div
            key={item.id}
            id={item.id}
            className="fade-up group relative overflow-hidden bg-[#F8F7F5] aspect-[4/5] isolate"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            {/* Image extending the full height of the card */}
            <Image
              src={item.src}
              alt={item.label}
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />

            {/* Subtle dark gradient overlay behind text for optimal legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />

            {/* Caption text positioned as an overlay near the bottom of the image */}
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7 text-center flex flex-col items-center justify-end pointer-events-none">
              <h3
                className="font-[var(--font-jost)] font-normal text-white uppercase text-[12px] sm:text-[13px] leading-tight mb-2"
                style={{
                  color: "#ffffff",
                  letterSpacing: "0.12em",
                  wordSpacing: "0.25em",
                }}
              >
                {item.label}
              </h3>
              <p
                className="font-[var(--font-montserrat)] font-light text-[12px] sm:text-[12.5px] leading-relaxed max-w-[280px]"
                style={{ color: "rgba(255, 255, 255, 0.88)" }}
              >
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
