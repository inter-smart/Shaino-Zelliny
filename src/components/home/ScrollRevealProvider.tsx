"use client";

import { useEffect } from "react";

/**
 * Client component that attaches IntersectionObserver to all .fade-up / .fade-in elements
 * on the page, adding .visible when they enter the viewport.
 */
export default function ScrollRevealProvider() {
  useEffect(() => {
    const targets = document.querySelectorAll(".fade-up, .fade-in");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
