const { withContentlayer } = require("next-contentlayer2");

import("./env.mjs");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
    ],
  },
  experimental: {
    serverComponentsExternalPackages: ["@prisma/client"],
  },

  /*
  // Existing redirects (commented out)
  async redirects() {
    return [];
  },
  */

  // New Redirect: Redirect from root (/) to /coming-soon
  async redirects() {
    return [
      {
        source: "/",
        destination: "/coming-soon",
        permanent: false,
      },
    ];
  },
};

module.exports = withContentlayer(nextConfig);
