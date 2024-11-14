/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, options) {
    // Add a rule to handle SVG files using SVGR
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

export default nextConfig;
