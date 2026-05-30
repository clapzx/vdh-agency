import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {ArrowRight, MapPin, ChevronDown} from 'lucide-react';
import {Link} from '@/i18n/navigation';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionLabel from '@/components/ui/SectionLabel';
import CTA from '@/components/sections/CTA';

const BASE = 'https://www.vdh-agency.com';

const steden = [
  {slug: 'zwolle',  name: 'Zwolle'},
  {slug: 'kampen',  name: 'Kampen'},
  {slug: 'raalte',  name: 'Raalte'},
  {slug: 'wijhe',   name: 'Wijhe'},
  {slug: 'olst',    name: 'Olst'},
];

function pageJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ItemList',
        name: 'Marketing Bureau Overijssel — werkgebied VDH Agency',
        itemListElement: steden.map((stad, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: `Marketing Bureau ${stad.name}`,
          url: `${BASE}/marketing-bureau/${stad.slug}`,
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {'@type': 'ListItem', position: 1, name: 'Home', item: BASE},
          {'@type': 'ListItem', position: 2, name: 'Werkgebied', item: `${BASE}/marketing-bureau`},
          {'@type': 'ListItem', position: 3, name: 'Overijssel', item: `${BASE}/marketing-bureau-overijssel`},
        ],
      },
    ],
  };
}

export async function generateMetadata({params}: {params?: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale = 'nl'} = params ? await params : {};
  if (locale !== 'nl') return {};
  return {
    title: 'Marketing Bureau Overijssel: Online Groei in jouw Regio | VDH Agency',
    description: 'VDH Agency is jouw marketing bureau in Overijssel. Actief in Zwolle, Kampen, Raalte, Wijhe en Olst. SEO, Google Ads en professionele websites voor het MKB.',
    alternates: {
      canonical: `${BASE}/marketing-bureau-overijssel`,
      languages: {'x-default': `${BASE}/marketing-bureau-overijssel`, nl: `${BASE}/marketing-bureau-overijssel`},
    },
    openGraph: {url: `${BASE}/marketing-bureau-overijssel`},
  };
}

