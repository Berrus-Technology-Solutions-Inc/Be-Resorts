"use client";

import Image from "next/image";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

const SITEMAP = [
  { label: "About BE", href: "#about" },
  { label: "The Resort", href: "#resort" },
  { label: "Rooms", href: "#rooms" },
  { label: "Facilities", href: "#facilities" },
  { label: "Events", href: "#events" },
  { label: "Offers", href: "#offers" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-ocean-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/be-logo.png"
                alt="BE Resort Mactan logo"
                width={40}
                height={40}
                className="h-10 w-10 object-contain brightness-0 invert"
              />
              <span className="font-heading text-lg font-semibold">
                BE RESORT MACTAN
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              Beachfront boutique resort in Lapu-Lapu City, Cebu &mdash;
              affordable luxury with an unmistakable island spirit.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#" aria-label="Facebook" className="text-white/70 transition hover:text-palm-400">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="text-white/70 transition hover:text-palm-400">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-white/70 transition hover:text-palm-400">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-base font-semibold">Sitemap</h4>
            <ul className="mt-4 space-y-3">
              {SITEMAP.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/70 transition hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-base font-semibold">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>Punta Engaño Road, Lapu-Lapu City, Cebu</li>
              <li>+63 917 000 0000</li>
              <li>hello@beresortmactan.com</li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-base font-semibold">Island Updates</h4>
            <p className="mt-4 text-sm text-white/70">
              Ask our team about resort news and upcoming offers.
            </p>
            <a
              href="mailto:hello@beresortmactan.com?subject=Island%20updates"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-palm-300 underline-offset-4 transition hover:text-white hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-palm-300"
            >
              <Mail size={16} />
              Email the resort
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/60 md:flex-row">
          <p>&copy; {new Date().getFullYear()} BE Resort Mactan. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
