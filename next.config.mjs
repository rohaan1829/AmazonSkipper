/** @type {import('next').NextConfig} */

const nextConfig = {
  eslint: {
    // Temporarily disable ESLint during builds due to compatibility issues
    // with ESLint 9.x and Next.js 15.x
    ignoreDuringBuilds: true,
  },
  images: {
    // Serve AVIF first (best compression), fall back to WebP, then origin.
    // Typical savings vs. source PNG: 5-15x.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
