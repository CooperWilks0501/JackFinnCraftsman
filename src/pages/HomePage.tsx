import { CTASection } from '../components/CTASection';
import { FeaturedWorkSection } from '../components/FeaturedWorkSection';
import { Hero } from '../components/Hero';
import { IntroSection } from '../components/IntroSection';
import { ServicesSection } from '../components/ServicesSection';
import { WhyChooseSection } from '../components/WhyChooseSection';

export function HomePage() {
  return (
    <>
      <Hero />
      <IntroSection />
      <ServicesSection />
      <FeaturedWorkSection />
      <WhyChooseSection />
      <CTASection />
    </>
  );
}
