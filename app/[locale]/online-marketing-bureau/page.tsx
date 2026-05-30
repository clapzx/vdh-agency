import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {ArrowRight, TrendingUp, Target, BarChart2, Globe, CheckCircle2, ChevronDown} from 'lucide-react';
import {Link} from '@/i18n/navigation';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionLabel from '@/components/ui/SectionLabel';
import CTA from '@/components/sections/CTA';

const BASE = 'https://www.vdh-agency.com';

function pageJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Online Marketing Bureau',
        provider: {'@id': `${BASE}/#organization`},
        description: 'Online marketing bureau voor het MKB. SEO, Google Ads, Meta Ads, e-mail marketing en content onder één dak. Meetbaar resultaat, directe communicatie.',
        url: `${BASE}/online-marketing-bureau`,
        areaServed: {'@type': 'Country', name: 'Netherlands'},
        offers: {'@type': 'Offer', priceCurrency: 'EUR', priceRange: '€€'},
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Wat doet een online marketing bureau?',
            acceptedAnswer: {'@type': 'Answer', text: 'Een online marketing bureau helpt bedrijven groeien via digitale kanalen: SEO (organische vindbaarheid), Google Ads (betaalde zoekadvertenties), Meta Ads (Facebook en Instagram), e-mail marketing en content. Een goed bureau combineert die kanalen op basis van jouw doelen en budget.'},
          },
          {
            '@type': 'Question',
            name: 'Wat kost online marketing uitbesteden?',
            acceptedAnswer: {'@type': 'Answer', text: 'Dat hangt af van welke kanalen je inzet en hoeveel je uitbesteedt. Bij VDH Agency werk je met een vaste vergoeding per dienst — geen percentage over je advertentiebudget. Neem contact op voor een eerlijke prijsinschatting op maat.'},
          },
          {
            '@type': 'Question',
            name: 'Hoe snel zie ik resultaat van online marketing?',
            acceptedAnswer: {'@type': 'Answer', text: 'Betaalde kanalen (Google Ads, Meta Ads) leveren direct resultaat. SEO vraagt 3 tot 6 maanden om op te bouwen. De combinatie van beide geeft de beste resultaten: direct verkeer terwijl organisch groeit.'},
          },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {'@type': 'ListItem', position: 1, name: 'Home', item: BASE},
          {'@type': 'ListItem', position: 2, name: 'Online Marketing Bureau', item: `${BASE}/online-marketing-bureau`},
        ],
      },
    ],
  };
}

export async function generateMetadata({params}: {params?: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale = 'nl'} = params ? await params : {};
  if (locale !== 'nl') return {};
  return {
    title: 'Online Marketing Bureau: Groei via Alle Digitale Kanalen',
    description: 'Online marketing bureau voor het MKB. VDH Agency combineert SEO, Google Ads, Meta Ads en e-mail marketing tot een strategie die meetbaar resultaat levert. Gratis adviesgesprek.',
    alternates: {
      canonical: `${BASE}/online-marketing-bureau`,
      languages: {'x-default': `${BASE}/online-marketing-bureau`, nl: `${BASE}/online-marketing-bureau`},
    },
    openGraph: {url: `${BASE}/online-marketing-bureau`},
  };
}

