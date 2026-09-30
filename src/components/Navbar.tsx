"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { ChevronDown, Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";

const NAV_LINKS = [
  { label: "About BE", href: "#about" },
  { label: "The Resort", href: "#resort" },
  { label: "Rooms", href: "#rooms" },
  { label: "Facilities", href: "#facilities" },
  { label: "Events", href: "#events" },
  { label: "Offers", href: "#offers" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const LANGUAGES = ["EN", "KR", "CN", "JP"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [language, setLanguage] = useState("EN");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("");
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map(({ href }) => document.querySelector(href)).filter(
      (section): section is Element => section !== null,
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveHref(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-25% 0px -65% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const textColor = scrolled ? "text-ocean-900" : "text-white";

  return (
    <>
      <motion.header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-soft py-3"
            : "bg-transparent py-6"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
          <a href="#top" className="flex items-center gap-3">
            <Image
              src="/images/be-logo.png"
              alt="BE Resort Mactan logo"
              width={44}
              height={44}
              className={`h-10 w-10 object-contain transition ${
                scrolled ? "" : "brightness-0 invert"
              }`}
              priority
            />
            <span
              className={`font-heading text-lg font-semibold tracking-wide ${textColor}`}
            >
              BE RESORT <span className="text-palm-500">MACTAN</span>
            </span>
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="group relative">
                <a
                  href={link.href}
                  aria-current={activeHref === link.href ? "location" : undefined}
                  className={`text-sm font-medium tracking-wide transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-palm-500 ${
                    activeHref === link.href
                      ? scrolled
                        ? "text-palm-700"
                        : "text-palm-300"
                      : textColor
                  }`}
                >
                  {link.label}
                </a>
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-palm-500 transition-all duration-300 group-hover:w-full" />
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-4 lg:flex">
            <div className="relative">
              <button
                onClick={() => setLangOpen((v) => !v)}
                className={`flex items-center gap-1 text-sm font-medium ${textColor}`}
              >
                {language}
                <ChevronDown size={14} />
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.ul
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-3 w-24 overflow-hidden rounded-xl bg-white py-1 text-ocean-900 shadow-soft"
                  >
                    {LANGUAGES.map((lang) => (
                      <li key={lang}>
                        <button
                          onClick={() => {
                            setLanguage(lang);
                            setLangOpen(false);
                          }}
                          className="block w-full px-4 py-2 text-left text-sm hover:bg-sand-100"
                        >
                          {lang}
                        </button>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>

            <a
              href="#booking"
              className="rounded-full bg-palm-500 px-6 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-palm-600 active:scale-95"
            >
              Book Now
            </a>
          </div>

          <button
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileOpen(true)}
            className={`flex h-11 w-11 items-center justify-center rounded-full transition hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-palm-500 lg:hidden ${textColor}`}
          >
            <Menu size={28} />
          </button>
        </nav>
        <motion.div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-palm-500"
          style={{ scaleX: scrollYProgress }}
        />
      </motion.header>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={NAV_LINKS}
      />
    </>
  );
}
