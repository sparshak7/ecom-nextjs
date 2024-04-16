/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fddtyqsqxonfsknhefav.supabase.co",
      },
    ],
  },
};

export default nextConfig;
