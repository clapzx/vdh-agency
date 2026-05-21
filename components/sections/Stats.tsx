import {getTranslations} from 'next-intl/server';
import AnimatedSection from '@/components/ui/AnimatedSection';
import CountUp from '@/components/ui/CountUp';

const stats = [
  {to: 50, suffix: '+', labelKey: 'stat1'},
  {to: 100, suffix: '+', labelKey: 'stat2'},
  {to: 98, suffix: '%', labelKey: 'stat3'},
  {to: 3, suffix: 'x', labelKey: 'stat4'},
];

export default async function Stats() {
  const t = await getTranslations('stats');

  return (
    <section className="bg-primary border-y border-white/5 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {stats.map(({to, suffix, labelKey}, i) => (
            <AnimatedSection
              key={labelKey}
              delay={i * 0.08}
              className={`flex flex-col items-center text-center px-6 py-4 ${
                i < stats.length - 1 ? 'border-r border-white/10' : ''
              }`}
            >
              <p className="text-gold font-black text-5xl lg:text-6xl tracking-tight leading-none mb-3">
                <CountUp to={to} suffix={suffix} />
              </p>
              <p className="text-white/50 text-sm leading-snug max-w-[120px]">
                {t(labelKey)}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
