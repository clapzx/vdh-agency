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

export async function generateMetadata({
  params,
}: {
  params?: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale = 'nl'} = params ? await params : {};
  const isNl = locale === 'nl';
  return {
    metadataBase: new URL(BASE),
    title: {
      default: isNl
        ? 'Marketing Bureau Nederland — SEO, Social Media & Webdesign | VDH Agency'
        : 'Marketing Agency Netherlands — SEO, Social Media & Web Design | VDH Agency',
      template: '%s | VDH Agency',
    },
    description: isNl
      ? 'VDH Agency helpt Nederlandse bedrijven online groeien via SEO, Social Media en professionele websites op maat. Vraag gratis een consult aan.'
      : 'VDH Agency helps businesses grow online through SEO, Social Media and professional custom websites. Request a free consultation.',
    alternates: {
      canonical: isNl ? BASE : `${BASE}/en`,
      languages: {
        nl: BASE,
        en: `${BASE}/en`,
        'x-default': BASE,
      },
    },
    openGraph: {
      title: isNl
        ? 'Marketing Bureau Nederland — SEO, Social Media & Webdesign | VDH Agency'
        : 'Marketing Agency Netherlands — SEO, Social Media & Web Design | VDH Agency',
      description: isNl
        ? 'VDH Agency helpt Nederlandse bedrijven online groeien via SEO, Social Media en professionele websites op maat. Vraag gratis een consult aan.'
        : 'VDH Agency helps businesses grow online through SEO, Social Media and professional custom websites. Request a free consultation.',
      siteName: 'VDH Agency',
      type: 'website',
      url: isNl ? BASE : `${BASE}/en`,
      locale: isNl ? 'nl_NL' : 'en_GB',
    },
    twitter: {
      card: 'summary_large_image',
      title: isNl
        ? 'Marketing Bureau Nederland | VDH Agency'
        : 'Marketing Agency Netherlands | VDH Agency',
      description: isNl
        ? 'VDH Agency helpt Nederlandse bedrijven online groeien via SEO, Social Media en professionele websites op maat.'
        : 'VDH Agency helps businesses grow online through SEO, Social Media and professional custom websites.',
    },
    verification: {
      google: 'kg9q-mJMSAnhPF5GgYtIZJ0KAEU_2riXpv8P4UFCSF8',
    },
  };
}

function buildSiteJsonLd(locale: string) {
  const isNl = locale === 'nl';
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['LocalBusiness', 'ProfessionalService'],
        '@id': `${BASE}/#organization`,
        name: 'VDH Agency',
        legalName: 'VDH Agency',
        url: `${BASE}/`,
        description: isNl
          ? 'Nederlands marketing bureau gespecialiseerd in SEO/SEA, social media marketing en websites op maat voor het MKB.'
          : 'Dutch marketing agency specialising in SEO/SEA, social media marketing and custom websites for SMEs.',
        email: 'lars@vdhagency.nl',
        taxID: 'KvK 95792414',
        priceRange: '€€',
        founder: {
          '@type': 'Person',
          '@id': `${BASE}/#lars`,
          name: 'Lars van der Hoek',
        },
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'NL',
        },
        areaServed: {'@type': 'Country', name: 'Netherlands'},
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: isNl ? 'Marketing Diensten' : 'Marketing Services',
          itemListElement: [
            {'@type': 'Offer', itemOffered: {'@type': 'Service', name: 'SEO & SEA'}},
            {'@type': 'Offer', itemOffered: {'@type': 'Service', name: isNl ? 'Social Media Marketing' : 'Social Media Marketing'}},
            {'@type': 'Offer', itemOffered: {'@type': 'Service', name: isNl ? 'Website Maken' : 'Website Development'}},
            {'@type': 'Offer', itemOffered: {'@type': 'Service', name: isNl ? 'Branding & Huisstijl' : 'Branding & Brand Identity'}},
            {'@type': 'Offer', itemOffered: {'@type': 'Service', name: isNl ? 'Digitale Analyse' : 'Digital Analytics & Reporting'}},
          ],
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${BASE}/#website`,
        url: isNl ? `${BASE}/` : `${BASE}/en`,
        name: 'VDH Agency',
        publisher: {'@id': `${BASE}/#organization`},
        inLanguage: isNl ? 'nl-NL' : 'en-GB',
      },
    ],
  };
}

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
          dangerouslySetInnerHTML={{__html: JSON.stringify(buildSiteJsonLd(locale))}}
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
