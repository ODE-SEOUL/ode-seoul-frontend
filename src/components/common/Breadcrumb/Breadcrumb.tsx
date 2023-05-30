import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

type BreadcrumbProps = {
  title: string;
  subTitle: string;
  ImgId?: string;
};

const Breadcrumb = ({ title, subTitle, ImgId }: BreadcrumbProps) => {
  return (
    <>
    <Box className='row' >
      <div className='col-lg-9'>
        <Container>
          <Title>{title}</Title>
          <SubTitle>{subTitle}</SubTitle>
        </Container>
        
      </div>
      <div className='col-lg-3'>
      </div>

    </Box>
       
    </>
  );
};

export default Breadcrumb;



const Img = styled.img`
width: 50%;

`;
const Box = styled.div`
    width: 100%;
    height: 200px;
    background: rgba(171, 184, 104, 0.8);
`;

const Container = styled.div`
    padding: 50px;
`;


const Title = styled.div`
  color: rgb(108, 128, 75);
  font-size: 50px;
  font-weight: 500;
  width: 80%;
  margin: auto;
  font-family: var(--font-secondary);
  text-align: left;

  @media screen and (max-width: 768px) {
    font-size: 25px;
    font-weight: 200;
  }
`;
const SubTitle = styled.div`
  font-size: 15px;
  font-weight: 200;
  width: 80%;
  margin: 10px auto;
  font-family: var(--font-secondary);
  text-align: left;

  @media screen and (max-width: 768px) {
    font-size: 25px;
    font-weight: 200;
  }
`;
