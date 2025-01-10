import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io', 'i.pinimg.com', 'via.placeholder.com'], // Allowed domains
  },
};

export default nextConfig;
