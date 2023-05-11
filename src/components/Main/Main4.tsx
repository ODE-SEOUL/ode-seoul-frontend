import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import community_data from "../data/community-data";

const Main2 = () => {
    return (
      <>
        <FlexContainer>
            <Title>
                <span>우리 같이 생태문화길을 걸어요 </span>
            </Title>
            
            <Circle> more</Circle>
        </FlexContainer>
        
        <FlexContainer>
            <div className='row col-lg-12 mb-100'>
                <div className="row">
                    {community_data.slice(0, 6).map((item) => {
                    const { id, img, title, writer, time, dest } = item;
                    return <div key={id} className="col-lg-4 col-sm-12">
                            <Card>
                                <div className="">
                                    <Img src={img} width="100%" height="200px" />
                                </div>
                                <div className="">
                                    <Body>{title}</Body>
                                    <SubBody>{dest}</SubBody>
                                    <SubBody>{time}</SubBody>
                                </div>
                            </Card>
                        </div>
                    })}
                </div>
            </div>
        </FlexContainer>

      </>
    );
  };
  

export default Main2;

  
  
const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  margin: 100px;

  @media screen and (max-width: 768px) {
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
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

const Img = styled.img`
    objectFit: "cover"
    height: 200px;
`;


const Body = styled.div`
  font-size: 30px;
  font-weight: 300;
  font-family: var(--font-secondary);
  text-align: center;
  margin: 20px;
`;

const SubBody = styled.div`
  font-size: 15px;
  font-weight: 100;
  font-family: var(--font-secondary);
  text-align: center;
  margin: 10px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
    font-weight: 200;
  }
`;


const Circle = styled.div`
  font-weight: 100;
  font-family: var(--font-secondary);
  border: 1px solid var(--color-darkgreen);
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

`;

const Card = styled.div`

  width: 70%;
  height: auto;
  margin: auto;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 25px;

  @media screen and (max-width: 768px) {
    flex-direction: row;
    width: 90%;
  }
`
