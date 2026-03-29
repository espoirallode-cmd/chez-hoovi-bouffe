import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";

const MenuSection = lazy(() => import("@/components/MenuSection"));
const GallerySection = lazy(() => import("@/components/GallerySection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const LocationSection = lazy(() => import("@/components/LocationSection"));
const FooterSection = lazy(() => import("@/components/FooterSection"));

// A simple loading placeholder for lazy sections
const SectionLoader = () => (
  <div className="py-20 flex justify-center items-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <Suspense fallback={<SectionLoader />}>
        <MenuSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <GallerySection />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <TestimonialsSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <FAQSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <ContactSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <LocationSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <FooterSection />
      </Suspense>
    </div>
  );
};

export default Index;
