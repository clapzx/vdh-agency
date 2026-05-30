import type {Metadata} from 'next';
import {ArrowRight, ChevronDown} from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import CTA from '@/components/sections/CTA';
import {Link} from '@/i18n/navigation';

const BASE = 'https://www.vdh-agency.com';
const SLUG = '/blog/google-ads-vs-seo';
const PUBLISHED = '2026-05-26';
const MODIFIED = '2026-05-30';

const faqs = [
  {
    q: 'Hoe snel zie ik resultaat van Google Ads?',
    a: 'Google Ads is direct: zodra je campagne live staat, verschijnt jouw advertentie bij relevante zoekopdrachten. In de eerste 2 tot 4 weken optimaliseren we de campagne op basis van data.',
  },
  {
    q: 'Hoe lang duurt het voordat SEO werkt?',
    a: 'Gemiddeld 3 tot 6 maanden voor stabiel betere organische posities. In minder competitieve markten kan dat sneller gaan. Technische verbeteringen zijn soms al na 4 tot 8 weken zichtbaar in Google Search Console.',
  },
  {
    q: 'Wat kost Google Ads voor het MKB?',
    a: 'We adviseren een minimum advertentiebudget van €300 tot €500 per maand om zinvolle data te genereren. Daarboven komen de beheerskosten van het bureau. VDH Agency werkt met een vaste vergoeding, geen percentage over je budget.',
  },
  {
    q: 'Moet ik kiezen of kan ik beide inzetten?',
    a: 'De combinatie werkt het beste. Google Ads geeft direct resultaat terwijl SEO opbouwt. Op termijn bouwt SEO zelfstandig verkeer op en kun je het Ads-budget afschalen of anders inzetten. Maar de keuze hangt af van je budget en tijdshorizon.',
  },
];

function blogJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        headline: 'Google Ads vs SEO: wat werkt beter voor jouw bedrijf?',
        description: 'Google Ads of SEO? Een eerlijke vergelijking op snelheid, kosten en rendement — zodat jij de juiste keuze maakt voor jouw situatie.',
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
          {'@type': 'ListItem', position: 3, name: 'Google Ads vs SEO', item: `${BASE}${SLUG}`},
        ],
      },
    ],
  };
}

