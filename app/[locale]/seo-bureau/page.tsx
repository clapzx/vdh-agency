import type {Metadata} from 'next';
import {Search, CheckCircle2, ChevronDown, ArrowRight, TrendingUp, BarChart2, Target} from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionLabel from '@/components/ui/SectionLabel';
import Breadcrumb from '@/components/ui/Breadcrumb';
import CTA from '@/components/sections/CTA';
import {Link} from '@/i18n/navigation';

const BASE = 'https://www.vdh-agency.com';
const SLUG = '/seo-bureau';

function pageJsonLd(locale: string) {
  const isNl = locale === 'nl';
  const url = isNl ? `${BASE}${SLUG}` : `${BASE}/en${SLUG}`;

  const faqs = isNl
    ? [
        {q: 'Wat kost een SEO bureau in Nederland?', a: 'De kosten voor een SEO bureau in Nederland liggen gemiddeld tussen €300 en €1.500 per maand, afhankelijk van de omvang en competitiviteit van het project. Bij VDH Agency start onze SEO-dienstverlening vanaf €350 per maand voor lokale SEO, inclusief technische audit, zoekwoordonderzoek en maandelijkse rapportage.'},
        {q: 'Hoe snel zie ik resultaat van SEO?', a: 'De eerste meetbare verbeteringen zijn doorgaans zichtbaar na 8 tot 16 weken. Een stabiele positie in de top van Google bereik je meestal na 3 tot 6 maanden. In minder competitieve markten kan dit sneller gaan. Wij rapporteren maandelijks over posities, organisch verkeer en conversies.'},
        {q: 'Kan een SEO bureau Google-posities garanderen?', a: 'Elk bureau dat specifieke posities garandeert, liegt. Google bepaalt zijn eigen rankings op basis van honderden factoren. Wat wij garanderen: transparant werken, bewezen methodieken, maandelijkse rapportage en aantoonbare groei in organisch verkeer. Geen loze beloftes.'},
        {q: 'Wat is het verschil tussen SEO en SEA?', a: 'SEO (Search Engine Optimization) richt zich op organische vindbaarheid — posities die je verdient op basis van relevantie en autoriteit. SEA (Search Engine Advertising) zijn betaalde advertenties in Google. SEO heeft een langere aanlooptijd maar levert duurzaam resultaat; SEA is direct zichtbaar maar stopt zodra het budget op is. Wij combineren beide voor maximaal effect.'},
        {q: 'Werkt SEO ook voor lokale bedrijven?', a: 'Absoluut. Lokale SEO is juist bijzonder effectief voor MKB-bedrijven. 46% van alle Google-zoekopdrachten heeft een lokale intentie (Google, 2025). Door je Google Business Profile te optimaliseren, lokale zoekwoorden te targeten en consistente NAP-vermeldingen te bouwen, word je aantoonbaar beter gevonden in jouw regio.'},
      ]
    : [
        {q: 'What does an SEO agency in the Netherlands cost?', a: 'SEO agency costs in the Netherlands typically range from €300 to €1,500 per month depending on project scope and competitiveness. At VDH Agency, our SEO services start from €350 per month for local SEO, including technical audit, keyword research and monthly reporting.'},
        {q: 'How quickly will I see SEO results?', a: 'The first measurable improvements are usually visible after 8 to 16 weeks. Stable positions at the top of Google are typically achieved after 3 to 6 months. In less competitive markets this can happen faster. We report monthly on rankings, organic traffic and conversions.'},
        {q: 'Can an SEO agency guarantee Google positions?', a: 'Any agency that guarantees specific positions is lying. Google determines its own rankings based on hundreds of factors. What we guarantee: transparent working methods, proven techniques, monthly reporting and demonstrable growth in organic traffic. No empty promises.'},
        {q: 'What is the difference between SEO and SEA?', a: 'SEO (Search Engine Optimization) focuses on organic visibility — positions you earn through relevance and authority. SEA (Search Engine Advertising) involves paid ads in Google. SEO has a longer lead time but delivers sustainable results; SEA is immediately visible but stops when your budget runs out. We combine both for maximum effect.'},
        {q: 'Does SEO work for local businesses?', a: 'Absolutely. Local SEO is particularly effective for SMEs. 46% of all Google searches have local intent (Google, 2025). By optimising your Google Business Profile, targeting local keywords and building consistent NAP citations, you can demonstrably improve your visibility in your region.'},
      ];

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: isNl ? 'SEO Bureau Nederland — VDH Agency' : 'SEO Agency Netherlands — VDH Agency',
        provider: {'@id': `${BASE}/#organization`},
        areaServed: {'@type': 'Country', name: 'Netherlands'},
        description: isNl
          ? 'Professioneel SEO bureau voor het MKB in Nederland. Technische SEO, lokale SEO, zoekwoordonderzoek en Google Ads. Transparante rapportage, meetbare resultaten.'
          : 'Professional SEO agency for SMEs in the Netherlands. Technical SEO, local SEO, keyword research and Google Ads. Transparent reporting, measurable results.',
        url,
        offers: {
          '@type': 'Offer',
          priceCurrency: 'EUR',
          priceSpecification: {
            '@type': 'PriceSpecification',
            minPrice: '350',
            priceCurrency: 'EUR',
            unitText: isNl ? 'per maand' : 'per month',
          },
        },
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
          {'@type': 'ListItem', position: 1, name: 'Home', item: isNl ? BASE : `${BASE}/en`},
          {'@type': 'ListItem', position: 2, name: isNl ? 'SEO Bureau' : 'SEO Agency', item: url},
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
  const canonical = isNl ? `${BASE}${SLUG}` : `${BASE}/en${SLUG}`;

  return {
    title: isNl
      ? 'SEO Bureau Nederland — Meer klanten via Google | VDH Agency'
      : 'SEO Agency Netherlands — More customers via Google | VDH Agency',
    description: isNl
      ? 'VDH Agency is een SEO bureau voor het Nederlandse MKB. Technische SEO, lokale SEO, zoekwoordonderzoek en maandelijkse rapportage. Transparant, resultaatgericht. Gratis kennismakingsgesprek.'
      : 'VDH Agency is an SEO agency for Dutch SMEs. Technical SEO, local SEO, keyword research and monthly reporting. Transparent, results-focused. Free introductory consultation.',
    alternates: {
      canonical,
      languages: {
        nl: `${BASE}${SLUG}`,
        en: `${BASE}/en${SLUG}`,
        'x-default': `${BASE}${SLUG}`,
      },
    },
    openGraph: {
      url: canonical,
    },
  };
}

