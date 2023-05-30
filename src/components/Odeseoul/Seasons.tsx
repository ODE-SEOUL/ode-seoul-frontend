import React, {useState} from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import activity_data from "../../data/stamp-data";

const Main3 = () => {

  const [categories, setCategories] = useState<Array<boolean>>(
    [true, ...Array(5).fill(false)],
  );

  // console.log(categories);

    return (
      <>

      
        
            <Title>
                오디서울의 사계절
            </Title>
            <SubTitle>오디서울이 그린 사계절 풍경의 대한민국, 서울입니다.</SubTitle>
      
        
        <FlexContainer >
            
                <div className="row" style={{display: 'flex', flexWrap: 'wrap'}}>
                    <div className='col-lg-3'><SImg src="../assets/img/breadcrumb/봄.png"></SImg></div>
                    <div className='col-lg-3'><SImg src="../assets/img/breadcrumb/여름.png"></SImg></div>
                    <div className='col-lg-3'><SImg src="../assets/img/breadcrumb/가을.png"></SImg></div>
                    <div className='col-lg-3'><SImg src="../assets/img/breadcrumb/겨울.png"></SImg></div>
                </div>
           
        </FlexContainer>
      </>
    );
  };
  

export default Main3;

  
  
const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  border: 2px solid #eee;
  border-radius: 10px;
  width: 80%;
  margin: auto;
  padding: 20px;
  height: 250px;

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
  margin-top: 100px;
  font-family: var(--font-secondary);
  text-align: left;

  @media screen and (max-width: 768px) {
    font-size: 25px;
    font-weight: 200;
  }
`;
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


const SImg = styled.img`
    width: 280px;
`;

