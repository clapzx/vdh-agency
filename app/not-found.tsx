import Link from 'next/link';

export default function NotFound() {
  return (
    <html lang="nl">
      <body
        style={{
          margin: 0,
          fontFamily: 'Arial, sans-serif',
          background: '#111827',
          color: 'white',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '2rem',
        }}
      >
        <div style={{marginBottom: '2rem'}}>
          <span style={{fontSize: 64, fontWeight: 900, letterSpacing: -2, lineHeight: 1}}>VDH</span>
          <div
            style={{
              width: 80,
              height: 5,
              background: '#D4AF37',
              borderRadius: 2,
              margin: '8px auto 0',
            }}
          />
        </div>

        <p style={{color: '#D4AF37', fontSize: 80, fontWeight: 900, margin: '0 0 0.5rem', lineHeight: 1}}>
          404
        </p>
        <h1 style={{fontSize: 24, fontWeight: 700, margin: '0 0 1rem', color: 'white'}}>
          Pagina niet gevonden
        </h1>
        <p style={{color: 'rgba(255,255,255,0.5)', fontSize: 16, maxWidth: 400, margin: '0 0 2.5rem', lineHeight: 1.6}}>
          De pagina die je zoekt bestaat niet of is verplaatst. Ga terug naar de homepage.
        </p>

        <Link
          href="/"
          style={{
            background: '#D4AF37',
            color: '#111827',
            fontWeight: 700,
            fontSize: 14,
            padding: '12px 28px',
            borderRadius: 3,
            textDecoration: 'none',
          }}
        >
          Terug naar home
        </Link>
      </body>
    </html>
  );
}
