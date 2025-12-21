import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enables the "use cache" directive and Cache Components (Standard in v16)
  cacheComponents: true,

  // Custom cache profiles used with the cacheLife() function
  cacheLife: {
    default: {
      stale: 3600,    // 1 hour
      revalidate: 60, // 1 minute
      expire: 86400,  // 1 day
    },
    // You can define other named profiles here
    max: {
      stale: 31536000,
      revalidate: 3600,
      expire: 31536000,
    }
  },

  // Automatically bundles external packages for the Pages Router (Stable in v15+)
  bundlePagesRouterDependencies: true,

  // All legacy polyfill/browserslist flags removed as they are now automatic
  experimental: {
    // Keep this block only for other active experimental features if needed
  }
};

export default nextConfig;
