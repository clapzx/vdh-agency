'use client';

export default function CookieSettingsButton() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event('vdh:open-cookie-settings'))}
      className="text-white/50 hover:text-gold text-sm transition-colors text-left"
    >
      Cookie instellingen
    </button>
  );
}
