/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable transpilePackages to ensure proper module resolution
  transpilePackages: ['@google/generative-ai'],
  
  // Add any other configuration options here
  reactStrictMode: true,
  
  // Ensure proper webpack configuration
  webpack: (config, { isServer }) => {
    // Add any webpack customizations here if needed
    return config;
  },
};

module.exports = nextConfig;
