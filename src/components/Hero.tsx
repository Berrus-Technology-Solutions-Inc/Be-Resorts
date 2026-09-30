"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Pause, Play } from "lucide-react";

const SLIDES = [
  {
    src: "/images/hero-resort.jpg",
    alt: "BE Resort Mactan beachfront at dusk",
  },
  {
    src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1920&auto=format&fit=crop",
    alt: "Infinity pool overlooking the ocean",
  },
  {
    src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1920&auto=format&fit=crop",
    alt: "Private beach loungers",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (isPaused || isHovered || isFocused || prefersReducedMotion) return;

    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isFocused, isHovered, isPaused, prefersReducedMotion]);

  return (
    <section
      id="top"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocusCapture={() => setIsFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setIsFocused(false);
        }
      }}
      className="relative flex h-[100svh] min-h-[600px] w-full items-center justify-center overflow-hidden sm:min-h-[640px]"
    >
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={SLIDES[index].src}
            alt={SLIDES[index].alt}
            fill
            sizes="100vw"
            priority={index === 0}
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Elegant dark vignette scrim */}
      <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/80 via-ocean-900/30 to-ocean-900/50" />
      <div className="absolute inset-0 bg-black/10" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center text-white">
        <motion.p
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.7, delay: prefersReducedMotion ? 0 : 0.2 }}
          className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-sand-200 sm:text-sm sm:tracking-[0.3em]"
        >
          Lapu-Lapu City &middot; Mactan Island &middot; Cebu
        </motion.p>

        <h1 className="font-heading text-balance text-4xl font-semibold leading-tight sm:text-6xl md:text-7xl">
          <motion.span
            initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.8, delay: prefersReducedMotion ? 0 : 0.25 }}
            className="block"
          >
            BE RESORT
          </motion.span>
          <motion.span
            initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.8, delay: prefersReducedMotion ? 0 : 0.42 }}
            className="block text-palm-300"
          >
            MACTAN
          </motion.span>
        </h1>

        <motion.p
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.8, delay: prefersReducedMotion ? 0 : 0.5 }}
          className="mt-5 max-w-2xl text-balance text-sm font-light leading-relaxed text-white/90 sm:mt-6 sm:text-lg"
        >
          Beachfront accommodations with a youthful, boutique spirit &mdash;
          where affordable luxury meets the seaside beauty of Lapu-Lapu City.
        </motion.p>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.8, delay: prefersReducedMotion ? 0 : 0.65 }}
          className="mt-10"
        >
          <a
            href="#booking"
            className="group relative overflow-hidden rounded-full border border-white/80 px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white transition active:scale-95"
          >
            <span className="absolute inset-0 -z-10 origin-left scale-x-0 bg-white transition-transform duration-500 group-hover:scale-x-100" />
            <span className="transition-colors duration-500 group-hover:text-ocean-900">
              Check Availability
            </span>
          </a>
        </motion.div>
      </div>

      {/* Carousel indicators */}
      <div className="absolute bottom-28 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1 sm:bottom-36 sm:gap-2">
        {SLIDES.map((slide, slideIndex) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Show slide ${slideIndex + 1}: ${slide.alt}`}
            aria-current={slideIndex === index ? "true" : undefined}
            onClick={() => setIndex(slideIndex)}
            className="flex h-11 w-11 items-center justify-center rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <span
              className={`h-1.5 rounded-full transition-all duration-500 ${
                slideIndex === index ? "w-8 bg-white" : "w-3 bg-white/50"
              }`}
            />
          </button>
        ))}
      </div>

      <button
        type="button"
        aria-label={isPaused ? "Play hero slideshow" : "Pause hero slideshow"}
        aria-pressed={isPaused}
        onClick={() => setIsPaused((paused) => !paused)}
        className="absolute bottom-28 right-6 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-ocean-900/40 text-white backdrop-blur-sm transition hover:bg-ocean-900/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:bottom-36 sm:right-10"
      >
        {isPaused ? <Play size={16} /> : <Pause size={16} />}
      </button>
    </section>
  );
}
