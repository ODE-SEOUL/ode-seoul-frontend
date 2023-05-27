import React from 'react';
import styled from '@emotion/styled';
import Navbar from '../common/Nav/Nav';
import MypageLayout from './MypageLayout';
import Footer from '../common/Footer/Footer';
import { userAtom } from '../../states/UserAtom';
import { atom, useRecoilValue } from 'recoil';
import { useRouter } from "next/router"
import Error from '../Error';

const Mypage = () => {
  const user = useRecoilValue(userAtom);

  return (
    <>
      <Navbar />
      {user ? (
        <>
          <Box />
          <Wrapper>
            <MypageLayout />
          </Wrapper>
        </>
      ) : (
        <Error />
      )}
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
