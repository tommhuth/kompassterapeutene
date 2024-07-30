/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    imageSizes: [64, 96, 128, 256],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2200],
  },
  headers() { 
    return [
      {
        source: "/(.*?)",
        has: [
          {
            type: "host",
            value: "kompassterapeutene.vercel.app",
          },
        ],
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
