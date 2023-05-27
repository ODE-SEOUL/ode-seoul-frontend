import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Nav from './common/Nav/Nav';
import Footer from './common/Footer/Footer';

const App = () => {
  return (
    <>
      <Nav />
      <Container>
            <div className='col-lg-12 mt-100 mb-100'>
            
                <Title>404</Title>
                <SubTitle>다시 한 번 시도하거나, 관리자에게 문의주세요.</SubTitle>
                <Img src="../assets/img/logo.svg" width="30%"></Img>
                
            </div>
      </Container> 
      <Footer />
    </>
  );
};

export default App;

const Container = styled.div`
    font-size:45px;
    margin: auto;
    font-weight: 200;
    font-family: var(--font-secondary); 
    text-align: center;
`;

const Img = styled.img`

`;

const Title = styled.div`
    font-size: 150px;
    width: 100%;
    font-family: var(--font-secondary);
    font-weight: 300;
    color: rgb(108, 128, 75);
    font-weight: 500;

`;
const SubTitle = styled.div`
    font-size: 20px;
    width: 100%;
    font-family: var(--font-secondary);
    font-weight: 300;
    color: rgb(108, 128, 75);
    font-weight: 500;
`;