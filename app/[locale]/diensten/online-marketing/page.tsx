import type {Metadata} from 'next';
import {getTranslations} from 'next-intl/server';
import {TrendingUp, CheckCircle2, ChevronDown} from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionLabel from '@/components/ui/SectionLabel';
import Breadcrumb from '@/components/ui/Breadcrumb';
import NoServiceCard from '@/components/ui/NoServiceCard';
import CTA from '@/components/sections/CTA';
import RelatedServices from '@/components/ui/RelatedServices';

const BASE = 'https://www.vdh-agency.com';

function serviceJsonLd(locale: string) {
  const isNl = locale === 'nl';
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: isNl ? 'Online Marketing' : 'Online Marketing',
        provider: {'@id': `${BASE}/#organization`},
        areaServed: {'@type': 'Country', name: 'Netherlands'},
        description: isNl
          ? 'SEO, Google Ads, Meta Ads, e-mail marketing en copywriting, alles onder één dak.'
          : 'SEO, Google Ads, Meta Ads, email marketing and copywriting, all under one roof.',
        url: isNl ? `${BASE}/diensten/online-marketing` : `${BASE}/en/services/online-marketing`,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {'@type': 'ListItem', position: 1, name: 'Home', item: isNl ? BASE : `${BASE}/en`},
          {'@type': 'ListItem', position: 2, name: isNl ? 'Diensten' : 'Services', item: isNl ? `${BASE}/diensten` : `${BASE}/en/services`},
          {'@type': 'ListItem', position: 3, name: 'Online Marketing', item: isNl ? `${BASE}/diensten/online-marketing` : `${BASE}/en/services/online-marketing`},
        ],
      },
    ],
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
      ? 'Online Marketing Bureau Nederland, SEO, Ads, E-mail & Copy'
      : 'Online Marketing Agency Netherlands, SEO, Ads, Email & Copy',
    description: isNl
      ? 'VDH Agency verzorgt online marketing van A tot Z: SEO, Google Ads, Meta Ads, e-mail marketing en copywriting. Vraag gratis adviesgesprek aan.'
      : 'VDH Agency handles online marketing end-to-end: SEO, Google Ads, Meta Ads, email marketing and copywriting. Request a free consultation.',
    alternates: {
      canonical: isNl ? `${BASE}/diensten/online-marketing` : `${BASE}/en/services/online-marketing`,
      languages: {
        nl: `${BASE}/diensten/online-marketing`,
        en: `${BASE}/en/services/online-marketing`,
        'x-default': `${BASE}/diensten/online-marketing`,
      },
    },
    openGraph: {
      url: isNl ? `${BASE}/diensten/online-marketing` : `${BASE}/en/services/online-marketing`,
    },
  };
}

export default async function OnlineMarketingPage({
  params,
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  const t = await getTranslations('onlineMarketingPage');

  const steps = [
    {num: '01', title: t('step1Title'), desc: t('step1Desc')},
    {num: '02', title: t('step2Title'), desc: t('step2Desc')},
    {num: '03', title: t('step3Title'), desc: t('step3Desc')},
    {num: '04', title: t('step4Title'), desc: t('step4Desc')},
    {num: '05', title: t('step5Title'), desc: t('step5Desc')},
  ];

  const faqs = [
    {q: t('faq1Q'), a: t('faq1A')},
    {q: t('faq2Q'), a: t('faq2A')},
    {q: t('faq3Q'), a: t('faq3A')},
    {q: t('faq4Q'), a: t('faq4A')},
  ];

  const includes = [
    'SEO & Google Ads',
    'Meta Ads (Facebook & Instagram)',
    'E-mail marketing',
    'Copywriting & webteksten',
    'Maandelijkse rapportage',
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(serviceJsonLd(locale))}}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map(({q, a}) => ({
            '@type': 'Question',
            name: q,
            acceptedAnswer: {'@type': 'Answer', text: a},
          })),
        })}}
      />

      {/* Hero */}
      <section className="bg-primary pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <Breadcrumb crumbs={[
              {label: 'Home', href: locale === 'nl' ? '/' : '/en/'},
              {label: locale === 'nl' ? 'Diensten' : 'Services', href: locale === 'nl' ? '/diensten' : '/en/services'},
              {label: t('label')},
            ]} />
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-6 h-px bg-gold" />
              <span className="text-gold text-xs font-semibold tracking-widest uppercase">{t('label')}</span>
            </div>
            <h1 className="text-white font-black text-4xl lg:text-6xl leading-tight mb-5">{t('title')}</h1>
            <p className="text-white/60 text-xl">{t('sub')}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* What is */}
      <section className="bg-light py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <SectionLabel>{t('label')}</SectionLabel>
              <h2 className="text-primary font-black text-3xl lg:text-4xl mb-6">{t('whatTitle')}</h2>
              <div className="flex flex-col gap-4">
                <p className="text-primary/70 text-base leading-relaxed">{t('whatP1')}</p>
                <p className="text-primary/70 text-base leading-relaxed">{t('whatP2')}</p>
                <p className="text-primary/70 text-base leading-relaxed">{t('whatP3')}</p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.15}>
              <div className="bg-primary rounded-sm p-10 border-l-4 border-gold">
                <div className="w-14 h-14 rounded-sm bg-gold/10 flex items-center justify-center mb-6">
                  <TrendingUp size={26} className="text-gold" />
                </div>
                <h3 className="text-white font-bold text-xl mb-4">{t('label')}</h3>
                <ul className="flex flex-col gap-3">
                  {includes.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle2 size={15} className="text-gold shrink-0" />
                      <span className="text-white/70 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-primary py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-2xl mb-16">
            <SectionLabel light>{t('howLabel')}</SectionLabel>
            <h2 className="text-white font-black text-3xl lg:text-5xl">{t('howTitle')}</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map(({num, title, desc}, i) => (
              <AnimatedSection key={num} delay={i * 0.08}>
                <div className="bg-white/5 border border-white/10 rounded-sm p-7 hover:border-gold/30 transition-colors h-full">
                  <span className="text-gold font-black text-3xl opacity-40 block mb-4">{num}</span>
                  <h3 className="text-white font-bold text-base mb-2">{title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
            <AnimatedSection delay={steps.length * 0.08}>
              <NoServiceCard variant="step" />
            </AnimatedSection>
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

      <RelatedServices
        title={locale === 'nl' ? 'Combineer met' : 'Combine with'}
        services={[
          {href: locale === 'nl' ? '/diensten/social-media-beheer' : '/en/services/social-media-management', label: locale === 'nl' ? 'Social Media' : 'Social Media',          desc: locale === 'nl' ? 'Content en advertenties op social' : 'Content and ads on social'},
          {href: locale === 'nl' ? '/diensten/website-maken'      : '/en/services/website-development',      label: locale === 'nl' ? 'Website Maken' : 'Website Development',    desc: locale === 'nl' ? 'SEO-ready website op maat' : 'SEO-ready custom website'},
          {href: locale === 'nl' ? '/diensten/digitale-analyse'   : '/en/services/digital-analytics',        label: locale === 'nl' ? 'Digitale Analyse' : 'Digital Analytics',  desc: locale === 'nl' ? 'Meet je ROI per kanaal' : 'Measure ROI per channel'},
        ]}
      />
      <CTA />
    </>
  );
}
