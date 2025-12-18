import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    staleTimes: {
      dynamic: 30,
      static: 180,
    },
  },
  typedRoutes: true,
  reactCompiler: true,
  cacheComponents: true,
};

export default nextConfig;
