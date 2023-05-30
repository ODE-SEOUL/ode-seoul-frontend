import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import CourseForMain from '../CourseList/Course';
import Link from 'next/link';

const Main2 = () => {
  return (
    <>
      <FlexContainer>
        <Title>
            <span>카테고리로 서울의 생태문화길을 추천해드릴게요. </span>
        </Title>
        <Circle> 
          <Link href="/course" >
            more
          </Link>
        </Circle>
      </FlexContainer>
      <Container>
        <CourseForMain limit= {5} />
      </Container>
    </>
  );
};

export default Main2;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
  margin: 0px 100px;

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
    font-size: 25px;
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
  }

  :hover{
    background-color: rgb(108, 128, 75)
  }

`;