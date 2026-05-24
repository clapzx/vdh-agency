import type {Metadata} from 'next';
import {getTranslations} from 'next-intl/server';
import {User, Target, Eye, Heart, ArrowRight, ChevronDown} from 'lucide-react';
import Link from 'next/link';

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

function faqJsonLd(faqs: {q: string; a: string}[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({q, a}) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: {'@type': 'Answer', text: a},
    })),
  };
}

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
import Breadcrumb from '@/components/ui/Breadcrumb';
import Process from '@/components/sections/Process';
import CTA from '@/components/sections/CTA';

export default async function OverOnsPage({
  params,
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  const t = await getTranslations('overPage');

  const isNl = locale === 'nl';
  const base = isNl ? '' : '/en';

  const values = [
    {Icon: Target, title: t('v1title'), desc: t('v1desc')},
    {Icon: Eye, title: t('v2title'), desc: t('v2desc')},
    {Icon: Heart, title: t('v3title'), desc: t('v3desc')},
  ];

  const services = [
    {href: `${base}/diensten/seo-sea`,             label: isNl ? 'SEO & SEA' : 'SEO & SEA',                       desc: isNl ? 'Meer zichtbaarheid in Google' : 'More visibility in Google'},
    {href: `${base}/diensten/social-media-beheer`, label: isNl ? 'Social Media' : 'Social Media',                  desc: isNl ? 'Content, opnames en advertenties' : 'Content, shoots and ads'},
    {href: `${base}/diensten/website-maken`,       label: isNl ? 'Website Maken' : 'Website Development',          desc: isNl ? 'Snel, mobiel en SEO-ready' : 'Fast, mobile and SEO-ready'},
    {href: `${base}/diensten/online-marketing`,    label: isNl ? 'Online Marketing' : 'Online Marketing',          desc: isNl ? 'Volledige digitale groeistrategie' : 'Full digital growth strategy'},
    {href: `${base}/diensten/branding`,            label: isNl ? 'Branding & Huisstijl' : 'Branding & Identity',  desc: isNl ? 'Logo, kleuren en merkidentiteit' : 'Logo, colours and brand identity'},
    {href: `${base}/diensten/digitale-analyse`,    label: isNl ? 'Digitale Analyse' : 'Digital Analytics',        desc: isNl ? 'GA4, conversies en dashboards' : 'GA4, conversions and dashboards'},
  ];

  const faqs = [
    {q: t('faq1Q'), a: t('faq1A')},
    {q: t('faq2Q'), a: t('faq2A')},
    {q: t('faq3Q'), a: t('faq3A')},
    {q: t('faq4Q'), a: t('faq4A')},
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(faqJsonLd(faqs))}}
      />

      {/* Hero */}
      <section className="bg-primary pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <Breadcrumb crumbs={[
              {label: 'Home', href: isNl ? '/' : '/en/'},
              {label: isNl ? 'Over ons' : 'About'},
            ]} />
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
                <p className="text-primary/70 text-base leading-relaxed">{t('p4')}</p>
                <p className="text-primary/70 text-base leading-relaxed">{t('p5')}</p>
                <p className="text-primary/70 text-base leading-relaxed">{t('p6')}</p>
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

      {/* Process */}
      <Process />

      {/* Services */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-2xl mb-12">
            <SectionLabel>{t('servicesTitle')}</SectionLabel>
            <p className="text-primary/60 text-base">{t('servicesSub')}</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map(({href, label, desc}) => (
              <Link
                key={href}
                href={href}
                className="group flex items-center justify-between gap-4 border border-primary/10 rounded-sm px-6 py-5 hover:border-gold/50 hover:bg-gold/5 transition-colors"
              >
                <div>
                  <p className="text-primary font-semibold text-sm mb-0.5">{label}</p>
                  <p className="text-primary/50 text-xs">{desc}</p>
                </div>
                <ArrowRight size={14} className="text-gold shrink-0 group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
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

      {/* FAQ */}
      <section className="bg-light py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-12">
            <SectionLabel>{t('faqLabel')}</SectionLabel>
            <h2 className="text-primary font-black text-3xl lg:text-4xl">{t('faqTitle')}</h2>
          </AnimatedSection>
          <div className="flex flex-col gap-4">
            {faqs.map(({q, a}, i) => (
              <AnimatedSection key={i} delay={i * 0.06}>
                <details className="bg-white border border-primary/10 rounded-sm group">
                  <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none font-semibold text-primary text-sm">
                    {q}
                    <ChevronDown size={16} className="text-gold shrink-0 group-open:rotate-180 transition-transform" />
                  </summary>
                  <p className="px-6 pb-5 text-primary/60 text-sm leading-relaxed">{a}</p>
                </details>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
