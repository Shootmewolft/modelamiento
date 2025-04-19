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
    ],
  },
  experimental: {
    optimizePackageImports: ["@components", "./src/components"],
  },
};

export default nextConfig;
