import { facilities } from "@/data/facilities";
import ScrollReveal from "./ScrollReveal";

export default function Facilities() {
  return (
    <section id="facilities" className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-palm-600">
            Facilities & Amenities
          </p>
          <h2 className="mt-4 text-balance font-heading text-3xl font-semibold leading-tight text-ocean-900 sm:text-4xl lg:text-5xl">
            Everything you need for the perfect stay
          </h2>
        </ScrollReveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {facilities.map((facility, i) => {
            const Icon = facility.icon;
            return (
              <ScrollReveal key={facility.title} delay={i * 0.08}>
                <div className="group h-full rounded-2xl border border-sand-200 bg-sand-50/60 p-6 transition hover:-translate-y-1 hover:shadow-soft sm:p-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-palm-500/10 text-palm-600 transition group-hover:bg-palm-500 group-hover:text-white">
                    <Icon size={26} />
                  </div>
                  <h3 className="mt-6 font-heading text-xl font-semibold text-ocean-900">
                    {facility.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ocean-700">
                    {facility.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
