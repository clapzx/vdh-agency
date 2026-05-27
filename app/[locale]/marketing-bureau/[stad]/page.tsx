import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {ArrowRight, CheckCircle2, MapPin, Search, Share2, Globe, BarChart2, ChevronDown} from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionLabel from '@/components/ui/SectionLabel';
import Breadcrumb from '@/components/ui/Breadcrumb';
import CTA from '@/components/sections/CTA';
import {Link} from '@/i18n/navigation';

const BASE = 'https://www.vdh-agency.com';

interface CityData {
  slug: string;
  name: string;
  region: string;
  type: 'stad' | 'dorp' | 'gemeente';
  intro: string;
  body: string;
  metaDescription: string;
  population: string;
  sectors: string[];
  marketInsight: string;
  relatedLinks?: {href: string; label: string}[];
}

function typeLabel(type: CityData['type']) {
  return type === 'stad' ? 'Stad' : type === 'dorp' ? 'Dorp' : 'Gemeente';
}

function typeArticle(type: CityData['type']) {
  return type === 'dorp' ? 'het' : 'de';
}

function getCityFaqs(city: CityData) {
  const inType = `${typeArticle(city.type)} ${city.type}`;
  const regionSuffix = city.type === 'gemeente' ? ' en de omliggende kernen' : '';
  return [
    {
      q: `Werkt VDH Agency ook voor bedrijven in ${city.name}?`,
      a: `Ja. VDH Agency werkt volledig online voor ondernemers door heel Nederland, ook in ${city.name}${regionSuffix}. Alle gesprekken verlopen via video of telefoon, locatie maakt geen verschil. We kennen de regio en weten welke zoekwoorden lokale klanten gebruiken.`,
    },
    {
      q: `Welke diensten zijn het meest relevant voor ${inType} ${city.name}?`,
      a: `Dat hangt af van jouw situatie, maar voor ondernemers in ${city.name} — actief in sectoren als ${city.sectors.slice(0, 2).join(' en ')} — is lokale SEO vrijwel altijd de sterkste investering. Aanvullend helpen wij met Google Ads, social media en een website op maat.`,
    },
    {
      q: `Hoe snel zie ik resultaat met online marketing in ${city.name}?`,
      a: `Lokale SEO in ${city.name} levert de eerste zichtbare resultaten doorgaans binnen 2 tot 4 maanden. Google Ads werkt sneller: zodra de campagne live is, verschijn je bovenaan. In het kennismakingsgesprek bespreken we eerlijk wat realistisch is voor jouw bedrijf en markt.`,
    },
    {
      q: `Wat kost samenwerken met VDH Agency voor een bedrijf in ${city.name}?`,
      a: `Wij werken niet met vaste pakketten. Na een gratis kennismakingsgesprek sturen we een voorstel op maat, afgestemd op jouw dienst, doelen en budget. Er is geen minimumbedrag — wel een eerlijk gesprek over wat haalbaar is.`,
    },
  ];
}

