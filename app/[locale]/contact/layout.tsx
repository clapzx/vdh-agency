import type {Metadata} from 'next';

const BASE = 'https://www.vdh-agency.com';

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
    title: isNl ? 'Contact — Vrijblijvend Gesprek' : 'Contact — Free Consultation',
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
        dangerouslySetInnerHTML={{__html: JSON.stringify(breadcrumbJsonLd(locale))}}
      />
      {children}
    </>
  );
}
