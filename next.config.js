/** @type {import('next').NextConfig} */

const withNextIntl = require('next-intl/plugin')('./i18n.ts');

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'news.itmo.ru',
        pathname: '/images/**',
      },
    ],
  },
  env: {
    NEXT_BASE_URL: process.env.NEXT_BASE_URL,
  },
};

module.exports = withNextIntl(nextConfig);