const cities: CityData[] = [
  {
    slug: 'heerde',
    name: 'Heerde',
    region: 'Gelderland',
    type: 'gemeente',
    intro: 'VDH Agency is gevestigd in Heerde en kent de lokale markt als geen ander. Of je nu een ambacht, winkel of dienstverlener bent in het dorp of de omgeving: met de juiste online aanpak bereik je klanten die actief zoeken naar wat jij aanbiedt.',
    body: 'Heerde telt veel lokale ondernemers die nog zonder serieuze online strategie werken. Dat is tegelijk een uitdaging en een kans: wie nu investeert in vindbaarheid, pakt een voorsprong die moeilijk in te halen is.',
    metaDescription: 'Marketing bureau Heerde. VDH Agency helpt ondernemers in Heerde via SEO, Google Ads, social media en webdesign. Plan nu een gratis consult.',
    population: '~18.000',
    sectors: ['Lokale ambachten', 'Bouw & installatie', 'Agrarisch', 'Detailhandel'],
    marketInsight: 'Heerde heeft een hechte lokale economie gedomineerd door ambachtelijke bedrijven, bouwbedrijven en agrariërs. De meeste ondernemers werken nog op mond-tot-mondbasis — maar Google-zoekopdrachten voor lokale diensten groeien ook hier snel. Wie als eerste online zichtbaar is in Heerde, pakt een positie die lang standhoud.',
    relatedLinks: [
      {href: '/marketing-bureau-gelderland', label: 'Marketing Bureau Gelderland'},
      {href: '/marketing-bureau/epe',        label: 'Marketing Bureau Epe'},
      {href: '/marketing-bureau/hattem',     label: 'Marketing Bureau Hattem'},
    ],
  },
  {
    slug: 'hattem',
    name: 'Hattem',
    region: 'Gelderland',
    type: 'stad',
    intro: 'Hattem is een compacte vestingstad met een actief ondernemersleven. De concurrentie in de regio is scherp, en wie online niet zichtbaar is, mist klanten. VDH Agency helpt Hattemse ondernemers groeien via SEO, social media en een website die aanvragen oplevert.',
    body: 'Als kleine maar levendige stad heeft Hattem ondernemers die zich kunnen onderscheiden via lokale vindbaarheid. Een goed geoptimaliseerde online aanwezigheid maakt het verschil tussen gevonden worden en onzichtbaar blijven.',
    metaDescription: 'Marketing bureau voor Hattem. VDH Agency helpt ondernemers in Hattem groeien via SEO, Google Ads, social media en webdesign. Plan nu een gratis consult.',
    population: '~12.000',
    sectors: ['Horeca & toerisme', 'Zakelijke dienstverlening', 'Detailhandel', 'Bouw'],
    marketInsight: 'Hattem heeft het karakter van een vestingstad met een actief winkelcentrum en horeca. De nabijheid van Zwolle (5 km) zorgt voor scherpe concurrentie — aanbieders uit Zwolle zijn zichtbaar in dezelfde zoekresultaten. Lokale SEO gericht op "Hattem" als zoekterm geeft jou een voorsprong op bureaus die alleen op de grote stad focussen.',
    relatedLinks: [
      {href: '/marketing-bureau-gelderland', label: 'Marketing Bureau Gelderland'},
      {href: '/marketing-bureau/zwolle',     label: 'Marketing Bureau Zwolle'},
      {href: '/marketing-bureau/heerde',     label: 'Marketing Bureau Heerde'},
    ],
  },
  {
    slug: 'epe',
    name: 'Epe',
    region: 'Gelderland',
    type: 'gemeente',
    intro: 'Epe is een groene gemeente in de Veluwe met een mix van toerisme, detailhandel en lokale dienstverleners. Online gevonden worden in een regio met veel toeristische concurrentie vraagt om een gerichte aanpak. VDH Agency zorgt voor zichtbaarheid op de zoekopdrachten die er voor jouw bedrijf toe doen.',
    body: 'De combinatie van toeristische bezoekers en vaste inwoners biedt Epese ondernemers een brede doelgroep. Met de juiste lokale SEO bereik je beide groepen precies op het moment dat ze op zoek zijn.',
    metaDescription: 'Marketing bureau voor Epe en omgeving. VDH Agency helpt ondernemers in Epe groeien via SEO, Google Ads, social media en webdesign. Plan nu een gratis consult.',
    population: '~33.000',
    sectors: ['Toerisme & recreatie', 'Detailhandel', 'Zorg & welzijn', 'Agrarisch'],
    marketInsight: 'Epe ligt in het hart van de Veluwe en trekt jaarlijks honderdduizenden toeristen. Dat betekent twee doelgroepen: de vaste bewoners én toeristische bezoekers die kortdurend zoeken naar accommodatie, horeca of activiteiten. Een contentstrategie die beide groepen aanspreekt, geeft het hele jaar door aanvragen.',
    relatedLinks: [
      {href: '/marketing-bureau-gelderland', label: 'Marketing Bureau Gelderland'},
      {href: '/marketing-bureau/heerde',     label: 'Marketing Bureau Heerde'},
      {href: '/marketing-bureau/apeldoorn',  label: 'Marketing Bureau Apeldoorn'},
    ],
  },
  {
    slug: 'wezep',
    name: 'Wezep',
    region: 'Gelderland',
    type: 'dorp',
    intro: 'Wezep is een groeiende woonkern in de gemeente Oldebroek, met een toenemend aantal lokale ondernemers. De nabijheid van Zwolle en Apeldoorn maakt de markt competitief. Met een sterke online aanwezigheid trek je de klanten die dichtbij zijn en snel willen handelen.',
    body: 'Juist in groeiende kernen als Wezep is online marketing een effectief middel om als eerste de juiste positie in te nemen. VDH Agency helpt je dat moment te benutten voordat de concurrentie dat doet.',
    metaDescription: 'Marketing bureau voor Wezep. VDH Agency helpt ondernemers in Wezep en gemeente Oldebroek groeien via SEO, Google Ads, social media en webdesign. Plan nu een gratis consult.',
    population: '~10.000',
    sectors: ['Wonen & vastgoed', 'Zakelijke dienstverlening', 'Detailhandel', 'Transport & logistiek'],
    marketInsight: 'Wezep groeit sterk als woonkern langs de A28 en heeft steeds meer lokale bedrijvigheid. Concurrenten in de zoekresultaten zijn met name uit Zwolle en Hattem afkomstig. Door te focussen op "Wezep" en "gemeente Oldebroek" als zoektermen, onderscheid je je als de herkenbare lokale keuze voor omwonenden.',
    relatedLinks: [
      {href: '/marketing-bureau-gelderland',  label: 'Marketing Bureau Gelderland'},
      {href: '/marketing-bureau/oldebroek',   label: 'Marketing Bureau Oldebroek'},
      {href: '/marketing-bureau/zwolle',      label: 'Marketing Bureau Zwolle'},
    ],
  },
  {
    slug: 'oldebroek',
    name: 'Oldebroek',
    region: 'Gelderland',
    type: 'gemeente',
    intro: 'De gemeente Oldebroek heeft een divers mkb-landschap verspreid over meerdere kernen. Veel ondernemers werken nog zonder serieuze online strategie, wat kansen creëert voor wie wel investeert in vindbaarheid. VDH Agency helpt je die voorsprong te pakken.',
    body: 'Van agrarische bedrijven tot lokale dienstverleners: in Oldebroek is de markt overzichtelijk maar de online concurrentie vanuit grotere steden merkbaar. Met gerichte lokale SEO zorg je dat jij als eerste gevonden wordt.',
    metaDescription: 'Marketing bureau voor Oldebroek. VDH Agency helpt ondernemers in Oldebroek groeien via SEO, Google Ads, social media en webdesign. Plan nu een gratis consult.',
    population: '~23.000',
    sectors: ['Agrarisch', 'Bouw & infra', 'Transport & logistiek', 'Recreatie'],
    marketInsight: "De gemeente Oldebroek bestaat uit meerdere kernen: Oldebroek, Wezep, 't Harde en Oosterwolde. Veel mkb-bedrijven zijn agrarisch of bouwgerelateerd. Deze sectoren zoeken steeds vaker online naar leveranciers en dienstverleners. Een goed opgezette website met lokale SEO trekt aanvragen vanuit de gehele gemeente en de directe omgeving.",
    relatedLinks: [
      {href: '/marketing-bureau-gelderland', label: 'Marketing Bureau Gelderland'},
      {href: '/marketing-bureau/wezep',      label: 'Marketing Bureau Wezep'},
      {href: '/marketing-bureau/elburg',     label: 'Marketing Bureau Elburg'},
    ],
  },
  {
    slug: 'vaassen',
    name: 'Vaassen',
    region: 'Gelderland',
    type: 'dorp',
    intro: 'Vaassen ligt op de grens van de Veluwe en de IJsselvallei en heeft een actieve lokale economie met bouw, zorg en detailhandel. Online marketing die inspeelt op de lokale zoekintentie zorgt voor aanvragen van mensen die vlakbij zijn en klaar zijn om te kopen.',
    body: 'De ligging van Vaassen tussen Epe en Apeldoorn betekent dat je als ondernemer concurreert met bedrijven uit een brede regio. Lokale SEO en een professionele website geven je het voordeel van herkenbaarheid en nabijheid.',
    metaDescription: 'Marketing bureau voor Vaassen. VDH Agency helpt ondernemers in Vaassen groeien via SEO, Google Ads, social media en webdesign. Plan nu een gratis consult.',
    population: '~10.000',
    sectors: ['Bouw & installatie', 'Zorg & welzijn', 'Detailhandel', 'Agrarisch'],
    marketInsight: 'Vaassen heeft een sterke lokale bouw- en installatiesector. Door de ligging tussen Epe en Apeldoorn concurreren lokale bedrijven met aanbieders uit beide steden. Wie lokaal vindbaar is op zoekopdrachten als "installateur Vaassen" of "aannemer Epe-Vaassen", trekt klanten die bewust kiezen voor een aanbieder uit de directe omgeving.',
    relatedLinks: [
      {href: '/marketing-bureau-gelderland', label: 'Marketing Bureau Gelderland'},
      {href: '/marketing-bureau/epe',        label: 'Marketing Bureau Epe'},
      {href: '/marketing-bureau/apeldoorn',  label: 'Marketing Bureau Apeldoorn'},
    ],
  },
  {
    slug: 't-harde',
    name: "'t Harde",
    region: 'Gelderland',
    type: 'dorp',
    intro: "'t Harde is een kern in de gemeente Oldebroek met een mix van woningbouw en lokale bedrijvigheid. Ook hier geldt: wie gevonden wil worden, moet online zichtbaar zijn. Met lokale SEO en een professionele website zorg je dat potentiële klanten jou vinden en niet jouw concurrent.",
    body: "De kleinschaligheid van 't Harde is een voordeel: de doelgroep is concreet en de concurrentie beperkt. Wie nu investeert in online zichtbaarheid, kan snel een dominante positie in de lokale zoekresultaten opbouwen.",
    metaDescription: "Marketing bureau voor 't Harde en omgeving. VDH Agency helpt ondernemers in 't Harde groeien via SEO, Google Ads, social media en webdesign. Plan nu een gratis consult.",
    population: '~6.000',
    sectors: ['Zakelijke dienstverlening', 'Bouw', 'Detailhandel', 'Wonen & vastgoed'],
    marketInsight: "'t Harde is een relatief kleine kern met een beperkt aantal lokale ondernemers. Dat is een voordeel: de concurrentie in zoekresultaten is laag. Met een goed opgezette website en SEO-aanpak is het in 't Harde haalbaar om binnen enkele maanden de top 3 van Google te bereiken voor relevante zoekopdrachten — zonder grote budgetten.",
    relatedLinks: [
      {href: '/marketing-bureau-gelderland', label: 'Marketing Bureau Gelderland'},
      {href: '/marketing-bureau/oldebroek',  label: 'Marketing Bureau Oldebroek'},
      {href: '/marketing-bureau/wezep',      label: 'Marketing Bureau Wezep'},
    ],
  },
  {
    slug: 'elburg',
    name: 'Elburg',
    region: 'Gelderland',
    type: 'stad',
    intro: 'Elburg is een historische vestingstad met een levendige toeristische sector en een breed mkb-landschap. Als jouw bedrijf wil groeien in Elburg of de regio rondom het Veluwemeer, dan begint dat met online zichtbaarheid. VDH Agency bouwt de strategie die daarvoor nodig is.',
    body: 'De combinatie van toerisme en vaste bewoners maakt Elburg een interessante markt. Zowel bezoekers als lokale klanten zoeken online naar diensten in de regio. Met de juiste aanpak bereik je beide doelgroepen effectief.',
    metaDescription: 'Marketing bureau voor Elburg. VDH Agency helpt ondernemers in Elburg groeien via SEO, Google Ads, social media en webdesign. Plan nu een gratis consult.',
    population: '~23.000',
    sectors: ['Toerisme & horeca', 'Maritiem & watersport', 'Detailhandel', 'Ambacht'],
    marketInsight: 'Elburg is bekend om zijn intacte vestingstad en de ligging aan het Veluwemeer. Toeristen zoeken accommodatie, horeca en activiteiten — en die zoekopdrachten verlopen bijna altijd via Google. Tegelijk heeft Elburg een stevige lokale gemeenschap van ondernemers in zorg, bouw en dienstverlening die baat hebben bij betere vindbaarheid in de regio.',
    relatedLinks: [
      {href: '/marketing-bureau-gelderland',  label: 'Marketing Bureau Gelderland'},
      {href: '/marketing-bureau/harderwijk',  label: 'Marketing Bureau Harderwijk'},
      {href: '/marketing-bureau/nunspeet',    label: 'Marketing Bureau Nunspeet'},
    ],
  },
  {
    slug: 'wijhe',
    name: 'Wijhe',
    region: 'Overijssel',
    type: 'dorp',
    intro: 'Wijhe is een dorpskern in de gemeente Olst-Wijhe, op de grens van Gelderland en Overijssel. De online concurrentie vanuit Deventer en Zwolle is merkbaar. Met een scherpe lokale SEO-aanpak zorg je dat jouw bedrijf verschijnt voor klanten die in de buurt zoeken.',
    body: 'Als ondernemer in Wijhe profiteer je van een rustige markt met weinig directe concurrenten die serieus investeren in online marketing. Dat maakt het relatief eenvoudig om snel een sterke positie op te bouwen in de lokale zoekresultaten.',
    metaDescription: 'Marketing bureau voor Wijhe en gemeente Olst-Wijhe. VDH Agency helpt ondernemers in Wijhe groeien via SEO, Google Ads, social media en webdesign. Plan nu een gratis consult.',
    population: '~10.000',
    sectors: ['Agrarisch', 'Bouw & installatie', 'Zakelijke dienstverlening', 'Recreatie'],
    marketInsight: 'Wijhe ligt op de grens van Gelderland en Overijssel, aan de IJssel. De economie is gemengd: agrarisch, bouwbedrijven en dienstverleners. Concurrenten in de zoekresultaten komen met name uit Deventer en Zwolle. Met lokale SEO gericht op Wijhe én de gemeente Olst-Wijhe bereik je klanten die bewust kiezen voor iemand uit de eigen omgeving.',
    relatedLinks: [
      {href: '/marketing-bureau-overijssel', label: 'Marketing Bureau Overijssel'},
      {href: '/marketing-bureau/olst',       label: 'Marketing Bureau Olst'},
      {href: '/marketing-bureau/deventer',   label: 'Marketing Bureau Deventer'},
    ],
  },
  {
    slug: 'olst',
    name: 'Olst',
    region: 'Overijssel',
    type: 'dorp',
    intro: 'Olst is een IJsseldorp in Overijssel met een mix van agrarische en ambachtelijke bedrijvigheid. Veel lokale ondernemers zijn nog niet volledig online zichtbaar, wat kansen biedt voor wie dat wel is. VDH Agency helpt je die positie in te nemen.',
    body: 'De ligging van Olst langs de IJssel, dicht bij Deventer, maakt het een aantrekkelijke vestigingsplaats voor klanten uit een brede regio. Met goede online vindbaarheid hoef je niet alleen op mond-tot-mondreclame te vertrouwen.',
    metaDescription: 'Marketing bureau voor Olst. VDH Agency helpt ondernemers in Olst groeien via SEO, Google Ads, social media en webdesign. Plan nu een gratis consult.',
    population: '~13.000',
    sectors: ['Agrarisch & fruitteelt', 'Ambacht', 'Recreatie langs IJssel', 'Detailhandel'],
    marketInsight: 'Olst is een typisch IJsseldorp met een sterke agrarische identiteit en groeiende toeristische interesse. De fruitteelt en ambachtelijke sector vormen een herkenbaar profiel voor de regio. Ondernemers die inspelen op de lokale charme van Olst en de IJsselstreek trekken klanten van ver buiten de gemeente — mits ze online vindbaar zijn.',
    relatedLinks: [
      {href: '/marketing-bureau-overijssel', label: 'Marketing Bureau Overijssel'},
      {href: '/marketing-bureau/wijhe',      label: 'Marketing Bureau Wijhe'},
      {href: '/marketing-bureau/deventer',   label: 'Marketing Bureau Deventer'},
    ],
  },
  {
    slug: 'apeldoorn',
    name: 'Apeldoorn',
    region: 'Gelderland',
    type: 'stad',
    intro: 'Apeldoorn is een van de grotere steden in de regio, met een breed en competitief mkb-landschap. Online zichtbaar zijn in Apeldoorn vraagt om een doordachte strategie: de juiste zoekwoorden, een technisch sterke website en consistente social media aanwezigheid. VDH Agency levert dat, zonder bureaucratie.',
    body: 'Met meer dan 160.000 inwoners is Apeldoorn een markt met veel potentie. Tegelijk is de concurrentie groter dan in kleinere gemeenten. Een professionele online aanpak is hier geen luxe, maar een noodzaak om op te vallen.',
    metaDescription: 'Marketing bureau voor Apeldoorn. VDH Agency helpt ondernemers in Apeldoorn groeien via SEO, Google Ads, social media en webdesign. Plan nu een gratis consult.',
    population: '~165.000',
    sectors: ['ICT & software', 'Zakelijke dienstverlening', 'Zorg & welzijn', 'Retail & e-commerce', 'Overheid & onderwijs'],
    marketInsight: 'Apeldoorn is de grootste stad van de Veluwe met een gevarieerd mkb-landschap. De ICT-sector is prominent aanwezig, net als zakelijke dienstverleners, zorgaanbieders en retailers. De zoekvolumes zijn significant hoger dan in kleinere gemeenten — maar ook de concurrentie is groter. Een sterke SEO-strategie combineert brede merkbekendheid met specifieke zoekwoorden per dienst en wijk.',
    relatedLinks: [
      {href: '/seo-apeldoorn',                  label: 'SEO Apeldoorn'},
      {href: '/website-laten-maken-apeldoorn',  label: 'Website laten maken Apeldoorn'},
      {href: '/marketing-bureau/zutphen',       label: 'Marketing Bureau Zutphen'},
    ],
  },
  {
    slug: 'nunspeet',
    name: 'Nunspeet',
    region: 'Gelderland',
    type: 'dorp',
    intro: 'Nunspeet ligt aan de rand van de Veluwe en is een aantrekkelijke vestigingsplaats voor ondernemers die van rust én bereikbaarheid houden. De toeristische sector is actief, maar ook gewone mkb-bedrijven profiteren van goede online zichtbaarheid. VDH Agency zorgt voor een aanpak die past bij jouw markt.',
    body: 'Nunspeet heeft een sterke lokale gemeenschap met loyale klanten. Wie online goed zichtbaar is, bouwt vertrouwen op bij zowel toeristen als vaste bewoners. Dat vertaalt zich direct naar meer aanvragen en omzet.',
    metaDescription: 'Marketing bureau voor Nunspeet. VDH Agency helpt ondernemers in Nunspeet groeien via SEO, Google Ads, social media en webdesign. Plan nu een gratis consult.',
    population: '~27.000',
    sectors: ['Toerisme & recreatie', 'Retail', 'Bouw', 'Ambacht & lokale diensten'],
    marketInsight: 'Nunspeet ligt direct aan de Veluwe én de A28, wat het tot een populaire bestemming voor dag- en verblijfstoerisme maakt. Lokale ondernemers in horeca, recreatie en detailhandel profiteren van een constante stroom bezoekers. Een goed gepositioneerde website met seizoensgebonden content genereert het hele jaar aanvragen, ook buiten het hoogseizoen.',
    relatedLinks: [
      {href: '/marketing-bureau-gelderland', label: 'Marketing Bureau Gelderland'},
      {href: '/marketing-bureau/harderwijk', label: 'Marketing Bureau Harderwijk'},
      {href: '/marketing-bureau/elburg',     label: 'Marketing Bureau Elburg'},
    ],
  },
  {
    slug: 'kampen',
    name: 'Kampen',
    region: 'Overijssel',
    type: 'stad',
    intro: 'Kampen is een historische Hanzestad langs de IJssel met een actief ondernemersleven. De concurrentie met het nabijgelegen Zwolle is merkbaar, maar met lokale SEO en een sterke online aanwezigheid onderscheid jij je als de herkenbare lokale keuze voor klanten in Kampen en omgeving.',
    body: 'De historische charme en groeiende bevolking van Kampen bieden kansen voor ondernemers die online goed zichtbaar zijn. Klanten zoeken steeds vaker lokaal, en wie bovenaan staat bij die zoekopdrachten, wint.',
    metaDescription: 'Marketing bureau voor Kampen. VDH Agency helpt ondernemers in Kampen groeien via SEO, Google Ads, social media en webdesign. Plan nu een gratis consult.',
    population: '~54.000',
    sectors: ['Handel & logistiek', 'Bouw & infra', 'Historisch toerisme', 'Zakelijke dienstverlening', 'Zorg'],
    marketInsight: 'Kampen is een Hanzestad met een groeiende bevolking en een positie als regionale verzorgingskern naast Zwolle. De stad heeft veel mkb-bedrijven in handel, bouw en zorg. Zoekopdrachten met "Kampen" als locatie hebben doorgaans lagere concurrentie dan Zwolle, terwijl het zoekvolume substantieel is — dat maakt lokale SEO hier relatief snel effectief.',
    relatedLinks: [
      {href: '/marketing-bureau-overijssel', label: 'Marketing Bureau Overijssel'},
      {href: '/marketing-bureau/zwolle',     label: 'Marketing Bureau Zwolle'},
      {href: '/marketing-bureau/dalfsen',    label: 'Marketing Bureau Dalfsen'},
    ],
  },
  {
    slug: 'raalte',
    name: 'Raalte',
    region: 'Overijssel',
    type: 'gemeente',
    intro: 'Raalte is een dynamische gemeente in Salland met een sterke agrarische en industriële sector. Ondernemers in Raalte die online willen groeien, profiteren van een lokale SEO-aanpak die inspeelt op de specifieke zoekpatronen in de regio. VDH Agency kent die markt.',
    body: 'In Raalte en omgeving is de doelgroep concreet en de vraag naar lokale dienstverleners groot. Wie online vindbaar is, heeft een directe voorsprong op concurrenten die nog niet hebben geïnvesteerd in digitale zichtbaarheid.',
    metaDescription: 'Marketing bureau voor Raalte. VDH Agency helpt ondernemers in Raalte groeien via SEO, Google Ads, social media en webdesign. Plan nu een gratis consult.',
    population: '~37.000',
    sectors: ['Agrarisch & food', 'Industrie & productie', 'Zakelijke dienstverlening', 'Detailhandel'],
    marketInsight: 'Raalte heeft een sterke industriële en agrarische economie verspreid over meerdere kernen waaronder Heino en Broekland. Online marketing voor Raalte-bedrijven richt zich het best op het werkgebied van de klant: wie werkt voor particulieren in de gemeente profiteert van lokale SEO; wie B2B levert, vaart beter bij gerichte Google Ads campagnes gericht op de sector.',
    relatedLinks: [
      {href: '/marketing-bureau-overijssel', label: 'Marketing Bureau Overijssel'},
      {href: '/marketing-bureau/dalfsen',    label: 'Marketing Bureau Dalfsen'},
      {href: '/marketing-bureau/zwolle',     label: 'Marketing Bureau Zwolle'},
    ],
  },
  {
    slug: 'zwolle',
    name: 'Zwolle',
    region: 'Overijssel',
    type: 'stad',
    intro: 'Zwolle is de provinciehoofdstad van Overijssel en een van de snelst groeiende steden van Nederland. De online concurrentie is hoog, maar de markt is groot. Een sterke SEO-strategie, overtuigende website en actieve social media aanwezigheid zijn essentieel om op te vallen tussen honderden andere aanbieders.',
    body: 'Zwolle trekt bedrijven en inwoners uit een brede regio. Wie in Zwolle goed gevonden wordt via Google, bereikt niet alleen Zwollenaren maar ook klanten uit Kampen, Meppel en de gehele regio. Dat maakt online investeren hier extra lonend.',
    metaDescription: 'Marketing bureau voor Zwolle. VDH Agency helpt ondernemers in Zwolle groeien via SEO, Google Ads, social media en webdesign. Plan nu een gratis consult.',
    population: '~130.000',
    sectors: ['ICT & tech', 'Zakelijke dienstverlening', 'Onderwijs & zorg', 'Logistiek & handel', 'Horeca & retail'],
    marketInsight: 'Zwolle is een van de snelst groeiende steden van Nederland en het economisch hart van de regio Overijssel-Gelderland. De stad trekt bedrijven en personeel uit een brede regio. De concurrentie in zoekresultaten is hoog, maar de markt is groot genoeg om ook als newcomer een stevige positie op te bouwen. Investeren in zowel SEO als Google Ads geeft in Zwolle doorgaans het snelste rendement.',
    relatedLinks: [
      {href: '/seo-zwolle',                    label: 'SEO Zwolle'},
      {href: '/google-ads-zwolle',             label: 'Google Ads Zwolle'},
      {href: '/website-laten-maken-zwolle',    label: 'Website laten maken Zwolle'},
      {href: '/marketing-bureau-overijssel',   label: 'Marketing Bureau Overijssel'},
    ],
  },
  {
    slug: 'harderwijk',
    name: 'Harderwijk',
    region: 'Gelderland',
    type: 'stad',
    intro: 'Harderwijk is een compacte stad aan het Veluwemeer met een actief centrum en groeiende woonwijken. De toeristische sector is sterk, maar ook lokale dienstverleners profiteren van online zichtbaarheid. Met de juiste marketing bereik je zowel toeristen als de vaste lokale klantenkring die jij wilt bedienen.',
    body: 'Harderwijk heeft een unieke mix van toerisme, wonen en ondernemen. Wie online sterk staat, profiteert van bezoekers aan het Dolfinarium en het Veluwemeer, maar ook van de groeiende bevolking die lokale dienstverleners zoekt.',
    metaDescription: 'Marketing bureau voor Harderwijk. VDH Agency helpt ondernemers in Harderwijk groeien via SEO, Google Ads, social media en webdesign. Plan nu een gratis consult.',
    population: '~49.000',
    sectors: ['Toerisme & recreatie', 'Horeca', 'Detailhandel & retail', 'Bouw & vastgoed', 'Zorg'],
    marketInsight: 'Harderwijk combineert een groeiende woonstad met een van de best bezochte toeristische attracties van Nederland: het Dolfinarium. Dat zorgt voor een unieke mix van lokale klanten en toeristische bezoekers. Ondernemers in horeca en recreatie profiteren van seizoensgerichte content; bedrijven gericht op bewoners bouwen het best aan een duurzame SEO-aanwezigheid.',
    relatedLinks: [
      {href: '/marketing-bureau-gelderland', label: 'Marketing Bureau Gelderland'},
      {href: '/marketing-bureau/nunspeet',   label: 'Marketing Bureau Nunspeet'},
      {href: '/marketing-bureau/elburg',     label: 'Marketing Bureau Elburg'},
    ],
  },
  {
    slug: 'deventer',
    name: 'Deventer',
    region: 'Overijssel',
    type: 'stad',
    intro: 'Deventer is een Hanzestad met ruim 100.000 inwoners, gelegen aan de IJssel op de grens van Gelderland en Overijssel. Met een bruisend centrum, een sterke ICT-sector en een brede mkb-economie is Deventer een markt met veel potentie — en een stevige online concurrentie. Een doordachte strategie is hier essentieel.',
    body: 'Als ondernemer in Deventer concurreer je met aanbieders uit een brede regio. Een sterke website, lokale SEO en gerichte advertenties zijn geen luxe maar noodzaak. VDH Agency helpt je die positie op te bouwen, zonder grote bureaucratie.',
    metaDescription: 'Marketing bureau voor Deventer. VDH Agency helpt ondernemers in Deventer groeien via SEO, Google Ads, social media en webdesign. Plan nu een gratis consult.',
    population: '~105.000',
    sectors: ['ICT & technologie', 'Zakelijke dienstverlening', 'Onderwijs & zorg', 'Retail & horeca', 'Industrie & productie'],
    marketInsight: 'Deventer heeft een diverse economie met een opvallend sterke ICT-sector en een groeiend ecosysteem van techbedrijven. Daarnaast is er een brede basis van zakelijke dienstverleners, retailers en zorgaanbieders. Studenten en young professionals zorgen voor een actieve stad het hele jaar door. Zoekvolumes voor lokale diensten zijn significant — wie vindbaar is op "X Deventer" haalt aanvragen uit een aanzienlijk marktgebied.',
    relatedLinks: [
      {href: '/marketing-bureau-overijssel', label: 'Marketing Bureau Overijssel'},
      {href: '/marketing-bureau/zutphen',    label: 'Marketing Bureau Zutphen'},
      {href: '/marketing-bureau/zwolle',     label: 'Marketing Bureau Zwolle'},
    ],
  },
  {
    slug: 'zutphen',
    name: 'Zutphen',
    region: 'Gelderland',
    type: 'stad',
    intro: 'Zutphen is een historische vestingstad in Gelderland met ruim 47.000 inwoners en een levendige binnenstad. De stad maakt deel uit van de Stedendriehoek en heeft een gevarieerd mkb-landschap. Voor lokale ondernemers biedt online marketing een directe kans: de concurrentie in zoekresultaten is behapbaarder dan in Apeldoorn of Deventer.',
    body: 'De combinatie van een pittoresk centrum, een sterke juridische en zorgsector en een actief regionaal knooppunt maakt Zutphen interessant voor lokale marketing. Wie zichtbaar is op de juiste zoekopdrachten, pikt aanvragen op van klanten in de stad én de omliggende gemeenten.',
    metaDescription: 'Marketing bureau voor Zutphen. VDH Agency helpt ondernemers in Zutphen groeien via SEO, Google Ads, social media en webdesign. Plan nu een gratis consult.',
    population: '~47.000',
    sectors: ['Juridische dienstverlening', 'Zorg & welzijn', 'Detailhandel & horeca', 'Bouw & installatie', 'Transport & logistiek'],
    marketInsight: 'Zutphen maakt deel uit van de Stedendriehoek (samen met Apeldoorn en Deventer) en heeft een sterke positie als vestigingsplaats voor juridische dienstverleners en zorginstellingen. De concurrentie in zoekresultaten is doorgaans lager dan in Apeldoorn of Deventer, terwijl het zoekvolume substantieel is. Voor lokale ondernemers is dit een gunstige startpositie om snel bovenaan te komen in Google.',
    relatedLinks: [
      {href: '/marketing-bureau-gelderland', label: 'Marketing Bureau Gelderland'},
      {href: '/marketing-bureau/apeldoorn',  label: 'Marketing Bureau Apeldoorn'},
      {href: '/marketing-bureau/deventer',   label: 'Marketing Bureau Deventer'},
    ],
  },
  {
    slug: 'dalfsen',
    name: 'Dalfsen',
    region: 'Overijssel',
    type: 'gemeente',
    intro: 'Dalfsen is een landelijke gemeente in de regio Salland met ruim 30.000 inwoners, verspreid over meerdere kernen waaronder Dalfsen, Lemelerveld en Nieuwleusen. De gemeente heeft een sterke agrarische en industriële basis. Wie online vindbaar is, heeft hier een directe voorsprong op de lokale concurrentie.',
    body: 'In de gemeente Dalfsen werken veel ondernemers nog zonder serieuze online aanpak. Dat is een kans: wie nu investeert in lokale SEO en een professionele website, bouwt een positie op die moeilijk te evenaren is. VDH Agency helpt je dat voordeel te pakken.',
    metaDescription: 'Marketing bureau voor Dalfsen. VDH Agency helpt ondernemers in Dalfsen groeien via SEO, Google Ads, social media en webdesign. Plan nu een gratis consult.',
    population: '~30.000',
    sectors: ['Agrarisch & food', 'Bouw & installatie', 'Transport & logistiek', 'Recreatie & toerisme'],
    marketInsight: 'Dalfsen ligt in de regio Salland, ten zuiden van Zwolle. De economie is sterk agrarisch en industrieel van karakter, met een groeiende toeristische sector langs de Vecht (Vechtdal). Concurrenten in zoekresultaten komen voornamelijk uit Zwolle en Ommen. Door te focussen op "gemeente Dalfsen" en de afzonderlijke kernen als zoekterm, positioneer je jezelf als de herkenbare lokale keuze voor bewoners in de hele gemeente.',
    relatedLinks: [
      {href: '/marketing-bureau-overijssel', label: 'Marketing Bureau Overijssel'},
      {href: '/marketing-bureau/zwolle',     label: 'Marketing Bureau Zwolle'},
      {href: '/marketing-bureau/raalte',     label: 'Marketing Bureau Raalte'},
    ],
  },
];

