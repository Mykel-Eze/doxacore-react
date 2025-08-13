import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ServicesSection } from "./components/ServicesSection";
import { AboutSection } from "./components/AboutSection";
import { WhyChooseUsSection } from "./components/WhyChooseUsSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { MouseGlow } from "./components/MouseGlow";

export default function App() {
  return (
    <div className="min-h-screen">
      <MouseGlow />
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}