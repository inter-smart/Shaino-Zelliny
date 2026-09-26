import Image from "next/image";
import Link from "next/link";
import NewsletterForm from "./NewsletterForm";

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "Brand Story", href: "/brand-story" },
  { label: "House of Zelliny", href: "/house-of-zelliny" },
  { label: "Categories", href: "/categories" },
  { label: "Brands", href: "/brands" },
  { label: "Corporate Gifting", href: "/corporate-gifting" },
];

const categorySubColumn1 = [
  { label: "Fragrance", href: "/categories/fragrance" },
  { label: "Beauty", href: "/categories/beauty" },
  { label: "Jewellery", href: "/categories/jewellery" },
  { label: "Watches", href: "/categories/watches" },
  { label: "Bags", href: "/categories/bags" },
  { label: "Leather Goods", href: "/categories/leather-goods" },
];

const categorySubColumn2 = [
  { label: "Writing Instruments", href: "/categories/writing-instruments" },
  { label: "Smoking Accessories", href: "/categories/smoking-accessories" },
];

const contactLinks = [
  { label: "Contact Us", href: "/contact" },
  { label: "WhatsApp Us", href: "https://wa.me/" },
];

export default function Footer() {
  return (
    <footer
      id="site-footer"
      className="bg-[#0A0A0A] text-white pt-20 lg:pt-28 pb-8"
      aria-label="Site footer"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">

          {/* Column 1 — Explore (lg:col-span-2) */}
          <div className="fade-up lg:col-span-2">
            <h3 className="font-[var(--font-montserrat)] font-light text-[#9A9A9A] text-[12px] sm:text-[13px] mb-4 tracking-[0.08em] uppercase">
              Explore
            </h3>
            <ul className="flex flex-col gap-2.5">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-[var(--font-jost)] font-normal text-white text-[13px] sm:text-[14px] tracking-normal hover:text-[#9A9A9A] transition-colors duration-200"
                    style={{ color: "#ffffff" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 — Categories with 2 sub-columns matching PDF (lg:col-span-4) */}
          <div className="fade-up delay-100 lg:col-span-4">
            <h3 className="font-[var(--font-montserrat)] font-light text-[#9A9A9A] text-[12px] sm:text-[13px] mb-4 tracking-[0.08em] uppercase">
              Categories
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <ul className="flex flex-col gap-2.5">
                {categorySubColumn1.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-[var(--font-jost)] font-normal text-white text-[13px] sm:text-[14px] tracking-normal hover:text-[#9A9A9A] transition-colors duration-200"
                      style={{ color: "#ffffff" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col gap-2.5">
                {categorySubColumn2.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-[var(--font-jost)] font-normal text-white text-[13px] sm:text-[14px] tracking-normal hover:text-[#9A9A9A] transition-colors duration-200"
                      style={{ color: "#ffffff" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3 — Contact & Follow Us (lg:col-span-2) */}
          <div className="fade-up delay-150 lg:col-span-2">
            <h3 className="font-[var(--font-montserrat)] font-light text-[#9A9A9A] text-[12px] sm:text-[13px] mb-4 tracking-[0.08em] uppercase">
              Contact
            </h3>
            <ul className="flex flex-col gap-2.5 mb-8">
              {contactLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-[var(--font-jost)] font-normal text-white text-[13px] sm:text-[14px] tracking-normal hover:text-[#9A9A9A] transition-colors duration-200"
                    style={{ color: "#ffffff" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Follow Us */}
            <h4 className="font-[var(--font-montserrat)] font-light text-[#9A9A9A] text-[12px] sm:text-[13px] mb-4 tracking-[0.08em] uppercase">
              Follow Us
            </h4>
            <div className="flex items-center gap-4">
              <Link
                href="https://instagram.com"
                aria-label="Instagram"
                className="opacity-70 hover:opacity-100 transition-opacity"
              >
                <Image
                  src="/HomeAssets/icons/Insta.svg"
                  alt="Instagram"
                  width={18}
                  height={18}
                />
              </Link>
              <Link
                href="https://facebook.com"
                aria-label="Facebook"
                className="opacity-70 hover:opacity-100 transition-opacity"
              >
                <Image
                  src="/HomeAssets/icons/facebook.svg"
                  alt="Facebook"
                  width={18}
                  height={18}
                />
              </Link>
              <Link
                href="https://linkedin.com"
                aria-label="LinkedIn"
                className="opacity-70 hover:opacity-100 transition-opacity"
              >
                <Image
                  src="/HomeAssets/icons/linkedIn.svg"
                  alt="LinkedIn"
                  width={18}
                  height={18}
                />
              </Link>
            </div>
          </div>

          {/* Column 4 — Logo & Newsletter (lg:col-span-4) */}
          <div className="fade-up delay-200 lg:col-span-4">
            <div className="mb-6">
              <Image
                src="/HomeAssets/footer-logo.png"
                alt="Zelliny"
                width={184}
                height={22}
                className="h-6 w-auto object-contain"
              />
            </div>
            <h3 className="font-[var(--font-montserrat)] font-light text-[#9A9A9A] text-[12px] sm:text-[13px] mb-2 tracking-[0.08em] uppercase">
              Newsletter
            </h3>
            <p
              className="font-[var(--font-jost)] font-semibold text-white uppercase text-[9px] sm:text-[10px] xl:text-[10.5px] tracking-normal whitespace-nowrap mb-4"
              style={{ color: "#ffffff" }}
            >
              Inspire me with all the latest Zelliny news
            </p>

            {/* Newsletter form: bordered rectangular box with attached solid white CONFIRM button */}
            <NewsletterForm />
          </div>
        </div>

        {/* Bottom bar — inline left-aligned legal text matching PDF */}
        <div className="fade-in delay-250 py-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] sm:text-[12px] font-[var(--font-montserrat)] font-light text-[#9A9A9A]">
          <span>© 2026 ZELLINY</span>
          <span>·</span>
          <span>All rights reserved</span>
          <span>·</span>
          <Link
            href="/terms"
            className="hover:text-white transition-colors duration-200"
          >
            Terms and Conditions
          </Link>
          <span>·</span>
          <Link
            href="/privacy"
            className="hover:text-white transition-colors duration-200"
          >
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}
