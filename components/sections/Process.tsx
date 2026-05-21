import {getTranslations} from 'next-intl/server';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionLabel from '@/components/ui/SectionLabel';
import ProcessTimeline from './ProcessTimeline';

export default async function Process() {
  const t = await getTranslations('process');

  const steps = [
    {num: t('s1num'), title: t('s1title'), desc: t('s1desc')},
    {num: t('s2num'), title: t('s2title'), desc: t('s2desc')},
    {num: t('s3num'), title: t('s3title'), desc: t('s3desc')},
    {num: t('s4num'), title: t('s4title'), desc: t('s4desc')},
  ];

  return (
    <section className="bg-light py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="max-w-2xl mx-auto mb-20">
          <SectionLabel>{t('label')}</SectionLabel>
          <h2 className="text-primary font-black text-4xl lg:text-5xl leading-tight">
            {t('title')}
          </h2>
        </AnimatedSection>

        <div className="max-w-2xl mx-auto">
          <ProcessTimeline steps={steps} />
        </div>
      </div>
    </section>
  );
}
