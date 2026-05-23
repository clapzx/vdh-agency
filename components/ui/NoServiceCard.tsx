import {getTranslations} from 'next-intl/server';
import {Link} from '@/i18n/navigation';
import {ArrowRight, MessageCircle} from 'lucide-react';

export default async function NoServiceCard({variant}: {variant: 'grid' | 'step'}) {
  const t = await getTranslations('dienstenPage');

  if (variant === 'step') {
    return (
      <Link
        href="/contact"
        className="group flex flex-col h-full border border-dashed border-white/20 hover:border-gold/50 rounded-sm p-7 transition-all duration-300"
      >
        <div className="w-10 h-10 rounded-sm bg-gold/10 flex items-center justify-center mb-4 shrink-0">
          <MessageCircle size={18} className="text-gold" />
        </div>
        <h3 className="text-white font-bold text-base mb-2">{t('noServiceTitle')}</h3>
        <p className="text-white/40 text-sm leading-relaxed mb-5 flex-1">{t('noServiceDesc')}</p>
        <div className="flex items-center gap-1.5 text-gold text-sm font-semibold group-hover:gap-3 transition-all">
          {t('noServiceCta')}
          <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </Link>
    );
  }

  return (
    <Link
      href="/contact"
      className="group flex flex-col w-full border border-dashed border-primary/20 hover:border-gold/40 rounded-sm overflow-hidden transition-all duration-300 bg-white/50 hover:bg-white"
    >
      <div className="flex flex-col flex-1 p-8">
        <div className="w-12 h-12 rounded-sm bg-primary/5 flex items-center justify-center mb-5 shrink-0">
          <MessageCircle size={22} className="text-primary/40 group-hover:text-gold transition-colors" />
        </div>
        <h2 className="text-primary font-black text-xl leading-tight mb-3">{t('noServiceTitle')}</h2>
        <p className="text-primary/50 text-sm leading-relaxed mb-5 flex-1">{t('noServiceDesc')}</p>
        <div className="flex items-center gap-1.5 text-gold text-sm font-semibold mt-auto group-hover:gap-3 transition-all">
          {t('noServiceCta')}
          <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
