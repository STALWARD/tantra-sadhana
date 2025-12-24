const nextConfig = {
  experimental: {
    legacyBrowsers: false,
    modern: true,
    polyfillsOptimization: true
  },
  swcMinify: true,
   // Optimize for modern browsers (aligns with browserslist)
  browsersListForSWC: true,
  transpilePackages: []
};

export default nextConfig;
