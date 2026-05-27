import type {Metadata} from 'next';
import AnimatedSection from '@/components/ui/AnimatedSection';

const BASE = 'https://www.vdh-agency.com';

export async function generateMetadata({
  params,
}: {
  params?: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale = 'nl'} = params ? await params : {};
  const isNl = locale === 'nl';
  return {
    title: isNl ? 'Privacybeleid' : 'Privacy Policy',
    description: isNl
      ? 'Privacybeleid van VDH Agency. Lees hoe wij omgaan met uw persoonsgegevens conform de AVG.'
      : 'Privacy policy of VDH Agency. Read how we handle your personal data in accordance with GDPR.',
    alternates: {
      canonical: isNl ? `${BASE}/privacybeleid` : `${BASE}/en/privacybeleid`,
      languages: {
        nl: `${BASE}/privacybeleid`,
        en: `${BASE}/en/privacybeleid`,
        'x-default': `${BASE}/privacybeleid`,
      },
    },
  };
}

export default async function PrivacybeleidPage({
  params,
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  const isNl = locale === 'nl';

  if (!isNl) return <EnVersion />;
  return <NlVersion />;
}

function NlVersion() {
  return (
    <section className="bg-light py-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-6 h-px bg-gold" />
            <span className="text-gold text-xs font-semibold tracking-widest uppercase">Juridisch</span>
          </div>
          <h1 className="text-primary font-black text-4xl mb-3">Privacybeleid</h1>
          <p className="text-primary/50 text-sm mb-10">Laatst bijgewerkt: 22 mei 2026</p>

          <div className="prose-legal">
            <h2>1. Verwerkingsverantwoordelijke</h2>
            <p>
              VDH Agency, opgericht door Lars van der Hoek, is verantwoordelijk voor de verwerking van
              persoonsgegevens zoals beschreven in dit privacybeleid.
            </p>
            <p>
              <strong>Contactgegevens:</strong><br />
              VDH Agency<br />
              E-mail: larsvanderhoek@gmail.com<br />
              Website: www.vdh-agency.com
            </p>

            <h2>2. Persoonsgegevens die wij verwerken</h2>
            <p>
              VDH Agency verwerkt uw persoonsgegevens uitsluitend wanneer u deze zelf heeft verstrekt via
              het contactformulier op onze website. Het betreft de volgende gegevens:
            </p>
            <ul>
              <li>Voor- en achternaam</li>
              <li>E-mailadres</li>
              <li>Bedrijfsnaam (optioneel)</li>
              <li>Inhoud van uw bericht</li>
            </ul>

            <h2>3. Doel en grondslag van de verwerking</h2>
            <p>
              Wij verwerken uw persoonsgegevens voor de volgende doeleinden:
            </p>
            <ul>
              <li>Het beantwoorden van uw contact- of offerteaanvraag (grondslag: gerechtvaardigd belang)</li>
              <li>Het opstellen en uitvoeren van een overeenkomst van opdracht (grondslag: uitvoering overeenkomst)</li>
            </ul>

            <h2>4. Bewaartermijn</h2>
            <p>
              VDH Agency bewaart uw persoonsgegevens niet langer dan strikt noodzakelijk. Contactgegevens
              worden bewaard zolang een zakelijke relatie bestaat of gedurende maximaal 2 jaar na het laatste
              contact. Boekhoudkundige gegevens bewaren wij conform de wettelijke bewaarplicht van 7 jaar.
            </p>

            <h2>5. Delen met derden</h2>
            <p>
              VDH Agency verkoopt uw gegevens niet aan derden. Gegevens worden uitsluitend gedeeld met
              verwerkers die noodzakelijk zijn voor de dienstverlening (zoals e-mailproviders), en uitsluitend
              op basis van een verwerkersovereenkomst.
            </p>

            <h2>6. Cookies en tracking</h2>
            <p>
              VDH Agency maakt gebruik van functionele cookies die noodzakelijk zijn voor de werking van de
              website. Er worden geen tracking- of marketingcookies geplaatst zonder uw toestemming.
            </p>

            <h2>7. Beveiliging</h2>
            <p>
              VDH Agency neemt passende technische en organisatorische maatregelen om uw persoonsgegevens te
              beschermen tegen verlies, diefstal of onbevoegde toegang. Alle communicatie via onze website
              verloopt via een beveiligde HTTPS-verbinding.
            </p>

            <h2>8. Uw rechten</h2>
            <p>
              U heeft de volgende rechten met betrekking tot uw persoonsgegevens:
            </p>
            <ul>
              <li><strong>Recht op inzage:</strong> u kunt opvragen welke gegevens wij van u verwerken</li>
              <li><strong>Recht op correctie:</strong> u kunt onjuiste gegevens laten aanpassen</li>
              <li><strong>Recht op verwijdering:</strong> u kunt verzoeken uw gegevens te laten wissen</li>
              <li><strong>Recht op beperking:</strong> u kunt de verwerking (tijdelijk) laten beperken</li>
              <li><strong>Recht op bezwaar:</strong> u kunt bezwaar maken tegen de verwerking</li>
            </ul>
            <p>
              Stuur uw verzoek naar <a href="mailto:larsvanderhoek@gmail.com">larsvanderhoek@gmail.com</a>. Wij reageren
              binnen 30 dagen.
            </p>

            <h2>9. Klacht indienen</h2>
            <p>
              Heeft u een klacht over de verwerking van uw persoonsgegevens? Dan kunt u contact opnemen
              met de Autoriteit Persoonsgegevens via <a href="https://www.autoriteitpersoonsgegevens.nl" target="_blank" rel="noopener noreferrer">autoriteitpersoonsgegevens.nl</a>.
            </p>

            <h2>10. Wijzigingen</h2>
            <p>
              VDH Agency behoudt zich het recht voor dit privacybeleid te wijzigen. De meest actuele versie
              is altijd te vinden op deze pagina.
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-16 pt-8 border-t border-primary/5">
          <p className="text-primary/20 text-xs mb-3">Servicegebied</p>
          <div className="flex flex-wrap gap-x-3 gap-y-1">
            {[
              {slug: 'heerde',     label: 'Heerde'},
              {slug: 'hattem',     label: 'Hattem'},
              {slug: 'epe',        label: 'Epe'},
              {slug: 'wezep',      label: 'Wezep'},
              {slug: 'oldebroek',  label: 'Oldebroek'},
              {slug: 'vaassen',    label: 'Vaassen'},
              {slug: 't-harde',    label: "'t Harde"},
              {slug: 'elburg',     label: 'Elburg'},
              {slug: 'wijhe',      label: 'Wijhe'},
              {slug: 'olst',       label: 'Olst'},
              {slug: 'apeldoorn',  label: 'Apeldoorn'},
              {slug: 'nunspeet',   label: 'Nunspeet'},
              {slug: 'kampen',     label: 'Kampen'},
              {slug: 'raalte',     label: 'Raalte'},
              {slug: 'zwolle',     label: 'Zwolle'},
              {slug: 'harderwijk', label: 'Harderwijk'},
            ].map(({slug, label}) => (
              <a
                key={slug}
                href={`/marketing-bureau/${slug}`}
                className="text-primary/25 text-xs hover:text-primary/40 transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function EnVersion() {
  return (
    <section className="bg-light py-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-6 h-px bg-gold" />
            <span className="text-gold text-xs font-semibold tracking-widest uppercase">Legal</span>
          </div>
          <h1 className="text-primary font-black text-4xl mb-3">Privacy Policy</h1>
          <p className="text-primary/50 text-sm mb-10">Last updated: 22 May 2026</p>

          <div className="prose-legal">
            <h2>1. Data Controller</h2>
            <p>
              VDH Agency, founded by Lars van der Hoek, is responsible for processing personal data as
              described in this privacy policy.
            </p>
            <p>
              <strong>Contact details:</strong><br />
              VDH Agency<br />
              Email: larsvanderhoek@gmail.com<br />
              Website: www.vdh-agency.com
            </p>

            <h2>2. Personal Data We Process</h2>
            <p>
              VDH Agency only processes personal data that you have provided yourself via the contact
              form on our website. This includes:
            </p>
            <ul>
              <li>Full name</li>
              <li>Email address</li>
              <li>Company name (optional)</li>
              <li>Content of your message</li>
            </ul>

            <h2>3. Purpose and Legal Basis</h2>
            <p>We process your personal data for the following purposes:</p>
            <ul>
              <li>Responding to your contact or quote request (basis: legitimate interest)</li>
              <li>Drafting and executing a service agreement (basis: performance of contract)</li>
            </ul>

            <h2>4. Retention Period</h2>
            <p>
              VDH Agency does not retain your personal data longer than necessary. Contact details are
              retained for as long as a business relationship exists or for a maximum of 2 years after
              last contact. Accounting records are kept for 7 years as required by law.
            </p>

            <h2>5. Sharing with Third Parties</h2>
            <p>
              VDH Agency does not sell your data to third parties. Data is only shared with processors
              necessary for service delivery (such as email providers), and only under a data processing
              agreement.
            </p>

            <h2>6. Cookies and Tracking</h2>
            <p>
              VDH Agency uses functional cookies necessary for the website to function. No tracking or
              marketing cookies are placed without your consent.
            </p>

            <h2>7. Security</h2>
            <p>
              VDH Agency takes appropriate technical and organisational measures to protect your personal
              data against loss, theft or unauthorised access. All communication via our website is
              secured via HTTPS.
            </p>

            <h2>8. Your Rights</h2>
            <p>You have the following rights regarding your personal data:</p>
            <ul>
              <li><strong>Right of access:</strong> you can request which data we process about you</li>
              <li><strong>Right to rectification:</strong> you can have incorrect data corrected</li>
              <li><strong>Right to erasure:</strong> you can request deletion of your data</li>
              <li><strong>Right to restriction:</strong> you can (temporarily) restrict processing</li>
              <li><strong>Right to object:</strong> you can object to processing</li>
            </ul>
            <p>
              Send your request to <a href="mailto:larsvanderhoek@gmail.com">larsvanderhoek@gmail.com</a>. We will
              respond within 30 days.
            </p>

            <h2>9. Filing a Complaint</h2>
            <p>
              If you have a complaint about the processing of your personal data, you can contact the
              Dutch Data Protection Authority at <a href="https://www.autoriteitpersoonsgegevens.nl" target="_blank" rel="noopener noreferrer">autoriteitpersoonsgegevens.nl</a>.
            </p>

            <h2>10. Changes</h2>
            <p>
              VDH Agency reserves the right to amend this privacy policy. The most current version is
              always available on this page.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
