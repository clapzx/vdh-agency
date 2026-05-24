import type {Metadata} from 'next';
import {ArrowRight, ChevronDown, MapPin, Star, BarChart2, RefreshCw, Shield} from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionLabel from '@/components/ui/SectionLabel';
import CTA from '@/components/sections/CTA';
import {Link} from '@/i18n/navigation';

const BASE = 'https://www.vdh-agency.com';
const SLUG = '/blog/lokale-vindbaarheid-google-profiel';
const PUBLISHED = '2026-05-24';
const MODIFIED = '2026-05-24';

const faqs = [
  {
    q: 'Hoe lang duurt het voordat ik in de Google local pack verschijn?',
    a: 'Dat hangt af van de concurrentiepositie in uw branche en de huidige staat van uw online aanwezigheid. In sectoren met minder concurrentie zien we na 8–12 weken professionele optimalisatie meetbare verschuivingen. In competitieve markten is een tijdshorizon van 4–6 maanden realistisch voor een stabiele positie in de top 3.',
  },
  {
    q: 'Moet ik lokale SEO zelf doen of uitbesteden?',
    a: 'Zelf doen is mogelijk als u de tijd en expertise heeft voor het beheren van 200+ rankingsignalen, citatiemonitoring op tientallen platforms, reviewstrategie en kwartaalaudits. In de praktijk kiezen de meeste ondernemer voor uitbesteding omdat de tijdsinvestering aantoonbaar groter is dan de kosten van professioneel beheer.',
  },
  {
    q: 'Hoeveel reviews heb ik nodig om in de local pack te verschijnen?',
    a: 'Er is geen magisch getal. Google evalueert reviewvolume in combinatie met snelheid, recency, sentimentdistributie en responspercentage. Een bedrijf met 40 recente, beantwoorde reviews presteert structureel beter dan een bedrijf met 200 oude, onbeantwoorde reviews. Het gaat om het systeem achter de reviews, niet het getal.',
  },
  {
    q: 'Werkt lokale SEO ook voor mijn branche?',
    a: 'Lokale zoekintentie is aanwezig in vrijwel elke sector waarbij klanten een geografische keuze maken: van installatiebedrijven en tandartsen tot advocatenkantoren en restaurants. Als uw klanten googelen op "[dienst] + plaatsnaam" of "[dienst] bij mij in de buurt", is lokale SEO direct van toepassing.',
  },
  {
    q: 'Wat kost lokale SEO uitbesteden aan VDH Agency?',
    a: 'Wij werken op maat — de investering hangt af van het aantal locaties, de concurrentie-intensiteit in uw markt en de huidige staat van uw online aanwezigheid. Vraag een gratis strategiegesprek aan via onze contactpagina voor een concreet voorstel zonder verplichtingen.',
  },
];

function blogJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        headline: 'Waarom Uw Bedrijf de Google Local Pack Mist (en Wat Dat U Per Dag Kost)',
        description:
          '46% van alle Google-zoekopdrachten heeft lokale intentie. De top 3 in de local pack pakt 44% van de klikken. Ontdek waarom de meeste bedrijven onzichtbaar blijven en wat er werkelijk voor nodig is.',
        datePublished: PUBLISHED,
        dateModified: MODIFIED,
        author: {
          '@type': 'Person',
          name: 'Lars van der Hoek',
          url: `${BASE}/over-ons`,
        },
        publisher: {
          '@id': `${BASE}/#organization`,
        },
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
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Lokale Vindbaarheid Google Profiel',
            item: `${BASE}${SLUG}`,
          },
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
    title: 'Waarom Uw Bedrijf de Google Local Pack Mist — VDH Agency',
    description:
      '46% van alle Google-zoekopdrachten heeft lokale intentie. De top 3 in de local pack pakt 44% van de klikken. Ontdek waarom de meeste bedrijven onzichtbaar blijven.',
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
      title: 'Waarom Uw Bedrijf de Google Local Pack Mist',
      description:
        '46% van alle Google-zoekopdrachten heeft lokale intentie. Ontdek waarom de meeste bedrijven onzichtbaar blijven — en wat er werkelijk voor nodig is om te verschijnen.',
      publishedTime: PUBLISHED,
      modifiedTime: MODIFIED,
      authors: ['Lars van der Hoek'],
    },
  };
}

