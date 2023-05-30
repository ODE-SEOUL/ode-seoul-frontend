import React, {useState} from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import stamp_data from "../../data/stamp-data";

const Main3 = () => {

  const [categories, setCategories] = useState<Array<boolean>>(
    [true, ...Array(5).fill(false)],
  );

  // console.log(categories);

    return (
      <>

            <Title>
                오디서울의 스탬프
            </Title>
            <SubTitle>
                오디서울에서 활동을 모든 워커들에게 서울의 자치구를 담은 스탬프를 드립니다.
            </SubTitle>
        
            <Container>
       
              <div className='row col-lg-12 mb-100' style={{display: 'flex', flexWrap: 'wrap', }}>
                <div className="row" style={{display: 'flex', flexWrap: 'wrap'}}>
                    {stamp_data.map((item) => {
                    const { id, gugun, description } = item;
                  
                    return (
                      <div key={id} className="col-lg-3 col-sm-12">
                        <Card>
                          <Circle >
                            <Img src={`../assets/img/stamps/${gugun}.svg`} ></Img>
                          </Circle>
                          <div className='row' style={{height: "50px", display: 'flex', flexWrap: 'wrap'}}>
                            <Body>{gugun}</Body>
                            <SubBody>{description}</SubBody>
                          </div>
                        </Card>
                      </div>
                    );
                  })}
                </div>
              </div>
            
          </Container>

        
      </>
    );
  };
  

export default Main3;

  
  
const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Container = styled.div`
  border: 2px solid #eee;
  border-radius: 10px;
  font-family: var(--font-secondary);
  font-weight: 200;
  padding: 15px;
  width: 80%;
  margin: auto;
`;

const Img = styled.img`
width: 200px;
height: 200px;

`;


const Body = styled.div`
color: rgb(108, 128, 75); 
  font-size: 25px;
  font-weight: 500;
  font-family: var(--font-secondary);
  text-align: center;
`;

const Circle = styled.div`
  object-fit: cover;
  font-size: 20px;
  border-radius: 100%;
  font-weight: 300;
  font-family: var(--font-secondary);
  margin-bottom: 15px;
  text-align: center;
  padding: 5px;
`;


const SubBody = styled.div`
  font-size: 20px;
  font-weight: 100;
  font-family: var(--font-secondary);
  text-align: left;
  text-align: center;

`;


const Card = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;
  background: #fff;
`



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
