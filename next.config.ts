/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nxfepetnabafrqurgsir.supabase.co",
      },
    ],
  },
};

module.exports = nextConfig;