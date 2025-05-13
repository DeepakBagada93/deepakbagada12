import HeroSection from '@/components/hero-section';
import ExpertiseSection from '@/components/expertise-section';
import ContactSection from '@/components/contact-section';
import DemoProjectsSection from '@/components/demo-projects-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ExpertiseSection />
      <DemoProjectsSection />
      <ContactSection />
    </>
  );
}
