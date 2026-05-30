import type {Metadata} from 'next';
import {Mail, CheckCircle2, ChevronDown} from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionLabel from '@/components/ui/SectionLabel';
import Breadcrumb from '@/components/ui/Breadcrumb';
import NoServiceCard from '@/components/ui/NoServiceCard';
import CTA from '@/components/sections/CTA';
import RelatedServices from '@/components/ui/RelatedServices';

const BASE = 'https://www.vdh-agency.com';

function serviceJsonLd(locale: string) {
  const isNl = locale === 'nl';
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: isNl ? 'E-mail Marketing' : 'Email Marketing',
        provider: {'@id': `${BASE}/#organization`},
        areaServed: {'@type': 'Country', name: 'Netherlands'},
        description: isNl
          ? 'E-mail marketing met geautomatiseerde flows, converterende nieuwsbrieven en slimme segmentatie.'
          : 'Email marketing with automated flows, converting newsletters and smart segmentation.',
        url: isNl ? `${BASE}/diensten/email-marketing` : `${BASE}/en/services/email-marketing`,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {'@type': 'ListItem', position: 1, name: 'Home', item: isNl ? BASE : `${BASE}/en`},
          {'@type': 'ListItem', position: 2, name: isNl ? 'Diensten' : 'Services', item: isNl ? `${BASE}/diensten` : `${BASE}/en/services`},
          {'@type': 'ListItem', position: 3, name: isNl ? 'E-mail Marketing' : 'Email Marketing', item: isNl ? `${BASE}/diensten/email-marketing` : `${BASE}/en/services/email-marketing`},
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
  return {
    title: isNl
      ? 'E-mail Marketing voor het MKB, Mailchimp & Klaviyo'
      : 'Email Marketing for SMEs, Mailchimp & Klaviyo',
    description: isNl
      ? 'VDH Agency verzorgt e-mail marketing voor het MKB. Automated flows, nieuwsbrieven en segmentatie via Mailchimp of Klaviyo. Vraag gratis offerte aan.'
      : 'VDH Agency provides email marketing for SMEs. Automated flows, newsletters and segmentation via Mailchimp or Klaviyo. Request a free quote.',
    alternates: {
      canonical: isNl ? `${BASE}/diensten/email-marketing` : `${BASE}/en/services/email-marketing`,
      languages: {
        nl: `${BASE}/diensten/email-marketing`,
        en: `${BASE}/en/services/email-marketing`,
        'x-default': `${BASE}/diensten/email-marketing`,
      },
    },
    openGraph: {
      url: isNl ? `${BASE}/diensten/email-marketing` : `${BASE}/en/services/email-marketing`,
    },
  };
}

