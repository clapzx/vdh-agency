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
    taxID: 'KvK 95792414',
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'NL',
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
    title: isNl ? 'Contact, Vrijblijvend Gesprek' : 'Contact, Free Consultation',
    description: isNl
      ? 'Neem contact op met VDH Agency voor een vrijblijvend gesprek. Reactie binnen 24 uur.'
      : 'Get in touch with VDH Agency for a free consultation. Response within 24 hours.',
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
