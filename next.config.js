/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'news.itmo.ru',
        pathname: '/images/news/**',
      },
    ],
  },
  env: {
    NEXT_BASE_URL: process.env.NEXT_BASE_URL,
  },
};

module.exports = nextConfig;