export default async function OnlineMarketingBureauPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  if (locale !== 'nl') notFound();

  const kanalen = [
    {Icon: TrendingUp, title: 'SEO', subtitle: 'Organisch', desc: 'Hogere posities in Google zonder te betalen per klik. Bouwt duurzame zichtbaarheid op termijn op. De basis van elke groeistrategie.'},
    {Icon: Target,     title: 'Google Ads', subtitle: 'Direct zichtbaar', desc: 'Betaalde advertenties bovenaan Google. Direct aanvragen vanaf dag één. Betaal alleen voor klikken van mensen die actief zoeken.'},
    {Icon: Globe,      title: 'Meta Ads', subtitle: 'Bereik & conversie', desc: 'Adverteren op Facebook en Instagram. Precieze doelgroeptargeting op interesse, gedrag en demografie. Ideaal voor naamsbekendheid en leads.'},
    {Icon: BarChart2,  title: 'E-mail Marketing', subtitle: 'Hoogste ROI', desc: 'Geautomatiseerde flows en nieuwsbrieven. E-mail heeft de hoogste ROI van alle marketingkanalen — en jij behoudt je eigen lijst.'},
  ];

  const faqs = [
    {q: 'Wat doet een online marketing bureau precies?', a: 'Een online marketing bureau beheert jouw digitale groeikanalen: van zoekwoordonderzoek en SEO-optimalisatie tot het opzetten en beheren van betaalde campagnes op Google en Meta. VDH Agency doet dit voor het MKB — volledig transparant, zonder percentage over je advertentiebudget.'},
    {q: 'Moet ik alle kanalen tegelijk inzetten?', a: 'Nee. We starten met wat het meeste oplevert in jouw situatie. Sommige klanten beginnen met alleen Google Ads. Anderen met SEO. De combinatie is op de lange termijn het krachtigst, maar we bouwen het op in jouw tempo.'},
    {q: 'Wat kost online marketing uitbesteden?', a: 'VDH Agency werkt met vaste vergoedingen per dienst — geen percentage over je advertentiebudget. De exacte prijs hangt af van welke kanalen je inzet. Neem contact op voor een eerlijke offerte na een gratis gesprek.'},
    {q: 'Hoe rapporteren jullie over resultaten?', a: 'Elke maand ontvang je een duidelijk rapport met verkeer, conversies, kosten per aanvraag en aanbevelingen. We koppelen Google Analytics 4 en Search Console zodat je altijd live toegang hebt tot je eigen data.'},
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(pageJsonLd())}} />

      {/* Hero */}
      <section className="bg-primary pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-6 h-px bg-gold" />
              <span className="text-gold text-xs font-semibold tracking-widest uppercase">Online marketing bureau</span>
            </div>
            <h1 className="text-white font-black text-4xl lg:text-6xl leading-tight mb-5">
              Online marketing bureau: groei via alle digitale kanalen
            </h1>
            <p className="text-white/60 text-xl mb-10">
              SEO, Google Ads, Meta Ads en e-mail marketing — VDH Agency combineert de kanalen die jou klanten opleveren tot één samenhangende strategie. Geen losse campagnes, maar een systeem dat groeit.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="flex items-center gap-2 bg-gold text-primary font-bold text-sm px-7 py-3.5 rounded-sm hover:bg-gold-light transition-colors">
                Gratis strategiegesprek <ArrowRight size={15} />
              </Link>
              <a href="/diensten/online-marketing" className="flex items-center gap-2 border border-white/20 text-white font-semibold text-sm px-7 py-3.5 rounded-sm hover:border-gold hover:text-gold transition-colors">
                Bekijk de dienst
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Kanalen */}
      <section className="bg-light py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-2xl mb-14">
            <SectionLabel>Wat wij inzetten</SectionLabel>
            <h2 className="text-primary font-black text-3xl lg:text-4xl">De vier pijlers van online groei</h2>
            <p className="text-primary/60 mt-4 text-base leading-relaxed">
              Elk kanaal heeft zijn eigen rol, timing en rendement. Wij kiezen op basis van jouw markt welke mix het meeste oplevert.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {kanalen.map(({Icon, title, subtitle, desc}, i) => (
              <AnimatedSection key={title} delay={i * 0.08}>
                <div className="bg-white border border-primary/8 rounded-sm p-8 h-full hover:border-gold/30 transition-colors">
                  <div className="w-12 h-12 rounded-sm bg-primary flex items-center justify-center mb-5">
                    <Icon size={22} className="text-gold" />
                  </div>
                  <span className="text-gold text-xs font-semibold tracking-widest uppercase">{subtitle}</span>
                  <h3 className="text-primary font-black text-xl mt-1 mb-3">{title}</h3>
                  <p className="text-primary/60 text-sm leading-relaxed">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Waarom bureau */}
      <section className="bg-primary py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <SectionLabel light>Waarom een bureau</SectionLabel>
              <h2 className="text-white font-black text-3xl lg:text-4xl mb-6">
                Online marketing zelf doen vs. uitbesteden
              </h2>
              <p className="text-white/60 text-base leading-relaxed mb-4">
                Zelf aan de slag met Google Ads of SEO kost meer tijd dan de meeste ondernemers verwachten. Algoritmen veranderen, campagnes vragen constante optimalisatie en elke maand dat je het niet goed doet, kost je geld of traffic.
              </p>
              <p className="text-white/60 text-base leading-relaxed mb-6">
                Een goed bureau betaalt zichzelf terug door hogere conversie, lagere kosten per lead en structurele groei. Geen maandelijkse verspilling, maar een investering die rendeert.
              </p>
              <div className="flex flex-col gap-3">
                {['Geen instaptijd of leercurve voor jou','Directe toegang tot specialistische kennis','Maandelijkse rapportage in duidelijke taal','Vaste vergoeding — geen % over je advertentiebudget'].map(p => (
                  <div key={p} className="flex items-center gap-3">
                    <CheckCircle2 size={14} className="text-gold shrink-0" />
                    <span className="text-white/70 text-sm">{p}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.15}>
              <div className="grid grid-cols-1 gap-4">
                {[
                  {href: '/seo-bureau',               label: 'SEO bureau',              desc: 'Specialistisch SEO voor het MKB'},
                  {href: '/google-ads-bureau',         label: 'Google Ads bureau',       desc: 'Campagnebeheer zonder % over je budget'},
                  {href: '/lokale-seo',                label: 'Lokale SEO',              desc: 'Bovenaan in jouw stad of regio'},
                  {href: '/hoger-in-google',           label: 'Hoger in Google',         desc: 'Organische rankings verbeteren'},
                  {href: '/diensten/online-marketing', label: 'Online Marketing dienst', desc: 'Volledig dienstenoverzicht'},
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
      <section className="bg-light py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-10">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="text-primary font-black text-3xl">Vragen over online marketing uitbesteden</h2>
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
