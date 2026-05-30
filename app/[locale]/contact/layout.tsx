import type {Metadata} from 'next';

const BASE = 'https://www.vdh-agency.com';

function professionalServiceJsonLd(locale: string) {
  const isNl = locale === 'nl';
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${BASE}/#organization`,
    name: 'VDH Agency',
    url: `${BASE}/`,
    email: 'contact@vdh-agency.com',
    telephone: '+31641027594',
    taxID: 'KvK 95792414',
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Heerde',
      addressRegion: 'Gelderland',
      addressCountry: 'NL',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: '+31641027594',
      email: 'contact@vdh-agency.com',
      availableLanguage: ['Dutch', 'English'],
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    },
    areaServed: {'@type': 'Country', name: 'Netherlands'},
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: isNl ? 'Marketing Diensten' : 'Marketing Services',
      itemListElement: [
        {'@type': 'Offer', itemOffered: {'@type': 'Service', name: 'SEO & SEA', url: `${BASE}/diensten/seo-sea`}},
        {'@type': 'Offer', itemOffered: {'@type': 'Service', name: isNl ? 'Social Media Beheer' : 'Social Media Management', url: `${BASE}/diensten/social-media-beheer`}},
        {'@type': 'Offer', itemOffered: {'@type': 'Service', name: isNl ? 'Website Maken' : 'Website Development', url: `${BASE}/diensten/website-maken`}},
        {'@type': 'Offer', itemOffered: {'@type': 'Service', name: 'Online Marketing', url: `${BASE}/diensten/online-marketing`}},
        {'@type': 'Offer', itemOffered: {'@type': 'Service', name: isNl ? 'Branding & Huisstijl' : 'Branding & Identity', url: `${BASE}/diensten/branding`}},
        {'@type': 'Offer', itemOffered: {'@type': 'Service', name: isNl ? 'Digitale Analyse' : 'Digital Analytics', url: `${BASE}/diensten/digitale-analyse`}},
      ],
    },
  };
}

function breadcrumbJsonLd(locale: string) {
  const isNl = locale === 'nl';
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: isNl ? BASE : `${BASE}/en`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Contact',
        item: isNl ? `${BASE}/contact` : `${BASE}/en/contact`,
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
      ? 'Gratis Kennismakingsgesprek | VDH Agency Marketing Bureau Heerde'
      : 'Free Consultation | VDH Agency Marketing Bureau Netherlands',
    description: isNl
      ? 'Plan een gratis kennismakingsgesprek met VDH Agency. Marketing bureau uit Heerde voor SEO, Google Ads en webdesign. Reactie binnen 24 uur.'
      : 'Book a free consultation with VDH Agency. Marketing bureau from Heerde for SEO, Google Ads and web design. Response within 24 hours.',
    alternates: {
      canonical: isNl ? `${BASE}/contact` : `${BASE}/en/contact`,
      languages: {
        nl: `${BASE}/contact`,
        en: `${BASE}/en/contact`,
        'x-default': `${BASE}/contact`,
      },
    },
  };
}

export default async function ContactLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(professionalServiceJsonLd(locale))}}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(breadcrumbJsonLd(locale))}}
      />
      {children}
    </>
  );
}
