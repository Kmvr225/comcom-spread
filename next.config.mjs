/** @type {import('next').NextConfig} */

// Export statique pour GitHub Pages.
// basePath configurable : vide par défaut. Pour un déploiement sur une "project page"
// (https://user.github.io/<repo>/), définir NEXT_PUBLIC_BASE_PATH="/<repo>".
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

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
