import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {ArrowRight, Palette, Zap, Search, Smartphone, CheckCircle2, ChevronDown} from 'lucide-react';
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
        name: 'Webdesign Bureau',
        provider: {'@id': `${BASE}/#organization`},
        description: 'Webdesign bureau voor het MKB. Professioneel webdesign dat niet alleen mooi is maar ook klanten binnenhaalt. SEO-geoptimaliseerd, mobielvriendelijk en snel.',
        url: `${BASE}/webdesign-bureau`,
        areaServed: {'@type': 'Country', name: 'Netherlands'},
        offers: {'@type': 'Offer', priceCurrency: 'EUR', priceRange: '€€'},
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Wat doet een webdesign bureau?',
            acceptedAnswer: {'@type': 'Answer', text: 'Een webdesign bureau ontwerpt en bouwt professionele websites. Bij VDH Agency gaat dat verder dan een mooi uiterlijk: elke website wordt gebouwd met een SEO-fundament, snelle laadtijden en een UX die bezoekers naar een contactopname of aankoop leidt.'},
          },
          {
            '@type': 'Question',
            name: 'Wat kost webdesign bureau inhuren?',
            acceptedAnswer: {'@type': 'Answer', text: 'Een professionele zakelijke website bij VDH Agency start vanaf €1.500. Een uitgebreide site met meerdere pagina\'s, CMS en maatwerk functionaliteiten loopt op tot €3.500 of meer. We sturen altijd een vaste offerte na een kennismakingsgesprek.'},
          },
          {
            '@type': 'Question',
            name: 'Hoe lang duurt het bouwen van een website?',
            acceptedAnswer: {'@type': 'Answer', text: 'Een zakelijke website is doorgaans binnen 3 tot 5 weken live, afhankelijk van de omvang en het aanleveren van content. We spreken altijd een realistische planning af.'},
          },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {'@type': 'ListItem', position: 1, name: 'Home', item: BASE},
          {'@type': 'ListItem', position: 2, name: 'Webdesign Bureau', item: `${BASE}/webdesign-bureau`},
        ],
      },
    ],
  };
}

export async function generateMetadata({params}: {params?: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale = 'nl'} = params ? await params : {};
  if (locale !== 'nl') return {};
  return {
    title: 'Webdesign Bureau: Websites die Klanten Binnenhalen',
    description: 'Webdesign bureau voor het MKB. VDH Agency bouwt websites die niet alleen mooi zijn, maar ook snel laden, goed scoren in Google en bezoekers converteren. Gratis offerte.',
    alternates: {
      canonical: `${BASE}/webdesign-bureau`,
      languages: {'x-default': `${BASE}/webdesign-bureau`, nl: `${BASE}/webdesign-bureau`},
    },
    openGraph: {url: `${BASE}/webdesign-bureau`},
  };
}

