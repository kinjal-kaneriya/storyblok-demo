import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    loader: 'custom',
    loaderFile: './storyblokImageLoader.ts',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'a.storyblok.com',
      },
    ],
  },
  compress: true,
  experimental: {
    optimizePackageImports: ['@storyblok/react'],
  },
};

export default nextConfig;
