/** @type {import('next').NextConfig} */

const nextConfig = {
      reactStrictMode: true,
  images: {
  domains: ["source.unsplash.com"],
  },
    async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png|gif)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=9999999999, must-revalidate',
          }
        ],
      },
    ]
  },
}

module.exports = nextConfig


