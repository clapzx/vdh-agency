import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {ArrowRight, MapPin, Target, Zap, CheckCircle2} from 'lucide-react';
import {Link} from '@/i18n/navigation';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionLabel from '@/components/ui/SectionLabel';
import CTA from '@/components/sections/CTA';

const BASE = 'https://www.vdh-agency.com';

function pageJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Google Ads Zwolle',
        provider: {'@id': `${BASE}/#organization`},
        description: 'Google Ads beheer voor bedrijven in Zwolle. Direct bovenaan bij Zwolse zoekopdrachten. Transparante beheerskosten, geen percentage over je advertentiebudget.',
        url: `${BASE}/google-ads-zwolle`,
        areaServed: [
          {'@type': 'City', name: 'Zwolle'},
          {'@type': 'State', name: 'Overijssel'},
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {'@type': 'ListItem', position: 1, name: 'Home', item: BASE},
          {'@type': 'ListItem', position: 2, name: 'Google Ads bureau', item: `${BASE}/google-ads-bureau`},
          {'@type': 'ListItem', position: 3, name: 'Google Ads Zwolle', item: `${BASE}/google-ads-zwolle`},
        ],
      },
    ],
  };
}

export async function generateMetadata({params}: {params?: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale = 'nl'} = params ? await params : {};
  if (locale !== 'nl') return {};
  return {
    title: 'Google Ads Zwolle: Direct Bovenaan bij Zwolse Zoekopdrachten | VDH Agency',
    description: 'Google Ads voor bedrijven in Zwolle. VDH Agency beheert campagnes gericht op Zwolle en omgeving. Transparante prijs, geen % over je budget. Gratis campagneadvies.',
    alternates: {
      canonical: `${BASE}/google-ads-zwolle`,
      languages: {'x-default': `${BASE}/google-ads-zwolle`, nl: `${BASE}/google-ads-zwolle`},
    },
    openGraph: {url: `${BASE}/google-ads-zwolle`},
  };
}

export default async function GoogleAdsZwollePage({params}: {params: Promise<{locale: string}>}) {
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
                <MapPin size={12} /> Google Ads Zwolle
              </span>
            </div>
            <h1 className="text-white font-black text-4xl lg:text-6xl leading-tight mb-5">
              Google Ads Zwolle: direct bovenaan bij Zwolse zoekopdrachten
            </h1>
            <p className="text-white/60 text-xl mb-10">
              Terwijl jouw concurrenten wachten op organische posities, staat jij morgen al bovenaan bij "loodgieter Zwolle" of "accountant Zwolle". VDH Agency beheert jouw Zwolse Google Ads campagnes transparant en zonder percentage over je budget.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="flex items-center gap-2 bg-gold text-primary font-bold text-sm px-7 py-3.5 rounded-sm hover:bg-gold-light transition-colors">
                Gratis campagneadvies <ArrowRight size={15} />
              </Link>
              <a href="/google-ads-bureau" className="flex items-center gap-2 border border-white/20 text-white font-semibold text-sm px-7 py-3.5 rounded-sm hover:border-gold hover:text-gold transition-colors">
                Google Ads bureau
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Voordelen */}
      <section className="bg-light py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <SectionLabel>Waarom Google Ads in Zwolle</SectionLabel>
              <h2 className="text-primary font-black text-3xl mb-6">
                Zwolle groeit — jouw campagne groeit mee
              </h2>
              <p className="text-primary/60 text-base leading-relaxed mb-4">
                Zwolle is een van de snelst groeiende steden van Nederland. Meer inwoners, meer bedrijven, meer mensen die online zoeken naar lokale diensten en producten. Google Ads maakt je direct zichtbaar bij precies die mensen.
              </p>
              <p className="text-primary/60 text-base leading-relaxed mb-6">
                Met geografische targeting richten we jouw campagne exact op Zwolle en de gewenste omgeving. Zo betaal je alleen voor klikken van mensen die ook daadwerkelijk klant bij jou kunnen worden.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  'Campagnes gericht op Zwolle en directe omgeving',
                  'Alleen betalen voor relevante klikken',
                  'Direct zichtbaar — live binnen 24 uur',
                  'Geen % over advertentiebudget',
                  'Wekelijkse optimalisatie op data',
                ].map(p => (
                  <div key={p} className="flex items-center gap-3">
                    <CheckCircle2 size={13} className="text-gold shrink-0" />
                    <span className="text-primary/70 text-sm">{p}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.15}>
              <div className="grid grid-cols-1 gap-5">
                <div className="bg-primary rounded-sm p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-sm flex items-center justify-center">
                      <Zap size={18} className="text-gold" />
                    </div>
                    <h3 className="text-white font-bold text-base">Direct resultaat</h3>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed">Zodra je campagne live staat, verschijnt jouw advertentie bij Zwolse zoekopdrachten. Geen maanden wachten op organische groei.</p>
                </div>
                <div className="bg-primary rounded-sm p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-sm flex items-center justify-center">
                      <Target size={18} className="text-gold" />
                    </div>
                    <h3 className="text-white font-bold text-base">Precieze lokale targeting</h3>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed">We richten op Zwolle en een instelbare straal daaromheen. Of je nu alleen in de stad wilt adverteren of ook in Kampen, Hattem of Meppel.</p>
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
            <h2 className="text-white font-black text-xl mb-6">Meer voor jouw bedrijf in Zwolle</h2>
            <div className="flex flex-wrap gap-3">
              {[
                {href: '/marketing-bureau/zwolle',      label: 'Marketing Bureau Zwolle'},
                {href: '/seo-zwolle',                   label: 'SEO Zwolle'},
                {href: '/google-ads-bureau',             label: 'Google Ads bureau (landelijk)'},
                {href: '/marketing-bureau-overijssel',   label: 'Marketing Bureau Overijssel'},
                {href: '/lokale-seo',                   label: 'Lokale SEO'},
                {href: '/hoger-in-google',              label: 'Hoger in Google'},
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
