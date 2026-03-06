// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: [],
  async headers() {
    return [
      {
        source: "/blog/:slug", // applies to all blog pages
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600, must-revalidate",
          },
          {
            key: "Expires",
            value: new Date(Date.now() + 3600 * 1000).toUTCString(),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
