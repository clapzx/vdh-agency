import type {Metadata} from 'next';
import {getTranslations} from 'next-intl/server';
import {Search, Video, Globe, CheckCircle2} from 'lucide-react';

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
        name: isNl ? 'Diensten' : 'Services',
        item: isNl ? `${BASE}/diensten` : `${BASE}/en/diensten`,
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
      ? 'Onze Diensten — SEO, Social Media & Websites'
      : 'Our Services — SEO, Social Media & Websites',
    description: isNl
      ? 'Ontdek alle diensten van VDH Agency: SEO/SEA-beheer, social media content en websites op maat. Volledig ontzorgd, meetbaar resultaat.'
      : 'Explore VDH Agency services: SEO/SEA management, social media content and custom websites. Fully managed, measurable results.',
    alternates: {
      canonical: isNl ? `${BASE}/diensten` : `${BASE}/en/diensten`,
      languages: {
        nl: `${BASE}/diensten`,
        en: `${BASE}/en/diensten`,
        'x-default': `${BASE}/diensten`,
      },
    },
  };
}
import Link from 'next/link';
import {ArrowRight} from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionLabel from '@/components/ui/SectionLabel';
import CTA from '@/components/sections/CTA';

export default async function DienstenPage({
  params,
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  const t = await getTranslations('dienstenPage');

  const services = [
    {
      Icon: Search,
      title: t('seoTitle'),
      subtitle: t('seoSubtitle'),
      desc: t('seoDesc'),
      bullets: [t('seoBullet1'), t('seoBullet2'), t('seoBullet3'), t('seoBullet4')],
      href: '/diensten/seo-sea',
    },
    {
      Icon: Video,
      title: t('socialTitle'),
      subtitle: t('socialSubtitle'),
      desc: t('socialDesc'),
      bullets: [t('socialBullet1'), t('socialBullet2'), t('socialBullet3'), t('socialBullet4')],
      href: '/diensten/social-media-beheer',
    },
    {
      Icon: Globe,
      title: t('webTitle'),
      subtitle: t('webSubtitle'),
      desc: t('webDesc'),
      bullets: [t('webBullet1'), t('webBullet2'), t('webBullet3'), t('webBullet4')],
      href: '/diensten/website-maken',
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(breadcrumbJsonLd(locale))}}
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

      {/* Services */}
      <section className="bg-light py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-20">
          {services.map(({Icon, title, subtitle, desc, bullets, href}, i) => (
            <AnimatedSection key={title} delay={0.05}>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Text */}
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <SectionLabel>{subtitle}</SectionLabel>
                  <h2 className="text-primary font-black text-3xl lg:text-4xl mb-4">{title}</h2>
                  <p className="text-primary/60 text-base leading-relaxed mb-6">{desc}</p>
                  <ul className="flex flex-col gap-3 mb-6">
                    {bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <CheckCircle2 size={16} className="text-gold mt-0.5 shrink-0" />
                        <span className="text-primary/70 text-sm">{b}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={href}
                    className="inline-flex items-center gap-2 text-gold text-sm font-semibold hover:gap-3 transition-all group"
                  >
                    {t('readMore')}
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Visual card */}
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="bg-primary rounded-sm p-10 flex flex-col items-start gap-4 border-l-4 border-gold">
                    <div className="w-14 h-14 rounded-sm bg-gold/10 flex items-center justify-center">
                      <Icon size={26} className="text-gold" />
                    </div>
                    <h3 className="text-white font-bold text-xl">{title}</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {bullets.map((b) => (
                        <span
                          key={b}
                          className="text-xs bg-white/5 border border-white/10 text-white/60 px-3 py-1 rounded-full"
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
