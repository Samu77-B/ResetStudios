import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Temporary while the public homepage is the holding page. Remove to restore /home and /founders.
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: false,
      },
      {
        source: "/founders",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
