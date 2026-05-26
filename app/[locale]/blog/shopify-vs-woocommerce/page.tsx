import type {Metadata} from 'next';
import {ArrowRight, ChevronDown} from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import CTA from '@/components/sections/CTA';
import {Link} from '@/i18n/navigation';

const BASE = 'https://www.vdh-agency.com';
const SLUG = '/blog/shopify-vs-woocommerce';
const PUBLISHED = '2026-05-26';
const MODIFIED = '2026-05-26';

const faqs = [
  {
    q: 'Is Shopify duurder dan WooCommerce?',
    a: 'Shopify kost maandelijks geld (vanaf ca. €32/mnd). WooCommerce is gratis als plugin, maar je betaalt zelf voor hosting, SSL, betaalplugins en onderhoud. Op jaarbasis liggen de totale kosten vaak dicht bij elkaar. Shopify is transparanter; WooCommerce kan goedkoper zijn als je technisch sterk bent.',
  },
  {
    q: 'Welk platform is beter voor SEO?',
    a: 'Beide platforms kunnen goed scoren in Google. Shopify heeft ingebouwde SEO-functies maar beperkt je in URL-structuur. WooCommerce geeft meer controle, maar vereist de juiste WordPress-plugins en technische kennis. Voor de meeste MKB-webshops maakt het weinig verschil als het goed is opgezet.',
  },
  {
    q: 'Kan ik later van platform wisselen?',
    a: 'Ja, maar het is geen kleine klus. Producten, klantdata, bestellingen en SEO-waarde meenemen kost tijd en aandacht. Maak de keuze dus zorgvuldig aan het begin — een migratie halverwege is altijd duurder dan de juiste keuze vooraf.',
  },
  {
    q: 'Welk platform raadt VDH Agency aan?',
    a: 'Voor de meeste MKB-webshops adviseren wij Shopify. Het is sneller live, stabieler en makkelijker te beheren zonder technische kennis. WooCommerce adviseren we alleen als je al op WordPress zit of een specifieke plugin-integratie nodig hebt die Shopify niet biedt.',
  },
];

function blogJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        headline: 'Shopify vs WooCommerce: welk platform past bij jouw webshop?',
        description: 'Shopify of WooCommerce voor jouw webshop? Een eerlijke vergelijking op kosten, gebruiksgemak, SEO en schaalbaarheid — zodat jij de juiste keuze maakt.',
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
    title: 'Shopify vs WooCommerce: Welk Platform Past bij Jouw Webshop? | VDH Agency',
    description: 'Shopify of WooCommerce kiezen voor je webshop? Eerlijke vergelijking op kosten, gebruiksgemak, SEO en schaalbaarheid. Inclusief aanbeveling voor MKB.',
    ...(locale !== 'nl' && {robots: {index: false, follow: false}}),
    alternates: {
      canonical,
      languages: {nl: `${BASE}${SLUG}`, en: `${BASE}/en${SLUG}`, 'x-default': `${BASE}${SLUG}`},
    },
    openGraph: {
      type: 'article',
      url: canonical,
      title: 'Shopify vs WooCommerce: welk platform past bij jouw webshop?',
      description: 'Een eerlijke vergelijking op kosten, gebruiksgemak, SEO en schaalbaarheid voor MKB-webshops.',
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
              Twee platforms, twee filosofieën. Jij hebt er één nodig. Een eerlijke vergelijking op kosten, beheer, SEO en schaalbaarheid.
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
              Shopify of WooCommerce — het is een van de meest gestelde vragen bij ondernemers die een webshop willen starten. Beide platforms draaien miljoenen webshops wereldwijd. Beide kunnen je producten verkopen. Maar ze doen dat op een fundamenteel andere manier.
            </p>
            <p className="text-primary/70 leading-relaxed">
              De juiste keuze hangt af van jouw situatie: technische kennis, budget, assortiment en ambities. Dit artikel zet de twee naast elkaar — zonder reclamepraat.
            </p>
          </AnimatedSection>

          {/* Vergelijkingstabel */}
          <AnimatedSection>
            <h2 className="text-primary font-black text-2xl mb-6">Shopify vs WooCommerce: snelle vergelijking</h2>
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
                    {factor: 'Hosting',          shopify: 'Ingebouwd, beheerd',   woo: 'Zelf regelen'},
                    {factor: 'Beveiliging',      shopify: 'Automatisch',           woo: 'Zelf onderhouden'},
                    {factor: 'Gebruiksgemak',    shopify: '★★★★★',               woo: '★★★☆☆'},
                    {factor: 'Maandelijkse kosten', shopify: 'Vast (€32–€299)',    woo: 'Variabel (hosting + plugins)'},
                    {factor: 'SEO-controle',     shopify: 'Beperkt',               woo: 'Volledig'},
                    {factor: 'Schaalbaarheid',   shopify: 'Uitstekend',            woo: 'Goed'},
                    {factor: 'Technische kennis nodig', shopify: 'Minimaal',       woo: 'Aanzienlijk'},
                    {factor: 'Apps / plugins',   shopify: '8.000+ apps',           woo: '59.000+ plugins'},
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

          {/* Shopify */}
          <AnimatedSection>
            <h2 className="text-primary font-black text-2xl mb-4">Shopify: verkopen zonder technische kopzorgen</h2>
            <p className="text-primary/70 leading-relaxed mb-4">
              Shopify is een Software-as-a-Service platform. Je betaalt een maandabonnement en krijgt daarvoor hosting, beveiliging, updates en ondersteuning. Je hebt geen server nodig, geen WordPress-kennis en geen angst voor crashes bij hoge traffic.
            </p>
            <p className="text-primary/70 leading-relaxed mb-4">
              Het dashboard is intuïtief. Orders verwerken, producten toevoegen, kortingsacties instellen — dat doet de gemiddelde ondernemer zelf na een half uur training. Dat is precies waarom Shopify zo populair is bij ondernemers die willen verkopen, niet programmeren.
            </p>
            <p className="text-primary/70 leading-relaxed mb-5">
              De keerzijde: je bent afhankelijk van Shopify. Wil je iets dat niet standaard kan, ben je aangewezen op apps (met bijkomende maandelijkse kosten) of betaalde ontwikkelaars.
            </p>
            <div className="bg-primary/5 border-l-4 border-gold rounded-sm p-5">
              <p className="text-primary font-semibold text-sm mb-1">Kies Shopify als je:</p>
              <ul className="flex flex-col gap-1.5 text-primary/70 text-sm mt-2">
                {['Snel live wilt zonder technische kennis','Een stabiel beheerd platform wilt','Verwacht te schalen naar hoge volumes','Internationaal wilt verkopen via Shopify Markets'].map(item => (
                  <li key={item} className="flex items-start gap-2"><span className="text-gold">→</span> {item}</li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* WooCommerce */}
          <AnimatedSection>
            <h2 className="text-primary font-black text-2xl mb-4">WooCommerce: maximale controle, meer verantwoordelijkheid</h2>
            <p className="text-primary/70 leading-relaxed mb-4">
              WooCommerce is een gratis plugin voor WordPress. De software zelf kost niets, maar je regelt zelf je hosting, SSL-certificaat, back-ups en beveiligingsupdates. Dat geeft maximale vrijheid — en maximale verantwoordelijkheid.
            </p>
            <p className="text-primary/70 leading-relaxed mb-4">
              De kracht van WooCommerce zit in de flexibiliteit: met de juiste plugins en kennis bouw je vrijwel alles wat je nodig hebt. SEO-plugins als Yoast geven je volledige controle over titels, meta-beschrijvingen en schema markup. URL-structuur is volledig aanpasbaar.
            </p>
            <p className="text-primary/70 leading-relaxed mb-5">
              Het nadeel is dat je die kennis nodig hebt. Of iemand hebt die het voor je beheert. Een WooCommerce-site die niet up-to-date gehouden wordt, is een beveiligingsrisico.
            </p>
            <div className="bg-primary/5 border-l-4 border-gold rounded-sm p-5">
              <p className="text-primary font-semibold text-sm mb-1">Kies WooCommerce als je:</p>
              <ul className="flex flex-col gap-1.5 text-primary/70 text-sm mt-2">
                {['Al een WordPress-website hebt','Specifieke integraties nodig hebt die alleen in WP-plugins bestaan','Volledige SEO-controle wilt','Een developer in huis hebt of een goed technisch bureau'].map(item => (
                  <li key={item} className="flex items-start gap-2"><span className="text-gold">→</span> {item}</li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* Conclusie */}
          <AnimatedSection>
            <h2 className="text-primary font-black text-2xl mb-4">Onze eerlijke aanbeveling</h2>
            <p className="text-primary/70 leading-relaxed mb-4">
              Voor de meeste MKB-webshops adviseren wij Shopify. Niet omdat WooCommerce slecht is, maar omdat de meeste ondernemers baat hebben bij een platform dat gewoon werkt — zodat je aandacht naar je producten en klanten gaat, niet naar technisch beheer.
            </p>
            <p className="text-primary/70 leading-relaxed mb-4">
              WooCommerce adviseren we als je al op WordPress werkt, specifieke integraties nodig hebt die alleen via WP-plugins beschikbaar zijn, of als je een developer in huis hebt die het platform actief bijhoudt.
            </p>
            <p className="text-primary/70 leading-relaxed">
              Twijfel je? Plan een gratis gesprek. We kijken naar jouw situatie en adviseren je welk platform écht bij je past.
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
                  We denken gratis met je mee. Vertel ons over jouw assortiment, doelen en budget — dan geven we je een eerlijk advies.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link href="/contact" className="inline-flex items-center gap-3 bg-gold text-primary font-bold text-sm px-8 py-4 rounded-sm hover:bg-gold-light transition-colors group">
                    Plan een gratis gesprek
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a href="/shopify-webshop" className="inline-flex items-center gap-2 border border-white/20 text-white font-semibold text-sm px-6 py-4 rounded-sm hover:border-gold hover:text-gold transition-colors">
                    Meer over Shopify webshop
                  </a>
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
