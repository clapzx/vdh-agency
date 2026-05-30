import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {ArrowRight, MapPin, CheckCircle2} from 'lucide-react';
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
        name: 'Website Laten Maken Zwolle',
        provider: {'@id': `${BASE}/#organization`},
        description: 'Professionele website laten maken voor bedrijven in Zwolle. Snel, SEO-geoptimaliseerd en mobielvriendelijk. VDH Agency werkt voor Zwolse MKB-bedrijven.',
        url: `${BASE}/website-laten-maken-zwolle`,
        areaServed: {'@type': 'City', name: 'Zwolle'},
        offers: {'@type': 'Offer', priceCurrency: 'EUR', priceRange: '€€'},
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {'@type': 'ListItem', position: 1, name: 'Home', item: BASE},
          {'@type': 'ListItem', position: 2, name: 'Website laten maken', item: `${BASE}/website-laten-maken`},
          {'@type': 'ListItem', position: 3, name: 'Website laten maken Zwolle', item: `${BASE}/website-laten-maken-zwolle`},
        ],
      },
    ],
  };
}

export async function generateMetadata({params}: {params?: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale = 'nl'} = params ? await params : {};
  if (locale !== 'nl') return {};
  return {
    title: 'Website Laten Maken Zwolle: Snel, Professioneel & Vindbaar',
    description: 'Website laten maken in Zwolle? VDH Agency bouwt professionele, snelle en SEO-geoptimaliseerde websites voor Zwolse bedrijven. Vaste prijs, directe communicatie. Gratis offerte.',
    alternates: {
      canonical: `${BASE}/website-laten-maken-zwolle`,
      languages: {'x-default': `${BASE}/website-laten-maken-zwolle`, nl: `${BASE}/website-laten-maken-zwolle`},
    },
    openGraph: {url: `${BASE}/website-laten-maken-zwolle`},
  };
}

export default async function WebsiteLatenMakenZwollePage({params}: {params: Promise<{locale: string}>}) {
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
                <MapPin size={12} /> Website laten maken Zwolle
              </span>
            </div>
            <h1 className="text-white font-black text-4xl lg:text-6xl leading-tight mb-5">
              Website laten maken in Zwolle: snel, professioneel en vindbaar in Google
            </h1>
            <p className="text-white/60 text-xl mb-10">
              VDH Agency bouwt websites voor Zwolse ondernemers die willen groeien. SEO-geoptimaliseerd, mobielvriendelijk en op maat — met een vaste prijs en directe communicatie.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="flex items-center gap-2 bg-gold text-primary font-bold text-sm px-7 py-3.5 rounded-sm hover:bg-gold-light transition-colors">
                Gratis offerte aanvragen <ArrowRight size={15} />
              </Link>
              <a href="/website-laten-maken" className="flex items-center gap-2 border border-white/20 text-white font-semibold text-sm px-7 py-3.5 rounded-sm hover:border-gold hover:text-gold transition-colors">
                Meer over website laten maken
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Inhoud */}
      <section className="bg-light py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection direction="left">
              <SectionLabel>Voor Zwolse bedrijven</SectionLabel>
              <h2 className="text-primary font-black text-3xl mb-6">
                Een website die Zwolse klanten aantrekt
              </h2>
              <p className="text-primary/60 text-base leading-relaxed mb-4">
                Zwolle heeft een actief ondernemersklimaat. Of je nu diensten levert aan particulieren of zakelijke klanten in de regio — een professionele website is het visitekaartje dat 24/7 voor je werkt.
              </p>
              <p className="text-primary/60 text-base leading-relaxed mb-6">
                Elke website die wij bouwen heeft een technisch SEO-fundament voor lokale vindbaarheid in Zwolle: de juiste structuur, snelle laadtijden en content die aansluit op Zwolse zoekopdrachten.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  'Professioneel maatwerk design',
                  'SEO-fundament voor lokale vindbaarheid',
                  'Mobielvriendelijk op elk scherm',
                  'CMS — jij beheert zelf de inhoud',
                  'Vaste prijs, geen verborgen kosten',
                  'Live binnen 3–5 weken',
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
                <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-6">Wat je krijgt</p>
                <div className="flex flex-col gap-4">
                  {[
                    {title: 'Intake & strategie', desc: 'We bespreken jouw doelen, doelgroep en wensen. Geen template — maar een aanpak die bij jouw Zwolse bedrijf past.'},
                    {title: 'Design & bouw', desc: 'Uniek design, clean code, snelle laadtijden en alle technische SEO-elementen ingebouwd.'},
                    {title: 'Launch & training', desc: 'Vlekkeloze lancering en een korte training zodat jij zelf je site kunt bijhouden.'},
                    {title: 'Nazorg', desc: 'De eerste weken na lancering staan we direct beschikbaar voor vragen en kleine aanpassingen.'},
                  ].map(({title, desc}) => (
                    <div key={title} className="flex gap-4 items-start">
                      <span className="text-gold mt-0.5 shrink-0">→</span>
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
            <h2 className="text-white font-black text-xl mb-6">Meer voor jouw bedrijf in Zwolle</h2>
            <div className="flex flex-wrap gap-3">
              {[
                {href: '/marketing-bureau/zwolle',      label: 'Marketing Bureau Zwolle'},
                {href: '/seo-zwolle',                   label: 'SEO Zwolle'},
                {href: '/google-ads-zwolle',             label: 'Google Ads Zwolle'},
                {href: '/website-laten-maken',           label: 'Website laten maken (landelijk)'},
                {href: '/webdesign-bureau',              label: 'Webdesign bureau'},
                {href: '/diensten/website-maken',        label: 'Website dienst (volledig)'},
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
