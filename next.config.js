/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // svg관련
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  // cors관련
  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/:path*',
  //       destination: `https://ode-seoul.fly.dev/:path*`,
  //     },
  //   ];
  // },
  // env 못읽는거
  env:{
    KAKAO_MAP_KEY:process.env.KAKAO_MAP_KEY,
    NEXT_PUBLIC_CLIENT_ID:process.env.NEXT_PUBLIC_CLIENT_ID,
    NEXT_PUBLIC_REDIRECT_URI:process.env.NEXT_PUBLIC_REDIRECT_URI,
    NEXT_PUBLIC_KAKAO_MAP_KEY:process.env.NEXT_PUBLIC_KAKAO_MAP_KEY,

  },
  // vercel 환경변수 못읽는거
  // plugins: [
  //   new Dotenv({
  //     systemvars: true // 해당 옵션을 추가 작성
  //   }),
  // ],
  
};

module.exports = nextConfig
