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

export const metadata: Metadata = {
  title: 'VDH Agency — Marketing Bureau',
  description:
    'VDH Agency helpt bedrijven groeien met SEO/SEA, social media beheer en op maat gemaakte websites.',
  openGraph: {
    title: 'VDH Agency',
    description: 'Jouw groei is onze missie.',
    type: 'website',
  },
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
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
