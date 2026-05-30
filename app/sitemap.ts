import type {MetadataRoute} from 'next';
import {readdirSync, statSync} from 'fs';
import {join} from 'path';

const BASE = 'https://www.vdh-agency.com';

type ChangeFreq = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';

type RouteEntry = {
  path: string;
  lastModified: string;
  nlOnly?: boolean;
  enPath?: string;
  changeFrequency?: ChangeFreq;
  priority?: number;
};

const staticRoutes: RouteEntry[] = [
  // ── Homepage ──────────────────────────────────────────────────────────────
  {path: '',                                    lastModified: '2026-05-27', changeFrequency: 'weekly',  priority: 1.0},

  // ── Core pages ────────────────────────────────────────────────────────────
  {path: '/over-ons',    enPath: '/about',       lastModified: '2026-05-27', changeFrequency: 'monthly', priority: 0.7},
  {path: '/contact',                             lastModified: '2026-05-22', changeFrequency: 'monthly', priority: 0.7},
  {path: '/blog',        nlOnly: true,           lastModified: '2026-05-24', changeFrequency: 'weekly',  priority: 0.7},

  // ── Diensten (hoofd) ─────────────────────────────────────────────────────
  {path: '/diensten',    enPath: '/services',    lastModified: '2026-05-22', changeFrequency: 'monthly', priority: 0.9},

  // ── Diensten (individueel) ────────────────────────────────────────────────
  {path: '/diensten/seo-sea',             enPath: '/services/seo-sea',               lastModified: '2026-05-22', changeFrequency: 'monthly', priority: 0.8},
  {path: '/diensten/social-media-beheer', enPath: '/services/social-media-management', lastModified: '2026-05-22', changeFrequency: 'monthly', priority: 0.8},
  {path: '/diensten/online-marketing',    enPath: '/services/online-marketing',       lastModified: '2026-05-24', changeFrequency: 'monthly', priority: 0.8},
  {path: '/diensten/website-maken',       enPath: '/services/website-development',    lastModified: '2026-05-22', changeFrequency: 'monthly', priority: 0.8},
  {path: '/diensten/branding',            enPath: '/services/branding',               lastModified: '2026-05-24', changeFrequency: 'monthly', priority: 0.8},
  {path: '/diensten/digitale-analyse',    enPath: '/services/digital-analytics',      lastModified: '2026-05-22', changeFrequency: 'monthly', priority: 0.8},
  {path: '/diensten/webshop-maken',       enPath: '/services/ecommerce',              lastModified: '2026-05-26', changeFrequency: 'monthly', priority: 0.8},
  {path: '/diensten/email-marketing',     enPath: '/services/email-marketing',        lastModified: '2026-05-26', changeFrequency: 'monthly', priority: 0.8},

  // ── SEO-landingspagina's ─────────────────────────────────────────────────
  {path: '/seo-bureau',          enPath: '/seo-agency', lastModified: '2026-05-25', changeFrequency: 'monthly', priority: 0.8, nlOnly: false},
  {path: '/hoger-in-google',     nlOnly: true,          lastModified: '2026-05-26', changeFrequency: 'monthly', priority: 0.8},
  {path: '/lokale-seo',          nlOnly: true,          lastModified: '2026-05-26', changeFrequency: 'monthly', priority: 0.8},

  // ── Google Ads landingspagina's ───────────────────────────────────────────
  {path: '/google-ads-bureau',   nlOnly: true,          lastModified: '2026-05-26', changeFrequency: 'monthly', priority: 0.8},
  {path: '/google-ads-zwolle',   nlOnly: true,          lastModified: '2026-05-26', changeFrequency: 'monthly', priority: 0.7},
  {path: '/google-ads-apeldoorn', nlOnly: true,         lastModified: '2026-05-26', changeFrequency: 'monthly', priority: 0.7},

  // ── SEO stadspagina's ─────────────────────────────────────────────────────
  {path: '/seo-zwolle',          nlOnly: true,          lastModified: '2026-05-26', changeFrequency: 'monthly', priority: 0.7},
  {path: '/seo-apeldoorn',       nlOnly: true,          lastModified: '2026-05-26', changeFrequency: 'monthly', priority: 0.7},

  // ── Website landingspagina's ──────────────────────────────────────────────
  {path: '/website-laten-maken',          nlOnly: true, lastModified: '2026-05-26', changeFrequency: 'monthly', priority: 0.8},
  {path: '/website-laten-maken-zwolle',   nlOnly: true, lastModified: '2026-05-26', changeFrequency: 'monthly', priority: 0.7},
  {path: '/website-laten-maken-apeldoorn', nlOnly: true, lastModified: '2026-05-26', changeFrequency: 'monthly', priority: 0.7},

  // ── Online marketing pagina's ─────────────────────────────────────────────
  {path: '/online-marketing-bureau', nlOnly: true,      lastModified: '2026-05-26', changeFrequency: 'monthly', priority: 0.8},
  {path: '/social-media-bureau',     nlOnly: true,      lastModified: '2026-05-26', changeFrequency: 'monthly', priority: 0.8},
  {path: '/webdesign-bureau',        nlOnly: true,      lastModified: '2026-05-26', changeFrequency: 'monthly', priority: 0.8},
  {path: '/shopify-webshop',         nlOnly: true,      lastModified: '2026-05-26', changeFrequency: 'monthly', priority: 0.7},

  // ── Marketing bureau overzicht ────────────────────────────────────────────
  {path: '/marketing-bureau',                  nlOnly: true, lastModified: '2026-05-30', changeFrequency: 'monthly', priority: 0.8},
  {path: '/marketing-bureau-gelderland',       nlOnly: true, lastModified: '2026-05-30', changeFrequency: 'monthly', priority: 0.8},
  {path: '/marketing-bureau-overijssel',       nlOnly: true, lastModified: '2026-05-30', changeFrequency: 'monthly', priority: 0.8},

  // ── Marketing bureau stadspagina's (19 steden) ───────────────────────────
  {path: '/marketing-bureau/heerde',           nlOnly: true, lastModified: '2026-05-30', changeFrequency: 'monthly', priority: 0.7},
  {path: '/marketing-bureau/hattem',           nlOnly: true, lastModified: '2026-05-30', changeFrequency: 'monthly', priority: 0.7},
  {path: '/marketing-bureau/epe',              nlOnly: true, lastModified: '2026-05-30', changeFrequency: 'monthly', priority: 0.7},
  {path: '/marketing-bureau/wezep',            nlOnly: true, lastModified: '2026-05-30', changeFrequency: 'monthly', priority: 0.7},
  {path: '/marketing-bureau/oldebroek',        nlOnly: true, lastModified: '2026-05-30', changeFrequency: 'monthly', priority: 0.7},
  {path: '/marketing-bureau/vaassen',          nlOnly: true, lastModified: '2026-05-30', changeFrequency: 'monthly', priority: 0.7},
  {path: '/marketing-bureau/t-harde',          nlOnly: true, lastModified: '2026-05-30', changeFrequency: 'monthly', priority: 0.7},
  {path: '/marketing-bureau/elburg',           nlOnly: true, lastModified: '2026-05-30', changeFrequency: 'monthly', priority: 0.7},
  {path: '/marketing-bureau/wijhe',            nlOnly: true, lastModified: '2026-05-30', changeFrequency: 'monthly', priority: 0.7},
  {path: '/marketing-bureau/olst',             nlOnly: true, lastModified: '2026-05-30', changeFrequency: 'monthly', priority: 0.7},
  {path: '/marketing-bureau/apeldoorn',        nlOnly: true, lastModified: '2026-05-30', changeFrequency: 'monthly', priority: 0.7},
  {path: '/marketing-bureau/nunspeet',         nlOnly: true, lastModified: '2026-05-30', changeFrequency: 'monthly', priority: 0.7},
  {path: '/marketing-bureau/kampen',           nlOnly: true, lastModified: '2026-05-30', changeFrequency: 'monthly', priority: 0.7},
  {path: '/marketing-bureau/raalte',           nlOnly: true, lastModified: '2026-05-30', changeFrequency: 'monthly', priority: 0.7},
  {path: '/marketing-bureau/zwolle',           nlOnly: true, lastModified: '2026-05-30', changeFrequency: 'monthly', priority: 0.8},
  {path: '/marketing-bureau/harderwijk',       nlOnly: true, lastModified: '2026-05-30', changeFrequency: 'monthly', priority: 0.7},
  {path: '/marketing-bureau/deventer',         nlOnly: true, lastModified: '2026-05-30', changeFrequency: 'monthly', priority: 0.7},
  {path: '/marketing-bureau/zutphen',          nlOnly: true, lastModified: '2026-05-30', changeFrequency: 'monthly', priority: 0.7},
  {path: '/marketing-bureau/dalfsen',          nlOnly: true, lastModified: '2026-05-30', changeFrequency: 'monthly', priority: 0.7},

  // ── Juridisch ─────────────────────────────────────────────────────────────
  {path: '/privacybeleid',        lastModified: '2026-05-27', changeFrequency: 'yearly',  priority: 0.3},
  {path: '/algemene-voorwaarden', lastModified: '2026-05-22', changeFrequency: 'yearly',  priority: 0.3},
];

