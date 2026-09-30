import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const body = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const heading = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BE Resort Mactan | Beachfront Boutique Resort in Lapu-Lapu City",
  description:
    "BE Resort Mactan offers modern beachfront accommodations, an infinity pool, and affordable luxury on the shores of Lapu-Lapu City, Cebu.",
  keywords: [
    "BE Resort Mactan",
    "Mactan resort",
    "Lapu-Lapu City hotel",
    "beach resort Cebu",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${body.variable} ${heading.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  );
}
