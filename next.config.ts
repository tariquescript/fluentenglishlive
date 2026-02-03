/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  images: {
    unoptimized: true,
  },

  trailingSlash: true,
  reactStrictMode: true,

  pageExtensions: ["js", "jsx", "ts", "tsx"],
};

export default nextConfig;
