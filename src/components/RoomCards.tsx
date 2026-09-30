"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { rooms } from "@/data/rooms";
import ScrollReveal from "./ScrollReveal";

export default function RoomCards() {
  const roomsStripRef = useRef<HTMLDivElement>(null);

  return (
    <section id="rooms" className="bg-sand-50 py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-end justify-between gap-4">
          <ScrollReveal className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-palm-600">
              Rooms & Accommodations
            </p>
            <h2 className="mt-4 text-balance font-heading text-3xl font-semibold leading-tight text-ocean-900 sm:text-4xl lg:text-5xl">
              Spaces designed for rest and reconnection
            </h2>
          </ScrollReveal>
          <div className="hidden flex-shrink-0 gap-2 sm:flex lg:hidden">
            <button
              type="button"
              aria-label="Scroll to previous rooms"
              onClick={() => roomsStripRef.current?.scrollBy({ left: -320, behavior: "smooth" })}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ocean-200 text-ocean-900 transition hover:border-ocean-900 hover:bg-ocean-900 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-palm-500"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              aria-label="Scroll to next rooms"
              onClick={() => roomsStripRef.current?.scrollBy({ left: 320, behavior: "smooth" })}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ocean-200 text-ocean-900 transition hover:border-ocean-900 hover:bg-ocean-900 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-palm-500"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div
          ref={roomsStripRef}
          role="region"
          aria-label="Room types"
          tabIndex={0}
          className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-palm-500 sm:mt-14 sm:gap-6 lg:grid lg:grid-cols-4 lg:overflow-visible lg:snap-none"
        >
          {rooms.map((room, i) => (
            <ScrollReveal
              key={room.slug}
              delay={i * 0.1}
              className="min-w-[calc(100vw-3rem)] flex-shrink-0 snap-start sm:min-w-[280px] lg:min-w-0"
            >
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="group relative h-[380px] overflow-hidden rounded-3xl shadow-soft sm:h-[420px]"
              >
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1023px) 60vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/90 via-ocean-900/10 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <p className="text-xs font-semibold uppercase tracking-widest text-sand-200">
                    From ₱{room.price.toLocaleString()} / night
                  </p>
                  <h3 className="mt-2 font-heading text-2xl font-semibold">
                    {room.name}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-white/80">
                    {room.description}
                  </p>

                  <a
                    href="#booking"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white"
                  >
                    Check Dates
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </a>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
