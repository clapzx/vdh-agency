'use client';
import {useState, useEffect} from 'react';
import Link from 'next/link';
import {useLocale, useTranslations} from 'next-intl';
import {usePathname, useRouter} from '@/i18n/navigation';
import {Menu, X, ArrowRight} from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, {passive: true});
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
  ];

  const isScrolledOrOpen = scrolled || open;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolledOrOpen
          ? 'bg-primary/96 backdrop-blur-md shadow-xl shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-18">
        {/* Logo */}
        <Link href="/" className="flex flex-col items-start leading-none group">
          <span style={{fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 26, fontWeight: 700, color: 'white', lineHeight: 1, letterSpacing: -0.5}}>
            VDH
          </span>
          <span style={{fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 10, fontWeight: 400, color: '#D4AF37', letterSpacing: 4, lineHeight: 1, marginTop: 3}}>
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
              className={`transition-colors px-1 py-0.5 rounded cursor-pointer ${
                locale === 'nl' ? 'text-gold' : 'text-white/50 hover:text-white/80'
              }`}
            >
              🇳🇱 NL
            </button>
            <span className="text-white/30">|</span>
            <button
              onClick={() => switchLocale('en')}
              className={`transition-colors px-1 py-0.5 rounded cursor-pointer ${
                locale === 'en' ? 'text-gold' : 'text-white/50 hover:text-white/80'
              }`}
            >
              🇬🇧 EN
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
                className={locale === 'nl' ? 'text-gold' : 'text-white/50'}
              >
                🇳🇱 NL
              </button>
              <span className="text-white/30">|</span>
              <button
                onClick={() => switchLocale('en')}
                className={locale === 'en' ? 'text-gold' : 'text-white/50'}
              >
                🇬🇧 EN
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
