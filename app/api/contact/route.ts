import {NextRequest, NextResponse} from 'next/server';
import {z} from 'zod';

// NOTE: in-memory — per serverless instance, not shared across Vercel instances.
// Good enough for warm-start reuse; use Upstash KV for cross-instance enforcement.
const rl = new Map<string, {n: number; reset: number}>();
const RL_LIMIT = 5;
const RL_WINDOW = 60 * 60 * 1000;

function checkRate(ip: string): boolean {
  const now = Date.now();
  const entry = rl.get(ip);
  if (!entry || now > entry.reset) {
    rl.set(ip, {n: 1, reset: now + RL_WINDOW});
    return true;
  }
  if (entry.n >= RL_LIMIT) return false;
  entry.n++;
  return true;
}

const schema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(200),
  company: z.string().max(100).optional(),
  message: z.string().min(10).max(5000),
  _hp: z.string().optional(),
  _captcha: z.string().optional(),
});

function esc(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\n/g, '<br>');
}

export async function POST(req: NextRequest) {
  try {
    const contentLength = req.headers.get('content-length');
    if (contentLength && parseInt(contentLength) > 10_000) {
      return NextResponse.json({error: 'Payload te groot'}, {status: 413});
    }

    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';

    if (!checkRate(ip)) {
      return NextResponse.json(
        {error: 'Te veel verzoeken, probeer later opnieuw'},
        {status: 429},
      );
    }

    const body = await req.json().catch(() => null);
    if (!body || typeof body !== 'object') {
      return NextResponse.json({error: 'Ongeldige invoer'}, {status: 400});
    }

    if (body._hp) return NextResponse.json({ok: true});

    // Turnstile CAPTCHA verification
    // Replace TURNSTILE_SECRET_KEY in Vercel env vars with key from dash.cloudflare.com/turnstile
    const captchaToken = body._captcha;
    const secretKey =
      process.env.TURNSTILE_SECRET_KEY ?? '1x0000000000000000000000000000000AA';
    const captchaRes = await fetch(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({secret: secretKey, response: captchaToken, remoteip: ip}),
      },
    );
    const captchaData = await captchaRes.json().catch(() => ({success: false}));
    if (!captchaData.success) {
      return NextResponse.json({error: 'CAPTCHA verificatie mislukt'}, {status: 400});
    }

    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        {error: 'Validatie mislukt: ' + parsed.error.issues[0]?.message},
        {status: 400},
      );
    }
    const {name, email, company, message} = parsed.data;

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('[contact] RESEND_API_KEY is not set');
      return NextResponse.json({error: 'E-mail niet geconfigureerd'}, {status: 500});
    }

    const html = [
      `<p><strong>Naam:</strong> ${esc(name)}</p>`,
      `<p><strong>E-mail:</strong> ${esc(email)}</p>`,
      company ? `<p><strong>Bedrijf:</strong> ${esc(company)}</p>` : '',
      `<p><strong>Bericht:</strong></p><p>${esc(message)}</p>`,
      `<hr><p style="color:#888;font-size:12px">IP: ${esc(ip)}</p>`,
    ].join('');

    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: 'VDH Agency <contact@vdh-agency.com>',
        to: ['contact@vdh-agency.com'],
        subject: `Nieuw bericht van ${name}${company ? ` (${company})` : ''}`,
        html,
        reply_to: email,
      }),
    });

    if (!resendRes.ok) {
      const resendError = await resendRes.text().catch(() => 'unknown');
      console.error('[contact] Resend error:', resendRes.status, resendError);
      return NextResponse.json(
        {error: `Verzenden mislukt (${resendRes.status})`},
        {status: 500},
      );
    }

    return NextResponse.json({ok: true});
  } catch (err) {
    console.error('[contact] Unexpected error:', err);
    return NextResponse.json({error: 'Serverfout'}, {status: 500});
  }
}
