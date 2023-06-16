import React, { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import CommunityItem from '../Community/CommunityItem';
import Link from 'next/link';
const Main4 = () => {

  return( 
    <>
      <FlexContainer>
        <Title>
            <span>같이 갈 사람을 모집해요. </span>
        </Title>
        <Circle> 
          <Link href="/community" >
            more
          </Link>
        </Circle>
      </FlexContainer>

      <Container>
        <CommunityItem limit={4} isMain={true} />
      </Container>
      
    </>
  
  )
};

export default Main4;

  
const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  margin: 200px 100px 0px 100px;

  @media screen and (max-width: 768px) {
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Container = styled.div`
  margin: 10px;

`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 500;
  font-family: var(--font-secondary);
  text-align: left;
  color: rgb(108, 128, 75);

  @media screen and (max-width: 768px) {
    font-size: 20px;
    font-weight: 200;
  }
`;
const Circle = styled.div`
  font-weight: 100;
  font-family: var(--font-secondary);
  border: 1px solid rgb(108, 128, 75);
  font-size: 20px;
  border-radius: 20px;
  padding: 10px;
  width: 200px;
  text-align: center;

  @media screen and (max-width: 768px) {
    width: 100px;
    font-size: 15px;
    float: right;
    margin: 10px;
  }

  :hover{
    background-color: rgb(108, 128, 75)
  }

`;