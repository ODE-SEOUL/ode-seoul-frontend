/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `https://ode-seoul.fly.dev/:path*`,
      },
    ];
  },
  env:{
    KAKAO_MAP_KEY:process.env.KAKAO_MAP_KEY,
  }
  
};

module.exports = nextConfig
