/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mgrid.idxhome.com',
      },
      {
        protocol: 'https',
        hostname: 'www.orlandosalesclub.com',
      },
      {
        protocol: 'http',
        hostname: 'www.orlandosalesclub.com',
      },
    ],
  },
};

module.exports = nextConfig;
