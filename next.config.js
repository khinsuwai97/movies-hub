/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.movienewz.com',
        port: '',
        pathname: '/img/films/poster-holder.jpg',
      },
    ],
  },
};

module.exports = nextConfig;
