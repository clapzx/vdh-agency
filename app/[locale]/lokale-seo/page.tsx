import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {ArrowRight, MapPin, Star, Globe, BarChart2, CheckCircle2} from 'lucide-react';
import {Link} from '@/i18n/navigation';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionLabel from '@/components/ui/SectionLabel';
import CTA from '@/components/sections/CTA';

const BASE = 'https://www.vdh-agency.com';

const gelderlandSteden = ['Heerde','Hattem','Epe','Wezep','Oldebroek','Vaassen',"'t Harde",'Elburg','Apeldoorn','Nunspeet','Harderwijk'];
const overijsselSteden = ['Zwolle','Kampen','Raalte','Wijhe','Olst'];
const gelderlandSlugs = ['heerde','hattem','epe','wezep','oldebroek','vaassen','t-harde','elburg','apeldoorn','nunspeet','harderwijk'];
const overijsselSlugs = ['zwolle','kampen','raalte','wijhe','olst'];

function pageJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Lokale SEO',
        provider: {'@id': `${BASE}/#organization`},
        description: 'Lokale SEO voor MKB-bedrijven in Gelderland en Overijssel. Google Business Profile optimalisatie, lokale vindbaarheid en reputatiebeheer.',
        url: `${BASE}/lokale-seo`,
        areaServed: [
          {'@type': 'State', name: 'Gelderland'},
          {'@type': 'State', name: 'Overijssel'},
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Wat is lokale SEO?',
            acceptedAnswer: {'@type': 'Answer', text: 'Lokale SEO is de optimalisatie van je online aanwezigheid zodat je gevonden wordt bij zoekopdrachten met een lokale intentie, zoals "loodgieter Zwolle" of "marketing bureau Heerde". Het omvat Google Business Profile optimalisatie, lokale zoekwoordstrategie en het bouwen van consistente vermeldingen op lokale directories.'},
          },
          {
            '@type': 'Question',
            name: 'Hoe snel werkt lokale SEO?',
            acceptedAnswer: {'@type': 'Answer', text: 'De eerste resultaten van lokale SEO zijn doorgaans zichtbaar na 4 tot 8 weken. In minder competitieve gemeenten zoals Heerde of Wijhe kan dit sneller gaan (2-4 weken). In grotere steden als Zwolle of Apeldoorn duurt het langer vanwege meer concurrentie.'},
          },
          {
            '@type': 'Question',
            name: 'Werkt lokale SEO ook zonder fysiek adres?',
            acceptedAnswer: {'@type': 'Answer', text: 'Ja, ook dienstverlenende bedrijven zonder winkel of kantoor aan huis kunnen lokale SEO inzetten. Je stelt een werkgebied in via Google Business Profile en optimaliseert je website voor de steden en regio\'s waar je actief bent. VDH Agency werkt zelf volledig online en is toch goed vindbaar in de regio.'},
          },
          {
            '@type': 'Question',
            name: 'Wat kost lokale SEO?',
            acceptedAnswer: {'@type': 'Answer', text: 'De kosten voor lokale SEO bij VDH Agency zijn afhankelijk van het werkgebied, de concurrentie en de huidige staat van je online aanwezigheid. We werken zonder vaste pakketten: na een gratis kennismakingsgesprek ontvang je een voorstel op maat, afgestemd op jouw budget en doelen.'},
          },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {'@type': 'ListItem', position: 1, name: 'Home', item: BASE},
          {'@type': 'ListItem', position: 2, name: 'Lokale SEO', item: `${BASE}/lokale-seo`},
        ],
      },
    ],
  };
}

export async function generateMetadata({params}: {params?: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale = 'nl'} = params ? await params : {};
  if (locale !== 'nl') return {};
  return {
    title: 'Lokale SEO: Bovenaan in Google in Jouw Stad of Regio',
    description: 'Lokale SEO voor MKB-bedrijven in Gelderland en Overijssel. VDH Agency optimaliseert je Google Profiel, reviews en lokale vermeldingen. Actief in 16 gemeenten.',
    alternates: {
      canonical: `${BASE}/lokale-seo`,
      languages: {'x-default': `${BASE}/lokale-seo`, nl: `${BASE}/lokale-seo`},
    },
    openGraph: {url: `${BASE}/lokale-seo`},
  };
}

