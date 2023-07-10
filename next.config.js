/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV !== 'production'
})

const nextConfig = withPWA({
  reactStrictMode: true,
  images: {
    domains: ['avatars.githubusercontent.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
    ],
  }
})

module.exports = {
  ...nextConfig,
  async headers() {
    const headers = [];
    if (process.env.NEXT_PUBLIC_VERCEL_ENV === "production") {
      headers.push({
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow',
          },
        ],
        source: '/:path*',
      });
    }
    return headers;
  },
}
