"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <form
      id="newsletter-form"
      className="flex items-stretch border border-white/40 focus-within:border-white transition-colors w-full"
      onSubmit={handleSubmit}
    >
      <input
        id="newsletter-email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={submitted ? "Subscribed!" : "Email*"}
        required
        aria-label="Email address for newsletter"
        className="flex-1 min-w-0 bg-transparent text-white placeholder:text-[#9A9A9A] text-[12px] sm:text-[13px] font-[var(--font-montserrat)] font-light px-3.5 py-2.5 outline-none"
      />
      <button
        type="submit"
        id="newsletter-submit"
        className="bg-white text-[#0A0A0A] font-[var(--font-jost)] font-medium text-[11px] sm:text-[12px] tracking-[0.16em] uppercase px-5 py-2.5 hover:bg-neutral-200 transition-colors whitespace-nowrap shrink-0 border-l border-white"
        style={{ backgroundColor: "#ffffff", color: "#0A0A0A" }}
      >
        {submitted ? "CONFIRMED" : "CONFIRM"}
      </button>
    </form>
  );
}
