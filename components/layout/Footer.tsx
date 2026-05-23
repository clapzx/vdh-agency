import {Link} from '@/i18n/navigation';
import {getTranslations} from 'next-intl/server';
import {Mail, MapPin, FileText} from 'lucide-react';

export default async function Footer() {
  const t = await getTranslations('footer');
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark bg-[#0D1117] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <Link href="/" className="flex flex-col items-center leading-none" style={{width: 'fit-content'}}>
                <span style={{fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 26, fontWeight: 700, color: 'white', lineHeight: 1, letterSpacing: -0.5}}>
                  VDH
                </span>
                <span style={{display: 'block', alignSelf: 'stretch', height: 1.5, background: '#D4AF37', marginTop: 3, marginBottom: 3}} />
                <span style={{fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 10, fontWeight: 400, color: '#D4AF37', letterSpacing: 4, lineHeight: 1, paddingLeft: 4}}>
                  AGENCY
                </span>
              </Link>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              {t('tagline')}
            </p>
            <div className="flex flex-col gap-2 mt-5">
              <a
                href="mailto:lars@vdhagency.nl"
                className="flex items-center gap-2 text-white/50 hover:text-gold text-sm transition-colors"
              >
                <Mail size={14} /> lars@vdhagency.nl
              </a>
              <span className="flex items-center gap-2 text-white/50 text-sm">
                <MapPin size={14} /> {t('location')}
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">{t('colServices')}</h4>
            <ul className="flex flex-col gap-2.5">
              {[
                {href: '/diensten/seo-sea', label: t('seo')},
                {href: '/diensten/social-media-beheer', label: t('social')},
                {href: '/diensten/website-maken', label: t('web')},
              ].map(({href, label}) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-white/50 hover:text-gold text-sm transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">{t('colCompany')}</h4>
            <ul className="flex flex-col gap-2.5">
              {[
                {href: '/over-ons', label: t('about')},
                {href: '/contact', label: t('contact')},
              ].map(({href, label}) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-white/50 hover:text-gold text-sm transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">{t('colLegal')}</h4>
            <ul className="flex flex-col gap-2.5">
              {[
                {href: '/privacybeleid', label: t('privacy')},
                {href: '/algemene-voorwaarden', label: t('terms')},
              ].map(({href, label}) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-white/50 hover:text-gold text-sm transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <p className="text-white/30 text-xs">{t('copy', {year})}</p>
            <span className="hidden sm:block text-white/10 text-xs">·</span>
            <span className="flex items-center gap-1.5 text-white/20 text-xs">
              <FileText size={11} />
              {t('kvk')}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <span className="text-white/30 text-xs">VDH Agency</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
