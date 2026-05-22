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
    title: isNl ? 'Algemene Voorwaarden' : 'Terms and Conditions',
    description: isNl
      ? 'Algemene voorwaarden van VDH Agency. Van toepassing op alle diensten van VDH Agency.'
      : 'Terms and conditions of VDH Agency. Applicable to all services provided by VDH Agency.',
    alternates: {
      canonical: isNl ? `${BASE}/algemene-voorwaarden` : `${BASE}/en/algemene-voorwaarden`,
      languages: {
        nl: `${BASE}/algemene-voorwaarden`,
        en: `${BASE}/en/algemene-voorwaarden`,
        'x-default': `${BASE}/algemene-voorwaarden`,
      },
    },
  };
}

export default async function AlgemeneVoorwaardenPage({
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
          <h1 className="text-primary font-black text-4xl mb-3">Algemene Voorwaarden</h1>
          <p className="text-primary/50 text-sm mb-10">Laatst bijgewerkt: 22 mei 2026</p>

          <div className="prose-legal">
            <h2>1. Definities</h2>
            <p>
              <strong>VDH Agency:</strong> de eenmanszaak gedreven door Lars van der Hoek, gevestigd in Nederland.<br />
              <strong>Opdrachtgever:</strong> de natuurlijke of rechtspersoon die een overeenkomst aangaat met VDH Agency.<br />
              <strong>Diensten:</strong> alle werkzaamheden die VDH Agency uitvoert, waaronder SEO/SEA, social media marketing en website-ontwikkeling.
            </p>

            <h2>2. Toepasselijkheid</h2>
            <p>
              Deze algemene voorwaarden zijn van toepassing op alle offertes, aanbiedingen en overeenkomsten
              tussen VDH Agency en Opdrachtgever. Afwijkingen zijn uitsluitend geldig indien schriftelijk
              overeengekomen.
            </p>

            <h2>3. Offertes en overeenkomsten</h2>
            <p>
              Alle offertes zijn vrijblijvend en geldig gedurende 30 dagen, tenzij anders vermeld.
              Een overeenkomst komt tot stand door schriftelijke bevestiging (e-mail) door VDH Agency,
              of door aanvang van de werkzaamheden.
            </p>

            <h2>4. Uitvoering van de opdracht</h2>
            <p>
              VDH Agency voert de opdracht naar beste inzicht en vermogen uit. VDH Agency heeft een
              inspanningsverplichting, geen resultaatsverplichting, tenzij uitdrukkelijk schriftelijk
              anders overeengekomen.
            </p>
            <p>
              Opdrachtgever is verantwoordelijk voor het tijdig aanleveren van alle benodigde
              informatie, materialen en toegangen. Vertraging als gevolg van het niet tijdig aanleveren
              van informatie door Opdrachtgever valt niet onder de verantwoordelijkheid van VDH Agency.
            </p>

            <h2>5. Tarieven en betaling</h2>
            <p>
              Tarieven worden per opdracht of maandelijks overeengekomen in de offerte. Facturen zijn
              betaalbaar binnen 14 dagen na factuurdatum, tenzij anders overeengekomen.
            </p>
            <p>
              Bij niet-tijdige betaling is VDH Agency gerechtigd werkzaamheden op te schorten en
              wettelijke rente in rekening te brengen.
            </p>

            <h2>6. Intellectueel eigendom</h2>
            <p>
              Alle door VDH Agency geproduceerde content (teksten, ontwerpen, video's) blijft eigendom
              van VDH Agency totdat de volledige betaling is ontvangen. Na volledige betaling gaan de
              rechten over op de Opdrachtgever, tenzij schriftelijk anders overeengekomen.
            </p>

            <h2>7. Geheimhouding</h2>
            <p>
              Beide partijen verplichten zich tot geheimhouding van alle vertrouwelijke informatie die
              zij in het kader van de overeenkomst verkrijgen.
            </p>

            <h2>8. Aansprakelijkheid</h2>
            <p>
              De aansprakelijkheid van VDH Agency is beperkt tot het bedrag dat in het kader van de
              betreffende opdracht in rekening is gebracht. VDH Agency is niet aansprakelijk voor
              indirecte schade, gevolgschade of gederfde winst.
            </p>
            <p>
              VDH Agency garandeert geen specifieke zoekresultaten of rankingposities in zoekmachines,
              aangezien deze afhankelijk zijn van externe factoren buiten de controle van VDH Agency.
            </p>

            <h2>9. Opzegging</h2>
            <p>
              Maandelijkse diensten kunnen door beide partijen worden opgezegd met een opzegtermijn van
              één kalendermaand, tenzij schriftelijk anders overeengekomen. Eenmalige projecten kunnen
              niet tussentijds worden opgezegd; reeds verrichte werkzaamheden worden in rekening gebracht.
            </p>

            <h2>10. Toepasselijk recht en geschillen</h2>
            <p>
              Op alle overeenkomsten is Nederlands recht van toepassing. Geschillen worden bij voorkeur
              in onderling overleg opgelost. Indien dit niet lukt, is de bevoegde rechter in Nederland
              exclusief bevoegd.
            </p>

            <h2>11. Contact</h2>
            <p>
              Voor vragen over deze algemene voorwaarden kunt u contact opnemen via{' '}
              <a href="mailto:lars@vdhagency.nl">lars@vdhagency.nl</a>.
            </p>
          </div>
        </AnimatedSection>
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
          <h1 className="text-primary font-black text-4xl mb-3">Terms and Conditions</h1>
          <p className="text-primary/50 text-sm mb-10">Last updated: 22 May 2026</p>

          <div className="prose-legal">
            <h2>1. Definitions</h2>
            <p>
              <strong>VDH Agency:</strong> the sole proprietorship operated by Lars van der Hoek, established in the Netherlands.<br />
              <strong>Client:</strong> the natural or legal person entering into an agreement with VDH Agency.<br />
              <strong>Services:</strong> all work performed by VDH Agency, including SEO/SEA, social media management and website development.
            </p>

            <h2>2. Applicability</h2>
            <p>
              These terms and conditions apply to all quotations, offers and agreements between VDH Agency
              and the Client. Deviations are only valid if agreed in writing.
            </p>

            <h2>3. Quotations and Agreements</h2>
            <p>
              All quotations are non-binding and valid for 30 days unless otherwise stated. An agreement
              is established by written confirmation (email) by VDH Agency, or by commencement of work.
            </p>

            <h2>4. Performance of Services</h2>
            <p>
              VDH Agency performs assignments to the best of its knowledge and ability. VDH Agency has
              a best-efforts obligation, not a results obligation, unless explicitly agreed otherwise in
              writing.
            </p>
            <p>
              The Client is responsible for timely delivery of all required information, materials and
              access. Delays resulting from the Client failing to provide information in a timely manner
              are not the responsibility of VDH Agency.
            </p>

            <h2>5. Pricing and Payment</h2>
            <p>
              Rates are agreed per assignment or monthly as stated in the quotation. Invoices are
              payable within 14 days of the invoice date, unless otherwise agreed.
            </p>
            <p>
              In case of late payment, VDH Agency is entitled to suspend work and charge statutory interest.
            </p>

            <h2>6. Intellectual Property</h2>
            <p>
              All content produced by VDH Agency (texts, designs, videos) remains the property of VDH
              Agency until full payment has been received. After full payment, rights transfer to the
              Client, unless otherwise agreed in writing.
            </p>

            <h2>7. Confidentiality</h2>
            <p>
              Both parties commit to maintaining confidentiality regarding all confidential information
              obtained in the context of the agreement.
            </p>

            <h2>8. Liability</h2>
            <p>
              VDH Agency's liability is limited to the amount charged for the relevant assignment. VDH
              Agency is not liable for indirect damages, consequential damages or loss of profit.
            </p>
            <p>
              VDH Agency does not guarantee specific search results or ranking positions in search
              engines, as these depend on external factors outside VDH Agency's control.
            </p>

            <h2>9. Termination</h2>
            <p>
              Monthly services may be terminated by either party with one calendar month's notice, unless
              otherwise agreed in writing. One-time projects cannot be cancelled midway; work already
              performed will be invoiced.
            </p>

            <h2>10. Governing Law and Disputes</h2>
            <p>
              All agreements are governed by Dutch law. Disputes will preferably be resolved by mutual
              agreement. If this fails, the competent court in the Netherlands has exclusive jurisdiction.
            </p>

            <h2>11. Contact</h2>
            <p>
              For questions about these terms and conditions, please contact us at{' '}
              <a href="mailto:lars@vdhagency.nl">lars@vdhagency.nl</a>.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
