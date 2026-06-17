/** @type {import('next').NextConfig} */

// Export statique pour GitHub Pages.
// Le dépôt étant servi sous /comcom-spread, on applique un basePath en production.
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/comcom-spread" : "";

const nextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  images: { unoptimized: true },
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
