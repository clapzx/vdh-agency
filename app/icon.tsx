import {ImageResponse} from 'next/og';

export const size = {width: 96, height: 96};
export const contentType = 'image/png';

export default function Icon() {
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
        borderRadius: 15,
      }}
    >
      <span
        style={{
          color: 'white',
          fontSize: 42,
          fontWeight: 900,
          letterSpacing: -2,
          lineHeight: 1,
          marginBottom: 6,
          fontFamily: 'Arial, sans-serif',
        }}
      >
        VDH
      </span>
      <div
        style={{
          width: 64,
          height: 5,
          background: '#D4AF37',
          borderRadius: 2,
        }}
      />
    </div>,
    {...size},
  );
}