export async function generateMetadata({params}: {params?: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale = 'nl'} = params ? await params : {};
  const canonical = locale === 'nl' ? `${BASE}${SLUG}` : `${BASE}/en${SLUG}`;
  return {
    title: 'Google Ads vs SEO: Wat Werkt Beter voor Jouw Bedrijf?',
    description: 'Google Ads of SEO kiezen? Vergelijking op snelheid, kosten en rendement voor MKB. Inclusief advies over de optimale combinatie.',
    ...(locale !== 'nl' && {robots: {index: false, follow: false}}),
    alternates: {
      canonical,
      languages: {nl: `${BASE}${SLUG}`, en: `${BASE}/en${SLUG}`, 'x-default': `${BASE}${SLUG}`},
    },
    openGraph: {
      type: 'article',
      url: canonical,
      title: 'Google Ads vs SEO: wat werkt beter voor jouw bedrijf?',
      description: 'Een eerlijke vergelijking op snelheid, kosten en rendement — met advies over de juiste combinatie.',
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
              Google Ads vs SEO:{' '}
              <span className="text-gold">wat werkt beter voor jouw bedrijf?</span>
            </h1>
            <p className="text-white/60 text-lg">
              Betalen voor clicks of organisch scoren? Beide werken — maar niet voor iedereen op hetzelfde moment. Hier is hoe je de juiste keuze maakt.
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
              Google Ads vs SEO is een vraag waarbij het antwoord bijna altijd hetzelfde begint: "dat hangt van je situatie af." Maar dat zegt niets. Laten we het concreet maken.
            </p>
            <p className="text-primary/70 leading-relaxed">
              Het zijn fundamenteel andere instrumenten. Google Ads koopt zichtbaarheid direct. SEO bouwt zichtbaarheid op. Beiden werken. De vraag is: wat past bij jou nu, en wat heb je op termijn nodig?
            </p>
          </AnimatedSection>

          {/* Snelle vergelijking */}
          <AnimatedSection>
            <h2 className="text-primary font-black text-2xl mb-6">Het fundamentele verschil</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white border border-primary/10 rounded-sm p-7">
                <div className="text-gold text-xs font-semibold tracking-widest uppercase mb-4">Google Ads</div>
                <h3 className="text-primary font-black text-lg mb-4">Betaalde zichtbaarheid</h3>
                <ul className="flex flex-col gap-2.5 text-primary/70 text-sm">
                  {[
                    'Direct live — advertenties draaien zodra ze goedgekeurd zijn',
                    'Je betaalt per klik (CPC)',
                    'Stop je met betalen, verdwijnt de zichtbaarheid',
                    'Volledige controle over budget en doelgroep',
                    'Ideaal bij seizoenspieken of nieuwe producten',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-2"><span className="text-gold text-xs mt-0.5">→</span> {item}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-white border border-primary/10 rounded-sm p-7">
                <div className="text-gold text-xs font-semibold tracking-widest uppercase mb-4">SEO</div>
                <h3 className="text-primary font-black text-lg mb-4">Organische zichtbaarheid</h3>
                <ul className="flex flex-col gap-2.5 text-primary/70 text-sm">
                  {[
                    'Duurt 3 tot 6 maanden om op te bouwen',
                    'Geen kosten per klik',
                    'Blijft actief ook als je minder investeert',
                    'Hoge geloofwaardigheid bij zoekers',
                    'Ideaal voor langetermijn groei',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-2"><span className="text-gold text-xs mt-0.5">→</span> {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>

          {/* Stat blok */}
          <AnimatedSection>
            <div className="bg-primary rounded-sm p-8 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              {[
                {num: '28%', label: 'van alle klikken gaat naar positie 1 in organische resultaten', src: 'Sistrix, 2025'},
                {num: '65%', label: 'van gebruikers klikt liever op organische resultaten dan advertenties', src: 'HubSpot, 2025'},
                {num: '3,8×', label: 'hogere ROI op SEO vs Google Ads op de lange termijn (gemiddeld)', src: 'Forrester, 2024'},
              ].map(({num, label, src}) => (
                <div key={num}>
                  <span className="text-gold font-black text-4xl block mb-2">{num}</span>
                  <span className="text-white/70 text-sm leading-relaxed block mb-1">{label}</span>
                  <span className="text-white/30 text-xs">{src}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Wanneer ads */}
          <AnimatedSection>
            <h2 className="text-primary font-black text-2xl mb-4">Wanneer kies je voor Google Ads?</h2>
            <p className="text-primary/70 leading-relaxed mb-5">
              Google Ads is het juiste instrument als je snel resultaat nodig hebt — of als je in een markt opereert waar organische posities zwaar omstreden zijn en SEO maanden kost.
            </p>
            <div className="flex flex-col gap-3">
              {[
                {title: 'Je hebt een nieuw bedrijf of nieuwe website', desc: 'Organisch scoren kost tijd die je misschien niet hebt. Ads geven je direct zichtbaarheid terwijl SEO opbouwt.'},
                {title: 'Je wilt een specifiek product of actie promoten', desc: 'Seizoensproducten, uitverkoop, een lancering — Ads zijn snel aan en snel uit te zetten.'},
                {title: 'Je concurrent staat bovenaan en jij niet', desc: 'Zolang jij organisch op pagina twee staat, kunnen Ads je direct zichtbaar maken bij dezelfde zoekopdrachten.'},
                {title: 'Je wilt testen welke boodschappen converteren', desc: 'Ads geven je snel data over welke zoekwoorden en advertentieteksten werken. Waardevol input voor je SEO-strategie.'},
              ].map(({title, desc}) => (
                <div key={title} className="bg-white border border-primary/10 rounded-sm p-5">
                  <h3 className="text-primary font-bold text-sm mb-1">{title}</h3>
                  <p className="text-primary/60 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Wanneer SEO */}
          <AnimatedSection>
            <h2 className="text-primary font-black text-2xl mb-4">Wanneer kies je voor SEO?</h2>
            <p className="text-primary/70 leading-relaxed mb-5">
              SEO is een langetermijninvestering die rendeert zolang je website bestaat. De meeste MKB-bedrijven die structureel groeien, doen dat via organisch zoekverkeer.
            </p>
            <div className="flex flex-col gap-3">
              {[
                {title: 'Je wilt duurzame groei zonder afhankelijkheid van ad-budget', desc: 'Elke euro in SEO bouwt een fundament. Stop je ooit met betalen voor Ads, verdwijnt dat verkeer. SEO-posities blijven.'},
                {title: 'Je doelgroep oriënteert zich uitgebreid voor aankoop', desc: 'B2B-klanten, mensen die een grote aankoop overwegen, ondernemers die een bureau zoeken — zij klikken vaker op organische resultaten.'},
                {title: 'Je wilt autoriteit opbouwen in je markt', desc: 'Bovenaan staan in Google bouwt vertrouwen. Een advertentie is herkenbaarder als betaald; een organisch resultaat heeft meer geloofwaardigheid.'},
                {title: 'Je hebt een beperkt advertentiebudget', desc: 'Ads kost elke maand geld. SEO kost eenmalig een investering in bouw en optimalisatie, met daarna lagere onderhoudsinspanning.'},
              ].map(({title, desc}) => (
                <div key={title} className="bg-white border border-primary/10 rounded-sm p-5">
                  <h3 className="text-primary font-bold text-sm mb-1">{title}</h3>
                  <p className="text-primary/60 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Combinatie */}
          <AnimatedSection>
            <h2 className="text-primary font-black text-2xl mb-4">De combinatie: het beste van twee werelden</h2>
            <p className="text-primary/70 leading-relaxed mb-4">
              Voor de meeste MKB-bedrijven is de optimale strategie een combinatie. Google Ads zorgt voor directe aanvragen terwijl SEO opbouwt. Zodra organische posities stabiel zijn, kun je het Ads-budget afschalen op de zoekwoorden waar je organisch al goed op scoort.
            </p>
            <p className="text-primary/70 leading-relaxed mb-5">
              Dit is niet duurder in de beginfase, maar structureel goedkoper op de lange termijn. En het geeft je data: de Ads-campagne leert je welke zoekwoorden écht converteren — informatie die je SEO-strategie scherper maakt.
            </p>
            <div className="bg-primary/5 border-l-4 border-gold rounded-sm p-6">
              <p className="text-primary/70 text-sm leading-relaxed mb-3">
                <span className="font-bold text-primary">Onze aanpak bij VDH Agency:</span> We starten nieuwe klanten vaak met een gecombineerde strategie — Ads voor direct resultaat, SEO voor fundament. Na 6 maanden evalueren we welk kanaal het beste rendeert en sturen we bij.
              </p>
              <div className="flex flex-wrap gap-3 mt-4">
                <a href="/google-ads-bureau" className="flex items-center gap-2 text-gold text-sm font-semibold hover:opacity-80 transition-opacity">
                  Google Ads bureau <ArrowRight size={13} />
                </a>
                <a href="/seo-bureau" className="flex items-center gap-2 text-gold text-sm font-semibold hover:opacity-80 transition-opacity">
                  SEO bureau <ArrowRight size={13} />
                </a>
                <Link href="/diensten/seo-sea" className="flex items-center gap-2 text-gold text-sm font-semibold hover:opacity-80 transition-opacity">
                  SEO &amp; SEA diensten <ArrowRight size={13} />
                </Link>
                <a href="/online-marketing-bureau" className="flex items-center gap-2 text-gold text-sm font-semibold hover:opacity-80 transition-opacity">
                  Online marketing bureau <ArrowRight size={13} />
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Inline CTA */}
          <AnimatedSection>
            <div className="bg-primary rounded-sm p-10 text-center relative overflow-hidden">
              <div className="absolute inset-0 dot-grid opacity-20" />
              <div className="relative z-10">
                <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-4">Gratis advies</p>
                <h3 className="text-white font-black text-2xl mb-4">
                  Wat werkt beter voor jouw bedrijf?
                </h3>
                <p className="text-white/60 mb-8 max-w-md mx-auto text-sm leading-relaxed">
                  We kijken gratis naar jouw situatie en adviseren je eerlijk welk kanaal het meeste oplevert — of hoe je beide slim combineert.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-3 bg-gold text-primary font-bold text-sm px-8 py-4 rounded-sm hover:bg-gold-light transition-colors group">
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
