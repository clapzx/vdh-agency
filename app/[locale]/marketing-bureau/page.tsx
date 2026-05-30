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
  {slug: 'apeldoorn',  name: 'Apeldoorn',   region: 'Gelderland'},
  {slug: 'nunspeet',   name: 'Nunspeet',    region: 'Gelderland'},
  {slug: 'harderwijk', name: 'Harderwijk',  region: 'Gelderland'},
  {slug: 'zutphen',    name: 'Zutphen',     region: 'Gelderland'},
  {slug: 'wijhe',      name: 'Wijhe',       region: 'Overijssel'},
  {slug: 'olst',       name: 'Olst',        region: 'Overijssel'},
  {slug: 'kampen',     name: 'Kampen',      region: 'Overijssel'},
  {slug: 'raalte',     name: 'Raalte',      region: 'Overijssel'},
  {slug: 'zwolle',     name: 'Zwolle',      region: 'Overijssel'},
  {slug: 'deventer',   name: 'Deventer',    region: 'Overijssel'},
  {slug: 'dalfsen',    name: 'Dalfsen',     region: 'Overijssel'},
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
    title: 'Marketing Bureau Gelderland & Overijssel | SEO, Google Ads & Webdesign per Stad',
    description: 'Marketing bureau in Gelderland & Overijssel. VDH Agency helpt MKB-ondernemers in Heerde, Zwolle, Apeldoorn, Kampen en 15+ andere steden via SEO, Google Ads en webdesign.',
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
              Marketing Bureau Gelderland & Overijssel
            </h1>
            <p className="text-white/60 text-xl">
              VDH Agency is actief als marketing bureau in 19 steden in Gelderland en Overijssel — van Heerde en Zwolle tot Deventer, Zutphen en Dalfsen. SEO, Google Ads, social media en professionele websites op maat voor lokale ondernemers.
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
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <SectionLabel>Niet regionaal gebonden</SectionLabel>
              <h2 className="text-primary font-black text-2xl lg:text-3xl mb-6">
                Gevestigd in Heerde. Actief voor heel Nederland.
              </h2>
              <p className="text-primary/60 text-base leading-relaxed mb-4">
                We zijn lokaal geworteld maar werken voor bedrijven door heel Nederland — van Groningen tot Zeeland, van Amsterdam tot Enschede. Locatie speelt geen rol: wij werken volledig online via videoconsultaties, e-mail en telefoon.
              </p>
              <p className="text-primary/60 text-base leading-relaxed mb-6">
                Wij communiceren zowel in het <strong className="text-primary">Nederlands als in het Engels</strong>. Internationale klanten of bedrijven met een Engelstalig team zijn bij ons aan het juiste adres.
              </p>
              <div className="flex flex-col gap-3 mb-8">
                {[
                  'Volledig online samenwerken — geen reistijd',
                  'Vaste specialist, directe communicatie',
                  'Wij denken in oplossingen, niet in beperkingen',
                  'Resultaatgericht — geen vage beloftes',
                ].map(p => (
                  <div key={p} className="flex items-center gap-3 text-primary/70 text-sm">
                    <span className="text-gold font-bold">→</span> {p}
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gold text-primary font-bold text-sm px-7 py-3.5 rounded-sm hover:bg-gold-light transition-colors"
              >
                Gratis kennismakingsgesprek
                <ArrowRight size={15} />
              </Link>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.15}>
              <div className="bg-primary rounded-sm p-8">
                <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-6">Waarom VDH Agency</p>
                <blockquote className="text-white font-black text-xl lg:text-2xl leading-snug mb-6">
                  "Wij denken in oplossingen, niet in problemen."
                </blockquote>
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  Veel bureaus zeggen wat er niet kan. VDH Agency kijkt naar wat er wél mogelijk is — binnen jouw budget, tijdlijn en situatie. Dat is de instelling waarmee we elke samenwerking starten.
                </p>
                <div className="flex flex-col gap-3">
                  {[
                    {label: 'Werkgebied', value: 'Heel Nederland + internationaal'},
                    {label: 'Talen', value: 'Nederlands & Engels'},
                    {label: 'Werkwijze', value: 'Volledig online, flexibel'},
                    {label: 'Aanspreekpunt', value: 'Altijd dezelfde specialist'},
                  ].map(({label, value}) => (
                    <div key={label} className="flex items-start justify-between border-b border-white/10 pb-3">
                      <span className="text-white/40 text-xs">{label}</span>
                      <span className="text-white text-xs font-semibold text-right">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
