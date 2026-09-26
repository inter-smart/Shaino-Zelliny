"use client";

import Image from "next/image";
import { useState } from "react";

export type Product = {
  id: string;
  name: string;
  price: string;
  priceStrike?: string;
  cta: string;
  images: string[];
};

export default function ProductCard({
  product,
  delay = 0,
}: {
  product: Product;
  delay?: number;
}) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const hasMultipleImages = product.images.length > 1;

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveIdx((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveIdx((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const setImageIndex = (index: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveIdx(index);
  };

  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted((prev) => !prev);
  };

  return (
    <div
      id={product.id}
      className="fade-up group flex flex-col"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Product image container */}
      <div
        className="relative overflow-hidden bg-[#F8F7F5] w-full"
        style={{ aspectRatio: "308 / 412" }}
      >
        {/* Product image slider */}
        {product.images.map((src, imgIdx) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              imgIdx === activeIdx
                ? "opacity-100 z-[1]"
                : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <Image
              src={src}
              alt={`${product.name} - view ${imgIdx + 1}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              loading={imgIdx === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}

        {/* Wishlist / favorite icon */}
        <button
          type="button"
          onClick={toggleWishlist}
          aria-label={
            isWishlisted
              ? `Remove ${product.name} from wishlist`
              : `Add ${product.name} to wishlist`
          }
          className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-[#0A0A0A] shadow-sm transition-all duration-200 hover:scale-110 focus:outline-none focus-visible:ring-1 focus-visible:ring-black"
        >
          <Image
            src="/HomeAssets/icons/Wishlist-Product.svg"
            alt=""
            aria-hidden="true"
            width={16}
            height={16}
            className={`transition-transform duration-200 ${
              isWishlisted ? "brightness-50" : ""
            }`}
          />
        </button>

        {/* Carousel controls for multi-image products with accessible keyboard focus */}
        {hasMultipleImages && (
          <>
            <button
              type="button"
              onClick={prevImage}
              aria-label={`Previous image for ${product.name}`}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-white/85 hover:bg-white text-[#0A0A0A] flex items-center justify-center opacity-0 group-hover:opacity-100 focus:opacity-100 focus-visible:opacity-100 focus:outline-none transition-opacity duration-200 shadow-sm text-sm"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={nextImage}
              aria-label={`Next image for ${product.name}`}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-white/85 hover:bg-white text-[#0A0A0A] flex items-center justify-center opacity-0 group-hover:opacity-100 focus:opacity-100 focus-visible:opacity-100 focus:outline-none transition-opacity duration-200 shadow-sm text-sm"
            >
              ›
            </button>

            {/* Indicator dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity duration-200 bg-white/70 backdrop-blur-sm px-2 py-1 rounded-full">
              {product.images.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={(e) => setImageIndex(dotIdx, e)}
                  aria-label={`Go to slide ${dotIdx + 1} for ${product.name}`}
                  className={`transition-all duration-200 rounded-full focus:outline-none ${
                    dotIdx === activeIdx
                      ? "w-3.5 h-1.5 bg-[#0A0A0A]"
                      : "w-1.5 h-1.5 bg-black/35 hover:bg-black/70"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Product info */}
      <div className="mt-4 space-y-1.5 flex flex-col items-start">
        <h3 className="font-[var(--font-jost)] font-light text-[#0A0A0A] text-[15px] sm:text-[16px] leading-snug tracking-normal">
          {product.name}
        </h3>

        {/* Prices: current price + discounted/strikethrough original price side-by-side */}
        <div className="flex items-center gap-2">
          <span className="font-[var(--font-montserrat)] text-[13px] sm:text-[14px] font-medium text-[#0A0A0A]">
            {product.price}
          </span>
          {product.priceStrike && (
            <span className="font-[var(--font-montserrat)] text-[12px] sm:text-[13px] text-[#9A9A9A] line-through">
              {product.priceStrike}
            </span>
          )}
        </div>

        {/* CTA button with matching underline styling */}
        <button
          type="button"
          aria-label={`${product.cta} — ${product.name}`}
          className="mt-1 font-[var(--font-jost)] font-normal text-[11px] sm:text-[12px] tracking-[0.14em] uppercase transition-colors duration-200 text-[#0A0A0A] border-b border-[#0A0A0A] pb-[2px] hover:text-[#9A9A9A] hover:border-[#9A9A9A]"
        >
          {product.cta}
        </button>
      </div>
    </div>
  );
}