export default async function EmailMarketingPage({
  params,
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  const isNl = locale === 'nl';

  const steps = isNl ? [
    {num: '01', title: 'Strategie & doelgroep', desc: 'We bepalen welke segmenten in jouw lijst het meest waardevol zijn en welke berichten hen aanspreken. Een goede e-mailstrategie begint bij kennis van je publiek.'},
    {num: '02', title: 'Platform setup', desc: 'We richten Mailchimp, Klaviyo of een ander platform in en koppelen het aan jouw website of webshop. Correct opgezet vanaf het begin bespaart later veel werk.'},
    {num: '03', title: 'Automated flows', desc: 'De welkomstserie legt de eerste indruk vast. Een verlaten winkelwagen-herinnering haalt omzet terug. We bouwen de flows die voor jouw bedrijf het meeste rendement opleveren.'},
    {num: '04', title: 'Templates & content', desc: 'Elke e-mail wordt professioneel ontworpen en overtuigend geschreven. Duidelijke call-to-actions, de juiste toon en een structuur die leidt naar conversie.'},
    {num: '05', title: 'Analyse & optimalisatie', desc: 'Open-rates, click-through rates en conversies worden bijgehouden. Op basis van de data optimaliseren we continu: A/B testen, tijdstippen aanpassen en onderwerpregels verbeteren.'},
  ] : [
    {num: '01', title: 'Strategy & audience', desc: 'We identify which segments in your list are most valuable and what messages resonate with them. A good email strategy starts with knowing your audience.'},
    {num: '02', title: 'Platform setup', desc: 'We set up Mailchimp, Klaviyo or another platform and connect it to your website or webshop. Getting it right from the start saves a lot of work later.'},
    {num: '03', title: 'Automated flows', desc: 'The welcome sequence sets the first impression. An abandoned cart reminder recovers revenue. We build the flows that deliver the most return for your business.'},
    {num: '04', title: 'Templates & content', desc: 'Every email is professionally designed and persuasively written. Clear calls-to-action, the right tone and a structure that leads to conversion.'},
    {num: '05', title: 'Analysis & optimisation', desc: 'Open rates, click-through rates and conversions are tracked. We continuously optimise based on data: A/B testing, adjusting send times and improving subject lines.'},
  ];

  const faqs = isNl ? [
    {q: 'Welk e-mailplatform gebruiken jullie?', a: 'We werken voornamelijk met Mailchimp en Klaviyo. Klaviyo is bij uitstek geschikt voor webshops; Mailchimp is ideaal voor bedrijven die starten met e-mail marketing. We adviseren je graag over wat bij jouw situatie past.'},
    {q: 'Hoe snel zie ik resultaten?', a: 'Automated flows leveren direct resultaat zodra ze live gaan. Nieuwsbrieven bouwen een relatie op in de tijd. In de eerste maand zie je al verschil in open-rates en klikgedrag.'},
    {q: 'Hoe groei ik mijn e-maillijst?', a: 'We adviseren over opt-in strategieën die passen bij jouw website: pop-ups, leadmagnets en embedded formulieren. Een grotere lijst met de juiste abonnees maakt e-mail nóg effectiever.'},
    {q: 'Kan ik zelf ook e-mails sturen?', a: 'Uiteraard. Na de setup ben je volledig in staat om zelf campagnes te versturen. Je kunt kiezen voor volledig beheer door ons, een hybride model, of zelf doen met periodieke begeleiding.'},
  ] : [
    {q: 'Which email platform do you use?', a: 'We primarily work with Mailchimp and Klaviyo. Klaviyo is particularly suited for webshops; Mailchimp is ideal for businesses starting with email marketing. We\'re happy to advise on what fits your situation.'},
    {q: 'How quickly will I see results?', a: 'Automated flows deliver immediate results once they go live. Newsletters build relationships over time. In the first month you\'ll already see differences in open rates and click-through behaviour.'},
    {q: 'How do I grow my email list?', a: 'We advise on opt-in strategies that fit your website: pop-ups, lead magnets and embedded forms. A larger list with the right subscribers makes email even more effective.'},
    {q: 'Can I send emails myself?', a: 'Of course. After setup you\'re fully equipped to send campaigns yourself. You can choose full management by us, a hybrid model, or do it yourself with periodic guidance.'},
  ];

  const includes = isNl
    ? ['Mailchimp / Klaviyo setup', 'Welkomstserie & automations', 'Nieuwsbrief ontwerp & copy', 'Lijstsegmentatie', 'A/B testing', 'Maandelijkse rapportage']
    : ['Mailchimp / Klaviyo setup', 'Welcome series & automations', 'Newsletter design & copy', 'List segmentation', 'A/B testing', 'Monthly reporting'];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(serviceJsonLd(locale))}}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map(({q, a}) => ({
            '@type': 'Question',
            name: q,
            acceptedAnswer: {'@type': 'Answer', text: a},
          })),
        })}}
      />

      {/* Hero */}
      <section className="bg-primary pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <Breadcrumb crumbs={[
              {label: 'Home', href: isNl ? '/' : '/en/'},
              {label: isNl ? 'Diensten' : 'Services', href: isNl ? '/diensten' : '/en/services'},
              {label: isNl ? 'E-mail Marketing' : 'Email Marketing'},
            ]} />
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-6 h-px bg-gold" />
              <span className="text-gold text-xs font-semibold tracking-widest uppercase">
                {isNl ? 'E-mail Marketing' : 'Email Marketing'}
              </span>
            </div>
            <h1 className="text-white font-black text-4xl lg:text-6xl leading-tight mb-5">
              {isNl ? 'E-mail marketing die klanten terugbrengt' : 'Email marketing that brings customers back'}
            </h1>
            <p className="text-white/60 text-xl">
              {isNl
                ? 'Automatische flows, converterende nieuwsbrieven en slimme segmentatie die je omzet verhoogt.'
                : 'Automated flows, converting newsletters and smart segmentation that increases your revenue.'}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* What is */}
      <section className="bg-light py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <SectionLabel>{isNl ? 'E-mail Marketing' : 'Email Marketing'}</SectionLabel>
              <h2 className="text-primary font-black text-3xl lg:text-4xl mb-6">
                {isNl ? 'Het kanaal met de hoogste ROI' : 'The channel with the highest ROI'}
              </h2>
              <div className="flex flex-col gap-4">
                <p className="text-primary/70 text-base leading-relaxed">
                  {isNl
                    ? 'E-mail marketing heeft gemiddeld een ROI van €42 per geïnvesteerde euro. Het is het directste kanaal om in contact te blijven met klanten die al interesse hebben getoond in jouw aanbod.'
                    : 'Email marketing has an average ROI of €42 per euro invested. It\'s the most direct channel to stay in touch with customers who have already shown interest in your offer.'}
                </p>
                <p className="text-primary/70 text-base leading-relaxed">
                  {isNl
                    ? 'Wij bouwen geautomatiseerde flows die op het juiste moment het juiste bericht sturen. Van een welkomstserie voor nieuwe abonnees tot een verlaten winkelwagen-herinnering: elke touchpoint is doordacht.'
                    : 'We build automated flows that send the right message at the right moment. From a welcome series for new subscribers to an abandoned cart reminder: every touchpoint is considered.'}
                </p>
                <p className="text-primary/70 text-base leading-relaxed">
                  {isNl
                    ? 'Naast automatisering verzorgen wij ook maandelijkse nieuwsbrieven en promotiecampagnes. Professioneel ontworpen, goed geschreven en voorzien van duidelijke call-to-actions.'
                    : 'Besides automation we also manage monthly newsletters and promotional campaigns. Professionally designed, well-written and equipped with clear calls-to-action.'}
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.15}>
              <div className="bg-primary rounded-sm p-10 border-l-4 border-gold">
                <div className="w-14 h-14 rounded-sm bg-gold/10 flex items-center justify-center mb-6">
                  <Mail size={26} className="text-gold" />
                </div>
                <h3 className="text-white font-bold text-xl mb-4">
                  {isNl ? 'Wat is inbegrepen' : 'What is included'}
                </h3>
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

      {/* How we work */}
      <section className="bg-primary py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-2xl mb-16">
            <SectionLabel light>{isNl ? 'Werkwijze' : 'How we work'}</SectionLabel>
            <h2 className="text-white font-black text-3xl lg:text-5xl">
              {isNl ? 'Van strategie tot verzending' : 'From strategy to sending'}
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map(({num, title, desc}, i) => (
              <AnimatedSection key={num} delay={i * 0.08}>
                <div className="bg-white/5 border border-white/10 rounded-sm p-7 hover:border-gold/30 transition-colors h-full">
                  <span className="text-gold font-black text-3xl opacity-40 block mb-4">{num}</span>
                  <h3 className="text-white font-bold text-base mb-2">{title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
            <AnimatedSection delay={steps.length * 0.08}>
              <NoServiceCard variant="step" />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-light py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-12">
            <SectionLabel>{isNl ? 'Veelgestelde vragen' : 'Frequently asked questions'}</SectionLabel>
            <h2 className="text-primary font-black text-3xl lg:text-4xl">
              {isNl ? 'Alles over e-mail marketing' : 'Everything about email marketing'}
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

      <RelatedServices
        title={isNl ? 'Combineer met' : 'Combine with'}
        services={[
          {href: isNl ? '/diensten/online-marketing'  : '/en/services/online-marketing',  label: 'Online Marketing',                                              desc: isNl ? 'Volledige digitale groeistrategie' : 'Full digital growth strategy'},
          {href: isNl ? '/diensten/social-media-beheer' : '/en/services/social-media-management', label: isNl ? 'Social Media Beheer' : 'Social Media Management', desc: isNl ? 'Content en Meta Ads' : 'Content and Meta Ads'},
          {href: isNl ? '/diensten/digitale-analyse'  : '/en/services/digital-analytics', label: isNl ? 'Digitale Analyse' : 'Digital Analytics',                 desc: isNl ? 'Meet opens, clicks en conversies' : 'Track opens, clicks and conversions'},
        ]}
      />
      <CTA />
    </>
  );
}
