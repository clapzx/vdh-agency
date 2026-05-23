import type {Metadata} from 'next';
import {getTranslations} from 'next-intl/server';
import {TrendingUp, Globe, Palette, BarChart2, Video, CheckCircle2, ArrowRight} from 'lucide-react';
import {Link} from '@/i18n/navigation';
import AnimatedSection from '@/components/ui/AnimatedSection';
import NoServiceCard from '@/components/ui/NoServiceCard';
import CTA from '@/components/sections/CTA';

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
      ? 'Onze Diensten — Online Marketing, Websites, Branding & Meer'
      : 'Our Services — Online Marketing, Websites, Branding & More',
    description: isNl
      ? 'Ontdek alle diensten van VDH Agency: online marketing, websites op maat, branding, digitale analyse en social media beheer. Meetbaar resultaat, persoonlijk contact.'
      : 'Explore VDH Agency services: online marketing, custom websites, branding, digital analytics and social media management. Measurable results, personal contact.',
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

export default async function DienstenPage({
  params,
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  const t = await getTranslations('dienstenPage');

  const services = [
    {
      Icon: TrendingUp,
      title: t('onlineMarketingTitle'),
      subtitle: t('onlineMarketingSubtitle'),
      desc: t('onlineMarketingDesc'),
      bullets: [t('onlineMarketingBullet1'), t('onlineMarketingBullet2'), t('onlineMarketingBullet3'), t('onlineMarketingBullet4')],
      href: '/diensten/online-marketing' as const,
    },
    {
      Icon: Globe,
      title: t('webTitle'),
      subtitle: t('webSubtitle'),
      desc: t('webDesc'),
      bullets: [t('webBullet1'), t('webBullet2'), t('webBullet3'), t('webBullet4')],
      href: '/diensten/website-maken' as const,
    },
    {
      Icon: Palette,
      title: t('brandingTitle'),
      subtitle: t('brandingSubtitle'),
      desc: t('brandingDesc'),
      bullets: [t('brandingBullet1'), t('brandingBullet2'), t('brandingBullet3'), t('brandingBullet4')],
      href: '/diensten/branding' as const,
    },
    {
      Icon: BarChart2,
      title: t('analyseTitle'),
      subtitle: t('analyseSubtitle'),
      desc: t('analyseDesc'),
      bullets: [t('analyseBullet1'), t('analyseBullet2'), t('analyseBullet3'), t('analyseBullet4')],
      href: '/diensten/digitale-analyse' as const,
    },
    {
      Icon: Video,
      title: t('socialTitle'),
      subtitle: t('socialSubtitle'),
      desc: t('socialDesc'),
      bullets: [t('socialBullet1'), t('socialBullet2'), t('socialBullet3'), t('socialBullet4')],
      href: '/diensten/social-media-beheer' as const,
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
            <p className="text-white/60 text-xl mb-10">{t('sub')}</p>

            {/* Service pills */}
            <div className="flex flex-wrap gap-2">
              {services.map(({title, href}) => (
                <Link
                  key={href}
                  href={href}
                  className="text-xs font-medium border border-white/15 text-white/60 hover:border-gold hover:text-gold px-3 py-1.5 rounded-full transition-colors"
                >
                  {title}
                </Link>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-light py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({Icon, title, subtitle, desc, bullets, href}, i) => (
              <AnimatedSection key={href} delay={i * 0.07} className="flex">
                <Link
                  href={href}
                  className="group relative flex flex-col w-full bg-white border border-primary/8 rounded-sm overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Gold top border */}
                  <div className="h-0.5 bg-gold/30 group-hover:bg-gold transition-colors duration-300" />

                  <div className="flex flex-col flex-1 p-8">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-sm bg-primary flex items-center justify-center mb-5 shrink-0">
                      <Icon size={22} className="text-gold" />
                    </div>

                    {/* Title area */}
                    <div className="mb-3">
                      <span className="text-gold text-xs font-semibold tracking-widest uppercase">
                        {subtitle}
                      </span>
                      <h2 className="text-primary font-black text-xl leading-tight mt-1">
                        {title}
                      </h2>
                    </div>

                    {/* Description */}
                    <p className="text-primary/55 text-sm leading-relaxed mb-5 line-clamp-3">
                      {desc}
                    </p>

                    {/* Bullets */}
                    <ul className="flex flex-col gap-2 mb-6 flex-1">
                      {bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2">
                          <CheckCircle2 size={13} className="text-gold mt-0.5 shrink-0" />
                          <span className="text-primary/65 text-xs leading-snug">{b}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <div className="flex items-center gap-1.5 text-gold text-sm font-semibold mt-auto group-hover:gap-3 transition-all">
                      {t('readMore')}
                      <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
            <AnimatedSection delay={services.length * 0.07} className="flex">
              <NoServiceCard variant="grid" />
            </AnimatedSection>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
