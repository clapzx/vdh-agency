import type {Metadata} from 'next';
import {ArrowRight, ChevronDown, MapPin, Star, BarChart2, RefreshCw} from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import CTA from '@/components/sections/CTA';
import {Link} from '@/i18n/navigation';

const BASE = 'https://www.vdh-agency.com';
const SLUG = '/blog/lokale-vindbaarheid-google-profiel';
const PUBLISHED = '2026-05-24';
const MODIFIED = '2026-05-24';

const faqs = [
  {
    q: 'Hoe snel zie ik resultaat?',
    a: 'Dat verschilt per branche en per gemeente. In rustigere markten zien we na 8 tot 12 weken al duidelijke verbetering. In drukke steden of competitieve sectoren duurt het wat langer — reken op 4 tot 6 maanden voor een stabiele plek bovenaan.',
  },
  {
    q: 'Kan ik dit niet gewoon zelf doen?',
    a: 'Je kunt de basis zelf instellen, maar Google kijkt naar veel meer dan alleen een ingevuld profiel. Reviews bijhouden, vermeldingen op andere sites controleren, je profiel maandelijks updaten — dat kost al snel een halve werkdag per week. De meeste ondernemers besteden die tijd liever aan hun echte werk.',
  },
  {
    q: 'Hoeveel reviews heb ik nodig?',
    a: 'Er is geen magisch getal. Google kijkt niet alleen naar het aantal, maar ook naar hoe recent ze zijn, of je erop reageert en wat klanten precies schrijven. Twintig recente reviews met antwoorden werken beter dan honderd oude reviews zonder reactie.',
  },
  {
    q: 'Werkt dit ook voor mijn branche?',
    a: 'Als mensen googelen op "[jouw dienst] + jouw plaatsnaam" of "[jouw dienst] bij mij in de buurt", dan is dit voor jou relevant. Dat geldt voor bijna elke ondernemer die lokaal werkt: van loodgieter tot tandarts, van kapper tot aannemer.',
  },
  {
    q: 'Wat kost het om dit uit te besteden?',
    a: 'Dat hangt af van je situatie: hoeveel concurrenten je hebt, hoe groot je verzorgingsgebied is en hoe je er nu voorstaat. We kijken er altijd eerst gratis naar. Plan een gesprek en we geven je eerlijk advies — zonder verkooppraatje.',
  },
];

function blogJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        headline: 'Gevonden worden op Google Maps: waarom het lastiger is dan het lijkt',
        description:
          'Je hebt je bedrijf aangemeld bij Google, maar klanten vinden je niet. Hoe komt dat? En wat is er echt voor nodig om bovenaan te staan? We leggen het uit in gewone taal.',
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
          {'@type': 'ListItem', position: 3, name: 'Gevonden worden op Google Maps', item: `${BASE}${SLUG}`},
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
    title: 'Gevonden worden op Google Maps: waarom het lastiger is dan het lijkt — VDH Agency',
    description:
      'Je hebt je bedrijf aangemeld bij Google, maar klanten vinden je niet. Hoe komt dat? We leggen het uit in gewone taal — zonder vakjargon.',
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
      title: 'Gevonden worden op Google Maps: waarom het lastiger is dan het lijkt',
      description:
        'Je hebt je bedrijf aangemeld bij Google, maar klanten vinden je niet. Wat gaat er mis — en wat is er écht voor nodig?',
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
              Gevonden worden op Google Maps:<br />
              <span className="text-gold">waarom het lastiger is dan het lijkt</span>
            </h1>
            <p className="text-white/60 text-lg">
              Je hebt je bedrijf aangemeld bij Google. Toch vinden klanten je niet. Hoe zit dat — en wat is er écht voor nodig?
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
              Stel: iemand in jouw stad zoekt op Google naar een loodgieter, een kapper of een boekhoudkantoor. Bovenaan verschijnt een kaartje met drie bedrijven. Die drie bedrijven pakken het grootste deel van de klikken. De rest — hoe goed ook — wordt nauwelijks gezien.
            </p>
            <p className="text-primary/70 leading-relaxed mb-4">
              Dat kaartje heet de Google Bedrijfskaart, en die drie plekken zijn felbegeerd. In bijna elke branche dingen tientallen tot honderden bedrijven mee. Toch denken de meeste ondernemers dat ze er al bij horen zodra ze hun bedrijf hebben "aangemeld" bij Google.
            </p>
            <p className="text-primary/70 leading-relaxed">
              Dat is helaas niet zo. Aanmelden is het begin — niet het eindpunt.
            </p>
          </AnimatedSection>

          {/* Stat blok */}
          <AnimatedSection>
            <div className="bg-primary rounded-sm p-8 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              {[
                {num: '44%', label: 'van alle klikken gaat naar de bovenste 3 bedrijven op de kaart', src: 'Moz, 2025'},
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
              Wat kijkt Google eigenlijk naar?
            </h2>
            <p className="text-primary/70 leading-relaxed mb-4">
              Google bepaalt welke drie bedrijven bovenaan staan op basis van honderden factoren. Die zijn grofweg in te delen in vier groepen:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {[
                {
                  icon: MapPin,
                  title: 'Hoe compleet je profiel is',
                  desc: 'Niet alleen naam en adres, maar ook je openingstijden per seizoen, een beschrijving van al je diensten, de juiste categorieën en tientallen kleine details die de meeste ondernemers overslaan.',
                },
                {
                  icon: Star,
                  title: 'Je reviews',
                  desc: 'Hoeveel je er hebt, hoe recent ze zijn, of je erop reageert en wat klanten precies schrijven. Eén slechte maand zonder nieuwe reviews kan je positie al doen zakken.',
                },
                {
                  icon: BarChart2,
                  title: 'Of andere websites je vermelden',
                  desc: 'Google checkt of je naam, adres en telefoonnummer overal op het internet hetzelfde staan. Eén tikfout op een andere site telt al mee tegen je.',
                },
                {
                  icon: RefreshCw,
                  title: 'Hoe actief je bent',
                  desc: 'Stel je profiel in en laat het vervolgens staan? Dan zakt het weg. Google beloont bedrijven die regelmatig iets updaten, foto\'s toevoegen of berichten plaatsen.',
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
              Waarom "even invullen" niet genoeg is
            </h2>
            <p className="text-primary/70 leading-relaxed mb-4">
              Meer dan de helft van de Nederlandse bedrijven heeft het profiel nooit echt volledig ingesteld (BrightLocal, 2025). Ze hebben de basis staan, maar missen de tientallen kleine dingen die Google wél meewegen.
            </p>
            <p className="text-primary/70 leading-relaxed mb-4">
              En dat is maar één kant van het verhaal. Want zelfs als je profiel vandaag perfect is, kan het over drie maanden alweer zijn weggezakt. Google past zijn regels meerdere keren per jaar aan. Je concurrenten zitten niet stil. Reviews heb je continu nodig, niet eenmalig.
            </p>
            <div className="bg-primary/5 border-l-4 border-gold rounded-sm p-6">
              <p className="text-primary text-sm leading-relaxed">
                <span className="font-bold text-primary">Wat wij zien in de praktijk:</span> Als we een nieuw klantprofiel onder de loep nemen, vinden we gemiddeld meer dan twintig punten waar het beter kan — bij profielen waarvan de ondernemer dacht dat ze al goed stonden.
              </p>
            </div>
          </AnimatedSection>

          {/* Sectie 3 */}
          <AnimatedSection>
            <h2 className="text-primary font-black text-2xl mb-4">
              Wat het je kost als je niet gevonden wordt
            </h2>
            <p className="text-primary/70 leading-relaxed mb-4">
              Stel dat er in jouw stad elke dag tien mensen zoeken naar jouw soort bedrijf. De drie bovenste bedrijven pakken samen 44% van die klikken. Als jij daar niet bij zit, loop je dagelijks klanten mis aan iemand die het spel beter speelt — niet per se beter werk levert.
            </p>
            <p className="text-primary/70 leading-relaxed">
              Dat is de kern van lokale vindbaarheid. Het gaat er niet om wie het beste product heeft. Het gaat erom wie gevonden wordt. En dat is een discipline op zich.
            </p>
          </AnimatedSection>

          {/* Inline CTA */}
          <AnimatedSection>
            <div className="bg-primary rounded-sm p-10 text-center relative overflow-hidden">
              <div className="absolute inset-0 dot-grid opacity-20" />
              <div className="relative z-10">
                <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-4">Gratis check</p>
                <h3 className="text-white font-black text-2xl mb-4">
                  Hoe staat jouw bedrijf er nu voor?
                </h3>
                <p className="text-white/60 mb-8 max-w-md mx-auto text-sm leading-relaxed">
                  We kijken gratis naar je huidige situatie en vertellen je eerlijk wat er beter kan. Geen verkooppraatje, gewoon een duidelijk beeld.
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