const diensten = [
  {Icon: Search,    title: 'SEO & Vindbaarheid',    desc: 'Hoger in Google voor zoekopdrachten in jouw stad en regio. Technische SEO, lokale optimalisatie en zoekwoordstrategie afgestemd op jouw markt.'},
  {Icon: Share2,    title: 'Social Media Marketing', desc: 'Contentplanning, opnames, video editing en Meta Ads. Wij nemen jouw social media volledig uit handen, zodat jij je kunt focussen op je vak.'},
  {Icon: Globe,     title: 'Website op Maat',        desc: 'Een snelle, mobielvriendelijke website die bezoekers omzet in klanten. Gebouwd op een sterk SEO-fundament, volledig op maat voor jouw bedrijf.'},
  {Icon: BarChart2, title: 'Online Marketing',       desc: 'Google Ads, Meta Ads, e-mail marketing en copywriting. Alles wat nodig is om online te groeien, afgestemd op jouw budget en doelen.'},
];

function cityJsonLd(city: CityData) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': `${BASE}/marketing-bureau/${city.slug}`,
        name: 'VDH Agency',
        description: city.metaDescription,
        url: `${BASE}/marketing-bureau/${city.slug}`,
        telephone: '+31641027594',
        email: 'larsvanderhoek@gmail.com',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Heerde',
          addressRegion: 'Gelderland',
          addressCountry: 'NL',
        },
        areaServed: {
          '@type': 'City',
          name: city.name,
          containedInPlace: {'@type': 'State', name: city.region},
        },
        priceRange: '€€',
        knowsAbout: ['SEO', 'Google Ads', 'Social Media Marketing', 'Webdesign', 'Online Marketing'],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {'@type': 'ListItem', position: 1, name: 'Home', item: BASE},
          {'@type': 'ListItem', position: 2, name: `Marketing Bureau ${city.name}`, item: `${BASE}/marketing-bureau/${city.slug}`},
        ],
      },
    ],
  };
}

