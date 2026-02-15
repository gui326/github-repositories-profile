import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["@phosphor-icons/react", "@mui/material"],
  },
};

export default nextConfig;
