import type {Metadata} from 'next';
import {Outfit} from 'next/font/google';
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import '../globals.css';

const outfit = Outfit({subsets: ['latin'], variable: '--font-outfit'});

const BASE = 'https://www.vdh-agency.com';

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: 'Marketing Bureau Nederland — SEO, Social Media & Webdesign | VDH Agency',
    template: '%s | VDH Agency',
  },
  description: 'VDH Agency helpt Nederlandse bedrijven online groeien via SEO, Social Media en professionele websites op maat. Vraag gratis een consult aan.',
  openGraph: {
    title: 'Marketing Bureau Nederland — SEO, Social Media & Webdesign | VDH Agency',
    description: 'VDH Agency helpt Nederlandse bedrijven online groeien via SEO, Social Media en professionele websites op maat. Vraag gratis een consult aan.',
    siteName: 'VDH Agency',
    type: 'website',
    url: BASE,
    locale: 'nl_NL',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marketing Bureau Nederland | VDH Agency',
    description: 'VDH Agency helpt Nederlandse bedrijven online groeien via SEO, Social Media en professionele websites op maat.',
  },
  verification: {
    google: 'kg9q-mJMSAnhPF5GgYtIZJ0KAEU_2riXpv8P4UFCSF8',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${BASE}/#organization`,
      name: 'VDH Agency',
      url: `${BASE}/`,
      description: 'Nederlands marketing bureau gespecialiseerd in SEO/SEA, social media beheer en websites op maat voor het MKB.',
      email: 'lars@vdhagency.nl',
      founder: {
        '@type': 'Person',
        '@id': `${BASE}/#lars`,
        name: 'Lars van der Hoek',
      },
      address: {'@type': 'PostalAddress', addressCountry: 'NL'},
      areaServed: {'@type': 'Country', name: 'Netherlands'},
    },
    {
      '@type': 'WebSite',
      '@id': `${BASE}/#website`,
      url: `${BASE}/`,
      name: 'VDH Agency',
      publisher: {'@id': `${BASE}/#organization`},
      inLanguage: 'nl-NL',
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${BASE}/#service`,
      name: 'VDH Agency',
      url: `${BASE}/`,
      email: 'lars@vdhagency.nl',
      priceRange: '€€',
      founder: {'@type': 'Person', '@id': `${BASE}/#lars`},
      areaServed: {'@type': 'Country', name: 'Netherlands'},
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Marketing Diensten',
        itemListElement: [
          {'@type': 'Offer', itemOffered: {'@type': 'Service', name: 'SEO & SEA'}},
          {'@type': 'Offer', itemOffered: {'@type': 'Service', name: 'Social Media Beheer'}},
          {'@type': 'Offer', itemOffered: {'@type': 'Service', name: 'Website Maken'}},
        ],
      },
    },
  ],
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  const messages = await getMessages();

  return (
    <html lang={locale} className={outfit.variable}>
      <body className="min-h-screen flex flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
        />
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
