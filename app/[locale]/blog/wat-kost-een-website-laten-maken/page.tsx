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
    q: 'Geeft VDH Agency een vaste prijs of reken je op uurloon?',
    a: 'Wij werken met een vaste prijs op basis van een offerte. Voordat we beginnen maken we een inschatting van het totale aantal uren dat een project vraagt — die uren vertalen we naar een totaalbedrag. Zo weet jij precies wat je betaalt, zonder rekening te worden verrast achteraf.',
  },
  {
    q: 'Wat kost een spoedopdracht?',
    a: 'Een spoedopdracht heeft hogere prioriteit en vergt dat we andere planning opzij schuiven. Dat brengt een toeslag met zich mee die we altijd vooraf bespreken. Als de standaard doorlooptijd van 3 tot 5 weken niet past bij jouw situatie, laten we weten wat het kost om te versnellen.',
  },
  {
    q: 'Zijn er doorlopende kosten naast de bouwprijs?',
    a: 'Ja. Los van de eenmalige bouwkosten betaal je doorlopend voor hosting en je domeinnaam. Wij bespreken dit altijd transparant in de offerte, zodat je het totaalplaatje kent — niet alleen de bouwprijs.',
  },
  {
    q: 'Wat als mijn wens technisch complex is?',
    a: 'Complexere wensen — maatwerk integraties, specifieke koppelingen of functionaliteit buiten de standaard — vragen meer ontwikkeltijd. Die tijd wordt eerlijk meegenomen in de offerte. We bouwen nooit iets op stel en sprong: als een specifieke oplossing maatwerk onderzoek vraagt, verwerken we dat transparant in het prijsvoorstel.',
  },
];

function blogJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        headline: 'Wat kost een website laten maken? Zo bepalen wij de prijs',
        description: 'Hoe bepaalt VDH Agency de prijs van een website? Eerlijk uitgelegd: uren, complexiteit, doorlooptijd en spoedtoeslag. Geen verborgen kosten, geen verrassingen.',
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
    title: 'Wat Kost een Website Laten Maken? Zo Bepalen Wij de Prijs | VDH Agency',
    description: 'Hoe bepaalt VDH Agency de prijs van een website? Eerlijk uitgelegd: uren, complexiteit, doorlooptijd en spoed. Geen verborgen kosten. Vraag gratis een offerte aan.',
    ...(locale !== 'nl' && {robots: {index: false, follow: false}}),
    alternates: {
      canonical,
      languages: {nl: `${BASE}${SLUG}`, en: `${BASE}/en${SLUG}`, 'x-default': `${BASE}${SLUG}`},
    },
    openGraph: {
      type: 'article',
      url: canonical,
      title: 'Wat kost een website laten maken? Zo bepalen wij de prijs',
      description: 'Eerlijk uitgelegd: hoe VDH Agency prijzen bepaalt op basis van uren, complexiteit en doorlooptijd.',
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
              <span className="text-gold">Zo bepalen wij de prijs</span>
            </h1>
            <p className="text-white/60 text-lg">
              Geen vage ranges of vergelijkingslijstjes. Gewoon eerlijk uitgelegd hoe wij tot een prijs komen — en wat jouw wensen daarin bepalen.
            </p>
            <div className="flex items-center gap-4 mt-8 text-white/40 text-sm">
              <span>Lars van der Hoek</span>
              <span>·</span>
              <time dateTime={PUBLISHED}>26 mei 2026</time>
              <span>·</span>
              <span>5 min leestijd</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Article */}
      <section className="bg-light py-16 pb-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 flex flex-col gap-12">

          <AnimatedSection>
            <p className="text-primary/80 text-lg leading-relaxed mb-4">
              De prijs van een website laten maken wordt bepaald door één ding: tijd. Hoeveel uur kost het om jouw website te bouwen — van de eerste schets tot de live-lancering? Die inschatting, vermenigvuldigd met ons uurtarief, vormt de basis van elk prijsvoorstel.
            </p>
            <p className="text-primary/70 leading-relaxed">
              We werken altijd met een vaste prijs op basis van een offerte — geen rekening op uurloon, geen verrassingen achteraf. Maar om die vaste prijs eerlijk te kunnen bepalen, moeten we begrijpen wat jouw project vraagt. Hier lees je hoe dat werkt.
            </p>
          </AnimatedSection>

          {/* Wat de prijs bepaalt */}
          <AnimatedSection>
            <h2 className="text-primary font-black text-2xl mb-4">Wat bepaalt het aantal uur?</h2>
            <p className="text-primary/70 leading-relaxed mb-6">
              Elke website is anders. De ene ondernemer heeft een strakke vijf-pagina-site nodig; de andere wil een volledige webshop met klantenportaal en CRM-koppeling. Hier zijn de factoren die het meest bepalend zijn voor de benodigde tijd.
            </p>
            <div className="flex flex-col gap-4">
              {[
                {
                  title: 'Aantal pagina\'s en structuur',
                  desc: 'Een eenvoudige site met een homepagina, over ons, diensten en contact vraagt fundamenteel minder tijd dan een website met twintig dienst- en locatiepagina\'s, een blog en meertalige content. Elke extra pagina is extra ontwerp- en bouwtijd.',
                },
                {
                  title: 'Maatwerk design',
                  desc: 'Wil je een volledig uniek design dat gebouwd wordt vanuit jouw merk? Dan begint het ontwerp bij een blanco vel. Dat geeft het beste resultaat, maar vraagt ook meer uren dan werken met een bestaande structuur. Wij kiezen altijd voor maatwerk — maar de scope bepaalt de omvang.',
                },
                {
                  title: 'Technisch SEO-fundament',
                  desc: 'Een website die écht goed gevonden wordt in Google, heeft een sterk technisch fundament: de juiste heading-structuur, schema markup, snelle laadtijden, sitemap en meta-data per pagina. Dat is geen extra — bij ons zit het standaard in het proces. Maar het voegt wel uren toe ten opzichte van een eenvoudige voorkant bouwen.',
                },
                {
                  title: 'CMS en zelfbeheer',
                  desc: 'Wil je na oplevering zelf teksten aanpassen, blogartikelen plaatsen of afbeeldingen uploaden? Dan bouwen we met een beheersysteem (CMS). Dat geeft jou vrijheid, maar vraagt extra bouwtijd en een korte training bij oplevering.',
                },
                {
                  title: 'Integraties en koppelingen',
                  desc: 'Denk aan een koppeling met een boekingssysteem, CRM, betaalprovider of extern platform. Elke integratie is maatwerk en voegt ontwikkeltijd toe. Hoe specifieker de koppeling, hoe meer uur het kost om het goed te bouwen.',
                },
              ].map(({title, desc}) => (
                <div key={title} className="bg-white border border-primary/10 rounded-sm p-6">
                  <h3 className="text-primary font-bold text-sm mb-2">{title}</h3>
                  <p className="text-primary/60 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Doorlooptijd en spoed */}
          <AnimatedSection>
            <h2 className="text-primary font-black text-2xl mb-4">Doorlooptijd en spoed</h2>
            <p className="text-primary/70 leading-relaxed mb-4">
              Onze standaard doorlooptijd is 3 tot 5 weken — van intake tot live. Dat geeft ons de ruimte om zorgvuldig te werken, feedback te verwerken en jouw site goed op te leveren.
            </p>
            <p className="text-primary/70 leading-relaxed mb-4">
              Moet het sneller? Dat kan, maar een spoedopdracht heeft consequenties voor onze planning en prioriteit. Een kortere doorlooptijd betekent dat andere werkzaamheden worden opzijgeschoven — dat brengt een toeslag met zich mee die we altijd vooraf helder communiceren.
            </p>
            <div className="bg-primary/5 border-l-4 border-gold rounded-sm p-6">
              <p className="text-primary font-semibold text-sm mb-3">Standaard doorlooptijd vs. spoed</p>
              <div className="flex flex-col gap-3">
                {[
                  {label: 'Standaard', value: '3–5 weken', note: 'Zorgvuldige aanpak, revisieronden inbegrepen'},
                  {label: 'Spoed',     value: '1–2 weken', note: 'Hogere prioriteit, toeslag van toepassing'},
                ].map(({label, value, note}) => (
                  <div key={label} className="flex items-start gap-4">
                    <span className="text-gold font-bold text-sm w-20 shrink-0">{label}</span>
                    <div>
                      <span className="text-primary font-semibold text-sm">{value}</span>
                      <span className="text-primary/50 text-sm"> — {note}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Eerlijk over complexe wensen */}
          <AnimatedSection>
            <h2 className="text-primary font-black text-2xl mb-4">Eerlijk over complexe en specifieke wensen</h2>
            <p className="text-primary/70 leading-relaxed mb-4">
              Webdevelopment evolueert snel. Nieuwe frameworks, specifieke integraties, maatwerk API-koppelingen — soms vraagt een project om oplossingen die verder gaan dan standaard bouw. Dat is geen uitzondering, dat is de norm voor elke serieuze digitale opdracht.
            </p>
            <p className="text-primary/70 leading-relaxed mb-4">
              Wanneer jouw wensen specifiek maatwerk onderzoek of het toepassen van een nieuwe technische aanpak vereisen, nemen we die uren eerlijk mee in de offerte. Dat is geen toeslag voor onzekerheid — het is investering in een oplossing die degelijk, schaalbaar en toekomstbestendig is. We nemen nooit shortcuts die jou later duur komen te staan.
            </p>
            <div className="bg-primary rounded-sm p-7">
              <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-3">Onze aanpak</p>
              <p className="text-white/70 text-sm leading-relaxed">
                Voordat we een offerte opstellen, bespreken we jouw situatie grondig. Wij geven geen offerte af die we niet kunnen waarmaken. Als iets complex is, zeggen we dat eerlijk — inclusief wat het betekent voor de prijs en doorlooptijd. Liever een eerlijk gesprek vooraf dan een vervelende discussie achteraf.
              </p>
            </div>
          </AnimatedSection>

          {/* Waarom goedkoop duur is */}
          <AnimatedSection>
            <h2 className="text-primary font-black text-2xl mb-4">Waarom de goedkoopste keuze je meer kost</h2>
            <p className="text-primary/70 leading-relaxed mb-4">
              Een website die goedkoop wordt gebouwd, mist vrijwel altijd iets essentiëels. Dat klinkt als een verkoopverhaal — maar het is een praktisch feit. Bouw je een website zonder technisch SEO-fundament, dan kost het repareren dat SEO-fundament achteraf minstens evenveel als het initieel goed doen.
            </p>
            <div className="bg-primary/5 border-l-4 border-gold rounded-sm p-6">
              <p className="text-primary font-semibold text-sm mb-3">Wat je mist bij een te snel of te goedkoop gebouwde site:</p>
              <ul className="flex flex-col gap-2 text-primary/70 text-sm">
                {[
                  'Technisch SEO-fundament — pagina\'s die Google nooit goed indexeert',
                  'Schaalbare structuur — uitbreiden wordt een verbouwing',
                  'Snelle laadtijden — elke extra seconde kost je conversie',
                  'Mobielvriendelijk op elk scherm — niet alleen op desktop getest',
                  'Ondersteuning achteraf — als iets kapot gaat, sta je er alleen voor',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-gold mt-0.5">→</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* Checklist */}
          <AnimatedSection>
            <h2 className="text-primary font-black text-2xl mb-4">Wat moet er in een goede offerte staan?</h2>
            <p className="text-primary/70 leading-relaxed mb-5">
              Of je nou bij ons offreerd of ergens anders — een serieuze offerte voor een website bevat altijd deze punten. Ontbreekt iets? Vraag er expliciet naar voordat je tekent.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Aantal pagina\'s en structuur',
                'Inclusief of exclusief teksten',
                'CMS en beheermogelijkheden',
                'Technisch SEO-fundament',
                'Mobielvriendelijkheid',
                'Laadsnelheid en performance',
                'Hosting en domeinkosten',
                'Doorlooptijd en revisieronden',
                'Nazorg na oplevering',
                'Eigendom van code en bestanden',
              ].map(item => (
                <div key={item} className="flex items-center gap-3 bg-white border border-primary/8 rounded-sm px-4 py-3">
                  <span className="text-gold font-bold text-sm">✓</span>
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
                  Benieuwd wat jouw website kost?
                </h3>
                <p className="text-white/60 mb-8 max-w-md mx-auto text-sm leading-relaxed">
                  Vertel ons over jouw wensen, doelen en eventuele deadline. Wij maken een offerte op maat — vaste prijs, geen verborgen kosten en eerlijk advies over wat jouw project vraagt.
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
