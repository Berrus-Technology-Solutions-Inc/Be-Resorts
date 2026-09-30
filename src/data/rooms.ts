export type Room = {
  slug: string;
  name: string;
  description: string;
  price: number;
  maxGuests: number;
  sizeSqm: number;
  image: string;
  amenities: string[];
};

export const rooms: Room[] = [
  {
    slug: "seaview-deluxe",
    name: "Seaview Deluxe Room",
    description:
      "Wake up to panoramic ocean views with a private balcony and breezy coastal interiors.",
    price: 6500,
    maxGuests: 2,
    sizeSqm: 32,
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop",
    amenities: ["Ocean View", "King Bed", "Free Wi-Fi", "Mini Bar"],
  },
  {
    slug: "garden-suite",
    name: "Garden Suite",
    description:
      "A tranquil retreat surrounded by lush tropical landscaping, perfect for a quiet escape.",
    price: 8200,
    maxGuests: 3,
    sizeSqm: 42,
    image:
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1200&auto=format&fit=crop",
    amenities: ["Garden View", "Soaking Tub", "Lounge Area", "Free Wi-Fi"],
  },
  {
    slug: "beachfront-villa",
    name: "Beachfront Pool Villa",
    description:
      "Step straight onto powdery white sand from your own private plunge pool villa.",
    price: 15800,
    maxGuests: 4,
    sizeSqm: 68,
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1200&auto=format&fit=crop",
    amenities: ["Private Pool", "Beach Access", "Butler Service", "Terrace"],
  },
  {
    slug: "family-suite",
    name: "Family Suite",
    description:
      "Spacious connecting rooms designed for families who want comfort without compromise.",
    price: 11400,
    maxGuests: 5,
    sizeSqm: 58,
    image:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1200&auto=format&fit=crop",
    amenities: ["Two Bedrooms", "Kids Corner", "Free Wi-Fi", "Mini Bar"],
  },
];
