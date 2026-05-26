import type {Metadata} from 'next';
import {ShoppingCart, CheckCircle2, ChevronDown} from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionLabel from '@/components/ui/SectionLabel';
import Breadcrumb from '@/components/ui/Breadcrumb';
import NoServiceCard from '@/components/ui/NoServiceCard';
import CTA from '@/components/sections/CTA';
import RelatedServices from '@/components/ui/RelatedServices';

const BASE = 'https://www.vdh-agency.com';

function serviceJsonLd(locale: string) {
  const isNl = locale === 'nl';
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: isNl ? 'Webshop Maken' : 'Webshop Development',
        provider: {'@id': `${BASE}/#organization`},
        areaServed: {'@type': 'Country', name: 'Netherlands'},
        description: isNl
          ? 'Webshops op maat gebouwd op Shopify of WooCommerce, met Google Shopping en productpagina SEO.'
          : 'Custom webshops built on Shopify or WooCommerce, with Google Shopping and product page SEO.',
        url: isNl ? `${BASE}/diensten/webshop-maken` : `${BASE}/en/services/ecommerce`,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {'@type': 'ListItem', position: 1, name: 'Home', item: isNl ? BASE : `${BASE}/en`},
          {'@type': 'ListItem', position: 2, name: isNl ? 'Diensten' : 'Services', item: isNl ? `${BASE}/diensten` : `${BASE}/en/services`},
          {'@type': 'ListItem', position: 3, name: isNl ? 'Webshop Maken' : 'Webshop Development', item: isNl ? `${BASE}/diensten/webshop-maken` : `${BASE}/en/services/ecommerce`},
        ],
      },
    ],
  };
}

export async function generateMetadata({
  params,
}: {
  params?: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale = 'nl'} = params ? await params : {};
  const isNl = locale === 'nl';
  return {
    title: isNl
      ? 'Webshop Laten Maken, Shopify & WooCommerce op Maat | VDH Agency'
      : 'Have a Webshop Built, Shopify & WooCommerce Custom | VDH Agency',
    description: isNl
      ? 'VDH Agency bouwt webshops op maat op Shopify of WooCommerce. SEO-geoptimaliseerd, Google Shopping-klaar en mobielvriendelijk. Gratis offerte aanvragen.'
      : 'VDH Agency builds custom webshops on Shopify or WooCommerce. SEO-optimised, Google Shopping-ready and mobile-friendly. Request a free quote.',
    alternates: {
      canonical: isNl ? `${BASE}/diensten/webshop-maken` : `${BASE}/en/services/ecommerce`,
      languages: {
        nl: `${BASE}/diensten/webshop-maken`,
        en: `${BASE}/en/services/ecommerce`,
        'x-default': `${BASE}/diensten/webshop-maken`,
      },
    },
    openGraph: {
      url: isNl ? `${BASE}/diensten/webshop-maken` : `${BASE}/en/services/ecommerce`,
    },
  };
}

