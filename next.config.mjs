/** @type {import('next').NextConfig} */

const nextConfig = {
  eslint: {
    // Temporarily disable ESLint during builds due to compatibility issues
    // with ESLint 9.x and Next.js 15.x
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
