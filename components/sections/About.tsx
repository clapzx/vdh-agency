import {getTranslations} from 'next-intl/server';
import {ArrowRight, MessageSquare, BarChart2, Layers} from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionLabel from '@/components/ui/SectionLabel';
import {Link} from '@/i18n/navigation';

export default async function About() {
  const t = await getTranslations('about');

  const points = [
    {Icon: MessageSquare, text: t('point1')},
    {Icon: BarChart2,     text: t('point2')},
    {Icon: Layers,        text: t('point3')},
  ];

  return (
    <section className="bg-primary py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Text */}
          <AnimatedSection direction="left">
            <SectionLabel>{t('label')}</SectionLabel>
            <h2 className="text-white font-black text-4xl lg:text-5xl leading-tight mb-6">
              {t('title')}
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-4">{t('p1')}</p>
            <p className="text-white/60 text-base leading-relaxed mb-10">{t('p2')}</p>

            <Link
              href="/over-ons"
              className="inline-flex items-center gap-2 text-gold font-semibold text-sm hover:gap-3 transition-all group"
            >
              {t('cta')}
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>

          {/* Right: Why VDH Agency card */}
          <AnimatedSection direction="right" delay={0.15}>
            <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-10 overflow-hidden">

              <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-gold/10 blur-3xl pointer-events-none" />

              <div className="mb-8">
                <span className="text-gold text-xs font-semibold tracking-widest uppercase block mb-2">
                  VDH Agency
                </span>
                <h3 className="text-white font-bold text-xl leading-tight">{t('whyTitle')}</h3>
              </div>

              <div className="h-px bg-white/8 mb-8" />

              <div className="flex flex-col gap-5">
                {points.map(({Icon, text}) => (
                  <div key={text} className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                      <Icon size={15} className="text-gold" />
                    </div>
                    <span className="text-white/70 text-sm leading-snug">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}
