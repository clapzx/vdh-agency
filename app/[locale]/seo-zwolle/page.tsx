import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {ArrowRight, MapPin, CheckCircle2} from 'lucide-react';
import {Link} from '@/i18n/navigation';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionLabel from '@/components/ui/SectionLabel';
import CTA from '@/components/sections/CTA';

const BASE = 'https://www.vdh-agency.com';
const STAD = 'Zwolle';
const SLUG = 'seo-zwolle';
const REGIO = 'Overijssel';

function pageJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: `SEO ${STAD}`,
        provider: {'@id': `${BASE}/#organization`},
        description: `SEO bureau in ${STAD}. VDH Agency helpt bedrijven in ${STAD} en omgeving bovenaan in Google komen via lokale SEO, technische optimalisatie en contentstrategie.`,
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
    title: `SEO Zwolle: Bovenaan in Google in Zwolle en Omgeving`,
    description: `SEO bureau voor Zwolle. VDH Agency helpt Zwolse bedrijven hoger ranken in Google via lokale SEO, zoekwoordstrategie en technische optimalisatie. Gratis lokale SEO-check.`,
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
                <MapPin size={12} /> SEO Zwolle
              </span>
            </div>
            <h1 className="text-white font-black text-4xl lg:text-6xl leading-tight mb-5">
              SEO Zwolle: bovenaan in Google in Zwolle en omgeving
            </h1>
            <p className="text-white/60 text-xl mb-10">
              Zwolle is een van de snelst groeiende steden van Nederland. De online concurrentie groeit mee. VDH Agency helpt Zwolse bedrijven structureel hoger ranken in Google — via lokale SEO, zoekwoordstrategie en technische optimalisatie.
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

      {/* Zwolle context */}
      <section className="bg-light py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <SectionLabel>De Zwolse markt</SectionLabel>
              <h2 className="text-primary font-black text-3xl mb-6">
                SEO in Zwolle vraagt om een lokale aanpak
              </h2>
              <p className="text-primary/60 text-base leading-relaxed mb-4">
                Zwolle telt ruim 130.000 inwoners en is het economisch centrum van Overijssel. De stad groeit sterk, met een actief MKB-landschap in sectoren als zorg, logistiek, bouw en retail. Dat betekent ook meer concurrentie in Google.
              </p>
              <p className="text-primary/60 text-base leading-relaxed mb-6">
                Wie in Zwolle bovenaan wil staan bij zoekopdrachten als "loodgieter Zwolle" of "accountant Zwolle", heeft een specifieke lokale SEO-aanpak nodig: Google Business Profile, lokale content en NAP-consistentie.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  'Google Business Profile optimalisatie voor Zwolle',
                  'Lokale zoekwoordstrategie op Zwolse koopintentie',
                  'Content gericht op Zwolle en de regio Overijssel',
                  'Technische SEO & laadsnelheid',
                  'Maandelijkse positierapportage',
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
                <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-6">Lokale SEO-aanpak</p>
                <div className="flex flex-col gap-4">
                  {[
                    {num: '01', title: 'Lokale audit', desc: 'We analyseren hoe jouw bedrijf scoort in Zwolle t.o.v. directe concurrenten.'},
                    {num: '02', title: 'Zoekwoordonderzoek', desc: 'Welke Zwolse zoekopdrachten leveren klanten op? We zoeken het precies uit.'},
                    {num: '03', title: 'Optimalisatie', desc: 'On-page content, Google Business Profile en lokale linkbuilding.'},
                    {num: '04', title: 'Rapportage', desc: 'Maandelijks inzicht in posities, verkeer en aanvragen vanuit Zwolle.'},
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
            <h2 className="text-white font-black text-xl mb-6">Meer SEO & marketing in Zwolle en omgeving</h2>
            <div className="flex flex-wrap gap-3">
              {[
                {href: '/marketing-bureau/zwolle',       label: 'Marketing Bureau Zwolle'},
                {href: '/google-ads-zwolle',              label: 'Google Ads Zwolle'},
                {href: '/marketing-bureau-overijssel',    label: 'Marketing Bureau Overijssel'},
                {href: '/lokale-seo',                     label: 'Lokale SEO overzicht'},
                {href: '/seo-bureau',                     label: 'SEO bureau'},
                {href: '/hoger-in-google',                label: 'Hoger in Google'},
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
