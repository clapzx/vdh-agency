import {ImageResponse} from 'next/og';

export const runtime = 'edge';
export const alt = 'VDH Agency — Marketing Bureau Nederland';
export const size = {width: 1200, height: 630};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#111827',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px 100px',
          position: 'relative',
        }}
      >
        {/* Gold accent bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '6px',
            height: '100%',
            background: '#D4AF37',
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginBottom: '52px',
            marginLeft: '20px',
          }}
        >
          <div
            style={{
              color: '#ffffff',
              fontSize: '56px',
              fontWeight: 900,
              letterSpacing: '-2px',
              lineHeight: 1,
            }}
          >
            VDH
          </div>
          <div
            style={{
              color: '#D4AF37',
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '6px',
              marginTop: '2px',
            }}
          >
            AGENCY
          </div>
        </div>

        {/* Headline */}
        <div
          style={{
            color: '#ffffff',
            fontSize: '62px',
            fontWeight: 900,
            lineHeight: 1.05,
            marginBottom: '28px',
            marginLeft: '20px',
            maxWidth: '900px',
          }}
        >
          Marketing Bureau Nederland
        </div>

        {/* Tagline */}
        <div
          style={{
            color: '#D4AF37',
            fontSize: '28px',
            fontWeight: 500,
            letterSpacing: '1px',
            marginLeft: '20px',
          }}
        >
          SEO · Social Media · Webdesign
        </div>

        {/* URL */}
        <div
          style={{
            position: 'absolute',
            right: '100px',
            bottom: '72px',
            color: 'rgba(255,255,255,0.35)',
            fontSize: '18px',
          }}
        >
          vdh-agency.com
        </div>
      </div>
    ),
    {width: 1200, height: 630},
  );
}