function faqJsonLd(faqs: {q: string; a: string}[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({q, a}) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: {'@type': 'Answer', text: a},
    })),
  };
}

export async function generateStaticParams() {
  return cities.map(city => ({locale: 'nl', stad: city.slug}));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{locale: string; stad: string}>;
}): Promise<Metadata> {
  const {locale, stad} = await params;
  if (locale !== 'nl') return {};
  const city = cities.find(c => c.slug === stad);
  if (!city) return {};

  const url = `${BASE}/marketing-bureau/${city.slug}`;
  const description = `Marketing bureau ${city.name}. VDH Agency helpt ondernemers in ${city.name} via SEO, Google Ads, social media en webdesign. Plan nu een gratis consult.`;
  return {
    title: `Marketing Bureau ${city.name}: Online Marketing & SEO`,
    description,
    alternates: {
      canonical: url,
      languages: {'x-default': url, nl: url},
    },
    openGraph: {url, description},
  };
}

export default async function LocatiePage({
  params,
}: {
  params: Promise<{locale: string; stad: string}>;
}) {
  const {locale, stad} = await params;
  if (locale !== 'nl') notFound();

  const city = cities.find(c => c.slug === stad);
  if (!city) notFound();

  const faqs = getCityFaqs(city);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(cityJsonLd(city))}}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(faqJsonLd(faqs))}}
      />

      {/* Hero */}
      <section className="bg-primary pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <Breadcrumb crumbs={[
              {label: 'Home', href: '/'},
              {label: `Marketing Bureau ${city.name}`},
            ]} />
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="block w-6 h-px bg-gold" />
              <span className="text-gold text-xs font-semibold tracking-widest uppercase flex items-center gap-2">
                <MapPin size={12} />
                {city.region}
              </span>
              <span className="text-white/20 text-xs">·</span>
              <span className="border border-white/15 text-white/50 text-xs font-medium px-2 py-0.5 rounded-sm">
                {typeLabel(city.type)}
              </span>
              <span className="text-white/20 text-xs">·</span>
              <span className="text-white/40 text-xs">{city.population} inwoners</span>
            </div>
            <h1 className="text-white font-black text-4xl lg:text-6xl leading-tight mb-5">
              Marketing Bureau {city.name}
            </h1>
            <p className="text-white/60 text-xl mb-4">{city.intro}</p>
            <p className="text-white/40 text-base mb-10">{city.body}</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="flex items-center gap-2 bg-gold text-primary font-bold text-sm px-7 py-3.5 rounded-sm hover:bg-gold-light transition-colors"
              >
                Gratis kennismakingsgesprek
                <ArrowRight size={15} />
              </Link>
              <Link
                href="/diensten"
                className="flex items-center gap-2 border border-white/20 text-white font-semibold text-sm px-7 py-3.5 rounded-sm hover:border-gold hover:text-gold transition-colors"
              >
                Bekijk alle diensten
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Diensten */}
      <section className="bg-light py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-2xl mb-16">
            <SectionLabel>Wat wij doen</SectionLabel>
            <h2 className="text-primary font-black text-3xl lg:text-4xl">
              Online marketing voor ondernemers in {city.name}
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {diensten.map(({Icon, title, desc}, i) => (
              <AnimatedSection key={title} delay={i * 0.08}>
                <div className="bg-white border border-primary/10 rounded-sm p-8 hover:border-gold/30 transition-colors h-full">
                  <div className="w-11 h-11 rounded-sm bg-gold/10 flex items-center justify-center mb-5">
                    <Icon size={20} className="text-gold" />
                  </div>
                  <h3 className="text-primary font-bold text-base mb-3">{title}</h3>
                  <p className="text-primary/60 text-sm leading-relaxed">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Marktprofiel */}
      <section className="bg-white py-20 lg:py-24 border-y border-primary/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection direction="left">
              <SectionLabel>Lokale markt</SectionLabel>
              <h2 className="text-primary font-black text-3xl mb-4">
                De markt in {typeArticle(city.type)} {city.type} {city.name}
              </h2>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-primary/40 text-sm">{city.population} inwoners</span>
                <span className="w-1 h-1 rounded-full bg-primary/20" />
                <span className="text-primary/40 text-sm">{city.region}</span>
                <span className="w-1 h-1 rounded-full bg-primary/20" />
                <span className="text-primary/40 text-sm capitalize">{typeLabel(city.type)}</span>
              </div>
              <p className="text-primary/70 text-base leading-relaxed">{city.marketInsight}</p>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.15}>
              <p className="text-primary/40 text-xs uppercase tracking-widest font-semibold mb-5">
                Sterke sectoren in {city.name}
              </p>
              <div className="flex flex-wrap gap-2">
                {city.sectors.map(sector => (
                  <span
                    key={sector}
                    className="bg-primary/5 text-primary/70 text-sm px-4 py-2 rounded-sm border border-primary/10"
                  >
                    {sector}
                  </span>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Waarom VDH */}
      <section className="bg-primary py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <SectionLabel light>Waarom VDH Agency</SectionLabel>
              <h2 className="text-white font-black text-3xl lg:text-4xl mb-6">
                Lokale kennis, meetbare resultaten
              </h2>
              <div className="flex flex-col gap-4">
                <p className="text-white/60 text-base leading-relaxed">
                  VDH Agency is gevestigd in Heerde en kent de regio. Wij begrijpen de markt in {typeArticle(city.type)} {city.type} {city.name} en omgeving, welke zoekwoorden lokale klanten gebruiken en hoe je je onderscheidt van concurrenten in de buurt.
                </p>
                <p className="text-white/60 text-base leading-relaxed">
                  Je werkt altijd direct met Lars van der Hoek. Geen accountmanagers, geen tussenlagen. Eerlijke communicatie, een realistisch plan en resultaten die je kunt meten.
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-3">
                {[
                  'Direct contact met de specialist',
                  'Transparante maandelijkse rapportage',
                  'Geen vaste contracten, eerlijke prijzen',
                  'Volledig online via videogesprek of telefoon',
                ].map(point => (
                  <div key={point} className="flex items-center gap-3">
                    <CheckCircle2 size={15} className="text-gold shrink-0" />
                    <span className="text-white/70 text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.15}>
              <div className="bg-white/5 border border-white/10 rounded-sm p-10">
                <h3 className="text-white font-bold text-lg mb-6">
                  Klaar om te groeien in {city.name}?
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-8">
                  Plan een gratis kennismakingsgesprek. We bespreken jouw situatie, doelen en wat online marketing voor jouw bedrijf in {typeArticle(city.type)} {city.type} {city.name} kan betekenen. Zonder verkooppraatjes, gewoon een eerlijk gesprek.
                </p>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 bg-gold text-primary font-bold text-sm px-7 py-3.5 rounded-sm hover:bg-gold-light transition-colors w-full"
                >
                  Gratis kennismakingsgesprek plannen
                  <ArrowRight size={15} />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-light py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-12">
            <SectionLabel>Veelgestelde vragen</SectionLabel>
            <h2 className="text-primary font-black text-3xl lg:text-4xl">
              Vragen over online marketing in {city.name}
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

      {/* Meer in de regio */}
      {city.relatedLinks && city.relatedLinks.length > 0 && (
        <section className="bg-white py-14 border-t border-primary/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <AnimatedSection>
              <h2 className="text-primary font-black text-lg mb-5">Meer voor jouw bedrijf in de regio</h2>
              <div className="flex flex-wrap gap-3">
                {city.relatedLinks.map(({href, label}) => (
                  <a
                    key={href}
                    href={href}
                    className="flex items-center gap-2 border border-primary/15 text-primary/60 hover:border-gold hover:text-gold text-sm px-4 py-2 rounded-sm transition-colors"
                  >
                    {label} <ArrowRight size={12} />
                  </a>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      <CTA />
    </>
  );
}
