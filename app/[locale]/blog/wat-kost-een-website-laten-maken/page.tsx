import type {Metadata} from 'next';
import {ArrowRight, ChevronDown} from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import CTA from '@/components/sections/CTA';
import {Link} from '@/i18n/navigation';

const BASE = 'https://www.vdh-agency.com';
const SLUG = '/blog/wat-kost-een-website-laten-maken';
const PUBLISHED = '2026-05-26';
const MODIFIED = '2026-05-26';

const faqs = [
  {
    q: 'Wat kost een eenvoudige zakelijke website?',
    a: 'Een zakelijke website met 5 tot 10 pagina\'s kost bij een professioneel bureau gemiddeld tussen de €1.500 en €4.000. De prijs hangt af van de hoeveelheid maatwerk in design, of je een CMS wilt en de complexiteit van de inhoud.',
  },
  {
    q: 'Zijn er maandelijkse kosten naast de bouwprijs?',
    a: 'Ja. Je betaalt doorlopend voor hosting (€5 tot €50 per maand afhankelijk van de provider en omvang), een domeinnaam (€10 tot €30 per jaar) en eventueel een onderhoudspakket voor updates en backups.',
  },
  {
    q: 'Wat is het verschil tussen een goedkope en een dure website?',
    a: 'Een goedkope website (€200 via een freelancer of websitebuilder) geeft je een basisopzet, maar vaak zonder SEO-fundament, maatwerk design of ondersteuning. Een professionele website is een investering die zichzelf terugverdient via betere vindbaarheid en hogere conversie.',
  },
  {
    q: 'Kan ik een website ook zelf bouwen?',
    a: 'Ja, met tools als Wix, Squarespace of WordPress.com. Dat kost weinig geld maar veel tijd, en het resultaat mist meestal de technische SEO en professionele uitstraling die klanten overtuigen. Voor een hobby is het prima; voor een serieus bedrijf is professionele hulp een betere investering.',
  },
];

function blogJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        headline: 'Wat kost een website laten maken? Eerlijk overzicht voor het MKB',
        description: 'Wat kost een professionele website laten maken in 2026? Van simpele zakelijke site tot webshop — een eerlijk overzicht van prijzen, wat je ervoor krijgt en waar je op moet letten.',
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
          {'@type': 'ListItem', position: 3, name: 'Wat kost een website laten maken?', item: `${BASE}${SLUG}`},
        ],
      },
    ],
  };
}