const signals = [
  {
    icon: MapPin,
    title: 'Google Bedrijfsprofiel',
    items: [
      'Categorie-accuraatheid & subcategorieën',
      'Attribuutselectie per branche',
      'Producten- en dienstencatalogus',
      'Seizoensgebonden openingstijden',
      'Google Posts & Q&A-beheer',
    ],
  },
  {
    icon: Star,
    title: 'Review-signalen',
    items: [
      'Volume, snelheid & recency',
      'Sentimentanalyse & keyword-verdeling',
      'Responspercentage & responstijd',
      'Inhoud en lengte van antwoorden',
      'Spreiding over de tijd',
    ],
  },
  {
    icon: BarChart2,
    title: 'Citatie-signalen',
    items: [
      'NAP-consistentie op 50+ platforms',
      'Gezaghebbende branchevermeldingen',
      'Lokale directories & kaartendiensten',
      'Datakwaliteit bij aggregators',
      'Duplicaatdetectie & -verwijdering',
    ],
  },
  {
    icon: Shield,
    title: 'Gedragssignalen',
    items: [
      'Click-through rate vanuit SERP',
      'Directe zoekopdrachten op merknaam',
      'Navigatie- en bel-klikken',
      'Routeverlopen naar locatie',
      'Dwell time op uw profiel',
    ],
  },
];

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(blogJsonLd())}}
      />

      {/* Hero */}
      <section className="bg-primary pt-36 pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-6 h-px bg-gold" />
              <Link href="/blog" className="text-gold text-xs font-semibold tracking-widest uppercase hover:opacity-80 transition-opacity">
                Blog
              </Link>
            </div>
            <h1 className="text-white font-black text-3xl lg:text-5xl leading-tight mb-6">
              Waarom Uw Bedrijf de Google Local Pack Mist
              <span className="text-gold"> (en Wat Dat U Per Dag Kost)</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl">
              46% van alle Google-zoekopdrachten heeft lokale intentie. De drie posities in de local pack pakken 44% van alle klikken. De rest deelt wat overblijft.
            </p>
            <div className="flex items-center gap-4 mt-8 text-white/40 text-sm">
              <span>Lars van der Hoek</span>
              <span>·</span>
              <time dateTime={PUBLISHED}>24 mei 2026</time>
              <span>·</span>
              <span>8 min leestijd</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="bg-light py-12">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-primary/5 border-l-4 border-gold rounded-sm p-7">
              <p className="text-primary font-bold text-sm tracking-widest uppercase mb-4 opacity-60">Kernpunten</p>
              <ul className="flex flex-col gap-3">
                {[
                  '46% van alle Google-zoekopdrachten heeft lokale intentie (Google, 2025)',
                  'De top 3 in de local pack ontvangt 44% van alle klikken op de pagina (Moz, 2025)',
                  'Google evalueert 200+ rankingsignalen verdeeld over zes categorieën',
                  '57% van de bedrijven heeft zijn profiel nooit volledig geoptimaliseerd (BrightLocal, 2025)',
                  'Lokale SEO is een doorlopend proces — algoritme-updates hebben elk kwartaal impact op rankings',
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-primary/80 text-sm leading-relaxed">
                    <span className="text-gold font-black mt-0.5 shrink-0">→</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Article body */}
      <section className="bg-light pb-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">

          {/* Section 1 */}
          <AnimatedSection className="mb-16">
            <h2 className="text-primary font-black text-2xl lg:text-3xl mb-5 pt-12 border-t border-primary/10">
              De local pack: drie stoelen voor duizenden aanvragers
            </h2>
            <p className="text-primary/70 leading-relaxed mb-5">
              In 2025 zochten 97% van de consumenten online naar lokale bedrijven (BrightLocal Local Consumer Review Survey, 2025). Van die zoekopdrachten leidt 88% binnen 24 uur tot een telefoontje of een fysiek bezoek (Google Consumer Insights, 2024). Het zijn klanten met hoge koopintentie — geen oriënterende browsers, maar mensen die klaar zijn om te handelen.
            </p>
            <p className="text-primary/70 leading-relaxed mb-5">
              Het probleem: Google biedt per zoekopdracht maar drie organische posities in de local pack. En in vrijwel elke branche strijden tientallen tot honderden bedrijven om precies die drie plekken. De bedrijven die er wél in staan, doen meer dan "het profiel invullen." Ze beheren een ecosysteem van rankingsignalen dat Google continu herberekent op basis van de zoeker, de locatie op dat moment, het tijdstip, het apparaat en het collectieve gedragspatroon van eerdere zoekers.
            </p>
            <p className="text-primary/70 leading-relaxed">
              Dat systeem begrijpen — en professioneel beïnvloeden — is de scheidslijn tussen de bedrijven die worden gevonden en de bedrijven die betalen voor klanten die hun concurrent gratis krijgt.
            </p>
          </AnimatedSection>

          {/* Stats bar */}
          <AnimatedSection className="mb-16">
            <div className="bg-primary rounded-sm p-8 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              {[
                {num: '44%', label: 'van alle klikken gaat naar de top 3 in de local pack', src: 'Moz, 2025'},
                {num: '97%', label: 'van consumenten zoekt online naar lokale bedrijven', src: 'BrightLocal, 2025'},
                {num: '88%', label: 'van lokale zoekers neemt binnen 24 uur actie', src: 'Google, 2024'},
              ].map(({num, label, src}) => (
                <div key={num}>
                  <span className="text-gold font-black text-4xl block mb-2">{num}</span>
                  <span className="text-white/70 text-sm leading-relaxed block mb-1">{label}</span>
                  <span className="text-white/30 text-xs">{src}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Section 2: 200+ signalen */}
          <AnimatedSection className="mb-16">
            <h2 className="text-primary font-black text-2xl lg:text-3xl mb-5 pt-12 border-t border-primary/10">
              200+ signalen, zes categorieën — en elk detail telt
            </h2>
            <p className="text-primary/70 leading-relaxed mb-5">
              Google verdeelt zijn lokale rankingsalgoritme over drie primaire dimensies: relevantie, afstand en bekendheid (Google Help, 2025). Achter die drie woorden schuilt een structuur van meer dan tweehonderd individuele rankingsignalen. Elk met eigen gewichten, eigen updatecycli en eigen optimalisatielogica.
            </p>
            <p className="text-primary/70 leading-relaxed mb-10">
              De vier meest impactvolle categorieën zien er als volgt uit — en dit is nog geen volledig beeld:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {signals.map(({icon: Icon, title, items}, i) => (
                <AnimatedSection key={title} delay={i * 0.07}>
                  <div className="bg-white border border-primary/10 rounded-sm p-7 h-full">
                    <div className="w-10 h-10 bg-gold/10 rounded-sm flex items-center justify-center mb-4">
                      <Icon size={18} className="text-gold" />
                    </div>
                    <h3 className="text-primary font-bold text-base mb-4">{title}</h3>
                    <ul className="flex flex-col gap-2">
                      {items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-primary/60 text-sm">
                          <span className="text-gold font-bold mt-0.5 shrink-0">·</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <p className="text-primary/70 leading-relaxed mt-8">
              Elke categorie heeft zijn eigen meetinstrumenten, tijdsschaal en optimalisatielogica. Citatiebeheer alleen al omvat het monitoren van tientallen platforms — elk met eigen updatevertragingen, eigen validatieprocessen en eigen autoriteitsgewichten in het oog van Google.
            </p>
          </AnimatedSection>

          {/* Section 3: Basisvalkuil */}
          <AnimatedSection className="mb-16">
            <h2 className="text-primary font-black text-2xl lg:text-3xl mb-5 pt-12 border-t border-primary/10">
              De basisvalkuil: waarom "het profiel invullen" niet werkt
            </h2>
            <p className="text-primary/70 leading-relaxed mb-5">
              De meeste bedrijven vullen de basis in: naam, adres, telefoonnummer, openingstijden en een profielfoto. Dat voelt als "klaar." In werkelijkheid is het het startpunt van een proces waarvan 57% van de Nederlandse bedrijven de diepte nooit bereikt (BrightLocal, 2025).
            </p>
            <p className="text-primary/70 leading-relaxed mb-5">
              Een volledig geoptimaliseerd Google Bedrijfsprofiel omvat: primaire én secundaire categorieën op basis van concurrentieanalyse, een volledige attribuutset per branche (sommige branches hebben tientallen specifieke attribuen), een producten- en dienstencatalogus met individueel geoptimaliseerde beschrijvingen, een actief Google Posts-schema voor versingssignalen, een beheerde Q&A-sectie, en een doordachte fotostrategie die de beeldtypen aanlevert die Google beloont voor uw specifieke categorie.
            </p>
            <div className="bg-gold/10 border-l-4 border-gold rounded-sm p-6 mt-6">
              <p className="text-primary font-semibold text-sm leading-relaxed">
                <span className="text-gold font-black">Onze observatie:</span> Wanneer wij een nieuw klantprofiel ontvangen, vinden we gemiddeld 23 optimalisatiepunten die direct impact hebben op lokale rankings — bij profielen waarvan de eigenaar dacht dat ze "klaar" waren.
              </p>
            </div>
          </AnimatedSection>

          {/* Section 4: Reviews */}
          <AnimatedSection className="mb-16">
            <h2 className="text-primary font-black text-2xl lg:text-3xl mb-5 pt-12 border-t border-primary/10">
              Reviews: het meest onderschatte rankingsignaal
            </h2>
            <p className="text-primary/70 leading-relaxed mb-5">
              84% van de consumenten vertrouwt online reviews evenveel als persoonlijke aanbevelingen (BrightLocal, 2025). Dat maakt reviews niet alleen een verkooptool — het maakt ze een primair rankingsignaal met directe invloed op uw positie in de local pack.
            </p>
            <p className="text-primary/70 leading-relaxed mb-5">
              Google's reviewalgoritme is multidimensionaal. Het evalueert niet alleen het aantal sterren, maar ook: de snelheid waarmee nieuwe reviews binnenkomen, de spreiding over de tijd (een plotse instroom wordt algoritmisch gedevalueerd), de gemiddelde reviewlengte, de keyword-verdeling binnen reviews, het responspercentage van de eigenaar, de tijd die verstrijkt vóór de reactie, en de inhoud en lengte van die reactie.
            </p>
            <p className="text-primary/70 leading-relaxed">
              Slechts 31% van de bedrijfseigenaren reageert consequent op reviews (BrightLocal, 2025). Dat betekent dat 69% van uw concurrenten een algoritmisch voordeel laat liggen. Een professioneel reviewbeheerprotocol — met de juiste timing, inhoud en frequentie — is een van de meest impactvolle interventies in lokale SEO, en een van de meest onderbenutte.
            </p>
          </AnimatedSection>

          {/* Section 5: Doorlopend proces */}
          <AnimatedSection className="mb-16">
            <h2 className="text-primary font-black text-2xl lg:text-3xl mb-5 pt-12 border-t border-primary/10">
              Lokale SEO is geen project — het is een doorlopende discipline
            </h2>
            <p className="text-primary/70 leading-relaxed mb-5">
              Google paste zijn lokale algoritme in 2024 negen keer aan met aantoonbare impact op lokale rankings (Google Search Status Dashboard, 2024). Elke update herweegt signalen, herwaardeert categorieën en herordent de local pack. Bedrijven die éénmalig optimaliseren en daarna niets doen, glijden terug — onzichtbaar, terwijl de concurrent die doorlopend monitort, aanpast en reageert, stijgt.
            </p>

            <div className="bg-primary rounded-sm p-8 mt-6">
              <p className="text-gold font-bold text-sm tracking-widest uppercase mb-5">Wat professioneel lokaal SEO-beheer inhoudt</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {freq: 'Maandelijks', action: 'Concurrentieanalyse op zoektermniveau'},
                  {freq: 'Maandelijks', action: 'Positiemonitoring & rankingrapportage'},
                  {freq: 'Maandelijks', action: 'Reviewbeheer & responsprotocol'},
                  {freq: 'Kwartaal', action: 'Citatieprofiel-audit op 50+ platforms'},
                  {freq: 'Kwartaal', action: 'Technische profielaudit & attribuutcheck'},
                  {freq: 'Doorlopend', action: 'Algoritme-monitoring & strategische aanpassing'},
                ].map(({freq, action}) => (
                  <div key={action} className="flex items-start gap-3">
                    <span className="text-gold text-xs font-bold bg-gold/10 px-2 py-1 rounded-sm shrink-0 mt-0.5">{freq}</span>
                    <span className="text-white/70 text-sm leading-relaxed">{action}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Section 6: VDH Agency */}
          <AnimatedSection className="mb-16">
            <h2 className="text-primary font-black text-2xl lg:text-3xl mb-5 pt-12 border-t border-primary/10">
              Wat een specialist anders ziet
            </h2>
            <p className="text-primary/70 leading-relaxed mb-5">
              De kloof tussen een basisoptimalisatie en een professionele lokale SEO-aanpak is niet alleen een kwestie van tijd — het is een kwestie van het juiste instrumentarium, de juiste data-interpretatie en de ervaring om te weten welk signaal op welk moment de grootste impact heeft.
            </p>
            <p className="text-primary/70 leading-relaxed mb-5">
              VDH Agency beheert de lokale aanwezigheid van Nederlandse bedrijven als een volledige discipline. We starten met een grondige audit van uw huidige profiel, uw concurrentiepositie en uw citatieprofiel. Op basis daarvan bouwen we een strategie op maat — niet een standaardpakket, maar een aanpak die aansluit op de werkelijke dynamiek in uw markt.
            </p>
            <p className="text-primary/70 leading-relaxed">
              Elke klant ontvangt maandelijkse rapportage op positieniveau: welke zoekwoorden u wint, welke u verliest, en wat de volgende strategische stap is. Transparantie is geen bijzaak — het is de standaard.
            </p>
          </AnimatedSection>

          {/* Inline CTA */}
          <AnimatedSection className="mb-16">
            <div className="bg-primary rounded-sm p-10 text-center relative overflow-hidden">
              <div className="absolute inset-0 dot-grid opacity-20" />
              <div className="relative z-10">
                <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-4">Gratis Strategiegesprek</p>
                <h3 className="text-white font-black text-2xl lg:text-3xl mb-4">
                  Waar staat uw bedrijf in de local pack?
                </h3>
                <p className="text-white/60 mb-8 max-w-lg mx-auto text-sm leading-relaxed">
                  Wij analyseren gratis uw huidige lokale zichtbaarheid, uw concurrentiepositie en de grootste kansen in uw markt. Geen verplichtingen — wel concrete inzichten.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-gold text-primary font-bold text-sm px-8 py-4 rounded-sm hover:bg-gold-light transition-colors group"
                >
                  Vraag gratis analyse aan
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </AnimatedSection>

          {/* FAQ */}
          <AnimatedSection>
            <h2 className="text-primary font-black text-2xl lg:text-3xl mb-8 pt-12 border-t border-primary/10">
              Veelgestelde vragen
            </h2>
            <div className="flex flex-col gap-4">
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
