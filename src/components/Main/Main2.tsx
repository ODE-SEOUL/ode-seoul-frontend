import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const Main2 = () => {
  return (
    <>
      <Container>
        <Title>
            <span>이런 활동들은 어떤가요? </span>
        </Title>
      </Container>
    </>
  );
};

export default Main2;

const Container = styled.div`
    font-size:45px;
    margin: auto;
    font-weight: 200;
    font-family: var(--font-secondary); 
    text-align: center;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 300;
  font-family: var(--font-secondary);
  text-align: left;

  @media screen and (max-width: 768px) {
    font-size: 25px;
    font-weight: 200;
  }
`;

