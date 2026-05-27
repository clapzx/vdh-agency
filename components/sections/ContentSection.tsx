import {getTranslations} from 'next-intl/server';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionLabel from '@/components/ui/SectionLabel';

export default async function ContentSection() {
  const t = await getTranslations('contentSection');

  return (
    <section className="bg-light py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <AnimatedSection>
            <SectionLabel>{t('label')}</SectionLabel>
            <h2 className="text-primary font-black text-3xl lg:text-4xl leading-tight mb-8">
              {t('title')}
            </h2>
            <div className="flex flex-col gap-5">
              <p className="text-primary/70 text-base leading-relaxed">{t('p1')}</p>
              <p className="text-primary/70 text-base leading-relaxed">{t('p2')}</p>
              <p className="text-primary/70 text-base leading-relaxed">{t('p3')}</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
