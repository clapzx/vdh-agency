import type {Metadata} from 'next';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Stats from '@/components/sections/Stats';
import ContentSection from '@/components/sections/ContentSection';
import About from '@/components/sections/About';
import Process from '@/components/sections/Process';
import CTA from '@/components/sections/CTA';

const BASE = 'https://www.vdh-agency.com';

export async function generateMetadata({
  params,
}: {
  params?: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale = 'nl'} = params ? await params : {};
  const isNl = locale === 'nl';
  return {
    title: isNl
      ? 'Marketing Bureau Nederland — SEO, Social Media & Webdesign'
      : 'Marketing Agency Netherlands — SEO, Social Media & Web Design',
    description: isNl
      ? 'VDH Agency helpt Nederlandse bedrijven online groeien via SEO, Social Media en professionele websites op maat. Vraag gratis een consult aan bij Lars van der Hoek.'
      : 'VDH Agency helps Dutch businesses grow online through SEO, Social Media and professional websites. Request a free consultation with Lars van der Hoek.',
    alternates: {
      canonical: isNl ? BASE : `${BASE}/en`,
      languages: {
        nl: BASE,
        en: `${BASE}/en`,
        'x-default': BASE,
      },
    },
  };
}

export default function HomePage() {
  return (
    <>
      <Hero />

      <Services />
      <Stats />
      <ContentSection />
      <About />
      <Process />
      <CTA />
    </>
  );
}
