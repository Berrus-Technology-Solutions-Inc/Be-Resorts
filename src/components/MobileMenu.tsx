"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { createPortal } from "react-dom";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  links: { label: string; href: string }[];
};

export default function MobileMenu({ open, onClose, links }: MobileMenuProps) {
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Main navigation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex min-h-[100dvh] flex-col overflow-y-auto bg-ocean-900 px-8 pb-[max(2rem,env(safe-area-inset-bottom))] pt-[max(2rem,env(safe-area-inset-top))] text-white lg:hidden"
        >
          <div className="flex justify-end">
            <button aria-label="Close menu" onClick={onClose}>
              <X size={28} />
            </button>
          </div>

          <ul className="my-auto flex flex-col items-center justify-center gap-5 py-10 sm:gap-7">
            {links.map((link, i) => (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06 * i, duration: 0.35 }}
              >
                <a
                  href={link.href}
                  onClick={onClose}
                  className="font-heading text-2xl font-medium sm:text-3xl"
                >
                  {link.label}
                </a>
              </motion.li>
            ))}
          </ul>

          <a
            href="#booking"
            onClick={onClose}
            className="mx-auto rounded-full bg-palm-500 px-8 py-3 text-center font-semibold text-white"
          >
            Book Now
          </a>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
