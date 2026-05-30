import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {ArrowRight, TrendingUp, Search, DollarSign, Clock, CheckCircle2} from 'lucide-react';
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
        name: 'Hoger in Google komen',
        provider: {'@id': `${BASE}/#organization`},
        description: 'SEO en Google Ads strategie om hoger te ranken in Google voor het MKB in Nederland.',
        url: `${BASE}/hoger-in-google`,
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Hoe kom ik hoger in Google?',
            acceptedAnswer: {'@type': 'Answer', text: 'Hoger ranken in Google vraagt om een combinatie van technische SEO, relevante content en externe links. Afhankelijk van je situatie en budget kan Google Ads een snellere weg zijn. Wij analyseren jouw markt en adviseren de beste aanpak.'},
          },
          {
            '@type': 'Question',
            name: 'Hoe lang duurt het om hoger te ranken?',
            acceptedAnswer: {'@type': 'Answer', text: 'Organische SEO duurt gemiddeld 3 tot 6 maanden voordat je stabiel beter scoort. In minder competitieve markten kan dat sneller gaan. Google Ads zorgt direct voor zichtbaarheid.'},
          },
          {
            '@type': 'Question',
            name: 'Wat is beter: SEO of Google Ads?',
            acceptedAnswer: {'@type': 'Answer', text: 'Dat hangt af van je situatie. SEO bouwt langdurig organisch verkeer op. Google Ads geeft direct resultaat. De combinatie werkt het beste voor de meeste MKB-bedrijven.'},
          },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {'@type': 'ListItem', position: 1, name: 'Home', item: BASE},
          {'@type': 'ListItem', position: 2, name: 'Hoger in Google', item: `${BASE}/hoger-in-google`},
        ],
      },
    ],
  };
}

export async function generateMetadata({params}: {params?: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale = 'nl'} = params ? await params : {};
  if (locale !== 'nl') return {};
  return {
    title: 'Hoger in Google Komen: SEO & Ads voor het MKB',
    description: 'Hoger in Google komen? VDH Agency helpt MKB-bedrijven ranken via bewezen SEO-strategieën en Google Ads. Lokale focus, meetbare resultaten. Gratis adviesgesprek.',
    alternates: {
      canonical: `${BASE}/hoger-in-google`,
      languages: {'x-default': `${BASE}/hoger-in-google`, nl: `${BASE}/hoger-in-google`},
    },
    openGraph: {url: `${BASE}/hoger-in-google`},
  };
}

