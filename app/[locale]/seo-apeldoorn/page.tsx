import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {ArrowRight, MapPin, CheckCircle2} from 'lucide-react';
import {Link} from '@/i18n/navigation';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionLabel from '@/components/ui/SectionLabel';
import CTA from '@/components/sections/CTA';

const BASE = 'https://www.vdh-agency.com';
const STAD = 'Apeldoorn';
const SLUG = 'seo-apeldoorn';
const REGIO = 'Gelderland';

function pageJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: `SEO ${STAD}`,
        provider: {'@id': `${BASE}/#organization`},
        description: `SEO bureau voor ${STAD}. VDH Agency helpt bedrijven in ${STAD} en de Veluwe-regio bovenaan in Google komen via lokale SEO en technische optimalisatie.`,
        url: `${BASE}/${SLUG}`,
        areaServed: [
          {'@type': 'City', name: STAD},
          {'@type': 'State', name: REGIO},
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {'@type': 'ListItem', position: 1, name: 'Home', item: BASE},
          {'@type': 'ListItem', position: 2, name: 'Lokale SEO', item: `${BASE}/lokale-seo`},
          {'@type': 'ListItem', position: 3, name: `SEO ${STAD}`, item: `${BASE}/${SLUG}`},
        ],
      },
    ],
  };
}

export async function generateMetadata({params}: {params?: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale = 'nl'} = params ? await params : {};
  if (locale !== 'nl') return {};
  return {
    title: `SEO Apeldoorn: Meer Bezoekers uit Apeldoorn en de Veluwe | VDH Agency`,
    description: `SEO bureau voor Apeldoorn. VDH Agency helpt Apeldoornse bedrijven hoger ranken in Google via lokale SEO, zoekwoordstrategie en optimalisatie. Gratis lokale SEO-check.`,
    alternates: {
      canonical: `${BASE}/${SLUG}`,
      languages: {'x-default': `${BASE}/${SLUG}`, nl: `${BASE}/${SLUG}`},
    },
    openGraph: {url: `${BASE}/${SLUG}`},
  };
}

export default async function Page({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  if (locale !== 'nl') notFound();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(pageJsonLd())}} />

      {/* Hero */}
      <section className="bg-primary pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-6 h-px bg-gold" />
              <span className="text-gold text-xs font-semibold tracking-widest uppercase flex items-center gap-2">
                <MapPin size={12} /> SEO Apeldoorn
              </span>
            </div>
            <h1 className="text-white font-black text-4xl lg:text-6xl leading-tight mb-5">
              SEO Apeldoorn: meer bezoekers uit Apeldoorn en de Veluwe
            </h1>
            <p className="text-white/60 text-xl mb-10">
              Apeldoorn is de grootste stad van de Veluwe-regio. Met meer dan 165.000 inwoners en een breed MKB-landschap is de online concurrentie fors. VDH Agency is gevestigd vlakbij Apeldoorn en kent de lokale markt van binnenuit.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="flex items-center gap-2 bg-gold text-primary font-bold text-sm px-7 py-3.5 rounded-sm hover:bg-gold-light transition-colors">
                Gratis lokale SEO-check <ArrowRight size={15} />
              </Link>
              <a href="/lokale-seo" className="flex items-center gap-2 border border-white/20 text-white font-semibold text-sm px-7 py-3.5 rounded-sm hover:border-gold hover:text-gold transition-colors">
                Meer over lokale SEO
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Apeldoorn context */}
      <section className="bg-light py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <SectionLabel>De Apeldoornse markt</SectionLabel>
              <h2 className="text-primary font-black text-3xl mb-6">
                Lokale SEO die aansluit op de Apeldoornse markt
              </h2>
              <p className="text-primary/60 text-base leading-relaxed mb-4">
                Apeldoorn heeft een divers ondernemersklimaat: van verzekeraars tot bouwbedrijven, van toeristische ondernemingen rondom de Veluwe tot lokale dienstverleners. Elke branche heeft zijn eigen zoekgedrag.
              </p>
              <p className="text-primary/60 text-base leading-relaxed mb-6">
                VDH Agency is gevestigd in Heerde, op korte afstand van Apeldoorn. We rijden niet vanuit de Randstad aan — we kennen de Gelderse markt, de concurrenten en de kansen die jij nog niet benut.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  'Google Business Profile optimalisatie voor Apeldoorn',
                  'Lokale content gericht op Apeldoornse zoekopdrachten',
                  'Zoekwoordonderzoek op Veluwe-regioniveau',
                  'Technische SEO-verbetering van jouw website',
                  'Maandelijkse ranking- & traffic-rapportage',
                ].map(p => (
                  <div key={p} className="flex items-center gap-3">
                    <CheckCircle2 size={13} className="text-gold shrink-0" />
                    <span className="text-primary/70 text-sm">{p}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.15}>
              <div className="bg-primary rounded-sm p-8">
                <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-6">Onze aanpak voor Apeldoorn</p>
                <div className="flex flex-col gap-4">
                  {[
                    {num: '01', title: 'Concurrentieanalyse', desc: 'Wie staat er nu bovenaan in Apeldoorn voor jouw zoekopdrachten? Wat doen zij anders?'},
                    {num: '02', title: 'Lokale zoekwoorden', desc: 'We brengen in kaart welke Apeldoornse zoekopdrachten omzet opleveren.'},
                    {num: '03', title: 'Optimalisatie', desc: 'Google Business Profile, on-page content, technische verbeteringen en linkbuilding.'},
                    {num: '04', title: 'Groei bijhouden', desc: 'Maandelijkse rapportage over posities, bezoekersaantallen en leads vanuit Apeldoorn.'},
                  ].map(({num, title, desc}) => (
                    <div key={num} className="flex gap-4">
                      <span className="text-gold font-black text-lg opacity-50 shrink-0 w-6">{num}</span>
                      <div>
                        <p className="text-white font-semibold text-sm">{title}</p>
                        <p className="text-white/50 text-xs leading-relaxed mt-0.5">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Interne links */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-white font-black text-xl mb-6">Meer SEO & marketing in Apeldoorn en Gelderland</h2>
            <div className="flex flex-wrap gap-3">
              {[
                {href: '/marketing-bureau/apeldoorn',    label: 'Marketing Bureau Apeldoorn'},
                {href: '/marketing-bureau-gelderland',   label: 'Marketing Bureau Gelderland'},
                {href: '/lokale-seo',                    label: 'Lokale SEO overzicht'},
                {href: '/seo-bureau',                    label: 'SEO bureau'},
                {href: '/google-ads-bureau',             label: 'Google Ads bureau'},
                {href: '/hoger-in-google',               label: 'Hoger in Google'},
              ].map(({href, label}) => (
                <a key={href} href={href} className="flex items-center gap-2 border border-white/20 text-white/70 hover:border-gold hover:text-gold text-sm px-4 py-2 rounded-sm transition-colors">
                  {label} <ArrowRight size={12} />
                </a>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTA />
    </>
  );
}
