"use client";

import dynamic from "next/dynamic";

import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import HowItWorks from "@/components/sections/HowItWorks";
import VideoSection from "@/components/sections/VideoSection";
import Testimonials from "@/components/sections/Testimonials";
import Gallery from "@/components/sections/Gallery";
import BookingForm from "@/components/sections/BookingForm";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";

// Lazy load heavy visual-only components
const FloatingParticles = dynamic(
  () => import("@/components/ui/FloatingParticles"),
  { ssr: false }
);
const CursorFollower = dynamic(
  () => import("@/components/ui/CursorFollower"),
  { ssr: false }
);
const WhatsAppButton = dynamic(
  () => import("@/components/ui/WhatsAppButton"),
  { ssr: false }
);

export default function HomePage() {
  return (
    <SmoothScrollProvider>
      <ScrollProgress />
      <CursorFollower />
      <FloatingParticles />
      <WhatsAppButton />
      <Navbar />

      <main className="flex flex-col gap-24 lg:gap-32">
        <Hero />
        <About />
        <Services />
        <HowItWorks />
        <VideoSection />
        <Testimonials />
        <div className="mb-10">
  <Gallery />
</div>
        <BookingForm />
      </main>

      <Footer />
    </SmoothScrollProvider>
  );
}
