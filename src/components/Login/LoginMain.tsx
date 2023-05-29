import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const LoginMain = () => {

    const handleLogin = () => {
        // console.log('kakao ready!')

        const REDIRECT_URI =  process.env.NEXT_PUBLIC_REDIRECT_URI;
        const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID
    
        const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
        window.location.href = KAKAO_AUTH_URL;
    }

  return (
    <>
        <Header>로그인 또는 회원가입</Header>
        <Container>
            <Img src='../assets/img/logo.svg'></Img>
            <div>오디서울에 오신것을 환영합니다!</div>
        </Container>
        
        <Footer>
            {/* 일단 이미지로 대체하고 api 구현시, 버튼 수정 예정 */}
            <Login onClick={handleLogin}>
                <KakaoLogin src='../assets/img/kakao_login.png' />
            </Login>
            
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
    padding-bottom: 20px;
    border-bottom: solid 1px #aaa;
`

const Img = styled.img`
    width: 80%;
`

const KakaoLogin = styled.img`
width: 80%;
margin: auto;
`

const Login = styled.div`
cursor: pointer;
    border: none;
    background: none;
  
`

const Footer = styled.div` 
    font-size: 20px;
    font-family: var(--font-secondary);
    font-weight: 300;
    text-align: center;
    padding: 20px;
`

const Container = styled.div`
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  margin: 80px;
  text-align: center;
  font-family: var(--font-secondary);
  font-weight: 200;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
