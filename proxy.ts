import createMiddleware from 'next-intl/middleware';
import {type NextRequest} from 'next/server';
import {routing} from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const response = intlMiddleware(request);
  // Add Secure flag to the locale cookie (next-intl doesn't expose cookie options)
  const setCookie = response.headers.get('set-cookie');
  if (setCookie && !setCookie.toLowerCase().includes('secure')) {
    response.headers.set('set-cookie', setCookie + '; Secure');
  }
  return response;
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|icon|apple-icon|opengraph-image|.*\\..*).*)', '/'],
};
