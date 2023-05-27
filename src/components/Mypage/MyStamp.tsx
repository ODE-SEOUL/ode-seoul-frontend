import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

const MyStamp = () => {
  
  return (
    <>
     스탬프

    </>
    
  );
};


export default MyStamp;

const Container = styled.div`
  border: 1px solid #eee;
  border-radius: 10px;
  font-family: var(--font-secondary);
  font-weight: 200;
`;

const FlexContainer = styled.div`
    display: flex;
    margin: 30px 0px; 

`;

const Small = styled.div`
  font-size: 13px;
  margin-left: 20px;
  line-height: 30px;
  font-weight: 300;
  font-family: var(--font-secondary);
  text-align: left;

  @media screen and (max-width: 768px) {
    font-size: 25px;
    font-weight: 200;
  }
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
  font-family: var(--font-secondary);
  margin-bottom: 15px;
  margin: 30px 30px 20px 30px; 
`;

const Circle = styled.div`

  font-size: 20px;
  background: rgb(171, 184, 104);
  color: #fff;
  border-radius: 10px;
  font-weight: 300;
  font-family: var(--font-secondary);
  margin-bottom: 15px;
  margin: auto;
  margin-top: 30px;
  width: 150px;
  text-align: center;
  padding: 5px;
`;


const SubTitle = styled.div`
  font-size: 15px;
  font-weight: 100;
  font-family: var(--font-secondary);
  text-align: left;
  margin: 20px 30px; 
`;


const Card = styled.div`
  width: 100%;
  height: 200px;;
  overflow: hidden;
  background: #fff;
  border-bottom: 1px solid #eee;
`