export default async function WebshopMakenPage({
  params,
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  const isNl = locale === 'nl';

  const steps = isNl ? [
    {num: '01', title: 'Strategie & platformkeuze', desc: 'We analyseren jouw producten, doelgroep en concurrentie. Op basis daarvan kiezen we het platform dat het beste bij jou past: Shopify voor groei en eenvoud, WooCommerce voor flexibiliteit.'},
    {num: '02', title: 'Design & UX', desc: 'Een webshop die vertrouwen wekt begint met een doordacht ontwerp. Overzichtelijke productpagina\'s, een soepele checkout en een duidelijke merkuitstraling.'},
    {num: '03', title: 'Development & integraties', desc: 'We bouwen de webshop en koppelen alle benodigde systemen: betaalmethoden, bezorgopties, voorraad en eventuele boekhoudsoftware.'},
    {num: '04', title: 'SEO & Google Shopping', desc: 'Productpagina\'s worden geoptimaliseerd voor zoekmachines en gekoppeld aan Google Merchant Center, zodat jouw producten verschijnen in de Google Shopping-resultaten.'},
    {num: '05', title: 'Lancering & training', desc: 'Na grondig testen gaat de webshop live. Je ontvangt een praktische training zodat je zelf bestellingen kunt beheren, producten kunt toevoegen en de content kunt bijhouden.'},
  ] : [
    {num: '01', title: 'Strategy & platform', desc: 'We analyse your products, target audience and competition. Based on this we choose the platform that fits best: Shopify for growth and simplicity, WooCommerce for flexibility.'},
    {num: '02', title: 'Design & UX', desc: 'A webshop that builds trust starts with a well-considered design. Clear product pages, a smooth checkout and a distinct brand identity.'},
    {num: '03', title: 'Development & integrations', desc: 'We build the webshop and connect all required systems: payment methods, shipping options, inventory and any accounting software.'},
    {num: '04', title: 'SEO & Google Shopping', desc: 'Product pages are optimised for search engines and connected to Google Merchant Center, so your products appear in Google Shopping results.'},
    {num: '05', title: 'Launch & training', desc: 'After thorough testing the webshop goes live. You receive practical training so you can manage orders, add products and maintain content yourself.'},
  ];

  const faqs = isNl ? [
    {q: 'Wat kost een webshop laten maken?', a: 'De kosten hangen af van het platform, het aantal producten en de gewenste functionaliteiten. Neem contact op voor een vrijblijvende offerte op maat, dan weet je precies waar je aan toe bent.'},
    {q: 'Shopify of WooCommerce, wat is beter?', a: 'Dat hangt af van jouw situatie. Shopify is ideaal als je snel wil starten en weinig technische kennis hebt. WooCommerce geeft meer flexibiliteit en past goed bij bedrijven die al een WordPress-website hebben.'},
    {q: 'Kan ik de webshop zelf bijhouden?', a: 'Absoluut. Na de lancering ontvang je een training zodat je zelf producten kunt toevoegen, prijzen kunt aanpassen en bestellingen kunt verwerken. We staan altijd beschikbaar voor vragen.'},
    {q: 'Hoe lang duurt het bouwen van een webshop?', a: 'Voor een standaard webshop rekenen we 4 tot 6 weken, afhankelijk van het aantal producten en de complexiteit. Bij een vrijblijvend gesprek geven we een realistisch tijdspad.'},
  ] : [
    {q: 'How much does a webshop cost?', a: 'The cost depends on the platform, number of products and desired features. Contact us for a free custom quote so you know exactly what to expect.'},
    {q: 'Shopify or WooCommerce, which is better?', a: 'It depends on your situation. Shopify is ideal when you want to start quickly with minimal technical knowledge. WooCommerce offers more flexibility and suits businesses already using WordPress.'},
    {q: 'Can I manage the webshop myself?', a: 'Absolutely. After launch you receive training so you can add products, adjust prices and process orders yourself. We\'re always available for questions.'},
    {q: 'How long does it take to build a webshop?', a: 'For a standard webshop we estimate 4 to 6 weeks, depending on the number of products and complexity. We\'ll give you a realistic timeline during our free consultation.'},
  ];

  const includes = isNl
    ? ['Shopify / WooCommerce', 'Mobielvriendelijk & snel', 'Productpagina SEO', 'Google Shopping setup', 'Betaalmethoden & checkout', 'CMS & voorraadbeheer']
    : ['Shopify / WooCommerce', 'Mobile-friendly & fast', 'Product page SEO', 'Google Shopping setup', 'Payment methods & checkout', 'CMS & inventory management'];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(serviceJsonLd(locale))}}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map(({q, a}) => ({
            '@type': 'Question',
            name: q,
            acceptedAnswer: {'@type': 'Answer', text: a},
          })),
        })}}
      />

      {/* Hero */}
      <section className="bg-primary pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <Breadcrumb crumbs={[
              {label: 'Home', href: isNl ? '/' : '/en/'},
              {label: isNl ? 'Diensten' : 'Services', href: isNl ? '/diensten' : '/en/services'},
              {label: isNl ? 'Webshop Maken' : 'Webshop Development'},
            ]} />
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-6 h-px bg-gold" />
              <span className="text-gold text-xs font-semibold tracking-widest uppercase">
                {isNl ? 'E-commerce & Webshop' : 'E-commerce & Webshop'}
              </span>
            </div>
            <h1 className="text-white font-black text-4xl lg:text-6xl leading-tight mb-5">
              {isNl ? 'Webshop laten maken die écht verkoopt' : 'Have a Webshop Built That Actually Sells'}
            </h1>
            <p className="text-white/60 text-xl">
              {isNl
                ? 'Van productpagina\'s tot Google Shopping: wij bouwen webshops die vertrouwen wekken, snel laden en klanten omzetten.'
                : 'From product pages to Google Shopping: we build webshops that build trust, load fast and convert customers.'}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* What is */}
      <section className="bg-light py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <SectionLabel>{isNl ? 'E-commerce & Webshop' : 'E-commerce & Webshop'}</SectionLabel>
              <h2 className="text-primary font-black text-3xl lg:text-4xl mb-6">
                {isNl ? 'Een webshop die voor je werkt' : 'A webshop that works for you'}
              </h2>
              <div className="flex flex-col gap-4">
                <p className="text-primary/70 text-base leading-relaxed">
                  {isNl
                    ? 'Een webshop is meer dan een online catalogus. Het is een verkoopkanaal dat 24/7 klaar moet staan om bezoekers te overtuigen en te converteren. Wij bouwen webshops op basis van Shopify of WooCommerce, afhankelijk van jouw situatie en ambities.'
                    : 'A webshop is more than an online catalogue. It\'s a sales channel that needs to be ready 24/7 to convince and convert visitors. We build webshops based on Shopify or WooCommerce, depending on your situation and ambitions.'}
                </p>
                <p className="text-primary/70 text-base leading-relaxed">
                  {isNl
                    ? 'Vanaf dag één is jouw webshop geoptimaliseerd voor zoekmachines. Productpagina\'s met de juiste structuur, snelle laadtijden en een technisch SEO-fundament zorgen ervoor dat klanten jou vinden via Google.'
                    : 'From day one your webshop is optimised for search engines. Product pages with the right structure, fast loading times and a solid technical SEO foundation ensure customers find you via Google.'}
                </p>
                <p className="text-primary/70 text-base leading-relaxed">
                  {isNl
                    ? 'Wij koppelen jouw webshop aan Google Merchant Center zodat je producten verschijnen in Google Shopping. Dat vergroot je bereik direct en trekt bezoekers die al klaar zijn om te kopen.'
                    : 'We connect your webshop to Google Merchant Center so your products appear in Google Shopping. This immediately increases your reach and attracts visitors who are ready to buy.'}
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.15}>
              <div className="bg-primary rounded-sm p-10 border-l-4 border-gold">
                <div className="w-14 h-14 rounded-sm bg-gold/10 flex items-center justify-center mb-6">
                  <ShoppingCart size={26} className="text-gold" />
                </div>
                <h3 className="text-white font-bold text-xl mb-4">
                  {isNl ? 'Wat is inbegrepen' : 'What is included'}
                </h3>
                <ul className="flex flex-col gap-3">
                  {includes.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle2 size={15} className="text-gold shrink-0" />
                      <span className="text-white/70 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-primary py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-2xl mb-16">
            <SectionLabel light>{isNl ? 'Werkwijze' : 'How we work'}</SectionLabel>
            <h2 className="text-white font-black text-3xl lg:text-5xl">
              {isNl ? 'Van strategie tot lancering' : 'From strategy to launch'}
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map(({num, title, desc}, i) => (
              <AnimatedSection key={num} delay={i * 0.08}>
                <div className="bg-white/5 border border-white/10 rounded-sm p-7 hover:border-gold/30 transition-colors h-full">
                  <span className="text-gold font-black text-3xl opacity-40 block mb-4">{num}</span>
                  <h3 className="text-white font-bold text-base mb-2">{title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
            <AnimatedSection delay={steps.length * 0.08}>
              <NoServiceCard variant="step" />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-light py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-12">
            <SectionLabel>{isNl ? 'Veelgestelde vragen' : 'Frequently asked questions'}</SectionLabel>
            <h2 className="text-primary font-black text-3xl lg:text-4xl">
              {isNl ? 'Alles over webshop maken' : 'Everything about webshop development'}
            </h2>
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

      <RelatedServices
        title={isNl ? 'Combineer met' : 'Combine with'}
        services={[
          {href: isNl ? '/diensten/seo-sea'          : '/en/services/seo-sea',          label: 'SEO & SEA',                                                        desc: isNl ? 'Zet je webshop hoger in Google' : 'Rank your webshop higher in Google'},
          {href: isNl ? '/diensten/website-maken'    : '/en/services/website-development', label: isNl ? 'Website Maken' : 'Website Development',                  desc: isNl ? 'Professionele bedrijfswebsite' : 'Professional business website'},
          {href: isNl ? '/diensten/digitale-analyse' : '/en/services/digital-analytics', label: isNl ? 'Digitale Analyse' : 'Digital Analytics',                   desc: isNl ? 'Meet conversies en omzet' : 'Track conversions and revenue'},
        ]}
      />
      <CTA />
    </>
  );
}
