'use client';
import {useRef, useState} from 'react';
import {useTranslations} from 'next-intl';
import {useForm} from 'react-hook-form';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import {Mail, MapPin, Clock, FileText, Phone, CheckCircle, ArrowRight} from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  message: z.string().min(10),
});

type FormData = z.infer<typeof schema>;

export default function ContactPage() {
  const t = useTranslations('contactPage');
  const [sent, setSent] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const hpRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    formState: {errors, isSubmitting},
  } = useForm<FormData>({resolver: zodResolver(schema)});

  const onSubmit = async (data: FormData) => {
    setSubmitError(false);
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({...data, _hp: hpRef.current?.value ?? ''}),
    });
    if (res.ok) {
      setSent(true);
    } else {
      setSubmitError(true);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-primary pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-6 h-px bg-gold" />
              <span className="text-gold text-xs font-semibold tracking-widest uppercase">
                {t('label')}
              </span>
            </div>
            <h1 className="text-white font-black text-4xl lg:text-6xl leading-tight mb-5">
              {t('title')}
            </h1>
            <p className="text-white/60 text-xl">{t('sub')}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Form + info */}
      <section className="bg-light py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <AnimatedSection className="lg:col-span-3" direction="left">
              <div className="bg-white rounded-sm p-8 lg:p-10 shadow-sm">
                <h2 className="text-primary font-bold text-2xl mb-6">{t('formTitle')}</h2>

                {sent ? (
                  <div className="flex flex-col items-center gap-4 py-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center">
                      <CheckCircle size={32} className="text-gold" />
                    </div>
                    <h3 className="text-primary font-bold text-xl">{t('successTitle')}</h3>
                    <p className="text-primary/60 text-sm max-w-sm">{t('successDesc')}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                    {/* Honeypot: hidden from humans, filled by bots */}
                    <input
                      ref={hpRef}
                      type="text"
                      name="_hp"
                      style={{display: 'none'}}
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-primary/70 text-sm font-medium block mb-1.5">
                          {t('name')} *
                        </label>
                        <input
                          {...register('name')}
                          placeholder={t('namePlaceholder')}
                          className="w-full border border-primary/15 rounded-sm px-4 py-3 text-sm text-primary placeholder:text-primary/30 focus:outline-none focus:border-gold transition-colors"
                        />
                        {errors.name && (
                          <p className="text-red-500 text-xs mt-1">{t('fieldRequired')}</p>
                        )}
                      </div>

                      <div>
                        <label className="text-primary/70 text-sm font-medium block mb-1.5">
                          {t('email')} *
                        </label>
                        <input
                          {...register('email')}
                          type="email"
                          placeholder={t('emailPlaceholder')}
                          className="w-full border border-primary/15 rounded-sm px-4 py-3 text-sm text-primary placeholder:text-primary/30 focus:outline-none focus:border-gold transition-colors"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-xs mt-1">{t('emailInvalid')}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="text-primary/70 text-sm font-medium block mb-1.5">
                        {t('company')}
                      </label>
                      <input
                        {...register('company')}
                        placeholder={t('companyPlaceholder')}
                        className="w-full border border-primary/15 rounded-sm px-4 py-3 text-sm text-primary placeholder:text-primary/30 focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-primary/70 text-sm font-medium block mb-1.5">
                        {t('message')} *
                      </label>
                      <textarea
                        {...register('message')}
                        rows={5}
                        placeholder={t('messagePlaceholder')}
                        className="w-full border border-primary/15 rounded-sm px-4 py-3 text-sm text-primary placeholder:text-primary/30 focus:outline-none focus:border-gold transition-colors resize-none"
                      />
                      {errors.message && (
                        <p className="text-red-500 text-xs mt-1">{t('minChars')}</p>
                      )}
                    </div>

                    {submitError && (
                      <p className="text-red-500 text-sm text-center">
                        Er ging iets mis. Probeer het opnieuw of mail direct naar larsvanderhoek@gmail.com.
                      </p>
                    )}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex items-center justify-center gap-2 bg-gold text-primary font-bold text-sm px-8 py-3.5 rounded-sm hover:bg-gold-light transition-colors disabled:opacity-60 group"
                    >
                      {isSubmitting ? t('sending') : t('submit')}
                      {!isSubmitting && (
                        <ArrowRight
                          size={14}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      )}
                    </button>
                  </form>
                )}
              </div>
            </AnimatedSection>

            {/* Info */}
            <AnimatedSection className="lg:col-span-2" direction="right" delay={0.15}>
              <div className="bg-primary rounded-sm p-8 h-fit">
                <h3 className="text-white font-bold text-xl mb-6">{t('infoTitle')}</h3>

                <div className="flex flex-col gap-5">
                  <a
                    href={`mailto:${t('emailInfo')}`}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-sm bg-gold/10 flex items-center justify-center shrink-0">
                      <Mail size={16} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs mb-0.5">{t('emailLabel')}</p>
                      <p className="text-white text-sm font-medium group-hover:text-gold transition-colors">
                        {t('emailInfo')}
                      </p>
                    </div>
                  </a>

                  <a
                    href="tel:+31641027594"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-sm bg-gold/10 flex items-center justify-center shrink-0">
                      <Phone size={16} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs mb-0.5">Telefoon / WhatsApp</p>
                      <p className="text-white text-sm font-medium group-hover:text-gold transition-colors">
                        06 41 02 75 94
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-sm bg-gold/10 flex items-center justify-center shrink-0">
                      <MapPin size={16} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs mb-0.5">{t('locationLabel')}</p>
                      <p className="text-white text-sm font-medium">{t('locationInfo')}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-sm bg-gold/10 flex items-center justify-center shrink-0">
                      <Clock size={16} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs mb-0.5">{t('responseLabel')}</p>
                      <p className="text-white text-sm font-medium">{t('responseTime')}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-sm bg-gold/10 flex items-center justify-center shrink-0">
                      <FileText size={16} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs mb-0.5">{t('kvkLabel')}</p>
                      <p className="text-white text-sm font-medium">{t('kvkInfo')}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-white/40 text-sm leading-relaxed">
                    {t('pitch')}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
