import React from 'react';
import styled from '@emotion/styled';
import Navbar from '../common/Nav/Nav';
import MypageLayout from './MypageLayout';
import Footer from '../common/Footer/Footer';

const Mypage = () => {
  return (
    <>
      <Navbar />
      <Box />
      <Wrapper>
        <MypageLayout />
      </Wrapper>
      <Footer />
      
    </>
  );
};

export default Mypage;

const Wrapper = styled.div`
    width: 80%;
    margin: auto;
    margin-top: 100px;
`;

const Box = styled.div`
    width: 100%;
    background: rgba(171, 184, 104, 0.8);
    height: 200px;
`;
