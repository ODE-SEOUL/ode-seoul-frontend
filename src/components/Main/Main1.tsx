import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const Main1 = () => {
  return (
    <>
      <Container>
            <div className='col-lg-12 mt-100 mb-100'>
                <div>생태문화길을 걸으며,</div>
                <div  className='mb-50'>서울을 느끼다. </div>
                <img src='../assets/img/logo.svg' width="50%"></img>
            </div>
      </Container>
    </>
  );
};

export default Main1;

const Container = styled.div`
    font-size:45px;
    margin: auto;
    font-weight: 200;
    font-family: var(--font-secondary); 
    text-align: center;
`;