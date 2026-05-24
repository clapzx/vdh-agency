import type {Metadata} from 'next';
import {ArrowRight, ChevronDown, MapPin, Star, BarChart2, RefreshCw} from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import CTA from '@/components/sections/CTA';
import {Link} from '@/i18n/navigation';

const BASE = 'https://www.vdh-agency.com';
const SLUG = '/blog/lokaal-beter-gevonden-worden';
const PUBLISHED = '2026-05-24';
const MODIFIED = '2026-05-24';

const faqs = [
  {
    q: 'Hoe snel zie ik resultaat?',
    a: 'Dat verschilt per branche en per gemeente. In rustigere markten zien we na 8 tot 12 weken al duidelijke verbetering. In drukke steden of competitieve sectoren duurt het wat langer. Reken op 4 tot 6 maanden voor een stabiele plek bovenaan.',
  },
  {
    q: 'Kan ik dit niet gewoon zelf doen?',
    a: 'Lokale vindbaarheid is een vak apart. Het vergt specialistische kennis, de juiste tools en doorlopend onderhoud. De meeste ondernemers die er zelf mee aan de slag gaan, merken na een tijdje dat het resultaat tegenvalt of dat het te veel tijd kost naast het runnen van een bedrijf.',
  },
  {
    q: 'Hoeveel reviews heb ik nodig?',
    a: 'Er is geen magisch getal. Google kijkt niet alleen naar het aantal, maar ook naar hoe recent ze zijn, of je erop reageert en wat klanten precies schrijven. Twintig recente reviews met antwoorden werken beter dan honderd oude reviews zonder reactie.',
  },
  {
    q: 'Werkt dit ook voor mijn branche?',
    a: 'Als mensen googelen op jouw dienst plus jouw plaatsnaam, dan is dit direct voor jou relevant. Dat geldt voor bijna elke ondernemer die lokaal werkt: van loodgieter tot tandarts, van kapper tot aannemer.',
  },
  {
    q: 'Wat kost het om dit uit te besteden?',
    a: 'Dat hangt af van je situatie: hoeveel concurrenten je hebt, hoe groot je verzorgingsgebied is en hoe je er nu voorstaat. We kijken er altijd eerst gratis naar. Plan een gesprek en we geven je eerlijk advies, zonder verkooppraatje.',
  },
];

function blogJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        headline: 'Lokaal beter gevonden worden: waarom klanten jouw concurrent bellen en niet jou',
        description:
          'Iemand googelt op "kitbedrijf Zwolle" en belt jouw concurrent. Hoe komt dat? En wat is er écht voor nodig om lokaal bovenaan te staan?',
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
          {'@type': 'ListItem', position: 3, name: 'Lokaal beter gevonden worden', item: `${BASE}${SLUG}`},
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
  const canonical = locale === 'nl' ? `${BASE}${SLUG}` : `${BASE}/en${SLUG}`;

  return {
    title: 'Lokaal beter gevonden worden: waarom klanten jouw concurrent bellen | VDH Agency',
    description:
      'Iemand googelt op "kitbedrijf Zwolle" en belt jouw concurrent. Wat gaat er mis? En hoe groei je lokaal via Google?',
    alternates: {
      canonical,
      languages: {
        nl: `${BASE}${SLUG}`,
        en: `${BASE}/en${SLUG}`,
        'x-default': `${BASE}${SLUG}`,
      },
    },
    openGraph: {
      type: 'article',
      url: canonical,
      title: 'Lokaal beter gevonden worden: waarom klanten jouw concurrent bellen en niet jou',
      description:
        'Iemand googelt op jouw dienst plus jouw stad, en belt jouw concurrent. Hoe komt dat? En hoe keer je dat om?',
      publishedTime: PUBLISHED,
      modifiedTime: MODIFIED,
      authors: ['Lars van der Hoek'],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{locale: string}>;
}) {
  await params;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(blogJsonLd())}}
      />

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
              Lokaal beter gevonden worden:{' '}
              <span className="text-gold">waarom klanten jouw concurrent bellen en niet jou</span>
            </h1>
            <p className="text-white/60 text-lg">
              Iemand googelt "kitbedrijf Zwolle" en neemt contact op met jouw concurrent. Hoe komt dat? En wat is er nodig om dat om te draaien?
            </p>
            <div className="flex items-center gap-4 mt-8 text-white/40 text-sm">
              <span>Lars van der Hoek</span>
              <span>·</span>
              <time dateTime={PUBLISHED}>24 mei 2026</time>
              <span>·</span>
              <span>6 min leestijd</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Article */}
      <section className="bg-light py-16 pb-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 flex flex-col gap-12">

          {/* Intro */}
          <AnimatedSection>
            <p className="text-primary/80 text-lg leading-relaxed mb-4">
              Elke dag zoeken mensen in jouw stad op Google naar wat jij aanbiedt. Ze klikken op de eerste paar namen die ze zien, bellen en maken een afspraak.
            </p>
            <p className="text-primary/70 leading-relaxed mb-4">
              Als jij niet bij die eerste namen staat, bestaat je bedrijf voor die zoeker simpelweg niet. Niet omdat je slechtere diensten levert. Niet omdat je duurder bent. Maar omdat iemand anders beter scoort in de zoekresultaten.
            </p>
            <p className="text-primary/70 leading-relaxed">
              Dat is lokale vindbaarheid. En het is een discipline op zich, met regels die de meeste ondernemers niet kennen.
            </p>
          </AnimatedSection>

          {/* Stat blok */}
          <AnimatedSection>
            <div className="bg-primary rounded-sm p-8 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              {[
                {num: '46%', label: 'van alle Google-zoekopdrachten is lokaal van aard', src: 'Google, 2025'},
                {num: '97%', label: 'van mensen zoekt online voordat ze een lokaal bedrijf bezoekt', src: 'BrightLocal, 2025'},
                {num: '88%', label: 'van die zoekers neemt binnen 24 uur contact op of gaat langs', src: 'Google, 2024'},
              ].map(({num, label, src}) => (
                <div key={num}>
                  <span className="text-gold font-black text-4xl block mb-2">{num}</span>
                  <span className="text-white/70 text-sm leading-relaxed block mb-1">{label}</span>
                  <span className="text-white/30 text-xs">{src}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Sectie 1 */}
          <AnimatedSection>
            <h2 className="text-primary font-black text-2xl mb-4">
              Wat wij voor jou onderzoeken en aanpakken
            </h2>
            <p className="text-primary/70 leading-relaxed mb-4">
              Wie bovenaan staat in de zoekresultaten, zijn niet altijd de bedrijven die het beste werk leveren. Het zijn de bedrijven die Google als meest relevant beschouwt. Die beoordeling is gebaseerd op honderden factoren tegelijk, en wordt continu herberekend.
            </p>
            <p className="text-primary/70 leading-relaxed mb-6">
              Wij weten waar Google naar kijkt. Dit zijn de vier gebieden die we voor onze klanten doorlichten en optimaliseren:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: MapPin,
                  title: 'Je online bedrijfsprofiel',
                  desc: 'Wij analyseren hoe jouw profiel ervoor staat ten opzichte van je concurrenten en stellen alles in om jou zo relevant mogelijk te maken in de ogen van Google.',
                },
                {
                  icon: Star,
                  title: 'Reviews',
                  desc: 'We kijken naar hoe jouw reviews scoren en wat er beter kan. Niet alleen het aantal, maar het hele patroon eromheen. Wij begeleiden je daarin.',
                },
                {
                  icon: BarChart2,
                  title: 'Vermeldingen op andere websites',
                  desc: 'We controleren hoe jouw bedrijf terugkomt op het hele internet en zorgen dat dit consistent en betrouwbaar is — iets wat de meeste ondernemers nooit controleren.',
                },
                {
                  icon: RefreshCw,
                  title: 'Activiteit en concurrentiepositie',
                  desc: 'We houden bij hoe jij scoort ten opzichte van concurrenten en spelen in op veranderingen. Maand na maand, zodat je niet ongemerkt wegzakt.',
                },
              ].map(({icon: Icon, title, desc}) => (
                <div key={title} className="bg-white border border-primary/10 rounded-sm p-6">
                  <div className="w-9 h-9 bg-gold/10 rounded-sm flex items-center justify-center mb-4">
                    <Icon size={17} className="text-gold" />
                  </div>
                  <h3 className="text-primary font-bold text-sm mb-2">{title}</h3>
                  <p className="text-primary/60 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Sectie 2 */}
          <AnimatedSection>
            <h2 className="text-primary font-black text-2xl mb-4">
              Het verschil zit in de details
            </h2>
            <p className="text-primary/70 leading-relaxed mb-4">
              Twee vergelijkbare bedrijven, zelfde stad, zelfde kwaliteit. Toch staat de een consequent bovenaan en krijgt de ander nauwelijks aanvragen via Google. Dat is geen toeval en ook geen geluk.
            </p>
            <p className="text-primary/70 leading-relaxed mb-6">
              Wat er precies speelt, is wat wij voor onze klanten uitzoeken en aanpakken. Lokale SEO is een van de diensten waarmee wij Nederlandse bedrijven helpen om structureel beter gevonden te worden in hun regio.
            </p>
            <div className="bg-primary/5 border-l-4 border-gold rounded-sm p-6 flex flex-col gap-4">
              <p className="text-primary text-sm leading-relaxed">
                <span className="font-bold">Wat wij zien in de praktijk:</span> Als we een bestaand profiel doorlichten, vinden we gemiddeld meer dan twintig punten waar het beter kan. Dat geldt ook voor profielen waarvan de ondernemer dacht dat ze al goed stonden.
              </p>
              <Link
                href="/diensten/seo-sea"
                className="inline-flex items-center gap-2 text-gold font-semibold text-sm hover:opacity-80 transition-opacity self-start"
              >
                Bekijk onze SEO-diensten <ArrowRight size={13} />
              </Link>
            </div>
          </AnimatedSection>

          {/* Sectie 3 */}
          <AnimatedSection>
            <h2 className="text-primary font-black text-2xl mb-4">
              Lokale groei via Google is geen eenmalig klusje
            </h2>
            <p className="text-primary/70 leading-relaxed mb-4">
              Een veel gemaakte fout: het profiel eenmalig goed instellen en daarna niets meer doen. Het probleem is dat Google zijn regels regelmatig aanpast. Wat vorig jaar werkte, werkt nu misschien minder goed. En je concurrenten staan ook niet stil.
            </p>
            <p className="text-primary/70 leading-relaxed mb-4">
              Een bedrijf dat vorig jaar goed vindbaar was, kan dit jaar al zijn weggezakt. Niet omdat er iets mis is gegaan, maar omdat concurrenten zijn bijgekomen of actiever zijn geworden. Google herberekent rankings voortdurend.
            </p>
            <p className="text-primary/70 leading-relaxed">
              Lokale vindbaarheid is geen instelling. Het is iets wat je bijhoudt, aanpast en optimaliseert. Maand na maand.
            </p>
          </AnimatedSection>

          {/* Sectie 4 */}
          <AnimatedSection>
            <h2 className="text-primary font-black text-2xl mb-4">
              Wat het je kost als je niet gevonden wordt
            </h2>
            <p className="text-primary/70 leading-relaxed mb-4">
              Er zoeken elke week mensen in jouw regio naar wat jij aanbiedt. De bovenste bedrijven in de zoekresultaten pakken samen het grootste deel van die aandacht. Wie daar niet bij staat, wordt simpelweg niet gezien. Niet omdat je slechter bent, maar omdat je minder zichtbaar bent.
            </p>
            <p className="text-primary/70 leading-relaxed">
              Tel dat op over een jaar en je begrijpt waarom lokale vindbaarheid geen bijzaak is. Het is de reden dat sommige bedrijven groeien zonder extra advertentiebudget, terwijl anderen in dezelfde markt achterblijven.
            </p>
          </AnimatedSection>

          {/* Inline CTA */}
          <AnimatedSection>
            <div className="bg-primary rounded-sm p-10 text-center relative overflow-hidden">
              <div className="absolute inset-0 dot-grid opacity-20" />
              <div className="relative z-10">
                <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-4">Gratis check</p>
                <h3 className="text-white font-black text-2xl mb-4">
                  Hoe scoort jouw bedrijf lokaal op dit moment?
                </h3>
                <p className="text-white/60 mb-8 max-w-md mx-auto text-sm leading-relaxed">
                  We kijken gratis naar je huidige situatie en vertellen je eerlijk wat er beter kan en hoeveel je er lokaal mee kunt groeien.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-gold text-primary font-bold text-sm px-8 py-4 rounded-sm hover:bg-gold-light transition-colors group"
                >
                  Plan een gratis gesprek
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
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
