"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Women", href: "/women" },
  { label: "Men", href: "/men" },
  { label: "Brands", href: "/brands" },
  { label: "Categories", href: "/categories" },
  { label: "Corporate Gifting", href: "/corporate-gifting" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setSearchOpen(false);
      }
    };
    if (mobileOpen || searchOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileOpen, searchOpen]);

  return (
    <>
      {/*
        ── Announcement bar ──────────────────────────────────────────────────
        Compact vertical padding (py-1.5) matching slim proportions in PDF
      */}
      <div
        className="bg-[#0A0A0A] text-white text-center py-1.5 px-4
                   text-[11px] leading-tight tracking-normal font-[var(--font-montserrat)] font-light"
      >
        Complimentary Personalisation on Selected Luxury Gifts
      </div>

      {/*
        ── Main header ───────────────────────────────────────────────────────
        Slim, compact height (h-[54px] lg:h-[58px]) matching PDF proportions.
        Flex layout with explicit fixed minimum gap of 48px–64px (mx-12 lg:mx-14 xl:mx-16)
        between "Corporate Gifting" and the logo, and between the logo and "Search".
      */}
      <header className="sticky top-0 z-50 bg-white border-b border-[#E8E8E8]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 h-[54px] lg:h-[58px] flex items-center justify-between">

          {/* ── Left column: Navigation links ─────────────────────────────── */}
          <nav
            className="hidden lg:flex items-center gap-4 xl:gap-5 justify-start shrink-0 min-w-0"
            aria-label="Primary navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="
                  whitespace-nowrap shrink-0
                  font-[var(--font-jost)] font-light
                  text-[11px] xl:text-[11.5px] tracking-[0.1em] uppercase
                  text-[#0A0A0A] visited:text-[#0A0A0A] active:text-[#0A0A0A] focus:text-[#0A0A0A]
                  hover:text-[#9A9A9A]
                  transition-colors duration-200
                "
                style={{ color: "#0A0A0A" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/*
            ── Center: "ZELLINY" Logo ─────────────────────────────────────
            Explicit minimum gap of at least 48px to 64px on BOTH sides
            (mx-12 lg:mx-14 xl:mx-16) guarantees it never sits flush against
            "Corporate Gifting" on the left or "Search" on the right.
          */}
          <div className="flex items-center justify-center mx-0 lg:mx-12 xl:mx-16 shrink-0">
            <Link
              href="/"
              aria-label="Zelliny home"
              className="flex items-center justify-center"
            >
              <Image
                src="/HomeAssets/header-logo.png"
                alt="Zelliny"
                width={153}
                height={20}
                priority
                className="h-[20px] lg:h-[22px] w-auto object-contain shrink-0"
              />
            </Link>
          </div>

          {/* ── Right column: Utility icons & Search ──────────────────────── */}
          <div className="hidden lg:flex items-center gap-3.5 xl:gap-4.5 justify-end shrink-0 min-w-0">

            {/* 1. Search button with thin underline (bottom border) matching PDF (w=161px, h=1px) */}
            <button
              id="header-search-btn"
              aria-label="Search"
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-2 pb-1 border-b border-[#0A0A0A] hover:border-[#9A9A9A] transition-colors shrink-0 w-[150px] xl:w-[160px] text-left"
            >
              <Image
                src="/HomeAssets/icons/Search.svg"
                alt=""
                aria-hidden="true"
                width={14}
                height={14}
                className="shrink-0"
              />
              <span
                className="
                  whitespace-nowrap truncate
                  font-[var(--font-montserrat)] font-light
                  text-[11px] tracking-[0.03em] text-[#9A9A9A]
                "
              >
                Search brands, gifts…
              </span>
            </button>

            {/* 2. Thin vertical divider line between Search and EN | AR matching PDF (h=18px, w=1px) */}
            <div
              className="h-[18px] w-px bg-[#D4D4D4] shrink-0 mx-1"
              aria-hidden="true"
            />

            {/* EN | AR */}
            <div
              className="
                flex items-center gap-px
                font-[var(--font-jost)] font-light
                text-[11px] tracking-[0.06em]
                whitespace-nowrap shrink-0 px-1
              "
            >
              <span className="text-[#0A0A0A]">EN</span>
              <span className="mx-1 text-[#9A9A9A]">|</span>
              <span className="text-[#9A9A9A]">AR</span>
            </div>

            {/* Account */}
            <button
              aria-label="Account"
              className="hover:opacity-70 transition-opacity shrink-0 p-1"
            >
              <Image
                src="/HomeAssets/icons/account.svg"
                alt="Account"
                width={17}
                height={17}
              />
            </button>

            {/* Wishlist */}
            <button
              aria-label="Wishlist"
              className="hover:opacity-70 transition-opacity shrink-0 p-1"
            >
              <Image
                src="/HomeAssets/icons/wishlist.svg"
                alt="Wishlist"
                width={17}
                height={17}
              />
            </button>

            {/* Cart */}
            <button
              aria-label="Cart"
              className="hover:opacity-70 transition-opacity shrink-0 p-1"
            >
              <Image
                src="/HomeAssets/icons/cart.svg"
                alt="Cart"
                width={17}
                height={17}
              />
            </button>
          </div>

          {/* ── Mobile hamburger (< lg) ─────────────────────────────────── */}
          <button
            id="mobile-menu-btn"
            className="lg:hidden flex flex-col gap-[5px] p-2 ml-auto"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
          >
            <span className="block w-5 h-px bg-[#0A0A0A]" />
            <span className="block w-5 h-px bg-[#0A0A0A]" />
            <span className="block w-3 h-px bg-[#0A0A0A]" />
          </button>
        </div>
      </header>

      {/* ── Mobile drawer ────────────────────────────────────────────────── */}
      {mobileOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          className="fixed inset-0 z-[100] flex"
        >
          <div
            className="flex-1 bg-black/40"
            onClick={() => setMobileOpen(false)}
          />
          <div className="w-[80vw] max-w-xs bg-white h-full flex flex-col p-8 gap-6 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                aria-label="Zelliny home"
              >
                <Image
                  src="/HomeAssets/header-logo.png"
                  alt="Zelliny"
                  width={153}
                  height={20}
                  className="h-5 w-auto object-contain"
                />
              </Link>
              <button
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
                className="hover:opacity-60 transition-opacity"
              >
                <Image
                  src="/HomeAssets/icons/Close.svg"
                  alt=""
                  aria-hidden="true"
                  width={18}
                  height={18}
                />
              </button>
            </div>

            <nav className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="
                    font-[var(--font-jost)] font-light
                    text-[13px] tracking-[0.12em] uppercase
                    text-[#0A0A0A] border-b border-[#F0F0F0] pb-3
                  "
                  style={{ color: "#0A0A0A" }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4 mt-auto pt-6 border-t border-[#F0F0F0]">
              <button aria-label="Account">
                <Image
                  src="/HomeAssets/icons/account.svg"
                  alt=""
                  aria-hidden="true"
                  width={18}
                  height={18}
                />
              </button>
              <button aria-label="Wishlist">
                <Image
                  src="/HomeAssets/icons/wishlist.svg"
                  alt=""
                  aria-hidden="true"
                  width={18}
                  height={18}
                />
              </button>
              <button aria-label="Cart">
                <Image
                  src="/HomeAssets/icons/cart.svg"
                  alt=""
                  aria-hidden="true"
                  width={18}
                  height={18}
                />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Search overlay ──────────────────────────────────────────────── */}
      {searchOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Site Search"
          className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center p-8"
        >
          <button
            className="absolute top-6 right-6 hover:opacity-60 transition-opacity"
            onClick={() => setSearchOpen(false)}
            aria-label="Close search"
          >
            <Image
              src="/HomeAssets/icons/Close.svg"
              alt=""
              aria-hidden="true"
              width={20}
              height={20}
            />
          </button>
          <div className="w-full max-w-xl">
            <input
              autoFocus
              type="text"
              placeholder="Search brands, gifts…"
              className="w-full border-b-2 border-[#0A0A0A] bg-transparent pb-3 text-[18px]
                         font-[var(--font-montserrat)] tracking-wide outline-none
                         placeholder:text-[#9A9A9A]"
            />
          </div>
        </div>
      )}
    </>
  );
}
