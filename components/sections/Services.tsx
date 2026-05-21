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

  return (
    <section className="bg-light py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <AnimatedSection className="max-w-2xl mb-16">
          <SectionLabel>{t('label')}</SectionLabel>
          <h2 className="text-primary font-black text-4xl lg:text-5xl leading-tight mb-4">
            {t('title')}
          </h2>
          <p className="text-primary/60 text-lg">{t('subtitle')}</p>
        </AnimatedSection>

        {/* Asymmetric bento grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-5">

          {/* SEO — large card, spans both rows */}
          <AnimatedSection direction="left" className="lg:row-span-2">
            <div className="group relative h-full bg-white rounded-2xl p-10 overflow-hidden shadow-sm hover:shadow-[0_20px_60px_-15px_rgba(212,175,55,0.18)] transition-all duration-500 flex flex-col min-h-[400px] border border-primary/5 hover:border-gold/20">

              {/* Watermark number */}
              <span className="absolute top-6 right-8 text-[7rem] font-black text-primary/[0.04] leading-none select-none pointer-events-none">
                01
              </span>

              {/* Gold left accent */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold rounded-l-2xl" />

              {/* Top glow on hover */}
              <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Icon */}
              <div className="relative w-14 h-14 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-8">
                <Search size={24} className="text-gold" />
                <div className="absolute inset-0 rounded-xl bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
              </div>

              <h3 className="text-primary font-black text-2xl lg:text-3xl mb-4 leading-tight relative">
                {t('seoTitle')}
              </h3>
              <p className="text-primary/60 text-base leading-relaxed flex-1 relative">
                {t('seoDesc')}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-8 mb-6 relative">
                {seoTags.map((tag) => (
                  <span key={tag} className="text-xs font-medium bg-gold/8 text-gold border border-gold/15 px-3 py-1.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="pt-5 border-t border-primary/8 relative">
                <Link
                  href="/diensten"
                  className="group/link inline-flex items-center gap-2 text-gold text-sm font-semibold hover:gap-3 transition-all"
                >
                  {t('readMore')}
                  <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </AnimatedSection>

          {/* Social Media */}
          <AnimatedSection delay={0.1}>
            <div className="group relative h-full bg-white rounded-2xl p-8 overflow-hidden shadow-sm hover:shadow-[0_20px_60px_-15px_rgba(212,175,55,0.15)] transition-all duration-500 flex flex-col border border-primary/5 hover:border-gold/20">

              <span className="absolute top-4 right-6 text-[5rem] font-black text-primary/[0.04] leading-none select-none pointer-events-none">
                02
              </span>

              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-5">
                <Video size={20} className="text-gold" />
              </div>

              <h3 className="text-primary font-bold text-xl mb-3 relative">{t('socialTitle')}</h3>
              <p className="text-primary/60 text-sm leading-relaxed flex-1 relative">{t('socialDesc')}</p>

              <div className="flex flex-wrap gap-1.5 mt-5 mb-4 relative">
                {socialTags.map((tag) => (
                  <span key={tag} className="text-xs font-medium bg-gold/8 text-gold border border-gold/15 px-2.5 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href="/diensten"
                className="group/link inline-flex items-center gap-2 text-gold text-sm font-semibold hover:gap-3 transition-all relative"
              >
                {t('readMore')}
                <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </AnimatedSection>

          {/* Website */}
          <AnimatedSection delay={0.2}>
            <div className="group relative h-full bg-primary rounded-2xl p-8 overflow-hidden shadow-sm hover:shadow-[0_20px_60px_-15px_rgba(212,175,55,0.2)] transition-all duration-500 flex flex-col border border-white/5 hover:border-gold/25">

              <span className="absolute top-4 right-6 text-[5rem] font-black text-white/[0.04] leading-none select-none pointer-events-none">
                03
              </span>

              {/* Gold glow blob */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-gold/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-5">
                <Globe size={20} className="text-gold" />
              </div>

              <h3 className="text-white font-bold text-xl mb-3 relative">{t('webTitle')}</h3>
              <p className="text-white/50 text-sm leading-relaxed flex-1 relative">{t('webDesc')}</p>

              <div className="flex flex-wrap gap-1.5 mt-5 mb-4 relative">
                {webTags.map((tag) => (
                  <span key={tag} className="text-xs font-medium bg-white/5 text-white/60 border border-white/10 px-2.5 py-1 rounded-full group-hover:border-gold/20 group-hover:text-gold/80 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href="/diensten"
                className="group/link inline-flex items-center gap-2 text-gold text-sm font-semibold mt-auto hover:gap-3 transition-all relative"
              >
                {t('readMore')}
                <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}
