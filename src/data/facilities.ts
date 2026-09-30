import type { LucideIcon } from "lucide-react";
import { Waves, UtensilsCrossed, PartyPopper, Umbrella, Dumbbell, Sparkles } from "lucide-react";

export type Facility = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const facilities: Facility[] = [
  {
    icon: Waves,
    title: "Infinity Pool",
    description: "Swim where the horizon meets the sea at our signature infinity pool.",
  },
  {
    icon: UtensilsCrossed,
    title: "Beachfront Dining",
    description: "Savor local and international flavors with an ocean breeze on your skin.",
  },
  {
    icon: PartyPopper,
    title: "Events & Celebrations",
    description: "Flexible indoor and outdoor venues for weddings, meetings, and milestones.",
  },
  {
    icon: Umbrella,
    title: "Private Beach Access",
    description: "Your own stretch of powdery white sand, just steps from your room.",
  },
  {
    icon: Dumbbell,
    title: "Fitness Center",
    description: "Stay on track with a modern, fully-equipped gym overlooking the coast.",
  },
  {
    icon: Sparkles,
    title: "Spa & Wellness",
    description: "Unwind with rejuvenating treatments inspired by island traditions.",
  },
];
