import HeroSection from '@/components/hero-section';
import ExpertiseSection from '@/components/expertise-section';
import HowIWorkSection from '@/components/how-i-work-section';
import ContactSection from '@/components/contact-section';
import DemoProjectsSection from '@/components/demo-projects-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ExpertiseSection />
      <HowIWorkSection />
      <DemoProjectsSection />
      <ContactSection />
    </>
  );
}
