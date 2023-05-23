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
  env:{
    KAKAO_MAP_KEY:process.env.KAKAO_MAP_KEY,
  }
  
};

module.exports = nextConfig
