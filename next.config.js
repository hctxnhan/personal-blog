/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com']
  },
  experimental: {
    mdxRs: true
  }
};

const withMDX = require('@next/mdx')();

module.exports = withMDX(nextConfig);
