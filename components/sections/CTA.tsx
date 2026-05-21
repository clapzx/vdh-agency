import {getTranslations} from 'next-intl/server';
import {ArrowRight} from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import MagneticButton from '@/components/ui/MagneticButton';
import {Link} from '@/i18n/navigation';

export default async function CTA() {
  const t = await getTranslations('cta');

  return (
    <section className="bg-primary py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-40" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <AnimatedSection>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="block w-6 h-px bg-gold" />
            <span className="text-gold text-xs font-semibold tracking-widest uppercase">
              {t('label')}
            </span>
            <span className="block w-6 h-px bg-gold" />
          </div>

          <h2 className="text-white font-black text-4xl lg:text-5xl xl:text-6xl leading-tight mb-5">
            {t('title')}
          </h2>

          <p className="text-white/60 text-lg mb-10">{t('sub')}</p>

          <MagneticButton>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-gold text-primary font-bold text-base px-8 py-4 rounded-sm hover:bg-gold-light transition-colors active:scale-[0.98] group"
            >
              {t('button')}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </MagneticButton>
        </AnimatedSection>
      </div>
    </section>
  );
}
