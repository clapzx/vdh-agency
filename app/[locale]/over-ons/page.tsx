import type {Metadata} from 'next';
import {getTranslations} from 'next-intl/server';
import {User, Target, Eye, Heart} from 'lucide-react';

const BASE = 'https://www.vdh-agency.com';

function breadcrumbJsonLd(locale: string) {
  const isNl = locale === 'nl';
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: isNl ? BASE : `${BASE}/en`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: isNl ? 'Over ons' : 'About',
        item: isNl ? `${BASE}/over-ons` : `${BASE}/en/over-ons`,
      },
    ],
  };
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${BASE}/#lars`,
  name: 'Lars van der Hoek',
  jobTitle: 'Founder & Marketing Specialist',
  worksFor: {'@id': `${BASE}/#organization`},
  email: 'lars@vdhagency.nl',
  url: `${BASE}/over-ons`,
  knowsAbout: ['SEO', 'Google Ads', 'Social Media Marketing', 'Web Development'],
};

export async function generateMetadata({
  params,
}: {
  params?: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale = 'nl'} = params ? await params : {};
  const isNl = locale === 'nl';
  return {
    title: isNl
      ? 'Over VDH Agency — Lars van der Hoek'
      : 'About VDH Agency — Lars van der Hoek',
    description: isNl
      ? 'Leer meer over VDH Agency en oprichter Lars van der Hoek. Persoonlijk betrokken bij elk project, gericht op meetbare online groei.'
      : 'Learn more about VDH Agency and founder Lars van der Hoek. Personally involved in every project, focused on measurable online growth.',
    alternates: {
      canonical: isNl ? `${BASE}/over-ons` : `${BASE}/en/over-ons`,
      languages: {
        nl: `${BASE}/over-ons`,
        en: `${BASE}/en/over-ons`,
        'x-default': `${BASE}/over-ons`,
      },
    },
  };
}
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionLabel from '@/components/ui/SectionLabel';
import CTA from '@/components/sections/CTA';

export default async function OverOnsPage({
  params,
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  const t = await getTranslations('overPage');

  const values = [
    {Icon: Target, title: t('v1title'), desc: t('v1desc')},
    {Icon: Eye, title: t('v2title'), desc: t('v2desc')},
    {Icon: Heart, title: t('v3title'), desc: t('v3desc')},
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(breadcrumbJsonLd(locale))}}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(personJsonLd)}}
      />
      {/* Hero */}
      <section className="bg-primary pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-6 h-px bg-gold" />
              <span className="text-gold text-xs font-semibold tracking-widest uppercase">
                {t('label')}
              </span>
            </div>
            <h1 className="text-white font-black text-4xl lg:text-6xl leading-tight mb-5">
              {t('title')}
            </h1>
            <p className="text-white/60 text-xl">{t('sub')}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story */}
      <section className="bg-light py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <SectionLabel>{t('storyTitle')}</SectionLabel>
              <div className="flex flex-col gap-4">
                <p className="text-primary/70 text-base leading-relaxed">{t('p1')}</p>
                <p className="text-primary/70 text-base leading-relaxed">{t('p2')}</p>
                <p className="text-primary/70 text-base leading-relaxed">{t('p3')}</p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.15}>
              <div className="bg-primary rounded-sm p-10 border border-white/5">
                <div className="w-20 h-20 rounded-sm bg-gold/10 border border-gold/30 flex items-center justify-center mb-6 mx-auto lg:mx-0">
                  <User size={36} className="text-gold" />
                </div>
                <h3 className="text-white font-bold text-2xl mb-1">Lars van der Hoek</h3>
                <p className="text-gold text-sm mb-4">{t('founderTitle')}</p>
                <p className="text-white/50 text-sm leading-relaxed">{t('founderBio')}</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-primary py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-2xl mb-16">
            <h2 className="text-white font-black text-4xl lg:text-5xl leading-tight">
              {t('valuesTitle')}
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map(({Icon, title, desc}, i) => (
              <AnimatedSection key={title} delay={i * 0.1}>
                <div className="bg-white/5 border border-white/10 rounded-sm p-8 hover:border-gold/30 transition-colors">
                  <div className="w-11 h-11 rounded-sm bg-gold/10 flex items-center justify-center mb-5">
                    <Icon size={20} className="text-gold" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
