import type {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const csp = [
  "default-src 'self'",
  // 'unsafe-inline' needed for Next.js hydration scripts and JSON-LD blocks
  // Cloudflare beacon (analytics) + Turnstile CAPTCHA widget
  "script-src 'self' 'unsafe-inline' https://static.cloudflareinsights.com https://challenges.cloudflare.com",
  // 'unsafe-inline' needed for Tailwind CSS and Next.js style injection
  "style-src 'self' 'unsafe-inline'",
  // Next.js self-hosts Google Fonts; data: for icon SVGs
  "font-src 'self' data:",
  // Allow external images (og-images, etc.) + data URIs
  "img-src 'self' data: https:",
  // Cloudflare beacon reporting + Turnstile verification
  "connect-src 'self' https://static.cloudflareinsights.com https://challenges.cloudflare.com",
  // Turnstile renders in an iframe
  "frame-src https://challenges.cloudflare.com",
  // Prevent this site from being embedded anywhere
  "frame-ancestors 'none'",
  // Lock down form targets and base URL
  "base-uri 'self'",
  "form-action 'self'",
].join('; ');

const securityHeaders = [
  {key: 'Content-Security-Policy', value: csp},
  {key: 'X-Frame-Options', value: 'DENY'},
  {key: 'X-Content-Type-Options', value: 'nosniff'},
  {key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin'},
  {key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=()'},
  {key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload'},
  {key: 'X-DNS-Prefetch-Control', value: 'on'},
  // Isolate browsing context — prevents cross-origin window attacks
  {key: 'Cross-Origin-Opener-Policy', value: 'same-origin'},
  // Prevent other sites from embedding our resources (images, scripts)
  {key: 'Cross-Origin-Resource-Policy', value: 'same-origin'},
  // Legacy XSS filter for old browsers (IE/Edge pre-Chromium)
  {key: 'X-XSS-Protection', value: '1; mode=block'},
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [{source: '/(.*)', headers: securityHeaders}];
  },
  async redirects() {
    return [
      // Favicon: /favicon.ico → /icon (Next.js app/icon.tsx serves at /icon, not /favicon.ico)
      {source: '/favicon.ico', destination: '/icon', permanent: false},
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
