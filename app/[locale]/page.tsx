import type {Metadata} from 'next';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Stats from '@/components/sections/Stats';
import ContentSection from '@/components/sections/ContentSection';
import About from '@/components/sections/About';
import Process from '@/components/sections/Process';
import CTA from '@/components/sections/CTA';
import AnimatedSection from '@/components/ui/AnimatedSection';

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

export default async function HomePage({
  params,
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  const isNl = locale === 'nl';

  return (
    <>
      <Hero />

      {/* Citeerbare entiteitsomschrijving — crawlable intro voor AI & zoekmachines */}
      <section className="bg-light py-10 border-b border-primary/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-primary/60 text-sm leading-relaxed max-w-3xl">
              {isNl
                ? 'VDH Agency is een Nederlands digitaal marketingbureau, opgericht in 2026 door Lars van der Hoek. Het bureau helpt MKB-bedrijven, freelancers en startups in heel Nederland online groeien via SEO, SEA, social media beheer, website-ontwikkeling en branding. VDH Agency staat voor persoonlijk contact, meetbare resultaten en volledige transparantie.'
                : 'VDH Agency is a Dutch digital marketing agency, founded in 2026 by Lars van der Hoek. The agency helps SMEs, freelancers and startups across the Netherlands grow online through SEO, SEA, social media management, website development and branding. VDH Agency stands for personal contact, measurable results and full transparency.'}
            </p>
          </AnimatedSection>
        </div>
      </section>

      <Services />
      <Stats />
      <ContentSection />
      <About />
      <Process />
      <CTA />
    </>
  );
}
