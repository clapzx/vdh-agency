import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {ArrowRight, ShoppingCart, Zap, Globe, BarChart2, CheckCircle2, ChevronDown} from 'lucide-react';
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
        name: 'Shopify Webshop Laten Maken',
        provider: {'@id': `${BASE}/#organization`},
        description: 'Professionele Shopify webshop laten maken voor het MKB. Snel live, mobiel geoptimaliseerd en klaar voor Google Shopping.',
        url: `${BASE}/shopify-webshop`,
        offers: {'@type': 'Offer', priceCurrency: 'EUR', priceRange: '€€'},
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Waarom Shopify en niet WooCommerce?',
            acceptedAnswer: {'@type': 'Answer', text: 'Shopify is een gehost platform: geen serveronderhoud, automatische updates en ingebouwde beveiliging. WooCommerce vraagt meer technisch beheer. Voor de meeste MKB-webshops is Shopify sneller, stabieler en makkelijker te schalen.'},
          },
          {
            '@type': 'Question',
            name: 'Wat kost een Shopify webshop laten maken?',
            acceptedAnswer: {'@type': 'Answer', text: 'De bouwkosten zijn afhankelijk van de omvang: aantal producten, gewenste integraties (ERP, betaalmethoden, verzending) en maatwerk design. Naast de bouwkosten betaal je Shopify een maandelijks abonnement. We maken altijd een vaste offerte op maat.'},
          },
          {
            '@type': 'Question',
            name: 'Hoe snel is mijn Shopify webshop live?',
            acceptedAnswer: {'@type': 'Answer', text: 'Voor een standaard Shopify webshop tot 100 producten rekenen we 3 tot 5 weken. Bij grotere catalogi of specifieke maatwerk-integraties kan dat uitlopen. We communiceren dit duidelijk in de offertefase.'},
          },
          {
            '@type': 'Question',
            name: 'Kan ik mijn Shopify shop zelf beheren?',
            acceptedAnswer: {'@type': 'Answer', text: 'Ja. Shopify heeft een van de meest gebruiksvriendelijke backends van alle e-commerce platforms. Je kunt zelf producten toevoegen, orders verwerken en kortingsacties instellen. We begeleiden je na de lancering met een training.'},
          },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {'@type': 'ListItem', position: 1, name: 'Home', item: BASE},
          {'@type': 'ListItem', position: 2, name: 'Shopify Webshop', item: `${BASE}/shopify-webshop`},
        ],
      },
    ],
  };
}

export async function generateMetadata({params}: {params?: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale = 'nl'} = params ? await params : {};
  if (locale !== 'nl') return {};
  return {
    title: 'Shopify Webshop Laten Maken: Snel, Schaalbaar & Klaar voor Groei',
    description: 'Shopify webshop laten maken? VDH Agency bouwt professionele Shopify webshops voor het MKB. Google Shopping ready, mobielvriendelijk en eenvoudig zelf te beheren. Gratis adviesgesprek.',
    alternates: {
      canonical: `${BASE}/shopify-webshop`,
      languages: {'x-default': `${BASE}/shopify-webshop`, nl: `${BASE}/shopify-webshop`},
    },
    openGraph: {url: `${BASE}/shopify-webshop`},
  };
}

