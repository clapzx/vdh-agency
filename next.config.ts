import type {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{type: 'host', value: 'vdh-agency.nl'}],
        destination: 'https://www.vdh-agency.com/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{type: 'host', value: 'www.vdh-agency.nl'}],
        destination: 'https://www.vdh-agency.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
