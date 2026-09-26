import type { Metadata } from "next";
import { Jost, Montserrat } from "next/font/google";
import "./globals.css";

// Both Jost and Montserrat are variable fonts — omit weight array to use the variable font file
const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zelliny — House of Luxury Gifting",
  description:
    "Zelliny curates the finest luxury gifts for every occasion. Discover premium fragrances, jewellery, watches, leather goods, and more — thoughtfully selected and beautifully presented.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "none",
      "max-snippet": -1,
    },
  },
};

import { DirectionProvider } from "../context/DirectionContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" className={`${jost.variable} ${montserrat.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var d=localStorage.getItem("zelliny_dir");if(d==="rtl"||d==="ltr"){document.documentElement.setAttribute("dir",d);}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-[#0A0A0A]">
        <DirectionProvider>
          {children}
        </DirectionProvider>
      </body>
    </html>
  );
}
