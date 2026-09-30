import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const RESORT_DETAILS = [
  {
    number: "01",
    title: "Beachfront setting",
    description: "Stay close to the shoreline on Mactan Island.",
  },
  {
    number: "02",
    title: "Boutique spirit",
    description: "A relaxed island stay with warm Filipino hospitality.",
  },
  {
    number: "03",
    title: "Poolside days",
    description: "Move at your own pace between the pool and the sea.",
  },
];

export default function ResortStory() {
  return (
    <section
      id="resort"
      className="overflow-hidden bg-ocean-900 py-16 text-white sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-palm-400 sm:text-sm sm:tracking-[0.3em]">
            BE Resort Mactan · Lapu-Lapu City
          </p>
          <h2 className="mt-5 text-balance font-heading text-5xl font-medium uppercase leading-[0.92] sm:mt-7 sm:text-7xl lg:text-8xl">
            The island
            <span className="block text-palm-400">is yours</span>
          </h2>
        </ScrollReveal>

        <div className="mt-10 grid grid-cols-1 items-start gap-8 sm:mt-14 sm:gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <ScrollReveal className="relative aspect-[4/3] overflow-hidden rounded-2xl sm:aspect-[5/4]">
            <Image
              src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1400&auto=format&fit=crop"
              alt="Resort pool surrounded by tropical greenery"
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
            />
          </ScrollReveal>

          <div className="flex flex-col gap-8 sm:gap-10">
            <ScrollReveal delay={0.1}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-palm-400">
                A place to slow down
              </p>
              <h3 className="mt-3 text-balance font-heading text-3xl font-medium leading-tight sm:text-4xl">
                Island mornings, just beyond your door.
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/75 sm:text-base">
                Set along the coast of Mactan, BE Resort brings together easy
                beachfront days, thoughtful comfort, and the welcoming spirit
                of Cebu.
              </p>
            </ScrollReveal>

            <div className="divide-y divide-white/15 border-y border-white/15">
              {RESORT_DETAILS.map((detail, index) => (
                <ScrollReveal key={detail.number} delay={0.12 + index * 0.08}>
                  <div className="grid grid-cols-[2.5rem_1fr] gap-3 py-4 sm:grid-cols-[3rem_1fr] sm:gap-4">
                    <span className="pt-1 text-xs font-semibold text-palm-400">
                      {detail.number}
                    </span>
                    <div>
                      <h4 className="font-heading text-lg font-medium sm:text-xl">
                        {detail.title}
                      </h4>
                      <p className="mt-1 text-sm leading-relaxed text-white/65">
                        {detail.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.2} className="relative aspect-[16/8] overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1200&auto=format&fit=crop"
                alt="A quiet beachfront resort beneath the palms"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}