import type {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const securityHeaders = [
  {key: 'X-Frame-Options', value: 'SAMEORIGIN'},
  {key: 'X-Content-Type-Options', value: 'nosniff'},
  {key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin'},
  {key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=()'},
  {key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload'},
  {key: 'X-DNS-Prefetch-Control', value: 'on'},
];

const nextConfig: NextConfig = {
  async headers() {
    return [{source: '/(.*)', headers: securityHeaders}];
  },
  async redirects() {
    return [
      // Domain redirects
      {
        source: '/:path*',
        has: [{type: 'host', value: 'vdh-agency.nl'}],
        destination: 'https://www.vdh-agency.com/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{type: 'host', value: 'www.vdh-agency.nl'}],
        destination: 'https://www.vdh-agency.com/:path*',
        permanent: true,
      },
      // EN slug redirects: old Dutch slugs → new English slugs
      {source: '/en/diensten',                        destination: '/en/services',                       permanent: true},
      {source: '/en/diensten/seo-sea',                destination: '/en/services/seo-sea',               permanent: true},
      {source: '/en/diensten/social-media-beheer',    destination: '/en/services/social-media-management', permanent: true},
      {source: '/en/diensten/online-marketing',       destination: '/en/services/online-marketing',      permanent: true},
      {source: '/en/diensten/website-maken',          destination: '/en/services/website-development',   permanent: true},
      {source: '/en/diensten/branding',               destination: '/en/services/branding',              permanent: true},
      {source: '/en/diensten/digitale-analyse',       destination: '/en/services/digital-analytics',     permanent: true},
      {source: '/en/over-ons',                        destination: '/en/about',                          permanent: true},
      {source: '/en/seo-bureau',                      destination: '/en/seo-agency',                     permanent: true},
    ];
  },
};

export default withNextIntl(nextConfig);
