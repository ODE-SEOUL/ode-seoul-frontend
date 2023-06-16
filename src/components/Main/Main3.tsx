import React, {useState} from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import ServiceForMain from '../Service/Service';

const Main3 = () => {


  return( 
  <>
    <FlexContainer>
      <Title>
          <span>더해서 다양한 체험 정보를 확인해보세요.</span>
      </Title>
      <Circle> 
          <Link href="/service" >
            more
          </Link>
        </Circle>
    </FlexContainer>
    <ServiceForMain limit={3}/>
  </>

)
  };
  

export default Main3;

  
  
const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 200px 100px 0px 100px;
  

  @media screen and (max-width: 768px) {
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
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




const Card = styled.div`

  width: 80%;
  height: 630px;
  margin: auto;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  overflow: hidden;
  padding-bottom: 25px;
  
  @media screen and (max-width: 768px) {
    flex-direction: row;
    width: 90%;
  }
`
