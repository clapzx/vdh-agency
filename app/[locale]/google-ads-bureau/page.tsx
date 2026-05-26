import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {ArrowRight, Target, BarChart2, DollarSign, Zap, CheckCircle2, ChevronDown} from 'lucide-react';
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
        name: 'Google Ads Bureau',
        provider: {'@id': `${BASE}/#organization`},
        description: 'Google Ads campagnebeheer voor het MKB. Meer aanvragen via Google, transparante rapportage en geen vaste contracten.',
        url: `${BASE}/google-ads-bureau`,
        offers: {'@type': 'Offer', priceCurrency: 'EUR', priceRange: '€€'},
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Wat doet een Google Ads bureau?',
            acceptedAnswer: {'@type': 'Answer', text: 'Een Google Ads bureau beheert jouw betaalde campagnes in Google Search, Display en Shopping. Ze zorgen voor de juiste zoekwoorden, biedstrategieën, advertentieteksten en continue optimalisatie om zo laag mogelijke kosten per aanvraag te realiseren.'},
          },
          {
            '@type': 'Question',
            name: 'Wat kost Google Ads beheer?',
            acceptedAnswer: {'@type': 'Answer', text: 'De beheerskosten bij VDH Agency zijn afhankelijk van de campagneomvang. We werken met een transparante vaste vergoeding, geen percentage over je advertentiebudget. Neem contact op voor een offerte op maat.'},
          },
          {
            '@type': 'Question',
            name: 'Hoe snel zie ik resultaat van Google Ads?',
            acceptedAnswer: {'@type': 'Answer', text: 'Google Ads is direct: zodra de campagne live gaat, verschijnt jouw advertentie al bij relevante zoekopdrachten. In de eerste 2 tot 4 weken optimaliseren we de campagne op basis van data voor maximale efficiëntie.'},
          },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {'@type': 'ListItem', position: 1, name: 'Home', item: BASE},
          {'@type': 'ListItem', position: 2, name: 'Google Ads Bureau', item: `${BASE}/google-ads-bureau`},
        ],
      },
    ],
  };
}

export async function generateMetadata({params}: {params?: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale = 'nl'} = params ? await params : {};
  if (locale !== 'nl') return {};
  return {
    title: 'Google Ads Bureau voor MKB: Meer Aanvragen, Eerlijke Prijs | VDH Agency',
    description: 'Google Ads bureau dat resultaat levert voor het MKB. VDH Agency beheert campagnes transparant, zonder percentage over je budget. Geen lange contracten. Gratis eerste advies.',
    alternates: {
      canonical: `${BASE}/google-ads-bureau`,
      languages: {'x-default': `${BASE}/google-ads-bureau`, nl: `${BASE}/google-ads-bureau`},
    },
    openGraph: {url: `${BASE}/google-ads-bureau`},
  };
}

