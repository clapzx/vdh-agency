import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['nl', 'en'] as const,
  defaultLocale: 'nl',
  localePrefix: 'as-needed',
  localeDetection: false,
  pathnames: {
    '/': '/',
    '/diensten': {
      nl: '/diensten',
      en: '/services',
    },
    '/diensten/seo-sea': {
      nl: '/diensten/seo-sea',
      en: '/services/seo-sea',
    },
    '/diensten/social-media-beheer': {
      nl: '/diensten/social-media-beheer',
      en: '/services/social-media-management',
    },
    '/diensten/online-marketing': {
      nl: '/diensten/online-marketing',
      en: '/services/online-marketing',
    },
    '/diensten/website-maken': {
      nl: '/diensten/website-maken',
      en: '/services/website-development',
    },
    '/diensten/branding': {
      nl: '/diensten/branding',
      en: '/services/branding',
    },
    '/diensten/digitale-analyse': {
      nl: '/diensten/digitale-analyse',
      en: '/services/digital-analytics',
    },
    '/diensten/webshop-maken': {
      nl: '/diensten/webshop-maken',
      en: '/services/ecommerce',
    },
    '/diensten/email-marketing': {
      nl: '/diensten/email-marketing',
      en: '/services/email-marketing',
    },
    '/over-ons': {
      nl: '/over-ons',
      en: '/about',
    },
    '/seo-bureau': {
      nl: '/seo-bureau',
      en: '/seo-agency',
    },
    '/contact': '/contact',
    '/blog': '/blog',
    '/privacybeleid': '/privacybeleid',
    '/algemene-voorwaarden': '/algemene-voorwaarden',
  },
});
