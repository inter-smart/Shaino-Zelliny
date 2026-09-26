import Image from "next/image";
import Link from "next/link";

export default function PersonalService() {
  return (
    <section
      id="personal-service"
      className="relative w-full overflow-hidden bg-[#0A0A0A] block m-0 p-0"
      style={{ aspectRatio: "1440 / 627", minHeight: "360px" }}
      aria-labelledby="concierge-heading"
    >
      {/* Full-bleed background image with subtle dark overlay */}
      <Image
        src="/HomeAssets/personal_service.jpg"
        alt="The Zelliny Concierge — a personal service, start to finish"
        fill
        sizes="100vw"
        className="object-cover object-center fade-in"
      />
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      {/* 
        Overlay text — positioned in lower third (approx. 65-70% space above, 30-35% below)
        matching design-reference/homepage.pdf
      */}
      <div className="absolute inset-x-0 bottom-[12%] sm:bottom-[14%] lg:bottom-[15%] z-10 flex flex-col items-center justify-end text-center px-6 pointer-events-none">
        <p className="fade-up font-[var(--font-montserrat)] font-light tracking-[0.3em] text-white/80 uppercase mb-3 text-[10px] sm:text-[11px]">
          The Zelliny Concierge
        </p>

        <h2
          id="concierge-heading"
          className="fade-up delay-100 font-[var(--font-jost)] font-light tracking-[0.02em] text-white
                     text-[24px] sm:text-[34px] lg:text-[42px] xl:text-[44px] leading-tight mb-4 sm:mb-6"
        >
          A personal service, start to finish
        </h2>

        {/* 
          Plain text with underline beneath it (no background fill, no button box)
          matching design-reference/homepage.pdf
        */}
        <Link
          href="/concierge"
          id="speak-with-concierge"
          className="pointer-events-auto fade-up delay-200 inline-block
                     font-[var(--font-jost)] font-normal tracking-[0.18em] text-[11px] sm:text-[12px]
                     text-white uppercase border-b border-white pb-[2px]
                     hover:opacity-80 transition-opacity"
          style={{ color: "#ffffff", borderColor: "#ffffff", borderBottomWidth: "1px", borderBottomStyle: "solid" }}
        >
          Speak With Our Concierge
        </Link>
      </div>
    </section>
  );
}
