import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BookingBar from "@/components/BookingBar";
import AboutTeaser from "@/components/AboutTeaser";
import ResortStory from "@/components/ResortStory";
import RoomCards from "@/components/RoomCards";
import Facilities from "@/components/Facilities";
import EventsSection from "@/components/EventsSection";
import OffersSection from "@/components/OffersSection";
import Gallery from "@/components/Gallery";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <BookingBar />
      <AboutTeaser />
      <ResortStory />
      <RoomCards />
      <Facilities />
      <EventsSection />
      <OffersSection />
      <Gallery />
      <ContactSection />
      <Footer />
    </main>
  );
}
