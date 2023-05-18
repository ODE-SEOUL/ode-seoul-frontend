import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import course_data from "../../data/course-data";

const Main2 = () => {
    return (
      <>
        <FlexContainer>
            <Title>
                <span>위치기반으로 코스를 추천해드릴게요 </span>
                <img className='ml-20' src='../assets/img/marker.png' width='35px'></img> 
                <sup>서울시 강서구</sup>
            </Title>
            
            <Circle> more</Circle>
        </FlexContainer>
        
        <FlexContainer>
            <div className='row col-lg-12 mb-100'>
                <div className="row">
                    {course_data.slice(0, 3).map((item) => {
                    const { id, img, title, time, distance, tag} = item;
                    return <div key={id} className="col-lg-4 col-sm-12">
                            <Card>
                                <div className="">
                                    <Img src={img} width="100%" />
                                </div>
                                <div className="">
                                    <Body>{title}</Body>
                                    <SubBody>{time}</SubBody>
                                    <SubBody>{distance}</SubBody>
                                </div>
                                <div className="row-center mt-20">
                                    <Tag>{tag[0]}</Tag>
                                    <Tag>{tag[1]}</Tag>
                                    <Tag>{tag[2]}</Tag>
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

const Tag = styled.div`
  font-size: 15px;
  font-weight: 200;
  font-family: var(--font-secondary);
  text-align: center;
  border-radius: 20px; 
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
  padding: 10px;
  width: 5rem;
  margin: 10px;
  
  @media screen and (max-width: 768px) {
    font-size: 10px;
    font-weight: 100;
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
  padding-bottom: 25px;
  @media screen and (max-width: 768px) {
    flex-direction: row;
    width: 90%;
  }
`
