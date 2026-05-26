import {getTranslations, getLocale} from 'next-intl/server';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionLabel from '@/components/ui/SectionLabel';

const NL_LINKS = [
  {href: '/hoger-in-google',           label: 'Hoger in Google'},
  {href: '/lokale-seo',                label: 'Lokale SEO'},
  {href: '/shopify-webshop',           label: 'Shopify Webshop'},
  {href: '/social-media-bureau',       label: 'Social Media Bureau'},
  {href: '/marketing-bureau-gelderland', label: 'Marketing Bureau Gelderland'},
  {href: '/marketing-bureau-overijssel', label: 'Marketing Bureau Overijssel'},
  {href: '/website-laten-maken-zwolle',  label: 'Website laten maken Zwolle'},
  {href: '/website-laten-maken-apeldoorn', label: 'Website laten maken Apeldoorn'},
];

export default async function ContentSection() {
  const t = await getTranslations('contentSection');
  const locale = await getLocale();
  const isNl = locale === 'nl';

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
            {isNl && (
              <div className="mt-8 flex flex-wrap gap-2">
                {NL_LINKS.map(({href, label}) => (
                  <a
                    key={href}
                    href={href}
                    className="text-primary/50 hover:text-gold border border-primary/10 hover:border-gold/30 text-xs px-3 py-1.5 rounded-sm transition-colors"
                  >
                    {label}
                  </a>
                ))}
              </div>
            )}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
