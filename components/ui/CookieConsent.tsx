'use client';
import {useState, useEffect} from 'react';
import {X, ChevronDown, ChevronUp, Shield, BarChart3, Megaphone} from 'lucide-react';

interface Consent {
  e: boolean;
  a: boolean;
  m: boolean;
}

const COOKIE = 'vdh_consent';

function readCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  const m = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
  return m ? decodeURIComponent(m[1]) : null;
}

function writeCookie(name: string, value: string, days: number) {
  const exp = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${exp}; path=/; SameSite=Lax; Secure`;
}

function loadConsent(): Consent | null {
  const raw = readCookie(COOKIE);
  if (!raw) return null;
  try {
    const p = JSON.parse(raw);
    if (typeof p === 'object' && 'e' in p) return p as Consent;
  } catch {}
  return null;
}

function storeConsent(c: Consent) {
  writeCookie(COOKIE, JSON.stringify(c), 365);
  window.dispatchEvent(new CustomEvent('vdh:consent', {detail: c}));
}

export default function CookieConsent() {
  const [banner, setBanner] = useState(false);
  const [modal, setModal] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const saved = loadConsent();
    if (!saved) {
      setBanner(true);
    } else {
      setAnalytics(saved.a);
      setMarketing(saved.m);
    }
    const open = () => {
      const c = loadConsent();
      if (c) {setAnalytics(c.a); setMarketing(c.m);}
      setModal(true);
      setBanner(false);
    };
    window.addEventListener('vdh:open-cookie-settings', open);
    return () => window.removeEventListener('vdh:open-cookie-settings', open);
  }, []);

  const acceptAll = () => {
    storeConsent({e: true, a: true, m: true});
    setBanner(false);
    setModal(false);
  };
  const acceptEssential = () => {
    storeConsent({e: true, a: false, m: false});
    setBanner(false);
    setModal(false);
  };
  const saveCustom = () => {
    storeConsent({e: true, a: analytics, m: marketing});
    setBanner(false);
    setModal(false);
  };

  if (!banner && !modal) return null;

  return (
    <>
      {modal && (
        <div
          className="fixed inset-0 bg-black/70 z-[998] backdrop-blur-sm"
          onClick={() => {if (loadConsent()) setModal(false);}}
        />
      )}

      {/* Banner */}
      {banner && !modal && (
        <div className="fixed bottom-0 left-0 right-0 z-[999] p-4 md:p-6">
          <div className="max-w-5xl mx-auto bg-[#0D1117] border border-white/10 rounded-sm shadow-2xl p-5 md:p-6">
            <div className="flex flex-col md:flex-row md:items-center gap-5">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Shield size={15} className="text-gold shrink-0" />
                  <span className="text-white font-bold text-sm">Cookiemelding</span>
                </div>
                <p className="text-white/55 text-sm leading-relaxed">
                  We gebruiken cookies voor het functioneren van de website en, met jouw toestemming, om
                  anoniem gebruik te meten en gerichte advertenties te tonen. Meer info in ons{' '}
                  <a href="/privacybeleid" className="text-gold hover:underline">privacybeleid</a>.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 shrink-0">
                <button
                  onClick={() => {setBanner(false); setModal(true);}}
                  className="px-4 py-2.5 text-white/60 hover:text-white text-sm border border-white/15 hover:border-white/30 rounded-sm transition-colors"
                >
                  Instellingen
                </button>
                <button
                  onClick={acceptEssential}
                  className="px-4 py-2.5 text-white/60 hover:text-white text-sm border border-white/15 hover:border-white/30 rounded-sm transition-colors"
                >
                  Alleen noodzakelijk
                </button>
                <button
                  onClick={acceptAll}
                  className="px-5 py-2.5 bg-gold hover:bg-yellow-400 text-[#0D1117] font-bold text-sm rounded-sm transition-colors"
                >
                  Alles accepteren
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Settings modal */}
      {modal && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
          <div className="bg-[#0D1117] border border-white/10 rounded-sm shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Shield size={17} className="text-gold" />
                <h2 className="text-white font-bold text-base">Cookievoorkeuren</h2>
              </div>
              {loadConsent() && (
                <button
                  onClick={() => setModal(false)}
                  className="text-white/40 hover:text-white transition-colors"
                  aria-label="Sluiten"
                >
                  <X size={19} />
                </button>
              )}
            </div>

            {/* Body */}
            <div className="px-6 py-5 flex flex-col gap-3">
              <p className="text-white/50 text-sm leading-relaxed">
                Noodzakelijke cookies zijn altijd actief. Klik op een categorie voor de lijst van
                specifieke cookies.
              </p>

              <Category
                icon={<Shield size={15} className="text-gold" />}
                title="Noodzakelijk"
                description="Vereist voor een correcte werking van de website. Kan niet worden uitgeschakeld."
                alwaysOn
                cookies={[
                  {name: 'vdh_consent', doel: 'Jouw cookievoorkeur opslaan', duur: '1 jaar', aanbieder: 'VDH Agency'},
                  {name: 'NEXT_LOCALE', doel: 'Taalinstelling (NL/EN)', duur: 'Sessie', aanbieder: 'VDH Agency'},
                ]}
              />

              <Category
                icon={<BarChart3 size={15} className="text-gold" />}
                title="Analytisch"
                description="Anoniem inzicht in hoe bezoekers de website gebruiken, zodat we die kunnen verbeteren."
                enabled={analytics}
                onToggle={setAnalytics}
                cookies={[
                  {name: '_va_*', doel: 'Anoniem paginagebruik meten', duur: '1 jaar', aanbieder: 'Vercel Analytics'},
                  {name: '_ga, _ga_*', doel: 'Anoniem websitebezoek meten', duur: '2 jaar', aanbieder: 'Google Analytics 4'},
                  {name: '_gid', doel: 'Gebruikerssessie onderscheiden', duur: '24 uur', aanbieder: 'Google Analytics 4'},
                ]}
              />

              <Category
                icon={<Megaphone size={15} className="text-gold" />}
                title="Marketing"
                description="Meten van advertentiecampagnes en tonen van relevante advertenties op andere platforms."
                enabled={marketing}
                onToggle={setMarketing}
                cookies={[
                  {name: '_gcl_au', doel: 'Google Ads conversies meten', duur: '90 dagen', aanbieder: 'Google Ads'},
                  {name: '_fbp, _fbc', doel: 'Meta advertentieprestaties meten', duur: '90 dagen', aanbieder: 'Meta (Facebook/Instagram)'},
                  {name: 'li_fat_id', doel: 'LinkedIn advertenties koppelen', duur: '30 dagen', aanbieder: 'LinkedIn Ads'},
                  {name: '_uetsid', doel: 'Microsoft Advertising bijhouden', duur: '1 dag', aanbieder: 'Microsoft Ads'},
                ]}
              />
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-white/10 flex flex-col sm:flex-row gap-2 justify-end">
              <button
                onClick={acceptEssential}
                className="px-4 py-2.5 text-white/60 hover:text-white text-sm border border-white/15 hover:border-white/30 rounded-sm transition-colors"
              >
                Alleen noodzakelijk
              </button>
              <button
                onClick={saveCustom}
                className="px-4 py-2.5 text-white/60 hover:text-white text-sm border border-white/15 hover:border-white/30 rounded-sm transition-colors"
              >
                Mijn keuze opslaan
              </button>
              <button
                onClick={acceptAll}
                className="px-5 py-2.5 bg-gold hover:bg-yellow-400 text-[#0D1117] font-bold text-sm rounded-sm transition-colors"
              >
                Alles accepteren
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

interface CookieRow {name: string; doel: string; duur: string; aanbieder: string;}
interface CategoryProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  alwaysOn?: boolean;
  enabled?: boolean;
  onToggle?: (v: boolean) => void;
  cookies: CookieRow[];
}

function Category({icon, title, description, alwaysOn, enabled, onToggle, cookies}: CategoryProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-white/10 rounded-sm overflow-hidden">
      <div className="flex items-start gap-3 p-4">
        <span className="mt-0.5 shrink-0">{icon}</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-3 mb-1">
            <span className="text-white font-semibold text-sm">{title}</span>
            {alwaysOn ? (
              <span className="text-gold text-xs font-medium shrink-0">Altijd actief</span>
            ) : (
              <Toggle enabled={!!enabled} onToggle={onToggle!} />
            )}
          </div>
          <p className="text-white/50 text-xs leading-relaxed">{description}</p>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-2 text-white/35 hover:text-white/60 text-xs transition-colors border-t border-white/8"
      >
        <span>Cookies bekijken ({cookies.length})</span>
        {open ? <ChevronUp size={11} /> : <ChevronDown size={11} />}
      </button>

      {open && (
        <div className="border-t border-white/8 overflow-x-auto">
          <table className="w-full text-xs min-w-[400px]">
            <thead>
              <tr className="border-b border-white/8">
                <th className="text-left text-white/30 font-medium px-4 py-2 w-1/4">Naam</th>
                <th className="text-left text-white/30 font-medium px-4 py-2">Doel</th>
                <th className="text-left text-white/30 font-medium px-4 py-2 w-20">Duur</th>
                <th className="text-left text-white/30 font-medium px-4 py-2 w-1/4">Aanbieder</th>
              </tr>
            </thead>
            <tbody>
              {cookies.map((c) => (
                <tr key={c.name} className="border-b border-white/5 last:border-0">
                  <td className="text-white/65 font-mono px-4 py-2 break-all">{c.name}</td>
                  <td className="text-white/45 px-4 py-2">{c.doel}</td>
                  <td className="text-white/45 px-4 py-2 whitespace-nowrap">{c.duur}</td>
                  <td className="text-white/45 px-4 py-2">{c.aanbieder}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function Toggle({enabled, onToggle}: {enabled: boolean; onToggle: (v: boolean) => void}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={enabled}
      onClick={() => onToggle(!enabled)}
      className={`relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors focus:outline-none ${
        enabled ? 'bg-gold' : 'bg-white/20'
      }`}
    >
      <span
        className={`inline-block h-4 w-4 rounded-full bg-white shadow transition-transform ${
          enabled ? 'translate-x-4' : 'translate-x-0.5'
        }`}
      />
    </button>
  );
}
