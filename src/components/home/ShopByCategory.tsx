import Image from "next/image";
import Link from "next/link";

// ─── Row 1 & 2 — tall portrait tiles (3 per row) ───────────────────────────
const portraitRows = [
  [
    {
      id: "fragrance",
      label: "Fragrance",
      src: "/HomeAssets/shop_by_category/shop_by_category_fragarance.jpg",
      href: "/categories/fragrance",
    },
    {
      id: "beauty",
      label: "Beauty",
      src: "/HomeAssets/shop_by_category/shop_by_category_beauty.jpg",
      href: "/categories/beauty",
    },
    {
      id: "jewellery",
      label: "Jewellery",
      src: "/HomeAssets/shop_by_category/shop_by_category_jewellery.png",
      href: "/categories/jewellery",
    },
  ],
  [
    {
      id: "watches",
      label: "Watches",
      src: "/HomeAssets/shop_by_category/shop_by_category_watches.png",
      href: "/categories/watches",
    },
    {
      id: "bags",
      label: "Bags",
      src: "/HomeAssets/shop_by_category/shop_by_category_bags.png",
      href: "/categories/bags",
    },
    {
      id: "leather",
      label: "Leather Goods",
      src: "/HomeAssets/shop_by_category/shop_by_category_leather.jpg",
      href: "/categories/leather-goods",
    },
  ],
];

// ─── Row 3 — wider landscape tiles (2 per row, each half-width) ─────────────
const landscapeRow = [
  {
    id: "writing",
    label: "Writing Instruments",
    src: "/HomeAssets/shop_by_category/shop_by_category_writing.jpg",
    href: "/categories/writing-instruments",
  },
  {
    id: "smoking",
    label: "Smoking Accessories",
    src: "/HomeAssets/shop_by_category/shop_by_category_smoking.jpg",
    href: "/categories/smoking-accessories",
  },
];

/** Shared card — label uses CSS letter-spacing only, never character-spaced strings */
function CategoryCard({
  id,
  label,
  src,
  href,
  ratio,
  sizes,
  delay,
}: {
  id: string;
  label: string;
  src: string;
  href: string;
  ratio: string;
  sizes: string;
  delay: number;
}) {
  return (
    <Link
      href={href}
      id={`category-${id}`}
      className="fade-up group relative block overflow-hidden"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Image at specified aspect ratio */}
      <div className="relative w-full" style={{ aspectRatio: ratio }}>
        <Image
          src={src}
          alt={label}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
      </div>

      {/*
        Label — sits below the image on the plain white background.
        No background box. Single colour: #0A0A0A. CSS letter-spacing only.
      */}
      <div className="pt-3 pb-1 px-2 text-center bg-white">
        <span
          className="
            font-[var(--font-jost)] font-light
            text-[#0A0A0A] group-hover:text-[#9A9A9A]
            uppercase tracking-[0.18em]
            text-[10px] sm:text-[11px] lg:text-[12px]
            transition-colors duration-200
            whitespace-nowrap
          "
        >
          {label}
        </span>
      </div>
    </Link>
  );
}

export default function ShopByCategory() {
  return (
    <section
      id="shop-category"
      className="pt-14 sm:pt-16 lg:pt-20 pb-10 sm:pb-12 lg:pb-14 px-6 lg:px-10 max-w-[1440px] mx-auto"
      aria-labelledby="shop-category-heading"
    >
      {/*
        Overline — "THE COLLECTION" belongs above this heading per PDF.
      */}
      <p
        className="fade-up font-[var(--font-jost)] font-normal text-center tracking-[0.25em] uppercase mb-3 text-[11px] sm:text-[12px]"
        style={{ color: "#9A9A9A" }}
      >
        The Collection
      </p>

      {/*
        Heading — Jost, font-light (300), sentence case matching PDF.
        PDF renders this at ~44px with tight tracking.
      */}
      <h2
        id="shop-category-heading"
        className="fade-up delay-100 font-[var(--font-jost)] font-light text-center
                   tracking-[0.02em] text-[#0A0A0A]
                   text-[28px] sm:text-[36px] lg:text-[42px] xl:text-[44px]
                   mb-12 lg:mb-16"
      >
        Shop by Category
      </h2>

      <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6">

        {/* ── Rows 1 & 2 — 3-column portrait grids ── */}
        {portraitRows.map((row, rowIdx) => (
          <div
            key={rowIdx}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6"
          >
            {row.map((cat, colIdx) => (
              <CategoryCard
                key={cat.id}
                {...cat}
                ratio="3/4"
                sizes="(max-width: 640px) 100vw, 33vw"
                delay={(rowIdx * 3 + colIdx) * 60}
              />
            ))}
          </div>
        ))}

        {/* ── Row 3 — 2-column landscape grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
          {landscapeRow.map((cat, colIdx) => (
            <CategoryCard
              key={cat.id}
              {...cat}
              ratio="16/9"
              sizes="(max-width: 640px) 100vw, 50vw"
              delay={(6 + colIdx) * 60}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
