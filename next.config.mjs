/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'https://flowbite.com',
            port: '',
            pathname: '/*',
          },
        ],
      },
};

export default nextConfig;
