/** @type {import('next').NextConfig} */

const nextConfig = {
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

const withBrotli = require('next-brotli') 
const withGzip = require('next-gzip') 

module.exports = withBrotli({ 
compress: true, 
})(withGzip({ 
compress: true, 
})) 



