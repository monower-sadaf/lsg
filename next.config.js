/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    IMPORTANT_LINK_BASE_URL: "https://lsg-portal-api.mysoftheaven.com",
    // STORAGE_URL: "http://172.06.10.80/storage/",
    STORAGE_URL: "https://lsg-portal-api.mysoftheaven.com/storage/",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lsg-portal-api.mysoftheaven.com",
      },
    ],
  },
};

module.exports = nextConfig
