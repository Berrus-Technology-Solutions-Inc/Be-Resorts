"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Users, Search, Minus, Plus } from "lucide-react";

export default function BookingBar() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [guestsOpen, setGuestsOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "ready" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const today = new Date();
  today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
  const minDate = today.toISOString().split("T")[0];

  const handleCheckAvailability = () => {
    if (!checkIn || !checkOut) {
      setStatus("error");
      setFeedback("Choose your arrival and departure dates first.");
      return;
    }

    if (checkOut <= checkIn) {
      setStatus("error");
      setFeedback("Departure must be after arrival.");
      return;
    }

    setStatus("ready");
    setFeedback("Dates selected. Contact our team to confirm availability.");
  };

  return (
    <section id="booking" className="relative z-20 mx-auto -mt-20 max-w-6xl px-4 sm:-mt-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="glass grid grid-cols-1 gap-4 rounded-3xl p-6 shadow-glass sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_auto] lg:items-end lg:gap-3 lg:p-8"
      >
        <label className="flex flex-col gap-1.5">
          <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-ocean-700">
            <CalendarDays size={15} /> Arrival
          </span>
          <input
            type="date"
            min={minDate}
            value={checkIn}
            onChange={(e) => {
              setCheckIn(e.target.value);
              setStatus("idle");
              setFeedback("");
            }}
            className="rounded-xl border border-ocean-200/60 bg-white/80 px-4 py-3 text-sm text-ocean-900 outline-none transition focus:border-palm-500"
          />
        </label>

        <label className="flex flex-col gap-1.5">
          <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-ocean-700">
            <CalendarDays size={15} /> Departure
          </span>
          <input
            type="date"
            min={checkIn || minDate}
            value={checkOut}
            onChange={(e) => {
              setCheckOut(e.target.value);
              setStatus("idle");
              setFeedback("");
            }}
            className="rounded-xl border border-ocean-200/60 bg-white/80 px-4 py-3 text-sm text-ocean-900 outline-none transition focus:border-palm-500"
          />
        </label>

        <div className="relative flex flex-col gap-1.5">
          <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-ocean-700">
            <Users size={15} /> Guests
          </span>
          <button
            type="button"
            aria-expanded={guestsOpen}
            aria-controls="guest-count-panel"
            onClick={() => setGuestsOpen((v) => !v)}
            className="rounded-xl border border-ocean-200/60 bg-white/80 px-4 py-3 text-left text-sm text-ocean-900 outline-none transition focus:border-palm-500"
          >
            {adults} Adult{adults > 1 ? "s" : ""}
            {children > 0 ? `, ${children} Child${children > 1 ? "ren" : ""}` : ""}
          </button>

          {guestsOpen && (
            <div id="guest-count-panel" className="absolute top-full z-30 mt-2 w-full min-w-[220px] rounded-2xl bg-white p-4 shadow-soft">
              <div className="flex items-center justify-between py-2">
                <span className="text-sm font-medium text-ocean-900">Adults</span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setAdults((n) => Math.max(1, n - 1))}
                    className="flex h-7 w-7 items-center justify-center rounded-full border border-ocean-200 text-ocean-700 hover:bg-sand-100"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="w-4 text-center text-sm">{adults}</span>
                  <button
                    onClick={() => setAdults((n) => n + 1)}
                    className="flex h-7 w-7 items-center justify-center rounded-full border border-ocean-200 text-ocean-700 hover:bg-sand-100"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-sm font-medium text-ocean-900">Children</span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setChildren((n) => Math.max(0, n - 1))}
                    className="flex h-7 w-7 items-center justify-center rounded-full border border-ocean-200 text-ocean-700 hover:bg-sand-100"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="w-4 text-center text-sm">{children}</span>
                  <button
                    onClick={() => setChildren((n) => n + 1)}
                    className="flex h-7 w-7 items-center justify-center rounded-full border border-ocean-200 text-ocean-700 hover:bg-sand-100"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>
              <button
                onClick={() => setGuestsOpen(false)}
                className="mt-2 w-full rounded-xl bg-ocean-900 py-2 text-sm font-semibold text-white"
              >
                Done
              </button>
            </div>
          )}
        </div>

        <button
          type="button"
          onClick={handleCheckAvailability}
          className="flex items-center justify-center gap-2 rounded-xl bg-palm-500 px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition hover:bg-palm-600 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-palm-700 sm:col-span-2 lg:col-span-1"
        >
          <Search size={16} />
          {status === "ready" ? "Dates Selected" : "Check Availability"}
        </button>
        {feedback && (
          <p
            role={status === "error" ? "alert" : "status"}
            className={`text-sm leading-relaxed sm:col-span-2 lg:col-span-4 ${status === "error" ? "text-red-700" : "text-ocean-700"}`}
          >
            {feedback}{" "}
            {status === "ready" && (
              <a href="#contact" className="font-semibold text-palm-700 underline underline-offset-2">
                Contact the resort
              </a>
            )}
          </p>
        )}
      </motion.div>
    </section>
  );
}
