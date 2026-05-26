import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {ArrowRight, CheckCircle2, Clock, Euro, Smartphone, Search, Globe, ChevronDown} from 'lucide-react';
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
        name: 'Website Laten Maken',
        provider: {'@id': `${BASE}/#organization`},
        areaServed: {'@type': 'Country', name: 'Netherlands'},
        description: 'Professionele website laten maken voor het MKB. SEO-geoptimaliseerd, mobielvriendelijk en snel. Inclusief CMS en technisch fundament.',
        url: `${BASE}/website-laten-maken`,
        offers: {'@type': 'Offer', priceCurrency: 'EUR', priceRange: '€€'},
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Wat kost een website laten maken?',
            acceptedAnswer: {'@type': 'Answer', text: 'Een professionele zakelijke website kost bij VDH Agency afhankelijk van de scope en het aantal pagina\'s. We werken met transparante offertes op maat. Plan een gratis gesprek voor een eerlijke prijsinschatting.'},
          },
          {
            '@type': 'Question',
            name: 'Hoe lang duurt het bouwen van een website?',
            acceptedAnswer: {'@type': 'Answer', text: 'Voor een zakelijke website rekenen we gemiddeld 3 tot 5 weken, afhankelijk van de omvang en het aanleveren van content.'},
          },
          {
            '@type': 'Question',
            name: 'Is de website SEO-geoptimaliseerd?',
            acceptedAnswer: {'@type': 'Answer', text: 'Ja. Elke website die wij bouwen heeft een technisch SEO-fundament: correcte headings, snelle laadtijden, schema markup, mobielvriendelijk en een logische URL-structuur.'},
          },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {'@type': 'ListItem', position: 1, name: 'Home', item: BASE},
          {'@type': 'ListItem', position: 2, name: 'Website Laten Maken', item: `${BASE}/website-laten-maken`},
        ],
      },
    ],
  };
}

export async function generateMetadata({params}: {params?: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale = 'nl'} = params ? await params : {};
  if (locale !== 'nl') return {};
  return {
    title: 'Website Laten Maken voor MKB: Snel, SEO-proof & op Maat | VDH Agency',
    description: 'Website laten maken? VDH Agency bouwt professionele, snelle en SEO-geoptimaliseerde websites voor het MKB. Transparante prijs, direct contact met de specialist. Gratis offerte.',
    alternates: {
      canonical: `${BASE}/website-laten-maken`,
      languages: {'x-default': `${BASE}/website-laten-maken`, nl: `${BASE}/website-laten-maken`},
    },
    openGraph: {url: `${BASE}/website-laten-maken`},
  };
}

