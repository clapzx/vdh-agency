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
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale} = await params;
  const isNl = locale === 'nl';
  const canonical = isNl ? BASE : `${BASE}/en`;

  return {
    metadataBase: new URL(BASE),
    title: {
      default: isNl ? 'VDH Agency — Marketing Bureau' : 'VDH Agency — Marketing Agency',
      template: '%s | VDH Agency',
    },
    description: isNl
      ? 'VDH Agency helpt bedrijven groeien met SEO/SEA, social media beheer en professionele websites op maat.'
      : 'VDH Agency helps businesses grow with proven SEO/SEA strategies, social media management and custom-built websites.',
    alternates: {
      canonical,
      languages: {
        nl: BASE,
        en: `${BASE}/en`,
      },
    },
    openGraph: {
      title: 'VDH Agency',
      description: isNl ? 'Jouw groei is onze missie.' : 'Your growth is our mission.',
      url: canonical,
      siteName: 'VDH Agency',
      locale: isNl ? 'nl_NL' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'VDH Agency',
      description: isNl ? 'Jouw groei is onze missie.' : 'Your growth is our mission.',
    },
  };
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'VDH Agency',
  description: 'Marketing bureau voor SEO/SEA, social media beheer en websites op maat.',
  url: BASE,
  email: 'lars@vdhagency.nl',
  founder: {
    '@type': 'Person',
    name: 'Lars van der Hoek',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Netherlands',
  },
  serviceType: ['SEO', 'Google Ads', 'Social Media Marketing', 'Website Development'],
  priceRange: '€€',
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
