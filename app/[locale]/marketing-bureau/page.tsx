import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {ArrowRight, MapPin} from 'lucide-react';
import {Link} from '@/i18n/navigation';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionLabel from '@/components/ui/SectionLabel';
import CTA from '@/components/sections/CTA';

const BASE = 'https://www.vdh-agency.com';

const cities = [
  {slug: 'heerde',     name: 'Heerde',      region: 'Gelderland'},
  {slug: 'hattem',     name: 'Hattem',      region: 'Gelderland'},
  {slug: 'epe',        name: 'Epe',         region: 'Gelderland'},
  {slug: 'wezep',      name: 'Wezep',       region: 'Gelderland'},
  {slug: 'oldebroek',  name: 'Oldebroek',   region: 'Gelderland'},
  {slug: 'vaassen',    name: 'Vaassen',     region: 'Gelderland'},
  {slug: 't-harde',    name: "'t Harde",    region: 'Gelderland'},
  {slug: 'elburg',     name: 'Elburg',      region: 'Gelderland'},
  {slug: 'wijhe',      name: 'Wijhe',       region: 'Overijssel'},
  {slug: 'olst',       name: 'Olst',        region: 'Overijssel'},
  {slug: 'apeldoorn',  name: 'Apeldoorn',   region: 'Gelderland'},
  {slug: 'nunspeet',   name: 'Nunspeet',    region: 'Gelderland'},
  {slug: 'kampen',     name: 'Kampen',      region: 'Overijssel'},
  {slug: 'raalte',     name: 'Raalte',      region: 'Overijssel'},
  {slug: 'zwolle',     name: 'Zwolle',      region: 'Overijssel'},
  {slug: 'harderwijk', name: 'Harderwijk',  region: 'Gelderland'},
];

export async function generateMetadata({
  params,
}: {
  params?: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale = 'nl'} = params ? await params : {};
  if (locale !== 'nl') return {};
  const url = `${BASE}/marketing-bureau`;
  return {
    title: 'Marketing Bureau per Stad & Regio | Gelderland & Overijssel | VDH Agency',
    description: 'VDH Agency is actief als marketing bureau in Heerde, Epe, Zwolle, Apeldoorn, Kampen en 11 andere steden in Gelderland en Overijssel. Bekijk alle werkgebieden.',
    alternates: {
      canonical: url,
      languages: {'x-default': url, nl: url},
    },
    openGraph: {url},
  };
}

export default async function MarketingBureauOverviewPage({
  params,
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  if (locale !== 'nl') notFound();

  const gelderland = cities.filter(c => c.region === 'Gelderland');
  const overijssel = cities.filter(c => c.region === 'Overijssel');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'VDH Agency Werkgebied',
          description: 'Alle steden en regio\'s waar VDH Agency actief is als marketing bureau',
          itemListElement: cities.map((city, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: `Marketing Bureau ${city.name}`,
            url: `${BASE}/marketing-bureau/${city.slug}`,
          })),
        })}}
      />

      {/* Hero */}
      <section className="bg-primary pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-6 h-px bg-gold" />
              <span className="text-gold text-xs font-semibold tracking-widest uppercase flex items-center gap-2">
                <MapPin size={12} /> Werkgebied
              </span>
            </div>
            <h1 className="text-white font-black text-4xl lg:text-6xl leading-tight mb-5">
              Marketing Bureau per Stad & Regio
            </h1>
            <p className="text-white/60 text-xl">
              VDH Agency is actief in Gelderland en Overijssel. We helpen lokale ondernemers groeien via SEO, social media en professionele websites op maat.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Gelderland */}
      <section className="bg-light py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-12">
            <SectionLabel>Gelderland</SectionLabel>
            <h2 className="text-primary font-black text-2xl lg:text-3xl">Marketing bureau Gelderland</h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {gelderland.map(({slug, name}, i) => (
              <AnimatedSection key={slug} delay={i * 0.05}>
                <a
                  href={`/marketing-bureau/${slug}`}
                  className="group flex items-center justify-between bg-white border border-primary/8 rounded-sm px-5 py-4 hover:border-gold/40 hover:shadow-md transition-all"
                >
                  <span className="text-primary font-semibold text-sm group-hover:text-gold transition-colors">
                    {name}
                  </span>
                  <ArrowRight size={13} className="text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Overijssel */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-12">
            <SectionLabel light>Overijssel</SectionLabel>
            <h2 className="text-white font-black text-2xl lg:text-3xl">Marketing bureau Overijssel</h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {overijssel.map(({slug, name}, i) => (
              <AnimatedSection key={slug} delay={i * 0.05}>
                <a
                  href={`/marketing-bureau/${slug}`}
                  className="group flex items-center justify-between bg-white/5 border border-white/10 rounded-sm px-5 py-4 hover:border-gold/40 hover:bg-white/10 transition-all"
                >
                  <span className="text-white font-semibold text-sm group-hover:text-gold transition-colors">
                    {name}
                  </span>
                  <ArrowRight size={13} className="text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why VDH */}
      <section className="bg-light py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <SectionLabel>Lokale kennis</SectionLabel>
            <h2 className="text-primary font-black text-2xl lg:text-3xl mb-6">
              Gevestigd in Heerde, actief door de regio
            </h2>
            <p className="text-primary/60 text-base leading-relaxed mb-8">
              VDH Agency is opgericht in Heerde en kent de lokale markt in Gelderland en Overijssel als geen ander. We begrijpen hoe lokale klanten zoeken, wat werkt in de regio en hoe je je onderscheidt van de concurrentie.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gold text-primary font-bold text-sm px-7 py-3.5 rounded-sm hover:bg-gold-light transition-colors"
            >
              Gratis kennismakingsgesprek
              <ArrowRight size={15} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <CTA />
    </>
  );
}
