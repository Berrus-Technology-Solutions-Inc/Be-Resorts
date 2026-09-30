import Image from "next/image";
import { offers } from "@/data/content";
import ScrollReveal from "./ScrollReveal";

export default function OffersSection() {
  return (
    <section id="offers" className="bg-sand-50 py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <ScrollReveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-palm-600">
            Offers & Packages
          </p>
          <h2 className="mt-4 text-balance font-heading text-3xl font-semibold leading-tight text-ocean-900 sm:text-4xl lg:text-5xl">
            More reasons to book direct
          </h2>
        </ScrollReveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {offers.map((offer, i) => (
            <ScrollReveal key={offer.title} delay={i * 0.1}>
              <div className="group overflow-hidden rounded-2xl bg-white shadow-soft">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={offer.image}
                    alt={offer.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-palm-600">
                    {offer.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-semibold text-ocean-900">
                    {offer.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ocean-700">
                    {offer.description}
                  </p>
                  <a
                    href="#booking"
                    className="mt-4 inline-block text-sm font-semibold text-palm-600 hover:text-palm-700"
                  >
                    Claim This Offer &rarr;
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
