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
            <SubTitle>푸르던의 서울시 생태문화길 추천 및 커뮤니티 오디서울입니다.</SubTitle>
        <FlexContainer>
          <div className='col-lg-7'>
            <Body>
                우리 '오디서울'은 <br />지친 일상속에서 힐링을 원하는 서울시민을 향해 <br />늘 품어주고 열려있는 자연을 담고 있습니다.

            </Body>
            <SubBody>
                늘어진 글자의 형태로 길게 이어진 서울시의 산책로를 형상화하고,<br />
                '오'자는 물음표(?)로 서울 시민의 궁금증을 표현함과 동시에<br />
                오디서울과 함께 하는 산책로의 시작점을 의미합니다.
            </SubBody>
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

const SubBody = styled.div`
  font-size: 15x;
  font-weight: 200;
  font-family: var(--font-secondary);
  text-align: left;
  margin: 20px 0px;
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


