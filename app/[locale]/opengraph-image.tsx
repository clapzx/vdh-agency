import {ImageResponse} from 'next/og';

export const size = {width: 1200, height: 630};
export const contentType = 'image/png';

export default async function Image({params}: {params?: Promise<{locale: string}>}) {
  const {locale = 'nl'} = params ? await params : {};
  const isNl = locale === 'nl';

  const tagline = isNl ? 'Jouw groei is onze missie.' : 'Your growth is our mission.';
  const services = 'SEO / SEA  ·  Social Media  ·  Websites';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#111827',
          display: 'flex',
          flexDirection: 'column',
          padding: '72px 80px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Gold top bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            background: '#D4AF37',
            display: 'flex',
          }}
        />

        {/* Dot grid — right side decoration */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: -40,
            width: 480,
            height: '100%',
            opacity: 0.055,
            backgroundImage: 'radial-gradient(circle, #D4AF37 1.5px, transparent 1.5px)',
            backgroundSize: '36px 36px',
            display: 'flex',
          }}
        />

        {/* Gold glow blob */}
        <div
          style={{
            position: 'absolute',
            bottom: -80,
            right: -80,
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'rgba(212,175,55,0.07)',
            filter: 'blur(60px)',
            display: 'flex',
          }}
        />

        {/* Main content */}
        <div style={{display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'center'}}>

          {/* Logo — matches SVG: stacked VDH / AGENCY */}
          <div style={{display: 'flex', flexDirection: 'column', marginBottom: 48}}>
            <span
              style={{
                color: 'white',
                fontWeight: 700,
                fontSize: 52,
                lineHeight: 1,
                letterSpacing: 2,
              }}
            >
              VDH
            </span>
            <span
              style={{
                color: '#D4AF37',
                fontWeight: 400,
                fontSize: 16,
                letterSpacing: 10,
                marginTop: 4,
              }}
            >
              AGENCY
            </span>
          </div>

          {/* Gold divider line */}
          <div
            style={{
              width: 56,
              height: 3,
              background: '#D4AF37',
              marginBottom: 36,
              borderRadius: 2,
              display: 'flex',
            }}
          />

          {/* Tagline */}
          <div
            style={{
              color: 'white',
              fontSize: 60,
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: 28,
              maxWidth: 720,
              letterSpacing: -1.5,
            }}
          >
            {tagline}
          </div>

          {/* Services */}
          <div
            style={{
              color: '#D4AF37',
              fontSize: 22,
              opacity: 0.85,
              letterSpacing: 0.5,
            }}
          >
            {services}
          </div>
        </div>

        {/* Bottom domain */}
        <div style={{color: 'rgba(255,255,255,0.25)', fontSize: 18, letterSpacing: 0.5}}>
          www.vdh-agency.com
        </div>
      </div>
    ),
    {width: 1200, height: 630},
  );
}
