import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {ArrowRight, Video, Users, Megaphone, BarChart2, CheckCircle2, ChevronDown} from 'lucide-react';
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
        name: 'Social Media Bureau',
        provider: {'@id': `${BASE}/#organization`},
        description: 'Social media bureau voor het MKB. Content, video-opnames, editing en Meta Ads op Facebook en Instagram. Volledig uit handen.',
        url: `${BASE}/social-media-bureau`,
        areaServed: {'@type': 'Country', name: 'Netherlands'},
        offers: {'@type': 'Offer', priceCurrency: 'EUR', priceRange: '€€'},
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Wat doet een social media bureau?',
            acceptedAnswer: {'@type': 'Answer', text: 'Een social media bureau beheert jouw aanwezigheid op Instagram, Facebook, LinkedIn en TikTok. Van strategie en contentopnames tot professionele video editing en betaalde advertenties (Meta Ads). Het doel: consistente, professionele content die jouw doelgroep bereikt en converteert.'},
          },
          {
            '@type': 'Question',
            name: 'Welke social media kanalen beheren jullie?',
            acceptedAnswer: {'@type': 'Answer', text: 'We beheren Instagram, Facebook, LinkedIn en TikTok. Welke kanalen we inzetten hangt af van jouw doelgroep. B2B-bedrijven profiteren meer van LinkedIn; consumentenmerken presteren beter op Instagram en TikTok.'},
          },
          {
            '@type': 'Question',
            name: 'Hoe snel zien we resultaat op social media?',
            acceptedAnswer: {'@type': 'Answer', text: 'Organische groei vraagt consistentie — eerste resultaten zijn doorgaans zichtbaar na 4 tot 8 weken. Meta Ads leveren direct bereik, al vanaf dag één van de campagne.'},
          },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {'@type': 'ListItem', position: 1, name: 'Home', item: BASE},
          {'@type': 'ListItem', position: 2, name: 'Social Media Bureau', item: `${BASE}/social-media-bureau`},
        ],
      },
    ],
  };
}

export async function generateMetadata({params}: {params?: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale = 'nl'} = params ? await params : {};
  if (locale !== 'nl') return {};
  return {
    title: 'Social Media Bureau: Content, Video & Meta Ads',
    description: 'Social media bureau voor het MKB. VDH Agency verzorgt contentplanning, video-opnames, editing en Meta Ads op Instagram en Facebook. Volledig uit handen. Gratis adviesgesprek.',
    alternates: {
      canonical: `${BASE}/social-media-bureau`,
      languages: {'x-default': `${BASE}/social-media-bureau`, nl: `${BASE}/social-media-bureau`},
    },
    openGraph: {url: `${BASE}/social-media-bureau`},
  };
}

