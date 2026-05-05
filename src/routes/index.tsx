import { createFileRoute } from "@tanstack/react-router";
import { LanguageProvider } from "@/i18n/LanguageContext";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import BackgroundScene from "@/components/landing/BackgroundScene";
import WhySection from "@/components/landing/WhySection";
import CareersSection from "@/components/landing/CareersSection";
import CurriculumSection from "@/components/landing/CurriculumSection";
import FacilitiesSection from "@/components/landing/FacilitiesSection";
import VisionSection from "@/components/landing/VisionSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import ApplySection from "@/components/landing/ApplySection";
import Footer from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sun'iy intellekt yo'nalishi — yangi universitet dasturi" },
      {
        name: "description",
        content:
          "Sun'iy intellekt bo'yicha zamonaviy universitet dasturi: kuchli laboratoriyalar, real kasblar va kelajakka tayyor ta'lim. Uzbek, English, Russian.",
      },
      { property: "og:title", content: "Artificial intelligence — university program" },
      {
        property: "og:description",
        content: "A modern university program in artificial intelligence — labs, careers and a future-ready curriculum.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen">
        <BackgroundScene />
        <Header />
        <main>
          <Hero />
          <WhySection />
          <CareersSection />
          <CurriculumSection />
          <FacilitiesSection />
          <VisionSection />
          <TestimonialsSection />
          <ApplySection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
