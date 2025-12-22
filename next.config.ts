const nextConfig = {
  experimental: {
    legacyBrowsers: false
  },
  swcMinify: true,
   // Optimize for modern browsers (aligns with browserslist)
  browsersListForSWC: true,
  transpilePackages: []
};

export default nextConfig;