export default async function WebdesignBureauPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  if (locale !== 'nl') notFound();

  const elementen = [
    {Icon: Palette,    title: 'Professioneel design',    desc: 'Een uniek design dat past bij jouw merk. Geen template, maar een visuele identiteit die vertrouwen uitstraalt en bezoekers overtuigt.'},
    {Icon: Zap,        title: 'Snelle laadtijden',        desc: 'Elke seconde extra laadtijd kost je 7% conversie. Wij bouwen lichtsnelle websites die ook op mobiel direct laden.'},
    {Icon: Search,     title: 'SEO-fundament ingebouwd', desc: 'Correcte heading-structuur, schema markup, sitemap, canonicals en meta-data. Jouw nieuwe site rankt van dag één beter.'},
    {Icon: Smartphone, title: 'Mobile-first',             desc: 'Meer dan 60% van websitebezoek komt van mobiel. Jouw site ziet er op elk scherm perfect uit — van iPhone tot desktop.'},
  ];

  const faqs = [
    {q: 'Wat is het verschil tussen webdesign en websitebouw?', a: 'Webdesign richt zich op het visuele ontwerp en de gebruikerservaring (UX). Websitebouw is de technische realisatie. Bij VDH Agency doen we beiden: we ontwerpen én bouwen jouw website, zodat design en techniek perfect op elkaar aansluiten.'},
    {q: 'Kan ik de website zelf aanpassen na oplevering?', a: 'Ja. We bouwen met een gebruiksvriendelijk CMS zodat jij zelf teksten, afbeeldingen en pagina\'s kunt aanpassen. Na de lancering geven we je een korte training.'},
    {q: 'Is mijn website ook vindbaar in Google?', a: 'Elke website die wij bouwen heeft een technisch SEO-fundament. Of je daarna ook actief aan SEO wilt werken is jouw keuze — we bieden dat als aanvullende dienst aan.'},
    {q: 'Wat als ik ook een webshop wil?', a: 'Dan kijken we naar onze e-commerce dienst op Shopify of WooCommerce. Die is speciaal gericht op productverkoop, Google Shopping en conversie-optimalisatie voor webshops.'},
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
              <span className="text-gold text-xs font-semibold tracking-widest uppercase">Webdesign bureau</span>
            </div>
            <h1 className="text-white font-black text-4xl lg:text-6xl leading-tight mb-5">
              Webdesign bureau: een website die niet alleen mooi is, maar ook klanten binnenhaalt
            </h1>
            <p className="text-white/60 text-xl mb-10">
              VDH Agency bouwt professionele websites voor het MKB. Snel, mobielvriendelijk, SEO-geoptimaliseerd en op maat — zodat jouw website jou 24/7 voor je laat werken.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="flex items-center gap-2 bg-gold text-primary font-bold text-sm px-7 py-3.5 rounded-sm hover:bg-gold-light transition-colors">
                Gratis offerte aanvragen <ArrowRight size={15} />
              </Link>
              <a href="/diensten/website-maken" className="flex items-center gap-2 border border-white/20 text-white font-semibold text-sm px-7 py-3.5 rounded-sm hover:border-gold hover:text-gold transition-colors">
                Bekijk de dienst
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Elementen */}
      <section className="bg-light py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-2xl mb-14">
            <SectionLabel>Onze standaard</SectionLabel>
            <h2 className="text-primary font-black text-3xl lg:text-4xl">Vier elementen in elke website van VDH Agency</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {elementen.map(({Icon, title, desc}, i) => (
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

      {/* Aanpak */}
      <section className="bg-primary py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-2xl mb-12">
            <SectionLabel light>Werkwijze</SectionLabel>
            <h2 className="text-white font-black text-3xl lg:text-4xl">Van intake tot live in 4 stappen</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {num: '01', title: 'Intake & briefing', desc: 'We bespreken jouw doelen, doelgroep en stijlvoorkeur. Jij houdt de regie, wij vertalen het naar een concreet voorstel.'},
              {num: '02', title: 'Design & prototype', desc: 'Je ziet het design voordat we bouwen. Na jouw goedkeuring gaan we pas de technische kant realiseren.'},
              {num: '03', title: 'Bouw & SEO-inrichting', desc: 'Clean code, CMS-integratie, schema markup, sitemap en alle technische SEO-elementen — ingebouwd, niet geplakt.'},
              {num: '04', title: 'Launch & nazorg', desc: 'Vlekkeloze lancering en beschikbaar voor vragen de eerste weken. Kleine aanpassingen direct na oplevering zijn inbegrepen.'},
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
              {href: '/website-laten-maken',     label: 'Website laten maken'},
              {href: '/hoger-in-google',          label: 'Hoger in Google'},
              {href: '/seo-bureau',               label: 'SEO bureau'},
              {href: '/diensten/webshop-maken',   label: 'Webshop laten maken'},
              {href: '/diensten/branding',        label: 'Branding & huisstijl'},
            ].map(({href, label}) => (
              <a key={href} href={href} className="flex items-center gap-2 border border-white/20 text-white/70 hover:border-gold hover:text-gold text-sm px-4 py-2 rounded-sm transition-colors">
                {label} <ArrowRight size={12} />
              </a>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Checklist */}
      <section className="bg-light py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-primary font-black text-2xl mb-6">Elke website van VDH Agency bevat standaard:</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {['Uniek maatwerk design','Mobielvriendelijk (responsive)','SEO-fundament ingebouwd','Snelle laadtijden (Core Web Vitals)','CMS zodat jij zelf kunt aanpassen','Schema markup & structured data','Sitemap & robots.txt','SSL-certificaat','Nazorg na lancering','Vaste prijs — geen verborgen kosten'].map(item => (
                <div key={item} className="flex items-center gap-3 bg-white border border-primary/8 rounded-sm px-4 py-3">
                  <CheckCircle2 size={13} className="text-gold shrink-0" />
                  <span className="text-primary/70 text-sm">{item}</span>
                </div>
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
            <h2 className="text-white font-black text-3xl">Vragen over webdesign uitbesteden</h2>
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
