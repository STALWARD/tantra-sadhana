const nextConfig = {
  experimental: {
    legacyBrowsers: false,
    modern: true,
    polyfillsOptimization: true
  },
  swcMinify: true,
   // Optimize for modern browsers (aligns with browserslist)
  browsersListForSWC: true,
  transpilePackages: [],
  turbopack: {
  resolveAlias: {
  '../build/polyfills/polyfill-module': './src/lib/modern-polyfill.js',
  'next/dist/build/polyfills/polyfill-module': './src/lib/modern-polyfill.js',
 },
 },
};

export default nextConfig;