export default async function WebsiteLatenMakenPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  if (locale !== 'nl') notFound();

  const voordelen = [
    {Icon: Search,      title: 'SEO-fundament', desc: 'Correct opgezet vanaf dag één: headings, meta-data, schema markup, laadsnelheid en URL-structuur.'},
    {Icon: Smartphone,  title: 'Mobielvriendelijk', desc: 'Meer dan 60% van websitebezoek komt van mobiel. Jouw site ziet er op elk scherm perfect uit.'},
    {Icon: Clock,       title: 'Snel live', desc: 'Van intake tot lancering gemiddeld 3 tot 5 weken, afhankelijk van scope en jouw aanlevering.'},
    {Icon: Euro,        title: 'Transparante prijs', desc: 'Geen verborgen kosten, geen verrassingen. Vaste offerte op maat voordat we beginnen.'},
    {Icon: Globe,       title: 'CMS-integratie', desc: 'Jij houdt de controle. Na lancering kun je zelf teksten, afbeeldingen en pagina\'s aanpassen.'},
    {Icon: CheckCircle2, title: 'Nazorg inbegrepen', desc: 'Na de livegang staan we beschikbaar voor vragen en kleine aanpassingen. Geen extra factuur.'},
  ];

  const faqs = [
    {q: 'Wat kost een website laten maken?', a: 'Dat hangt af van de omvang: aantal pagina\'s, gewenste functionaliteiten en of je ook een CMS wilt. We werken altijd met een vaste prijs op basis van een duidelijke offerte. Neem contact op voor een vrijblijvende inschatting.'},
    {q: 'Kan ik mijn website zelf bijhouden?', a: 'Ja. We bouwen met een CMS waarmee je zelf teksten en afbeeldingen kunt aanpassen zonder technische kennis. Je ontvangt een training na de lancering.'},
    {q: 'Is een nieuwe website goed voor mijn SEO?', a: 'Dat hangt af van hoe we het aanpakken. Een website die wij bouwen heeft een technisch SEO-fundament ingebakken. Dat is een vliegende start, maar geen garantie voor directe rankings — die bouw je op met tijd en content.'},
    {q: 'Wat als ik ook een webshop wil?', a: 'Dan kijk je naar onze webshop-dienst op Shopify of WooCommerce. Die is speciaal gericht op productverkoop, Google Shopping en conversie-optimalisatie.'},
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
              <span className="text-gold text-xs font-semibold tracking-widest uppercase">Website laten maken</span>
            </div>
            <h1 className="text-white font-black text-4xl lg:text-6xl leading-tight mb-5">
              Een professionele website die klanten binnenhaalt
            </h1>
            <p className="text-white/60 text-xl mb-10">
              VDH Agency bouwt websites voor het MKB die snel laden, goed scoren in Google en bezoekers omzetten in klanten. Op maat, met een vaste prijs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="flex items-center gap-2 bg-gold text-primary font-bold text-sm px-7 py-3.5 rounded-sm hover:bg-gold-light transition-colors">
                Gratis offerte aanvragen <ArrowRight size={15} />
              </Link>
              <Link href="/diensten/website-maken" className="flex items-center gap-2 border border-white/20 text-white font-semibold text-sm px-7 py-3.5 rounded-sm hover:border-gold hover:text-gold transition-colors">
                Bekijk onze webdienst
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stat block */}
      <section className="bg-primary border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              {num: '75%', label: 'van zoekers scrollt nooit voorbij de eerste pagina'},
              {num: '53%', label: 'van al het websiteverkeer komt van organisch zoeken'},
              {num: '3 sec', label: 'is alles wat een bezoeker geeft voor een trage site om te laden'},
              {num: '3–5 wkn', label: 'van intake tot livegang bij VDH Agency'},
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
            <SectionLabel>Wat je krijgt</SectionLabel>
            <h2 className="text-primary font-black text-3xl lg:text-4xl">Elke website van VDH Agency is standaard voorzien van</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {voordelen.map(({Icon, title, desc}, i) => (
              <AnimatedSection key={title} delay={i * 0.07}>
                <div className="bg-white border border-primary/8 rounded-sm p-7 h-full hover:border-gold/30 transition-colors">
                  <div className="w-10 h-10 rounded-sm bg-gold/10 flex items-center justify-center mb-4">
                    <Icon size={19} className="text-gold" />
                  </div>
                  <h3 className="text-primary font-bold text-sm mb-2">{title}</h3>
                  <p className="text-primary/60 text-sm leading-relaxed">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Intern links blok */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-white font-black text-2xl mb-8">Gerelateerde diensten</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {href: '/diensten/website-maken',  label: 'Webdienst (diepgang)',  desc: 'Volledig overzicht van onze website-dienst'},
                {href: '/diensten/webshop-maken',  label: 'Webshop laten maken',   desc: 'Shopify of WooCommerce voor productverkoop'},
                {href: '/hoger-in-google',          label: 'Hoger in Google',       desc: 'Maak je nieuwe site ook vindbaar'},
                {href: '/seo-bureau',               label: 'SEO bureau',             desc: 'Specialistische SEO na de bouw'},
                {href: '/diensten/branding',        label: 'Branding & huisstijl',  desc: 'Sterk visueel merk voor je website'},
                {href: '/diensten/digitale-analyse',label: 'Digitale Analyse',      desc: 'Meet bezoekers en conversies'},
              ].map(({href, label, desc}) => (
                <a key={href} href={href} className="group bg-white/5 border border-white/10 rounded-sm px-5 py-4 hover:border-gold/40 transition-all">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-white font-semibold text-sm group-hover:text-gold transition-colors">{label}</span>
                    <ArrowRight size={13} className="text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <span className="text-white/40 text-xs">{desc}</span>
                </a>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-light py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-10">
            <SectionLabel>Veelgestelde vragen</SectionLabel>
            <h2 className="text-primary font-black text-3xl">Website laten maken: jouw vragen beantwoord</h2>
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
