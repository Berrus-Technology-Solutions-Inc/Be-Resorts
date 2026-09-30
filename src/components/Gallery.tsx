"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { createPortal } from "react-dom";
import { ArrowDownRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { galleryImages } from "@/data/content";
import ScrollReveal from "./ScrollReveal";

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const lightboxRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const enjoyLetters = Array.from("ENJOY");
  const relaxLetters = Array.from("RELAX");

  useEffect(() => {
    if (activeIndex === null) {
      triggerRef.current?.focus();
      return;
    }

    const previousOverflow = document.body.style.overflow;
    closeButtonRef.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Tab") {
        const buttons = lightboxRef.current?.querySelectorAll<HTMLButtonElement>(
          "button:not([disabled])",
        );
        const firstButton = buttons?.[0];
        const lastButton = buttons?.[buttons.length - 1];

        if (event.shiftKey && document.activeElement === firstButton) {
          event.preventDefault();
          lastButton?.focus();
        } else if (!event.shiftKey && document.activeElement === lastButton) {
          event.preventDefault();
          firstButton?.focus();
        }
      }
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowRight") {
        setActiveIndex((current) =>
          current === null ? null : (current + 1) % galleryImages.length,
        );
      }
      if (event.key === "ArrowLeft") {
        setActiveIndex((current) =>
          current === null
            ? null
            : (current - 1 + galleryImages.length) % galleryImages.length,
        );
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex]);

  const lightbox = (
    <AnimatePresence>
      {activeIndex !== null && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Resort photo gallery"
          ref={lightboxRef}
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
          onClick={(event) => {
            if (event.target === event.currentTarget) setActiveIndex(null);
          }}
          className="fixed inset-0 z-[110] flex items-center justify-center bg-ocean-950/95 p-4 text-white backdrop-blur-sm sm:p-8"
        >
          <button
            type="button"
            aria-label="Close photo gallery"
            ref={closeButtonRef}
            onClick={() => setActiveIndex(null)}
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-8 sm:top-8"
          >
            <X size={21} />
          </button>

          <button
            type="button"
            aria-label="Previous photo"
            onClick={() =>
              setActiveIndex((activeIndex - 1 + galleryImages.length) % galleryImages.length)
            }
            className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:left-8"
          >
            <ChevronLeft size={22} />
          </button>

          <figure className="w-full max-w-6xl">
            <div className="relative h-[min(68svh,780px)] w-full">
              <Image
                key={galleryImages[activeIndex].src}
                src={galleryImages[activeIndex].src}
                alt={galleryImages[activeIndex].alt}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
            <figcaption className="mt-4 text-center text-sm text-white/75">
              {galleryImages[activeIndex].alt}
              <span className="ml-3 text-white/45">
                {activeIndex + 1} / {galleryImages.length}
              </span>
            </figcaption>
          </figure>

          <button
            type="button"
            aria-label="Next photo"
            onClick={() => setActiveIndex((activeIndex + 1) % galleryImages.length)}
            className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-8"
          >
            <ChevronRight size={22} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <section id="gallery" className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10">
        <div className="grid overflow-hidden rounded-sm bg-white shadow-soft lg:min-h-[620px] lg:grid-cols-[minmax(0,1fr)_minmax(340px,38%)]">
          <div className="relative min-h-[430px] overflow-hidden sm:min-h-[540px] lg:min-h-[620px]">
            <Image
              src="https://beresortmactan.com/wp-content/uploads/2024/10/home-page-1.jpg"
              alt="Aerial view of BE Resort Mactan beside the sea"
              fill
              sizes="(max-width: 1023px) 100vw, 62vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ocean-950/55 via-ocean-950/15 to-ocean-950/5" />

            <motion.a
              href="#gallery-photos"
              whileHover={prefersReducedMotion ? undefined : { y: -3 }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
              className="absolute bottom-6 left-6 z-10 block max-w-[calc(100%-3rem)] bg-white px-5 py-4 text-ocean-900 shadow-soft transition-colors hover:bg-sand-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:bottom-10 sm:left-10 sm:px-7 sm:py-5 lg:bottom-auto lg:left-[9%] lg:top-1/2 lg:-translate-y-1/2"
            >
              <span className="block font-heading text-lg font-semibold sm:text-xl">
                Photo Gallery
              </span>
              <span className="mt-1 block text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-ocean-600 sm:text-xs">
                Memorable Collections
              </span>
            </motion.a>
          </div>

          <div className="flex flex-col justify-center px-6 py-10 sm:px-10 sm:py-12 lg:px-8 xl:px-12">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-ocean-500 sm:text-sm">
              BE Resort Mactan · Cebu
            </p>
            <h2 className="mt-6 font-heading text-[clamp(4rem,9vw,7.5rem)] font-semibold uppercase leading-[0.78] text-ocean-900 sm:mt-8 lg:text-[clamp(4.25rem,7vw,7rem)]">
              <span className="block whitespace-nowrap" aria-label="Enjoy">
                {enjoyLetters.map((letter, index) => (
                  <motion.span
                    key={`enjoy-${index}`}
                    aria-hidden="true"
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 28, filter: "blur(6px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: false, amount: 0.7 }}
                    transition={{ duration: prefersReducedMotion ? 0 : 0.55, delay: prefersReducedMotion ? 0 : index * 0.045 }}
                    className="inline-block"
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
              <span className="mt-3 block whitespace-nowrap text-palm-600" aria-label="Relax">
                {relaxLetters.map((letter, index) => (
                  <motion.span
                    key={`relax-${index}`}
                    aria-hidden="true"
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 28, filter: "blur(6px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: false, amount: 0.7 }}
                    transition={{ duration: prefersReducedMotion ? 0 : 0.55, delay: prefersReducedMotion ? 0 : 0.18 + index * 0.045 }}
                    className="inline-block"
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            </h2>

            <p className="mt-7 max-w-sm text-sm leading-relaxed text-ocean-700 sm:mt-9 sm:text-base">
              A little island time goes a long way. Take a closer look at the
              moments, spaces, and sea views waiting at BE Resort.
            </p>

            <a
              href="#gallery-photos"
              className="mt-7 inline-flex w-fit items-center gap-3 border-b border-ocean-300 pb-2 text-xs font-semibold uppercase tracking-[0.16em] text-ocean-900 transition-colors hover:border-palm-600 hover:text-palm-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-palm-600 sm:mt-9"
            >
              Explore the collection
              <ArrowDownRight size={17} />
            </a>
          </div>
        </div>
      </div>

      <div id="gallery-photos" className="mx-auto mt-16 max-w-7xl scroll-mt-24 px-6 sm:mt-20 lg:px-10">
        <ScrollReveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-palm-600 sm:text-sm">
            Memorable experiences
          </p>
          <h2 className="mt-4 text-balance font-heading text-3xl font-semibold leading-tight text-ocean-900 sm:text-4xl lg:text-5xl">
            Take a closer look
          </h2>
        </ScrollReveal>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-4 md:grid-cols-3">
          {galleryImages.map((image, i) => (
            <ScrollReveal
              key={image.src}
              delay={i * 0.06}
              className={`overflow-hidden rounded-2xl ${
                i === 0 ? "col-span-2 row-span-2 h-72 md:h-full" : "h-40 md:h-56"
              }`}
            >
              <button
                type="button"
                aria-label={`Open photo: ${image.alt}`}
                onClick={(event) => {
                  triggerRef.current = event.currentTarget;
                  setActiveIndex(i);
                }}
                className="group relative block h-full w-full overflow-hidden rounded-2xl text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-palm-500"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes={i === 0 ? "(max-width: 767px) 100vw, 66vw" : "(max-width: 767px) 50vw, 33vw"}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-0 flex items-end bg-gradient-to-t from-ocean-950/65 via-transparent to-transparent p-4 text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                  View photo
                </span>
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>
      {typeof document !== "undefined" && createPortal(lightbox, document.body)}
    </section>
  );
}
