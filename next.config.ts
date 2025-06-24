import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{ hostname: "m.media-amazon.com" }],
  },
  experimental: {
    useCache: true,
    staleTimes: {
      dynamic: 1000 * 60,
    },
    serverComponentsHmrCache: true,
  },
  
};

export default nextConfig;
