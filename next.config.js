/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    domains: ['images.unsplash.com', 'picsum.photos'],
  },
};

module.exports = nextConfig;

