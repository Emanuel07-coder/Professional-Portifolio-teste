/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Força a Vercel a ignorar erros de tipagem no build
    ignoreBuildErrors: true,
  },
  eslint: {
    // Força a Vercel a ignorar avisos de lint no build
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