export default async function MarketingBureauOverijsselPage({params}: {params: Promise<{locale: string}>}) {
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
                <MapPin size={12} /> Overijssel
              </span>
            </div>
            <h1 className="text-white font-black text-4xl lg:text-6xl leading-tight mb-5">
              Marketing Bureau Overijssel
            </h1>
            <p className="text-white/60 text-xl mb-10">
              VDH Agency is actief in Overijssel vanuit onze basis in Heerde, op de grens met Gelderland. We helpen ondernemers in Zwolle, Kampen en omgeving groeien via lokale SEO, Google Ads en websites die klanten opleveren.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="flex items-center gap-2 bg-gold text-primary font-bold text-sm px-7 py-3.5 rounded-sm hover:bg-gold-light transition-colors">
                Gratis kennismakingsgesprek <ArrowRight size={15} />
              </Link>
              <a href="/marketing-bureau" className="flex items-center gap-2 border border-white/20 text-white font-semibold text-sm px-7 py-3.5 rounded-sm hover:border-gold hover:text-gold transition-colors">
                Alle werkgebieden
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Steden */}
      <section className="bg-light py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-12">
            <SectionLabel>Overijssel</SectionLabel>
            <h2 className="text-primary font-black text-2xl lg:text-3xl">Actief in {steden.length} Overijsselse gemeenten</h2>
            <p className="text-primary/60 mt-3 text-sm max-w-xl">Klik op een stad voor lokale marketing- en SEO-informatie.</p>
          </AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {steden.map(({slug, name}, i) => (
              <AnimatedSection key={slug} delay={i * 0.05}>
                <a
                  href={`/marketing-bureau/${slug}`}
                  className="group flex items-center justify-between bg-white border border-primary/8 rounded-sm px-5 py-4 hover:border-gold/40 hover:shadow-md transition-all"
                >
                  <span className="text-primary font-semibold text-sm group-hover:text-gold transition-colors">{name}</span>
                  <ArrowRight size={13} className="text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Regio info */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <SectionLabel light>Lokale kennis</SectionLabel>
              <h2 className="text-white font-black text-3xl lg:text-4xl mb-6">
                Overijssel begrijp je pas als je er naast zit
              </h2>
              <p className="text-white/60 text-base leading-relaxed mb-4">
                Zwolle is een van de snelst groeiende steden van Nederland. Kampen, Raalte en Wijhe zijn kleinere markten met eigen zoekgedrag en een sterke ondernemersidentiteit. Wie hier lokaal vindbaar wil zijn, moet dat per gemeente aanpakken — niet met een generiek campagnetemplate.
              </p>
              <p className="text-white/60 text-base leading-relaxed mb-4">
                Vanuit Heerde staan wij in twintig minuten in Zwolle. We werken niet vanuit de Randstad — we kennen de Overijsselse markt, de concurrentieverhoudingen en de kansen per gemeente.
              </p>
              <p className="text-white/60 text-base leading-relaxed mb-6">
                Overijssel combineert een van de snelst groeiende steden van Nederland (Zwolle) met een sterke industriële en agrarische economie in Salland, en kleine gemeenten langs de IJssel en de Vecht waar lokale loyaliteit en persoonlijk contact doorslaggevend zijn. Die diversiteit vraagt om een marketingaanpak die per gemeente verschilt — met Zwolle als anker en de regio als kans.
              </p>
              <div className="flex flex-col gap-3">
                {['Lokale SEO per Overijsselse gemeente','Google Business Profile inrichten en beheren','Websites gericht op lokale conversie','Google Ads met lokale targetingopties'].map(p => (
                  <div key={p} className="flex items-center gap-3 text-white/70 text-sm">
                    <span className="text-gold">→</span> {p}
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.15}>
              <div className="grid grid-cols-1 gap-4">
                {[
                  {href: '/lokale-seo',                 label: 'Lokale SEO',              desc: 'Bovenaan in Google in jouw gemeente'},
                  {href: '/hoger-in-google',             label: 'Hoger in Google',         desc: 'Organische groei via bewezen SEO'},
                  {href: '/google-ads-bureau',           label: 'Google Ads bureau',       desc: 'Direct aanvragen via betaalde advertenties'},
                  {href: '/marketing-bureau-gelderland', label: 'Ook actief in Gelderland', desc: 'Heerde, Apeldoorn, Harderwijk en meer'},
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

      {/* FAQ */}
      <section className="bg-light py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-10">
            <SectionLabel>Veelgestelde vragen</SectionLabel>
            <h2 className="text-primary font-black text-3xl">Marketing bureau Overijssel: jouw vragen</h2>
          </AnimatedSection>
          <div className="flex flex-col gap-4">
            {[
              {q: 'Werkt VDH Agency ook voor bedrijven in kleinere Overijsselse gemeenten?', a: 'Ja. Naast Zwolle, Kampen, Raalte, Wijhe en Olst werken wij voor ondernemers door heel Overijssel. Of je nu in Steenwijk, Ommen of Hellendoorn zit: we bespreken in een gratis kennismakingsgesprek wat we voor jouw markt kunnen doen.'},
              {q: 'Wat maakt online marketing in Overijssel anders dan in andere provincies?', a: 'Overijssel combineert een van de snelst groeiende steden van Nederland (Zwolle) met een sterke landelijke economie langs de IJssel en de Vecht. Klanten in deze regio zoeken bewust naar lokale aanbieders. Wie specifiek op Overijsselse locaties en zoektermen is geoptimaliseerd, heeft een aantoonbaar voordeel ten opzichte van generieke nationale bureaus.'},
              {q: 'Welke sectoren in Overijssel profiteren het meest van lokale SEO?', a: 'In Overijssel zijn dat met name logistiek en transport in de Zwolle-regio, industrie en agrifood in Salland, zakelijke dienstverlening en bouw. Maar ook zorgaanbieders, horecaondernemers en detailhandel zien steeds meer aanvragen via Google — zeker in de groeiende Zwolle-regio.'},
              {q: 'Hoe lang duurt het om resultaat te zien van online marketing in Overijssel?', a: 'Dat verschilt per kanaal en gemeente. Lokale SEO in een kleinere gemeente als Raalte geeft doorgaans sneller resultaat (2–3 maanden) dan in het competitievere Zwolle (4–6 maanden). Google Ads is direct: zodra de campagne live is, verschijnt je advertentie. Wij bespreken in het kennismakingsgesprek wat realistisch is voor jouw situatie.'},
            ].map(({q, a}, i) => (
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