export async function generateMetadata({params}: {params?: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale = 'nl'} = params ? await params : {};
  const canonical = locale === 'nl' ? `${BASE}${SLUG}` : `${BASE}/en${SLUG}`;
  return {
    title: 'Wat Kost een Website Laten Maken? Eerlijk Overzicht 2026 | VDH Agency',
    description: 'Wat kost een professionele website laten maken in 2026? Van simpele zakelijke site tot webshop — eerlijke prijzen, valkuilen en tips voor het MKB.',
    ...(locale !== 'nl' && {robots: {index: false, follow: false}}),
    alternates: {
      canonical,
      languages: {nl: `${BASE}${SLUG}`, en: `${BASE}/en${SLUG}`, 'x-default': `${BASE}${SLUG}`},
    },
    openGraph: {
      type: 'article',
      url: canonical,
      title: 'Wat kost een website laten maken? Eerlijk overzicht voor het MKB',
      description: 'Realistische prijzen, wat je ervoor krijgt en waarop je moet letten bij een website laten maken.',
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
              Wat kost een website laten maken?{' '}
              <span className="text-gold">Eerlijk overzicht voor het MKB</span>
            </h1>
            <p className="text-white/60 text-lg">
              Van simpele zakelijke site tot professionele webshop — wat betaal je werkelijk, wat krijg je ervoor en waar gaat het mis?
            </p>
            <div className="flex items-center gap-4 mt-8 text-white/40 text-sm">
              <span>Lars van der Hoek</span>
              <span>·</span>
              <time dateTime={PUBLISHED}>26 mei 2026</time>
              <span>·</span>
              <span>7 min leestijd</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Article */}
      <section className="bg-light py-16 pb-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 flex flex-col gap-12">

          <AnimatedSection>
            <p className="text-primary/80 text-lg leading-relaxed mb-4">
              Wie online gaat zoeken naar "wat kost een website laten maken", vindt antwoorden die variëren van €200 tot €20.000. Allebei kunnen correct zijn — maar ze beschrijven totaal verschillende producten.
            </p>
            <p className="text-primary/70 leading-relaxed">
              In dit artikel leg ik uit welke factoren de prijs bepalen, wat je kunt verwachten voor een MKB-budget en waarom de goedkoopste optie zelden de verstandigste is.
            </p>
          </AnimatedSection>

          {/* Prijsoverzicht tabel */}
          <AnimatedSection>
            <h2 className="text-primary font-black text-2xl mb-6">Wat kost een website? Een eerlijk overzicht</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="text-left px-5 py-4 font-semibold">Type website</th>
                    <th className="text-left px-5 py-4 font-semibold">Geschatte prijs</th>
                    <th className="text-left px-5 py-4 font-semibold">Geschikt voor</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {type: 'Websitebuilder (Wix, Squarespace)', prijs: '€0–€30/mnd', voor: 'Hobby, éénmanszaak, tijdelijk'},
                    {type: 'Template op WordPress', prijs: '€800–€2.500', voor: 'Kleine MKB, beperkt budget'},
                    {type: 'Professionele zakelijke site (maatwerk)', prijs: '€2.500–€7.000', voor: 'MKB dat serieus wil groeien'},
                    {type: 'Webshop op Shopify of WooCommerce', prijs: '€3.000–€10.000+', voor: 'Productverkoop, e-commerce'},
                    {type: 'Volledig maatwerk enterprise', prijs: '€10.000+', voor: 'Complexe systemen, integraties'},
                  ].map(({type, prijs, voor}, i) => (
                    <tr key={type} className={i % 2 === 0 ? 'bg-white' : 'bg-primary/3'}>
                      <td className="px-5 py-4 text-primary font-medium border-b border-primary/8">{type}</td>
                      <td className="px-5 py-4 text-gold font-semibold border-b border-primary/8">{prijs}</td>
                      <td className="px-5 py-4 text-primary/60 border-b border-primary/8">{voor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>

          {/* Wat bepaalt de prijs */}
          <AnimatedSection>
            <h2 className="text-primary font-black text-2xl mb-4">Wat bepaalt de prijs?</h2>
            <p className="text-primary/70 leading-relaxed mb-6">
              Er zijn vijf factoren die de prijs van een website het meest bepalen. Als je begrijpt waar de kosten zitten, kun je ook beter beoordelen of een offerte redelijk is.
            </p>
            <div className="flex flex-col gap-4">
              {[
                {title: '1. Aantal pagina\'s en complexiteit', desc: 'Een eenvoudige vijf-pagina-site is fundamenteel anders dan een website met twintig dienst- en locatiepagina\'s, een blog, een contactformulier met automatische opvolging en meerdere talen.'},
                {title: '2. Maatwerk design vs. template', desc: 'Een template is een kant-en-klare layout die je aanpast. Maatwerk design begint bij een blanco vel en wordt op jouw merk gebouwd. Maatwerk kost meer, maar geeft ook een uniek resultaat dat converteert op jouw doelgroep.'},
                {title: '3. CMS en beheersbaarheid', desc: 'Wil je zelf teksten aanpassen, blog-artikelen plaatsen en afbeeldingen uploaden? Dan bouw je met een CMS (Content Management Systeem). Dat voegt functionaliteit en daarmee ontwikkeltijd toe.'},
                {title: '4. SEO-fundament en technische eisen', desc: 'Een goede website is technisch SEO-klaar: correcte heading-structuur, schema markup, snelle laadtijden, Core Web Vitals, sitemap. Bureaus die dit standaard meenemen bouwen anders (en iets duurder) dan bureaus die alleen een mooie voorkant bouwen.'},
                {title: '5. Integraties', desc: 'Wil je een koppeling met een boekhoudpakket, een CRM, een reserveringstool, een betaalprovider of een webshop-backend? Elke integratie kost ontwikkeltijd.'},
              ].map(({title, desc}) => (
                <div key={title} className="bg-white border border-primary/10 rounded-sm p-6">
                  <h3 className="text-primary font-bold text-sm mb-2">{title}</h3>
                  <p className="text-primary/60 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Waarschuwing goedkoop */}
          <AnimatedSection>
            <h2 className="text-primary font-black text-2xl mb-4">Waarom de goedkoopste optie je meer kost</h2>
            <p className="text-primary/70 leading-relaxed mb-4">
              Een website voor €300 van een freelancer of via een websitebuilder klinkt aantrekkelijk. Maar er zijn serieuze risico's die je op voorhand meeneemt in je afweging.
            </p>
            <div className="bg-primary/5 border-l-4 border-gold rounded-sm p-6 mb-4">
              <p className="text-primary text-sm leading-relaxed mb-3">
                <span className="font-bold">Wat je vaak mist bij een goedkope website:</span>
              </p>
              <ul className="flex flex-col gap-2 text-primary/70 text-sm">
                {[
                  'Technisch SEO-fundament (pagina\'s die Google nooit goed indexeert)',
                  'Mobiele optimalisatie (meer dan 60% van verkeer is mobiel)',
                  'Snelle laadtijden (elke extra seconde kost je 7% conversie)',
                  'Schaalbare structuur (uitbreiden wordt een verbouwing)',
                  'Ondersteuning achteraf (als iets kapot gaat, sta je er alleen voor)',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-gold mt-0.5">→</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-primary/70 leading-relaxed">
              Een website die slecht gevonden wordt en bezoekers wegjaagt, is geen besparing. Het is een mislukte investering.
            </p>
          </AnimatedSection>

          {/* Terugverdienen */}
          <AnimatedSection>
            <h2 className="text-primary font-black text-2xl mb-4">Hoe snel verdien je een website terug?</h2>
            <p className="text-primary/70 leading-relaxed mb-4">
              Een realistische berekening: stel dat je als loodgieter in Zwolle één extra opdracht per maand via je website binnenhaalt. Gemiddelde waarde: €400. Over een jaar is dat €4.800 — meer dan genoeg om de bouwkosten van een professionele site terug te verdienen.
            </p>
            <div className="bg-primary rounded-sm p-8 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              {[
                {num: '75%', label: 'van zoekers klikt niet verder dan pagina 1 van Google'},
                {num: '53%', label: 'van alle websiteverkeer komt via organisch zoeken'},
                {num: '2,4×', label: 'hogere conversie bij sites die snel laden (onder 2 seconden)'},
              ].map(({num, label}) => (
                <div key={num}>
                  <span className="text-gold font-black text-4xl block mb-2">{num}</span>
                  <span className="text-white/70 text-sm leading-relaxed">{label}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Checklist */}
          <AnimatedSection>
            <h2 className="text-primary font-black text-2xl mb-4">Checklist: dit moet in elke offerte staan</h2>
            <p className="text-primary/70 leading-relaxed mb-5">
              Vraag je meerdere offertes op? Zorg dat je appels met appels vergelijkt. Dit zijn de punten die in elke serieuze website-offerte moeten staan:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Aantal pagina\'s en structuur',
                'Inclusief of exclusief teksten en afbeeldingen',
                'CMS en beheermogelijkheden',
                'Technisch SEO-fundament',
                'Mobielvriendelijkheid',
                'Laadsnelheid en performance',
                'Hosting, domein en bijkomende kosten',
                'Oplevertijd en revisieronden',
                'Nazorg en ondersteuning',
                'Eigendom van code en bestanden',
              ].map(item => (
                <div key={item} className="flex items-center gap-3 bg-white border border-primary/8 rounded-sm px-4 py-3">
                  <span className="text-gold font-bold">✓</span>
                  <span className="text-primary/70 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Inline CTA */}
          <AnimatedSection>
            <div className="bg-primary rounded-sm p-10 text-center relative overflow-hidden">
              <div className="absolute inset-0 dot-grid opacity-20" />
              <div className="relative z-10">
                <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-4">Gratis offerte</p>
                <h3 className="text-white font-black text-2xl mb-4">
                  Benieuwd wat een website kost voor jouw situatie?
                </h3>
                <p className="text-white/60 mb-8 max-w-md mx-auto text-sm leading-relaxed">
                  Wij maken een vaste offerte op maat — geen rekening op uurloon, geen verborgen kosten. Plan een gratis gesprek en we vertellen je eerlijk wat het kost en oplevert.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link href="/contact" className="inline-flex items-center gap-3 bg-gold text-primary font-bold text-sm px-8 py-4 rounded-sm hover:bg-gold-light transition-colors group">
                    Gratis offerte aanvragen
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a href="/website-laten-maken" className="inline-flex items-center gap-2 border border-white/20 text-white font-semibold text-sm px-6 py-4 rounded-sm hover:border-gold hover:text-gold transition-colors">
                    Meer over website laten maken
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
