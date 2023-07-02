/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', '127.0.0.1']
  },
  experimental: {
    mdxRs: true
  }
};


module.exports = nextConfig;
