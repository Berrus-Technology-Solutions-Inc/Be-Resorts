# BE Resort Mactan

A modern, fully responsive resort website for **BE Resort Mactan**, built with Next.js (App Router), Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework:** Next.js 14 (App Router, TypeScript)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** lucide-react
- **Database/Auth:** Supabase (`@supabase/supabase-js`)
- **Deployment:** Vercel

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Copy `.env.local.example` to `.env.local` and fill in your Supabase project credentials:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

The app works in demo mode without these — booking and contact forms will simply no-op until real credentials are provided.

## Supabase Schema

SQL for the `rooms`, `bookings`, and `contact_inquiries` tables (with Row Level Security policies) is documented in [src/lib/supabaseClient.ts](src/lib/supabaseClient.ts).

## Project Structure

```
src/
  app/            # App Router entry (layout, page, global styles)
  components/     # Navbar, Hero, BookingBar, RoomCards, Footer, etc.
  data/           # Mock content (rooms, facilities, offers, gallery)
  lib/            # Supabase client + schema reference
public/
  images/         # Logo and hero photography
```

## Deployment

This project is Vercel-ready out of the box:

1. Push this repository to GitHub.
2. Import it into [Vercel](https://vercel.com/new).
3. Add the Supabase environment variables in the Vercel project settings.
4. Deploy.
