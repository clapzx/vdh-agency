import type {MetadataRoute} from 'next';
import {readdirSync, statSync} from 'fs';
import {join} from 'path';

const BASE = 'https://www.vdh-agency.com';

type RouteEntry = {
  path: string;
  lastModified: string;
  nlOnly?: boolean;
  enPath?: string;
};

const staticRoutes: RouteEntry[] = [
  {path: '',                                      lastModified: '2026-05-27'},
  {path: '/diensten',                             enPath: '/services',                       lastModified: '2026-05-22'},
  {path: '/over-ons',                             enPath: '/about',                          lastModified: '2026-05-27'},
  {path: '/contact',                              lastModified: '2026-05-22'},
  {path: '/diensten/seo-sea',                     enPath: '/services/seo-sea',               lastModified: '2026-05-22'},
  {path: '/diensten/webshop-maken',               enPath: '/services/ecommerce',             lastModified: '2026-05-26'},
  {path: '/diensten/email-marketing',             enPath: '/services/email-marketing',       lastModified: '2026-05-26'},
  {path: '/diensten/social-media-beheer',         enPath: '/services/social-media-management', lastModified: '2026-05-22'},
  {path: '/diensten/online-marketing',            enPath: '/services/online-marketing',      lastModified: '2026-05-24'},
  {path: '/diensten/website-maken',               enPath: '/services/website-development',   lastModified: '2026-05-22'},
  {path: '/diensten/branding',                    enPath: '/services/branding',              lastModified: '2026-05-24'},
  {path: '/diensten/digitale-analyse',            enPath: '/services/digital-analytics',     lastModified: '2026-05-22'},
  {path: '/seo-bureau',                           enPath: '/seo-agency',                     lastModified: '2026-05-25'},
  {path: '/blog',                                 lastModified: '2026-05-24'},
  {path: '/privacybeleid',                        lastModified: '2026-05-27'},
  {path: '/algemene-voorwaarden',                 lastModified: '2026-05-22'},
  {path: '/website-laten-maken',                  lastModified: '2026-05-26', nlOnly: true},
  {path: '/hoger-in-google',                       lastModified: '2026-05-26', nlOnly: true},
  {path: '/google-ads-bureau',                       lastModified: '2026-05-26', nlOnly: true},
  {path: '/lokale-seo',                            lastModified: '2026-05-26', nlOnly: true},
  {path: '/marketing-bureau-gelderland',           lastModified: '2026-05-26', nlOnly: true},
  {path: '/marketing-bureau-overijssel',           lastModified: '2026-05-26', nlOnly: true},
  {path: '/shopify-webshop',                       lastModified: '2026-05-26', nlOnly: true},
  {path: '/online-marketing-bureau',               lastModified: '2026-05-26', nlOnly: true},
  {path: '/social-media-bureau',                   lastModified: '2026-05-26', nlOnly: true},
  {path: '/webdesign-bureau',                      lastModified: '2026-05-26', nlOnly: true},
  {path: '/seo-zwolle',                            lastModified: '2026-05-26', nlOnly: true},
  {path: '/seo-apeldoorn',                         lastModified: '2026-05-26', nlOnly: true},
  {path: '/google-ads-zwolle',                     lastModified: '2026-05-26', nlOnly: true},
  {path: '/website-laten-maken-zwolle',            lastModified: '2026-05-26', nlOnly: true},
  {path: '/website-laten-maken-apeldoorn',         lastModified: '2026-05-26', nlOnly: true},
  {path: '/google-ads-apeldoorn',                  lastModified: '2026-05-26', nlOnly: true},
  {path: '/marketing-bureau',                      lastModified: '2026-05-26', nlOnly: true},
  // Locatiepagina's
  {path: '/marketing-bureau/heerde',              lastModified: '2026-05-27', nlOnly: true},
  {path: '/marketing-bureau/hattem',              lastModified: '2026-05-27', nlOnly: true},
  {path: '/marketing-bureau/epe',                 lastModified: '2026-05-27', nlOnly: true},
  {path: '/marketing-bureau/wezep',               lastModified: '2026-05-27', nlOnly: true},
  {path: '/marketing-bureau/oldebroek',           lastModified: '2026-05-27', nlOnly: true},
  {path: '/marketing-bureau/vaassen',             lastModified: '2026-05-27', nlOnly: true},
  {path: '/marketing-bureau/t-harde',             lastModified: '2026-05-27', nlOnly: true},
  {path: '/marketing-bureau/elburg',              lastModified: '2026-05-27', nlOnly: true},
  {path: '/marketing-bureau/wijhe',               lastModified: '2026-05-27', nlOnly: true},
  {path: '/marketing-bureau/olst',                lastModified: '2026-05-27', nlOnly: true},
  {path: '/marketing-bureau/apeldoorn',           lastModified: '2026-05-27', nlOnly: true},
  {path: '/marketing-bureau/nunspeet',            lastModified: '2026-05-27', nlOnly: true},
  {path: '/marketing-bureau/kampen',              lastModified: '2026-05-27', nlOnly: true},
  {path: '/marketing-bureau/raalte',              lastModified: '2026-05-27', nlOnly: true},
  {path: '/marketing-bureau/zwolle',              lastModified: '2026-05-27', nlOnly: true},
  {path: '/marketing-bureau/harderwijk',          lastModified: '2026-05-27', nlOnly: true},
  {path: '/marketing-bureau/deventer',            lastModified: '2026-05-27', nlOnly: true},
  {path: '/marketing-bureau/zutphen',             lastModified: '2026-05-27', nlOnly: true},
  {path: '/marketing-bureau/dalfsen',             lastModified: '2026-05-27', nlOnly: true},
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

  for (const {path, lastModified, nlOnly, enPath} of routes) {
    for (const lang of LANGS) {
      if (nlOnly && lang !== 'nl') continue;
      const effectiveEnPath = enPath ?? path;
      const url = lang === 'nl' ? `${BASE}${path}` : `${BASE}/en${effectiveEnPath}`;
      const nlUrl = `${BASE}${path}`;
      const enUrl = nlOnly ? undefined : `${BASE}/en${effectiveEnPath}`;
      entries.push({
        url,
        lastModified: new Date(lastModified),
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
