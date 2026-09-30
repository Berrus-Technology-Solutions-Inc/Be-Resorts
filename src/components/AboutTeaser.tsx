import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function AboutTeaser() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 sm:gap-16 lg:grid-cols-2 lg:px-10">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-palm-600">
            About BE Resort
          </p>
          <h2 className="mt-4 text-balance font-heading text-3xl font-semibold leading-tight text-ocean-900 sm:text-4xl lg:text-5xl">
            Discover the seaside beauty and rich history of Lapu-Lapu City
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-ocean-700 sm:mt-6 sm:text-base">
            Nestled along the shores of Mactan Island, BE Resort Mactan blends
            modern boutique design with the warmth of Filipino hospitality.
            Every corner is crafted for guests who seek an affordable escape
            without compromising on comfort, style, or that unmistakable
            island charm.
          </p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-ocean-700 sm:text-base">
            From sunrise dips in our infinity pool to sunset walks along the
            beach, BE Resort is where youthful energy meets refined leisure.
          </p>
          <a
            href="#rooms"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-ocean-900 px-7 py-3 text-sm font-semibold text-white transition hover:bg-ocean-800 active:scale-95"
          >
            Explore Our Rooms
          </a>
        </ScrollReveal>

        <div className="relative h-[360px] sm:h-[460px] lg:h-[520px]">
          <ScrollReveal delay={0.1} className="absolute left-0 top-0 h-3/5 w-3/5 overflow-hidden rounded-3xl shadow-soft">
            <Image
              src="https://images.unsplash.com/photo-1601918774946-25832a4be0d6?q=80&w=900&auto=format&fit=crop"
              alt="Guests relaxing by the pool"
              fill
              sizes="(max-width: 640px) 60vw, 30vw"
              className="object-cover"
            />
          </ScrollReveal>
          <ScrollReveal delay={0.25} className="absolute bottom-0 right-0 h-3/5 w-3/5 overflow-hidden rounded-3xl border-4 border-white shadow-soft">
            <Image
              src="https://images.unsplash.com/photo-1571501679680-de32f1e7aad4?q=80&w=900&auto=format&fit=crop"
              alt="Beachfront relaxation"
              fill
              sizes="(max-width: 640px) 60vw, 30vw"
              className="object-cover"
            />
          </ScrollReveal>
          <div className="absolute -bottom-6 left-4 h-28 w-28 rounded-full bg-sand-200/70 blur-2xl" />
        </div>
      </div>
    </section>
  );
}
