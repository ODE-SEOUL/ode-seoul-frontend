import React, {useState} from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import activity_data from "../../data/stamp-data";

const Logo = () => {

  const [categories, setCategories] = useState<Array<boolean>>(
    [true, ...Array(5).fill(false)],
  );

  // console.log(categories);

    return (
      <>
        <Title >
                오디서울 소개
            </Title>
            <SubTitle>푸르던의 생태문화길 추천 서비스 오디서울입니다.</SubTitle>
        <FlexContainer>
          <div className='col-lg-7'>
            <Body>
                생태문화길을 걸으며, 서울을 만나다. <br /> 오디서울입니다.
            </Body>
          </div>
       
          <div className='col-lg-5'>
            <Img src='../assets/img/logo.svg'></Img>
          </div>
            
            
        </FlexContainer>
        
  
      </>
    );
  };
  

export default Logo;

  
const SubTitle = styled.div`
  font-size: 20px;
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


const Body = styled.div`
  color: rgb(108, 128, 75); 
  font-size: 25px;
  font-weight: 500;
  font-family: var(--font-secondary);
`;

  
const FlexContainer = styled.div`

  display: flex;
  border-radius: 15px;
  border: 1px solid rgb(108, 128, 75);
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  margin:  30px 120px;
  padding: 40px;

  @media screen and (max-width: 768px) {
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Title = styled.div`
  color: rgb(108, 128, 75);
  font-size: 30px;
  font-weight: 500;
  width: 80%;
  margin: auto;
  margin-top: 50px;
  font-family: var(--font-secondary);
  text-align: left;

  @media screen and (max-width: 768px) {
    font-size: 25px;
    font-weight: 200;
  }
`;

const Img = styled.img`
    objectFit: "cover";
    margin: auto;
    width: 80%;
`;


