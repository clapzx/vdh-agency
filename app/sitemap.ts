import type {MetadataRoute} from 'next';

const BASE = 'https://www.vdh-agency.com';

type RouteConfig = {
  path: string;
  lastModified: string;
  changeFrequency: 'weekly' | 'monthly' | 'yearly';
  nlPriority: number;
  enPriority: number;
};

const routes: RouteConfig[] = [
  {path: '',                       lastModified: '2026-05-22', changeFrequency: 'weekly',  nlPriority: 1.0, enPriority: 0.9},
  {path: '/diensten',              lastModified: '2026-05-22', changeFrequency: 'monthly', nlPriority: 0.9, enPriority: 0.8},
  {path: '/over-ons',              lastModified: '2026-05-22', changeFrequency: 'monthly', nlPriority: 0.8, enPriority: 0.7},
  {path: '/contact',               lastModified: '2026-05-22', changeFrequency: 'monthly', nlPriority: 0.8, enPriority: 0.7},
  {path: '/diensten/seo-sea',              lastModified: '2026-05-22', changeFrequency: 'monthly', nlPriority: 0.9, enPriority: 0.8},
  {path: '/diensten/social-media-beheer',  lastModified: '2026-05-22', changeFrequency: 'monthly', nlPriority: 0.9, enPriority: 0.8},
  {path: '/diensten/online-marketing',     lastModified: '2026-05-23', changeFrequency: 'monthly', nlPriority: 0.9, enPriority: 0.8},
  {path: '/diensten/website-maken',        lastModified: '2026-05-22', changeFrequency: 'monthly', nlPriority: 0.9, enPriority: 0.8},
  {path: '/diensten/branding',             lastModified: '2026-05-23', changeFrequency: 'monthly', nlPriority: 0.9, enPriority: 0.8},
  {path: '/diensten/digitale-analyse',     lastModified: '2026-05-22', changeFrequency: 'monthly', nlPriority: 0.9, enPriority: 0.8},
  {path: '/privacybeleid',                 lastModified: '2026-05-22', changeFrequency: 'yearly',  nlPriority: 0.3, enPriority: 0.3},
  {path: '/algemene-voorwaarden',          lastModified: '2026-05-22', changeFrequency: 'yearly',  nlPriority: 0.3, enPriority: 0.3},
];

export default function sitemap(): MetadataRoute.Sitemap {
  const nlUrls = routes.map(({path, lastModified, changeFrequency, nlPriority}) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(lastModified),
    changeFrequency,
    priority: nlPriority,
  }));

  const enUrls = routes.map(({path, lastModified, changeFrequency, enPriority}) => ({
    url: `${BASE}/en${path}`,
    lastModified: new Date(lastModified),
    changeFrequency,
    priority: enPriority,
  }));

  return [...nlUrls, ...enUrls];
}
