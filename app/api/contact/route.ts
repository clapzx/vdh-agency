import {NextRequest, NextResponse} from 'next/server';
import {z} from 'zod';

const schema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(200),
  company: z.string().max(100).optional(),
  message: z.string().min(10).max(5000),
});

function esc(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\n/g, '<br>');
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({error: 'Ongeldige invoer'}, {status: 400});
  }
  const {name, email, company, message} = parsed.data;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({error: 'E-mail niet geconfigureerd'}, {status: 500});
  }

  const html = [
    `<p><strong>Naam:</strong> ${esc(name)}</p>`,
    `<p><strong>E-mail:</strong> ${esc(email)}</p>`,
    company ? `<p><strong>Bedrijf:</strong> ${esc(company)}</p>` : '',
    `<p><strong>Bericht:</strong></p><p>${esc(message)}</p>`,
  ].join('');

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      from: 'VDH Agency <noreply@vdh-agency.com>',
      to: ['lars@vdhagency.nl'],
      subject: `Nieuw bericht van ${name}${company ? ` (${company})` : ''}`,
      html,
      reply_to: email,
    }),
  });

  if (!res.ok) {
    return NextResponse.json({error: 'Verzenden mislukt'}, {status: 500});
  }

  return NextResponse.json({ok: true});
}
