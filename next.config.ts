import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  images: {
    unoptimized: true,
  },

  trailingSlash: true,
  reactStrictMode: true,

  pageExtensions: ["js", "jsx", "ts", "tsx"],
};

export default nextConfig;
