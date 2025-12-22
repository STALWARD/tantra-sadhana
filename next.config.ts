import type { NextConfig } from "next";

const nextConfig: NextConfig = {
experimental: {
    legacyBrowsers: false, // Don't serve legacy JS
  },
  swcMinify: true, // Use SWC for faster modern JS minification
};

export default nextConfig;