export default async function ShopifyWebshopPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  if (locale !== 'nl') notFound();

  const voordelen = [
    {Icon: Zap,          title: 'Razendsnel live',      desc: 'Shopify is gehost en onderhoudsvri. Geen serverconfiguratie, geen updates die fout gaan. Jij focust op verkopen.'},
    {Icon: ShoppingCart, title: 'Alles ingebouwd',      desc: 'Betaalmethoden, verzending, kortingscodes, reviews en meer — Shopify heeft het standaard of via betrouwbare apps.'},
    {Icon: Globe,        title: 'Google Shopping ready', desc: 'We koppelen jouw webshop direct aan Google Merchant Center zodat je producten verschijnen in Shopping-resultaten.'},
    {Icon: BarChart2,    title: 'Schaalbaar van dag 1',  desc: 'Of je 10 of 10.000 producten verkoopt, Shopify schaalt mee. Je betaalt pas meer als je ook meer verdient.'},
  ];

  const faqs = [
    {q: 'Waarom Shopify en niet WooCommerce?', a: 'Shopify is een gehost platform — geen serveronderhoud, automatische beveiligingsupdates en een stabiele infrastructuur die door miljoenen webshops wordt gebruikt. WooCommerce is een plugin op WordPress en vereist meer technisch beheer. Voor de meeste MKB-ondernemers is Shopify sneller, betrouwbaarder en makkelijker te schalen.'},
    {q: 'Wat kost een Shopify webshop laten maken?', a: 'De kosten zijn afhankelijk van de omvang. Denk aan het aantal producten, gewenste integraties en de hoeveelheid maatwerk in design. Naast de eenmalige bouwkosten betaal je Shopify een maandelijks platform-abonnement (vanaf ca. €32/maand). We maken altijd een vaste offerte zodat je exact weet wat je kwijt bent.'},
    {q: 'Hoe snel is mijn webshop live?', a: 'Voor een webshop tot 100 producten rekenen we 3 tot 5 weken. Bij grotere catalogi of specifieke koppelingen (ERP, PIM, extern voorraadbeheer) kan dat uitlopen tot 6 tot 8 weken. We communiceren dit open in de offertefase.'},
    {q: 'Kan ik ook internationale verkoop via Shopify?', a: 'Ja. Shopify Markets stelt je in staat om meerdere talen, valuta en belastingregels in één shop te beheren. Handig als je naast Nederland ook wilt verkopen in België, Duitsland of verder.'},
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
              <span className="text-gold text-xs font-semibold tracking-widest uppercase">Shopify webshop</span>
            </div>
            <h1 className="text-white font-black text-4xl lg:text-6xl leading-tight mb-5">
              Shopify webshop laten maken: snel, schaalbaar en klaar voor groei
            </h1>
            <p className="text-white/60 text-xl mb-10">
              Shopify is het e-commerce platform dat meer dan 4 miljoen webshops wereldwijd draait. VDH Agency bouwt jouw Shopify webshop op maat — professioneel design, Google Shopping-koppeling en eenvoudig zelf te beheren.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="flex items-center gap-2 bg-gold text-primary font-bold text-sm px-7 py-3.5 rounded-sm hover:bg-gold-light transition-colors">
                Gratis adviesgesprek <ArrowRight size={15} />
              </Link>
              <a href="/diensten/webshop-maken" className="flex items-center gap-2 border border-white/20 text-white font-semibold text-sm px-7 py-3.5 rounded-sm hover:border-gold hover:text-gold transition-colors">
                Bekijk webshop-dienst
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stat block */}
      <section className="bg-primary border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              {num: '4M+',  label: 'webshops draaien op Shopify wereldwijd'},
              {num: '175',  label: 'landen bedienen via Shopify Markets'},
              {num: '70%',  label: 'van mobiele bezoekers koopt als de shop snel laadt'},
              {num: '3-5 wkn', label: 'van intake tot livegang bij VDH Agency'},
            ].map(({num, label}) => (
              <div key={num}>
                <span className="text-gold font-black text-3xl block mb-1">{num}</span>
                <span className="text-white/50 text-xs leading-snug">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Voordelen */}
      <section className="bg-light py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-2xl mb-14">
            <SectionLabel>Waarom Shopify</SectionLabel>
            <h2 className="text-primary font-black text-3xl lg:text-4xl">Het platform dat gewoon werkt</h2>
            <p className="text-primary/60 mt-4 text-base leading-relaxed">
              Shopify neemt serveronderhoud, beveiligingsupdates en hostingproblemen uit handen. Jij beheert je assortiment, wij zorgen dat alles staat.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {voordelen.map(({Icon, title, desc}, i) => (
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

      {/* Stappen */}
      <section className="bg-primary py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-2xl mb-12">
            <SectionLabel light>Onze aanpak</SectionLabel>
            <h2 className="text-white font-black text-3xl lg:text-4xl">Van concept naar verkoopklare shop in 4 stappen</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {num: '01', title: 'Intake & strategie',   desc: 'We bespreken jouw assortiment, doelgroep en doelen. Shopify-thema selectie en structuur op maat.'},
              {num: '02', title: 'Design & bouw',        desc: 'Professioneel design, productpagina\'s, categorie-opbouw, betaal- en verzendopties geconfigureerd.'},
              {num: '03', title: 'SEO & Google Shopping', desc: 'Producttitels, meta-data, schema markup en Merchant Center-koppeling voor Google Shopping-zichtbaarheid.'},
              {num: '04', title: 'Launch & training',    desc: 'We gaan live en leren je hoe je orders verwerkt, producten toevoegt en kortingsacties inzet.'},
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
            <div className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-gold" />
              <span className="text-white/60 text-sm">Geen vaste looptijd na launch</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-gold" />
              <span className="text-white/60 text-sm">Training na lancering inbegrepen</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-gold" />
              <span className="text-white/60 text-sm">Vaste prijs, geen verrassingen</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Gerelateerde diensten */}
      <section className="bg-light py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-primary font-black text-xl mb-6">Gerelateerde diensten</h2>
            <div className="flex flex-wrap gap-3">
              {[
                {href: '/diensten/webshop-maken',  label: 'Webshop-dienst (volledig overzicht)'},
                {href: '/hoger-in-google',          label: 'Hoger in Google'},
                {href: '/google-ads-bureau',        label: 'Google Ads bureau'},
                {href: '/website-laten-maken',      label: 'Website laten maken'},
                {href: '/diensten/seo-sea',         label: 'SEO & SEA dienst'},
              ].map(({href, label}) => (
                <a key={href} href={href} className="flex items-center gap-2 bg-white border border-primary/10 hover:border-gold/40 text-primary/70 hover:text-gold text-sm px-4 py-2.5 rounded-sm transition-colors">
                  {label} <ArrowRight size={12} />
                </a>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-primary py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-10">
            <SectionLabel light>FAQ</SectionLabel>
            <h2 className="text-white font-black text-3xl">Veelgestelde vragen over Shopify</h2>
          </AnimatedSection>
          <div className="flex flex-col gap-4">
            {faqs.map(({q, a}, i) => (
              <AnimatedSection key={i} delay={i * 0.06}>
                <details className="bg-white/5 border border-white/10 rounded-sm group">
                  <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none font-semibold text-white text-sm">
                    {q}
                    <ChevronDown size={16} className="text-gold shrink-0 group-open:rotate-180 transition-transform" />
                  </summary>
                  <p className="px-6 pb-5 text-white/60 text-sm leading-relaxed">{a}</p>
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
