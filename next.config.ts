import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: true,
  images: {
    qualities: [70, 75, 100],
  },
  experimental: {
    optimizePackageImports: ["@phosphor-icons/react", "@mui/material"],
  },
};

export default nextConfig;
