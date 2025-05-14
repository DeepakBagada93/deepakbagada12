
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true, // Added to disable image optimization for static export
    remotePatterns: [
      // picsum.photos pattern removed
    ],
  },
};

export default nextConfig;