export default async function GoogleAdsBureauPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  if (locale !== 'nl') notFound();

  const voordelen = [
    {Icon: Zap,        title: 'Direct resultaat', desc: 'Zodra je campagne live gaat, verschijnt jouw advertentie bij de juiste zoekopdrachten. Geen maanden wachten.'},
    {Icon: Target,     title: 'Precieze targeting', desc: 'We richten ons op de zoekwoorden die jouw klanten gebruiken op het moment dat ze klaar zijn om te kopen.'},
    {Icon: DollarSign, title: 'Transparante kosten', desc: 'Geen percentage over je advertentiebudget. Vaste beheersvergoeding, zodat jij weet wat je elke maand betaalt.'},
    {Icon: BarChart2,  title: 'Maandelijkse rapportage', desc: 'Elke maand ontvang je een duidelijk rapport: klikken, conversies, kosten per aanvraag en aanbevelingen.'},
  ];

  const faqs = [
    {q: 'Wat doet een Google Ads bureau voor mij?', a: 'Wij regelen alles rondom jouw campagnes: zoekwoordonderzoek, advertentieteksten, biedstrategieën, landingspagina-advies en maandelijkse optimalisatie. Jij focust op je vak, wij zorgen dat het budget goed besteed wordt.'},
    {q: 'Heb ik een minimaal advertentiebudget nodig?', a: 'Voor zinvolle campagnes raden we een minimum aan van €300 tot €500 per maand aan advertentiebudget. Dat is het budget dat direct naar Google gaat; onze beheerskosten komen daar los van.'},
    {q: 'Werkt Google Ads ook voor een kleine onderneming?', a: 'Absoluut. Juist voor MKB-bedrijven is Google Ads interessant omdat je lokaal en specifiek kunt targeten. Je adverteert alleen aan mensen die actief zoeken naar wat jij aanbiedt.'},
    {q: 'Zit ik vast aan een contract?', a: 'Nee. We werken zonder vaste looptijden. We vragen wel een opstartperiode van minimaal 3 maanden om de campagne goed te optimaliseren, maar daarna kun je maandelijks opzeggen.'},
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
              <span className="text-gold text-xs font-semibold tracking-widest uppercase">Google Ads bureau</span>
            </div>
            <h1 className="text-white font-black text-4xl lg:text-6xl leading-tight mb-5">
              Google Ads bureau voor het MKB: meer aanvragen, eerlijke prijs
            </h1>
            <p className="text-white/60 text-xl mb-10">
              Met Google Ads sta jij morgen al bovenaan bij de zoekopdrachten die jou klanten opleveren. VDH Agency beheert jouw campagnes transparant en zonder percentage over je budget.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="flex items-center gap-2 bg-gold text-primary font-bold text-sm px-7 py-3.5 rounded-sm hover:bg-gold-light transition-colors">
                Gratis campagneadvies <ArrowRight size={15} />
              </Link>
              <Link href="/hoger-in-google" className="flex items-center gap-2 border border-white/20 text-white font-semibold text-sm px-7 py-3.5 rounded-sm hover:border-gold hover:text-gold transition-colors">
                Hoger in Google
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Voordelen */}
      <section className="bg-light py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-2xl mb-14">
            <SectionLabel>Waarom VDH Agency</SectionLabel>
            <h2 className="text-primary font-black text-3xl lg:text-4xl">Google Ads beheer dat resultaat laat zien</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {voordelen.map(({Icon, title, desc}, i) => (
              <AnimatedSection key={title} delay={i * 0.08}>
                <div className="bg-white border border-primary/8 rounded-sm p-8 h-full hover:border-gold/30 transition-colors">
                  <div className="w-12 h-12 rounded-sm bg-primary flex items-center justify-center mb-5">
                    <Icon size={22} className="text-gold" />
                  </div>
                  <h3 className="text-primary font-bold text-lg mb-2">{title}</h3>
                  <p className="text-primary/60 text-sm leading-relaxed">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Wat wij doen */}
      <section className="bg-primary py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-2xl mb-12">
            <SectionLabel light>Onze aanpak</SectionLabel>
            <h2 className="text-white font-black text-3xl lg:text-4xl">Van nul naar converterend in 4 stappen</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {num: '01', title: 'Zoekwoordonderzoek', desc: 'We bepalen welke zoektermen jouw klanten gebruiken en wat de concurrentie en kosten zijn.'},
              {num: '02', title: 'Campagne bouwen', desc: 'Advertentieteksten, biedstrategieën, extensies en landingspagina-advies, alles op maat.'},
              {num: '03', title: 'Optimalisatie', desc: 'Wekelijks monitoren en bijsturen op basis van data: lagere kosten per klik, hogere conversieratio.'},
              {num: '04', title: 'Rapportage', desc: 'Maandelijks helder rapport met klikken, kosten, aanvragen en jouw ROI.'},
            ].map(({num, title, desc}, i) => (
              <AnimatedSection key={num} delay={i * 0.08}>
                <div className="bg-white/5 border border-white/10 rounded-sm p-7 hover:border-gold/30 transition-colors h-full">
                  <span className="text-gold font-black text-3xl opacity-40 block mb-4">{num}</span>
                  <h3 className="text-white font-bold text-base mb-2">{title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="mt-10 flex flex-wrap gap-4">
            {[
              {href: '/hoger-in-google',      label: 'Hoger in Google'},
              {href: '/seo-bureau',            label: 'SEO bureau'},
              {href: '/lokale-seo',            label: 'Lokale SEO'},
              {href: '/diensten/seo-sea',      label: 'SEO & SEA dienst'},
            ].map(({href, label}) => (
              <a key={href} href={href} className="flex items-center gap-2 border border-white/20 text-white/70 hover:border-gold hover:text-gold text-sm px-4 py-2 rounded-sm transition-colors">
                {label} <ArrowRight size={12} />
              </a>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-light py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-10">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="text-primary font-black text-3xl">Veelgestelde vragen over Google Ads</h2>
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

      <CTA />
    </>
  );
}