export default async function HogerInGooglePage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  if (locale !== 'nl') notFound();

  const aanpakken = [
    {
      Icon: TrendingUp,
      title: 'Technische SEO',
      subtitle: 'Fundament',
      desc: 'Snelle laadtijden, correcte indexering, schema markup, mobile-first en een logische sitestructuur. Dit is de basis waarop alles rust.',
      tijdlijn: 'Resultaat: 4–8 weken',
    },
    {
      Icon: Search,
      title: 'Content & Zoekwoorden',
      subtitle: 'Autoriteit',
      desc: 'Pagina\'s gericht op de zoekwoorden die jouw klanten gebruiken. Relevante content die Google als autoriteit ziet en hoog positioneert.',
      tijdlijn: 'Resultaat: 8–16 weken',
    },
    {
      Icon: DollarSign,
      title: 'Google Ads',
      subtitle: 'Direct zichtbaar',
      desc: 'Terwijl SEO opbouwt, zorgt Google Ads voor directe zichtbaarheid op relevante zoekopdrachten. Betaal alleen voor klikken van potentiële klanten.',
      tijdlijn: 'Resultaat: direct',
    },
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
              <span className="text-gold text-xs font-semibold tracking-widest uppercase">Hoger in Google</span>
            </div>
            <h1 className="text-white font-black text-4xl lg:text-6xl leading-tight mb-5">
              Hoger in Google komen: zo doe je dat in 2026
            </h1>
            <p className="text-white/60 text-xl mb-10">
              De eerste positie in Google pakt 28% van alle klikken. Positie twee en drie pakken samen nog eens 20%. De rest verdeelt de resterende klikken — of verdwijnt. Wij zorgen dat jij bij de eerste drie staat.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="flex items-center gap-2 bg-gold text-primary font-bold text-sm px-7 py-3.5 rounded-sm hover:bg-gold-light transition-colors">
                Gratis adviesgesprek <ArrowRight size={15} />
              </Link>
              <Link href="/seo-bureau" className="flex items-center gap-2 border border-white/20 text-white font-semibold text-sm px-7 py-3.5 rounded-sm hover:border-gold hover:text-gold transition-colors">
                Bekijk SEO bureau
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Aanpak */}
      <section className="bg-light py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-2xl mb-14">
            <SectionLabel>De drie pijlers</SectionLabel>
            <h2 className="text-primary font-black text-3xl lg:text-4xl">
              Hoger ranken is geen trucje — het is een systeem
            </h2>
            <p className="text-primary/60 mt-4 text-base leading-relaxed">
              Google beoordeelt honderden factoren tegelijk. Wie alleen een paar titels aanpast, ziet weinig. Wie het systeem snapt en consequent toepast, bouwt een positie die niet meer weggaat.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {aanpakken.map(({Icon, title, subtitle, desc, tijdlijn}, i) => (
              <AnimatedSection key={title} delay={i * 0.1}>
                <div className="bg-white border border-primary/8 rounded-sm p-8 h-full hover:border-gold/30 transition-colors">
                  <div className="w-12 h-12 rounded-sm bg-primary flex items-center justify-center mb-5">
                    <Icon size={22} className="text-gold" />
                  </div>
                  <span className="text-gold text-xs font-semibold tracking-widest uppercase">{subtitle}</span>
                  <h3 className="text-primary font-black text-xl mt-1 mb-3">{title}</h3>
                  <p className="text-primary/60 text-sm leading-relaxed mb-5">{desc}</p>
                  <span className="flex items-center gap-2 text-xs text-gold font-semibold">
                    <Clock size={12} /> {tijdlijn}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Wat wij doen */}
      <section className="bg-primary py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <SectionLabel light>Aanpak VDH Agency</SectionLabel>
              <h2 className="text-white font-black text-3xl lg:text-4xl mb-6">
                Wij analyseren, bouwen en bewaken jouw ranking
              </h2>
              <div className="flex flex-col gap-4">
                <p className="text-white/60 text-base leading-relaxed">
                  Elke SEO-opdracht start met een technische audit van jouw huidige website en een analyse van je concurrenten. Zo weten we precies waar de winst zit en hoeveel moeite het kost om boven te komen.
                </p>
                <p className="text-white/60 text-base leading-relaxed">
                  Vervolgens pakken we de meest impactvolle punten aan: technische fixes, zoekwoordstrategie, pagina-optimalisatie en waar nodig linkbuilding. Elke maand rapporteren we transparant over posities en verkeer.
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-3">
                {[
                  'Technische SEO audit & fixes',
                  'Zoekwoordonderzoek op maat',
                  'On-page optimalisatie per pagina',
                  'Lokale SEO voor jouw regio',
                  'Maandelijkse positierapportage',
                ].map(p => (
                  <div key={p} className="flex items-center gap-3">
                    <CheckCircle2 size={15} className="text-gold shrink-0" />
                    <span className="text-white/70 text-sm">{p}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.15}>
              <div className="grid grid-cols-1 gap-4">
                {[
                  {href: '/seo-bureau',          label: 'SEO bureau',           desc: 'Specialistisch SEO-bureau voor het MKB'},
                  {href: '/lokale-seo',           label: 'Lokale SEO',           desc: 'Bovenaan in jouw stad of regio'},
                  {href: '/google-ads-bureau',    label: 'Google Ads bureau',    desc: 'Direct zichtbaar met betaalde advertenties'},
                  {href: '/diensten/seo-sea',     label: 'SEO & SEA dienst',     desc: 'Volledig overzicht van de dienst'},
                ].map(({href, label, desc}) => (
                  <a key={href} href={href} className="group flex items-center justify-between bg-white/5 border border-white/10 rounded-sm px-5 py-4 hover:border-gold/40 transition-all">
                    <div>
                      <span className="text-white font-semibold text-sm group-hover:text-gold transition-colors block">{label}</span>
                      <span className="text-white/40 text-xs">{desc}</span>
                    </div>
                    <ArrowRight size={14} className="text-gold shrink-0" />
                  </a>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
