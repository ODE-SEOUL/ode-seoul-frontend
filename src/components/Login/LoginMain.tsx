import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const LoginMain = () => {
  return (
    <>
        <Header>로그인 또는 회원가입</Header>
        <Img src='../assets/img/logo.svg'></Img>
        <div>오디서울에 오신것을 환영합니다!</div>
        <Footer>
            {/* 일단 이미지로 대체하고 api 구현시, 버튼 수정 예정 */}
            <KakaoLogin src='../assets/img/kakao_login.png' />
        </Footer>
    </>
  );
};

export default LoginMain;

const Header = styled.div`
    font-size: 20px;
    width: 100%;
    font-family: var(--font-secondary);
    font-weight: 300;
    text-align: center;
    padding: 20px;
    border-bottom: solid 1px #aaa;
`

const Img = styled.img`
    width: 60%;
`

const KakaoLogin = styled.img`
`

const Footer = styled.div` 
    font-size: 20px;
    width: 80%;
    font-family: var(--font-secondary);
    font-weight: 300;
    text-align: center;
    padding: 20px;
    border-top: solid 1px #aaa;
`