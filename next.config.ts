/** @type {import('next').NextConfig} */
const nextConfig = {
  //basepath: '/wordpress',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'alumialab.com.br',
        port: '',
        pathname: '/**',
      },
    ],
    // domains: ['alumia.local', 'localhost', 'alumialab.com.br'],
  },
};

module.exports = nextConfig;
