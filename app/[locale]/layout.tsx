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
    default: 'VDH Agency — Marketing Bureau',
    template: '%s | VDH Agency',
  },
  description: 'VDH Agency helpt bedrijven groeien met SEO/SEA, social media beheer en professionele websites op maat.',
  openGraph: {
    title: 'VDH Agency',
    description: 'Jouw groei is onze missie.',
    siteName: 'VDH Agency',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VDH Agency',
    description: 'Jouw groei is onze missie.',
  },
  verification: {
    google: 'kg9q-mJMSAnhPF5GgYtIZJ0KAEU_2riXpv8P4UFCSF8',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'VDH Agency',
  description: 'Marketing bureau voor SEO/SEA, social media beheer en websites op maat.',
  url: BASE,
  email: 'lars@vdhagency.nl',
  founder: {'@type': 'Person', name: 'Lars van der Hoek'},
  areaServed: {'@type': 'Country', name: 'Netherlands'},
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
