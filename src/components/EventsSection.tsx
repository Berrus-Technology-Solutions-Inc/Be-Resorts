import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { events } from "@/data/content";
import ScrollReveal from "./ScrollReveal";

export default function EventsSection() {
  return (
    <section id="events" className="bg-ocean-900 py-16 text-white sm:py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 sm:gap-14 lg:grid-cols-2 lg:px-10">
        <ScrollReveal className="relative h-[380px] overflow-hidden rounded-3xl sm:h-[440px]">
          <Image
            src={events.image}
            alt="Events space at BE Resort Mactan"
            fill
            sizes="(max-width: 1023px) 100vw, 50vw"
            className="object-cover"
          />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-palm-400">
            Events Space
          </p>
          <h2 className="mt-4 text-balance font-heading text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Celebrate life&apos;s moments by the sea
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/80 sm:mt-6 sm:text-base">
            Whether it&apos;s a beach wedding, a corporate retreat, or an
            intimate gathering, our events team curates every detail against
            a backdrop of ocean views.
          </p>

          <ul className="mt-8 space-y-4">
            {events.highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-white/90">
                <CheckCircle2 size={20} className="mt-0.5 flex-shrink-0 text-palm-400" />
                {item}
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-palm-500 px-7 py-3 text-sm font-semibold text-white transition hover:bg-palm-600 active:scale-95"
          >
            Inquire for Events
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
