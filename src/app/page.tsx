import Header from "@/components/home/Header";
import HeroBanner from "@/components/home/HeroBanner";
import ShopByCategory from "@/components/home/ShopByCategory";
import HouseOfZelliny from "@/components/home/HouseOfZelliny";
import CuratedForYou from "@/components/home/CuratedForYou";
import LuxuryThoughtfullySelected from "@/components/home/LuxuryThoughtfullySelected";
import HousesWeCurate from "@/components/home/HousesWeCurate";
import LuxuryGiftingRelationships from "@/components/home/LuxuryGiftingRelationships";
import EveryGiftCrafted from "@/components/home/EveryGiftCrafted";
import PersonalService from "@/components/home/PersonalService";
import Footer from "@/components/home/Footer";
import ScrollRevealProvider from "@/components/home/ScrollRevealProvider";

export default function HomePage() {
  return (
    <>
      {/* Wires scroll-based fade animations */}
      <ScrollRevealProvider />

      {/* 1. Header (sticky, with announcement bar) */}
      <Header />

      <main id="main-content">
        {/* 2. Hero Banner — full-width video placeholder */}
        <HeroBanner />

        {/* 3. Shop by Category — 8 items */}
        <ShopByCategory />

        {/* 4. House of Zelliny / "One house for every occasion" */}
        <HouseOfZelliny />

        {/* 5. Curated for You — 4 products */}
        <CuratedForYou />

        {/* 6. Luxury, Thoughtfully Selected — full-width image */}
        <LuxuryThoughtfullySelected />

        {/* 7. Houses We Curate — brand logos */}
        <HousesWeCurate />

        {/* 8. Luxury Gifting for Relationships — horizontal accordion */}
        <LuxuryGiftingRelationships />

        {/* 9. Every Gift, Crafted — 3 packaging options */}
        <EveryGiftCrafted />

        {/* 10. Personal Service / Concierge */}
        <PersonalService />

        {/* Small white strip just above footer */}
        <div className="w-full h-5 sm:h-7 bg-white" aria-hidden="true" />
      </main>

      {/* 11. Footer */}
      <Footer />
    </>
  );
}