function getBlogPostRoutes(): RouteEntry[] {
  const blogDir = join(process.cwd(), 'app/[locale]/blog');
  try {
    return readdirSync(blogDir, {withFileTypes: true})
      .filter(e => e.isDirectory())
      .map(e => {
        const mtime = statSync(join(blogDir, e.name)).mtime;
        return {
          path: `/blog/${e.name}`,
          lastModified: mtime.toISOString().split('T')[0],
          nlOnly: true,
          changeFrequency: 'monthly' as ChangeFreq,
          priority: 0.6,
        };
      });
  } catch {
    return [];
  }
}

const LANGS = ['nl', 'en'] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [...staticRoutes, ...getBlogPostRoutes()];
  const entries: MetadataRoute.Sitemap = [];

  for (const {path, lastModified, nlOnly, enPath, changeFrequency, priority} of routes) {
    for (const lang of LANGS) {
      if (nlOnly && lang !== 'nl') continue;
      const effectiveEnPath = enPath ?? path;
      const url = lang === 'nl' ? `${BASE}${path}` : `${BASE}/en${effectiveEnPath}`;
      const nlUrl = `${BASE}${path}`;
      const enUrl = nlOnly ? undefined : `${BASE}/en${effectiveEnPath}`;
      entries.push({
        url,
        lastModified: new Date(lastModified),
        changeFrequency,
        priority,
        alternates: {
          languages: {
            nl: nlUrl,
            ...(enUrl && {en: enUrl}),
          },
        },
      });
    }
  }

  return entries;
}
