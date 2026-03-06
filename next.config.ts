// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: [],
  async headers() {
    return [
      {
        // This matches your [slug] routes specifically
        source: "/:slug((?!api|_next/static|_next/image|favicon.ico).*)", 
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable", // 1 year
          },
        ],
      },
      {
        source: "/images/:path*", // your custom images folder
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
