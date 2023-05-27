import React from 'react';
import { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import '../styles/index.css';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Script from 'next/script';

const queryClient = new QueryClient();
declare global { // Kakao 함수를 전역에서 사용할 수 있도록 선언
  interface Window {
    kakao: any;
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  function kakaoInit() { // 페이지가 로드되면 실행
    window.kakao.init(process.env.KAKAO_MAP_KEY);
    console.log(window.kakao.isInitialized());
  }

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Component {...pageProps} />
        <Script
        src='"https://developers.kakao.com/sdk/js/kakao.js"'
        onLoad={kakaoInit} 
      ></Script>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default MyApp;
