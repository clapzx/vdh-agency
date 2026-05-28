'use client';
import {useState, useEffect} from 'react';
import {Link} from '@/i18n/navigation';
import {useLocale, useTranslations} from 'next-intl';
import {usePathname, useRouter} from '@/i18n/navigation';
import {Menu, X, ArrowRight} from 'lucide-react';
function NLFlag({className}: {className?: string}) {
  return (
    <svg className={className} viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg">
      <rect fill="#AE1C28" width="3" height="0.667"/>
      <rect fill="#fff" width="3" height="0.667" y="0.667"/>
      <rect fill="#21468B" width="3" height="0.666" y="1.334"/>
    </svg>
  );
}
function GBFlag({className}: {className?: string}) {
  return (
    <svg className={className} viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg">
      <rect width="60" height="30" fill="#012169"/>
      <path d="M0 0l60 30M60 0L0 30" stroke="#fff" strokeWidth="6"/>
      <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10"/>
      <path d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth="6"/>
      <path d="M0 0l60 30" stroke="#C8102E" strokeWidth="4" clipPath="url(#s)"/>
      <path d="M60 0L0 30" stroke="#C8102E" strokeWidth="4" clipPath="url(#s2)"/>
      <clipPath id="s"><path d="M30 15h30v15z"/></clipPath>
      <clipPath id="s2"><path d="M30 15H0V0z"/></clipPath>
    </svg>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setScrolled(window.scrollY > 24);
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, {passive: true});
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const switchLocale = (next: 'nl' | 'en') => {
    router.replace(pathname, {locale: next});
  };

  const links = [
    {href: '/diensten', label: t('services')},
    {href: '/over-ons', label: t('about')},
    {href: '/contact', label: t('contact')},
  ] as const;

  const isScrolledOrOpen = scrolled || open;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 will-change-transform ${
        isScrolledOrOpen
          ? 'bg-primary/96 backdrop-blur-md shadow-xl shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-18">
        {/* Logo */}
        <Link href="/" className="flex flex-col items-center leading-none group" style={{width: 'fit-content'}}>
          <span style={{fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 26, fontWeight: 700, color: 'white', lineHeight: 1, letterSpacing: -0.5}}>
            VDH
          </span>
          <span style={{display: 'block', alignSelf: 'stretch', height: 1.5, background: '#D4AF37', marginTop: 3, marginBottom: 3}}/>
          <span style={{fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 10, fontWeight: 400, color: '#D4AF37', letterSpacing: 4, lineHeight: 1, paddingLeft: 4}}>
            AGENCY
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(({href, label}) => (
            <Link
              key={href}
              href={href}
              className="nav-link text-white/80 hover:text-white text-sm font-medium transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-5">
          {/* Language switcher */}
          <div className="flex items-center gap-1 text-xs font-semibold">
            <button
              onClick={() => switchLocale('nl')}
              className={`flex items-center gap-1.5 transition-opacity px-1 py-0.5 rounded cursor-pointer ${
                locale === 'nl' ? 'opacity-100' : 'opacity-40 hover:opacity-70'
              }`}
            >
              <NLFlag className="w-5 h-auto rounded-sm" />
              <span className={locale === 'nl' ? 'text-gold' : 'text-white'}>NL</span>
            </button>
            <span className="text-white/30">|</span>
            <button
              onClick={() => switchLocale('en')}
              className={`flex items-center gap-1.5 transition-opacity px-1 py-0.5 rounded cursor-pointer ${
                locale === 'en' ? 'opacity-100' : 'opacity-40 hover:opacity-70'
              }`}
            >
              <GBFlag className="w-5 h-auto rounded-sm" />
              <span className={locale === 'en' ? 'text-gold' : 'text-white'}>EN</span>
            </button>
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            className="flex items-center gap-2 bg-gold text-primary text-sm font-bold px-5 py-2.5 rounded-sm hover:bg-gold-light transition-colors"
          >
            {t('cta')} <ArrowRight size={14} />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-primary border-t border-white/10 px-6 pb-6 pt-2">
          <nav className="flex flex-col gap-1 mb-5">
            {links.map(({href, label}) => (
              <Link
                key={href}
                href={href}
                className="text-white/80 hover:text-white py-3 border-b border-white/5 text-sm font-medium"
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-xs font-semibold">
              <button
                onClick={() => switchLocale('nl')}
                className={`flex items-center gap-1.5 transition-opacity ${locale === 'nl' ? 'opacity-100' : 'opacity-40'}`}
              >
                <NLFlag className="w-5 h-auto rounded-sm" />
                <span className={locale === 'nl' ? 'text-gold' : 'text-white'}>NL</span>
              </button>
              <span className="text-white/30">|</span>
              <button
                onClick={() => switchLocale('en')}
                className={`flex items-center gap-1.5 transition-opacity ${locale === 'en' ? 'opacity-100' : 'opacity-40'}`}
              >
                <GBFlag className="w-5 h-auto rounded-sm" />
                <span className={locale === 'en' ? 'text-gold' : 'text-white'}>EN</span>
              </button>
            </div>
            <Link
              href="/contact"
              className="bg-gold text-primary text-sm font-bold px-4 py-2 rounded-sm"
            >
              {t('cta')}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