const whatWeDoNl = [
  {
    Icon: Search,
    title: 'Technische SEO Audit',
    desc: 'We doorlichten je website op alle technische SEO-factoren: laadsnelheid, crawlbaarheid, Core Web Vitals, canonicalisatie, hreflang en mobiele prestaties. Je ontvangt een geprioriteerde lijst met concrete verbeterpunten.',
  },
  {
    Icon: Target,
    title: 'Zoekwoordonderzoek & Strategie',
    desc: 'We brengen in kaart welke zoekwoorden jouw doelgroep gebruikt en hoe haalbaar het is om daar op te ranken. Op basis hiervan bouwen we een realistisch SEO-plan dat aansluit op jouw zakelijke doelstellingen.',
  },
  {
    Icon: TrendingUp,
    title: 'On-Page & Content Optimalisatie',
    desc: 'Titels, meta-omschrijvingen, heading-structuur, interne links en content — alles wordt geoptimaliseerd voor de zoekwoorden die er echt toe doen. We schrijven ook nieuwe content die bezoekers aantrekt én converteert.',
  },
  {
    Icon: BarChart2,
    title: 'Lokale SEO & Google Business Profile',
    desc: 'Voor bedrijven die lokaal willen groeien: we optimaliseren je Google Business Profile, bouwen consistente NAP-vermeldingen en zorgen dat je verschijnt in de lokale zoekresultaten in jouw stad of regio.',
  },
];

