import React, {useState} from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import activity_data from "../../data/activity-data";

const Main3 = () => {

  const [categories, setCategories] = useState<Array<boolean>>(
    [true, ...Array(5).fill(false)],
  );

  // console.log(categories);

    return (
      <>
        <FlexContainer>
            <Title>
                <span>이런 활동들은 어떤가요? </span>
            </Title>
            
            <Circle> more</Circle>
        </FlexContainer>
        
        <FlexContainer>
            <div className='row col-lg-12 mb-100'>
                <div className="row" style={{display: 'flex', flexWrap: 'wrap'}}>
                    {activity_data.slice(0, 3).map((item) => {
                    const { id, img, title, dest, useDate, bookDate } = item;
                    return <div key={id} className="col-lg-4 col-sm-12">
                            <Card>
                                <div className="">
                                    <Img src={img} width="100%" height="300px" />
                                </div>
                                <Body>{title}</Body>
                                <div className="mb-40">
                                  <FlexContainer2>
                                    <div className="col-lg-6 col-sm-12">장소명</div>
                                    <div className="col-lg-6 col-sm-12">{dest}</div>
                                  </FlexContainer2>
                                  <FlexContainer2>
                                    <div className="col-lg-6 col-sm-12">이용기간</div>
                                    <div className="col-lg-6 col-sm-12">{useDate}</div>
                                  </FlexContainer2>
                                  <FlexContainer2>
                                    <div className="col-lg-6 col-sm-12">점수기간</div>
                                    <div className="col-lg-6 col-sm-12">{bookDate}</div>
                                  </FlexContainer2>
                                </div>
                                <Circle2>예약하기</Circle2>  
                            </Card>
                        </div>
                    })}
                </div>
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
  margin: 100px;

  @media screen and (max-width: 768px) {
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const FlexContainer2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
  text-align: center;

  @media screen and (max-width: 768px) {
    margin: 30px;
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
    objectFit: "cover";
    height: 400px;
`;


const Body = styled.div`
  font-size: 19px;
  font-weight: 400;
  font-family: var(--font-secondary);
  text-align: center;
  margin: 40px;
  text-align: center;
  align-items: center;

  
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

const Circle2 = styled.div`
  font-weight: 100;
  font-family: var(--font-secondary);
  border: 1px solid rgb(108, 128, 75);
  font-size: 20px;
  border-radius: 20px;
  padding: 10px;
  width: 200px;
  text-align: center;
  margin: auto;

  background-color: rgb(171, 184, 104);

  @media screen and (max-width: 768px) {
    width: 100px;
    font-size: 15px;
    float: right;
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