export default async function SocialMediaBureauPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  if (locale !== 'nl') notFound();

  const pijlers = [
    {Icon: Users,     title: 'Strategie & contentplanning', desc: 'We analyseren jouw merk, doelgroep en concurrenten. Op basis hiervan bouwen we een contentkalender die consistent en doelgericht publiceert.'},
    {Icon: Video,     title: 'Opnames & video editing',    desc: 'We komen naar jou toe voor professionele video-opnames. Ruwe beelden worden omgezet in strakke, merkwaardige content inclusief ondertiteling en kleurcorrectie.'},
    {Icon: Megaphone, title: 'Meta Ads',                   desc: 'Gerichte betaalde advertenties op Facebook en Instagram. We bouwen de campagnes op, bewaken het budget en optimaliseren doorlopend op conversie.'},
    {Icon: BarChart2, title: 'Analyse & groei',            desc: 'Elke maand inzicht in bereik, engagement, groei en kosten per resultaat. We sturen bij op wat werkt en schalen op wat rendeert.'},
  ];

  const faqs = [
    {q: 'Moet ik zelf nog iets doen?', a: 'Zo weinig mogelijk. We nemen je social media volledig uit handen. We vragen je om ons toegang te geven tot je kanalen en beschikbaar te zijn voor de content opnames op locatie. De rest regelen wij.'},
    {q: 'Hoe vaak wordt er content geplaatst?', a: 'Standaard minimaal 3 keer per week. De exacte frequentie stemmen we af op basis van jouw doelen en budget. Consistentie is belangrijker dan volume.'},
    {q: 'Welke kanalen beheren jullie?', a: 'Instagram, Facebook, LinkedIn en TikTok. We adviseren je welke kanalen het beste bij jouw doelgroep passen. B2B focust vaak op LinkedIn; consumentenbedrijven presteren beter op Instagram of TikTok.'},
    {q: 'Werkt social media ook voor B2B?', a: 'Absoluut. LinkedIn is voor veel B2B-bedrijven het krachtigste kanaal voor naamsbekendheid en leads. We bouwen hier een gerichte strategie voor die past bij een zakelijke doelgroep.'},
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
              <span className="text-gold text-xs font-semibold tracking-widest uppercase">Social media bureau</span>
            </div>
            <h1 className="text-white font-black text-4xl lg:text-6xl leading-tight mb-5">
              Social media bureau: content en advertenties die jouw merk laten groeien
            </h1>
            <p className="text-white/60 text-xl mb-10">
              Van strategie tot publicatie — VDH Agency neemt jouw social media volledig uit handen. Professionele content, video-opnames op locatie en Meta Ads die bereik omzetten in klanten.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="flex items-center gap-2 bg-gold text-primary font-bold text-sm px-7 py-3.5 rounded-sm hover:bg-gold-light transition-colors">
                Gratis strategiegesprek <ArrowRight size={15} />
              </Link>
              <a href="/diensten/social-media-beheer" className="flex items-center gap-2 border border-white/20 text-white font-semibold text-sm px-7 py-3.5 rounded-sm hover:border-gold hover:text-gold transition-colors">
                Bekijk de dienst
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              {num: '4,9 mrd', label: 'mensen gebruiken dagelijks social media wereldwijd'},
              {num: '70%',     label: 'van consumenten ontdekt nieuwe producten via Instagram'},
              {num: '3×',      label: 'meer engagement bij video-content vs statische beelden'},
              {num: '26%',     label: 'van Meta Ads-klikken leidt tot een aankoop of aanvraag'},
            ].map(({num, label}) => (
              <div key={num}>
                <span className="text-gold font-black text-3xl block mb-1">{num}</span>
                <span className="text-white/50 text-xs leading-snug">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pijlers */}
      <section className="bg-light py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-2xl mb-14">
            <SectionLabel>Wat wij doen</SectionLabel>
            <h2 className="text-primary font-black text-3xl lg:text-4xl">Volledig social media beheer onder één dak</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pijlers.map(({Icon, title, desc}, i) => (
              <AnimatedSection key={title} delay={i * 0.08}>
                <div className="bg-white border border-primary/8 rounded-sm p-8 h-full hover:border-gold/30 transition-colors">
                  <div className="w-12 h-12 rounded-sm bg-primary flex items-center justify-center mb-5">
                    <Icon size={22} className="text-gold" />
                  </div>
                  <h3 className="text-primary font-bold text-lg mb-3">{title}</h3>
                  <p className="text-primary/60 text-sm leading-relaxed">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Links */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-white font-black text-xl mb-6">Combineer social media met andere kanalen</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {href: '/diensten/social-media-beheer', label: 'Social Media dienst', desc: 'Volledig dienstenoverzicht'},
                {href: '/google-ads-bureau',             label: 'Google Ads bureau',   desc: 'Direct aanvragen via Google'},
                {href: '/online-marketing-bureau',       label: 'Online Marketing',    desc: 'Alle kanalen gecombineerd'},
                {href: '/seo-bureau',                    label: 'SEO bureau',           desc: 'Organische vindbaarheid'},
                {href: '/diensten/email-marketing',      label: 'E-mail Marketing',    desc: 'Klanten bereiken via inbox'},
                {href: '/diensten/branding',             label: 'Branding & Huisstijl', desc: 'Een merk dat blijft hangen'},
              ].map(({href, label, desc}) => (
                <a key={href} href={href} className="group bg-white/5 border border-white/10 rounded-sm px-5 py-4 hover:border-gold/40 transition-all">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-white font-semibold text-sm group-hover:text-gold transition-colors">{label}</span>
                    <ArrowRight size={13} className="text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <span className="text-white/40 text-xs">{desc}</span>
                </a>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-light py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-10">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="text-primary font-black text-3xl">Vragen over social media uitbesteden</h2>
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
