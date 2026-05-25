import {getTranslations} from 'next-intl/server';
import {Search, Video, Globe, ArrowRight} from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionLabel from '@/components/ui/SectionLabel';
import {Link} from '@/i18n/navigation';

export default async function Services() {
  const t = await getTranslations('services');

  const seoTags    = [t('seoTag1'),    t('seoTag2'),    t('seoTag3')];
  const socialTags = [t('socialTag1'), t('socialTag2'), t('socialTag3')];
  const webTags    = [t('webTag1'),    t('webTag2'),    t('webTag3')];

  const services = [
    {num: '01', icon: <Search size={28} />, title: t('seoTitle'),    desc: t('seoDesc'),    tags: seoTags,    dark: false, href: '/diensten/seo-sea'},
    {num: '02', icon: <Video  size={28} />, title: t('socialTitle'), desc: t('socialDesc'), tags: socialTags, dark: true,  href: '/diensten/social-media-beheer'},
    {num: '03', icon: <Globe  size={28} />, title: t('webTitle'),    desc: t('webDesc'),    tags: webTags,    dark: false, href: '/diensten/website-maken'},
  ];

  return (
    <section className="bg-light py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <AnimatedSection className="max-w-2xl mb-16">
          <SectionLabel>{t('label')}</SectionLabel>
          <h2 className="text-primary font-black text-4xl lg:text-5xl leading-tight mb-4">
            {t('title')}
          </h2>
          <p className="text-primary/60 text-lg">{t('subtitle')}</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({num, icon, title, desc, tags, dark, href}, i) => (
            <AnimatedSection key={num} delay={i * 0.1}>
              <div className={[
                'group relative h-full flex flex-col rounded-2xl p-8 overflow-hidden border',
                'transition-all duration-300 ease-out',
                'hover:-translate-y-2 hover:scale-[1.01]',
                dark
                  ? 'bg-primary border-white/8 hover:border-gold/35 hover:shadow-[0_28px_64px_-12px_rgba(212,175,55,0.28)]'
                  : 'bg-white border-primary/6 hover:border-gold/30 hover:shadow-[0_28px_64px_-12px_rgba(212,175,55,0.20)]',
              ].join(' ')}>

                {/* Gold shimmer bar on top edge */}
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Subtle corner glow */}
                <div className={[
                  'absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none',
                  dark ? 'bg-gold/15' : 'bg-gold/10',
                ].join(' ')} />

                {/* Number + icon row */}
                <div className="flex items-start justify-between mb-8">
                  <span className={[
                    'text-6xl font-black leading-none tracking-tighter select-none transition-colors duration-300',
                    dark
                      ? 'text-gold/30 group-hover:text-gold/50'
                      : 'text-gold/25 group-hover:text-gold/45',
                  ].join(' ')}>
                    {num}
                  </span>
                  <div className={[
                    'relative w-14 h-14 rounded-2xl flex items-center justify-center border',
                    'transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_8px_24px_-6px_rgba(212,175,55,0.35)]',
                    dark
                      ? 'bg-gold/12 border-gold/25 text-gold'
                      : 'bg-gold/10 border-gold/20 text-gold',
                  ].join(' ')}>
                    {icon}
                  </div>
                </div>

                <h3 className={`font-black text-xl mb-3 leading-tight ${dark ? 'text-white' : 'text-primary'}`}>
                  {title}
                </h3>

                <p className={`text-sm leading-relaxed flex-1 ${dark ? 'text-white/55' : 'text-primary/55'}`}>
                  {desc}
                </p>

                <div className="flex flex-wrap gap-2 mt-6 mb-5">
                  {tags.map((tag) => (
                    <span key={tag} className={[
                      'text-xs font-medium px-3 py-1.5 rounded-full border transition-colors duration-300',
                      dark
                        ? 'bg-white/5 text-white/55 border-white/10 group-hover:text-gold/80 group-hover:border-gold/25'
                        : 'bg-gold/6 text-gold/80 border-gold/15 group-hover:bg-gold/12 group-hover:text-gold group-hover:border-gold/30',
                    ].join(' ')}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className={`pt-5 border-t ${dark ? 'border-white/8' : 'border-primary/8'}`}>
                  <Link
                    href={href}
                    className="group/link inline-flex items-center gap-2 text-gold text-sm font-semibold hover:gap-3 transition-all"
                  >
                    {t('readMore')}
                    <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}

          {/* 4th cell: view all services */}
          <AnimatedSection delay={0.35}>
            <Link
              href="/diensten"
              className="group h-full flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-primary/15 p-8 text-center hover:border-gold/50 hover:bg-gold/3 transition-all duration-300 min-h-[160px]"
            >
              <div className="w-12 h-12 rounded-full border border-primary/15 flex items-center justify-center mb-4 group-hover:border-gold/50 group-hover:bg-gold/8 transition-all duration-300">
                <ArrowRight size={18} className="text-primary/35 group-hover:text-gold group-hover:translate-x-0.5 transition-all duration-300" />
              </div>
              <span className="text-primary/50 text-sm font-semibold group-hover:text-gold/80 transition-colors leading-snug">
                {t('allServices')}
              </span>
            </Link>
          </AnimatedSection>
        </div>

      </div>
    </section>
  );
}
