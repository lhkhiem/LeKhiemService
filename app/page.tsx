import HeroSection from '@/components/Sections/HeroSection/HeroSection';
import AboutSection from '@/components/Sections/AboutSection/AboutSection';
import ServicesGrid from '@/components/Sections/ServicesGrid/ServicesGrid';
import PortfolioGallery from '@/components/Sections/PortfolioGallery/PortfolioGallery';
import ProcessTimeline from '@/components/Sections/ProcessTimeline/ProcessTimeline';
import ContactForm from '@/components/Sections/ContactForm/ContactForm';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesGrid />
      <PortfolioGallery />
      <ProcessTimeline />
      <ContactForm />
    </>
  );
}
