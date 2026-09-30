"use client";

import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { submitContactInquiry } from "@/lib/supabaseClient";
import ScrollReveal from "./ScrollReveal";

export default function ContactSection() {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const { error } = await submitContactInquiry(form);
      if (error) throw error;
      setStatus("sent");
      setForm({ full_name: "", email: "", phone: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-sand-50 py-16 sm:py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 sm:gap-14 lg:grid-cols-2 lg:px-10">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-palm-600">
            Contact Us
          </p>
          <h2 className="mt-4 text-balance font-heading text-3xl font-semibold leading-tight text-ocean-900 sm:text-4xl lg:text-5xl">
            Plan your stay with us
          </h2>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-ocean-700 sm:mt-6 sm:text-base">
            Have a question about rooms, offers, or events? Send us a message
            and our team will get back to you shortly.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-3 text-ocean-800">
              <MapPin size={20} className="mt-0.5 flex-shrink-0 text-palm-600" />
              <span className="min-w-0 break-words text-sm">Punta Engaño Road, Lapu-Lapu City, Cebu, Philippines</span>
            </div>
            <div className="flex items-center gap-3 text-ocean-800">
              <Phone size={20} className="text-palm-600" />
              <a className="text-sm underline-offset-4 hover:underline" href="tel:+639170000000">+63 917 000 0000</a>
            </div>
            <div className="flex items-center gap-3 text-ocean-800">
              <Mail size={20} className="text-palm-600" />
              <a className="text-sm underline-offset-4 hover:underline" href="mailto:hello@beresortmactan.com">hello@beresortmactan.com</a>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-5 shadow-soft sm:rounded-3xl sm:p-8">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <label className="sr-only" htmlFor="contact-name">Full name</label>
              <input
                id="contact-name"
                required
                type="text"
                placeholder="Full Name"
                autoComplete="name"
                value={form.full_name}
                onChange={(e) => setForm({ ...form, full_name: e.target.value })}
                className="rounded-xl border border-ocean-200/60 px-4 py-3 text-sm outline-none focus:border-palm-500 sm:col-span-1"
              />
              <label className="sr-only" htmlFor="contact-email">Email address</label>
              <input
                id="contact-email"
                required
                type="email"
                placeholder="Email Address"
                autoComplete="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="rounded-xl border border-ocean-200/60 px-4 py-3 text-sm outline-none focus:border-palm-500 sm:col-span-1"
              />
              <label className="sr-only" htmlFor="contact-phone">Phone number</label>
              <input
                id="contact-phone"
                type="tel"
                placeholder="Phone Number"
                autoComplete="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="rounded-xl border border-ocean-200/60 px-4 py-3 text-sm outline-none focus:border-palm-500 sm:col-span-2"
              />
              <label className="sr-only" htmlFor="contact-message">Your message</label>
              <textarea
                id="contact-message"
                required
                placeholder="Your Message"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="rounded-xl border border-ocean-200/60 px-4 py-3 text-sm outline-none focus:border-palm-500 sm:col-span-2"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-6 w-full rounded-xl bg-palm-500 py-3.5 text-sm font-semibold text-white shadow-soft transition hover:bg-palm-600 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-palm-700 disabled:opacity-70"
            >
              {status === "loading"
                ? "Sending..."
                : status === "sent"
                  ? "Message Sent!"
                  : status === "error"
                    ? "Try Again"
                  : "Send Message"}
            </button>
            <p aria-live="polite" className="mt-3 min-h-5 text-sm">
              {status === "sent" && <span className="text-palm-700">Your message was sent successfully.</span>}
              {status === "error" && <span className="text-red-700">We couldn&apos;t send your message. Please try again or contact us directly.</span>}
            </p>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
