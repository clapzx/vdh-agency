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
  citySpecific: string[];
  faqs: {q: string; a: string}[];
  relatedLinks?: {href: string; label: string}[];
}

function typeLabel(type: CityData['type']) {
  return type === 'stad' ? 'Stad' : type === 'dorp' ? 'Dorp' : 'Gemeente';
}

function typeArticle(type: CityData['type']) {
  return type === 'dorp' ? 'het' : 'de';
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
    citySpecific: [
      'VDH Agency is gevestigd in Heerde. Dat maakt ons het marketing bureau dat de Heerdense ondernemersmarkt het beste kent — van de ambachtelijke bedrijven in het buitengebied tot de winkels en dienstverleners in het centrum. We werken voor ondernemers in de gehele gemeente: Heerde, Wapenveld, Veessen, Vorchten en omliggende kernen.',
      'Voor ondernemers in Heerde is lokale SEO de sterkste investering. De meeste lokale aanbieders zijn online nauwelijks zichtbaar, terwijl klanten actief zoeken naar diensten in de eigen gemeente. Wie nu investeert in vindbaarheid op termen als "aannemer Heerde", "installateur Wapenveld" of "website laten maken gemeente Heerde", pakt een positie die zijn waarde voor jaren behoudt.',
      'Het voordeel van de Heerdense markt is de lage online concurrentie in combinatie met een groeiende vraag naar lokale diensten. Veel bedrijven in de gemeente werken nog uitsluitend op mond-tot-mondbasis — maar het zoekgedrag verandert. Wie nu een sterke online positie opbouwt in Heerde en omliggende kernen, profiteert van deze transitie en behoudt die positie voor de lange termijn.',
    ],
    faqs: [
      {q: 'VDH Agency is gevestigd in Heerde — betekent dat dat jullie ook fysiek langskomen?', a: 'Wij werken volledig online via videogesprekken, telefoon en e-mail. Dat houdt de kosten laag en maakt snelle communicatie mogelijk. Dat je in Heerde zit is voor ons wel een voordeel: we kennen de lokale markt, de namen van de kernen en de sectoren die hier actief zijn.'},
      {q: 'Welke bedrijven in Heerde hebben het meeste baat bij lokale SEO?', a: 'Bedrijven die lokale klanten bedienen — zoals aannemers, installateurs, kappers of fysiotherapeuten — profiteren het meest van lokale SEO in Heerde. Zodra iemand zoekt op "[jouw dienst] Heerde" of "[jouw dienst] Wapenveld", wil je bovenaan staan.'},
      {q: 'Is er veel concurrentie op Google voor zoekopdrachten in Heerde?', a: 'In Heerde is de online concurrentie voor lokale diensten laag vergeleken met grotere steden. Wie nu investeert in lokale vindbaarheid in Heerde en de omliggende kernen, pakt een positie die moeilijk te evenaren is — zeker nu het digitale zoekgedrag van inwoners snel groeit.'},
      {q: 'Wat is het verschil tussen een groot nationaal bureau en VDH Agency voor een Heerdense ondernemer?', a: 'Een groot bureau werkt met accountmanagers die jouw dossier doorspelen. Bij VDH Agency werk je direct met Lars van der Hoek: de specialist die jouw strategie bouwt, uitvoert en rapporteert. Geen overhead, geen vertraging. Voor een lokale ondernemer in Heerde is dat het verschil.'},
    ],
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
    citySpecific: [
      'Hattem ligt vijf kilometer ten zuiden van Zwolle — en dat is tegelijk de uitdaging én de kans voor lokale ondernemers. Klanten die zoeken naar een marketing bureau in Hattem willen geen anoniem groot bureau, maar een specialist die de lokale markt kent. VDH Agency biedt precies dat: persoonlijke aanpak, directe communicatie en een strategie specifiek gericht op Hattem en omgeving.',
      'De zoekwoorden rondom "marketing bureau Hattem" en "SEO Hattem" zijn minder competitief dan in Zwolle, maar trekken klanten aan die klaar zijn om zaken te doen. Voor ondernemers in horeca, toerisme, bouw en zakelijke dienstverlening is online zichtbaarheid in Hattem een onderscheidende factor: veel lokale concurrenten zijn nog niet vindbaar op Google. Dat is jouw kans om de positie in te nemen die ze later moeilijk kunnen pakken.',
      'Hattem heeft het karakter van een compacte, zelfstandige stad met een eigen identiteit naast het grotere Zwolle. Die identiteit is commercieel waardevol: klanten die bewust zoeken op "Hattem" willen een lokale aanbieder. De online markt voor Hattemse zoektermen is nog relatief onaangeroerd — wie nu instapt, pakt een positie die later moeilijker te bereiken is.',
    ],
    faqs: [
      {q: 'Is Hattem te klein voor een serieuze online marketingstrategie?', a: 'Absoluut niet. Juist voor een stad als Hattem is lokale SEO effectief: het zoekvolume is substantieel, terwijl de concurrentie in de zoekresultaten veel lager is dan in Zwolle. Een ondernemer in Hattem die goed vindbaar is op Google, trekt klanten van zowel in de stad als uit de omgeving.'},
      {q: 'Hoe concurreer ik als Hattemse ondernemer met bedrijven uit Zwolle?', a: 'Door specifiek te focussen op "Hattem" als zoekterm. Klanten die zoeken op "[jouw dienst] Hattem" willen bewust een lokale aanbieder. Met een geoptimaliseerde website en lokale SEO verschijn jij bovenaan — terwijl Zwolse bedrijven op die specifieke zoekopdracht niet vindbaar zijn.'},
      {q: 'Wat zijn de sterkste online kansen voor de Hattemse horeca en toerisme?', a: 'Hattems vestingstadprofiel en de nabijheid van de IJssel trekken dagjesmensen. Voor horeca in Hattem werken Google Maps-optimalisatie, goede reviews en content rondom "dagje Hattem" het best. Wij helpen je zichtbaar te worden op precies de zoekopdrachten die toeristen gebruiken.'},
      {q: 'Hoe lang duurt het voordat ik resultaat zie van SEO in Hattem?', a: 'Voor lokale SEO in Hattem zie je doorgaans binnen 2 tot 3 maanden meetbare verbeteringen in positie en verkeer. Hattem heeft een relatief lage concurrentie op lokale zoektermen, waardoor resultaten sneller zichtbaar zijn dan in grotere steden. Google Ads geeft direct resultaat, al vanaf de eerste dag.'},
    ],
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
    citySpecific: [
      'Epe is een groene gemeente in de Veluwe met ruim 33.000 inwoners en een bijzondere combinatie van toerisme, detailhandel en lokale dienstverleners. Online marketing in Epe vraagt om twee benaderingen tegelijk: bereikbaar zijn voor vaste bewoners die lokale diensten zoeken, én zichtbaar zijn voor toeristen die accommodatie, horeca of activiteiten zoeken in de Veluwe.',
      'Voor een installateur of bouwbedrijf in Epe is lokale SEO op termen als "installateur Epe" of "aannemer gemeente Epe" de sterkste strategie. Voor een vakantiehuis, restaurant of activiteitencentrum werken seizoensgerichte content en Google Ads het best om toeristische zoekopdrachten vanuit de hele Randstad te onderscheppen. Als marketing bureau voor Epe begrijpen wij beide werelden.',
      'De gemeente Epe heeft een marktprofiel dat het hele jaar door actief is: de vaste bevolking zorgt voor continue vraag naar diensten, terwijl toeristen van april tot oktober het volume verhogen. Online marketing die inspeelt op beide doelgroepen creëert een constante aanvraagenstroom — ook buiten het toeristische seizoen.',
    ],
    faqs: [
      {q: 'Wat is de beste online marketingstrategie voor een Veluws toeristenbedrijf in Epe?', a: 'Een combinatie van seizoensgerichte SEO-content (zoals "vakantiehuisje Epe zomer" of "fietsverhuur Veluwe"), Google Maps-optimalisatie en gerichte Google Ads in de piekmaanden. Wij bouwen een strategie die ook buiten het hoogseizoen aanvragen genereert — via content voor de stillere periodes.'},
      {q: 'Heeft online marketing zin voor een lokale dienstverlener in de gemeente Epe?', a: 'Ja. Zoekopdrachten als "loodgieter Epe" of "boekhoudkantoor gemeente Epe" worden regelmatig ingevoerd door inwoners die lokale specialisten zoeken. Met lokale SEO en een goede Google Business-pagina sta jij bovenaan wanneer potentiële klanten zoeken.'},
      {q: 'Is er concurrentie voor toeristische zoektermen rondom Epe en de Veluwe?', a: 'Zeker. Accommodaties en restaurants van de gehele Veluwe concurreren op dezelfde toeristische zoektermen. Wij helpen je je te onderscheiden via een sterke website, unieke content en gerichte SEO die inspeelt op de specifieke charme van de Epe-regio.'},
      {q: 'Werkt VDH Agency ook voor agrarische bedrijven in Epe?', a: 'Ja. De gemeente Epe heeft een sterke agrarische sector en steeds meer boerderijbedrijven en agri-toerismebedrijven ontdekken online marketing. Wij helpen agrarische ondernemers in Epe met een website en SEO die inspeelt op directe verkoop, recreatie of B2B-inkoop.'},
    ],
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
    citySpecific: [
      'Wezep is een van de snelst groeiende woonkernen in de regio, met een toenemend aantal ondernemers en een sterk groeiende lokale vraag naar diensten. De ligging langs de A28 en directe verbindingen naar Zwolle en Apeldoorn maken Wezep aantrekkelijk als vestigingsplaats — maar de online concurrentie voor lokale zoektermen is nog beperkt.',
      'Ondernemers die nú investeren in lokale SEO op termen als "marketing bureau Wezep" en "[jouw dienst] Wezep", bouwen een online positie op die moeilijk te evenaren is zodra de concurrentie wakker wordt. Met de juiste aanpak sta je snel bovenaan voor klanten die dichtbij zijn en klaar zijn te kopen — in Wezep én de gehele gemeente Oldebroek.',
      'Wezep bevindt zich in een gunstige groeifase: de kern groeit, de lokale bedrijvigheid neemt toe en de online markt is nog beperkt ingericht. Wie nú een sterke digitale positie opbouwt in Wezep, legt een fundament dat steeds meer waard wordt naarmate de kern verder groeit. De combinatie van groei én lage concurrentie is een zeldzame combinatie in de regio.',
    ],
    faqs: [
      {q: 'Is Wezep groot genoeg om op te focussen voor lokale SEO?', a: 'Ja. Wezep groeit snel als woonkern langs de A28 en heeft een toenemend aantal ondernemers en inwoners. Zoekopdrachten met "Wezep" als locatie hebben weinig concurrentie, wat het relatief eenvoudig maakt om snel bovenaan te staan. Wie nu instapt, pakt een vroege voorsprong.'},
      {q: 'Moet ik als Wezeps ondernemer ook focussen op de gemeente Oldebroek?', a: 'Dat hangt af van jouw werkgebied. Als je klanten bedient in de gehele gemeente, is het slim om zowel op "Wezep" als op "gemeente Oldebroek" te optimaliseren. VDH Agency helpt je bepalen welke zoektermen en locaties de meeste aanvragen opleveren voor jouw specifieke situatie.'},
      {q: 'Concurreer ik als Wezeps bedrijf ook met aanbieders uit Zwolle?', a: 'In de bredere zoekresultaten wel. Maar op hyperlocale termen als "installateur Wezep" of "bouwbedrijf gemeente Oldebroek" zijn Zwolse bedrijven minder zichtbaar. Dat zijn de zoekopdrachten waarbij klanten bewust kiezen voor een lokale aanbieder.'},
      {q: 'Kan ik als startende ondernemer in Wezep al beginnen met online marketing?', a: 'Absoluut. Juist voor startende ondernemers in Wezep is een goede website met basis-SEO de sterkste investering. Je hoeft niet groot te zijn om vindbaar te zijn. VDH Agency werkt zonder minimumsdrempel en stelt een aanpak op die past bij jouw budget en fase.'},
    ],
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
    citySpecific: [
      "De gemeente Oldebroek omvat meerdere kernen: Oldebroek, Wezep, 't Harde, Oosterwolde en Noordeinde. Samen hebben zij ruim 23.000 inwoners en een actieve ondernemersgemeenschap, met name in de agrarische, bouw- en transportsector. Online marketing in Oldebroek vraagt om kennis van die lokale diversiteit en de specifieke zoekpatronen per kern.",
      "Als marketing bureau voor bedrijven in de gemeente Oldebroek adviseren wij een gelaagde aanpak: een solide website met pagina's per dienst of kern, aangevuld met lokale SEO die jou vindbaar maakt voor klanten in de gehele gemeente. Aangevuld met Google Ads voor snelle resultaten heb je een strategie die zowel op korte als lange termijn werkt.",
      'De gemeente Oldebroek biedt een markt die bij uitstek geschikt is voor een gefaseerde aanpak: begin met de kern met het hoogste zoekvolume (Wezep), en breid daarna uit naar de andere kernen. Die aanpak maximaliseert het rendement in elke fase en bouwt stap voor stap naar een brede gemeentebrede aanwezigheid.',
    ],
    faqs: [
      {q: 'Welke kern van de gemeente Oldebroek heeft de meeste online kansen?', a: 'Wezep heeft het grootste inwonersaantal en het meeste groei qua zoekopdrachten. Maar ook Oldebroek zelf en \'t Harde hebben specifieke zoektermen met weinig concurrentie. VDH Agency analyseert per kern welke zoektermen en strategie het meeste opleveren voor jouw bedrijf.'},
      {q: 'Is online marketing geschikt voor agrarische bedrijven in Oldebroek?', a: 'Ja. De gemeente Oldebroek heeft een sterke agrarische sector en steeds meer boeren, loonwerkers en agrarische toeleveranciers zoeken naar online klanten of medewerkers. Wij helpen met een gerichte aanpak: van een professionele bedrijfswebsite tot campagnes gericht op B2B-inkoop of directe verkoop.'},
      {q: 'Hoeveel zoekvolume is er voor lokale termen in de gemeente Oldebroek?', a: 'Per kern is het zoekvolume beperkt maar aanwezig — en met weinig concurrenten is zelfs een klein volume waardevol. Door de kernen samen te behandelen bouw je een solide lokale aanwezigheid die in de gehele gemeente aanvragen genereert.'},
      {q: 'Wat is voor een transportbedrijf in Oldebroek de beste online aanpak?', a: 'Transportbedrijven in Oldebroek profiteren het meest van B2B-gerichte content en gerichte Google Ads-campagnes op sectorspecifieke termen. Lokale SEO is voor B2B-transport minder relevant; een professionele website die vertrouwen wekt en gerichte advertenties zijn hier effectiever.'},
    ],
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
    citySpecific: [
      'Vaassen is een dorp op de grens van de Veluwe en de IJsselvallei, ingeklemd tussen Epe en Apeldoorn. Die ligging biedt een interessante marktkans: klanten zoeken vaak lokaler dan je verwacht. Een goed geoptimaliseerde pagina voor "installateur Vaassen" of "aannemer Vaassen" trekt klanten die bewust kiezen voor de nabijheid — in plaats van een anoniem bureau uit Apeldoorn.',
      'Voor ondernemers in Vaassen is lokale SEO de meest directe weg naar nieuwe aanvragen. Met een relatief beperkt zoekvolume maar ook beperkte concurrentie, is het haalbaar om binnen 2 tot 4 maanden bovenaan te staan in de lokale zoekresultaten voor Vaassen en omgeving. Aangevuld met een professionele website die vertrouwen wekt, zet je dat verkeer direct om in klanten.',
      'De ligging van Vaassen tussen twee grotere plaatsen is een strategisch voordeel voor lokale SEO: je concurreert niet direct met het grote volume in Apeldoorn, maar bent wél zichtbaar voor klanten die in de Vaassen-omgeving zoeken. De concurrentiedruk op hyperlokale Vaassen-zoektermen is laag — een kleine investering levert hier relatief snel resultaat.',
    ],
    faqs: [
      {q: 'Zijn er genoeg potentiële klanten in Vaassen om lokale SEO de moeite waard te maken?', a: 'Voor de meeste sectoren zeker. Vaassen heeft meer dan 10.000 inwoners, en voor een installateur, kapper of bouwbedrijf is zelfs een handvol lokale klanten per maand al waardevol. Bovendien bereik je ook klanten uit Epe en de directe omgeving.'},
      {q: 'Hoe positioneer ik mijn bouw- of installatiebedrijf in Vaassen online?', a: 'Door te focussen op lokale zoektermen zoals "installateur Vaassen", "aannemer Vaassen" of "dakdekker Epe-Vaassen". Aangevuld met een goede Google Business-pagina en reviews van lokale klanten ben je snel de eerste keuze voor inwoners die iemand uit de buurt zoeken.'},
      {q: 'Heeft het zin om ook te optimaliseren voor Apeldoorn als ik in Vaassen zit?', a: 'Als je ook klanten in Apeldoorn bedient, ja. Apeldoorn heeft een groter zoekvolume maar ook meer concurrentie. Begin met Vaassen en directe omgeving (weinig concurrentie, snelle resultaten) en breid daarna richting Apeldoorn uit op langere termijn.'},
      {q: 'Werkt Google Ads ook voor een klein bedrijf in Vaassen?', a: 'Ja. Google Ads werkt ook met een beperkt budget, zeker in een markt als Vaassen waar de kosten per klik laag zijn. Je betaalt alleen als iemand echt klikt, en je kunt de advertenties strak inrichten op Vaassen en omliggende plaatsen. Wij helpen je een campagne opzetten die past bij jouw budget.'},
    ],
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
    citySpecific: [
      "'t Harde is een kleine kern in de gemeente Oldebroek met een beperkt aantal ondernemers. Dat is juist het voordeel: de concurrentie voor lokale zoektermen als \"marketing bureau 't Harde\" is laag. Wie nú investeert in een goede website en lokale SEO, kan binnen korte tijd de eerste positie in Google bereiken voor relevante zoekopdrachten in de kern en directe omgeving.",
      "Voor ondernemers in 't Harde werkt een combinatie van lokale SEO en een professionele website het best. Kleine kernen als 't Harde scoren goed op hyperlocale zoektermen — en met weinig concurrenten is het relatief eenvoudig om een sterke positie in te nemen. Aangevuld met Google Ads ben je ook direct zichtbaar voor klanten die nú op zoek zijn.",
      "In 't Harde zijn de meeste ondernemers nog niet actief met serieuze online marketing. Dat is een unieke kans voor wie als eerste een sterke digitale positie inneemt. Met een beperkt budget is het in 't Harde haalbaar om binnen enkele maanden de dominante online aanwezigheid op te bouwen voor relevante lokale zoekopdrachten.",
    ],
    faqs: [
      {q: "Is 't Harde te klein voor een effectieve SEO-aanpak?", a: "Juist niet. In kleine kernen als 't Harde is de online concurrentie minimaal. Dat betekent dat je met een relatief beperkt budget snel de eerste positie kunt bereiken voor lokale zoekopdrachten. Een installateur of bouwbedrijf in 't Harde die bovenaan staat op Google, trekt klanten die anders nergens heen gaan."},
      {q: "Welke sectoren zijn het meest actief in 't Harde en omgeving?", a: "In 't Harde en de gemeente Oldebroek zijn bouw, zakelijke dienstverlening en wonen & vastgoed de meest prominente sectoren. Ondernemers in deze sectoren profiteren sterk van online zichtbaarheid, omdat klanten steeds vaker via Google zoeken naar lokale aanbieders."},
      {q: "Moet ik als ondernemer in 't Harde ook focussen op aangrenzende plaatsen?", a: "Dat is slim als je een werkgebied hebt dat verder reikt dan 't Harde zelf. Zoektermen als 'aannemer gemeente Oldebroek' of 'dienstverlener Wezep' zijn aanvullingen die meer bereik geven zonder dat je de lokale focus verliest."},
      {q: "Hoe snel kan ik bovenaan Google staan voor zoekopdrachten in 't Harde?", a: "In 't Harde is de concurrentie voor lokale zoektermen laag. Met een goede website en gerichte SEO is het realistisch om binnen 2 tot 4 maanden een top 3-positie te bereiken voor de relevante termen in en rond 't Harde. Google Ads geeft direct resultaat vanaf dag één."},
    ],
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
    citySpecific: [
      'Elburg is een historische vestingstad aan het Veluwemeer met ruim 23.000 inwoners en een levendige toeristische sector. Online marketing in Elburg vraagt om een aanpak die inspeelt op twee doelgroepen: vaste bewoners die lokale diensten zoeken, én toeristen die Elburg bezoeken voor het Veluwemeer, de vestingstad of watersportactiviteiten.',
      'Als marketing bureau voor ondernemers in Elburg zetten wij in op een aanpak die beide segmenten bedient. Voor lokale dienstverleners in bouw, zorg en handel is SEO op termen als "marketing bureau Elburg" en gerelateerde zoekwoorden de sterkste investering. Voor horeca en recreatiebedrijven werkt een combinatie van seizoensgerichte content en Google Ads het best om op het juiste moment zichtbaar te zijn.',
      'De combinatie van een historische vestingstad en een watersportbestemming maakt Elburg online interessant vanuit twee hoeken: toeristische content rond de vestingwal en het Veluwemeer enerzijds, en lokale dienstverlening voor de vaste bevolking anderzijds. Ondernemers die beide angles benutten, bouwen een online aanwezigheid die het hele jaar door relevant is.',
    ],
    faqs: [
      {q: 'Hoe onderscheid ik mijn horecabedrijf in Elburg online van de concurrentie?', a: 'Door te focussen op wat Elburg uniek maakt: de vestingstad, het Veluwemeer en de watersportcultuur. Content die inspeelt op "restaurant Elburg vestingstad" of "terras aan het Veluwemeer" trekt toeristen die bewust naar Elburg reizen. Google Maps-optimalisatie en actieve reviews versterken dit effect.'},
      {q: 'Is er veel concurrentie voor online marketing in Elburg?', a: 'Voor algemene zoektermen als "marketing bureau Elburg" is de concurrentie beperkt — weinig bureaus richten zich specifiek op Elburg. Voor toeristische termen is de concurrentie groter, maar met de juiste content en SEO-aanpak is een goede positie haalbaar binnen enkele maanden.'},
      {q: 'Werkt VDH Agency ook voor watersportbedrijven of jachthavens bij Elburg?', a: 'Ja. De watersportsector rond het Veluwemeer heeft specifieke zoekpatronen: "jachthaven Veluwemeer", "zeilschool Elburg" of "sloepverhuur Elburg". Met gerichte SEO en seizoensgerichte content zorg je dat jij die bezoekers aantrekt in de periodes dat zij zoeken.'},
      {q: 'Moet ik naast lokale SEO ook Google Ads inzetten voor mijn bedrijf in Elburg?', a: 'Dat hangt af van jouw doelstellingen en seizoenspatroon. Voor toeristische bedrijven in Elburg zijn Google Ads in het voor- en hoogseizoen effectief om piekperiodes maximaal te benutten. Voor lokale dienstverleners gericht op bewoners is SEO doorgaans een duurzamere investering.'},
    ],
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
    citySpecific: [
      'Wijhe is een dorpskern in de gemeente Olst-Wijhe met ruim 17.000 inwoners — en een lokale markt met opvallend weinig online concurrentie. Ondernemers die zoektermen als "marketing bureau Wijhe" of "[jouw dienst] Wijhe" goed optimaliseren, kunnen snel bovenaan staan in Google. De concurrentie komt hoofdzakelijk uit Deventer en Zwolle, maar lokale klanten geven de voorkeur aan een herkenbare aanbieder dicht bij huis.',
      'Juist in een gemeente als Olst-Wijhe, waar de online markt nog relatief onaangeroerd is, loont vroeg investeren. Een professionele website op een sterk SEO-fundament, aangevuld met eventuele Google Ads-campagnes voor directe zichtbaarheid, geeft je een voorsprong die moeilijk in te halen is. Als marketing bureau voor Wijhe helpen wij je die positie snel in te nemen.',
      'Wijhe en de gemeente Olst-Wijhe bevinden zich in een marktfase die gunstig is voor vroege movers. Online marketing voor Wijhese zoektermen is nog nauwelijks ingezet door lokale concurrenten, terwijl het zoekgedrag van de bevolking snel digitaliseert. Wie nu handelt, bouwt een voorsprong die moeilijk in te halen is als de markt maturder wordt.',
    ],
    faqs: [
      {q: 'Is er veel online concurrentie voor bedrijven in Wijhe?', a: 'De online concurrentie voor lokale zoektermen in Wijhe is laag. Met relatief weinig investering kun je snel bovenaan staan in Google voor relevante zoekopdrachten in Wijhe en de gemeente Olst-Wijhe. Concurrenten komen hoofdzakelijk uit Deventer en Zwolle, maar die focussen zelden specifiek op Wijhe.'},
      {q: 'Hoe bereik ik als ondernemer in Wijhe ook klanten uit Deventer of Zwolle?', a: 'Door naast "Wijhe" ook te optimaliseren voor bredere regiozoekopdrachten. Een installateur in Wijhe kan ook klanten trekken die zoeken op "installateur regio Deventer" of "bouwbedrijf IJsselstreek". Wij helpen je bepalen welke combinatie het meeste oplevert voor jouw situatie.'},
      {q: 'Wat maakt de markt in de gemeente Olst-Wijhe interessant voor online marketing?', a: 'De gemeente heeft bijna 18.000 inwoners en een diverse economie met agrarische, ambachtelijke en dienstverlenende bedrijven. Online marketing is hier nog weinig ingezet, wat vroege movers een structurele voorsprong geeft die moeilijk is in te halen als de markt eenmaal rijper wordt.'},
      {q: 'Werkt VDH Agency ook voor agrarische ondernemers langs de IJssel in Wijhe?', a: 'Ja. De IJsselstreek heeft een sterke agrarische sector, en steeds meer agrariërs ontdekken de kracht van online marketing — of het nu gaat om directe verkoop, agri-toerisme of het aantrekken van personeel. Wij bouwen een aanpak die past bij het specifieke karakter van het agrarische bedrijf in Wijhe.'},
    ],
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
    citySpecific: [
      'Olst is een IJsseldorp in Overijssel, deel van de gemeente Olst-Wijhe, met een sterke agrarische en ambachtelijke identiteit. De fruitteelt langs de IJssel geeft Olst een eigen karakter — maar ook andere sectoren, waaronder bouw, zorg en recreatie, profiteren van een sterkere online aanwezigheid in deze regio.',
      'In de gemeente Olst-Wijhe is de online concurrentie voor lokale zoektermen laag. Bedrijven die investeren in lokale SEO op "marketing bureau Olst" en gerelateerde zoekwoorden, kunnen snel een dominante positie opbouwen. Aangevuld met een professionele website die vertrouwen wekt, zet je bezoekers direct om in aanvragen — ook vanuit omliggende kernen en gemeenten.',
      'De agrarische identiteit van Olst en de toeristische waarde van de IJsselstreek creëren een interessante marktdualiteit. Bedrijven die beide elementen combineren in hun online aanwezigheid — lokale dienstverlening én IJsselstreektoerisme — bereiken een breder en meer divers publiek dan concurrenten die maar één van beide aanpakken.',
    ],
    faqs: [
      {q: 'Heeft online marketing zin voor een agrarisch bedrijf in Olst?', a: 'Ja. De fruitteelt en agrarische sector in Olst-Wijhe bieden diverse online kansen: directe verkoop, agri-toerisme en het werven van seizoenpersoneel. Met de juiste website en SEO bereik je klanten die bewust kiezen voor streekproducten uit de IJsselstreek.'},
      {q: 'Wat zijn de beste zoektermen voor ondernemers in Olst?', a: 'Dat hangt af van jouw sector. Voor dienstverleners gericht op inwoners werken termen als "[dienst] Olst" of "[dienst] gemeente Olst-Wijhe". Voor toeristische bedrijven zijn termen als "IJsseldorp Olst", "fruitpluk Overijssel" of "uitje IJsselstreek" effectief. Wij doen een gratis zoekwoordanalyse als startpunt.'},
      {q: 'Is Olst een te kleine kern om effectief online te marketen?', a: 'Nee. In kleine kernen als Olst is de concurrentie juist laag, wat het makkelijker maakt om snel bovenaan te staan. Als je Olst combineert met de bredere gemeente Olst-Wijhe als doelgebied, heb je een markt van bijna 18.000 inwoners met relatief weinig online concurrentie.'},
      {q: 'Hoe onderscheid ik mijn recreatiebedrijf langs de IJssel in Olst?', a: 'Door in te spelen op de unieke positie van Olst aan de IJssel. Content over "kanotochten IJssel", "fietsen IJsseldal" of "uitje Olst aan de IJssel" trekt bezoekers die gericht zoeken naar recreatie in deze regio. Wij bouwen een contentstrategie die aansluit bij de seizoensvraag én het unieke karakter van de IJsselstreek.'},
    ],
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
    citySpecific: [
      'Apeldoorn is de grootste stad van de Veluwe met meer dan 165.000 inwoners en een van de meest gevarieerde mkb-markten van de regio. ICT-bedrijven, zakelijke dienstverleners, zorginstellingen, retailers en horecaondernemers concurreren allemaal om zichtbaarheid in de Apeldoornse zoekresultaten. In een markt als Apeldoorn maakt het verschil tussen een generieke website en een professionele online strategie.',
      "Voor ondernemers in Apeldoorn is SEO op stadsniveau — zoals \"marketing bureau Apeldoorn\" — het startpunt, aangevuld met specifieke landingspagina's per dienst of wijk voor meer gerichte zichtbaarheid. Google Ads zorgt op de kortere termijn voor directe aanvragen, terwijl SEO de duurzame basis legt. Wij analyseren de concurrentie in Apeldoorn en bouwen een strategie die realistisch en effectief is.",
      'In een grote markt als Apeldoorn is differentiatie essentieel. Concurreren op brede termen als "marketing bureau Apeldoorn" is haalbaar maar tijdrovend. Een slimmere aanpak combineert sterke posities op niche- en dienstspecifieke zoektermen — sneller bereikbaar, hogere koopintentie — met geleidelijke opbouw van autoriteit op bredere termen. Dat geeft op beide tijdshorizonnen resultaat.',
    ],
    faqs: [
      {q: 'Hoe val ik op als ondernemer in een grote stad als Apeldoorn?', a: 'Door te kiezen voor een bureau dat jou behandelt als individu. VDH Agency werkt direct met jou, zonder accountmanagers. In een stad als Apeldoorn is dat onderscheid merkbaar: je krijgt een strategie op maat in plaats van een standaardpakket.'},
      {q: 'Welke sectoren in Apeldoorn zijn het meest competitief online?', a: 'ICT, zakelijke dienstverlening en zorg hebben in Apeldoorn de hoogste online concurrentie. Retailers en horecaondernemers hebben doorgaans een iets makkelijker startpositie. In alle sectoren geldt: een sterk SEO-fundament en gerichte Google Ads-campagnes zijn essentieel om op te vallen.'},
      {q: 'Is lokale SEO effectief voor een B2B-bedrijf in Apeldoorn?', a: 'Ja, maar de aanpak verschilt van B2C. Voor B2B in Apeldoorn werkt een combinatie van sector-specifieke landingspagina\'s en gerichte Google Ads beter dan pure lokale SEO. Wij bouwen een B2B-strategie die past bij de schaal en het profiel van jouw bedrijf.'},
      {q: 'Hoe lang duurt het om een merkbare positie op te bouwen in Apeldoorn?', a: 'In een grote stad als Apeldoorn duurt het langer dan in kleinere gemeenten: reken op 3 tot 6 maanden voor SEO-resultaten op competitieve termen. Google Ads geeft direct bereik. Wij combineren beide voor een aanpak die zowel op korte als lange termijn werkt.'},
    ],
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
    citySpecific: [
      'Nunspeet combineert de rust van de Veluwe met uitstekende bereikbaarheid via de A28 en NS-verbindingen naar Amsterdam en Zwolle. Met ruim 27.000 inwoners en een actieve toeristische sector biedt Nunspeet ondernemers een dubbele markt: vaste klanten uit de gemeente én toeristen die de Veluwe bezoeken.',
      'Als marketing bureau voor ondernemers in Nunspeet zetten wij in op een aanpak die beide doelgroepen bedient. Lokale SEO voor de vaste klantenkring — gericht op termen als "marketing bureau Nunspeet" en "[dienst] Nunspeet" — vormt de duurzame basis. Seizoensgerichte content en Google Ads trekken toeristische bezoekers in de juiste periodes. Samen zorgen zij voor aanvragen het hele jaar door.',
      'Het toeristische profiel van Nunspeet creëert een waardevolle aanvulling op de vaste lokale klantenkring. Ondernemers die goed scoren op toeristische zoekwoorden, bereiken klanten die al op weg zijn naar de Veluwe en spontaan beslissingen nemen over horeca, winkelen en activiteiten. Die combinatie van locals en bezoekers maakt Nunspeet een markt met breed jaarrond potentieel.',
    ],
    faqs: [
      {q: 'Hoe profiteer ik als Nunspeets ondernemer optimaal van het toerisme op de Veluwe?', a: 'Door in te spelen op toeristische zoekopdrachten die bezoekers gebruiken vóór vertrek: "dagje Veluwe", "restaurant Nunspeet", "kamperen Veluwe". Seizoensgerichte content en Google Ads die draaien in het voor- en hoogseizoen zorgen dat jij zichtbaar bent op het moment dat toeristen beslissingen nemen.'},
      {q: 'Is de vaste klantenkring in Nunspeet groot genoeg voor een stabiele omzet via SEO?', a: 'De gemeente Nunspeet heeft ruim 27.000 inwoners — meer dan genoeg voor een stabiele lokale klantenkring voor de meeste sectoren. Aangevuld met toeristische bezoekers in de drukkere periodes is Nunspeet een markt met het hele jaar door potentieel voor online aanvragen.'},
      {q: 'Werkt Google Ads in Nunspeet ook buiten het toeristisch seizoen?', a: 'Ja. Google Ads is ook effectief voor lokale dienstverleners gericht op vaste bewoners, los van het toerisme. Een dakdekker, fysiotherapeut of bouwbedrijf in Nunspeet heeft het hele jaar door klanten nodig — Google Ads zorgt voor zichtbaarheid precies wanneer die klanten zoeken.'},
      {q: 'Heeft Nunspeet specifieke online concurrenten waar ik rekening mee moet houden?', a: 'In de lokale zoekresultaten concurreer je met aanbieders uit Harderwijk, Elburg en Putten. Maar voor specifieke "Nunspeet"-zoekopdrachten zijn die concurrenten minder zichtbaar. Met een gerichte lokale SEO-aanpak positioneer jij jezelf als de eerste keuze voor klanten in Nunspeet en directe omgeving.'},
    ],
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
    citySpecific: [
      'Kampen is een historische Hanzestad met ruim 54.000 inwoners, gelegen aan de IJssel op 15 kilometer van Zwolle. De stad heeft een breed palet aan mkb-bedrijven in handel, bouw, zorg, logistiek en zakelijke dienstverlening. Voor online marketing is Kampen een aantrekkelijke markt: het zoekvolume voor lokale termen is substantieel, terwijl de concurrentie in de zoekresultaten merkbaar lager is dan in Zwolle zelf.',
      'Als marketing bureau voor ondernemers in Kampen zetten wij in op lokale SEO die focust op Kampen als zoeklocatie. Termen als "marketing bureau Kampen", "SEO Kampen" en "[jouw dienst] Kampen" worden maandelijks opgezocht — maar worden door de meeste lokale bedrijven niet serieus aangepakt. Wie dat wél doet met een goede website en gerichte SEO-strategie, staat snel bovenaan en trekt aanvragen die anders naar Zwolle gaan.',
      'Kampen profiteert van de groeiende interesse in de IJssel-regio als toeristische bestemming én van de continue aanwas van nieuwe bewoners in de snel groeiende stad. Die groei vertaalt zich naar meer online zoekopdrachten voor lokale diensten. Voor ondernemers die nu investeren in SEO in Kampen, groeit de waarde van die positie mee met de stad.',
    ],
    faqs: [
      {q: 'Hoe verschilt de online concurrentie in Kampen van Zwolle?', a: 'Kampen heeft substantieel zoekvolume voor lokale termen, maar met merkbaar minder concurrentie dan Zwolle. Dat maakt lokale SEO in Kampen relatief efficiënt: je bereikt een markt van 54.000 inwoners met minder investering dan in de provinciehoofdstad.'},
      {q: 'Heeft de historische uitstraling van Kampen invloed op de online marketingstrategie?', a: 'Voor toeristische sectoren zeker. Kampens Hanzestad-profiel en historische binnenstad trekken bezoekers. Content die inspeelt op "dagje Kampen" of "hotspot IJsselstad" werkt goed voor horeca en recreatie. Voor regulier mkb focussen we op lokale klantenzoekopdrachten.'},
      {q: 'Is een Google Business-profiel belangrijk voor mijn bedrijf in Kampen?', a: 'Ja. Een goed geoptimaliseerd Google Business-profiel zorgt dat je verschijnt in de lokale kaartresultaten wanneer mensen zoeken op "[jouw dienst] Kampen". Dat levert direct klikken en belletjes op. VDH Agency helpt je dit profiel volledig te optimaliseren als onderdeel van een bredere SEO-aanpak.'},
      {q: 'Hoe snel zie ik resultaat van lokale SEO in Kampen?', a: 'Kampen heeft een lagere concurrentiedruk dan Zwolle, waardoor SEO-resultaten hier sneller zichtbaar zijn. Reken op 2 tot 3 maanden voor merkbare verbeteringen in positie. Google Ads geeft direct bereik als je sneller wilt starten. Wij combineren beide voor een aanpak die direct én duurzaam werkt.'},
    ],
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
    citySpecific: [
      'Raalte is een gemeente in Salland met ruim 37.000 inwoners en een sterke agrarische en industriële economie. De gemeente bestaat uit meerdere kernen — Raalte, Heino, Broekland en andere dorpen — met elk hun eigen ondernemersgemeenschap. Online marketing in Raalte vraagt om kennis van de lokale marktstructuur en de specifieke sectoren die hier actief zijn.',
      'Voor bedrijven in Raalte is de keuze tussen SEO en Google Ads sterk afhankelijk van de doelgroep. Lokale dienstverleners gericht op consumenten profiteren het meest van lokale SEO op termen als "marketing bureau Raalte". B2B-bedrijven in de industrie en agrarische sector hebben meer baat bij gerichte Google Ads-campagnes die op sectorniveau werken. Als marketing bureau voor Raalte helpen wij met beide aanpakken.',
      'De economische structuur van Raalte — verspreid over meerdere kernen met diverse sectoren — vraagt om een gelaagde online strategie. Bedrijven actief in meerdere kernen profiteren van aparte lokale pagina\'s per kern. Bedrijven die sectoraal werken (agri, industrie), leunen meer op gerichte campagnes. VDH Agency helpt je bepalen welke mix voor jouw situatie het meest rendabel is.',
    ],
    faqs: [
      {q: 'Hoe bereik ik als bedrijf in Raalte klanten in de agrarische sector?', a: 'De agrarische sector in Raalte zoekt steeds vaker online naar leveranciers en diensten. Gerichte Google Ads-campagnes op sectorspecifieke zoektermen — zoals "loonwerker Salland" of "agrarisch adviseur Raalte" — zijn hier het effectiefst, aangevuld met een professionele website die vertrouwen wekt bij agrarische ondernemers.'},
      {q: 'Zijn er genoeg online zoekopdrachten voor bedrijven in de gemeente Raalte?', a: 'Het zoekvolume in Raalte en omgeving is substantieel voor de belangrijkste sectoren: agri, industrie, bouw en dienstverlening. Bovendien concurreer je in Salland met minder aanbieders dan in Zwolle of Deventer. Wie investeert in lokale SEO, pakt snel een sterke positie.'},
      {q: 'Werkt online marketing voor industriële bedrijven in Raalte?', a: 'Ja, maar de aanpak verschilt. Industriële bedrijven in Raalte profiteren het meest van een B2B-gerichte website en gerichte Google Ads voor inkopende partijen. Lokale SEO is minder relevant voor zuivere B2B-industrie; zichtbaarheid op vakspecifieke termen is dat wel.'},
      {q: 'Heeft het zin om als Raaltens bedrijf ook op Zwolle te optimaliseren?', a: 'Als jouw werkgebied Zwolle omvat, zeker. Prioriteer eerst Raalte en omgeving (weinig concurrentie, snelle winst), en bouw daarna richting Zwolle (meer concurrentie, groter bereik). Stap voor stap naar een breder bereik zonder de lokale basis te verliezen.'},
    ],
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
    citySpecific: [
      'Zwolle is de provinciehoofdstad van Overijssel met meer dan 130.000 inwoners en een van de snelst groeiende economieën van Nederland. Als marketing bureau actief in Zwolle begrijpen wij de hoge online concurrentie in deze markt: ICT-bedrijven, logistieke dienstverleners, retailers, horecaondernemers en zakelijke dienstverleners concurreren allemaal om de eerste pagina van Google.',
      "Lokale SEO in Zwolle vraagt om meer dan een standaard aanpak. Naast de hoofdterm \"marketing bureau Zwolle\" is het optimaliseren van specifieke dienst- en wijkpagina's essentieel. Aangevuld met Google Ads-campagnes zorg je voor directe zichtbaarheid terwijl SEO de duurzame positie opbouwt. Wij analyseren de concurrentie in Zwolle en bouwen een strategie die ook voor een newcomer werkt.",
      'In de sterk concurrerende Zwolse markt geldt één duidelijke les: consistentie wint. Bedrijven die continu investeren in SEO, regelmatig nieuwe content publiceren en hun Google-profiel actief bijhouden, bouwen een positie die maand na maand versterkt. Wie start met een solide strategie en er vervolgens mee doorgaat, ziet in Zwolle op een jaar significant meer resultaat dan wie ad hoc te werk gaat.',
    ],
    faqs: [
      {q: 'Hoe kan een kleinere ondernemer in Zwolle concurreren met grote bedrijven op Google?', a: 'Door slimmer te zijn in zoekwoordkeuze. Grote spelers domineren brede termen als "marketing Zwolle". Jij wint op specifieke niche- of wijkzoekopdrachten: "SEO-specialist Zwolle", "webdesign Zwolle-Noord" of "[jouw dienst] omgeving Zwolle". Wij vinden de gaten die jou aanvragen opleveren.'},
      {q: 'Heeft het zin om als Zwollenaar zowel op SEO als Google Ads in te zetten?', a: 'In Zwolle absoluut. SEO bouwt een duurzame basis die maandelijks gratis verkeer genereert. Google Ads geeft direct bereik, ook terwijl je SEO nog groeit. De combinatie is in een competitieve markt als Zwolle de sterkste aanpak.'},
      {q: 'Werkt lokale SEO ook voor een Zwols bedrijf dat regionaal opereert?', a: 'Ja. Veel Zwolse bedrijven bedienen ook Kampen, Meppel, Hardenberg en de brede regio. Wij bouwen een strategie die zowel op "Zwolle" als op relevante omringende plaatsen inspeelt — zodat jij ook klanten uit de regio bereikt zonder de Zwolse positie te verwaarlozen.'},
      {q: 'Wat zijn realistische verwachtingen voor SEO in Zwolle op een jaar?', a: 'In een competitieve stad als Zwolle rekenen wij op 4 tot 8 maanden om merkbare posities te bereiken op de hoofdtermen. Op langetermijn — na 12 maanden gerichte SEO — zijn topposities voor specifieke dienst+locatiecombinaties haalbaar. Google Ads geeft ondertussen direct zichtbaarheid. Wij rapporteren maandelijks transparant over voortgang.'},
    ],
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
    citySpecific: [
      'Harderwijk combineert een groeiende woonstad met bijna 49.000 inwoners en een van de best bezochte toeristische attracties van Nederland: het Dolfinarium. Als marketing bureau voor ondernemers in Harderwijk kennen wij de dubbele markt die dit oplevert: bedrijven gericht op vaste bewoners enerzijds, en horecaondernemers en recreatiebedrijven die inspelen op toeristen anderzijds.',
      'Voor lokale dienstverleners in Harderwijk is SEO op termen als "marketing bureau Harderwijk" en gerelateerde zoekwoorden de sterkste investering. Voor toeristische ondernemingen werkt een combinatie van seizoensgerichte content en Google Ads het best: zorg dat je bovenaan staat op het moment dat bezoekers zoeken naar activiteiten in Harderwijk en omgeving. Wij bouwen de strategie die past bij jouw specifieke situatie.',
      'Harderwijk heeft een demografisch profiel dat gunstig is voor ondernemers: een jong en groeiend inwonersaantal, een actieve toeristische instroom en een relatief hoge besteedkracht. Die combinatie maakt lokale online marketing in Harderwijk bijzonder effectief voor zowel dienstverleners als toeristische bedrijven die alle segmenten van de markt willen bereiken.',
    ],
    faqs: [
      {q: 'Hoe zet ik online marketing in voor zowel toeristen als vaste inwoners in Harderwijk?', a: 'Met een tweeledige strategie. Voor toeristen: seizoensgerichte content, Google Ads rondom piekperiodes en optimalisatie op termen als "uitje Harderwijk" of "hotel Veluwemeer". Voor bewoners: lokale SEO op dienstgerichte termen als "klussenbedrijf Harderwijk" of "fysiotherapeut Harderwijk". Wij bouwen beide aanpakken in één samenhangende strategie.'},
      {q: 'Is de concurrentie voor "marketing bureau Harderwijk" hoog?', a: 'Nee. Harderwijk is een middelgrote stad maar er zijn weinig bureaus die specifiek op Harderwijk gefocust zijn. Dat maakt het relatief eenvoudig om snel bovenaan te staan op lokale marketinggerelateerde zoekopdrachten. Voor jouw sector in Harderwijk doen we eerst een concurrentieanalyse.'},
      {q: 'Wat is de beste manier om meer bezoekers van het Dolfinarium naar mijn bedrijf te trekken?', a: 'Door aanwezig te zijn op zoekopdrachten die dagjesmensen gebruiken rondom een bezoek aan Harderwijk: "lunch Harderwijk", "parkeren centrum Harderwijk" of "souvenir Harderwijk". Met de juiste content en Maps-optimalisatie profiteer je van het Dolfinarium-verkeer.'},
      {q: 'Hoe snel zie ik resultaat van SEO voor mijn bedrijf in Harderwijk?', a: 'Harderwijk heeft een redelijk competitieve markt maar minder dan Zwolle of Apeldoorn. Reken op 2 tot 4 maanden voor merkbare positioneringsverbeteringen op lokale termen. Toeristische termen zijn seizoensgevoelig: wie zijn SEO in het najaar opzet, staat klaar voor het volgende voor- en zomerseizoen.'},
    ],
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
    citySpecific: [
      'Deventer is een Hanzestad met ruim 100.000 inwoners op de grens van Gelderland en Overijssel. De stad heeft een gevarieerde economie met een opvallend sterke ICT-sector, naast zakelijke dienstverlening, onderwijs, zorg en retail. Als marketing bureau voor ondernemers in Deventer weten wij hoe competitief de lokale zoekresultaten zijn — en hoe je je als ondernemer toch onderscheidt.',
      "Online marketing in Deventer vraagt om specificiteit. Niet alleen \"marketing bureau Deventer\" als trefwoord, maar gerichte landingspagina's per dienst en doelgroep. Voor B2B-bedrijven in de Deventer ICT-sector zijn LinkedIn-advertenties en sectorgerichte content waardevolle aanvullingen op SEO en Google Ads. Wij bouwen een aanpak die inspeelt op de specifieke kenmerken van de Deventer markt.",
      'Met de groeiende Saxion-populatie en een toenemend aantal young professionals heeft Deventer een demografisch profiel dat steeds digitaler wordt. Dat betekent dat online aanwezigheid voor Deventer-bedrijven voor veel sectoren onmisbaar is om de komende generatie klanten te bereiken. Wie nu investeert in een sterke digitale positie, zit goed voor de komende jaren.',
    ],
    faqs: [
      {q: 'Is Deventer\'s ICT-sector goed bereikbaar via online marketing?', a: 'Ja, maar met een B2B-aanpak. ICT-bedrijven in Deventer zoeken leveranciers en partners via LinkedIn, sectorplatformen en gerichte Google-zoekopdrachten. Een combinatie van een sterke website, thought leadership content en gerichte Google Ads op zakelijke termen geeft de beste resultaten in Deventer\'s ICT-markt.'},
      {q: 'Concurreer ik in Deventer ook met bedrijven uit Zwolle en Apeldoorn?', a: 'In de zoekresultaten soms. Voor specifieke "Deventer"-zoekopdrachten is de overlap echter beperkt. Klanten die zoeken op "[dienst] Deventer" willen bewust een Deventer of regionale aanbieder. Met gerichte lokale SEO positioneer jij jezelf als de logische keuze voor klanten in de stad en regio.'},
      {q: 'Heeft de universitaire bevolking in Deventer invloed op de online marketingkansen?', a: 'Saxion-studenten en jonge professionals maken Deventer een actieve stad met een jongere doelgroep. Voor horeca, retail en dienstverleners gericht op deze groep werken social media marketing en Google Ads effectiever dan puur organische SEO.'},
      {q: 'Wat zijn de meest kansrijke sectoren voor online groei in Deventer?', a: 'ICT, zakelijke dienstverlening en de zorgsector hebben in Deventer het hoogste online zoekvolume. Detailhandel en horeca profiteren sterk van Google Maps-optimalisatie en lokale SEO. Wij doen bij de start altijd een markt- en concurrentieanalyse voor jouw specifieke sector in Deventer.'},
    ],
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
    citySpecific: [
      'Zutphen is een historische vestingstad in Gelderland met ruim 47.000 inwoners, deel van de Stedendriehoek Apeldoorn-Deventer-Zutphen. De stad heeft een levendige binnenstad, een sterke juridische en zorgsector, en een actieve ondernemersgemeenschap. Een belangrijk voordeel voor lokale online marketing: de concurrentie in de Zutphense zoekresultaten is merkbaar lager dan in Apeldoorn of Deventer.',
      'Voor ondernemers in Zutphen is dit de ideale markt om snel een sterke online positie op te bouwen. Termen als "marketing bureau Zutphen" en "[dienst] Zutphen" hebben een substantieel zoekvolume, maar worden door de meeste lokale bedrijven niet serieus aangepakt. Wie investeert in lokale SEO en een professionele website, staat snel bovenaan en trekt aanvragen van klanten die bewust kiezen voor een lokale specialist.',
      'Zutphens positie in de Stedendriehoek biedt een strategisch voordeel: je kunt klanten bereiken vanuit drie stedelijke markten tegelijk, terwijl de concurrentie in de zoekresultaten specifiek voor Zutphen laag blijft. Dat maakt Zutphen een van de aantrekkelijkste markten in de regio voor ondernemers die snel een sterke online positie willen opbouwen.',
    ],
    faqs: [
      {q: 'Hoe profiteert de juridische sector in Zutphen van online marketing?', a: 'Advocatenkantoren en juridische dienstverleners in Zutphen kunnen sterk profiteren van lokale SEO op termen als "advocaat Zutphen" of "juridisch advies Zutphen". Dit zijn searches met hoge koopintentie: mensen die zoeken willen snel een specialist vinden. Een professionele website met duidelijke specialisaties en goede SEO is de basis.'},
      {q: 'Is Zutphen een gunstige markt voor een startende ondernemer die online wil groeien?', a: 'Ja. Zutphen heeft minder online concurrentie dan Apeldoorn of Deventer, terwijl het zoekvolume substantieel is. Voor een startende ondernemer is dat een gunstige combinatie: je kunt sneller resultaat boeken en een goede positie opbouwen voordat grotere spelers de markt ontdekken.'},
      {q: 'Werkt VDH Agency ook voor Zutphense bedrijven die de gehele Stedendriehoek bedienen?', a: 'Ja. Veel bedrijven in Zutphen bedienen ook klanten in Apeldoorn, Deventer en omliggende gemeenten. Wij bouwen een strategie die inspeelt op Zutphen als basis én de bredere Stedendriehoek als werkgebied — zodat je regionaal zichtbaar bent zonder de lokale focus te verliezen.'},
      {q: 'Hoe onderscheid ik mijn winkel of horecazaak in Zutphens historische binnenstad?', a: 'Door de unieke sfeer van Zutphen te benutten in je online aanwezigheid. Content rondom "historisch Zutphen", "winkelen binnenstad Zutphen" of "terras Zutphen" trekt bezoekers die bewust voor de stad kiezen. Aangevuld met Google Maps-optimalisatie en actieve reviews ben je goed zichtbaar voor zowel inwoners als bezoekers.'},
    ],
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
    citySpecific: [
      'Dalfsen is een landelijke gemeente in de regio Salland met ruim 30.000 inwoners, verspreid over kernen als Dalfsen, Lemelerveld en Nieuwleusen. De economie is sterk agrarisch en industrieel, met een groeiende toeristische sector langs de Vecht. Online marketing biedt lokale ondernemers in Dalfsen een directe kans: de concurrentie voor lokale zoektermen is beperkt.',
      'Als marketing bureau voor bedrijven in de gemeente Dalfsen focussen wij op lokale SEO die inspeelt op de specifieke zoekpatronen in de Vechtdal-regio. Termen als "marketing bureau Dalfsen" en "[dienst] gemeente Dalfsen" trekken klanten die lokaal zoeken en bereid zijn te kopen. Met een professionele website als basis en gerichte SEO of Google Ads als vliegwiel, positioneer je je als de herkenbare lokale specialist.',
      'De Vechtdal-regio heeft de afgelopen jaren een sterke groei doorgemaakt als toeristische bestemming, wat ook de online vraag naar lokale diensten verhoogt. Dalfsen-bedrijven die inspelen op deze groei — via content over Vechtdal-toerisme én lokale dienstverlening — bereiken zowel toeristen als vaste bewoners en bouwen zo een breed en duurzaam online bereik.',
    ],
    faqs: [
      {q: 'Is er genoeg online vraag voor een bedrijf in de gemeente Dalfsen?', a: 'Ja. De gemeente heeft 30.000 inwoners verspreid over meerdere kernen, met een sterke agrarische en industriële economie. Voor lokale dienstverleners, bouwbedrijven en agrarische aanbieders is er voldoende zoekvolume — en weinig concurrenten die het serieus aanpakken.'},
      {q: 'Hoe bereik ik als ondernemer in Dalfsen ook toeristen in het Vechtdal?', a: 'Door in te spelen op toeristische zoekopdrachten rondom de Vecht: "kanoën Vechtdal", "fietsen Dalfsen", "vakantiehuis Vecht". Seizoensgerichte content en Google Ads in het voorjaar en zomer zorgen dat jij zichtbaar bent op het moment dat toeristen hun Vechtdal-bezoek plannen.'},
      {q: 'Heeft een agrarisch bedrijf in Dalfsen baat bij een professionele website?', a: 'Ja. Agrariërs in Dalfsen die klanten, personeel of zakelijke partners willen bereiken, hebben baat bij een professionele website. Of het nu gaat om directe verkoop, agri-toerisme of het aantrekken van seizoenswerkers: een duidelijke online aanwezigheid verlaagt de drempel voor contact.'},
      {q: 'Is er concurrentie voor "marketing bureau Dalfsen" als zoekterm?', a: 'Nauwelijks. Er zijn weinig bureaus die specifiek op Dalfsen en de Vechtdal-regio gefocust zijn. Wie ons inschakelt, krijgt een specialist die de regio serieus neemt en een aanpak bouwt die echt past bij de Dalfsen-markt.'},
    ],
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
        email: 'contact@vdh-agency.com',
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
  const description = `Marketing bureau en SEO voor ondernemers in ${city.name}. VDH Agency helpt lokaal groeien via Google Ads, social media en webdesign. Gratis kennismakingsgesprek.`;
  return {
    title: `Marketing ${city.name} | Bureau voor SEO, Google Ads & Webdesign | VDH Agency`,
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(cityJsonLd(city))}}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(faqJsonLd(city.faqs))}}
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

      {/* Diensten-strip: keyword coverage voor alle [dienst] + [stad] combinaties */}
      <div className="bg-white border-b border-primary/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-primary/40 text-xs uppercase tracking-widest font-medium mr-1">In {city.name}:</span>
            {['Marketing bureau', 'SEO', 'Google Ads', 'Social media', 'Website laten maken', 'Online marketing'].map(d => (
              <span key={d} className="text-primary/60 text-xs bg-primary/4 px-3 py-1 rounded-sm border border-primary/8">
                {d}
              </span>
            ))}
          </div>
        </div>
      </div>

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

      {/* SEO & aanpak per stad */}
      <section className="bg-white py-20 border-b border-primary/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <AnimatedSection>
              <SectionLabel>{`SEO & marketing ${city.name}`}</SectionLabel>
              <h2 className="text-primary font-black text-3xl mb-6">
                SEO {city.name} en online marketing: onze aanpak
              </h2>
              <div className="flex flex-col gap-4">
                {city.citySpecific.map((para, i) => (
                  <p key={i} className="text-primary/70 text-base leading-relaxed">{para}</p>
                ))}
              </div>
            </AnimatedSection>
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
              Vragen over SEO en marketing in {city.name}
            </h2>
          </AnimatedSection>
          <div className="flex flex-col gap-4">
            {city.faqs.map(({q, a}, i) => (
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

      {/* Alle diensten */}
      <section className="bg-light py-14 border-t border-primary/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-primary font-black text-lg mb-1">
              Alle diensten van VDH Agency
            </h2>
            <p className="text-primary/40 text-sm mb-6">Volledig online · direct contact · geen vaste contracten</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                {href: '/diensten/seo-sea',             label: 'SEO & SEA',            sub: 'Organisch + betaald zoeken'},
                {href: '/diensten/social-media-beheer', label: 'Social Media',          sub: 'Content, video & Meta Ads'},
                {href: '/diensten/online-marketing',    label: 'Online Marketing',      sub: 'Strategie & kanaaloverzicht'},
                {href: '/diensten/website-maken',       label: 'Website laten maken',   sub: 'Snel, SEO-proof & op maat'},
                {href: '/diensten/branding',            label: 'Branding & Huisstijl',  sub: 'Logo & merkidentiteit'},
                {href: '/diensten/digitale-analyse',    label: 'Digitale Analyse',      sub: 'GA4, dashboards & data'},
                {href: '/diensten/webshop-maken',       label: 'Webshop maken',         sub: 'Shopify & e-commerce'},
                {href: '/diensten/email-marketing',     label: 'E-mail Marketing',      sub: 'Flows & nieuwsbrieven'},
              ].map(({href, label, sub}) => (
                <a
                  key={href}
                  href={href}
                  className="group bg-white border border-primary/8 rounded-sm px-4 py-4 hover:border-gold/40 hover:shadow-sm transition-all"
                >
                  <span className="text-primary font-semibold text-sm group-hover:text-gold transition-colors block">{label}</span>
                  <span className="text-primary/40 text-xs mt-0.5 block">{sub}</span>
                </a>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTA />
    </>
  );
}
