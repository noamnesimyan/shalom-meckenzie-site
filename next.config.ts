import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "media.base44.com" },
      { protocol: "https", hostname: "medias.orient-express.com" },
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "videos.pexels.com" },
      { protocol: "https", hostname: "static.pexels.com" },
      { protocol: "https", hostname: "dynamic-media-cdn.tripadvisor.com" },
      { protocol: "https", hostname: "beefbar.com" },
      { protocol: "https", hostname: "cdn.prod.website-files.com" },
      { protocol: "https", hostname: "eu.louisvuitton.com" },
      { protocol: "https", hostname: "casaamor.com" },
      { protocol: "https", hostname: "shellona.com" },
      { protocol: "https", hostname: "bagatelle.com" },
      { protocol: "https", hostname: "www.loulou-ramatuelle.com" },
      { protocol: "https", hostname: "static.wixstatic.com" },
    ],
  },
};

export default nextConfig;
