import type {Metadata} from 'next';
import {ArrowRight} from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionLabel from '@/components/ui/SectionLabel';
import CTA from '@/components/sections/CTA';
import {Link} from '@/i18n/navigation';

const BASE = 'https://www.vdh-agency.com';

export async function generateMetadata({
  params,
}: {
  params?: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale = 'nl'} = params ? await params : {};
  const isNl = locale === 'nl';
  const canonical = isNl ? `${BASE}/blog` : `${BASE}/en/blog`;

  return {
    title: isNl
      ? 'Blog — Lokale SEO & Online Marketing Inzichten | VDH Agency'
      : 'Blog — Local SEO & Online Marketing Insights | VDH Agency',
    description: isNl
      ? 'Praktische inzichten over lokale SEO, online marketing en digitale groei voor het Nederlandse MKB. Geschreven door Lars van der Hoek, oprichter VDH Agency.'
      : 'Practical insights on local SEO, online marketing and digital growth for Dutch SMEs. Written by Lars van der Hoek, founder of VDH Agency.',
    alternates: {
      canonical,
      languages: {
        nl: `${BASE}/blog`,
        en: `${BASE}/en/blog`,
        'x-default': `${BASE}/blog`,
      },
    },
  };
}

const posts = [
  {
    slug: '/blog/lokale-vindbaarheid-google-profiel',
    date: '24 mei 2026',
    dateTime: '2026-05-24',
    category: 'Lokale SEO',
    readTime: '8 min',
    title: 'Gevonden worden op Google Maps: waarom het lastiger is dan het lijkt',
    excerpt:
      'Je hebt je bedrijf aangemeld bij Google, maar klanten vinden je niet. Hoe zit dat? We leggen uit wat er écht voor nodig is om bovenaan te staan — in gewone taal, zonder vakjargon.',
  },
];

export default async function BlogIndexPage({
  params,
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  const isNl = locale === 'nl';

  return (
    <>
      {/* Hero */}
      <section className="bg-primary pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-6 h-px bg-gold" />
              <span className="text-gold text-xs font-semibold tracking-widest uppercase">
                {isNl ? 'Blog' : 'Blog'}
              </span>
            </div>
            <h1 className="text-white font-black text-4xl lg:text-6xl leading-tight mb-5">
              {isNl ? 'Inzichten voor online groei' : 'Insights for online growth'}
            </h1>
            <p className="text-white/60 text-xl">
              {isNl
                ? 'Praktische kennis over lokale SEO, online marketing en digitale strategie — geschreven voor het Nederlandse MKB.'
                : 'Practical knowledge on local SEO, online marketing and digital strategy — written for Dutch SMEs.'}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Posts */}
      <section className="bg-light py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-14">
            <SectionLabel>{isNl ? 'Artikelen' : 'Articles'}</SectionLabel>
            <h2 className="text-primary font-black text-3xl lg:text-4xl">
              {isNl ? 'Alle publicaties' : 'All publications'}
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <AnimatedSection key={post.slug} delay={i * 0.08}>
                <Link
                  href={post.slug}
                  className="group bg-white border border-primary/10 rounded-sm p-7 flex flex-col h-full hover:border-gold/30 hover:shadow-lg transition-all duration-200 block"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-gold text-xs font-semibold bg-gold/10 px-2.5 py-1 rounded-sm">
                      {post.category}
                    </span>
                    <span className="text-primary/30 text-xs">{post.readTime} leestijd</span>
                  </div>
                  <h2 className="text-primary font-bold text-base leading-snug mb-3 group-hover:text-gold transition-colors flex-1">
                    {post.title}
                  </h2>
                  <p className="text-primary/60 text-sm leading-relaxed mb-5">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-5 border-t border-primary/10">
                    <time dateTime={post.dateTime} className="text-primary/40 text-xs">
                      {post.date}
                    </time>
                    <span className="flex items-center gap-1 text-gold text-xs font-semibold group-hover:gap-2 transition-all">
                      {isNl ? 'Lees artikel' : 'Read article'}
                      <ArrowRight size={12} />
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
