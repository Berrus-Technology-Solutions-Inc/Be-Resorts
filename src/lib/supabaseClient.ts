import { createClient } from "@supabase/supabase-js";

/**
 * ---------------------------------------------------------------------------
 * SUPABASE SCHEMA (run in the Supabase SQL editor)
 * ---------------------------------------------------------------------------
 *
 * -- Rooms: catalog of room / accommodation types shown on the site
 * create table rooms (
 *   id uuid primary key default gen_random_uuid(),
 *   slug text unique not null,
 *   name text not null,
 *   description text,
 *   price_per_night numeric(10, 2) not null,
 *   max_guests integer not null default 2,
 *   size_sqm integer,
 *   image_url text,
 *   amenities text[] default '{}',
 *   is_featured boolean default false,
 *   created_at timestamptz default now()
 * );
 *
 * -- Bookings: mock booking requests submitted via the Booking Bar
 * create table bookings (
 *   id uuid primary key default gen_random_uuid(),
 *   room_id uuid references rooms (id),
 *   guest_name text not null,
 *   guest_email text not null,
 *   guest_phone text,
 *   check_in date not null,
 *   check_out date not null,
 *   adults integer not null default 1,
 *   children integer not null default 0,
 *   status text not null default 'pending', -- pending | confirmed | cancelled
 *   created_at timestamptz default now()
 * );
 *
 * -- Contact inquiries: submissions from the Contact section form
 * create table contact_inquiries (
 *   id uuid primary key default gen_random_uuid(),
 *   full_name text not null,
 *   email text not null,
 *   phone text,
 *   subject text,
 *   message text not null,
 *   created_at timestamptz default now()
 * );
 *
 * -- Row Level Security (recommended)
 * alter table rooms enable row level security;
 * alter table bookings enable row level security;
 * alter table contact_inquiries enable row level security;
 *
 * create policy "Public can read rooms" on rooms
 *   for select using (true);
 *
 * create policy "Public can insert bookings" on bookings
 *   for insert with check (true);
 *
 * create policy "Public can insert inquiries" on contact_inquiries
 *   for insert with check (true);
 * ---------------------------------------------------------------------------
 */

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

// Client is created even without env vars so the app can build/run in demo
// mode; calls will simply fail gracefully until real credentials are set.
export const supabase = createClient(
  supabaseUrl || "https://placeholder.supabase.co",
  supabaseAnonKey || "public-anon-key"
);

export type Room = {
  id: string;
  slug: string;
  name: string;
  description: string;
  price_per_night: number;
  max_guests: number;
  size_sqm: number;
  image_url: string;
  amenities: string[];
  is_featured: boolean;
};

export type BookingRequest = {
  room_id?: string;
  guest_name: string;
  guest_email: string;
  guest_phone?: string;
  check_in: string;
  check_out: string;
  adults: number;
  children: number;
};

export type ContactInquiry = {
  full_name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
};

export async function submitBooking(payload: BookingRequest) {
  return supabase.from("bookings").insert(payload);
}

export async function submitContactInquiry(payload: ContactInquiry) {
  return supabase.from("contact_inquiries").insert(payload);
}
