import type {Metadata} from 'next';
import {ArrowRight, ChevronDown} from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import CTA from '@/components/sections/CTA';
import {Link} from '@/i18n/navigation';

const BASE = 'https://www.vdh-agency.com';
const SLUG = '/blog/shopify-vs-woocommerce';
const PUBLISHED = '2026-05-26';
const MODIFIED = '2026-05-30';

const faqs = [
  {
    q: 'Is Shopify duurder dan WooCommerce?',
    a: 'Shopify kost een vast maandabonnement. WooCommerce is gratis als plugin, maar je betaalt zelf voor hosting, SSL, betaalplugins en onderhoud. Op jaarbasis liggen de totale kosten vaak dicht bij elkaar. Shopify is transparanter in kosten; WooCommerce is flexibeler maar vereist meer technisch beheer.',
  },
  {
    q: 'Wat is het verschil tussen WordPress en WooCommerce?',
    a: 'WordPress is een Content Management Systeem (CMS), primair ontworpen voor websites en blogs. WooCommerce is een plugin die WordPress uitbreidt met webshop-functionaliteit. Samen vormen ze een krachtig platform, maar je bent verantwoordelijk voor hosting, beveiliging en updates van beide.',
  },
  {
    q: 'Welk platform is beter voor SEO?',
    a: 'Beide platforms kunnen goed scoren in Google. WooCommerce geeft via WordPress en plugins als Yoast volledige controle over je SEO-instellingen. Shopify heeft ingebouwde SEO-functies maar is iets beperkter in URL-structuur. Voor de meeste MKB-webshops maakt het weinig verschil als het platform goed is opgezet.',
  },
  {
    q: 'Welk platform raadt VDH Agency aan?',
    a: 'Voor de meeste MKB-webshops adviseren wij Shopify. Het is sneller live, stabieler beheerd en makkelijker te onderhouden zonder diepgaande technische kennis. WooCommerce adviseren we als je al op WordPress werkt, specifieke integraties nodig hebt die alleen via WP-plugins beschikbaar zijn, of als je zowel een uitgebreid blog als een webshop onder één dak wilt.',
  },
];

function blogJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        headline: 'Shopify vs WooCommerce: welk platform past bij jouw webshop?',
        description: 'Shopify of WooCommerce voor je webshop? Eerlijke vergelijking: Shopify is gebouwd voor verkopen, WooCommerce bouwt voort op WordPress. Inclusief aanbeveling voor het MKB.',
        datePublished: PUBLISHED,
        dateModified: MODIFIED,
        author: {
          '@type': 'Person',
          name: 'Lars van der Hoek',
          url: `${BASE}/over-ons`,
        },
        publisher: {'@id': `${BASE}/#organization`},
        url: `${BASE}${SLUG}`,
        inLanguage: 'nl-NL',
        mainEntityOfPage: `${BASE}${SLUG}`,
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map(({q, a}) => ({
          '@type': 'Question',
          name: q,
          acceptedAnswer: {'@type': 'Answer', text: a},
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {'@type': 'ListItem', position: 1, name: 'Home', item: BASE},
          {'@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE}/blog`},
          {'@type': 'ListItem', position: 3, name: 'Shopify vs WooCommerce', item: `${BASE}${SLUG}`},
        ],
      },
    ],
  };
}

export async function generateMetadata({params}: {params?: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale = 'nl'} = params ? await params : {};
  const canonical = locale === 'nl' ? `${BASE}${SLUG}` : `${BASE}/en${SLUG}`;
  return {
    title: 'Shopify vs WooCommerce: Welk Platform Past bij Jouw Webshop?',
    description: 'Shopify of WooCommerce kiezen? Shopify is gebouwd voor verkopen. WooCommerce draait op WordPress. Eerlijke vergelijking inclusief aanbeveling voor het MKB.',
    ...(locale !== 'nl' && {robots: {index: false, follow: false}}),
    alternates: {
      canonical,
      languages: {nl: `${BASE}${SLUG}`, en: `${BASE}/en${SLUG}`, 'x-default': `${BASE}${SLUG}`},
    },
    openGraph: {
      type: 'article',
      url: canonical,
      title: 'Shopify vs WooCommerce: welk platform past bij jouw webshop?',
      description: 'Shopify is gebouwd voor verkopen. WooCommerce bouwt voort op WordPress. Eerlijke vergelijking voor het MKB.',
      publishedTime: PUBLISHED,
      modifiedTime: MODIFIED,
      authors: ['Lars van der Hoek'],
    },
  };
}