const whatWeDoEn = [
  {
    Icon: Search,
    title: 'Technical SEO Audit',
    desc: 'We analyse your website on all technical SEO factors: loading speed, crawlability, Core Web Vitals, canonicalisation, hreflang and mobile performance. You receive a prioritised list of concrete improvements.',
  },
  {
    Icon: Target,
    title: 'Keyword Research & Strategy',
    desc: 'We map out which keywords your target audience uses and how achievable it is to rank for them. Based on this we build a realistic SEO plan aligned with your business objectives.',
  },
  {
    Icon: TrendingUp,
    title: 'On-Page & Content Optimisation',
    desc: 'Titles, meta descriptions, heading structure, internal links and content — everything is optimised for the keywords that really matter. We also write new content that attracts visitors and converts them.',
  },
  {
    Icon: BarChart2,
    title: 'Local SEO & Google Business Profile',
    desc: 'For businesses that want to grow locally: we optimise your Google Business Profile, build consistent NAP citations and ensure you appear in local search results in your city or region.',
  },
];

export default async function SeoBureauPage({
  params,
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  const isNl = locale === 'nl';

  const includes = isNl
    ? ['SEO Audit & Technische optimalisatie', 'Zoekwoordonderzoek', 'On-page optimalisatie', 'Lokale SEO', 'Google Ads (SEA)', 'Maandelijkse rapportage']
    : ['SEO Audit & Technical optimisation', 'Keyword research', 'On-page optimisation', 'Local SEO', 'Google Ads (SEA)', 'Monthly reporting'];

  const faqs = isNl
    ? [
        {q: 'Wat kost een SEO bureau in Nederland?', a: 'De kosten voor een SEO bureau in Nederland liggen gemiddeld tussen €300 en €1.500 per maand, afhankelijk van de omvang en competitiviteit van het project. Bij VDH Agency start onze SEO-dienstverlening vanaf €350 per maand voor lokale SEO, inclusief technische audit, zoekwoordonderzoek en maandelijkse rapportage.'},
        {q: 'Hoe snel zie ik resultaat van SEO?', a: 'De eerste meetbare verbeteringen zijn doorgaans zichtbaar na 8 tot 16 weken. Een stabiele positie in de top van Google bereik je meestal na 3 tot 6 maanden. In minder competitieve markten kan dit sneller gaan. Wij rapporteren maandelijks over posities, organisch verkeer en conversies.'},
        {q: 'Kan een SEO bureau Google-posities garanderen?', a: 'Elk bureau dat specifieke posities garandeert, liegt. Google bepaalt zijn eigen rankings op basis van honderden factoren. Wat wij garanderen: transparant werken, bewezen methodieken, maandelijkse rapportage en aantoonbare groei in organisch verkeer. Geen loze beloftes.'},
        {q: 'Wat is het verschil tussen SEO en SEA?', a: 'SEO (Search Engine Optimization) richt zich op organische vindbaarheid — posities die je verdient op basis van relevantie en autoriteit. SEA (Search Engine Advertising) zijn betaalde advertenties in Google. SEO heeft een langere aanlooptijd maar levert duurzaam resultaat; SEA is direct zichtbaar maar stopt zodra het budget op is. Wij combineren beide voor maximaal effect.'},
        {q: 'Werkt SEO ook voor lokale bedrijven?', a: 'Absoluut. Lokale SEO is juist bijzonder effectief voor MKB-bedrijven. 46% van alle Google-zoekopdrachten heeft een lokale intentie (Google, 2025). Door je Google Business Profile te optimaliseren, lokale zoekwoorden te targeten en consistente NAP-vermeldingen te bouwen, word je aantoonbaar beter gevonden in jouw regio.'},
      ]
    : [
        {q: 'What does an SEO agency in the Netherlands cost?', a: 'SEO agency costs in the Netherlands typically range from €300 to €1,500 per month depending on project scope and competitiveness. At VDH Agency, our SEO services start from €350 per month for local SEO, including technical audit, keyword research and monthly reporting.'},
        {q: 'How quickly will I see SEO results?', a: 'The first measurable improvements are usually visible after 8 to 16 weeks. Stable positions at the top of Google are typically achieved after 3 to 6 months. In less competitive markets this can happen faster. We report monthly on rankings, organic traffic and conversions.'},
        {q: 'Can an SEO agency guarantee Google positions?', a: 'Any agency that guarantees specific positions is lying. Google determines its own rankings based on hundreds of factors. What we guarantee: transparent working methods, proven techniques, monthly reporting and demonstrable growth in organic traffic. No empty promises.'},
        {q: 'What is the difference between SEO and SEA?', a: 'SEO (Search Engine Optimization) focuses on organic visibility — positions you earn through relevance and authority. SEA (Search Engine Advertising) involves paid ads in Google. SEO has a longer lead time but delivers sustainable results; SEA is immediately visible but stops when your budget runs out. We combine both for maximum effect.'},
        {q: 'Does SEO work for local businesses?', a: 'Absolutely. Local SEO is particularly effective for SMEs. 46% of all Google searches have local intent (Google, 2025). By optimising your Google Business Profile, targeting local keywords and building consistent NAP citations, you can demonstrably improve your visibility in your region.'},
      ];

  const whatWeDo = isNl ? whatWeDoNl : whatWeDoEn;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(pageJsonLd(locale))}}
      />

      {/* Hero */}
      <section className="bg-primary pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <Breadcrumb crumbs={[
              {label: 'Home', href: isNl ? '/' : '/en/'},
              {label: isNl ? 'SEO Bureau' : 'SEO Agency'},
            ]} />
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-6 h-px bg-gold" />
              <span className="text-gold text-xs font-semibold tracking-widest uppercase">
                {isNl ? 'SEO Bureau Nederland' : 'SEO Agency Netherlands'}
              </span>
            </div>
            <h1 className="text-white font-black text-4xl lg:text-6xl leading-tight mb-5">
              {isNl
                ? 'SEO bureau dat écht resultaat levert'
                : 'SEO agency that actually delivers results'}
            </h1>
            <p className="text-white/60 text-xl mb-10">
              {isNl
                ? 'Meer organisch verkeer, betere posities in Google en een aantoonbare groei in aanvragen. Geen lege beloftes — alleen meetbare resultaten. Vanaf €350/maand.'
                : 'More organic traffic, better positions in Google and demonstrable growth in enquiries. No empty promises — only measurable results. From €350/month.'}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href={isNl ? '/contact' : '/en/contact'}
                className="flex items-center gap-2 bg-gold text-primary font-bold text-sm px-7 py-3.5 rounded-sm hover:bg-gold-light transition-colors"
              >
                {isNl ? 'Gratis SEO-check aanvragen' : 'Request free SEO check'}
                <ArrowRight size={15} />
              </Link>
              <Link
                href={isNl ? '/diensten/seo-sea' : '/en/diensten/seo-sea'}
                className="flex items-center gap-2 border border-white/20 text-white font-semibold text-sm px-7 py-3.5 rounded-sm hover:border-gold hover:text-gold transition-colors"
              >
                {isNl ? 'Bekijk SEO & SEA dienst' : 'View SEO & SEA service'}
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Wat is een SEO bureau */}
      <section className="bg-light py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <SectionLabel>{isNl ? 'Wat wij doen' : 'What we do'}</SectionLabel>
              <h2 className="text-primary font-black text-3xl lg:text-4xl mb-6">
                {isNl
                  ? 'Wat doet een SEO bureau voor jouw bedrijf?'
                  : 'What does an SEO agency do for your business?'}
              </h2>
              <div className="flex flex-col gap-4">
                <p className="text-primary/70 text-base leading-relaxed">
                  {isNl
                    ? 'Een SEO bureau zorgt ervoor dat jouw website beter gevonden wordt in Google — zonder dat je ervoor hoeft te betalen per klik. We optimaliseren de technische basis van je site, maken content die aansluit op wat jouw doelgroep zoekt, en bouwen autoriteit op via relevante vermeldingen.'
                    : 'An SEO agency ensures your website ranks better in Google — without paying per click. We optimise the technical foundation of your site, create content that matches what your target audience searches for, and build authority through relevant citations.'}
                </p>
                <p className="text-primary/70 text-base leading-relaxed">
                  {isNl
                    ? 'Het resultaat: structureel meer bezoekers op de pagina\'s die ertoe doen. Bezoekers die actief op zoek zijn naar wat jij aanbiedt, en daardoor veel eerder klant worden dan mensen die een advertentie zien.'
                    : 'The result: structurally more visitors on the pages that matter. Visitors who are actively searching for what you offer, and therefore far more likely to become customers than people who see an ad.'}
                </p>
                <p className="text-primary/70 text-base leading-relaxed">
                  {isNl
                    ? 'Bij VDH Agency werken we zonder tussenlagen. Lars van der Hoek is persoonlijk betrokken bij elk project. Je weet altijd wie er aan jouw SEO werkt en wat er gedaan wordt.'
                    : 'At VDH Agency we work without intermediaries. Lars van der Hoek is personally involved in every project. You always know who is working on your SEO and what is being done.'}
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.15}>
              <div className="bg-primary rounded-sm p-10 border-l-4 border-gold">
                <div className="w-14 h-14 rounded-sm bg-gold/10 flex items-center justify-center mb-6">
                  <Search size={26} className="text-gold" />
                </div>
                <h3 className="text-white font-bold text-xl mb-2">
                  {isNl ? 'Wat is inbegrepen' : 'What is included'}
                </h3>
                <p className="text-gold text-sm mb-5">
                  {isNl ? 'Vanaf €350/maand' : 'From €350/month'}
                </p>
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

      {/* Wat wij aanpakken */}
      <section className="bg-primary py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-2xl mb-16">
            <SectionLabel light>{isNl ? 'Onze aanpak' : 'Our approach'}</SectionLabel>
            <h2 className="text-white font-black text-3xl lg:text-5xl">
              {isNl
                ? 'Hoe een SEO bureau jouw vindbaarheid verbetert'
                : 'How an SEO agency improves your visibility'}
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whatWeDo.map(({Icon, title, desc}, i) => (
              <AnimatedSection key={title} delay={i * 0.08}>
                <div className="bg-white/5 border border-white/10 rounded-sm p-8 hover:border-gold/30 transition-colors h-full">
                  <div className="w-11 h-11 rounded-sm bg-gold/10 flex items-center justify-center mb-5">
                    <Icon size={20} className="text-gold" />
                  </div>
                  <h3 className="text-white font-bold text-base mb-3">{title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Waarom VDH Agency */}
      <section className="bg-light py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-2xl mb-12">
            <SectionLabel>{isNl ? 'Waarom VDH Agency' : 'Why VDH Agency'}</SectionLabel>
            <h2 className="text-primary font-black text-3xl lg:text-4xl">
              {isNl
                ? 'Wat maakt ons anders als SEO bureau?'
                : 'What makes us different as an SEO agency?'}
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection direction="left">
              <div className="flex flex-col gap-6">
                {(isNl ? [
                  {
                    title: 'Geen vage rapportages',
                    desc: 'Je ontvangt elke maand een helder rapport met je huidige posities, het organische verkeer en de ontwikkeling ten opzichte van de vorige maand. Precies, transparant en zonder jargon.',
                  },
                  {
                    title: 'Eerlijk over verwachtingen',
                    desc: 'We zeggen je van tevoren wat realistisch is. Als een zoekwoord te competitief is voor jouw budget, zeggen we dat. We liever een eerlijk advies geven dan een contract tekenen met onhaalbare beloftes.',
                  },
                  {
                    title: 'Geen grote bureaustructuur',
                    desc: 'Bij VDH Agency werk je altijd direct met Lars. Geen accountmanager die doorgeeft, geen junior die je SEO uitvoert terwijl de senior verkoopt. Directe lijn, persoonlijke betrokkenheid.',
                  },
                  {
                    title: 'MKB-specialist',
                    desc: 'Onze dienstverlening is specifiek afgestemd op het Nederlandse MKB. Geen enterprise-aanpak met bijbehorend budget, maar een SEO-strategie die past bij de schaal en doelstellingen van jouw bedrijf.',
                  },
                ] : [
                  {
                    title: 'No vague reporting',
                    desc: 'Every month you receive a clear report with your current rankings, organic traffic and development compared to the previous month. Precise, transparent and without jargon.',
                  },
                  {
                    title: 'Honest about expectations',
                    desc: 'We tell you upfront what is realistic. If a keyword is too competitive for your budget, we say so. We prefer giving honest advice over signing a contract with unachievable promises.',
                  },
                  {
                    title: 'No large agency structure',
                    desc: 'At VDH Agency you always work directly with Lars. No account manager passing things on, no junior executing your SEO while the senior sells. Direct line, personal involvement.',
                  },
                  {
                    title: 'SME specialist',
                    desc: 'Our services are specifically tailored to Dutch SMEs. Not an enterprise approach with an enterprise budget, but an SEO strategy that fits the scale and objectives of your business.',
                  },
                ]).map(({title, desc}) => (
                  <div key={title} className="border-l-2 border-gold pl-5">
                    <h3 className="text-primary font-bold text-base mb-1">{title}</h3>
                    <p className="text-primary/60 text-sm leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.15}>
              <div className="bg-primary rounded-sm p-10">
                <div className="grid grid-cols-1 gap-6">
                  {[
                    {num: '46%', label: isNl ? 'van alle Google-zoekopdrachten is lokaal van aard' : 'of all Google searches have local intent', src: 'Google, 2025'},
                    {num: '97%', label: isNl ? 'van mensen zoekt online voor een lokaal bedrijfsbezoek' : 'of people search online before visiting a local business', src: 'BrightLocal, 2025'},
                    {num: '88%', label: isNl ? 'van lokale zoekers neemt binnen 24 uur contact op' : 'of local searchers contact a business within 24 hours', src: 'Google, 2024'},
                    {num: '3-6', label: isNl ? 'maanden voor stabiele Google-posities bij consistent SEO-werk' : 'months for stable Google rankings with consistent SEO work', src: isNl ? 'Gemiddelde termijn' : 'Average timeline'},
                  ].map(({num, label, src}) => (
                    <div key={num} className="flex items-start gap-5 border-b border-white/5 pb-5 last:border-0 last:pb-0">
                      <span className="text-gold font-black text-3xl shrink-0 leading-none">{num}</span>
                      <div>
                        <p className="text-white/70 text-sm leading-relaxed">{label}</p>
                        <p className="text-white/30 text-xs mt-1">{src}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-white py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-2xl mb-12">
            <SectionLabel>{isNl ? 'Tarieven' : 'Pricing'}</SectionLabel>
            <h2 className="text-primary font-black text-3xl lg:text-4xl">
              {isNl
                ? 'Wat kost een SEO bureau in Nederland?'
                : 'What does an SEO agency in the Netherlands cost?'}
            </h2>
            <p className="text-primary/60 mt-4 text-base leading-relaxed">
              {isNl
                ? 'Transparantie over kosten is een van onze kernwaarden. Hieronder een indicatie van onze tarieven. De exacte prijs hangt af van de omvang van het project en de competitiviteit van jouw markt.'
                : 'Transparency about costs is one of our core values. Below is an indication of our rates. The exact price depends on the scope of the project and the competitiveness of your market.'}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(isNl ? [
              {
                name: 'Lokale SEO',
                price: 'Vanaf €350',
                period: '/maand',
                desc: 'Voor bedrijven die lokaal beter gevonden willen worden in Google.',
                items: ['Lokale SEO-audit', 'Google Business Profile', 'NAP-consistentie', 'Zoekwoordonderzoek lokaal', 'Maandelijkse rapportage'],
              },
              {
                name: 'SEO & Content',
                price: 'Vanaf €650',
                period: '/maand',
                desc: 'Voor bedrijven die nationaal willen groeien via organisch verkeer.',
                items: ['Alles van Lokale SEO', 'Technische SEO-optimalisatie', 'Contentstrategie', 'Blogartikelen (2x/maand)', 'Link building basis'],
                featured: true,
              },
              {
                name: 'SEO + SEA Totaal',
                price: 'Vanaf €950',
                period: '/maand',
                desc: 'Combineer organische SEO met betaalde Google Ads voor maximaal bereik.',
                items: ['Alles van SEO & Content', 'Google Ads campagnebeheer', 'A/B-testing advertenties', 'Conversiemeting GA4', 'Wekelijkse SEA-rapportage'],
              },
            ] : [
              {
                name: 'Local SEO',
                price: 'From €350',
                period: '/month',
                desc: 'For businesses that want to be found better locally in Google.',
                items: ['Local SEO audit', 'Google Business Profile', 'NAP consistency', 'Local keyword research', 'Monthly reporting'],
              },
              {
                name: 'SEO & Content',
                price: 'From €650',
                period: '/month',
                desc: 'For businesses that want to grow nationally through organic traffic.',
                items: ['Everything in Local SEO', 'Technical SEO optimisation', 'Content strategy', 'Blog articles (2x/month)', 'Basic link building'],
                featured: true,
              },
              {
                name: 'SEO + SEA Total',
                price: 'From €950',
                period: '/month',
                desc: 'Combine organic SEO with paid Google Ads for maximum reach.',
                items: ['Everything in SEO & Content', 'Google Ads campaign management', 'A/B testing ads', 'Conversion tracking GA4', 'Weekly SEA reporting'],
              },
            ]).map(({name, price, period, desc, items, featured}) => (
              <AnimatedSection key={name}>
                <div className={`rounded-sm p-8 h-full flex flex-col ${featured ? 'bg-primary border-2 border-gold' : 'bg-light border border-primary/10'}`}>
                  {featured && (
                    <span className="text-gold text-xs font-bold tracking-widest uppercase mb-4 block">
                      {isNl ? 'Meest gekozen' : 'Most popular'}
                    </span>
                  )}
                  <h3 className={`font-bold text-xl mb-1 ${featured ? 'text-white' : 'text-primary'}`}>{name}</h3>
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className={`font-black text-3xl ${featured ? 'text-gold' : 'text-primary'}`}>{price}</span>
                    <span className={`text-sm ${featured ? 'text-white/50' : 'text-primary/50'}`}>{period}</span>
                  </div>
                  <p className={`text-sm leading-relaxed mb-6 ${featured ? 'text-white/60' : 'text-primary/60'}`}>{desc}</p>
                  <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 size={13} className="text-gold mt-0.5 shrink-0" />
                        <span className={`text-xs leading-snug ${featured ? 'text-white/70' : 'text-primary/70'}`}>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={isNl ? '/contact' : '/en/contact'}
                    className={`flex items-center justify-center gap-2 font-bold text-sm px-6 py-3 rounded-sm transition-colors ${
                      featured
                        ? 'bg-gold text-primary hover:bg-gold-light'
                        : 'border border-primary/20 text-primary hover:border-gold hover:text-gold'
                    }`}
                  >
                    {isNl ? 'Gratis gesprek aanvragen' : 'Request free consultation'}
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-8">
            <p className="text-center text-primary/40 text-sm">
              {isNl
                ? '* Tarieven zijn indicatief. De exacte investering bespreken we in een gratis kennismakingsgesprek.'
                : '* Rates are indicative. We discuss the exact investment in a free introductory consultation.'}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-light py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-12">
            <SectionLabel>{isNl ? 'Veelgestelde vragen' : 'Frequently asked questions'}</SectionLabel>
            <h2 className="text-primary font-black text-3xl lg:text-4xl">
              {isNl
                ? 'Veelgestelde vragen over SEO bureaus'
                : 'Frequently asked questions about SEO agencies'}
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

      <CTA />
    </>
  );
}
