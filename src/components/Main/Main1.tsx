import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const Main1 = () => {
  return (
    <>
      <Container>
            <ImgContainer className='col-lg-12 mb-100'>
              <TitleContainer>
                <Title>생태문화길을 걸으며,</Title>
                <Title>서울을 느끼다.</Title>
              </TitleContainer>
              
                <Img src="../assets/img/main/2.svg" ></Img>
            </ImgContainer>
      </Container>
    </>
  );
};

export default Main1;

const Container = styled.div`
    font-size:45px;
    right: 0px;

    margin-bottom: 30px;
    font-weight: 200;
    font-family: var(--font-secondary); 
`;

const ImgContainer = styled.div`
height: 668px;

@media screen and (max-width: 768px) {
  height: auto;
}
`;

const TitleContainer = styled.div`
margin: 120px 20px 30px 120px;

@media screen and (max-width: 768px) {
  margin: 80px 20px 180px 30px;
}
`;

const Img = styled.img`
position: absolute;
right: 0;
top: -100px;
width:85%;
z-index: -1;

@media screen and (max-width: 768px) {
  top: 100px;
  width:100%;
}

`;

const Title = styled.div`
  font-size: 45px;
  font-family: var(--font-secondary);
  

  @media screen and (max-width: 768px) {
    font-size: 25px;
    font-weight: 200;
    
  }
`;