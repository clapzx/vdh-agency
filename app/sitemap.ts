import type {MetadataRoute} from 'next';
import {readdirSync, statSync} from 'fs';
import {join} from 'path';

const BASE = 'https://www.vdh-agency.com';

type RouteEntry = {
  path: string;
  lastModified: string;
  nlOnly?: boolean;
};

const staticRoutes: RouteEntry[] = [
  {path: '',                                      lastModified: '2026-05-22'},
  {path: '/diensten',                             lastModified: '2026-05-22'},
  {path: '/over-ons',                             lastModified: '2026-05-22'},
  {path: '/contact',                              lastModified: '2026-05-22'},
  {path: '/diensten/seo-sea',                     lastModified: '2026-05-22'},
  {path: '/diensten/social-media-beheer',         lastModified: '2026-05-22'},
  {path: '/diensten/online-marketing',            lastModified: '2026-05-24'},
  {path: '/diensten/website-maken',               lastModified: '2026-05-22'},
  {path: '/diensten/branding',                    lastModified: '2026-05-24'},
  {path: '/diensten/digitale-analyse',            lastModified: '2026-05-22'},
  {path: '/seo-bureau',                           lastModified: '2026-05-24'},
  {path: '/blog',                                 lastModified: '2026-05-24'},
  {path: '/privacybeleid',                        lastModified: '2026-05-22'},
  {path: '/algemene-voorwaarden',                 lastModified: '2026-05-22'},
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

  for (const {path, lastModified, nlOnly} of routes) {
    for (const lang of LANGS) {
      if (nlOnly && lang !== 'nl') continue;
      const url = lang === 'nl' ? `${BASE}${path}` : `${BASE}/en${path}`;
      const nlUrl = `${BASE}${path}`;
      const enUrl = nlOnly ? undefined : `${BASE}/en${path}`;
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
