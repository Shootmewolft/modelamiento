import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.chevrolet.com.co",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.autolartechevrolet.co",
        pathname: "/**",
      },
    ],
  },
  experimental: {
    optimizePackageImports: ["@components", "./src/components"],
  },
};

export default nextConfig;
