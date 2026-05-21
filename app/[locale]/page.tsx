import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Stats from '@/components/sections/Stats';
import About from '@/components/sections/About';
import Process from '@/components/sections/Process';
import CTA from '@/components/sections/CTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Stats />
      <About />
      <Process />
      <CTA />
    </>
  );
}
