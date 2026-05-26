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
        name: 'Website Laten Maken Apeldoorn',
        provider: {'@id': `${BASE}/#organization`},
        description: 'Professionele website laten maken voor bedrijven in Apeldoorn en de Veluwe-regio. Snel, SEO-geoptimaliseerd en mobielvriendelijk.',
        url: `${BASE}/website-laten-maken-apeldoorn`,
        areaServed: {'@type': 'City', name: 'Apeldoorn'},
        offers: {'@type': 'Offer', priceCurrency: 'EUR', priceRange: '€€'},
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {'@type': 'ListItem', position: 1, name: 'Home', item: BASE},
          {'@type': 'ListItem', position: 2, name: 'Website laten maken', item: `${BASE}/website-laten-maken`},
          {'@type': 'ListItem', position: 3, name: 'Website laten maken Apeldoorn', item: `${BASE}/website-laten-maken-apeldoorn`},
        ],
      },
    ],
  };
}

export async function generateMetadata({params}: {params?: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale = 'nl'} = params ? await params : {};
  if (locale !== 'nl') return {};
  return {
    title: 'Website Laten Maken Apeldoorn: Professioneel & SEO-Klaar | VDH Agency',
    description: 'Website laten maken in Apeldoorn? VDH Agency is gevestigd vlakbij Apeldoorn en bouwt websites voor de Veluwe-regio. Snel, vindbaar en op maat. Gratis offerte.',
    alternates: {
      canonical: `${BASE}/website-laten-maken-apeldoorn`,
      languages: {'x-default': `${BASE}/website-laten-maken-apeldoorn`, nl: `${BASE}/website-laten-maken-apeldoorn`},
    },
    openGraph: {url: `${BASE}/website-laten-maken-apeldoorn`},
  };
}

export default async function WebsiteLatenMakenApeldoornPage({params}: {params: Promise<{locale: string}>}) {
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
                <MapPin size={12} /> Website laten maken Apeldoorn
              </span>
            </div>
            <h1 className="text-white font-black text-4xl lg:text-6xl leading-tight mb-5">
              Website laten maken in Apeldoorn: professioneel, snel en lokaal vindbaar
            </h1>
            <p className="text-white/60 text-xl mb-10">
              VDH Agency is gevestigd in Heerde, op een steenworp afstand van Apeldoorn. We bouwen websites voor ondernemers op de Veluwe die meer klanten willen via Google — op maat, met vaste prijs en directe lijn.
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
              <SectionLabel>Veluwe-regio specialist</SectionLabel>
              <h2 className="text-primary font-black text-3xl mb-6">
                Dicht bij Apeldoorn, kennis van de lokale markt
              </h2>
              <p className="text-primary/60 text-base leading-relaxed mb-4">
                Apeldoorn en de Veluwe-regio hebben een eigen karakter: toerisme, zorg, bouw en logistiek zijn sterke sectoren. Een website die hier klanten aantrekt, vereist content die aansluit op hoe Apeldoornse klanten zoeken.
              </p>
              <p className="text-primary/60 text-base leading-relaxed mb-6">
                Wij bouwen niet alleen een mooie website. We zorgen dat hij ook gevonden wordt in Google op de zoekwoorden die jouw klanten in Apeldoorn en omgeving gebruiken.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  'Maatwerk design afgestemd op jouw merk',
                  'SEO-fundament voor Apeldoornse zoektermen',
                  'Mobielvriendelijk — mobiel-first opgebouwd',
                  'CMS voor eenvoudig zelfbeheer',
                  'Vaste prijs op basis van heldere offerte',
                  'Van intake tot launch in 3–5 weken',
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
                <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-6">Onze aanpak</p>
                <div className="flex flex-col gap-4">
                  {[
                    {title: 'Kennismaking', desc: 'We bespreken jouw situatie, doelen en budget. Eerlijk advies, geen verkooppraatje.'},
                    {title: 'Offerte op maat', desc: 'Vaste prijs gebaseerd op scope — geen uurloon, geen verrassingen achteraf.'},
                    {title: 'Design & bouw', desc: 'Prototype eerst, bouwen daarna. Jij hebt regie in elke stap.'},
                    {title: 'Live & klaar voor groei', desc: 'Nazorg inbegrepen. En als je daarna wilt groeien via SEO of Ads, staan we er voor je.'},
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
            <h2 className="text-white font-black text-xl mb-6">Meer voor jouw bedrijf in Apeldoorn</h2>
            <div className="flex flex-wrap gap-3">
              {[
                {href: '/marketing-bureau/apeldoorn',    label: 'Marketing Bureau Apeldoorn'},
                {href: '/seo-apeldoorn',                 label: 'SEO Apeldoorn'},
                {href: '/marketing-bureau-gelderland',   label: 'Marketing Bureau Gelderland'},
                {href: '/website-laten-maken',           label: 'Website laten maken (landelijk)'},
                {href: '/webdesign-bureau',              label: 'Webdesign bureau'},
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
