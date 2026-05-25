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
      ? 'VDH Agency helpt zelfstandige ondernemers, MKB-bedrijven en startups door heel Nederland groeien via doelgerichte online marketing, plan nu een gratis consult.'
      : 'VDH Agency helps Dutch businesses grow online through SEO, Social Media and professional websites. Request a free consultation.',
    alternates: {
      canonical: isNl ? BASE : `${BASE}/en`,
      languages: {
        nl: BASE,
        en: `${BASE}/en`,
        'x-default': BASE,
      },
    },
    openGraph: {
      description: isNl
        ? 'VDH Agency helpt zelfstandige ondernemers, MKB-bedrijven en startups door heel Nederland groeien via doelgerichte online marketing, plan nu een gratis consult.'
        : 'VDH Agency helps Dutch businesses grow online through SEO, Social Media and professional websites. Request a free consultation.',
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
