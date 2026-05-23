'use client';
import {motion, useMotionValue, useSpring} from 'framer-motion';
import {useTranslations} from 'next-intl';
import {ArrowRight, ChevronDown} from 'lucide-react';
import {Link} from '@/i18n/navigation';
import {useRef, useState} from 'react';
import CountUp from '@/components/ui/CountUp';

const container = {
  hidden: {},
  show: {transition: {staggerChildren: 0.1, delayChildren: 0.15}},
};

const item = {
  hidden: {opacity: 0, y: 24},
  show: {
    opacity: 1,
    y: 0,
    transition: {type: 'spring' as const, stiffness: 80, damping: 18},
  },
};

function MagneticCTA({children}: {children: React.ReactNode}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, {stiffness: 150, damping: 15});
  const springY = useSpring(y, {stiffness: 150, damping: 15});

  return (
    <motion.div
      ref={ref}
      style={{x: springX, y: springY}}
      onMouseMove={(e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        x.set((e.clientX - rect.left - rect.width / 2) * 0.3);
        y.set((e.clientY - rect.top - rect.height / 2) * 0.3);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}

function FloatingDashboard() {
  const [ready, setReady] = useState(false);
  const t = useTranslations('hero');

  return (
    <motion.div
      initial={{opacity: 0, x: 50, y: 10}}
      animate={{opacity: 1, x: 0, y: 0}}
      transition={{type: 'spring', stiffness: 120, damping: 22, delay: 0.5}}
      onAnimationComplete={() => setReady(true)}
      className="relative"
    >
      <motion.div
        animate={{y: [0, -10, 0]}}
        transition={{duration: 5, repeat: Infinity, ease: 'easeInOut'}}
        className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)] backdrop-blur-sm"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <span className="text-white/50 text-xs font-medium tracking-widest uppercase">
            {t('dashboardTitle')}
          </span>
          <span className="flex items-center gap-2">
            <motion.span
              animate={{opacity: [1, 0.2, 1]}}
              transition={{duration: 2.2, repeat: Infinity}}
              className="block w-2 h-2 rounded-full bg-emerald-400"
            />
            <span className="text-emerald-400 text-xs font-semibold">Live</span>
          </span>
        </div>

        {/* Big stat */}
        <div className="mb-8">
          <div className="text-gold font-black text-5xl tracking-tight leading-none">
            +{ready ? <CountUp to={127} suffix="%" duration={1800} /> : '127%'}
          </div>
          <div className="text-white/40 text-sm mt-2 leading-snug">
            {t('dashboardLabel')}
          </div>
        </div>

        {/* Mini stats */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          <div className="bg-white/5 border border-white/5 rounded-xl p-4">
            <div className="text-white font-bold text-2xl">
              {ready ? <CountUp to={47} duration={1600} /> : '47'}
            </div>
            <div className="text-white/40 text-xs mt-0.5">{t('happyClients')}</div>
          </div>
          <div className="bg-white/5 border border-white/5 rounded-xl p-4">
            <div className="text-white font-bold text-2xl">
              {ready ? <CountUp to={23} duration={1400} /> : '23'}
            </div>
            <div className="text-white/40 text-xs mt-0.5">{t('activeProjects')}</div>
          </div>
        </div>

        {/* Service rows */}
        <div className="flex flex-col gap-3 pt-4 border-t border-white/5">
          {[
            {label: 'SEO / SEA', to: 47, suffix: '%', prefix: '+'},
            {label: 'Social Media', to: 32, suffix: '%', prefix: '+'},
            {label: t('websitesBuilt'), to: 12, suffix: '', prefix: ''},
          ].map(({label, to, suffix, prefix}) => (
            <div key={label} className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-gold/70" />
                <span className="text-white/40 text-xs">{label}</span>
              </div>
              <span className="text-gold text-xs font-semibold">
                {ready ? <CountUp to={to} suffix={suffix} prefix={prefix} duration={1400} /> : `${prefix}${to}${suffix}`}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Ambient glow behind card */}
      <div className="absolute -inset-6 bg-gold/8 rounded-3xl blur-3xl -z-10" />
    </motion.div>
  );
}

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative min-h-[100dvh] bg-primary flex items-center overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/0 via-primary/20 to-primary" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 xl:gap-24 items-center">

          {/* Left: Text */}
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.div variants={item} className="flex items-center gap-3 mb-8">
              <span className="block w-6 h-px bg-gold" />
              <span className="text-gold text-xs font-semibold tracking-widest uppercase">
                {t('label')}
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="text-white font-black text-5xl sm:text-6xl xl:text-7xl leading-[1.03] tracking-tight mb-6"
            >
              {t('line1')}{' '}
              <span className="text-gold italic">{t('highlight')}</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="text-white/60 text-lg leading-relaxed max-w-lg mb-10"
            >
              {t('sub')}
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap items-center gap-4">
              <MagneticCTA>
                <Link
                  href="/diensten"
                  className="flex items-center gap-2 bg-gold text-primary font-bold text-sm px-7 py-3.5 rounded-sm hover:bg-gold-light transition-colors active:scale-[0.98]"
                >
                  {t('cta1')} <ArrowRight size={15} />
                </Link>
              </MagneticCTA>
              <Link
                href="/contact"
                className="flex items-center gap-2 border border-white/20 text-white font-semibold text-sm px-7 py-3.5 rounded-sm hover:border-gold hover:text-gold transition-colors"
              >
                {t('cta2')}
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: Dashboard visual */}
          <div className="hidden lg:block">
            <FloatingDashboard />
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 1.8, duration: 0.6}}
      >
        <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{y: [0, 6, 0]}}
          transition={{repeat: Infinity, duration: 1.6, ease: 'easeInOut'}}
        >
          <ChevronDown size={18} className="text-gold/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
