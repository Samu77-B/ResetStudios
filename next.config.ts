import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Temporary while Open Day is the public homepage. Remove to restore /home and /founders.
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
