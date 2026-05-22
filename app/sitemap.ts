import type {MetadataRoute} from 'next';

const BASE = 'https://www.vdh-agency.com';
const routes = ['', '/diensten', '/over-ons', '/contact'];

export default function sitemap(): MetadataRoute.Sitemap {
  const nlUrls = routes.map((route) => ({
    url: `${BASE}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === '' ? 'weekly' : 'monthly') as 'weekly' | 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

  const enUrls = routes.map((route) => ({
    url: `${BASE}/en${route}`,
    lastModified: new Date(),
    changeFrequency: (route === '' ? 'weekly' : 'monthly') as 'weekly' | 'monthly',
    priority: route === '' ? 0.9 : 0.7,
  }));

  return [...nlUrls, ...enUrls];
}
