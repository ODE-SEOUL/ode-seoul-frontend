import React from "react";
import ReactDOM from 'react-dom';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface ModalProps {
  isShowing: boolean;
  hide: () => void;
  children: React.ReactNode;
}

const Modal = (props: ModalProps) =>{

  const handleLogin = () => {
    // console.log('kakao ready!')

    const REDIRECT_URI =  process.env.NEXT_PUBLIC_REDIRECT_URI;
    const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID

    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    window.location.href = KAKAO_AUTH_URL;
}

  return props.isShowing
    ? ReactDOM.createPortal(
        <OutSide>
          <ModalLayOut>
            <div>
              <Box>
                  <CloseButton
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={props.hide}
                  >
                    <span aria-hidden="true">&times;</span>
                  </CloseButton>
              </Box>
              
                
              
            </div>
            <Img1 src="../assets/img/logo.svg" ></Img1>
              <Title>로그인이 필요한 서비스입니다.</Title>
              <Img2 onClick={handleLogin} src="../assets/img/kakao_login.png"></Img2>
            
          </ModalLayOut>
        </OutSide>,
        document.body
      )
    : null;
}

  

export default Modal;
const Img1 = styled.img`
  margin: 10px 100px ;
  width:150px;
`;
const Img2 = styled.img`
  margin: 20px 80px ;
  width:200px;
`;
const OutSide = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  overflow-y: auto;
  background-color: rgba(0, 0, 0, 0.2);
`;

const Title = styled.div`
    font-size: 20px;
    
    width: 100%;
    margin: auto;
    font-family: var(--font-secondary);
    font-weight: 300;
    color: #000;
    font-weight: 500;
    text-align: center ;
`;

const ModalLayOut = styled.div`
  width: 350px;
  height:300px;
  margin: auto;
  background-color: white;
  box-sizing: border-box;
  border-radius: 5%;
  overflow: hidden;
  box-shadow: 0 2px 30px 0 rgba(0, 0, 0, 0.2);
`;


const Box = styled.div`
   width: 100%;
    background: rgb(108, 128, 75);
    height: 80px;
   `;

const CloseButton = styled.div`
  margin: 10px;
  float: right;
  cursor: pointer;
`;