export default async function LokaleSeoPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  if (locale !== 'nl') notFound();

  const pijlers = [
    {Icon: MapPin,    title: 'Google Business Profile', desc: 'Jouw profiel is het eerste dat zoekers zien. Volledig ingevuld, met de juiste categorieën, openingstijden, foto\'s en consistente informatie — dat is al half de strijd gewonnen.'},
    {Icon: Star,      title: 'Reviews & reputatie',     desc: 'Recente, beantwoorde reviews zijn een signaal aan Google dat jouw bedrijf actief en betrouwbaar is. Wij helpen je reviews te stimuleren en op te reageren.'},
    {Icon: Globe,     title: 'Lokale vermeldingen',     desc: 'Jouw naam, adres en telefoonnummer moeten overal op het internet consistent zijn. Fouten hierin verzwakken je positie. Wij analyseren en corrigeren dit.'},
    {Icon: BarChart2, title: 'Lokale content & SEO',    desc: 'Pagina\'s gericht op jouw stad of regio vertellen Google waar je actief bent. Wij bouwen en optimaliseren deze pagina\'s voor maximale lokale zichtbaarheid.'},
  ];

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
                <MapPin size={12} /> Lokale SEO
              </span>
            </div>
            <h1 className="text-white font-black text-4xl lg:text-6xl leading-tight mb-5">
              Lokale SEO: bovenaan in Google in jouw stad of regio
            </h1>
            <p className="text-white/60 text-xl mb-10">
              46% van alle zoekopdrachten heeft een lokale intentie. "Loodgieter Zwolle", "website laten maken Apeldoorn", "kapper Heerde" — mensen zoeken lokaal en kopen lokaal. Wij zorgen dat jij bij die zoekopdrachten verschijnt.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="flex items-center gap-2 bg-gold text-primary font-bold text-sm px-7 py-3.5 rounded-sm hover:bg-gold-light transition-colors">
                Gratis lokale check <ArrowRight size={15} />
              </Link>
              <Link href="/seo-bureau" className="flex items-center gap-2 border border-white/20 text-white font-semibold text-sm px-7 py-3.5 rounded-sm hover:border-gold hover:text-gold transition-colors">
                Bekijk SEO bureau
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Pijlers */}
      <section className="bg-light py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-2xl mb-14">
            <SectionLabel>Wat wij aanpakken</SectionLabel>
            <h2 className="text-primary font-black text-3xl lg:text-4xl">De vier pijlers van lokale vindbaarheid</h2>
            <p className="text-primary/60 mt-4 text-base leading-relaxed">
              Lokale SEO is niet één knop die je omzet. Het is een combinatie van vier elementen die samen bepalen of Google jou of jouw concurrent laat zien.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pijlers.map(({Icon, title, desc}, i) => (
              <AnimatedSection key={title} delay={i * 0.08}>
                <div className="bg-white border border-primary/8 rounded-sm p-8 h-full hover:border-gold/30 transition-colors">
                  <div className="w-12 h-12 rounded-sm bg-primary flex items-center justify-center mb-5">
                    <Icon size={22} className="text-gold" />
                  </div>
                  <h3 className="text-primary font-bold text-lg mb-3">{title}</h3>
                  <p className="text-primary/60 text-sm leading-relaxed">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Werkgebied */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-12">
            <SectionLabel light>Werkgebied</SectionLabel>
            <h2 className="text-white font-black text-3xl">Actief in Gelderland & Overijssel</h2>
            <p className="text-white/50 mt-3 text-sm max-w-xl">VDH Agency is gevestigd in Heerde en actief in 16 gemeenten in de regio. Klik op een stad voor meer informatie.</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {[
              {titel: 'Gelderland', steden: gelderlandSteden, slugs: gelderlandSlugs, link: '/marketing-bureau-gelderland'},
              {titel: 'Overijssel', steden: overijsselSteden, slugs: overijsselSlugs, link: '/marketing-bureau-overijssel'},
            ].map(({titel, steden, slugs, link}) => (
              <div key={titel}>
                <h3 className="text-gold text-xs font-semibold tracking-widest uppercase mb-4">{titel}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {steden.map((stad, i) => (
                    <a key={stad} href={`/marketing-bureau/${slugs[i]}`}
                      className="text-white/70 hover:text-gold border border-white/10 hover:border-gold/40 text-xs px-3 py-1.5 rounded-sm transition-colors">
                      {stad}
                    </a>
                  ))}
                </div>
                <a href={link} className="flex items-center gap-2 text-gold text-sm font-semibold hover:opacity-80 transition-opacity">
                  Alle {titel} steden <ArrowRight size={13} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Links */}
      <section className="bg-light py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-primary font-black text-xl mb-6">Meer over vindbaarheid in Google</h2>
            <div className="flex flex-wrap gap-3">
              {[
                {href: '/hoger-in-google',    label: 'Hoger in Google komen'},
                {href: '/seo-bureau',          label: 'SEO bureau'},
                {href: '/google-ads-bureau',   label: 'Google Ads bureau'},
                {href: '/diensten/seo-sea',    label: 'SEO & SEA dienst'},
                {href: '/marketing-bureau',    label: 'Werkgebied overzicht'},
              ].map(({href, label}) => (
                <a key={href} href={href} className="flex items-center gap-2 bg-white border border-primary/10 hover:border-gold/40 text-primary/70 hover:text-gold text-sm px-4 py-2.5 rounded-sm transition-colors">
                  {label} <ArrowRight size={12} />
                </a>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Checklijst */}
      <section className="bg-primary py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-white font-black text-2xl lg:text-3xl mb-6">Hoe staat jouw lokale SEO er nu voor?</h2>
            <p className="text-white/60 text-base leading-relaxed mb-4">Wij scannen gratis jouw Google Business Profile, reviews en lokale vermeldingen. Zo weet je in 30 minuten precies waar de winst zit.</p>
            <div className="flex flex-col gap-2 mb-8 text-left max-w-sm mx-auto">
              {['Google Business Profile analyse','Concurrentievergelijking','Review-strategie advies','Technische SEO-check'].map(p => (
                <div key={p} className="flex items-center gap-3">
                  <CheckCircle2 size={14} className="text-gold shrink-0" />
                  <span className="text-white/70 text-sm">{p}</span>
                </div>
              ))}
            </div>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-gold text-primary font-bold text-sm px-7 py-3.5 rounded-sm hover:bg-gold-light transition-colors">
              Gratis lokale SEO check <ArrowRight size={15} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <CTA />
    </>
  );
}
