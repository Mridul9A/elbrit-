import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, 
  swcMinify: true,       

  webpack(config) {
    return config;
  },

  async redirects() {
    return [
      {
        source: '/old-page',
        destination: '/new-page', 
        permanent: true, 
      },
    ];
  },
};

export default nextConfig;
