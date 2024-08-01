/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: {
    buildActivityPosition: "top-right",
  },
  output: "export",
  distDir: "./outs",
  basePath: "",
  assetPrefix: "",
};

module.exports = nextConfig;
