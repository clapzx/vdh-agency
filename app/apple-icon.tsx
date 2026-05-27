import {ImageResponse} from 'next/og';

export const size = {width: 180, height: 180};
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        background: '#111827',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 36,
      }}
    >
      <span
        style={{
          color: 'white',
          fontSize: 80,
          fontWeight: 900,
          letterSpacing: -3,
          lineHeight: 1,
          marginBottom: 12,
          fontFamily: 'Arial, sans-serif',
        }}
      >
        VDH
      </span>
      <div
        style={{
          width: 120,
          height: 8,
          background: '#D4AF37',
          borderRadius: 4,
        }}
      />
    </div>,
    {...size},
  );
}
