import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Old misspelled domain (nashazgroup.com, with or without www) → permanent 308 to the real site.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "(www\\.)?nashazgroup\\.com" }],
        destination: "https://www.nahsazgroup.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