export default async function BlogPostPage({params}: {params: Promise<{locale: string}>}) {
  await params;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(blogJsonLd())}} />

      {/* Hero */}
      <section className="bg-primary pt-36 pb-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-6 h-px bg-gold" />
              <Link href="/blog" className="text-gold text-xs font-semibold tracking-widest uppercase hover:opacity-80 transition-opacity">
                Blog
              </Link>
            </div>
            <h1 className="text-white font-black text-3xl lg:text-5xl leading-tight mb-6">
              Shopify vs WooCommerce:{' '}
              <span className="text-gold">welk platform past bij jouw webshop?</span>
            </h1>
            <p className="text-white/60 text-lg">
              Shopify is gebouwd om te verkopen. WooCommerce bouwt webshop-functionaliteit bovenop WordPress. Twee totaal verschillende filosofieën. Hier lees je welke bij jou past.
            </p>
            <div className="flex items-center gap-4 mt-8 text-white/40 text-sm">
              <span>Lars van der Hoek</span>
              <span>·</span>
              <time dateTime={PUBLISHED}>26 mei 2026</time>
              <span>·</span>
              <span>6 min leestijd</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Article */}
      <section className="bg-light py-16 pb-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 flex flex-col gap-12">

          <AnimatedSection>
            <p className="text-primary/80 text-lg leading-relaxed mb-4">
              Veel ondernemers die een webshop willen starten, vergelijken Shopify en WooCommerce alsof het twee gelijkwaardige webshop-platforms zijn. Dat is niet helemaal juist. De kern van het verschil zit in waar elk platform vandaan komt.
            </p>
            <p className="text-primary/70 leading-relaxed">
              Shopify is van de grond af gebouwd als e-commerce platform. WooCommerce is een plugin voor WordPress, een systeem dat primair is ontworpen als CMS voor websites en blogs. Dat maakt WooCommerce krachtiger op vlakken waar WordPress sterk is, maar ook complexer als het gaat om beheer en onderhoud.
            </p>
          </AnimatedSection>

          {/* WordPress uitleg */}
          <AnimatedSection>
            <h2 className="text-primary font-black text-2xl mb-4">WordPress: van blog-platform naar alles-in-één</h2>
            <p className="text-primary/70 leading-relaxed mb-4">
              WordPress begon als blogplatform en is uitgegroeid tot het meest gebruikte CMS ter wereld, goed voor ruim 40% van alle websites. Het is een open source systeem dat je zelf installeert op een server, aanpast met plugins en volledig naar eigen wens configureert.
            </p>
            <p className="text-primary/70 leading-relaxed mb-4">
              WooCommerce is een gratis plugin die WordPress uitbreidt met een complete webshop-omgeving: productpagina's, winkelwagen, afrekenen, voorraadbeheer en betalingen. Technisch gezien een krachtige combinatie, maar je beheert in feite twee systemen tegelijk. WordPress én WooCommerce moeten beide up-to-date worden gehouden, beveiligd zijn en goed samenwerken met de plugins die je gebruikt. Wij nemen die technische verantwoordelijkheid voor onze klanten volledig over, zodat jij je kunt focussen op je assortiment en klanten.
            </p>
            <div className="bg-primary/5 border-l-4 border-gold rounded-sm p-6">
              <p className="text-primary font-semibold text-sm mb-2">Wanneer WooCommerce sterk is:</p>
              <ul className="flex flex-col gap-1.5 text-primary/70 text-sm mt-2">
                {[
                  'Je hebt al een WordPress-website en wilt een webshop toevoegen',
                  'Je wilt een uitgebreid blog én een webshop onder één dak',
                  'Je hebt specifieke integraties nodig die alleen via WP-plugins beschikbaar zijn',
                  'Je hebt technische kennis in huis of werkt met een bureau dat WordPress goed kent',
                  'Je wilt maximale controle over elke technische instelling',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2"><span className="text-gold">→</span> {item}</li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* Shopify */}
          <AnimatedSection>
            <h2 className="text-primary font-black text-2xl mb-4">Shopify: gebouwd om te verkopen</h2>
            <p className="text-primary/70 leading-relaxed mb-4">
              Shopify is een Software-as-a-Service platform dat volledig is ontworpen rondom één doel: producten verkopen. Je betaalt een maandabonnement en krijgt daarvoor hosting, beveiliging, updates, een betaalomgeving en ondersteuning, volledig beheerd.
            </p>
            <p className="text-primary/70 leading-relaxed mb-4">
              Je hebt geen server nodig, geen kennis van WordPress of PHP en geen zorgen over beveiligingsupdates. Orders verwerken, producten toevoegen, kortingsacties instellen: dat doet de gemiddelde ondernemer na een korte introductie zelf. Het dashboard is gebouwd voor mensen die willen verkopen, niet voor mensen die willen programmeren.
            </p>
            <p className="text-primary/70 leading-relaxed mb-5">
              Heb je specifieke wensen die verder gaan dan de standaard? Shopify heeft een ecosysteem van meer dan 8.000 apps die de meeste behoeften afdekken. En voor echt maatwerk, zoals een unieke productconfigurator, een externe koppeling of een specifieke flow, is dat precies het werk dat wij voor onze klanten doen. Shopify is geen beperking; het is een solide basis waarop je kunt bouwen.
            </p>
            <div className="bg-primary/5 border-l-4 border-gold rounded-sm p-6">
              <p className="text-primary font-semibold text-sm mb-2">Wanneer Shopify de betere keuze is:</p>
              <ul className="flex flex-col gap-1.5 text-primary/70 text-sm mt-2">
                {[
                  'Je wilt snel live zonder technische rompslomp',
                  'Je hebt geen developer in huis',
                  'Je focus ligt volledig op verkopen, niet op contentbeheer',
                  'Je verwacht te schalen naar hogere ordervolumes',
                  'Je wilt een stabiel, beheerd platform zonder onderhoudszorgen',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2"><span className="text-gold">→</span> {item}</li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* Vergelijkingstabel */}
          <AnimatedSection>
            <h2 className="text-primary font-black text-2xl mb-6">Snel vergelijken</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="text-left px-5 py-4 font-semibold">Factor</th>
                    <th className="text-left px-5 py-4 font-semibold">Shopify</th>
                    <th className="text-left px-5 py-4 font-semibold">WooCommerce</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {factor: 'Basis platform',         shopify: 'E-commerce SaaS',       woo: 'WordPress CMS + plugin'},
                    {factor: 'Hosting & beveiliging',  shopify: 'Volledig beheerd',       woo: 'Zelf regelen en onderhouden'},
                    {factor: 'Gebruiksgemak',           shopify: 'Hoog',                  woo: 'Gemiddeld, technische kennis vereist'},
                    {factor: 'Maandelijkse kosten',     shopify: 'Vast abonnement',        woo: 'Variabel (hosting + plugins + updates)'},
                    {factor: 'Blogging / content',      shopify: 'Beperkt',               woo: 'Uitstekend (WordPress-kracht)'},
                    {factor: 'SEO-controle',            shopify: 'Goed',                  woo: 'Volledig, via Yoast e.a.'},
                    {factor: 'Schaalbaarheid',          shopify: 'Uitstekend',            woo: 'Goed'},
                    {factor: 'Onderhoud vereist',       shopify: 'Minimaal',              woo: 'Regelmatig'},
                  ].map(({factor, shopify, woo}, i) => (
                    <tr key={factor} className={i % 2 === 0 ? 'bg-white' : 'bg-primary/3'}>
                      <td className="px-5 py-4 text-primary font-medium border-b border-primary/8">{factor}</td>
                      <td className="px-5 py-4 text-primary/70 border-b border-primary/8">{shopify}</td>
                      <td className="px-5 py-4 text-primary/70 border-b border-primary/8">{woo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>

          {/* Conclusie */}
          <AnimatedSection>
            <h2 className="text-primary font-black text-2xl mb-4">Onze aanbeveling</h2>
            <p className="text-primary/70 leading-relaxed mb-4">
              Voor de meeste MKB-webshops adviseren wij Shopify. Niet omdat WooCommerce inferieur is (het is een krachtig platform), maar omdat de meeste ondernemers baat hebben bij een systeem dat gewoon werkt. Geen hosting die uitvalt, geen plugin-conflicten, geen beveiligingslekken door een vergeten update.
            </p>
            <p className="text-primary/70 leading-relaxed mb-4">
              WooCommerce is de betere keuze als content centraal staat naast je webshop. Denk aan een merk met een uitgebreide blog, een kennisbank of contentmarketing als primaire groeistrategie. WordPress is daarvoor het sterkste platform, en WooCommerce groeit daar logisch naast mee.
            </p>
            <p className="text-primary/70 leading-relaxed mb-4">
              Bij VDH Agency zetten we zowel Shopify- als WordPress/WooCommerce-webshops volledig voor je op. Van technische installatie en maatwerk design tot betalingsintegraties en productpagina's die converteren. En we stoppen niet bij de webshop: ook SEO, social media en online marketing behoren tot{' '}
              <Link href="/diensten" className="text-gold hover:underline">onze diensten</Link>.
            </p>
            <p className="text-primary/70 leading-relaxed">
              De platformkeuze is misschien wel de belangrijkste beslissing bij het starten van een webshop. Wij kennen beide platforms van binnen en van buiten en weten precies wanneer welke aanpak het beste resultaat geeft.{' '}
              <Link href="/contact" className="text-gold hover:underline">Neem contact op</Link> voor een vrijblijvend gesprek, geen verkooppraatje.
            </p>
          </AnimatedSection>

          {/* Inline CTA */}
          <AnimatedSection>
            <div className="bg-primary rounded-sm p-10 text-center relative overflow-hidden">
              <div className="absolute inset-0 dot-grid opacity-20" />
              <div className="relative z-10">
                <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-4">Gratis advies</p>
                <h3 className="text-white font-black text-2xl mb-4">Welk platform past bij jouw webshop?</h3>
                <p className="text-white/60 mb-8 max-w-md mx-auto text-sm leading-relaxed">
                  We denken gratis met je mee. Vertel ons over jouw assortiment, doelen en huidige situatie. Dan geven we je een eerlijk advies over het beste platform.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link href="/contact" className="inline-flex items-center gap-3 bg-gold text-primary font-bold text-sm px-8 py-4 rounded-sm hover:bg-gold-light transition-colors group">
                    Plan een gratis gesprek
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a href="/shopify-webshop" className="inline-flex items-center gap-2 border border-white/20 text-white font-semibold text-sm px-6 py-4 rounded-sm hover:border-gold hover:text-gold transition-colors">
                    Meer over Shopify webshop
                  </a>
                  <Link href="/diensten/webshop-maken" className="inline-flex items-center gap-2 border border-white/20 text-white font-semibold text-sm px-6 py-4 rounded-sm hover:border-gold hover:text-gold transition-colors">
                    Webshop laten maken
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* FAQ */}
          <AnimatedSection>
            <h2 className="text-primary font-black text-2xl mb-6">Veelgestelde vragen</h2>
            <div className="flex flex-col gap-3">
              {faqs.map(({q, a}, i) => (
                <AnimatedSection key={i} delay={i * 0.05}>
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
          </AnimatedSection>

        </div>
      </section>

      <CTA />
    </>
  );
}
