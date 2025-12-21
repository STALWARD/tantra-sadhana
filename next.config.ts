import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 // Enables the "use cache" directive and Cache Components (Standard in v16)
  cacheComponents: true,

 /* confiexperimental: {
    cacheLife: 60, // Example of new caching API in Next.js 16
  },g options here */
  bundlePagesRouterDependencies: true
};

export default nextConfig;
