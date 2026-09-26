import Image from "next/image";
import Link from "next/link";

const houses = [
  {
    id: "burberry",
    name: "Burberry",
    src: "/HomeAssets/house_we_curate/house_we_curate_1.png",
    href: "/brands/burberry",
  },
  {
    id: "clarins",
    name: "Clarins",
    src: "/HomeAssets/house_we_curate/house_we_curate_2.png",
    href: "/brands/clarins",
  },
  {
    id: "cerruti",
    name: "Cerruti 1881",
    src: "/HomeAssets/house_we_curate/house_we_curate_3.png",
    href: "/brands/cerruti-1881",
  },
  {
    id: "boss",
    name: "Hugo Boss",
    src: "/HomeAssets/house_we_curate/house_we_curate_4.png",
    href: "/brands/hugo-boss",
  },
  {
    id: "guess",
    name: "Guess",
    src: "/HomeAssets/house_we_curate/house_we_curate_5.png",
    href: "/brands/guess",
  },
];

export default function HousesWeCurate() {
  return (
    <section
      id="houses-we-curate"
      className="py-14 sm:py-16 lg:py-20 px-6 lg:px-10 bg-[#FAFAF8] max-w-full"
      aria-labelledby="houses-heading"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Overline */}
        <p
          className="fade-up font-[var(--font-jost)] font-normal text-center tracking-[0.25em] uppercase mb-3 text-[11px] sm:text-[12px]"
          style={{ color: "#9A9A9A" }}
        >
          The Maisons
        </p>

        {/* Section heading */}
        <h2
          id="houses-heading"
          className="fade-up delay-100 font-[var(--font-jost)] font-light text-center tracking-[0.02em] text-[#0A0A0A] mb-12 lg:mb-16
                     text-[28px] sm:text-[36px] lg:text-[42px] xl:text-[44px]"
        >
          Houses we curate
        </h2>

        {/* 
          Brand logo row wrapped in a single elevated card container with soft shadow
          and thin 1px vertical divider lines between each logo cell matching PDF
        */}
        <div className="fade-scale delay-150 bg-white rounded-sm shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-[#ECEBE6]">
          <div className="grid grid-cols-2 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-[#EAE8E2]">
            {houses.map((house, i) => (
              <Link
                key={house.id}
                href={house.href}
                id={`house-${house.id}`}
                className="group flex items-center justify-center py-6 sm:py-8 lg:py-10 px-4 transition-colors hover:bg-neutral-50/50"
                style={{ transitionDelay: `${i * 60}ms` }}
                aria-label={house.name}
              >
                <div className="relative h-10 sm:h-12 lg:h-14 w-28 sm:w-32 lg:w-40">
                  <Image
                    src={house.src}
                    alt={house.name}
                    fill
                    sizes="160px"
                    className="object-contain transition-opacity duration-300 group-hover:opacity-60"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* View All Maisons CTA */}
        <div className="fade-up delay-250 mt-12 lg:mt-16 text-center">
          <Link
            href="/brands"
            id="view-all-maisons"
            className="font-[var(--font-jost)] font-normal tracking-[0.16em] text-[11px] sm:text-[12px] uppercase text-[#0A0A0A]
                       border-b border-[#0A0A0A] pb-[2px] hover:text-[#9A9A9A] hover:border-[#9A9A9A] transition-colors duration-200"
          >
            View All Maisons
          </Link>
        </div>
      </div>
    </section>
  );
}
