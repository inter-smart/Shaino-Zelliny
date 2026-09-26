"use client";

import { useState } from "react";
import ProductCard, { Product } from "./ProductCard";

const products: Product[] = [
  {
    id: "product-1",
    name: "Embroidered Baguette Bag",
    price: "265 EGP",
    priceStrike: "265 EGP",
    cta: "Add to Bag",
    images: [
      "/HomeAssets/curated_for_you/curated_for_you_1.png",
      "/HomeAssets/Hover 2.jpg",
    ],
  },
  {
    id: "product-2",
    name: "Burberry Signatures",
    price: "Price on request",
    cta: "Enquire Now",
    images: ["/HomeAssets/curated_for_you/curated_for_you_2.png"],
  },
  {
    id: "product-3",
    name: "S.T. Dupont Double Cigar Case",
    price: "265 EGP",
    priceStrike: "265 EGP",
    cta: "Enquire Now",
    images: [
      "/HomeAssets/curated_for_you/curated_for_you_3.jpg",
      "/HomeAssets/Hover 1.jpg",
    ],
  },
  {
    id: "product-4",
    name: "Guess Quinn Ice Blue Dial",
    price: "Price on request",
    cta: "Enquire Now",
    images: ["/HomeAssets/curated_for_you/curated_for_you_4.png"],
  },
];

export default function CuratedForYou() {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const totalProducts = products.length;

  const handlePrev = () => {
    setCarouselIndex((prev) => (prev > 0 ? prev - 1 : totalProducts - 1));
  };

  const handleNext = () => {
    setCarouselIndex((prev) => (prev < totalProducts - 1 ? prev + 1 : 0));
  };

  return (
    <section
      id="curated-for-you"
      className="pt-6 sm:pt-8 lg:pt-10 pb-14 sm:pb-16 lg:pb-20 px-6 lg:px-10 max-w-[1440px] mx-auto"
      aria-labelledby="curated-heading"
    >
      {/* Heading: Jost font-light, tracking-[0.02em], matching PDF typography */}
      <h2
        id="curated-heading"
        className="fade-up font-[var(--font-jost)] font-light text-center tracking-[0.02em] text-[#0A0A0A] mb-10 lg:mb-14
                   text-[28px] sm:text-[36px] lg:text-[42px] xl:text-[44px]"
      >
        Curated for You
      </h2>

      {/* 4-col desktop, 2-col tablet, 1-col mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
        {products.map((product, i) => (
          <ProductCard
            key={product.id}
            product={product}
            delay={i * 80}
          />
        ))}
      </div>

      {/* 
        Pagination arrows + scroll progress indicator bar matching PDF (y=4568, x=641..794, track width=118px)
      */}
      <div className="flex items-center justify-center gap-4 sm:gap-5 mt-12 sm:mt-14">
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous products"
          className="text-[22px] sm:text-[24px] text-[#9A9A9A] hover:text-[#0A0A0A] transition-colors leading-none p-1.5 select-none"
        >
          ‹
        </button>

        {/* 118px scroll progress bar matching PDF op 1708 (w=118px, h=1px) & op 1714 (thumb=24px) */}
        <div className="relative w-[118px] h-[1.5px] bg-[#E5E5E5] rounded-full overflow-hidden">
          <div
            className="absolute top-0 bottom-0 bg-[#0A0A0A] rounded-full transition-all duration-300 ease-out"
            style={{
              width: "25%",
              left: `${carouselIndex * 25}%`,
            }}
          />
        </div>

        <button
          type="button"
          onClick={handleNext}
          aria-label="Next products"
          className="text-[22px] sm:text-[24px] text-[#9A9A9A] hover:text-[#0A0A0A] transition-colors leading-none p-1.5 select-none"
        >
          ›
        </button>
      </div>
    </section>
  );
}
