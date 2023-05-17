import React, { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import category_data from "../../data/category-data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

interface Category {
  category_id: number;
  category: string;
}

const Main2: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<number>(1);

  const handleCategoryClick = (categoryId: number) => {
    setSelectedCategory(categoryId);
  };

  const filteredItems: Category[] = category_data.filter(
    (item: Category) => item.category_id === selectedCategory
  );

  const category_list: string[] = [
    '#볼거리가 많은',
    '#데이트 코스',
    '#자연을 즐기는',
    '#러닝',
    '#간단한 산책',
    '#마음정리 할 때',
  ];

  return (
    <>
      <FlexContainer>
        <Title>
          <span>카테고리 별로 서울을 걸어봐요! </span>
        </Title>
        <Circle> more</Circle>
      </FlexContainer>

      <FlexContainer className='pr-50 pl-50'>
        {category_list.map((category: string, index: number) => (
          <CategoryButton
            isSelected={selectedCategory === index + 1}
            onClick={() => handleCategoryClick(index + 1)}
            key={index}
          >
            {category}
          </CategoryButton>
        ))}
        <Circle><FontAwesomeIcon icon={faAngleRight} size="2x"/></Circle>
      </FlexContainer>

      <FlexContainer>
        <div className='row col-lg-12 mb-100'>
          <div className="row">
            {filteredItems.slice(0, 3).map((item: Category) => {
              const { id, img, title, content, location } = item;
              return (
                <div key={id} className="col-lg-4 col-sm-12">
                  <Card>
                    <div className="">
                      <Img src={img} width="100%" />
                    </div>
                    <div className="">
                      <Body>{title}</Body>
                    </div>
                    <div className="">
                      <SubBody>{location}</SubBody>
                      <SubBody>{content}</SubBody>
                    </div>
                  </Card>
                </div>
              );
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

const Circle = styled.div`
  font-weight: 100;
  font-family: var(--font-secondary);
  border: 1px solid var(--color-darkgreen);
  font-size: 20px;
  border-radius: 100%;
  padding: 10px;
  width: 45px;
  height: 45px;
  text-align: center;

  border: 1px solid #D9D9D9;
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));

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

const CategoryButton = styled.div<{ isSelected: boolean; onClick?: () => void }>`
  background-color: 'white';
  font-weight: ${({ isSelected }) => (isSelected ? '300' : '100')};
  font-family: var(--font-secondary);
  border: none;
  font-size: 18px;
  border-radius: 10px;
  padding: 10px;
  width: 130px;
  height: 40px;
  text-align: center;
  cursor: pointer;
  line-height: 40px;

  &:nth-of-type(1) {
    box-shadow: 4px 4px 10px rgba(205, 180, 219, 0.5);
    color: rgb(205, 180, 219)
  }

  &:nth-of-type(2) {
    box-shadow: 4px 4px 10px rgba(255, 195, 160, 0.5);
    color: rgb(255, 195, 160);
  }

  &:nth-of-type(3) {
    box-shadow: 4px 4px 10px rgba(255, 175, 204, 0.5);
    color: rgb(255, 175, 204);
  }

  &:nth-of-type(4) {
    box-shadow: 4px 4px 10px rgba(189, 224, 254, 0.5);
    color: rgb(189, 224, 254);
  }

  &:nth-of-type(5) {
    box-shadow: 4px 4px 10px rgba(200, 230, 201, 0.5);
    color: rgb(200, 230, 201);
  }

  &:nth-of-type(6) {
    box-shadow: 4px 4px 10px rgba(255, 224, 172, 0.5);
    color: rgb(255, 224, 172);
  }


  @media screen and (max-width: 768px) {
    width: 100px;
    font-size: 15px;
    float: right;
  }
`;