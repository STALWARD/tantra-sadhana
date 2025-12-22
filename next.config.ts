import type { NextConfig } from "next";

const nextConfig = {
  experimental: {
    legacyBrowsers: false
  },
  swcMinify: true,
  transpilePackages: []
};

export default nextConfig;
